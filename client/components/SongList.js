import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs.js";

function SongList(props) {
  const {
    data: { loading, songs, refetch },
    mutate,
  } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSongDelete = (id) => {
    mutate({ variables: { id } }).then(() => {
      refetch();
    });
  };

  return (
    <div>
      <ul className="collection">
        {songs.map(({ id, title }) => (
          <li className="collection-item" key={id}>
            <Link to={`/song/${id}`}>{title}</Link>
            <i className="material-icons" onClick={() => onSongDelete(id)}>
              delete
            </i>
          </li>
        ))}
      </ul>
      <Link to="/song/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
