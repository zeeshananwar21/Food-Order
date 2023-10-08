import image from '../image.jpeg';

const Title = ()=> (
    <a href="/"> <img className='logo' alt="" src={image}/></a>
    );

const Header = () => {
    return (
      <div className="header">
        <Title /> 
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;