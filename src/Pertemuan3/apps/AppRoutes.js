import React from "react";
import {Route, Routes} from 'react-router-dom'
import layouts from "../layouts/Layouts";
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'

export default function AppRoute() {
    return (
        <Routes> 
            <Route index element={<Layouts><Home /></Layouts>} />
            <Route path='home' element={<Layouts><Home/></Layouts>} />
            <Route path='explore' element={<Layouts><Explore /></Layouts>} />
            <Route path='messages' element={<Layouts><Messages /></Layouts>} />
        </Routes>
    )
}