import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";

const currentUserChecker = ({ children }) => {
  const [{ response, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/user"
  );

  return children;
};

export default currentUserChecker;
