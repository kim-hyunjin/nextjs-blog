import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilsStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

/**
 * By returning allPostsData inside the props object in getStaticProps,
 * the blog posts will be passed to the Home component as a prop.
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>
          Thank you for visiting my profile site! I'm a web programmer. You can
          contact me:
        </p>
        <p>hyunjin1612@gmail.com</p>
        <p>
          Here is my github url{" "}
          <a href="https://github.com/kim-hyunjin">link</a>
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
