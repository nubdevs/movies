import React from 'react'
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
        console.log(currentMovieDetail,"movie detail")
    }
  return (
    <div>
        {/* <img className="w-full" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} /> */}
       <div className='w-full flex flex-row bg-gray-200'>
        <div className='w-1/3'>
        <img className="p-4" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
        </div>
        <div className='w-2/3 bg-gray-300 p-4'>
            <div className='flex flex-col item-center justify-start p-2'>
            <div className="font-extrabold text-4xl text-gray-600">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="font-bold text-2xl text-gray-400">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="font-semibold text-xl">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="text-gray-600">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="text-gray-600">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="text-gray-600 font-semibold">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="font-bold text-gray-600 gap-2">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="text-2xl font-bold text-gray-600" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-gray-500 p-2 ">
                        <div className="text-2xl font-bold text-gray-600">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>

                    <div className="w-full flex flex-row p-3 gap-2 ">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <div className='w-1/3 p-2'>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span className=' text-xl text-center align-bottom'>{company.name}</span>
                                </span>

                            }
                        </div>
                    ))
                }
            </div>
            </div>
            
        </div>

           
        </div>
      

    
  )
}

export default Movie