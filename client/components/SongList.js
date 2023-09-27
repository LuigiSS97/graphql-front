import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function SongList(props) {
  const { loading, songs } = props.data;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {songs.map((song) => (
        <li></li>{song.title}</li>
      ))}
    </ul>
  );
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
