import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelecteventsService {
 
constructor(private http: HttpClient) { }

getAllEventVolunteers(id: string) {
 return this.http.get('http://localhost:3000/selectevent/geteventvolunteers' + `/${id}`);
}
getEventVolunteer(id: string) {
  return this.http.get('http://localhost:3000/selectevent/getvolunteer' + `/${id}`);
 }

 confirmParticipation(event){
   console.log(event,"event");
   return this.http.put('http://localhost:3000/selectevent/confirmparticipation/'+event._id,event).subscribe(response=>{
    console.log(response);
  });
 }

}
