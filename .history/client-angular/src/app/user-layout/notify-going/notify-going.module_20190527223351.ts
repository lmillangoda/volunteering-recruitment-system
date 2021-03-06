import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEventRoutingModule } from './view-event-routing.module';
import { PageHeaderModule } from '../../shared';
import { EditEventComponent } from './edit-event.component';

import { BarRatingModule } from 'ngx-bar-rating';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';

@NgModule({
  declarations: [EditEventComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    ViewEventRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BarRatingModule
  ]
})
export class NotModule {}
