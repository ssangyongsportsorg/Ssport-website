import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";

export default function TV() {
  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
      <Head>
        <title>雙龍體育TV</title>
        <meta name="description" content="雙龍體育TV直播比賽，快速，安全立刻購買！ 註冊登入" />
      </Head>
    </>
  );
}


