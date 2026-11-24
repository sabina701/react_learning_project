import React, { useRef } from "react";
import { useContext } from "react";
import { CardContext } from "../store/card-list-store";

const CreatePost = () => {
  const { addPost } = useContext(CardContext);
  const idElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const title = titleElement.current.value;
    const body = contentElement.current.value;
    const tags = tagsElement.current.value.split(",");
    const reactions = {
      likes: Number(reactionsElement.current.value),
      dislikes: 0,
    };
    idElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";
    addPost(id, title, body, tags, reactions);
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Id
        </label>

        <input
          ref={idElement}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          title
        </label>

        <input
          ref={titleElement}
          type="text"
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
          Tags
        </label>

        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your tags"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Reactions
        </label>

        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default CreatePost;
