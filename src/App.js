import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8KD6ZAG75fesHQKTUHLn2VGQJIf7AlqM",
  authDomain: "chat-app-f1dce.firebaseapp.com",
  projectId: "chat-app-f1dce",
  storageBucket: "chat-app-f1dce.appspot.com",
  messagingSenderId: "466800832057",
  appId: "1:466800832057:web:edf3ec8346d9459e7727e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


var db = firebase.firestore();

if (!localStorage.getItem('name')) {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
} else {
	name = localStorage.getItem('name')
}
document.querySelector('#name').innerText = name

document.querySelector('#change-name').addEventListener('click', () => {
	name = prompt('What is your name?')
	localStorage.setItem('name', name)
	document.querySelector('#name').innerText = name
})

<div id="container">
	<div id="user-options">
		<div>Hi, <span id="name"></span></div>
		<div id="change-name">change name</div>
	</div>
</div>


db.collection('messages')
	.add({
		name: 'John Doe',
		message: 'Hello world!' 
	})
	.then(function (docRef) {
		console.log(`Document written with ID: ${docRef.id}`);
	})
	.catch(function (error) {
		console.error(`Error adding document: ${error}`);
	});
export default App;
