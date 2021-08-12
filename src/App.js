import Hello from './Fcomponent';
import Class1 from './ClassComponent';
import Coment from './ComponentExtraction';
import ShowTime from './StateAndLifeCycle';
import ReactDOM from 'react';

function App() {
  return (
    <>
      <Hello name='Kirill' />
      <Class1 name='Kirill Trubin' />
      <Hello name='Marlon' />
      <Hello name = 'Vito' />
    </>
  );
}

export default App;
