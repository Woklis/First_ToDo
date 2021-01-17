import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import cx from "classnames";

import { CurrentUserContext } from "../../contexts/currentUser";
import useFetch from "../../hooks/useFetch";

import classes from "./Entries.module.css";
import Header from "../Header/Header";
import TagToggle from "./TagToggle/TagToggle";
import Table from "./Table/Table";
import AddPost from "./AddPost/AddPost";

/*
  bio: null
  createdAt: "2021-01-01T15:07:39.467Z"
  email: "woklisgm@mail.ru"
  id: 132687
  image: null
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMyNjg3LCJ1c2VybmFtZSI6Indva2xpc2dtIiwiZXhwIjoxNjE1OTg3ODgwfQ.orciMww4r_uGA0iwn8KXjOR68W_DT9vc1fWBkdzh6vE"
  updatedAt: "2021-01-01T15:07:39.472Z"
  username: "woklisgm"
  __proto__: Object
*/

const Entries = () => {
  const [showMoadalAddPost, setShowMoadalAddPost] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filterArticles, setFilterArticles] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [{ user }] = useContext(CurrentUserContext);
  const [{ isLoading, response, error }, doFetch] = useFetch(
    `https://conduit.productionready.io/api/articles?author=${user.username}&limit=10&offset=0`
  );

  const location = useLocation();
  const hash = location.hash.slice(1) || "show_all";

  const toggleModalAddPost = () => {
    setShowMoadalAddPost(!showMoadalAddPost);
  };

  const makeTabsList = (articleList) => {
    const tabsObj = {};
    for (let name of articleList) {
      tabsObj[name.description] = false;
    }
    return [...Object.keys(tabsObj)];
  };

  const refreshArticle = () => {
    console.log("GET ARTICLES");
    doFetch();
  };

  useEffect(() => {
    refreshArticle();
  }, []);

  useEffect(() => {
    if (hash === "") return;
    hash === "show_all"
      ? setFilterArticles([...articles])
      : setFilterArticles([
          ...articles.filter((item) => item.description.toLowerCase() === hash),
        ]);
  }, [hash]);

  useEffect(() => {
    if (!isLoading || !response) return;
    setArticles(response.data.articles);
    setTabs(makeTabsList(articles));
  }, [response, isLoading]);

  const tagItems = {
    "Show all": "show_all",
    Work: "work",
    Other: "other",
    Shop: "shop",
  };

  return (
    <div className={classes.Entries}>
      <Header addOnclick={toggleModalAddPost} />
      <div className={classes.Main}>
        <TagToggle tags={tagItems} hash={hash} path={location.pathname} />
        <Table articles={filterArticles} />
        {showMoadalAddPost ? (
          <AddPost
            closeModal={toggleModalAddPost}
            refreshArticle={refreshArticle}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Entries;
