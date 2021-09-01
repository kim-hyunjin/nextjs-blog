import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilsStyles from "../styles/utils.module.css";

export default function Home() {
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
    </Layout>
  );
}
