import { IInfo } from 'src/app/shared/interfaces';

export const TWO_STRUCTURAL_DIRECTIVES: IInfo = {
    title: 'Использование двух или более структурных директив на одном элементе DOM-дерева',
    body: `<p>
                В реальной разработке очень часто возникают ситуации, когда
                нужно использовать 2 или более структурных директив на одном и
                том же элементе DOM-дерева, но
                <span class="attention">этого делать нельзя</span>, т.к. в этом
                случае возникает конфликт и элемент <code>ng-template</code> не
                понимает, к какой из структурных директив он должен привязаться.
            </p>
            <p>
                Казалось бы патовая ситуация, но
                <span class="attention">
                    решение данной проблемы есть - использование элемента
                    <code>ng-container</code></span
                >. То есть, мы можем оставить одну из структурных директив на
                элементе DOM-дерева, а вторую повесить на элемент
                <code>ng-container</code>. Только имейте ввиду, что
                <span class="attention"
                    >элемент <code>ng-container</code> так же может содержать
                    только одну структурную директиву</span
                >
                (это на случай, если суммарное количество структурных директив
                больше двух).
            </p>
            <p>
                Так же не забывайте учитывать порядок выполнения структурных
                директив, т.к. расположение структурной директивы
                <code>*ngIf</code> до или после после той же
                <code>*ngFor</code> будут иметь разные итоговые результаты.
            </p>
            <pre><code class="language-html">&lt;!-- первый пример -->
&lt;ng-container *ngIf="condition">
	&lt;div *ngFor="let item of arr">
  		&lt;span>{{ item }}&lt;/span>
	&lt;/div>
&lt;/ng-container>

&lt;!-- второй пример -->
&lt;ng-container *ngFor="let item of arr">
	&lt;div *ngIf="condition">
  		&lt;span>{{ item }}&lt;/span>
	&lt;/div>
&lt;/ng-container></code></pre>
            <p>
                Если сравнить два примера выше, то в зависимости от результата
                условия структурной директивы <code>*ngIf</code> в первом
                примере либо будут все элементы массива в итоговой разметке,
                либо их не будет вовсе. А вот во втором примере какие-то
                элементы попадут в итоговую разметку, а какие-то нет.
            </p>`,
    selected: false,
    lastUpdate: '07.02.2024',
};
