/** @jsx jsx */

import { jsx } from "theme-ui";
import { Grid } from "@theme-ui/components";
import Head from "next/head";

import data from "../data.json";
import Block from "../components/Block";

const Home = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Grid columns={4}>
      {data.blocks.map((block, index) => (
        <Block key={index} {...block} />
      ))}
    </Grid>
  </div>
);

export default Home;
