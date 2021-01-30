import dynamic from "next/dynamic";
import Head from "next/head";

const Error = dynamic(() => import("../components/Home/Error.js"));
const HeroTitle = dynamic(() => import("../components/Index/HeroTitle"));
const Switch = dynamic(() => import("../components/Switch"));

export default function Home({ statusCode, errorMessage }) {
  if (!statusCode) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
          <Head>
            <title>Home</title>
          </Head>
          <main className="flex flex-col items-center justify-center flex-1 text-center">
            <HeroTitle />
            <Switch />
          </main>
        </div>
      </div>
    );
  } else {
    return <Error errorCode={statusCode} Message={errorMessage} />;
  }
}

export async function getServerSideProps({ query }) {
  const { errorCode } = query;

  switch (errorCode) {
    case "404":
      return { props: { statusCode: 404, errorMessage: "Page not found" } };
    case "401":
      return { props: { statusCode: 401, errorMessage: "Not Authorized" } };
    default:
      return { props: { statusCode: null } };
  }
}
