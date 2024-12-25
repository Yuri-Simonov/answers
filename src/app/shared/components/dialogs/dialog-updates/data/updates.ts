import { IUpdates } from '../interfaces/updates.interface';

/**
 * Возвращает массив id обновлений
 */
export const getUpdatesIds = (): number[] => UPDATES.map((update) => update.id);

/**
 * Список обновлений.
 * Элементы массива заполняются в обратном порядке
 */
export const UPDATES: IUpdates[] = [
    {
        id: 25122024,
        title: 'Обновление от 25.12.2024',
        changes: [
            {
                chapterTitle: 'Теория',
                added: ['В раздел "Сервисы" добавлена информация по свойству viewProviders (Angular)'],
            },
        ],
    },
    {
        id: 18122024,
        title: 'Обновление от 18.12.2024',
        changes: [
            {
                chapterTitle: 'Теория',
                added: ['В раздел "Сервисы" добавлена информация по декораторам DI (Angular)'],
                updated: [
                    'Информация по общим понятиям декораторов в разделе "Декораторы" (Angular)',
                    'Информация по декораторам DI перенесена в раздел "Сервисы". В разделе "Декораторы" осталась непрямая ссылка на них (Angular)',
                    'Информация по декоратору @Attribute перенесена в раздел "Change Detection". В разделе "Декораторы" осталась непрямая ссылка на них (Angular)',
                ],
                removed: ['Информация по декоратору @Injectable в разделе "Декораторы" из-за неактуальности (Angular)'],
            },
        ],
    },
    {
        id: 7122024,
        title: 'Обновление от 07.12.2024',
        changes: [
            {
                chapterTitle: 'Общее',
                added: [
                    'Новая страница "Настройки", доступная в шапке проекта. В ней можно настраивать под себя проект',
                    'Модальное окно, в котором можно просматривать обновления проекта Helper',
                    'Выбор фонового изображения в проекте',
                ],
                updated: ['Выбор темы проекта перенесено на страницу "Настройки"'],
            },
            {
                chapterTitle: 'Теория',
                added: ['Новая информация в раздел "Сервисы" (Angular)', 'Информация по директиве @let (Angular)'],
                updated: [
                    'Старая информация в разделе "Сервисы" (Angular)',
                    'Информация в разделе про авторизацию и аутентификацию (Разное)',
                    'Информация по standalone-сущностям (Angular)',
                ],
            },
            {
                chapterTitle: 'Тесты',
                added: ['52 новых вопроса по JavaScript (теперь суммарно 59 вопросов)'],
            },
            {
                chapterTitle: 'Код-ревью',
                added: ['Новый раздел "Код-ревью"'],
            },
        ],
    },
    {
        id: 23092024,
        title: 'Обновление от 23.09.2024',
        changes: [
            {
                chapterTitle: 'Общее',
                added: [
                    'Новый общий раздел с задачами на главной странице',
                    'Новый общий раздел "Разное" на главной странице',
                ],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
                fixed: ['Поведение стилей анимации при переходах между маршрутами'],
            },
            {
                chapterTitle: 'Теория',
                added: ['Информация про CORS в разделе "Разное"'],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
            },
        ],
    },
];
