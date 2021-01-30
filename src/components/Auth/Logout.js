import { signOut } from "next-auth/client";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function Logout() {
  return (
    <ShoelaceButton
      type="default"
      size="large"
      onClick={() => signOut({ callbackUrl: `http://localhost:3000/ap` })}
    >
      <ShoelaceIcon
        name="door-open-fill"
        style={{ paddingRight: "10px" }}
      ></ShoelaceIcon>
      Logout
    </ShoelaceButton>
  );
}
