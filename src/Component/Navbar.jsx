import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full bg-black p-2">
            <div className="w-full flex flex-row md:justify-start justify-center items-center gap-x-2 mx-2  p-1">
                <Link to="/"><img className="md:w-16 hidden" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span
                className='text-gray-50 rounded-md px-2 py-1 hover:bg-white hover:text-black'
                >POPULAR</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span
                className='text-gray-50 rounded-md px-2 py-1 hover:bg-white hover:text-black'
                >TOPRATED</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span
                className='text-gray-50 rounded-md px-2 py-1 hover:bg-white hover:text-black'
                >UPCOMING</span></Link>
            </div>
        </div>

  )
}

export default Navbar