import { useState } from 'react';
import EntryForm from './Components/EntryForm';
import Data from './Components/Data';

import './App.css';



function App() {

  const [persons, addPerson] = useState([{name:'Neelabh', age:23}]);

  function onClickHandler(person){
    addPerson(prev => [...prev,person]);
  }

  return (
    <>
      <EntryForm onClick={onClickHandler}/>
      <Data data={persons}/>
    </>
  );
}

export default App;
