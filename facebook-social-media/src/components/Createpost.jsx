import React, { useContext } from "react";
import { useRef } from "react";
import { postListContext } from "../store/post-list-store";

const Createpost = () => {
  const { addPost } = useContext(postListContext);

  const idElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const hashtagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = idElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionElement.current.value;
    const hashtag = hashtagElement.current.value;
    idElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
    hashtagElement.current.value = "";
    addPost(id, title, content, reaction, hashtag);
  };

  return (
    <form className="top-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter your User id here</label>

        <input
          type="text"
          className="form-control "
          placeholder="Enter your user id"
          ref={idElement}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Post Title</label>

        <input
          type="text"
          className="form-control"
          ref={titleElement}
          placeholder="Enter your title"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Post Content</label>

        <textarea
          rows={5}
          cols={40}
          type="text"
          className="form-control"
          ref={contentElement}
          placeholder="Enter your content"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Number of reactions</label>

        <input
          type="text"
          className="form-control"
          placeholder="How many people reacted to this post"
          ref={reactionElement}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Enter your hashtags here</label>

        <input
          type="text"
          className="form-control"
          placeholder="please enter tags using space"
          ref={hashtagElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Createpost;
