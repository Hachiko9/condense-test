import { IMovie } from "@/pages/movies";
import { useEffect, useState } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState<{data: IMovie[]}>({data:[]});
  
  useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
      })
  }, [])

  return movies;
};