import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './autocomplete.component';
import { AppAutocompleteDirective } from './autocomplete.directive';
import { AutocompleteContentDirective } from './auto-complete-content.directive';
import { AppOptionComponent } from './option/option.component';
import { CommonModule } from '@angular/common';


const publicApi = [
    AutoCompleteComponent,
    AppAutocompleteDirective,
    AutocompleteContentDirective,
    AppOptionComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [publicApi],
    exports: [publicApi]
})
export class AutocompleteModule {

}
