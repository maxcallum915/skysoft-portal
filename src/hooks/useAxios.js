import { useEffect, useState } from "react";
import axios from "../config/axios";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [controller, setController] = useState();

  const axiosFetch = async ({ method, url, data, config = {} }) => {
    // console.log(method, url, config);
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      // setLoading((prevState) => !prevState);
      const res = await axios[method.toLowerCase()](url, data, {
        ...config,
        signal: ctrl.signal,
      });
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading((prev) => !prev);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxios;
