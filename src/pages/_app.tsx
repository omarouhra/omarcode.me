import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-brand_purple_dark to-brand_purple">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
