import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';
import { Router } from '@angular/router';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { SelecteventsService } from '../../../myservices/selectevents.service';

@Component({
  selector: 'app-all-volunteers',
  templateUrl: './all-volunteers.component.html',
  styleUrls: ['./all-volunteers.component.scss']
})
export class AllVolunteersComponent implements OnInit {
  id: string;
  events: any = [];
  eventsUnchanged: any = [];
  modalRef: BsModalRef;
  config = {
    animated: true

  };
 volunteersun: any = [];
 volunteers: any = [];
 user: any;
 event: any;
 _id: any;
 volunteers2:any =[];

  constructor(private eventservice: EventService, private router: Router,private modalService: BsModalService, private selectservice: SelecteventsService) { }

  ngOnInit() {
    const data = localStorage.getItem('user');
    const value = JSON.parse(data);
    this.id = value.id
    this.eventservice.getEventbyOrganization(this.id).subscribe(data => {
      this.eventsUnchanged = data;
      this.events = this.eventsUnchanged.map(item => ({
        _id: item._id.toString(),
        title: item.title,
        description: item.description,
        image: item.image,
        date: (item.date).substring(0, 10),
        time: (item.time).replace(/:\d{2}\s/, ' '),
        type: item.type,
        organization: item.organization
      }))
      console.log(this.events);

    });
  }

  openModal(template: TemplateRef<any>,id) {
    this.volunteersun = []
    this.volunteers2 = []
    this.volunteers =[]
    this.modalRef = this.modalService.show(template, this.config);
    this.setModalClass();
    this.selectservice.getAllEventVolunteers(id).subscribe(res =>{
      console.log(res)
      this.volunteersun = res;
      this.volunteers = this.volunteersun.map(item => ({
        id: item._id.toString(),
        userid: item.userid,
        participation: item.participation
      }))


      var i;
      for (i = 0; i < this.volunteers.length; i++) { 
      this._id = this.volunteers[i].userid;
        this.selectservice.getEventVolunteer(this._id).subscribe(resp =>{
        this.user = resp;
        this.volunteers2.push(this.user[0]);
      });
      }
    });
  }


  setModalClass() {
    this.modalRef.setClass('modal-lg');
  }

  confirm(i){
    this.event = this.volunteersun[i];
    this.selectservice.confirmParticipation(this.event);
  }



}
