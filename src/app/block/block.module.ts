import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BlockComponent } from './block.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule, MatListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BlockViewModule } from '../block-view/block-view.module';
import { TransactionsViewModule } from '../transactions-view/transactions-view.module';

import { BlockEffects } from './block.effects';
import { blockReducer } from './block.reducer';
import { InitialBlockState, BlockState, BlockActions } from './block.state';
import { BlockService } from './block.service';
import { TransactionData } from '../data/transaction.data';

@NgModule({
  declarations: [
    BlockComponent
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
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,

    BlockViewModule,
    TransactionsViewModule,

    EffectsModule.forFeature([
      BlockEffects
    ]),
    StoreModule.forFeature(
      'block',
      blockReducer,
      {
        initialState: InitialBlockState
      }
    )
  ],
  exports: [
    BlockComponent
  ],
  providers: [
    BlockActions,
    BlockService
  ],
})
export class BlockModule {}
