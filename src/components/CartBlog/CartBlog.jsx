import React from 'react';
import './CartBlog.css'

const CartBlog = (props) => {

    const {blog_title} = props.blog;

    return (
        <div>
            <div className='blog-cart'>
                <h3>{blog_title}</h3>
            </div>
        </div>
    );
};

export default CartBlog;