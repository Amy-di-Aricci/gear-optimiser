import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Optimiser } from "../pages/Optimiser"
import { Home } from "../pages/Home"

export const Router = () =>{
    return <BrowserRouter>
    <Routes>
        <Route path="/">
            <Route path="optimiser" element={<Optimiser/>}/>
            <Route path="*" element={<Home/>} />
        </Route>
    </Routes>
    </BrowserRouter>
    
}