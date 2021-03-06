import React from "react";
import fetchMarkdown from "../lib/fetchMarkdown.js";
import theme from "../components/theme.js";
import { Box } from "../components/styled-grid";
import Layout from "../components/Sharedy/Layout";
import { TextBlock } from "../components/Sharedy/Text";
import Header from "../components/Sharedy/Header";
import Footer from "../components/Sharedy/Footer";
import Block from "../components/Sharedy/Block";

const Root = props => (
  <Layout>
    <Header clear />

    <Box style={{ marginTop: "45px" }}>
      <Block mw="sm">
        <TextBlock
          dangerouslySetInnerHTML={{ __html: props.privacy.body.html }}
        />
      </Block>
    </Box>

    <Footer />
  </Layout>
);

class TermsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req, pathname }) {
    const privacy = await fetchMarkdown(req, "privacy");

    return {
      privacy,
      pathname
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default TermsPage;
