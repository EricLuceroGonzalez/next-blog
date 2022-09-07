// import { getStaticProps } from "..";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/post-compo/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helper/posts-util";

function PostDetail(props) {
  return (
    <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt}></meta>
        </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetail;
