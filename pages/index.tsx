import type {
  GetStaticProps,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Categories from "../components/Categories";
import { PostCard } from "../components/PostCard";
import { PostWidget } from "../components/PostWidget";
import { getPosts } from "../services";
import { PostType } from "../types";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts: PostType[] = (await getPosts()) || [];
  return {
    props: { posts },
  };
};

export default Home;
