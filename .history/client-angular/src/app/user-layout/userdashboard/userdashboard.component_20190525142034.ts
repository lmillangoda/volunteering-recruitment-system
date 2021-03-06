import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
  animations: [routerTransition()]
})
export class UserdashboardComponent implements OnInit {
   

    constructor(
        private router: Router,

        );


    ngOnInit() {}

    public viewAvailable() {
       console.log('.............clicked it.........');
       this.router.navigate(['projects']);

    }

    public viewUpcomming() {
        console.log('.............clicked UPCOMMING.........');
        this.router.navigate(['upcomming']);
     }

     public viewHistory() {
        console.log('.............clicked HISTORY.........');
        this.router.navigate(['history']);
     }
     public viewOrganization() {
        this.router.navigate(['organizations']);
     }

}
