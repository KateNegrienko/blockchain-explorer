import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { TransactionsViewComponent } from './transactions-view.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    TransactionsViewComponent
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
    MatTableModule
  ],
  exports: [
    TransactionsViewComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransactionsViewModule { }
