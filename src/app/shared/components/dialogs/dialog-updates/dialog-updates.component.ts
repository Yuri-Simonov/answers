import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { IInfo, IUpdates } from '../../../types';

import { UPDATES } from '../../../data/updates';

const materialModules = [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule];

@Component({
    selector: 'app-dialog-updates',
    standalone: true,
    imports: [materialModules, HighlightJsDirective, NgTemplateOutlet, NgClass],
    templateUrl: './dialog-updates.component.html',
    styleUrl: './dialog-updates.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogUpdatesComponent {
    updates: IUpdates[] = UPDATES;

    constructor(@Inject(MAT_DIALOG_DATA) public data: IInfo) {}
}
