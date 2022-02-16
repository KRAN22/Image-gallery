import { useState, useEffect } from "react";

export const Parent = () => {
  const [name, setName] = useState("Kranthi");
  const data = useFetch("url");
  return (
    <diV>
      <h1>
        <Child name={name} setName={setName} />
      </h1>
    </diV>
  );
};

const Child = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
    </div>
  );
};

function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });
  return data;
}
