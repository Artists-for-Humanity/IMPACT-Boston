import Grid from "./Grid";
export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <Grid className="py-[88px]">
          <div className="Impact gap-[50px] grid lg:col-start-0 lg:col-span-3">
            <h1 className="h2 text-white uppercase">Impact</h1>
            <section id="infor" className="grid gap-[24px]">
              <div className="address">
                <p id="address" className="p2 text-white">
                  Address
                </p>
                <p className="text-[#B7B7B7] p2">
                  89 South Street, Suite 600 Boston, MA
                </p>
              </div>
              <div className="Email">
                <p id="email" className="p2 text-white">
                  Email
                </p>
                <p className="text-[#B7B7B7] p2">nfo@impactboston.org </p>
              </div>
              <div className="Call">
                <p id="Call" className="p2 text-white">
                  Call
                </p>
                <p className="text-[#B7B7B7] p2">+1 617-597-4945 </p>
              </div>
            </section>
          </div>

          <div className="Contact grid lg:col-start-7 lg:col-span-full">
            <div id="head">
              <h2 id="contactUs" className="sub2 text-white">
                Contact Us
              </h2>
              <p className="p2 text-[#B7B7B7]" id="info-contact">
                We’re here to help, reach out anytime.
              </p>
            </div>

            <div id="input" className="flex gap-[8px] flex-col">
              <input
                type="text"
                className="h-[64px] py-[20px] px-[19px] bg-[#1F2122] w-full sub2 text-[#B7B7B7]"
                placeholder="Enter your email"
              ></input>
              <button
                type="submit"
                className="h-[64px] flex justify-between flex py-[20px] px-[19px] bg-[#1F2122] w-full p2 text-[#B7B7B7]"
              >
                <p className="p2">Submit</p>
                <p className="submit_arrow">&#8594;</p>
              </button>
            </div>
          </div>
          <div
            id="divideSection"
            className="col-start-0 col-span-full h-[24px] border-t-1"
          ></div>
          <div className="About lg:col-start-0 lg:col-span-4">
            <p id="address" className="p1-bold text-white">
              Address
            </p>
            <ul className="text-[#B7B7B7]">
              <li className="p2">About Impact</li>
              <li className="p2">Board and Staff</li>
              <li className="p2">Accessibility</li>
              <li className="p2">Blog</li>
            </ul>
          </div>

          <div className="Programs lg:col-span-4">
            <p id="address" className="p1-bold text-white">
              Programs
            </p>
            <ul className="text-[#B7B7B7]">
              <li className="p2">Self-Defense Classes</li>
              <li className="p2">chools & Colleges</li>
              <li className="p2">People With Disabilities</li>
              <li className="p2">De-escalation</li>
              <li className="p2">Community Organization</li>
              <li className="p2">Workplace Programs</li>
              <li className="p2">Know Your Rights & Activist Safety</li>
              <li className="p2">Customized Programs</li>
            </ul>
          </div>

          <div className="LearnMore lg:col-span-4">
            <p id="address" className="p1-bold text-white">
              Learn More
            </p>
            <ul className="text-[#B7B7B7]">
              <li className="p2">Fact Check Friday</li>
              <li className="p2">Books by Meg Stone</li>
              <li className="p2">Press</li>
              <li className="p2">What is Empowerment Self</li>
              <li className="p2">Defense</li>
            </ul>
          </div>
        </Grid>
      </div>
    </>
  );
}
