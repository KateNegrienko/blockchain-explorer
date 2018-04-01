import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class BlockchainDataService {

    private serverUrl = 'https://blockchain.info';

    public constructor(
        private http: Http,
        private localStorageService: LocalStorageService
    ) {}

    private handleError(response: Response) {
        const error = response;
        return Observable.throw(error);
    }

    public blocks(timeInMilliseconds: number): Observable<any> {
        const format = '?format=json&cors=true';
        let url = this.serverUrl + '/blocks';
        url += timeInMilliseconds ?  '/' + timeInMilliseconds + format : format;
        const request: RequestOptionsArgs = {};
        request.withCredentials = false;

        return this.http.get(url, request)
            .map(response => {

                return response.json().blocks;
            })
            .catch(this.handleError);
    }

    public singleBlock(hash: string): Observable<any> {
        const url = this.serverUrl + '/rawblock/' + hash + '?cors=true';
        const request: RequestOptionsArgs = {};
        request.withCredentials = false;

        return this.http.get(url, request)
            .map(response => {

                return response.json();
            })
            .catch(this.handleError);
    }

    public singleTransaction(hash: string): Observable<any> {
        const url = this.serverUrl + '/rawtx/' + hash + '?cors=true';
        const request: RequestOptionsArgs = {};
        request.withCredentials = false;

        return this.http.get(url, request)
            .map(response => {

                return response.json();
            })
            .catch(this.handleError);
    }

    public heightBlock(height: number): Observable<any> {
        const url = this.serverUrl + '/block-height/' + height + '?format=json&cors=true';
        const request: RequestOptionsArgs = {};
        request.withCredentials = false;

        return this.http.get(url, request)
            .map(response => {

                return response.json().blocks;
            })
            .catch(this.handleError);
    }

    public chart(): Observable<any> {
        const url = this.serverUrl + '/charts/market-price?timespan=1months&format=json&cors=true&includeLastPoint=true';
        const request: RequestOptionsArgs = {};
        request.withCredentials = false;

        return this.http.get(url, request)
            .map(response => {

                return response.json();
            })
            .catch(this.handleError);
    }
}
