import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-directive-in-angular',
    templateUrl: './directive_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveInAngularComponent {
    panelOpenState: boolean = false;
}
