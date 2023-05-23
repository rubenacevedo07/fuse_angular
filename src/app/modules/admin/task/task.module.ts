import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskComponent } from 'app/modules/admin/task/task.component';
import { CommonModule } from '@angular/common';  
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

const taskRoutes: Route[] = [
    {
        path     : '',
        component: TaskComponent
    }
];

@NgModule({
    declarations: [
        TaskComponent
    ],
    imports     : [
        RouterModule.forChild(taskRoutes),
        CommonModule,
        MatCardModule
    ]
    /*
    exports     : [
        TaskComponent
    ]
    */
})
export class TaskModule
{
}


