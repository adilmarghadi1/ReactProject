import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8KD6ZAG75fesHQKTUHLn2VGQJIf7AlqM",
//   authDomain: "chat-app-f1dce.firebaseapp.com",
//   projectId: "chat-app-f1dce",
//   storageBucket: "chat-app-f1dce.appspot.com",
//   messagingSenderId: "466800832057",
//   appId: "1:466800832057:web:edf3ec8346d9459e7727e8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);