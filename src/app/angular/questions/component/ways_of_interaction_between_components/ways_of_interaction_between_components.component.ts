import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-ways-of-interaction-between-components',
    templateUrl: './ways_of_interaction_between_components.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaysOfInteractionBetweenComponentsComponent {
    panelOpenState: boolean = false;
}