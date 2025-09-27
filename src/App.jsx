import { useEffect, useState } from "react";
import "./App.css"
import Head from "./Head";
import Inter from "./Inter";
import Product from "./product";
import Specification from "./Spec";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return ( 
    <div className={`oraimo ${ darkMode ? 'light' : ''}`}>
      <Head darkMode = {darkMode} setDarkMode ={setDarkMode} />
      <Inter /> 
      <Product />
      <Specification />
    </div>
   );
}
 
export default App;