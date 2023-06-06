import React from "react";
import { useState, useMemo } from 'react';
import Navbar from "../Header/Navbar";
import Filter from "../../Components/Filter/Filter";
import PostPart from "../PostPart/PostPart";
import "./MainPage.css";
import Select from "../../Components/UI/Select/Select";


function MainPage({posts}) {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [price, setPrice] = useState({query: ""})

    const sortedPosts = useMemo(() => {
        if (filter.sort){
          return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])
    
    const sortedAndSerachedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const fullSortedPosts = useMemo(() => {
        return sortedAndSerachedPosts.filter(post => post.price > price.query)
    }, [price.query, sortedAndSerachedPosts])

    return(
        <div className="App">
            <div className="main">
                <Filter 
                    className = "filter"
                    filter = {filter}
                    setFilter = {setFilter}
                    price = {price}
                    setPrice = {setPrice}
                />
                <PostPart posts = {fullSortedPosts}/>
            </div>
        </div>
    )
}

export default MainPage;