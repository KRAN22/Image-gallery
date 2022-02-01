import { useState } from "react";
import axios from "axios";
import { Gallery } from "../Gallery/Gallery";
import "./style.css";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => setData(res.data.photos.photo))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Home">
      <h1>Gallery SnapShorts </h1>
      <input type={"text"} value={search} onChange={changeHandler} />
      <button type="submit" name="search" onClick={clickHandler}>
        Submit
      </button>
      {data.length > 1 ? <Gallery data={data} /> : <h2>No data Loaded</h2>}
    </div>
  );
};
