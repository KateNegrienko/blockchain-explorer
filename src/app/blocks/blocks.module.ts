import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BlocksComponent } from './blocks.component';

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

import { BlocksViewModule } from '../blocks-view/blocks-view.module';

import { BlocksEffects } from './blocks.effects';
import { blocksReducer } from './blocks.reducer';
import { InitialBlocksState, BlocksState, BlocksActions } from './blocks.state';
import { BlocksService } from './blocks.service';

@NgModule({
  declarations: [
    BlocksComponent
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

    BlocksViewModule,

    EffectsModule.forFeature([
      BlocksEffects
    ]),
    StoreModule.forFeature(
      'blocks',
      blocksReducer,
      {
        initialState: InitialBlocksState
      }
    )
  ],
  exports: [
    BlocksComponent
  ],
  providers: [
    BlocksActions,
    BlocksService
  ],
})
export class BlocksModule {}
