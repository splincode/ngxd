import { Injectable, Type } from '@angular/core';
import { Dynamic, NgxdProvider } from '../provider/provider';

@Injectable()
export abstract class NgxdResolver<TType, TComponent> {
    private config: Map<TType | Type<TType>, Type<TComponent>>;

    protected constructor(providers: NgxdProvider<TType, TComponent>[] = []) {
        this.config = providers.reduce((config, provider) => config.set(provider.type, provider.component), new Map());
    }

    resolve(type: TType): Type<TComponent> | null {
        if (type && type.constructor) {
            return this.config.get(type.constructor as Type<TType>) || null;
        }

        return this.config.get(type) || null;
    }

}

// @Dynamic()
export class DynamicResolver extends NgxdResolver<any, any> {

    provide() {}

}