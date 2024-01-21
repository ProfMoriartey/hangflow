"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import Service from "./service";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <section ref={ref} id="Services" className="scroll-mt-28 mb-28">
      <SectionHeading>My Services</SectionHeading>
      <div>
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <Service {...service} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
