import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelecteventsService {
 
constructor(private http: HttpClient) { }

getAllEventVolunteers(id: any) {
  return this.http.get('http://localhost:3000/selectevent/geteventvolunteers' + id);
}

}
