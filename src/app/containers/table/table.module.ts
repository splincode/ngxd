import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ControlsModule } from '../../components/controls/control.module';
import { DynamicTableModule } from '../../components/dynamic-table';
import { EntitiesModule } from '../../components/entities/entities.module';
import { TableColumnModule } from '../../components/table-columns';
import { TableSchemaModule } from '../../components/table-schema';

import { TablePageComponent } from './table.component';
import { TableRouting } from './table.routing';

@NgModule({
    imports: [
        CommonModule, EntitiesModule, ControlsModule, DynamicTableModule,
        TableColumnModule,
        TableSchemaModule, TableRouting, MatCardModule, MatToolbarModule,
        MatGridListModule
    ],
    declarations: [ TablePageComponent ]
})
export class TablePageModule {}
