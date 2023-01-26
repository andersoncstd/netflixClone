import './MovieCard.css'

export default function MovieCard(props) {
    let {name, year, poster, rating} = props
    return (
        <>

                <img className="poster" src={poster} alt={`Assistir ${name}`} />

        </>
    )

}