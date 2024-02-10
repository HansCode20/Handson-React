import "./style.css";

const Navbar = () => {
  const navList = ["home", "about", "contact", "help", "login"];

  return (
    <div>
      {navList.map((list) => {
        return <li>{list}</li>;
      })}
    </div>
  );
};

export default Navbar;

navList.map((list) => <p>{list}</p>);

navList.map((list) => <li>{list}</li>);
