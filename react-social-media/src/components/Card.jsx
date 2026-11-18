import React, { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";
import { AiFillDelete } from "react-icons/ai";
const Card = ({ card }) => {
  console.log("Complete card:", card);
  console.log("Hashtags:", card.hashtags);
  console.log("Is array:", Array.isArray(card.hashtags));

  // remaining code
  const { cardList, deleteItems } = useContext(postListContext);

  return (
    <>
      <section
        className="card child-card"
        style={{ maxWidth: "320px", height: "320px" }}
      >
        <div className="card-body">
          <h4 className="card-title">
            {card.title}
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deleteItems(card.id)}
            >
              <AiFillDelete />
            </span>
          </h4>

          <p className="card-text">{card.body}</p>

          {card.hashtags.map((item, index) => (
            <button key={index} className="btn btn-success m-1">
              {item}
            </button>
          ))}

          <div className="alert alert-success" role="alert">
            This was reacted by {card.reactions} people
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
