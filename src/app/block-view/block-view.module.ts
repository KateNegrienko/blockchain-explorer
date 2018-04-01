import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BlockViewComponent } from './block-view.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatList } from '@angular/material';
import { MatButtonModule, MatTableModule, MatListModule, MatExpansionModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { DatePipesModule } from '../filter/pipes.module';

@NgModule({
  declarations: [
    BlockViewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    FormsModule,
    HttpModule,
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,

    DatePipesModule
  ],
  exports: [
    BlockViewComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlockViewModule { }
