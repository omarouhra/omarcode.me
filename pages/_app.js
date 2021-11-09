import "tailwindcss/tailwind.css";
import "../style/global.css";
import "../style/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
