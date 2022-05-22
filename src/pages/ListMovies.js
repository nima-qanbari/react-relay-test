import React from "react";

import { useQuery } from "relay-hooks";

import { GET_MOVIES } from "../querys/ListMoviesQuery";

const ListMovies = () => {
  const { props: data, error, retry } = useQuery(GET_MOVIES);
  console.log(data);
  return <div>ListMovies</div>;
};

export default ListMovies;
