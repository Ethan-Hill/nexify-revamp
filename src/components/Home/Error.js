import dynamic from "next/dynamic";
import Head from "next/head";

const HeroTitle = dynamic(() => import("../Index/HeroTitle.js"));
const Switch = dynamic(() => import("../Switch.js"));

export default function Error({ errorCode, Message }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
      <Head>
        <title>Home</title>
      </Head>
      <div className="absolute right-0 p-3 top-15">
        <sl-alert
          type="danger"
          closable
          open
          duration="5000"
          className="w-full alert-closable"
        >
          <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
          <strong>An error occurred!</strong>
          <br />
          {errorCode} - {Message}
        </sl-alert>
      </div>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <HeroTitle />
        <Switch />
      </main>
    </div>
  );
}
