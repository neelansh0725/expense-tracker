import "./App.css";
import { Profile } from "./Components/Profile/Profile";
import { Menu } from "./Components/Menu/Menu";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { useState } from "react";
function App() {
  const [menuSelected, setMenuSelected] = useState(<Dashboard />);
  const selectMenu = (menu) => {
    setMenuSelected(menu);
  };
  return (
    <>
      <div className="h-screen flex p-6 bg-gradient-to-r from-red-200 from-10% to-red-100 to-90%">
        <div className="rounded-2xl m-4 border-solid border-4 border-white w-1/4 size-full p-4b bg-sky-50">
          <Profile />
          <Menu menuselected={selectMenu} />
        </div>
        <div className="rounded-2xl m-4 border-solid border-4 border-white w-3/4 size-full p-4 bg-sky-50">
          {menuSelected}
        </div>
      </div>
    </>
  );
}

export default App;
