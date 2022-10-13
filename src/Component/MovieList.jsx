import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");

  const { type } = useParams();

  useEffect(() => {
    getData();
    // getSearchgData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
      
  };

  const getSearchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
      setQuery("")
  };
  
  const filterbyrating=()=>{
    const Sortbyrating=movieList.filter((item)=>item.count_average>7)
    setMovieList(Sortbyrating)
}
const filterbyreviews=()=>{
  const Sortbyreview=movieList.filter((item)=>item.vote_count>100)
  // console.log(movieList,"inside function")
  setMovieList(Sortbyreview)

}

  return (
    <div className="p-1 flex flex-col w-full">
      <div className="w-full flex flex-row justify-end gap-2">
      <div className="flex flex-row md:justify-end justify-center items-center p-2">
        <span className="bg-gray-200 text-gray-600 p-2 px-3">FilerBy</span>
      <button className="bg-green-400  text-white p-2 px-1" onClick={filterbyrating}>Rating</button>
      <button className="bg-green-400  text-white p-2 px-1" onClick={filterbyreviews}>Review</button>
        
        </div>
        <div className="flex flex-row md:justify-end justify-center items-center p-2">
          <input className="bg-gray-200 p-2" value={query}
           onChange={(e)=>setQuery(e.target.value)}></input>
          <button className="bg-green-400  text-white p-2" onClick={getSearchData}>Search Movie</button>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-600 m-3 mx-90 text-center">
        {(type ? type : "Movies").toUpperCase()}
      </h2>

      <div className="w-full flex flex-wrap justify-center">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
