import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null
  });

  const getFetch = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState({ data, loading: false, hasError: null });
    } catch (error) {
      setState({ data: null, loading: false, hasError: error });
    };
    }

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state };
};
