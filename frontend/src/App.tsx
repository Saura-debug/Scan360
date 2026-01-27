

import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import Sidebar from "./Components/Siderbar/Sidebar.tsx";
import Workspace from "./Components/Workspace/Workspace.tsx";
import Scanningoption from "./Components/Scanningoption.tsx";

function App() {
  

  return (
    <>
    <div className="w-screen h-screen">
    <Header/>
    <Routes>
      <Route></Route>
    </Routes>
    <div className="flex">
      <Sidebar/>
      <div className="w-[80%] h-[30%]">
        <Scanningoption/>
        <Workspace/>

      </div>
      

    </div>
    </div>
    
  
 
    </>
  )
}

export default App
