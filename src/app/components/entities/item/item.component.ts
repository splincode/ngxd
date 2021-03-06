import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { provideEntity } from '../entity.provider';

import { Item } from './Item';

@Component({
    selector: 'app-item-entity',
    templateUrl: 'item.component.html',
    styleUrls: [ 'item.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemEntityComponent {

    @Input('entity') item: Item;

    trackById(index, { id }): string {
        return id;
    }

}

export const PROVIDERS = provideEntity(Item, ItemEntityComponent);
export const COMPONENTS = [ ItemEntityComponent ];
