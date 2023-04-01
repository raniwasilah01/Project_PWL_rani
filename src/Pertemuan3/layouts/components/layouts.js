import React from "react";
import Footers from './components/footers/Footers'
import HeaderNav from './components/headers/HeaderNav'

export default function(props) {
    return (
        <div id="main-layout">
            <HeaderNav />
            <main className='mt-20 py-10'>
                {props.children}
            </main>

            <Footers />
        </div>
    )
}