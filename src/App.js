import './App.css';
import Home from "./Pages/Home";
import {HashRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Laniste from "./Pages/Laniste";
import Recrutement from "./Pages/Recrutement";
import Cirque from "./Pages/Cirque";
import Ludi from "./Pages/Ludi";

function App() {
    return <>
        <HashRouter>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
            </Routes>
            <Navbar/>
            <Routes>
                <Route exact path={"/laniste"} element={<Laniste/>}/>
                <Route exact path={"/recrutement"} element={<Recrutement/>}/>
                <Route exact path={"/cirque"} element={<Cirque/>}/>
                <Route exact path={"/ludi/:id"} element={<Ludi/>}/>
            </Routes>
        </HashRouter>
    </>
}

export default App;
