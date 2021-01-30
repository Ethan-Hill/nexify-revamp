import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");

export default function Protected() {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push({ pathname: "/", query: { error: "Page was not found" } });
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-center">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-3xl">404 - Page Not Found</h1>
      <ShoelaceButton
        type="default"
        size="large"
        onClick={handleRoute}
        style={{ width: "200px", marginTop: "20px" }}
      >
        Home
      </ShoelaceButton>
    </div>
  );
}
