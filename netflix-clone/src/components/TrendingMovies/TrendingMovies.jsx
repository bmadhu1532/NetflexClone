import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?';
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api_key=${API_KEY}`);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    }; 

    fetchTrendingMovies();

  }, []);
  console.log(trendingMovies[0]);
  return (
    <div className="bg-black py-10 px-6 md:px-16 lg:px-32 text-white overflow-hidden">
  <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
  
  <div className="flex gap-8 overflow-x-auto pb-8 hide-scroll relative">
    {/* Add 'index' here to generate the 1, 2, 3 numbers */}
    {trendingMovies.map((movie, index) => (
      <div key={movie.id} className="relative flex items-center justify-end min-w-[180px] md:min-w-[220px] h-[240px] md:h-[280px] shrink-0 group cursor-pointer">
        
        {/* The Big Number (Using index + 1) */}
        <span className="absolute left-0 -bottom-6 text-[120px] md:text-[180px] font-black tracking-tighter text-black z-30 group-hover:scale-110 transition-transform select-none"
              style={{ WebkitTextStroke: '3px rgba(255, 255, 255, 0.8)' }}>
          {}
        </span>
        
        {/* The Poster Image (Using poster_path) */}
        <img 
          src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
          alt={movie.title} 
          className="w-[140px] md:w-[160px] h-full object-cover rounded-md z-10 group-hover:scale-105 transition-transform shadow-lg" 
        />

        {/* The Title Banner (Overlaying the bottom of the poster) */}
        <div className="absolute bottom-0 right-0 w-[140px] md:w-[160px] bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-6 z-20 rounded-b-md">
          <p className="text-white text-sm font-bold truncate text-center drop-shadow-md">
            {movie.title}
          </p>
        </div>

      </div>
    ))}
  </div>
  
  <style dangerouslySetInnerHTML={{__html: `.hide-scroll::-webkit-scrollbar { display: none; } .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }`}} />
</div>
  );
};

export default TrendingMovies;