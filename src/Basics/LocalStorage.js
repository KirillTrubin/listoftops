/* localStorage и sessionStorage позволяют хранить пары Ключ-Значение в браузере
Сохраняют данные при:
    localStorage - при перезапуске браузера
    sessionStorage - при обновлении страницы
    
    Методы и свойства:
    setItem(key, value) - сохранить пару ключ-значение;
    getItem(key) - получить данные по ключу;
    removeItem(key) - удалить данные по ключу;
    clear() - удалить все;
    key(index) - получить ключ на заданной позиции
    length - кол-во элементов в хранилище

    ЧТОБ СОХРАНИТЬ ЭЛЕМЕНТ:
    СОЗДАТЬ ID ВСЕЙ КАРТОЧКИ
    ЗАПИСАТЬ ID В ПЕРЕМЕННУЮ ID
    ДОБАВИТЬ ОБЪЕКТ В LOCALSTORAGE
    ПРИ ПЕРЕБИРАНИИ ОБЪЕКТОВ В LOCALSTORAGE СДЕЛАТЬ ЦИКЛ И ВЫВЕСТИ ВСЕ СВОЙСТВА В ПОРЯДКЕ 

    ЧТОБ УДАЛИТЬ ЭЛЕМЕНТ:
    СОЗДАТЬ ID ВСЕЙ КАРТОЧКИ
    ЗАПИСАТЬ ID В ПЕРЕМЕННУЮ ID
    УДАЛИТЬ ОБЪЕКТ ИЗ LOCALSTORAGE 
    */

    localStorage.setItem('film' , 1);

    for(let i; i<localStorage.length; i++){
        let key = localStorage.key(i);
        alert(key);
    }