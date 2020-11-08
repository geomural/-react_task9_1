Александра Шарифуллина

Домашнее задание 9.1

<h1>React Router</h1>

<h1>Навигационное меню</h1>

Необходимо реализовать меню для сайта гоночного такси с пунктами «Главная», «Дрифт-такси», «Time Attack» и «Forza Karting». При переходе на страницу соответствующий пункт меню должен подсветиться:

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/router/menu/assets/menu.jpg" alt=""/>

<h2>Описание компонента</h2>
Компонент должен создавать HTML-разметку вида:


<i><nаv clаss="menu">

  <а class="menu__item" href="/">Главная</а>

  <а class="menu__item" href="/drift">Дрифт-такси</а>

  <а class="menu__item" href="/timeattack">Time Attack</а>

  <а clаss="menu__item" href="/forza">Forza Karting</а>
  
</nаv></i>

Активный пункт меню помечается классом menu__item-active.

<h2>Реализация</h2>

Необходимо реализовать компонет Menu.

Воспользуйтесь готовым файлом App.js и стилями css/index.css из данного каталога в качестве отправной точки (замените ими те, что создаются в create-react-app).

<b>Обратите внимание:</b> в файлах App.js расположено несколько компонентов не потому, что так нужно делать, а для вашего удобства (чтобы вам было удобнее копировать). Будет хорошо, если в своём решении вы разнесёте их по разным файлам.

<i>Исходное задание: https://github.com/netology-code/ra16-homeworks/tree/master/router/menu</i>
