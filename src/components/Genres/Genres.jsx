import PropTypes from "prop-types";

export const Genres = ({ genres }) => {
    const genresOfMovie = genres.map(({ id, name}) => (
      <li key={id}>{name}</li>))
              
  return (
    <ul>
      {genresOfMovie}
    </ul>
  )
}

Genres.propTypes = {
  genres: PropTypes.array
}
