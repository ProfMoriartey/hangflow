// "use client";

// import { useSectionInView } from "@/lib/hooks";
// import React from "react";
// import SectionHeading from "./section-heading";
// import { reviewsData } from "@/lib/data";
// import Review from "./review";

// export default function Reviews() {
//   const { ref } = useSectionInView("Reviews", 0.5);

//   return (
//     <section ref={ref} id="reviews" className="scroll-mt-28 mb-28">
//       <SectionHeading>Reviews</SectionHeading>
//       <div className="grid grid-rows-4 grid-cols-4 max-w-2xl gap-3">
//         {reviewsData.map((review, index) => (
//           <React.Fragment key={index}>
//             <Review {...review} />
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }
