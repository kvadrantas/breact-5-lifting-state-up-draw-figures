import { useState } from 'react';
import Form from './components/Form';
import Render from './components/Render';


function App() {

  const[val, setVal] = useState(['', '', 0]);
  // const data =[1,2,3];

  const submit = (a) => {
    setVal(a);
  }

  return (
    <>
      <Render data={val}/>
      <Form  sniurelis={submit}/>
    </>
  );
}

export default App;
