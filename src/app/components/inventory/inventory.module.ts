import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InventoryComponent } from 'app/components/inventory/inventory.component';
import { CommonModule } from '@angular/common';  
import { MatTableModule } from '@angular/material/table'

const inventoryRoutes: Route[] = [
    {
        path     : '',
        component: InventoryComponent
    }
];

@NgModule({
    declarations: [
        InventoryComponent
    ],
    imports     : [
        RouterModule.forChild(inventoryRoutes),
        CommonModule,
        MatTableModule
    ]
})
export class InventoryModule
{
}
