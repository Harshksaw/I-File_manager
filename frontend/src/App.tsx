import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const createTest = async () => {
    const testDocument = {
      name: 'Test Name',
      description: 'Test Description'
    };

    try {
      const response = await axios.post('http://localhost:3000/test', testDocument);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/test');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTest = async () => {
    const updatedDocument = {
      name: 'Updated Name',
      description: 'Updated Description'
    };

    try {
      const response = await axios.put('http://localhost:3000/test/1', updatedDocument); // replace '1' with actual id
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTest = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/test/1'); // replace '1' with actual id
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-center bg-blue-100'>
      <button  onClick={createTest}>Create Test</button>
      <button onClick={getTests}>Get Tests</button>
      <button onClick={updateTest}>Update Test</button>
      <button onClick={deleteTest}>Delete Test</button>
    </div>
  );
}

export default App;