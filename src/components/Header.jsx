import logo from "../images/ironhack-logo-xs.png";
import navbar from "../images/menu-top-xs.png";

function Header() {
  return (
    <div className="App-header">
      <div className="Icons">
        <img src={logo} alt="Ironhack logo" />
        <img src={navbar} alt="Navbar" />
      </div>
      <h1>Say hello to ReactJS</h1>
      <article>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </article>
      <button>Awesome!</button>
    </div>
  );
}

export default Header;
