import React from 'react';
import './Blog.css'

const Blog = (props) => {

    const { author_img, author_name, blog_title, cover_img, id, publish, read_time } = props.blog;


    return (
        <div>
            <div className='single-blog'>
                <div className='cover-img'>
                    <img src={cover_img} alt="" />
                </div>
                <div className='cart-body'>
                    <div className='cart-info'>
                        <div className='cart-info-child'>
                            <img className='author-img' src={author_img} alt="" />
                            <div className='author-name'>
                                <h3>{author_name}</h3>
                                <p>{publish}</p>
                            </div>
                        </div>
                        <div className='publish'>
                            <p>{read_time} min read</p>
                        </div>
                    </div>

                    <div className="cart-details">
                        <h1>{blog_title}</h1>
                        <span>Mark as read</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;