import "./App.css";
import Menu from "./components/Menu";
import { data } from "./assets/data";
import { useState } from "react";

const allCategories = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menus, setMenus] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("all");

  const filterMenus = (category) => {
    if (category === "all") {
      setMenus(data);
      setCurrentCategory("all");
    } else {
      const newMenus = data.filter((item) => item.category === category);
      const activeCategory = [
        ...new Set(
          newMenus.map((item) => {
            return item.category;
          })
        ),
      ];
      setMenus(newMenus);
      setCurrentCategory(activeCategory[0]);
    }
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <hr />
      <ul className="category">
        {allCategories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => filterMenus(category)}
              className={category === currentCategory ? "activeCategory" : ""}
            >
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
