import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { BlockData } from '../data/block.data';
import { BlockModule } from '../block/block.module';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-block-view',
    templateUrl: 'block-view.component.html',
    styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnChanges {

    @Input() loading = false;
    @Input() error: any = null;
    @Input() state: string = null;
    @Input() block: BlockData;

    @Output() selectTransaction = new EventEmitter();

    public panelOpenState = true;
    public panelOpenStateSummary = true;

    public constructor(
    ) {}

    public ngOnChanges(changes) {}


    public gotoTransaction(hash: string) {
        this.selectTransaction.emit({hash: hash});
    }

    public outputTotal(): number {
        let total = 0;
        if (this.block && this.block.tx && this.block.tx.length > 0) {
            this.block.tx.forEach(element => {
                element.out.forEach(out => {
                   total += out.value;
                });
            });
        }
        return total;
    }

}
