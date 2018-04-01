import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit  } from '@angular/core';
import { Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { BlockData } from '../data/block.data';
import { BlocksService } from './blocks.service';

@Component({
    selector: 'app-blocks',
    templateUrl: 'blocks.component.html',
    styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

    public blocks$: Observable<BlockData[]>;
    public loading$: Observable<boolean>;
    public error$: Observable<any>;
    public date$: Observable<Date>;

    public date: Date;

    public constructor(
        private blocksService: BlocksService,
        private router: Router
    ) {
        this.error$ = this.blocksService.error$;
        this.loading$ = this.blocksService.loading$;
        this.blocks$ = this.blocksService.blocks$;
        this.date$ = this.blocksService.date$;
        this.date$.subscribe(storeDate => {
            this.date = new Date(storeDate);
        });
    }

    public ngOnInit() {
        this.blocksService.readingBlocks(new Date());
    }

    public changeDate(direction: boolean) {
        const currentDate = this.date.getDate();
        direction ? this.date.setDate(currentDate + 1) : this.date.setDate(currentDate - 1);
        this.blocksService.readingBlocks(this.date);
    }

    public selectBlock(value) {
        this.router.navigate(['blocks/', value.hash]);
    }

}
