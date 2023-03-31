import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    const handleMarkAsRead = props.handleMarkAsRead;

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
                            <span>{read_time} min read</span> <FontAwesomeIcon className='bookMark' icon={faBookmark} />
                        </div>
                    </div>

                    <div className="cart-details">
                        <h1>{blog_title}</h1>
                        <span onClick={() => handleMarkAsRead(props.blog)}>Mark as read</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;