const Menu = ({ menu }) => {
  const { image, title, description, price } = menu;

  return (
    <div className="menu">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="menu-text">
        <div className="menu-title">
          <h4>{title}</h4>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Menu;
