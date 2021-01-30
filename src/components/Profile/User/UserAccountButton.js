import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function UserAccountButton({ url }) {
  return (
    <ShoelaceButton
      type="default"
      target="_blank"
      size="large"
      href={url}
      style={{ marginBottom: "30px", marginTop: "30px" }}
    >
      <ShoelaceIcon
        name="person-fill"
        style={{ paddingRight: "10px" }}
      ></ShoelaceIcon>
      Account
    </ShoelaceButton>
  );
}
