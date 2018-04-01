import { Component, EventEmitter, ChangeDetectionStrategy, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { BlockData } from '../data/block.data';
import { BlockService } from './block.service';
import { TransactionOutData, TransactionData } from '../data/transaction.data';

@Component({
    selector: 'app-block',
    templateUrl: 'block.component.html',
    styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

    public hash: string;
    public block$: Observable<BlockData>;
    public loading$: Observable<boolean>;
    public error$: Observable<any>;
    public transactions: TransactionData[];

    public constructor(
        private blockService: BlockService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.error$ = this.blockService.error$;
        this.loading$ = this.blockService.loading$;
        this.block$ = this.blockService.block$;
    }

    public ngOnInit() {
        this.hash = this.activatedRoute.snapshot.params['id'];
        this.blockService.readingBlock(this.hash);
        this.block$.subscribe(block => {
            this.transactions = block.tx;
        });
    }

    public selectTransaction(value) {
        this.router.navigate(['transaction/', value.hash]);
    }

}
