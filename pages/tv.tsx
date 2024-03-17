import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import VisualFeatures from "./components/VisualFeatures";

export default function TV() {
  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Pricing />
      <FAQs />
      <Head>
        <title>雙龍體育TV</title>
        <meta name="description" content="雙龍體育TV直播比賽，快速，安全立刻購買！ 註冊登入" />
      </Head>
    </>
  );
}


