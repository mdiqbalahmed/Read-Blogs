import PropTypes from 'prop-types'; 
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddtoBookmark,handleMarkasRead}) => {
   const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className=' mb-20 space-y-4'>
            <img className=' w-full mb-8' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                        <img className=' w-14' src={author_img} alt="" />
                        <div className=' ml-6'>
                            <h3 className=' text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className=' ml-2 text-2xl text-red-600' onClick={()=>handleAddtoBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span className='' key={idx}>#{hash}</span>)
                }
            </p>
            <button onClick={()=>handleMarkasRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes= {
    blog: PropTypes.object

}

export default Blog;