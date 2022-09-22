import { useEffect, useState } from "react";

const useFetchPeople = (URL: any) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setdata(data);
        setloading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useFetchPeople;
