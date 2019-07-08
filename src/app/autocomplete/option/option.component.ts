import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
    selector: 'app-option',
    template: `
    <div class="option">
        <ng-content></ng-content>
    </div>
    `
})
export class AppOptionComponent implements OnInit {
    @Input() value: string;
    click$: Observable<string>;

    constructor(private host: ElementRef) {}

    get element() {
        return this.host.nativeElement;
    }

    ngOnInit() {
        this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
    }
}
