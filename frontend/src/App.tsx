

import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import Sidebar from "./Components/Siderbar/Sidebar.tsx";
import Workspace from "./Components/Workspace/Workspace.tsx";
import Scanningoption from "./Components/Scanningoption.tsx";

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route></Route>
    </Routes>
    <div className="flex">
      <Sidebar/>
      <div className="w-[100%]">
        <Scanningoption/>
        <Workspace/>

      </div>
      

    </div>
    
  
 
    </>
  )
}

export default App
