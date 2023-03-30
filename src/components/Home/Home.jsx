import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css'

const Home = () => {


    const [blogs, setBlogs] = useState([]);


    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])




    return (
        <div>
            <div className="home-container">
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
                <div className="bookmark-container">

                </div>
            </div>
        </div>
    );
};

export default Home;