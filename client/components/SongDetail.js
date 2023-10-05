import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong.js";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate.js";
import LyricList from "./LyricList.js";

function SongDetail({ data: { song, loading } }) {
  if (loading) return <div>Loading...</div>;

  const { title, id, lyrics } = song;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{title}</h3>
      <LyricList lyrics={lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
}

export default graphql(fetchSong, {
  options: ({ params: { id } }) => {
    return { variables: { id } };
  },
})(SongDetail);
