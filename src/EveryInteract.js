import React from "react";

import Head from "./Header";
import Wrapper from "./Wrapper";
import Cover from "./Cover";
import Social from "./Social";
import ContentSection from "./Content";

export default function EveryInteract() {
  return (
    <div>
      <Wrapper>
        <Head />
        <Cover />
        <Social />
        <ContentSection />
      </Wrapper>
    </div>
  );
}
