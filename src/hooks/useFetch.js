import { useState, useEffect } from "react";

const useFetch= (url) => {
    const[data, setData]= useState(null);
    const [loading, setLoading]= useState(null);
    const [error, setError]=useState(null);

    useEffect(()=>
    {
        setLoading(true);
        fetch(url)
        .then((res) => {
            if(!res.ok) throw new Error("Network response failed");
            return res.json();
        })
        .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, [url]);

    return {data,loading, error};

};

export default useFetch;