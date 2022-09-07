import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/post-compo/all-posts";
import { getAllPosts } from "../../helper/posts-util";

function PostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='Lista de posts' content="Todos los post de este blog"></meta>
      </Head>
      <AllPosts posts={props.posts}></AllPosts>
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
  };
}

export default PostsPage;
