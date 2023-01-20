import React,{useState,useEffect} from "react";
import Layout from "./component/layout/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincomp from "./component/maincomp/maincomp";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Anim1data from './component/anime_data/anime_1data'
import Article from "./component/Article/Article";


export const appContext = React.createContext();

const App = () => {
  const [ golbalState, setGlobalState ] = React.useState(false);

  const value = {
    state:golbalState,
    setState:setGlobalState
  }
   const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
     <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Dark/Light</button>
      <appContext.Provider value={value} >
        <ProSidebarProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Maincomp />}>
                 <Route path="/" element={ <Article/>}/>
                  <Route path="/anime/:id" element={<Anim1data/>}/>
                </Route>
              </Routes>
            </Layout>
          </Router>
        </ProSidebarProvider>
      </appContext.Provider>
      <div>
      </div>
    </div>
    </>
  );
};

export default App;
