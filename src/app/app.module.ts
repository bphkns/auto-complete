import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatIconModule } from '@angular/material';

import { FilterPipe } from './filter.pipe';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    OverlayModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    AutocompleteModule
  ],
  declarations: [AppComponent, FilterPipe],
  bootstrap: [AppComponent],
  entryComponents: [AutoCompleteComponent]
})
export class AppModule { }
