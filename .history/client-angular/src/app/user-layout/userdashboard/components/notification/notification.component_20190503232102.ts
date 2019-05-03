import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    eventId: String;
    selectevent: any;
    title: String;
    date: String;
    description: String;
    attendees: String;
    rating: String;
    organize: String;
    constructor(
        private eventservice: EventService,
    ) { }
    ngOnInit() {
       this.eventservice.$eventdetails

     // get the event id from event service 
     // (this method is very good method to transfer data between two compnents without any relation like child parents)
      .subscribe( (data) => {
        console.log('I got data in project component', data);
        this.selectevent = data;
        this.title = data.title;
        this.date = data.date;
        this.description = data.description;
        this.attendees = data.attendees;
        this.rating = data.rating;
        this.organize = data.organization;
      });

    }

    onRegisterSubmit() {
      const select = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        username: this.username,
        password: this.password,
        rpassword: this.conpassword,
        address: this.address,
        address2: this.address2,
        cntctmob: this.cntctmob,
        cntctfix: this.cntctfix,
        age: this.age,
      };

  console.log('...user..is..', user.firstname);
       // Required Fields
   if (!this.validateService.validateRegister(user)) {
     // this.alerts.setMessage('All the fields are required', 'error');
      return false;
    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      // this.alerts.setMessage('Email is not valid', 'error');
      alert('Email is not valid');
      return false;
    }
    // Register user with server
    // call the auth service and pass the user to registerUser function
    // get the responce json object from server using subscribe method. the data isa responce json
    this.authService.registerUser(user).subscribe(data => {
      console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
      if (data['success']) { // check the responce json value's success key and navigate login page
        this.router.navigate(['login']);
        alert('Registration successfully! now you can login');
        // this.alerts.setMessage('Registration successfully! now you can login', 'success');
      } else {
        this.router.navigate(['signup']);
        alert('Please signup again');
        // this.alerts.setMessage('Please signup again', 'warn');
      }
    });

  }
}

