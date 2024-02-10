import "./style.css";

const Navbar = () => {
  const navList = ["home", "about", "contact", "help", "login"];

  return (
    // Cara ke 1
    <div className="nav-list">
      {navList.map((list) => {
        return <li>{list}</li>;
      })}
    </div>
  );
};

export default Navbar;


// cara ke 2
// navList.map((list) => <p>{list}</p>);

// cara ke 3
// navList.map((list) => <li>{list}</li>);
