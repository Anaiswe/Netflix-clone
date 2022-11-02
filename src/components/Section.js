import data from "../data.json";
function Section() {
  return (
    <div className="main-categories">
      {data.map((data, index) => {
        return (
          <div key={index}>
            <div>{data.category}</div>
            <div className="movies-pictures">
              {data.images.map((image, index) => {
                return <img key={index} src={image} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
