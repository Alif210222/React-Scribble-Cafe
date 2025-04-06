import React, {use } from 'react';
import Blog from '../Blog/Blog';

const blogsPromise = fetch("blogs.json").then(res => res.json())

const Blogs = ({handleBookMark ,handleMarkAsRead}) => {
//     const [blogs , setBlogs] = useState([])
  
//    useEffect(()=>{
//     fetch("blogs.json")
//     .then(res => res.json())
//     .then(data => setBlogs(data))
//    }, [])

const blogs =  use(blogsPromise)



    return (
        <div>

            <h1 className='text-3xl mb-10 mt-6 font-bold'>Total Blog: {blogs.length}</h1>
            <div className='ml-32 grid grid-cols-2'>
            {
                blogs.map( (blog , index  ) =><Blog key={index}  blog={blog} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
            </div>
           
            
        </div>
    );
};

export default Blogs;