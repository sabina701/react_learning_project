import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CardContext } from "../store/card-list-store";

const Card = ({ post }) => {
  const { deletePost } = useContext(CardContext);
  return (
    <div className="card  m-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((item) => (
          <button type="button" className="btn btn-primary">
            {item}
          </button>
        ))}

        <div className="alert alert-success" role="alert">
          This was liked by {post.reactions.likes} people . This was disliked by{" "}
          {post.reactions.dislikes} people .
        </div>
      </div>
    </div>
  );
};

export default Card;
