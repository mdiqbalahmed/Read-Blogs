import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" md:w-1/3 ml-4 bg-gray-300 pt-4 mt-4">
            <h3>Reading Time: {readingTime}</h3> 
            <h2 className=" text-3xl text-center ">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;