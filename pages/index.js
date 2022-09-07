import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helper/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Cronopio</title>
        <meta name='description' content="Un cronopio es una flor"></meta>
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log('featuredPosts');
  console.log(featuredPosts);
  return { props: { posts: featuredPosts }, revalidate: 160 };
}

export default HomePage;
