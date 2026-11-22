import React, { useContext, useRef } from "react";
import { CardListContext } from "../store/card-list-store";

const CreatePost = () => {
  const { addItemAction } = useContext(CardListContext);
  const idElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const reactionElement = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = idElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());
    const reaction = reactionElement.current.value;
    idElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    tagsElement.current.value = "";
    reactionElement.current.value = "";
    addItemAction(id, title, content, tags, reaction);
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          id
        </label>

        <input
          type="id"
          ref={idElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>

        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Content
        </label>

        <input
          type="text"
          ref={contentElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Hashtag
        </label>

        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your hashtag"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Reaction
        </label>

        <input
          type="number"
          ref={reactionElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your reaction"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
