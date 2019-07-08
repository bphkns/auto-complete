import { Component, ViewChild, TemplateRef, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { AppOptionComponent } from './option/option.component';
import { switchMap } from 'rxjs/operators';
import { merge } from 'rxjs';
import { AutocompleteContentDirective } from './auto-complete-content.directive';

@Component({
    selector: 'app-auto-complete',
    styles: [
        `.autocomplete {
            background-color: #fff;
            box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            display: block;
            max-height: 300px;
            overflow-y: scroll;
          }
          `,
    ],
    template: `
        <ng-template #root>
            <div class="autocomplete">
                <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
            </div>
        </ng-template>
    `,
    exportAs: 'appAutocomplete',
})
export class AutoCompleteComponent {
    @ViewChild('root', { static: false }) rootTemplate: TemplateRef<any>;

    @ContentChild(AutocompleteContentDirective, { static: false }) content: AutocompleteContentDirective;

    @ContentChildren(AppOptionComponent) options: QueryList<AppOptionComponent>;

    optionsClick() {
        return this.options.changes.pipe(
            switchMap(options => {
                const click$ = options.map(option => option.click$);
                return merge(...click$);
            })
        );
    }
}
