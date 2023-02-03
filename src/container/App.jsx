import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../page/Home"
import Login from "../page/Login"
import Register from "../page/Register"
import Alta from "../page/Alta";



function App(){
    return(
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/Login" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                        <Route path="/Alta" element={<Alta/>}></Route>
                       
                 
                </Routes>
        
        </BrowserRouter>
    )
}
export default App;