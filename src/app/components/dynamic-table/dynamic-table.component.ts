import { DataSource } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColumn } from '../table-columns';

@Component({
    selector: 'app-dynamic-table',
    templateUrl: 'dynamic-table.component.html',
    styleUrls: [ 'dynamic-table.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent {
    @Input() schema: TableColumn[];
    @Input() dataSource: DataSource<any>;
    @Input() displayedColumns: string[];

    trackById(index, column: TableColumn): string {
        return column.def;
    }
}
