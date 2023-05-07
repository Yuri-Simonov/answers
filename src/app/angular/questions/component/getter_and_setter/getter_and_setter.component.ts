import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-getter-and-setter',
    templateUrl: './getter_and_setter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetterAndSetterComponent {
    panelOpenState: boolean = false;
}