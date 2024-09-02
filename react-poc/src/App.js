import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './component/Header';
import MainContent from './component/MainContent';
import "./App.css"

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState('grid'); // 'grid' or 'tile'
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch data from a public API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header setView={setView} />
      <MainContent 
        students={students} 
        view={view} 
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
        setView={setView}
      />
    </div>
  );
}

export default App;
