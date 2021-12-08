import react from "react";

class Navbar extends react.Component {
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
