import React, { useEffect, useState } from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from '../Component/MovieList'

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                            <div className="md:w-full hidden">    
                            <div className="md:h-2/4">
                                    <img className="m-auto block w-full h-auto"
                                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="absolute p-10 h-16 flex flex-col justify-start items-center mb-20 ">
                                    <div className="font-extrabold text-4xl mb-2 text-start">
                                        {movie ? movie.original_title: ""}</div>
                                    <div className="ml-12">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                    <div className="font-semibold text-xl flex text-start w-1/2">{movie ? movie.overview : ""}</div>
                                </div></div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home