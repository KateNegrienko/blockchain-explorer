import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BlocksViewComponent } from './blocks-view.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { DatePipesModule } from '../filter/pipes.module';

@NgModule({
  declarations: [
    BlocksViewComponent
  ],
  imports: [
    DatePipesModule,
    BrowserModule,
    FlexLayoutModule,

    FormsModule,
    HttpModule,
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule
  ],
  exports: [
    BlocksViewComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlocksViewModule { }
