import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postListContext } from "../store/post-list-store";
const Card = ({ post }) => {
  const { deletePost } = useContext(postListContext);

  return (
    <div className="card post-card" style={{ width: "23rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete
              onClick={() => {
                deletePost(post.id);
              }}
            />
          </span>
        </h5>

        <p className="card-text">{post.content}</p>

        {post.hashtag.map((tag, index) => (
          <button key={index} type="button" className="btn btn-primary me-2">
            {tag}
          </button>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This is commented by {post.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Card;
