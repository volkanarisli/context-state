

import { useState, useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)




    return (
        <>
            { movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price} />
            ))}

        </>
    )
}

export default MovieList



