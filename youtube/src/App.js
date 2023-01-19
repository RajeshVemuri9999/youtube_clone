import React from "react";
import Layout from "./component/layout/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincomp from "./component/maincomp/maincomp";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Anim1data from './component/anime_data/anime_1data'
import Article from "./component/Article/Article";
import Anime2data from "./component/anime_data/anime_2data";
import Anime3data from "./component/anime_data/anime_3data";
import Anime4data from "./component/anime_data/anime_data4";

export const appContext = React.createContext();

const App = () => {
  const [ golbalState, setGlobalState ] = React.useState(false);

  const value = {
    state:golbalState,
    setState:setGlobalState
  }

  return (
    <>
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
    </>
  );
};

export default App;
