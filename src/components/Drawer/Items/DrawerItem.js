import { useRouter } from "next/router";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");

export default function DrawerItem({ title, link }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="flex items-center justify-center w-full h-24">
      <div className="flex items-center justify-center w-full h-full ">
        <ShoelaceButton
          type="default"
          size="large"
          onClick={handleRoute}
          style={{ width: "200px" }}
        >
          {title}
        </ShoelaceButton>
      </div>
    </div>
  );
}
