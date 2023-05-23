import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/modules/admin/starwars/starwars.component';
import { CommonModule } from '@angular/common';  

const starwarsRoutes: Route[] = [
    {
        path     : '',
        component: StarwarsComponent
    }
];

@NgModule({
    declarations: [
        StarwarsComponent
    ],
    imports     : [
        RouterModule.forChild(starwarsRoutes),
        CommonModule,
    ]
})
export class StarwarsModule
{
}
