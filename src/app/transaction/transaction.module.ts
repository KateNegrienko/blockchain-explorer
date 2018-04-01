import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { TransactionComponent } from './transaction.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule, MatListModule, MatExpansionModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { TransactionEffects } from './transaction.effects';
import { transactionReducer } from './transaction.reducer';
import { InitialTransactionState, TransactionState, TransactionActions } from './transaction.state';
import { TransactionService } from './transaction.service';

@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    FormsModule,
    HttpModule,
    CommonModule,

    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule,

    EffectsModule.forFeature([
      TransactionEffects
    ]),
    StoreModule.forFeature(
      'transaction',
      transactionReducer,
      {
        initialState: InitialTransactionState
      }
    )
  ],
  exports: [
    TransactionComponent
  ],
  providers: [
    TransactionActions,
    TransactionService
  ],
})
export class TransactionModule {}
