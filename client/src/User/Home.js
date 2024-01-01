import React from 'react'
import Footer from "./Footer";
import Movies from "./Movies"
import Slide from "./Slide";
import Header from "./Header";
function Home() {
    return (
        <div>
            <Header />
            <Slide />
            <Movies />
            <Footer />
        </div>
    )
}

export default Home