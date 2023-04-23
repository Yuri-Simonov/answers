import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-difference-between-ngcontainer-and-ngtemplate',
    templateUrl:
        './difference_between_ngcontainer_and_ngtemplate.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferenceBetweenNgcontainerAndNgtemplateComponent {
    panelOpenState: boolean = false;
}
