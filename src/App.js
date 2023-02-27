import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


//Components
import Home from "./components/Home.js";


const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;