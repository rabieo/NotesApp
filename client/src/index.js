import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {initializeApp, analytics} from 'firebase'

initializeApp({
	apiKey: "AIzaSyBDKnEHY6E-gpyuT1uGvf9LkPbXOt7ksg8",
	authDomain: "notesapp-b470e.firebaseapp.com",
	databaseURL: "https://notesapp-b470e.firebaseio.com",
	projectId: "notesapp-b470e",
	storageBucket: "notesapp-b470e.appspot.com",
	messagingSenderId: "403435583234",
	appId: "1:403435583234:web:12808f1adb5a2f1fa0341b",
	measurementId: "G-CQLWNGR3YZ"
})
analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
