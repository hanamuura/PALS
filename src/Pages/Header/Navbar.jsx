import React from "react";
import "./Navbar.css";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from "../MainPage/MainPage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";
import InfoPage from "../InfoPage/InfoPage";
import { useState } from "react";

const Navbar = () => {
    const [frosts, setFrosts] = useState([
        {id: 1, title: "Bosh 1", desc: "сильный, уверенный в себе кусок металла, способный хранить ваши продукты при температуре в -300. Такая штука необходима в каждом доме.", image: "https://tehnoteca.ru/img/2030/2029044/samsung_rs68a8820s9_7.jpg", price: 499.00},
        {id: 2, title: "Bosh 2", desc: "не оч сильный но крутой", image: "https://ae01.alicdn.com/kf/HTB1i1kjeliE3KVjSZFMq6zQhVXas/Refrigerators-Bosch-KGN36VL21R-NoFrost-VitaFresh-Bottom-Freezer-Home-Appliance.jpg", price: 129.00},
        {id: 3, title: "bmw", desc: "сильный и крутой", image: "https://bt-active.ru/image/cache/catalog/new-foto/stanki/oad-resize_cache-iblock-262-45e-1900_563_1-1-800x800.jpg", price: 459.00},
        {id: 4, title: "Магаданчик", desc: "он реально крут", image: "https://photo3.wambacdn.net/34/95/18/1524815943/1777791034_huge.jpg?hash=nTP8k_IXK0L4KUSH1rFdXQ&expires=64060578000&updated=1498225378", price: 413.00},
        {id: 5, title: "ульфрик", desc: "ыхыхыххыхыхы", image: "https://i.warosu.org/data/fa/img/0082/88/1401346425559.jpg", price: 123.00},
    ])


    

    const [pilesosi, setPilesosi] = useState([
        {id: 1, title: "mobila", desc: "сильный, уверенный в себе кусок металла, способный хранить ваши продукты при температуре в -300. Такая штука необходима в каждом доме.", image: "https://tehnoteca.ru/img/2030/2029044/samsung_rs68a8820s9_7.jpg", price: 499.00},
        {id: 2, title: "title 2", desc: "desc1", image: "", price: 499.00},
        {id: 3, title: "title 3", desc: "desc1", image: "", price: 499.00},
        {id: 4, title: "title 4", desc: "desc1", image: "", price: 499.00},
        {id: 5, title: "title 5", desc: "desc1", image: "", price: 499.00},
        {id: 6, title: "title 6", desc: "desc1", image: "", price: 499.00},
        {id: 7, title: "title 6", desc: "desc1", image: "", price: 499.00},
        {id: 8, title: "title 6", desc: "desc1", image: "", price: 499.00},
        {id: 9, title: "title 6", desc: "desc1", image: "", price: 499.00},
        {id: 10, title: "title 6", desc: "desc1", image: "", price: 5679.00},
    ])

    

/*
            <div className="navbar">
                <div className="navbar__links">
                    <Link className="navbar_link" to = "/frostpage">Холодильники</Link> 
                    <Link className="navbar_link" to = "/pilesosipage">Пылесосы</Link>
                    <Link className="navbar_link" to = "/telephonespage">Телефоны</Link>
                </div>
            </div>
            <Routes>
                <Route path="/telephonespage" element={<MainPage posts = {mobiles}/>}/>
                <Route path="/pilesosipage" element={<MainPage posts = {pilesosi}/>}/>
                <Route path="/frostpage" element={<MainPage posts = {frosts}/>}/>
            </Routes>
*/

    return(
        <div>
           
        </div>
    )
}

export default Navbar;