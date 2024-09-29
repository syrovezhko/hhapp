import { useEffect, useRef, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [arr, setArr] = useState([]);
  const ref = useRef(true);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setArr(response.data.fruits);
  };

  useEffect(() => {
    if (ref.current) {
      fetchAPI();
    }
    return () => {
      ref.current = false;
    };
  }, []);

  return (
    <>
      <h1>Test request</h1>
      {arr.map((i, idx) => (
        <p
          key={idx}
          className="read-the-docs"
        >
          {i}
        </p>
      ))}
    </>
  );
}

export default App;
