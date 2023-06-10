import React, { useEffect, useState } from 'react'
import './Styles/tempapp.scss'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(null)

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=b833cf42a61d4d5b116221599edd127a&query=${search}`
            const response = await fetch(url)
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson)
        }

        fetchApi();
    }, [search])

    return (
        <div className='container'>
            <div className='main'>
                <div className='inputData'>
                    <input type='search' value={search} className='inputField' placeholder='Search city' onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p> No Data Found</p>
                ) : (
                    <div className='info'>
                        <div className='poster'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${city.results[0].poster_path}`}
                                alt="Movie Poster"
                            />
                        </div>
                        <h1 className='title'>{(city.results[1].title)}</h1>
                        <div className='movie-info'>
                            <div className='hum-win'>
                                Release Date: {(city.results[1].release_date)} <br />
                                Vote: {(city.results[0].vote_average)}
                            </div>
                        </div>

                    </div>
                )}


            </div>

        </div>
    )
}

export default Tempapp