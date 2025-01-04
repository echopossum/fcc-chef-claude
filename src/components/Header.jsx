import logo from "../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="chef logo" />
      <h1 className="headerText">Chef Claude</h1>
    </header>
  );
};

export default Header;
