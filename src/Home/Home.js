import { useState } from "react";
import axios from "axios";
import { Gallery } from "../Gallery/Gallery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";
import "./style.css";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setData(res.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  console.log(data);
  return (
    <div className="Home">
      <h1>Gallery SnapShorts </h1>
      <input type={"text"} value={search} onChange={changeHandler} />
      <button type="submit" name="search" onClick={clickHandler}>
        Submit
      </button>
      {loading ? (
        <Bars heigth="150" width="1000" color="red" ariaLabel="loading" />
      ) : null}
      {data.length > 1 ? (
        <Gallery data={data} />
      ) : data.length === 0 ? (
        <h2>No data Found</h2>
      ) : null}
    </div>
  );
};
