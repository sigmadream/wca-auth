import React from 'react';
import { useLookupAccessToken } from "./hooks/useLookupAccessToken";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import './App.css';


function App() {
  useLookupAccessToken();

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
