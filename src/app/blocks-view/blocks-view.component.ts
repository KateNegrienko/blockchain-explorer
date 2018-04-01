import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { BlockData } from '../data/block.data';
import { BlocksModule } from '../blocks/blocks.module';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-blocks-view',
    templateUrl: 'blocks-view.component.html',
    styleUrls: ['./blocks-view.component.scss']
})
export class BlocksViewComponent implements OnChanges {

    @Input() countBlocks: number;
    @Input() loading = false;
    @Input() error: any = null;
    @Input() state: string = null;
    @Input() blocks: BlockData[];

    @Output() selectBlock = new EventEmitter();

    public displayedColumns = ['height', 'hash', 'time', 'details'];
    public dataSource;

    public constructor(
    ) {}

    public ngOnChanges(changes) {
        if (changes.blocks && changes.blocks.currentValue !== changes.blocks.perviosValue) {
            let blocks;
            if (this.countBlocks && this.countBlocks > 0) {
                blocks = changes.blocks.currentValue.slice(0, this.countBlocks);
            } else {
                blocks = changes.blocks.currentValue;
            }
            this.dataSource = new MatTableDataSource(blocks);
        }
    }

    public gotoBlock(hash: string) {
        this.selectBlock.emit({hash: hash});
    }

}
