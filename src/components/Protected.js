import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");

export default function Protected() {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push({ pathname: "/", query: { error: "Not Logged In" } });
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-center">
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/dist/shoelace/shoelace.css"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/dist/shoelace/shoelace.esm.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/themes/dark.css"
        />
      </Head>
      <h1 className="text-3xl">Please Sign in before visiting here</h1>
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
