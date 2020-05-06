import React from "react";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import Main from "gatsby-theme-carbon/src/components/Main";
import { HomepageBanner } from "gatsby-theme-carbon/src/components/Homepage";
import BackToTopBtn from "gatsby-theme-carbon/src/components/BackToTopBtn";

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  const { frontmatter = {}, titleType } = props.pageContext;
  const { title, description, keywords } = frontmatter;

  return (
    <>
      <Layout
        pageTitle={title}
        pageDescription={description}
        pageKeywords={keywords}
        titleType={titleType}
        homepage
        theme="dark"
      >
        <HomepageBanner renderText={() => <h1>React Hooks</h1>} />
        <Main>{props.children}</Main>
        <BackToTopBtn />
      </Layout>
    </>
  );
}

export default ShadowedHomepage;
