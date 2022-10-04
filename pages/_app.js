// import '../styles/globals.css'
import StateWrapper from "../context/StateWrapper";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}

export default MyApp;
