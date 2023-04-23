import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-call-function-declaration-before-definition',
    templateUrl: './call_function_declaration_before_definition.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallFunctionDeclarationBeforeDefinitionComponent {
    panelOpenState: boolean = false;
}
