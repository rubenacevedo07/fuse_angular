import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TravelsComponent } from 'app/components/travels/travels.component';
import { MatIconModule } from '@angular/material/icon';


const travelsRoutes: Route[] = [
    {
        path     : 'travels',
        component: TravelsComponent
    }
];

@NgModule({
    declarations: [
        TravelsComponent
    ],
    imports     : [
        MatIconModule,
        RouterModule.forChild(travelsRoutes)
    ]
})
export class TravelsModule
{
}
