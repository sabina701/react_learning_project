import React, { useContext } from "react";
import { CardListContext } from "../store/card-list-store";
import { MdDelete } from "react-icons/md";

const Card = ({ card }) => {
  const { deleteItemAction } = useContext(CardListContext);
  return (
    <div className="card mt-4" style={{ width: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {card.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deleteItemAction(card.id)} />
          </span>
        </h5>

        <p className="card-text">{card.content}</p>
        {card.hashtag.map((item) => (
          <button className="btn btn-primary m-1 " key={item}>
            {item}
          </button>
        ))}
        <div className="alert alert-success mt-1 " role="alert">
          This was reacted by {card.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Card;
