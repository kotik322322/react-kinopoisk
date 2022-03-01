import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './Movie.css'


class Movie extends Component {

    render() {

        const {
            id,
            year,
            title,
            summary,
            medium_cover_image,
            genres
        } = this.props




        return (
            <div className='movie'>
                <img src={medium_cover_image} alt="movie image " />
                <div className='movie__column'>
                    <h3 className='movie__title'>{title}</h3>
                    <h3 className='movie__year'>{year}</h3>
                    <ul className='movie__genres'>
                        {genres.map((genre, index) => {
                            return <li key={index} className='genres__genre'>
                                {genre}</li>
                        })}
                    </ul>
                    <p className='movie__summary'>{summary.slice(0,180)}...</p>
                </div>
            </div>

        );
    }
}


// Movie.PropTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     medium_cover_image: PropTypes.string.isRequired,
// genres: PropTypes.arrayOf(PropTypes.string).isRequired
// }

export default Movie;