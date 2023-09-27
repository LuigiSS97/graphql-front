import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

function SongCreate(props) {
  const [song, setSong] = React.useState("");

  const { mutate } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        title: song,
      },
    }).then(() => hashHistory.push("/"));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create song</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Song Title:</label>
        <input value={song} onChange={(e) => setSong(e.target.value)} />
      </form>
    </div>
  );
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
