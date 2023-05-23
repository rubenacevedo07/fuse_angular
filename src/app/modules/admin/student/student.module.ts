import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StudentComponent } from 'app/modules/admin/student/student.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
const studentRoutes: Route[] = [
    {
        path     : '',
        component: StudentComponent
    }
];

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports     : [
        RouterModule.forChild(studentRoutes),
        CommonModule,
        FormsModule
    ]
})
export class StudentModule
{
}
