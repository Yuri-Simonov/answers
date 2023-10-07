import { IQuestion } from '@types';

export const componentQuestions: IQuestion[] = [
    {
        title: 'Что такое компонент в Angular?',
        body: `<p>
            <span class="attention">Angular компонент</span> - это часть
            интерфейса приложения с собственными шаблоном, логикой и стилями.
            Причем последние два являются необязательными.
        </p>
        <p>Все компоненты в совокупности и есть Angular App.</p>
        <p>
            За создание компонента отвечает декоратор
            <code>@Component()</code>.
        </p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-root'</span>, <span class="comment">// название компонента</span>
	<span class="key">templateUrl</span>: <span class="string">'./app.component.html'</span>, <span class="comment">// путь к HTML-файлу. Является обязательным свойством</span>
	<span class="key">styleUrls</span>: <span class="punctuation">[</span><span class="string">'./app.component.scss'</span><span class="punctuation">]</span>, <span class="comment">// массив путей к SCSS-файлам</span>
	<span class="key">providers</span>: <span class="punctuation">[</span><span class="service-name">SomeHttpService</span><span class="punctuation">]</span>, <span class="comment">// если добавляются непосредственно в компонент какие-то зависимости</span>
	<span class="key">changeDetection</span>: <span>ChangeDetectionStrategy.OnPush</span>, <span class="comment">// явное определение стратегии ChangeDetection</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppComponent</span> <span class="punctuation">{}</span> <span class="comment">// класс, к которому привязывается декоратор @Component()</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Расскажите про жизненный цикл компонента (Angular hooks)?',
        body: `<p>
		Каждый компонент имеет свой жизненный цикл, где на каждом этапе
		цикла вызываются соответствующие методы, так называемые хуки
		(Angular Hooks).
	</p>
	<p>
		Ниже перечислены все методы жизненного цикла компонента в
		порядке их вызова:
	</p>
	<ul>
		<li>
			<span class="attention">ngOnChanges</span> - вызывается в
			момент установки или изменения одного или нескольких
			значений входных свойств класса компонента. Метод аргументом
			принимает объект <code>SimpleChanges</code>, в котором
			хранятся текущее и предыдущее значения свойств. Если у
			компонента есть свойства, входящие извне через декоратор
			<code>@Input</code>,
			<span class="attention"
				>срабатывает перед хуком <code>ngOnInit</code></span
			>. Если нет входящих свойств, то данный хук вызываться не
			будет;
		</li>
		<li>
			<span class="attention">ngOnInit</span> - на данном этапе
			устанавливаются свойства самого компонента. Вызывается
			единожды, после первого вызова <code>ngOnChanges</code>,
			если есть входные свойства. Если нет входных свойств,
			вызывается первым;
		</li>
		<li>
			<span class="attention">ngDoCheck</span> - происходит
			изменение одного или нескольких свойств или какое-то
			событие. Вызывается сразу после <code>ngOnChanges</code> при
			каждом запуске обнаружения изменений, и сразу после
			<code>ngOnInit</code> при первом запуске;
		</li>
		<li>
			<span class="attention">ngAfterContentInit</span> - на
			данном этапе в шаблон включается контент, заключенный между
			тегами компонента (в дочернем компоненте это содержимое
			подставится вместо
			<code>
				<span><</span
				>ng-content><span><</span>/ng-content> </code
			>). Вызывается один раз после первого вызова метода
			<code>ngDoCheck</code>;
		</li>
		<li>
			<span class="attention">ngAfterContentChecked</span> - на
			данном этапе происходит проверка на изменение содержимого,
			которое подставляется вместо
			<code>
				<span><</span
				>ng-content><span><</span>/ng-content> </code
			>. Вызывается после метода <code>ngAfterContentInit</code> и
			каждого последующего вызова метода <code>ngDoCheck</code>
		</li>
		<li>
			<span class="attention">ngAfterViewInit</span> - на данном
			этапе инициализируются дочерние компоненты, указанные в
			шаблоне текущего компонента. Вызывается один раз после
			первого вызова метода <code>ngAfterContentChecked</code>;
		</li>
		<li>
			<span class="attention">ngAfterViewChecked</span> - на
			данном этапе происходит проверка на изменение содержимого в
			дочерних компонентах. Вызывается после метода
			<code>ngAfterViewInit</code> и каждого последующего вызова
			метода <code>ngAfterContentChecked</code>;
		</li>
		<li>
			<span class="attention">ngOnDestroy</span> - компонент
			удаляется из DOM-дерева. Вызывается непосредственно перед
			тем, как Angular уничтожит компонент. На данном этапе
			следует отписываться от данных типа
			<code>Observable</code> и обработчиков событий, чтобы
			избежать утечек памяти.
		</li>
	</ul>
	<p>
		Angular hooks реализованы в виде интерфейсов, реализующих
		функции, совпадающие по названию с названием интерфейса +
		префикс
		<code>ng</code>:
	</p>
	<pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ContactsItemComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
	<span class="method">ngOnInit()</span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">('</span><span class="string">OnInit</span><span class="punctuation">')</span> <span class="comment"> // OnInit</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
	<p>
		Также при написании кода считается хорошим тоном указывать у
		класса реализацию того или иного метода, используемого в нем. В
		примере выше это <code>implements OnInit</code>.
	</p>`,
        selected: false,
        lastUpdate: '30.07.2023',
    },
    {
        title: 'Зачем нужны Getter и Setter внутри компонента?',
        body: `<p>
            Геттерами и сеттерами называются методы Angular компонента, которые
            <span class="attention"
                >используются для получения и модификации значений его
                свойств</span
            >.
        </p>
        <p>
            <code>Getter</code> вызывается в момент обращения к свойству (в
            шаблоне или в других методах классах), <code>Setter</code> - в
            момент присвоения ему значения (обычно это свойства с декоратором
            <code>@Input()</code>).
        </p>
        <p>
            Для создания геттера и сеттера используются соответствующие ключевые
            слова - <code>get</code> и <code>set</code>:
        </p>
        <pre><code><span class="comment">// компонент</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
	_name: <span class="type">string</span> <span class="operator">=</span> <span class="null">null</span>; <span class="comment">// приватная переменная</span>

	<span class="keyword">@Input()</span> <span class="keyword">set</span> <span class="method">name</span><span class="punctuation">(</span>value: <span class="type">string</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>._name <span class="operator">=</span> value <span class="operator">+</span> <span class="string">'*'</span>;
	<span class="punctuation">}</span>

	<span class="keyword">get</span> <span class="method">name()</span>: <span class="type">string</span> <span class="punctuation">{</span>
		<span class="keyword">return</span> <span class="object">this</span>._name <span class="operator">||</span> <span class="string">'Аноним'</span>;
	<span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">p></span><span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag"><</span><span class="tag">/p></span></code></pre>
        <p>
            В классах JavaScript мы также можем создавать приватные переменные,
            к которым можно получить доступ с помощью геттеров и сеттеров (их
            еще называют методами доступа к переменной). В примере выше это
            переменная <code>_name</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Зачем используется OnDestroy?',
        body: `<p>
            Данный этап жизненного цикла в основном
            <span class="attention"
                >используется для отписок от событий, на которые мы подписались
                в процессе работы компонента</span
            >.
        </p>
        <p>
            В примере ниже при инициализации компонента происходит подписка на
            событие маршрутизации. И в конце жизненного цикла данного компонента
            мы отменяем подписку на это же событие.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AngularComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span>, <span class="interface-name">OnDestroy</span> <span class="punctuation">{</span>
    currentPath: <span class="type">string</span>;
    currentPathSub: <span class="type">Subscription</span>;

    <span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> router: <span class="type">Router</span><span class="punctuation">) {}</span>

    <span class="function-name">ngOnInit()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="object">this</span>.currentPath <span class="operator">=</span> <span class="object">this</span>.router.url;
        <span class="object">this</span>.currentPathSub <span class="operator">=</span> <span class="object">this</span>.router.events.<span class="method">subscribe</span><span class="punctuation">((</span>event<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="keyword">if</span> <span class="punctuation">(</span>event <span class="keyword">instanceof</span> <span class="class-name">NavigationEnd</span><span class="punctuation">) {</span>
                <span class="object">this</span>.currentPath <span class="operator">=</span> event.url;
            <span class="punctuation">}</span>
        <span class="punctuation">});</span>
	<span class="punctuation">}</span>
	
    <span class="function-name">ngOnDestroy()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="object">this</span>.currentPathSub.<span class="function-name">unsubscribe()</span>; <span class="comment">// не забываем отписаться</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <i class="subtitle">Зачем нужно отписываться от подписок?</i>
        <p>
            Если мы не будем отписываться, но при этом удалять компонент,
            например, при переходе на другую страницу, а потом вернемся на
            страницу, где опять стаработает подписка, то количество подписчиков
            уже будет 2, а не 1. Сделаем тоже самое, будет 3 подписки и тд.
            Следовательно,
            <span class="attention">
                будут лишние действия при работе кода, что явно плохо скажется
                на оптимизации.
            </span>
        </p>
        <p>
            Пример плохого использования подписок: у вас происходит подписка на
            какое-то событие внутри функции <code>setInterval</code> и вы не
            отписываетесь каждый раз при срабатывании кода. Рано или поздно
            происзойдет утечка памяти и страничка в браузере "умрет" или ваше
            приложение попросту "зависнет".
        </p>`,
        selected: false,
    },
    {
        title: 'Какие вы знаете способы взаимодействия между компонентами?',
        body: `<p>
            Чтобы передать данные из одного компонента в другой, существуют
            следующие способы:
        </p>
        <ul>
            <li>
                <code>@Input()</code> -
                <span class="attention">
                    позволяет передавать значения дочерним компонентам</span
                >, но только на один уровень иерархии;
            </li>
            <li>
                <code>@Output()</code> -
                <span class="attention">
                    позволяет передавать родителю данные при срабатывании
                    какого-то события</span
                >, но только на один уровень иерархии.
            </li>
            <li>
                <code>@ViewChild()</code> и <code>@ViewChildren()</code> -
                <span class="attention">
                    получают доступ к прямому одному и ко всем дочерним
                    компонентам
                </span>
                (если быть точнее, то к их свойстам)
            </li>
            <li>
                Сервисы - своего рода
                <span class="attention">хранилище данных</span>, к которым могут
                обращаться компоненты.
            </li>
        </ul>`,
        selected: false,
    },
    {
        title: `Создает ли ng-content новый контент внутри дочернего компонента?`,
        body: `<p>
		<span class="attention">
			Элемент <code>ng-content</code> не создает новый контент, а
			проецирует уже существующий, который передается между
			открывающим и закрывающим тегами дочернего компонента</span
		>. Поэтому
		<span class="attention">
			за создание и удаление отвечает компонент, в котором
			объявлен контент</span
		>.
	</p>
	<p>
		Для примера воспользуемся структурной директивой
		<code>*ngIf</code>, которая при смене условия полностью
		удаляет/создает элемент в DOM-дереве, при этом
		<code>OnDestroy</code> / <code>OnInit</code> должны срабатывать
		каждый раз соответствующим образом.
	</p>
	<pre><code><span class="comment comment_start">// app.component.ts</span>
<span class="variable">showChild</span> <span class="operator">=</span> <span class="boolean">false</span>;

<span class="comment comment_start">// app.component.html</span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">(click)</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span> <span class="operator">=</span> <span class="operator">!</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/button></span>
<span class="tag"><</span><span class="tag">app-child></span> 
	<span class="tag"><</span><span class="tag">span</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="string">Какое-то содержимое, которое передается внутрь дочернего компонента</span><span class="tag"><</span><span class="tag">/span></span>
<span class="tag"><</span><span class="tag">/app-child></span>
		

<span class="comment comment_start">// child.component.ts</span>
<span class="method">ngOnInit() {</span>
	console.<span class="method">log(</span><span class="string">'Сработал метод'</span><span class="punctuation">)</span>; <span class="comment">// сработает только 1 раз, даже если нажимать на кнопку в родителе</span>
<span class="punctuation">}</span>

<span class="comment comment_start">// child.component.html</span>
<span class="tag"><</span><span class="tag">ng-content</span><span class="tag">></span><span class="tag"><</span><span class="tag">/ng-content></span>
		</code></pre>
	<p>
		Хоть мы и повесили условие, но хуки жизненного цикла компонента
		не срабатывают при смене условия. Почему так происходит? Все
		просто на самом деле.
		<span class="attention">
			Если мы делаем по условию лишь содержимое, то сам компонент
			как инициировался в DOM-дереве, так в нем и остается, даже
			если мы меняем условие</span
		>. В этом легко убедиться, открыв разметку в браузере в режиме
		разработчика.
	</p>
	<p>
		Если необходимо, чтобы содержимое инициировалось и уничтожалось
		каждый раз при переключении кнопки, условие нужно ставить на сам
		компонент:
	</p>
	<pre><code><span class="comment comment_start">// app.component.ts</span>
<span class="variable">showChild</span> <span class="operator">=</span> <span class="boolean">false</span>;

<span class="comment comment_start">// app.component.html</span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">(click)</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span> <span class="operator">=</span> <span class="operator">!</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/button></span>
<span class="tag"><</span><span class="tag">app-child</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span>
	<span class="tag"><</span><span class="tag">span></span><span class="string">Какое-то содержимое, которое передается внутрь дочернего компонента</span><span class="tag"><</span><span class="tag">/span></span>
<span class="tag"><</span><span class="tag">/app-child></span>
		

<span class="comment comment_start">// child.component.ts</span>
<span class="method">ngOnInit() {</span>
	console.<span class="method">log(</span><span class="string">'Сработал метод'</span><span class="punctuation">)</span>; <span class="comment">// метод будет срабатывать каждый раз при инициализации компонента</span>
<span class="punctuation">}</span>

<span class="comment comment_start">// child.component.html</span>
<span class="tag"><</span><span class="tag">ng-content</span><span class="tag">></span><span class="tag"><</span><span class="tag">/ng-content></span></code></pre>`,
        selected: false,
        lastUpdate: '03.08.2023',
    },
    {
        title: 'Как создаются пользовательские события?',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
    {
        title: 'Какие существуют механизмы привязки данных?',
        body: `<p>В Angular существует 4 способа привязки данных:</p>
        <ul>
            <li>
                <span class="attention">интерполяция</span> - данные берутся из
                компонента;
            </li>
            <li>
                <span class="attention">одностороннее связывание</span>
                - данные берутся из компонента;
            </li>
            <li>
                <span class="attention">обработка событий</span> - данные после
                определенного события возвращаются в компонент;
            </li>
            <li>
                <span class="attention">двустороннее связывание</span> - данные
                берутся из компонента и после определенного события ему же
                возвращаются.
            </li>
        </ul>
        <i class="subtitle">Интерполяция</i>
        <p>Примеры интерполяции:</p>
        <pre><code><span class="tag"><</span><span class="tag">p</span><span class="tag">></span>Hello, <span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag"><</span><span class="tag">/p</span><span class="tag">></span> <span class="comment">// (1) Основной способ использования интерполяции</span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword">name</span><span class="operator">=</span><span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag">></span> <span class="comment">// (2) Так тоже будет работать, но такая запись редко встречается</span></code></pre>
        <p>
            При использовании интерполяции данные для переменной
            <code>name</code> берутся из того же самого компонента, к которому
            привязан шаблон с текущей разметкой. Данный способ привязки данных
            обычно используется, чтобы вывести в содержимом разметки какие-то
            данные.
        </p>
        <i class="subtitle">Одностороннее связывание</i>
        <p>
            Если необходимо изменять данные атрибутов элементов разметки, то
            интерполяцию тоже можно использовать (см. выше пример (2)), но в
            основном это делают через
            <span class="attention">одностороннее связывание</span>. Но суть та
            же:
        </p>
        <pre><code><span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword"><span class="punctuation">[</span><span class="keyword">name</span><span class="punctuation">]</span></span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">name</span><span class="punctuation">"</span><span class="tag">></span> <span class="comment">// (2*) запись второго примера из интерполяции через одностороннее связывание</span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword"><span class="keyword">bind-name</span></span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">name</span><span class="punctuation">"</span><span class="tag">></span> <span class="comment">// (2**) Альтернативная запись. Встречается реже</span></code></pre>
        <i class="subtitle">Обработка событий</i>
        <p>
            Что касается событий, то в Angular
            <span class="attention">
                все события можно отследить и обработать </span
            >, привязав к ним вызов метода класса. Делается это следующим
            образом:
        </p>
        <pre><code><span class="tag"><</span><span class="tag">button</span> <span class="punctuation">(</span><span class="keyword">click</span><span class="punctuation">)</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">()</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">on-click</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">()</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка-близнец<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span> <span class="comment">// альтернативный вариант записи</span></code></pre>
        <p>
            В данных примерах при клике на кнопку будет вызвана функция
            <code>showItems()</code>. Названия событий всегда должны быть
            заключены в круглые скобки или предваряться префиксом
            <code>on-</code>.
        </p>
        <p>
            Если необходимо получить подробную информацию о событии, то она
            хранится в объекте <code>$event</code>, который передается в функцию
            в качестве аргумента.
        </p>
        <pre><code><span class="tag"><</span><span class="tag">button</span> <span class="punctuation">(</span><span class="keyword">click</span><span class="punctuation">)</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">(</span>$event<span class="punctuation">)</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span></code></pre>
        <p>
            Помимо встроенных событий можно создавать также и свои -
            <span class="attention">пользовательские события</span>. За этот
            функционал отвечает класс <code>EventEmitter</code>.
        </p>
        <i class="subtitle">Двустороннее связывание</i>
        <p>
            Механизм двустороннего связывания (two way binding) используется,
            когда
            <span class="attention"
                >необходимо отобразить свойство в шаблоне</span
            >
            (одностороннее связывание)
            <span class="attention">и обновить его при изменении значения</span>
            (обработка события)
            <span class="attention">без перезагрузки страницы</span>.
        </p>
        <p>
            Синтаксис двустороннего связывания представляет собой слияние
            одностороннего связывания ("<code>[]</code>") и привязки события
            ("<code>()</code>").
        </p>
        <pre><code><span class="tag"><</span><span class="tag">some-item</span> <span class="punctuation">[(</span><span class="keyword">name</span><span class="punctuation">)]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">myName</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/some-item</span><span class="tag">></span></code></pre>
        <p>
            Запись <code>[(name)]="myName"</code> означает, что при изменении
            <code>name</code> в дочернем компоненте (откуда оно будет получено в
            измененном виде), измененнное значение будет присвоено свойству
            <code>myName</code> компонента <code>some-item</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Вложенные свойства атрибутов',
        body: `<p>
		В ангуляре можно использовать вложенные свойства у атрибутов.
		Например, вы хотите задать ширину элементу в процентах. Сделать
		это можно различными способами:
	</p>
	<pre><code><span class="tag"><</span><span class="tag">p</span> <span class="attribute">style</span><span class="operator">=</span><span class="string">"width: 50%"</span><span class="tag">></span>Какой-то текст<span class="tag"><</span><span class="tag">/p></span>
<span class="tag"><</span><span class="tag">p</span> <span class="attribute">[style.width.%]</span><span class="operator">=</span><span class="string">"50"</span><span class="tag">></span>Какой-то текст<span class="tag"><</span><span class="tag">/p></span>
</code></pre>
	<p>Обе записи выдадут одинаковый результат.</p>`,
        selected: false,
        lastUpdate: '05.07.2023',
    },
    {
        title: 'Обработка событий комбинаций клавиш',
        body: `<p>
		Очень редко, но бывают ситуации, когда необходимо обработать
		событие комбинации конкретных клавиш. В Ангуляре это можно
		сделать следующим образом:
	</p>
	<pre><code><span class="tag"><</span><span class="tag">input</span> <span class="attribute">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="attribute">(keydown.control.enter)</span><span class="operator">=</span><span class="string">"</span><span class="function-name">someFunction()</span><span class="string">"</span> <span class="tag">/></span></code></pre>
	<p>
		Соответственно, когда инпут будет в фокусе, зажав комбинацию
		клавиш <code>Ctrl + Enter</code> у вас вызовется функция
		<code>someFunction</code>, в которую уже вам решать какую логику
		заложить. 
	</p>
	<p>Если нужно обработать еще больше клавиш, то также перечисляете их через точку, как в примере выше.</p>`,
        selected: false,
        lastUpdate: '06.07.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
