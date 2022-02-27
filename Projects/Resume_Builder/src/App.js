import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
// import Howto from "./Pages/Howto";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactInfo from "./Pages/ContactInfo";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Summary from "./Pages/Summary";
import FinalizePage from "./Pages/FinalizePage";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeDdJWBmEp_GAfI86yd-pXue0CKsU2Vm8",
  authDomain: "resume-builder-84442.firebaseapp.com",
  projectId: "resume-builder-84442",
  storageBucket: "resume-builder-84442.appspot.com",
  messagingSenderId: "842766090757",
  appId: "1:842766090757:web:85237bd62d862cc822d26c",
  measurementId: "G-1DVPTHHG1Q",
};

// Initialize Firebase

function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactInfo />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/finalize-page" element={<FinalizePage />} />

              {/* <Route path="/howto" element={<Howto />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Provider>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
