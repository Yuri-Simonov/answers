import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-accessing-global-variables-inside-a-function',
    templateUrl:
        './accessing_global_variables_inside_a_function.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessingGlobalVariablesInsideAFunctionComponent {
    panelOpenState: boolean = false;
}
