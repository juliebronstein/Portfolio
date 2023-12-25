const Nav = ({ className, item }) => {
    return (
      <li >
        <a href={item.link}> {item.icon}</a>
      </li>
    );
  };
  
  export default Nav;
  