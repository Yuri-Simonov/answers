import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { SidenavService } from '../../../../services/sidenav.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    sidenavState: boolean;

    @Input('title') titleProps: string;
    @Input('visibleIcon') visibleIconProps: boolean = true;

    constructor(private sidenavService: SidenavService) {}

    ngOnInit() {
        this.sidenavService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidenavState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }
}
