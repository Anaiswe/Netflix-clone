import data from "../data.json";
function Section() {
  return (
    <div className="main-categories">
      {data.map((elem, index) => {
        return (
          <div key={index}>
            <div>{elem.category}</div>
            <div className="movies-pictures">
              {elem.images.map((image, index) => {
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
