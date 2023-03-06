import { Provider } from "react-redux";
import { getTotals } from "../redux/stateSlices/CartSlice";
import store from "../redux/store";

// Aos
// import 'aos/dist/aos.css';

// Common Css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/order_section.css";
import "../styles/common_component.css";

// main_page_css
import '../styles/main_page/main_page.css';

// landing Css
// import "../styles/landing_one/landing_one.css";
import "../styles/landing_two/landing_two.css";
import "../styles/landing_two/landing_two_media.css";

// Theme Css
import "../styles/theme_1/style.css";
import "../styles/theme_two/theme_two.css";
// import '../styles/theme_two/theme_two_media.css';

import "../styles/landing_three/landing_three.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  store.dispatch(getTotals());
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Funnel Liner Preview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/favicon.png" />


      </Head>
      {/* <SSRProvider> */}
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      {/* </SSRProvider> */}
    </>
  );
}

export default MyApp;
