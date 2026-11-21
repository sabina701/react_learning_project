import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CardListContext } from "../store/post-list-store";
const Card = ({ card }) => {
  const { deleteItemAction } = useContext(CardListContext);
  console.log(card.tags);
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {card.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deleteItemAction(card.id)}
          >
            <AiFillDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>

        <p className="card-text">{card.content}</p>

        {card.tags.map((item) => (
          <button type="button" className="btn btn-success ms-3">
            {item}
          </button>
        ))}

        <div className="alert alert-success mt-3" role="alert">
          Likes:{card.reactions.likes}; Dislikes:{card.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Card;
