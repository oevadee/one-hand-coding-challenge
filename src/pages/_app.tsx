import "../styles/globals.scss";
import { FlavorProvider } from "../hooks/FlavorProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FlavorProvider>
      <Component {...pageProps} />;
    </FlavorProvider>
  );
}

export default MyApp;
