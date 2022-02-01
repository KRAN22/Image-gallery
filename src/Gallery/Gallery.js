import "./style.css";

export const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
              height="200"
              width="250"
              alt={item.title}
            />
          </div>
        );
      })}
    </div>
  );
};
