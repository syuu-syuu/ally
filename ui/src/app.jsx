import React, { useState, useEffect } from "react";
import "./header.css";

function App() {
  const [triggerGet, setTriggerGet] = useState(false);
  const [triggerPost, setTriggerPost] = useState(false);
  const [triggerPut, setTriggerPut] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    if (triggerGet) {
      fetch("http://localhost:3000/")
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [triggerGet]);

  useEffect(() => {
    if (triggerPost) {
      fetch("http://localhost:3000/", {
        method: "POST",
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error with POST request:", error));
    }
  }, [triggerPost]);

  useEffect(() => {
    if (triggerPut) {
      fetch("http://localhost:3000/", {
        method: "PUT",
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error with PUT request:", error));
    }
  }, [triggerPut]);

  useEffect(() => {
    if (triggerDelete) {
      fetch("http://localhost:3000/", {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error with DELETE request:", error));
    }
  }, [triggerDelete]);

  return (
    <div className="bottom-buttons">
      <button onClick={() => setTriggerGet(true)}>Print Hello World</button>
      <button onClick={() => setTriggerPost(true)}>Post Something</button>
      <button onClick={() => setTriggerPut(true)}>Update Something</button>
      <button onClick={() => setTriggerDelete(true)}>Delete Something</button>
    </div>
  );
}

export default App;
