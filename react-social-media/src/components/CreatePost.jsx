import React, { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addItems } = useContext(postListContext);
  const idElement = useRef();
  const titleElement = useRef();
  const BodyElement = useRef();
  const HashtagElement = useRef();
  const reactionElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = idElement.current.value;
    const title = titleElement.current.value;
    const body = BodyElement.current.value;
    const tags = HashtagElement.current.value
      .split(",")
      .map((tag) => tag.trim());
    const reactions = reactionElement.current.value;
    idElement.current.value = "";
    titleElement.current.value = "";
    BodyElement.current.value = "";
    HashtagElement.current.value = "";
    reactionElement.current.value = "";

    addItems(id, title, body, tags, reactions);
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            post Id
          </label>

          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter post id"
            ref={idElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            ref={titleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Body
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            ref={BodyElement}
            placeholder="Example input placeholder"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Hashtag
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            ref={HashtagElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Reactions
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            ref={reactionElement}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
