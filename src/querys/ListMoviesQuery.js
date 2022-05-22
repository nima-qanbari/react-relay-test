import graphql from 'babel-plugin-relay/macro'

export const GET_MOVIES = graphql`
query ListMoviesQuery {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
      id
      producers
      episodeID
      created
      edited
    }
  }
}
`