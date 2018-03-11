import React from "react";
import styled from "styled-components";

import { rhythm } from "../utils/typography";

const Line = styled.section`
  margin-bottom: ${rhythm(1)};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const HomePage = () => (
  <div>
    <h1>Hi, I’m Hu Chen</h1>
    <Line>
      I’m an inter-disciplinary frontend engineer, designer and adventurer
      living in Singapore and sometimes travelling.
    </Line>
    <Line>
      I code in Javascript (React, Redux, React Native), Ruby and design in
      Sketch.
    </Line>
    <Line>
      I made <a href="/nz/">a website</a> with stories in my 23 days New Zealand
      trip and a web product lanquan to help everyone easily create story like
      mine. Other than that I made a React Native app Pack to help people pack
      things for trips and a site called dodohub to help people building habits.
    </Line>
    <Line>
      <a href="mailto:chen@huchen.me">Say hi</a>, or find my photos on{" "}
      <a href="https://unsplash.com/@huchenme">Unsplash</a> or{" "}
      <a href="https://www.instagram.com/huchenme">Instagram</a>, my code on{" "}
      <a href="https://github.com/huchenme/">GitHub</a> and my profile on{" "}
      <a href="https://www.linkedin.com/in/huchenme/">LinkedIn</a>.
    </Line>
    <Divider />
    <Line>
      This site was built in Gatsby and{" "}
      <a href="https://github.com/huchenme/huchenme.github.io">hosted</a> on
      GitHub. And obviously, it is still under construction.
    </Line>
  </div>
);

export default HomePage;
