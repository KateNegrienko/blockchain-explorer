import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserXhr } from '@angular/http';
import { MatToolbarModule, MatCardModule, MatSidenavModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageModule } from 'angular-2-local-storage';

import { DatePipesModule } from './filter/pipes.module';

import { BlockchainDataService } from './data/blockchain.data.service';
import { MainModule, MainComponent } from './main';
import { BlocksModule, BlocksComponent } from './blocks';
import { BlockModule, BlockComponent } from './block';
import { TransactionModule, TransactionComponent } from './transaction';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'blocks', component: BlocksComponent },
  { path: 'blocks/:id', component: BlockComponent },
  { path: 'transaction/:id', component: TransactionComponent },

  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    DatePipesModule,

    MainModule,
    BlocksModule,
    BlockModule,
    TransactionModule,

    RouterModule.forRoot(appRoutes, { useHash: true }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [
    BlockchainDataService,
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
