import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : initialState;
    } catch (error) {
      console.log("couldnot receive data");
      if (error instanceof Error) console.log(error.message);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
