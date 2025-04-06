
import { Suspense, useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Nav from './Components/Navber/Nav'
import { addItemToLocalStorage } from './Utilities/localStorage'


function App() {

  const [mark, setMark] = useState([])
  const [readingTime,setReadingTime] = useState(0)
  

  const handleBookMark = (blog)=>{
        const  newMark = [...mark , blog ]
        setMark(newMark)

        // save to local storage
        addItemToLocalStorage(blog.id)
  }
  
  
  const handleMarkAsRead = (time , id)=>{
         const newTime = (readingTime + time)
         setReadingTime(newTime);

         handleRemoveMarkAsRead(id)
  }

  const handleRemoveMarkAsRead =(id) =>{
         const remainingBookMark = mark.filter(singleMark=> singleMark.id !== id )  
         setMark(remainingBookMark)
  }
  

  return (
    <>
      
      <Nav></Nav>

      <div className='main-container flex text-center'>
          <div className='left-container w-[80%]'>
                <Suspense fallback="<h1>Data is loading.....</h1>">
                    <Blogs  handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
                </Suspense> 
          </div>
          <div className='right-container mr-6 w-[20%] border-[4px] mt-10 p-3'>
              <h1 className='text-xl font-bold  m-4'>Reading Time : <span className='text-blue-500'> {readingTime} </span></h1>
              <h1 className='text-xl font-bold  m-4'>BookMark Count :<span className='text-blue-500'> {mark.length}</span></h1>
              <hr></hr>

              {
                mark.map( (marked , index) =><p key={index} className='text-2xl border-2 rounded-lg border-none shadow-xl  m-4 p-4 bg-amber-100'>{marked.title}</p>)
              }
              
          </div>

      </div>
      
     

      
     
    </>
  )
}

export default App
