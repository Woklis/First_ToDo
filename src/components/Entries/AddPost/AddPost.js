import React, { useState, useEffect } from "react";

import useFetch from "../../../hooks/useFetch";
import classes from "./AddPost.module.css";

const AddPost = ({ closeModal, refreshArticle }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [body, setBody] = useState("");

  const [{ response, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/articles"
  );

  useEffect(() => {
    if (!response) return;
    console.log(response);
    closeModal();
    refreshArticle();
  }, [response]);

  useEffect(() => {
    if (!error) return;
    console.log(error);
    closeModal();
  }, [error]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Title", title);
    console.log("Description", description);
    console.log("Body", body);
    doFetch({
      method: "POST",
      data: {
        article: {
          body,
          description,
          tagList: [],
          title,
        },
      },
    });
  };
  // closeModal;
  const clickBackground = (event) => {
    if (event.target.className === classes.AddPostWrapper) {
      closeModal();
    }
  };

  return (
    <div className={classes.AddPostWrapper} onClick={clickBackground}>
      <div className={classes.AddPost}>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            type="text"
            className={classes.input}
            placeholder="Post title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <textarea
            className={classes.textarea}
            rows="5"
            placeholder="Write your post"
            onChange={(e) => setBody(e.target.value)}
          />
          <div className={classes.addWrapper}>
            <button type="submit" className={classes.add}>
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
