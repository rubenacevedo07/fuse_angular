import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StudentComponent } from 'app/components/student/student.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';

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
        FormsModule,
        MatTableModule,
        MatDividerModule,
        MatListModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule,
        MatCardModule
    ]
})
export class StudentModule
{
}
