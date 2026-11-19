import React, { useContext, useRef } from "react";
import { CardListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addItemAction } = useContext(CardListContext);
  const idElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const hashtagElement = useRef();
  const reactionElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = idElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const hashtag = hashtagElement.current.value
      .split(",")
      .map((tag) => tag.trim());
    const reaction = reactionElement.current.value;
    idElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    hashtagElement.current.value = "";
    reactionElement.current.value = "";
    addItemAction(id, title, content, hashtag, reaction);
    console.log(
      `The createpost value are: ${id}, ${title}, ${content}, ${hashtag}, ${reaction} `,
    );
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Post id
        </label>

        <input
          type="text"
          ref={idElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          title
        </label>

        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          content
        </label>

        <input
          type="text"
          ref={contentElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Hashtag
        </label>

        <input
          type="text"
          ref={hashtagElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter hashtag"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          reaction
        </label>

        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter reaction"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
