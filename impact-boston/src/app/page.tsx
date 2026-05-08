// all of your imports go here
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero1 from "@/components/Hero/Hero1";
import Action from "@/components/common/Action/Action";
import Tabs from "@/components/common/Tabs/Tabs";
export default function IndexPage() {
  return (
    <main>
      {/* all of your main code goes in here */}
      <Header></Header>
      <Hero1></Hero1>
      <Action></Action>
      <Tabs></Tabs>
      <Footer></Footer>
    </main>
  );
}
