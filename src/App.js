import React, { useEffect } from 'react';
import './App.css';
import Tmdb from './Tmdb';

function App() {

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
