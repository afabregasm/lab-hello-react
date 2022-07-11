import img1 from "../images/icon1.png";
import img2 from "../images/icon2.png";
import img3 from "../images/icon3.png";
import img4 from "../images/icon4.png";

function Info() {
  return (
    <div className="App-info">
      <div className="Images">
        <img src={img1} alt="Image1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="Images">
        <img src={img2} alt="Image2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="Images">
        <img src={img3} alt="Image3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="Images">
        <img src={img4} alt="Image4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Info;
