import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog , handleBookMark , handleMarkAsRead}) => {
    return (
        <div className='mb-20'>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='author-box flex justify-around items-center mb-6'>
         <h3 className='text-2xl font-bold' >{blog.author}</h3>
         <img className='w-16' src={blog.author_img} alt="" />
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <button className='flex gap-4 m-4' >
        {
            blog.hashtags.map(( (hash, index ) => <p key={index} className='border border-white p-2 rounded-lg  hover:bg-amber-50 hover:border-black bg-amber-100 text-xl'>{hash}</p>))
        }
      </button>

    <div className="card-actions justify-between mt-8">
    <FaBookmark  size={30} onClick={() => handleBookMark (blog)} />
      <button className="btn btn-primary" onClick={() => handleMarkAsRead(blog.reading_time , blog.id)}>Mark as Read </button>

    </div>
  </div>
</div>


            
        </div>
    );
};

export default Blog;