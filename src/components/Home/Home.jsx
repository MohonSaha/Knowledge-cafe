import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css';
import Swal from 'sweetalert2';

const Home = () => {


    const [blogs, setBlogs] = useState([]);
    const [readBlogs, setReadBlogs] = useState([]);
    const [time, setTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);


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


    const handleBookmark = (blog) =>{
        // console.log(blog);
        // const newBookmark = [...bookmark, blog];
        // console.log(newBookmark);
        // for(const blg of newBookmark){
            let newBookmark =[];

            const bookmarked = bookmark.find(markedBlog => markedBlog.id == blog.id);

            
            if(!bookmarked){
                console.log("new bookmarked");
                newBookmark = [...bookmark, blog];
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  });
                return handleBookmark;
            }

        // }
        // console.log(bookmark);

        setBookmark(newBookmark)
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
                            handleBookmark={handleBookmark}
                            key={blog.id}
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