// all of your imports go here
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero1 from "@/components/Hero/Hero1";
import Action from "@/components/common/Action/Action";
import Tabs from "@/components/common/Tabs/Tabs";
import Highlight from "@/components/common/Highlight/highlight";
import Testimonial from "@/components/common/Testimonial/testimonial";
export default function IndexPage() {
  return (
    <main>
      {/* all of your main code goes in here */}
      <Header></Header>
      <Hero1></Hero1>
      <Action></Action>
      <Tabs></Tabs>
      <Highlight></Highlight>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </main>
  );
}
