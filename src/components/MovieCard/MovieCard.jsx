import './MovieCard.css'

export default function MovieCard(props) {
    let {name, year, poster, rating} = props
    return (
        <>
        <div className="movie-container">
            <div className='movie-poster'>
            <ul className='movie-info'>
                <li className='movie-info-li'>{name}</li>
                <li className='movie-info-li'>{year}</li>
                <li className='movie-info-li'>{rating}</li>
            </ul>
                <img className="poster" src={poster} alt={`Assistir ${name}`} />
            </div>

        </div>
        </>
    )

}