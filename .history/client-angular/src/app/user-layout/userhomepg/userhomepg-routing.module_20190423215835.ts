import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseromepgComponent } from './userhomepg.component';

const routes: Routes = [
    {
        path: '', component: HomepgComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepgRoutingModule {
}
