import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css'

const Home = () => {


    const [blogs, setBlogs] = useState([]);
    const [readBlogs, setReadBlogs] = useState([]);
    const [time, setTime] = useState(0);


    const handleMarkAsRead = (blog) => {
        const newRead = [...readBlogs, blog];
        let time = 0;
        for (const blg of newRead) {
            const watchTime = blg.read_time;
            time = time + watchTime;
        }
        setTime(time)
        setReadBlogs(newRead);
    }






    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])




    return (
        <div>
            <div className="home-container">
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog
                            handleMarkAsRead={handleMarkAsRead}
                            blog={blog}></Blog>)
                    }
                </div>


                <div className='cart-container'>
                    <div className='time-container'>
                        <p>Spent time on read : <span>{time}</span> min</p>
                    </div>
                    <div className="bookmark-container">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;