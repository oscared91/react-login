import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "",
  authDomain: "react-login-36c24.firebaseapp.com",
  projectId: "react-login-36c24",
  storageBucket: "react-login-36c24.firebasestorage.app",
  messagingSenderId: "907799922147",
  appId: "1:907799922147:web:e50b63cd661e012e098cd6"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)