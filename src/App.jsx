import { useState } from "react"
import Blogs from "./Components/Blogs"
import Bookmarks from "./Components/Bookmarks"
import Header from "./Components/Header"

function App() {
  const [ bookmarks, setBookmarks]= useState([]);
  const [readingTime,setReadingTime]= useState(0);

  const handleAddtoBookmark = blog =>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark)
  }

  const handleMarkasRead = time =>{
    const newReadtime = readingTime + time;
    setReadingTime(newReadtime)
  }
  

  return (
    <>
      <Header></Header>
      <div className=" md:flex max-w-6xl mx-auto">
          <Blogs handleAddtoBookmark={handleAddtoBookmark}
                  handleMarkasRead={handleMarkasRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
