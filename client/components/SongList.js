import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function SongList(props) {
  const { loading, songs } = props.data;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className="collection">
      {songs.map((song) => (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
  );
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
