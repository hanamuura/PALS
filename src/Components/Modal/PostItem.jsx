import React from "react";
import './PostItem.css';
import { Link } from "react-router-dom";


const PostItem = ({post}) => {
    return (
        <div className="post">
            <img src={post.image}/>
            <div className="postPart">
                <h3 className = "postName">{post.title}</h3>
                <p className="postDesc">{post.desc}</p>
                <h1 className = "postPrice">{post.price}$</h1>
            </div>
        </div> 
    )
}

export default PostItem;