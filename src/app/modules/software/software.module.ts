import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { SharedModule } from 'app/shared/shared.module';
import { SoftwareComponent } from './software.component';

const softwareRoutes: Route[] = [
  {
      path     : '',
      component: SoftwareComponent
  }
];

@NgModule({
    declarations: [
      SoftwareComponent
    ],
    imports     : [
        RouterModule.forChild(softwareRoutes)
    ]
})
export class SoftwareModule
{
}
