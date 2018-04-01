import { Component, EventEmitter, ChangeDetectionStrategy, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { TransactionData } from '../data/transaction.data';
import { TransactionService } from './transaction.service';

@Component({
    selector: 'app-transaction',
    templateUrl: 'transaction.component.html',
    styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

    public hash: string;
    public transaction$: Observable<TransactionData>;
    public loading$: Observable<boolean>;
    public error$: Observable<any>;

    public constructor(
        private transactionService: TransactionService,
        private activatedRoute: ActivatedRoute,

    ) {
        this.error$ = this.transactionService.error$;
        this.loading$ = this.transactionService.loading$;
        this.transaction$ = this.transactionService.transaction$;
    }

    public ngOnInit() {
        this.hash = this.activatedRoute.snapshot.params['id'];
        this.transactionService.readingTransaction(this.hash);
    }

}
