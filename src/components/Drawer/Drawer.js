import dynamic from "next/dynamic";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const DrawerItem = dynamic(() => import("./Items/DrawerItem.js"));
const Login = dynamic(() => import("../Auth/Login"));
const Logout = dynamic(() => import("../Auth/Logout"));
const UserImage = dynamic(() => import("./Items/UserDrawerImage"));
const ShoelaceDrawer = wrapCustomElement("sl-drawer");
const ShoelaceMenuDivider = wrapCustomElement("sl-menu-divider");

export default function Drawer({ session }) {
  if (session) {
    return (
      <div>
        <ShoelaceDrawer className="drawer-placement-left" placement="left">
          <div className="flex flex-col items-center w-full h-full ">
            <UserImage user={session.user} />

            <DrawerItem title="Home" link="/" />
            <DrawerItem title="Profile" link="/profile" />
            <DrawerItem title="Player" link="/player" />
            <ShoelaceMenuDivider
              style={{ width: "200px", marginBottom: "24px" }}
            />
            <Logout />
          </div>
        </ShoelaceDrawer>
      </div>
    );
  } else {
    return (
      <div>
        <ShoelaceDrawer className="drawer-placement-left" placement="left">
          <div className="flex flex-col items-center w-full h-full ">
            <Login />
            <ShoelaceMenuDivider
              style={{ width: "200px", marginTop: "24px" }}
            />
            <DrawerItem title="Home" link="/" />
            <DrawerItem title="Profile" link="/profile" />
            <DrawerItem title="Player" link="/player" />
          </div>
        </ShoelaceDrawer>
      </div>
    );
  }
}
