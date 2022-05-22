import {graphql} from "relay-hooks"

export const GET_MOVIE = graphql `
query MovieQuery($filmId2: ID) {
  film(id: $filmId2) {
    title
    producers
    director
    id
    created
  }
}
`

