import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/components/starwars/starwars.component';
import { CommonModule } from '@angular/common';  
import { MatTableModule } from '@angular/material/table'

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
        MatTableModule
    ]
})
export class StarwarsModule
{
}
