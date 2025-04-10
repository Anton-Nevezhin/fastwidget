# Fastwidget
Fastwidget отображает на странице фиксированное меню. При выборе пункта меню происходит либо открытие модального окна, либо переход по ссылке.
## Подключение
Для подключения необходимо в html-файл необходимой страницы перед закрывающим тегом body поместить следующую строчку:
~~~html
<script defer src="https://anton-nevezhin.github.io/fastwidget/fastwidget.js"></script>
~~~
## Настройка
Для настройки внешнего вида и содержимого меню необходимо поместить в этот же файл код следующего вида:
~~~html
<script>
    let fast_config =  {
        elements : [
            {
                name : 'Модальное окно',
                modal : '#window_id',
                icon : 'icon_image',

            },
            {
                name : 'Ссылка',
                url : 'url',
                icon : 'icon_image',
            },
        ...],
        config : [
            {
                color: 'green',
                background : '#eeeeee',
                position: 'right'
            },
        ]
    }
</script>
~~~
__Здесь:__
- name - текст пункта меню
- modal - id модального окна
- url - ссылка для перехода
- icon - ссылка на иконку пункта меню
- color - цвет шрифта меню
- background - цвет фона меню
- position - выравнивание кнопки меню по горизонтали