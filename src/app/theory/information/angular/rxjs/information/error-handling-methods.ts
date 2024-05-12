import { IInfo } from '@types';

export const ERROR_HANDLING_METHODS: IInfo = {
    title: 'Способы обработки ошибок в <span class="variable">RxJs</span>',
    body: `<p>
                Чтобы ваше приложение "не падало" из-за возможной ошибки
                (например, сервер не отвечает на ваш запрос), эти самые ошибки
                можно и нужно обрабатывать.
            </p>
            <p>В Angular обрабатывать ошибки можно несколькими способами:</p>
            <i class="subtitle">Оператор catchError</i>
            <p>
                <span class="attention">
                    Оператор <code>catchError</code> позволяет обработать
                    возможную ошибку без каких-либо дополнительных побочных
                    эффектов.
                </span>
            </p>
            <pre><code class="language-typescript">source = throwError('какая-то ошибка'); // имитируем ошибку

subscription = source.pipe(
		catchError(err => {
			console.log('отловлена ошибка:', err);
			return of('данные обработки ошибки'); // обязательно нужно вернуть данные типа Observable
		})
  	)
	.subscribe(
		val => console.log('next:', val),
		err => console.log('error:', err),
		() => console.log('completed:', 'поток завершен')
	);</code></pre>
            <p>
                В результате выполнения данного кода в консоли мы увидим
                следующее:
            </p>
            <pre><code class="language-typescript">// отловлена ошибка: какая-то ошибка
// next: данные обработки ошибки
// completed: поток завершен</code></pre>
            <i class="subtitle">Оператор retry</i>
            <p>
                <span class="attention"
                    >Оператор <code>retry</code> при возникновении ошибки будет
                    запрашивать данные повторно.</span
                >
                Количество повторных запросов передается параметров в метод:
            </p>
            <pre><code class="language-typescript">source = new Observable(subscriber => {
  	console.log('Следующая попытка');
 	subscriber.error('какая-то ошибка'); // имитируем ошибку
});

subscription = source.pipe(retry(2)) // в случае ошибки запрашиваем данные повторно 2 раза
	.subscribe(
		val => console.log('next:', val),
		err => console.log('error:', err),
		() => console.log('completed:', 'поток завершен')
	);</code></pre>
            <p>
                В примере выше мы намеренно у <code>source</code> имитируем
                ошибку и делаем поочередно еще 2 запроса на получение данных.
                Если за эти 2 запроса мы не получаем данные, тогда уже у
                <code>subscription</code> сработает метод <code>error</code>.
            </p>
            <pre><code class="language-typescript">// Следующая попытка
// Следующая попытка
// Следующая попытка
// error: какая-то ошибка</code></pre>
            <i class="subtitle">Оператор retryWhen</i>
            <p>
                Оператор <code>retryWhen</code> своего рода модификация
                оператора <code>retry</code>.
                <span class="attention"
                    >Данный оператор будет вызываться уже по определенному
                    условию - по результату выполнения другого
                    <code>Observable</code></span
                >:
            </p>
            <pre><code class="language-typescript">flag = true;

source = new Observable(subscriber => {
  console.log('имитация обращения к серверу');
  if (flag) {
    subscriber.error('какая-то ошибка');
    flag = false;
  } else {
    subscriber.next('успешный ответ сервера');
  }
});

obs = new Observable(subscriber => {
  console.log('подожди секундочку');
  setTimeout(() => subscriber.next('какие-то данные'), 1000);
});

subscription = source.pipe(retryWhen(err$ => obs))
  .subscribe( val => console.log('next:', val));</code></pre>
            <p>
                В примере выше, когда происходит ошибка, оператор
                <code>retryWhen</code> возвращает новый <code>Observable</code>,
                в данном случае это <code>obs</code>. Спустя 1 секунду
                <code>obs</code>
                возвращает какие-то данные и в этот момент оператор
                <code>retryWhen</code> вновь обратится к своему источнику, чтобы
                попытаться получить данные.
            </p>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code class="language-typescript">// имитация обращения к серверу
// подожди секундочку
// имитация обращения к серверу
// next: успешный ответ сервера</code></pre>
            <i class="subtitle">Оператор onErrorResumeNext</i>
            <p>
                Суть данного оператора заключается в том, что
                <span class="attention"
                    >когда происходит какая-то ошибка, он переключается на
                    другой <code>Observable</code></span
                >
                (своего рода запасной/страхующий поток).
            </p>
            <pre><code class="language-typescript">source = new Observable(subscriber => {
	console.log('попытка подключения');
	subscriber.error('ошибка!');
});

planB = of('План "Б" на случай ошибки');

subscription = source.pipe(onErrorResumeNext(planB))
	.subscribe(
		val => console.log('next:', val),
		err => console.error('error:', err),
		() => console.log('completed: поток завершен')
	);</code></pre>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code class="language-typescript">// попытка подключения
// ошибка!
// completed: поток завершен</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
