## Getting Started

Для запуска проекта Frontend:

```bash
cd Frontend - перейти в папку Frontend
yarn - скачать зависимости
yarn dev - запуск проекта
Frontend [http://localhost:3000]
```

Для запуска тестовой api:

```bash
cd Backend - перейти в папку Frontend
yarn - скачать зависимости
node server.js - запуск сервера
Backend [http://localhost:3030]
```

**Общее:**

На странице /posts есть все посты - при открытии конкретного поста отображается список комментариев к нему. С помощью userId подтягивается логин пользователя.

**Внешний вид:**

Не особо заморачивался по поводу стилей, так как времени было не так много. Использовал SCSS в формате CSS Modules, как и было указано в задании.

**Каждый пост на отдельном URL:**

Выполнил это условие.

**Посты должны подтягиваться так, чтобы поисковые роботы видели уже отрендеренные страницы (т.е. через SSR и с использованием next seo).**

Это условие также выполнено. Не совсем понял, о чём вы говорите, когда упоминаете next seo. Я использовал встроенную в next.js API Metadata для динамической генерации seo-методанных на каждый пост и общую страницу с постами.

**Пагинация:**

Сделал пагинацию более корректной. На странице отображается 10 постов (количество можно менять), а также общее количество страниц. Работает переключение по страницам.

**Сделал фейковое мини api для авторизации по логину-паролю.** Управление состоянием через storeon, как и было указано в задании.

**Лишний рендеров и запросов к API нет.**
