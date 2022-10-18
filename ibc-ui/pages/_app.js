import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/landingPage.css";
import "../styles/auth.css";
import { Provider } from "react-redux";
import createStore from "../store/configureStore";
import config from "../config/env/local/app.json";
import { handleApplicationConfiguration } from "../store/actions/applicationActions";
import { getServerCookie } from "../helpers/utils";
import parser from "ua-parser-js";

function MyApp({ Component, pageProps }) {
  const store = createStore();

  useEffect(() => {
    store.dispatch(handleApplicationConfiguration({ services: config.services }));
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appctx) => {
  //appctx.ctx.store = createStore();
  const { ctx, Component } = appctx;
  let userAgent;
  let isLoggedIn = false;
  let cookie = "";

  if (ctx.req) {
    userAgent = ctx.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }

  if (ctx.req.headers.cookie !== undefined) {
    isLoggedIn = true;
    const cookieName = "_13123d";
    cookie = getServerCookie(cookieName, ctx.req.headers.cookie);
  }

  const ua = parser(userAgent);
  return { pageProps: { isLoggedIn, cookie, deviceType: JSON.stringify(ua, null, "  ") } };
};

export default MyApp;
