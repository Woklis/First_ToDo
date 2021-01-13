import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    const reqOptions = { ...options, ...{ headers: {} } };

    if (!isLoading) return;
    axios(url, reqOptions)
      .then((res) => {
        setResponse(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  }, [isLoading, options, url]);

  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
