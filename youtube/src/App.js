import React from "react";
import Layout from "./component/layout/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincomp from "./component/maincomp/maincomp";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Article from "./component/Article/Article";


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
                <Route path="/" element={<Maincomp />} />
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
