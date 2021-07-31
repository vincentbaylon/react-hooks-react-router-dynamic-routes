import { useParams } from 'react-router-dom'

function MovieShow({ movies }) {
    const params = useParams()

    return (
        <div>
            <h3>{movies[params.movieID].title}</h3>
        </div>
    )
}

export default MovieShow