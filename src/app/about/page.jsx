import Team from "../components/About/Team";
import OurStory from "../components/About/OurStory";
import WhatWeValue from "../components/About/WhatWeValue";
import Description from "../components/About/Description";
import JoinUs from "../components/About/JoinUs";


export default function AboutPage() {
 


  return (
    <main className="min-h-screen bg-white">
        <Description />
       {/* story section */}
       <section className="py-20">
         <OurStory />
       </section>
      {/* values section */}
      <section className="bg-sky-50 py-20">
        <WhatWeValue />
      </section>
      {/* team section*/}
      <section className="py-20">
       <Team />
      </section>
      {/* join us */}
      <section className="py-20 bg-sky-50">
        <JoinUs />
      </section>
    </main>
  )
}

