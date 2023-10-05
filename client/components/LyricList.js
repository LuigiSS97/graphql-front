import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function LyricList({ lyrics, mutate }) {
  if (!lyrics) return null;

  const handleLike = (id, likes) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(({ id, content, likes }) => (
        <li
          key={id}
          className="collection-item"
          onClick={() => handleLike(id, likes)}
        >
          {content}
          <div className="vote-box">
            <i className="material-icons">thumb_up </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
