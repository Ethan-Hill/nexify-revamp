import React from "react";

export default function DrawerItem() {
  const toggleDrawer = () => {
    const drawer = document.querySelector(".drawer-placement-left");
    drawer.show();
  };

  return (
    <div
      onClick={toggleDrawer}
      className="absolute top-0 left-0 p-3 text-3xl cursor-pointer dark:text-white"
      name="list"
    >
      &#9776;
    </div>
  );
}
