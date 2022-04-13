import { useState, useEffect } from "react";

export const useFetch = function (url) {
  const [data, setData] = useState(null); //at the beginning there are no data. "the promise is empty"
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true); //while we are fetching is true
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        setError("Could not fetch the data");
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
