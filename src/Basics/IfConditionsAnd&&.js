import React,{Component, props, showWarning} from 'react';

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Greetings!</h1>
            {unreadMessages > 0 &&
                <h2>You have {unreadMessages.length} messages</h2>
            }
        </div>
    );
}

const messages = ['react', 'js', 'html'];

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

  function WarningBanner(props){
    if(! props.warning){
        return null       
    }
    return(
        <h1>
            Warning
        </h1>
    )
  }

//Предотвращение рендеринга компонента
/*В редких случаях может потребоваться позволить компоненту спрятать себя, 
хотя он уже и отрендерен другим компонентом. Чтобы этого добиться, 
верните null вместо того, что обычно возвращается на рендеринг. */
/* {this.state.showWarning ? 'Hide' : 'Show'} - если состояние "показать пр-дение" = true, то "Спрятать", 
иначе - показать */

class Page extends React.Component{
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
                <WarningBanner waring = {this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}    
                </button>
            </div>
        );
    }
}

