import React from "react";
import PostItem from "../../Components/Modal/PostItem";
import { Link } from "react-router-dom";
import "./PostPart.css"

const PostPart = ({posts}) => {
    return (
        <div className="posts">
            {posts.map((post) => 
                <Link className="link__for__posts" key={post.id} to={`/posts/${post.id}`}>
                    <PostItem post = {post} key = {post.id}/>
                </Link>    
            )}
        </div>
    )
}

export default PostPart;