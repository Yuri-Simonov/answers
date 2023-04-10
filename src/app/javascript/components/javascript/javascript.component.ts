import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class JavascriptComponent implements OnInit {
    list: IList[] = [
        // { name: 'Асинхронный код', path: 'async' },
        // { name: 'Классы', path: 'class' },
        { name: 'Прототипы', path: 'prototype' },
        // { name: 'Разное', path: 'others' },
        { name: 'Функции', path: 'function' },
    ];
    listState: boolean = false;
    currentPath: string;

    constructor(private router: Router) {}

    ngOnInit() {
        this.currentPath = this.router.url;
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = event.url;
            }
        });
    }

    setNewListState(event: boolean): void {
        this.listState = event;
    }
}
