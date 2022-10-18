import { memo, useEffect } from "react";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HomePage from "../ibc-ui-home/Home";
import { useDispatch, useSelector } from "react-redux";
 
const Home = (props) => {

 
  return (
    <section>
      <Head>
        <title>iBeautyConnect Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <main>
        <HomePage  {...props}/>
      </main>
    </section>
  );
};



export default Home;
