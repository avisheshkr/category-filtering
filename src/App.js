import "./App.css";
import Menu from "./components/Menu";
import { data } from "./assets/data";
import { useState } from "react";

// Extract all categories from the data
const allCategories = [
  "all",
  ...new Set(
    data.map((menu) => {
      return menu.category;
    })
  ),
];

function App() {
  const [menus, setMenus] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category) => {
    if (category === "all") {
      setMenus(data);
    } else {
      const newMenus = data.filter((menu) => menu.category === category);
      setMenus(newMenus);
    }
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <hr />
      <ul className="category">
        {categories.map((category, index) => {
          return (
            <li key={index} onClick={() => filterMenus(category)}>
              {category}
            </li>
          );
        })}
      </ul>
      <div className="menu-container">
        {menus.map((menu) => {
          return <Menu key={menu.id} menu={menu} />;
        })}
      </div>
    </div>
  );
}

export default App;
