import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useFetchPeople = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(BASE_URL + "/people")
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
