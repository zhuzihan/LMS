import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Block } from '../../model/data-model'
import { BlockDataService } from './block-data.service'

@Component({
    selector: 'man-block-list',
    templateUrl: '../../view/man-block-list.component.html'
})
export class ManBlockListComponent implements OnInit {
    blocks: Observable<Block[]>;
    isLoading = false;
    selectedBlock: Block;
  
    constructor(private blockDataService: BlockDataService) { }
  
    ngOnInit() { this.getBlocks(); }
  
    getBlocks() {
      this.isLoading = true;
      this.blocks = this.blockDataService.getBlockData()
                        // Todo: error handling
                        .finally(() => this.isLoading = false);
      this.selectedBlock = undefined;
    }
  
    select(block: Block) { this.selectedBlock = block; }
}
  