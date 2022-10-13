import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  console.log(movie);

  return (
    <>
      {isLoading ? (
        <div
          role="status"
          class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 m-2"
        >
          <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded">
            <svg
              class="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full "></div>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="md:w-52 md:h-96 w-72 rounded overflow-hidden shadow-lg m-2">
            <img
              className="w-full h-72"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt="Sunset in the mountains"
            />
            <div className="px-1 py-2">
              <h1 className="font-bold text-gray-500">
                {movie ? movie.original_title : ""}
              </h1>
              <hr></hr>
              <h1 className=" text-gray-500">
                Released on {movie ? movie.release_date : ""}
              </h1>
              <h1 className=" text-gray-500">
                Rating-{movie ? movie.vote_average : ""}({movie.vote_count})
              </h1>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
