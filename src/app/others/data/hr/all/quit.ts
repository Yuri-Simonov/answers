import { IInfo } from 'src/app/shared/interfaces';

export const QUIT: IInfo = {
    title: 'Почему вы хотите уйти с текущего места работы?',
    body: `<p>
                Можно честно ответить на данный вопрос, если есть действительно веская причина ухода,
                <span class="attention">главное избегать негатива в сторону текущего</span> (или прошлого, если уже
                уволились) <span class="attention">работодателя</span>.
            </p>
            <p>Ответить можно следующим образом:</p>
            <q>
                Моя текущая работа была отличным опытом, и я многому здесь научился. Но я чувствую, что здесь я достиг
                своего предела развития. Мне хотелось бы продолжать развиваться, работать с новыми технологиями и
                участвовать в более сложных проектах, что я вижу возможным в вашей компании.
            </q>
            <p>
                Данный пример, конечно же, стоит воспринимать лишь как возможный ориентир и по-хорошему изменить под
                себя.
            </p>`,
    selected: false,
    lastUpdate: '05.09.2024',
};
