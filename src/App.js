import './App.css';
import Form from './components/Form';
import {useState} from 'react';



function App() {

  const [ people, setPeople] = useState([])

  const addToPeopleState = (name) => {
    console.log(name)
    const peopleCopy = [...people];
    peopleCopy.push(name);
    setPeople(peopleCopy);
  }

  return (
    <>
    <div className="App">
      <Form />
    </div>
    </>
  );
}

export default App;
