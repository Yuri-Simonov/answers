import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-cycle-optimization-ngfor',
    templateUrl: './cycle_optimization_ngfor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CycleOptimizationNgforComponent {
    panelOpenState: boolean = false;
}