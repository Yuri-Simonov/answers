import { IInfo } from 'src/app/shared/interfaces';

export const INJECTABLE: IInfo = {
    title: 'Декоратор <span class="variable">@Injectable()</span>',
    body: `<p>
            Декоратор <code>@Injectable()</code>
            <span class="attention">
                нужен для явного указания того, что сервис может использовать
                другие сервисы.
            </span>
        </p>
        <pre><code class="language-typescript">// пример использования данного декоратора
@Injectable({providedIn: 'root'})</code></pre>
        <p>
            Иначе говоря, данный декоратор гарантирует, что встроенный механизм
            внедрения зависимостей (<code>dependency injection</code>) сможет создать объект
            этого класса и передать в него в качестве зависимости другие объекты
            (другие сервисы или компоненты, если в этом есть необходимость).
        </p>
        <p>
            Если сервис не использует никакие другие зависимости, то данный
            декоратор можно и не указывать. <span class="attention">Без него сервис тоже будет работать</span>.
            Но среди Angular-разработчиков существует договоренность, что
                данный декоратор стоит применять к любому классу сервиса.
        </p>`,
    selected: false,
    lastUpdate: '14.09.2023',
};
