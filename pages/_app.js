import App from "next/app";
import "animate.css";
import PageLayout from "../components/PageLayout";
import "../styles/globals.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    );
  }
}

export default MyApp;
