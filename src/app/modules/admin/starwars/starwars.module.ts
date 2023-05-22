import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/modules/admin/starwars/starwars.component';

const starwarsRoutes: Route[] = [
    {
        path     : 'starwars',
        component: StarwarsComponent
    }
];

@NgModule({
    declarations: [
        StarwarsComponent
    ],
    imports     : [
        RouterModule.forChild(starwarsRoutes)
    ]
})
export class StarwarsModule
{
}
