import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
      return response;
    } catch (err) {
      // Check if error has a 'message' property
      const errorMessage = err?.response?.data || err?.message || "Something went wrong";
      setError(errorMessage);
      toast.error(errorMessage);  // Display error message correctly
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
