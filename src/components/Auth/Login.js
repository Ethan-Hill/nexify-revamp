import { signIn } from "next-auth/client";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function Login() {
  return (
    <div className="h-24 p-5 ">
      <ShoelaceButton
        type="default"
        size="large"
        onClick={() => signIn("spotify")}
      >
        <ShoelaceIcon
          name="person-fill"
          style={{ paddingRight: "10px" }}
        ></ShoelaceIcon>
        Login
      </ShoelaceButton>
    </div>
  );
}
