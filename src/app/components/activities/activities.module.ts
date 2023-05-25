import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ActivitiesComponent } from 'app/components/activities/activities.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'

const activitiesRoutes: Route[] = [
    {
        path     : '',
        component: ActivitiesComponent
    }
];

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports     : [
        RouterModule.forChild(activitiesRoutes),
        CommonModule,
        FormsModule,
        MatTableModule
    ]
})
export class ActivitiesModule
{
}
