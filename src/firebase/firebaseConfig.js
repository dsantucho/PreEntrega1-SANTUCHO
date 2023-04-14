import { initializeApp } from "firebase/app"; //permite inicializar nuestra app de firebase
import { getFirestore } from "firebase/firestore"; // esto es para trabajar con firestore en nuestro caso tiene las img

const firebaseConfig = {
  apiKey: "AIzaSyBbcrOpfH9PYC7uMIbA-v_lKjUKqP9kkCk",
  authDomain: "e-commerce-react-c172d.firebaseapp.com",
  projectId: "e-commerce-react-c172d",
  storageBucket: "e-commerce-react-c172d.appspot.com",
  messagingSenderId: "46481049498",
  appId: "1:46481049498:web:bbcdd73793552466931c23"
}; //info config especifica de cada proyecto

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear const que por convencion de llama "db"
// db es el objeto que nosotros vamos a querer utilizar => exportar para utilizar dentro del project
export const db = getFirestore(app);