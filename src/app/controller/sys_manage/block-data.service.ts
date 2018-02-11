import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay'


import { Block, Field, block_test, source } from '../../model/data-model'

@Injectable()
export class BlockDataService {
    delayMs = 500;

    // getBlockData():Block[] {
    //     return block_test;
    // }
    getBlockData():Observable<Block[]> {
        return of(block_test).delay(this.delayMs);
    }

    // Fake server update; assume nothing can go wrong
    updateBlockData(block: Block): Observable<Block>  {
        const oldBlockData = block_test.find(b => b.id === block.id);
        const newBlockData = Object.assign(oldBlockData, block); // Demo: mutate cached hero
        return of(newBlockData).delay(this.delayMs); // simulate latency with delay
    }
}