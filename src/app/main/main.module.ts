import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule, MatListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BlocksViewModule } from '../blocks-view/blocks-view.module';
import { TransactionsViewModule } from '../transactions-view/transactions-view.module';

import { MainEffects } from './main.effects';
import { mainReducer } from './main.reducer';
import { InitialMainState, MainState, MainActions } from './main.state';
import { MainService } from './main.service';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    FormsModule,
    HttpModule,
    CommonModule,
    ChartsModule,

    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,

    BlocksViewModule,
    TransactionsViewModule,

    EffectsModule.forFeature([
      MainEffects
    ]),
    StoreModule.forFeature(
      'main',
      mainReducer,
      {
        initialState: InitialMainState
      }
    )
  ],
  exports: [
    MainComponent
  ],
  providers: [
    MainActions,
    MainService
  ],
})
export class MainModule { }
