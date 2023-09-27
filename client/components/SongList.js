import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs.js";

function SongList(props) {
  const { loading, songs } = props.data;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul className="collection">
        {songs.map((song) => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
      <Link to="/song/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default graphql(query)(SongList);
