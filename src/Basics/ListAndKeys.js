//СПИСКИ И КЛЮЧИ
/*у каждого элемента массива должен быть ключ (key). «Ключ» — это специальный строковый атрибут, 
который нужно указывать при создании списка элементов. 

Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. 
Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени

Если вы опустите ключ для элемента в списке, то React по умолчанию будет использовать индексы как ключи.
*/
const numbers = [1, 2, 3, 4, 5];
const doubledNums = numbers.map((number) => number*2);
console.log(doubledNums);

//РЕНДЕР НЕСКОЛЬКИХ КОМПОНЕНТОВ
/*Вы можете создать коллекцию элементов и встроить её в JSX с помощью фигурных скобок {}.*/ 
const numbers = [1,2,3,4,5];
const listOfItems = numbers.map((number) => <li>{number}</li>);

//ДОБАВИМ КАЖДОМУ ЭЛУ АТРИБУТ KEY
function NumberList2(props){
    const numbers = props.numbers;
    const ListItems = numbers.map((number) => 
    <li key={number.toString()}>
        {number}
    </li>
    );
}

const numbers4 = [5, 6, 7, 8];
console.log(toString(5));
/*
Для объектов Number метод toString() возвращает строку, представляющую объект в определённой системе 
счисления.
Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от 
его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи
*/

const todoItems = todos.map((todo) => 
    <li key={todo.id}>
        {todo.text}
    </li>
    );

var text = element.textContent; //textContent - Позволяет задавать или получать текст элемента и его потомков.
element.textContent = "Just a text";

/*Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ
Мы не рекомендуем использовать индексы как ключи, если порядок элементов может поменяться*/
const todoItems2 = todos2.map((todo2, index) =>
    <li key={todo2.index}>
        {todo2.text}
    </li>)

//ИЗВЛЕЧЕНИЕ КОМПОНЕНТОВ С КЛЮЧАМИ
//КЛЮЧИ НУЖНО ОПРЕДЕЛЯТЬ НЕПОСРЕДСТВЕННО ВНУТРИ МАССИВА
//ЕСЛИ ВЫ ИЗВЛЕКАЕТЕ КОМПОНЕНТ ListItem, ТО НУЖНО УКАЗЫВАТЬ КЛЮЧ ДЛЯ <ListItem /> В МАССИВЕ, А НЕ В ЭЛЕМЕНТЕ
//<li> ВНУТРИ САМОГО ListItem

//ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ КЛЮЧЕЙ
function MakeListItem(props){
    return(
        <li>{props.value}</li>
    )
}

function ListItems(props){
    const numbers = props.numbers;
    const ListItems = numbers.map((number) => 
    <MakeListItem key={number.toString()} value={number} />);
    return(
        <ul>
            {ListItems}
        </ul>
    );
}

//КЛЮЧИ ДОЛЖНЫ БЫТЬ УНИКАЛЬНЫМИ СРЕДИ СОСЕДНИХ ЭЛЕМЕНТОВ
/*
Ключи внутри массива должны быть уникальными только среди своих соседних элементов. 
Им не нужно быть уникальными глобально. Можно использовать 
один и тот же ключ в двух разных массивах.
*/
function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>)
            }
        </ul>
    );
    const content = props.posts.map((post) => 
    <div key={post.id}>
        <h3>post.title</h3>
        <p>post.content</p>
    </div>);
    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

//Встраивание map() в JSX
/*
JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map()
*/
function ListItemJSX(props){
    const numbers = props.numbers;
    return(
        <ul>
            {numbers.map((number)=>
            <MakeListItem 
                key={number.toString()}
                value={number} />)}
        </ul>
    );
}