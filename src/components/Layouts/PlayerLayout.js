import Head from "next/head";

export default function PlayerLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
      <Head>
        <title>Player</title>
      </Head>
      {children}
    </div>
  );
}
