import { IQuestion } from 'src/app/shared/types/question.interface';

export const functionQuestions: IQuestion[] = [
    {
        title: 'Почему внутри функций мы имеем доступ к глобальным переменным?',
        body: `<p>
            Когда код хочет получить доступ к переменной,
            <span class="attention">
                сначала происходит поиск во внутреннем лексическом окружении,
                затем во внешнем</span
            >, затем в следующем и так далее,
            <span class="attention">пока не дойдет до глобального</span>.
        </p>`,
        selected: false,
    },
    {
        title: 'Почему функции, объявленные через "Function Declaration" можно вызывать перед их определением в коде?',
        body: `<p>
            Функции, объявленные через <code>Function Declaration</code>, в
            отличие от переменных, объявленных с помощью <code>let</code> и
            <code>const</code> (сюда же входит и
            <code>Function Expresion</code>),
            <span class="attention">
                инициализируются, когда создаётся их лексическое окружение,
            </span>
            а не когда происходит их вызов в коде.
        </p>
        <p>
            Лексическое окружение верхнеуровневых функций, объявленных через
            <code>Function Declaration</code>,
            <span class="attention">
                создается сразу после начала считывания кода интерпритатором.
            </span>
        </p>`,
        selected: false,
    },
    {
        title: 'Что такое замыкания?',
        body: `<p>
            Если отвечать очень примитивным языком, то замыкание - это
            <span class="attention">функция внутри другой функции</span>. Но при
            этом у внутренней функции создается уже
            <span class="attention">
                свое лексическое окружение, зависящее от того, где была
                инициализирована внешняя функция.
            </span>
        </p>
        <pre>
<code><span class="keyword">function</span> <span class="function-name">outside</span><span class="punctuation">(</span>name<span class="punctuation">)</span> <span class="punctuation">{</span>
	<span class="keyword">const</span> age <span class="operator">=</span> <span class="number">26</span>;
	<span class="keyword">function</span> <span class="function-name">inside</span><span class="punctuation">(</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'Меня зовут '</span> <span class="operator">+</span> name <span class="operator">+</span> <span class="string">'и мне '</span> <span class="operator">+</span> age <span class="operator">+</span> <span class="string">' лет'</span><span class="punctuation">')</span>;
	<span class="punctuation">}</span>
	<span class="function-name">inside</span><span class="punctuation">()</span>;
<span class="punctuation">}</span>
<span class="function-name">outside</span><span class="punctuation">('</span><span class="string">Юрий</span><span class="punctuation">')</span>; <span class="comment">// Меня зовут Юрий и мне 26 лет</span>
</code>
</pre>
        <p>
            Например, во внешнюю функцию <code>outside</code> были передан
            параметр <code>name</code> с определенным значением. Когда мы
            вызовем функцию <code>outside</code> и передадим в нее аргументом
            какое-то имя (в примере "Юрий"), то данная
            <span class="attention">переменная замыкается</span> или, иначе
            говоря, <span class="attention">запоминается</span> в лексическом
            окружении данной функции.
        </p>
        <p>
            И когда будет вызвана функция <code>inside</code>, она возьмет из
            своего внешнего лексического окружения переменные
            <code>name</code> (замкнута внутри функции <code>outside</code>) и
            <code>age</code> (определена внутри функции <code>outside</code>).
        </p>
        <p>
            Именно поэтому результатом вызова функции
            <code>outside</code> будет вывод в консоль строки "Меня зовут Юрий и
            мне 26 лет".
        </p>`,
        selected: false,
    },
    {
        title: 'Одна и та же функция была вызвана несколько раз, но в разных местах, какое в итоге будет у нее лексическое окружение?',
        body: `<p>
            Запомните правило:
            <span class="attention">
                Один вызов – одно лексическое окружение.
            </span>
        </p>
        <p>
            Новое лексическое окружение функции создаётся каждый раз, когда
            функция выполняется.
        </p>
        <p>
            То есть, если функция вызывается несколько раз, то
            <span class="attention">
                для каждого вызова будет создано своё лексическое окружение,
            </span>
            со своими локальными переменными и параметрами, зависящими от места
            вызова функции.
        </p>`,
        selected: false,
    },
];
