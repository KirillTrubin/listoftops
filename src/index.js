import React,{Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import ListOfTop20 from './MovieRequest';
import './ListStyle.css';
import ShowMovies from './ShowMovieList';


/*ReactDOM.render(
    <App />,
  document.getElementById('root')
);*/

/*
//TIME FUNCTION
function Clock(props){
  return(
    <h1>{props.date.toLocaleTimeString()}</h1>
  )
}

function Tick(){
  ReactDOM.render(
      <ClockClass />,
      document.getElementById('root')
  );
}

class ClockClass extends React.Component{
  constructor(props){
      super(props);
      this.state={date: new Date()}; //Состояние компонента - ОБЪЕКТ С ТЕКУЩИМ ВРЕМЕНЕМ
  }
  
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
      return(
          <div>
              <h1>Hello</h1>
              <h2>Now is: {this.state.date.toLocaleTimeString()}</h2>
          </div>
      )
  }
}
setInterval(Tick, 1000);


//LogIn Greeting 
function Greeting(props){
  if(/*this(?)props.IsLoggedIn){
    return <h1>Welcome Back!</h1>
  }
  return <h1>Log in</h1>
}

/*
ReactDOM.render(
  <Greeting IsLoggedIn={true} />,
  document.getElementById('root')
)


function LoginButton(props){
  return(
    <div onClick={props.onClick}>Enter</div>
  );
}

function LogoutButton(props){
  return(
    <div onClick={props.onClick}>Exit</div>
  );
}

class LoginControl extends React.Component{
  constructor(props){
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn : false}
  }
  
  handleLoginClick(){
    this.setState({isLoggedIn : true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn : false});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn == true){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    }else{button = <LoginButton onClick={this.handleLoginClick} />}

    return(
      <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
      </div>
    );
  }
}

//УСЛОВНЫЕ ОПЕРАТОРЫ
/*В JavaScript выражение true && expression всегда вычисляется как expression, 
а выражение false && expression — как false.
То есть, если условие истинно (true), то элемент, идущий непосредственно за &&, будет передан на вывод. 
Если же оно ложно (false), то React проигнорирует и пропустит его.
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Greetings!</h1>
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} messages</h2>
            }
        </div>
    );
}
//Вы можете воспользоваться тернарным оператором condition ? true : false.
//{isLoggedIn ? 'Is' : 'Is not'} ЕСЛИ isLoggedIn = true, то 1-е, если false, то 2-е
class TernOper extends Component{
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <div>
        User <b>{isLoggedIn ? 'Is' : 'Is not'}</b> on the site 
      </div>
    );
  }
}

//Предотвращение рендеринга компонента
/*В редких случаях может потребоваться позволить компоненту спрятать себя, 
хотя он уже и отрендерен другим компонентом. Чтобы этого добиться, 
верните null вместо того, что обычно возвращается на рендеринг. 

const messages = ['react', 'js', 'html'];

function WarningBanner(props){
  if(! props.warning){
      return null;       
  }
  return(
      <h1>
          Warning
      </h1>
  );
}


class Page extends Component{
  constructor(props){
      super(props);
      this.state = {showWarning : true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
      this.setState(state => ({
          showWarning: !state.showWarning
      }));
  }

  render(){
      return(
          <div>
              <WarningBanner warning = {this.state.showWarning} />
              <button onClick={this.handleToggleClick}>
                  {this.state.showWarning ? 'Hide' : 'Show'}    
              </button>
          </div>
      );
  }
}


const numbers = [1, 2, 3, 4, 5];
const doubledNums = numbers.map((number) => number*2);
console.log(numbers);
console.log(doubledNums);

const numbers2 = [1,2,3,4,5];
const listOfItems = numbers2.map((number) => <li>{number}</li>);

//Простой компонент-список
function NumberList(props){
  const numbers = props.numbers;
  const ListOfNums = numbers.map((number) => <li>{number}</li>);
  return(
    <ul>{ListOfNums}</ul>
  );
}

const numbers3=[1,2,3,4];

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
function Blog(props){ //МАССИВ ПЕРЕДАН
  const sidebar = (
      <ul>
          {props.posts.map((post) => //ИДЕТ ПО МАССИВУ posts И ДЕЛАЕТ ЭЛЕМЕНТ СПИСКА С КЛЮЧЕМ И ТИТУЛОМ
          <li key={post.id}>
              {post.title}  
          </li>)
          }
      </ul>
  );
  const content = props.posts.map((post) => /*ИДЕТ ПО МАССИВУ, ЗАДАЕТ ЭЛЕМЕНТАМ БЛОКА КЛЮЧ И ВЫВОДИТ ЭЛЕМЕНТ
                                            (ТИТУЛ И КОНТЕНТ)
  <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
  </div>);
  return( //ВОЗВРАЩАЕТ 2 СПИСКА 
      <div>
          {sidebar} 
          <hr />
          {content}
      </div>
  )
}

const posts = [
  {id:1, title:'Hello, World', content:'Welcome to RD'},
  {id:2, title:'Download', content:'Free Download'}
];

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

function Example(){
  const [count, setCount] = useState(0);

  useEffect(() =>{
  document.title = {count};
  });

  return(
      <div>
          <p>You have pressed {count} times</p>
          <button onClick={() => setCount(count+1)}>Click</button>   
      </div>
  );
}

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
      alert('The name is: '+this.state.value);
      event.preventDefault();
  }
  render(){
      return(
          <form>
              <label onSubmit={this.handleSubmit}> 
                  Имя:
                      <input type='text' value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type='submit' value='Send' />
          </form>
      );
  }
}
*/
/*
const TOKEN = '6e7357a8-ef10-403c-8ea7-88694d884af7';

const getTopMovies = () => {
   return fetch(`https://www.myapifilms.com/imdb/top?start=1&end=20&token=${TOKEN}`)
        .then(response => response.json())
        .then(({ data: { items } }) => items);
}
function List(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        getTopMovies().then(items => {
            setItems(items);
        });
    }, []);

    return(
      <div className='ListOfTops'>
      { items.length && items.map(item => <div className='FilmContainer' key={item.idIMDB}>
              <div className='FilmCard'>
                  <img src={item.urlPoster}></img>
                  <div>{item.title}</div>
                  <div></div>
                  <div></div>
              </div>
              <div className='Star'>
                  <i className="fa fa-star-o"></i>
              </div>
          </div>
      )}
      </div>
  );
}
*/

//let myStorage;
//myStorage = window.localStorage;W


ReactDOM.render(
    <ListOfTop20 />,
    document.getElementById('root')
  );
