/*label нужен для того, чтоб изменять значения єлементов формі при нажатии миши на текст
По умолчанию браузер переходит на другую страницу при отправке HTML-форм, в том числе и этой.

<textarea> в качестве текста отображает дочерний элемент

В React мутабельное состояние обычно содержится в свойстве компонентов state и обновляется только 
через вызов setState()

Мы можем скомбинировать оба подхода и сделать состояние React-компонента «единственным источником правды».*/

import React from 'react';

function Forms(props){
    return(
        <form>
            <label> 
                Имя:
                    <input type='text' name='name' />
            </label>
            <input type='submit' name='Send' />
        </form>
    );
}

//Управляемые компоненты
/*Допустим, мы хотим, чтобы предыдущий пример выводил на экран имя, когда мы отправляем форму. 
Тогда можно написать форму в виде управляемого компонента:
*/
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value}); //ССЫЛКА НА ЗНАЧЕНИЕ КЛИКНУТОГО ЭЛЕМЕНТА 
    }
    handleSubmit(event){
        alert('The name is'+''+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form>
                <label onSubmit={this.handleSubmit}> 
                    Имя:
                        <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' name='Send' />
            </form>
        );
    }
}