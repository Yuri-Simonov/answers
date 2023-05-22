import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { componentQuestions } from 'src/app/angular/questions/component';
import { decoratorQuestions } from 'src/app/angular/questions/decorator';
import { directiveQuestions } from 'src/app/angular/questions/directive';
import { formQuestions } from 'src/app/angular/questions/form';
import { othersQuestions } from 'src/app/angular/questions/others';
import { pipeQuestions } from 'src/app/angular/questions/pipe';
import { routingQuestions } from 'src/app/angular/questions/routing';
import { rxjsQuestions } from 'src/app/angular/questions/rxjs';
import { serviceQuestions } from 'src/app/angular/questions/service';
import { testQuestions } from 'src/app/angular/questions/test';
import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class AngularComponent implements OnInit, OnDestroy {
    panelOpenState: boolean;

    list: IList[] = [
        {
            name: 'Декораторы',
            path: 'decorator',
            questions: decoratorQuestions,
        },
        { name: 'Директивы', path: 'directive', questions: directiveQuestions },
        {
            name: 'Компоненты',
            path: 'component',
            questions: componentQuestions,
        },
        { name: 'Маршрутизация', path: 'routing', questions: routingQuestions },
        { name: 'Пайпы / Фильтры', path: 'pipe', questions: pipeQuestions },
        { name: 'Разное', path: 'others', questions: othersQuestions },
        { name: 'Сервисы', path: 'service', questions: serviceQuestions },
        { name: 'Тестирование', path: 'test', questions: testQuestions },
        { name: 'Формы', path: 'form', questions: formQuestions },
        { name: 'RxJs', path: 'rxjs', questions: rxjsQuestions },
    ];
    listState: boolean = false;
    currentPath: string;
    currentPathSub: Subscription;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.currentPathSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.slicePath(event.url);
            }
        });
        this.currentPath = this.slicePath(this.currentPath);
    }

    ngOnDestroy(): void {
        this.currentPathSub.unsubscribe();
    }

    setNewListState(event: boolean): void {
        this.listState = event;
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }
}
