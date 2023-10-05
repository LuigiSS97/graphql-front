import React, { useState } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import LyricList from "./LyricList";

function LyricCreate({ mutate, songId }) {
  const [lyric, setLyric] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        content: lyric,
        songId: songId,
      },
    }).then(() => setLyric(""));
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <LyricList />
      <label>Add a Lyric</label>
      <input value={lyric} onChange={(e) => setLyric(e.target.value)} />
    </form>
  );
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
