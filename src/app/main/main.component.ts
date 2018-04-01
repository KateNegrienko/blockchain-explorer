import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { BlockData } from '../data/block.data';
import { TransactionData } from '../data/transaction.data';
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public lastBlocks$: Observable<BlockData[]>;
    public lastTransactions$: Observable<TransactionData[]>;
    public loading$: Observable<boolean>;
    public error$: Observable<any>;

    public search: string;


    // lineChart
    public lineChartData: Array<any>;
    public lineChartLabels: Array<any>;
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(227,242,253, .5)',
            borderColor: 'rgb(33,150,243)',
            pointBackgroundColor: 'rgb(33,150,243)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    public constructor(
        private mainService: MainService,
        private router: Router
    ) {
        this.error$ = this.mainService.error$;
        this.loading$ = this.mainService.loading$;
        this.lastBlocks$ = this.mainService.lastBlocks$;
        this.lastTransactions$ = this.mainService.lastTransactions$;
        this.mainService.chartData$.subscribe(chart => {
            if (chart) {
                this.lineChartLabels = [];
                this.lineChartData = [];
                const chartData = { label: chart['name'], data: [] };
                let date: Date;
                chart.values.forEach(element => {
                    chartData.data.push(element.y);
                    date = new Date();
                    date.setTime(element.x * 1000);
                    this.lineChartLabels.push(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
                });
                this.lineChartData.push(chartData);
            }
        });
    }

    public ngOnInit() {
        this.mainService.readingLastBlocks();
        this.mainService.readingChart();
    }

    public selectBlock(value) {
        this.router.navigate(['blocks/', value.hash]);
    }

    public selectTransaction(value) {
        this.router.navigate(['transaction/', value.hash]);
    }

    public showBlocks() {
        this.router.navigate(['blocks']);
    }

    public find() {
        if (Number(this.search)) {
            this.mainService.readingBlockByHeight(Number(this.search));
        } else {
            this.router.navigate(['transaction/', this.search]);
        }
    }
}
