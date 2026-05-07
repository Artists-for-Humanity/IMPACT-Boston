"use client";
import { styleText } from "util";
import Grid from "./Grid";
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState(0);
  const buttons = [0, 1, 2];
  return (
    <Grid>
      <section className="col-span-5">
        <div className="flex">
          <ul className="flex flex-col ">
            {buttons.map((label, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                }}
                className={
                  active === index
                    ? "border-[#E86834] border-l-[5px] pl-2 h3 ease-linear"
                    : "border-[#DDD] border-l-[5px] pl-2 h3"
                }
              >
                {label}
              </button>
            ))}
          </ul>
        </div>
      </section>
    </Grid>
  );
}
