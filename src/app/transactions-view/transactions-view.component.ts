import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { TransactionData, TransactionOutData } from '../data/transaction.data';
import { MatTableDataSource } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-transactions-view',
    templateUrl: 'transactions-view.component.html',
    styleUrls: ['./transactions-view.component.scss']
})
export class TransactionsViewComponent implements OnChanges {

    @Input() countTransactions: number;
    @Input() loading = false;
    @Input() error: any = null;
    @Input() state: string = null;
    @Input() transactions: TransactionData[];

    @Output() selectTransaction = new EventEmitter();

    public displayedColumns = ['hash', 'out', 'details'];
    public dataSource;

    public constructor(
    ) {}

    public ngOnChanges(changes) {
        if (changes.transactions && changes.transactions.currentValue !== changes.transactions.perviosValue) {
            let transactions;
            if (this.countTransactions && this.countTransactions > 0) {
                transactions = changes.transactions.currentValue.slice(0, this.countTransactions);
            } else {
                transactions = changes.transactions.currentValue;
            }
            this.dataSource = new MatTableDataSource(transactions);
        }
    }

    public gotoTransaction(hash: string) {
        this.selectTransaction.emit({hash: hash});
    }

    public transactionSum(out: TransactionOutData[]): number {
        let value = 0;
        out.forEach(element => {
            value += element.value;
        });
        return value / 100000000;
    }

}
