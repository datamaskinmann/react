import './App.css';
import React, {useEffect} from 'react';
import store from "./Contexts/SessionContext";

function App() {
  return (
    <div className="App">
      <h3 onClick={() => login()}>Log in</h3>
    </div>
  );
}

const login = () => {
  console.log("Attempting to login");
  store.dispatch({type: 'login_attempt'});
  setTimeout(() => {
    store.dispatch({type: 'login_success'});
  }, 1000);
}

export default App;
