import Grid from "../Grid";
import ActionBox from "./ActionBox";
import HireUs from "../../../../public/images/ActionBoxHireUsIcon.svg";
import JoinClass from "../../../../public/images/ActionJoinClassIcon.svg";
import Donation from "../../../../public/images/ActionDonationIcon.svg";
export default function Action() {
  return (
    <Grid>
      {/* <h2 id="title" className="col-span-6 col-start-0 h2">
        Everything You Need to Get Involved.
      </h2>
      <p id="description" className="col-start-10 col-span-3 p2">
        Register for classes, make donations, or explore programs.
      </p> */}
      <div className="flex col-span-full lg:justify-between lg:items-center flex-col items-start lg:flex-row ">
        <h2 id="title" className="h2">
          Everything You Need to Get Involved.
        </h2>
        <p id="description" className=" p2">
          Register for classes, make donations, or explore programs.
        </p>
      </div>
      <ActionBox
        background="bg-[#E86834]"
        icon={HireUs}
        title="Hire Us to Come to You"
        context="If you’re a school, organization, workplace, or other group, explore our classes and programs."
      />
      <ActionBox
        background="bg-[#563672]"
        icon={JoinClass}
        title="Join a Class Today"
        context="If you're an individual seeking a self-defense class, explore options and register here online today."
      />
      <ActionBox
        background="bg-[#311E41]"
        icon={Donation}
        title="Make a Donation"
        context="Support our mission. Every gift makes an impact. Help bring self defense training to all folks today!"
      />
    </Grid>
  );
}
