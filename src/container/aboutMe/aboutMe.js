import React from "react";
import img from "../../assets/Tomosho.jpg";
import { AboutMe } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import cv from "../../assets/cv/tomoshocv.pdf";
import letter from "../../assets/cv/Temosholattar.pdf";

export default function AboutMeContainer() {
  return (
    <AboutMe>
      <AboutMe.Container>
        <AboutMe.Column>
          <AboutMe.Image src={img} />
        </AboutMe.Column>
        <AboutMe.Column>
          <AboutMe.Heading2>About Me</AboutMe.Heading2>
          <AboutMe.Heading4>
            Hello! My Name is Sekgwari Tomosho.
          </AboutMe.Heading4>
          <AboutMe.Text>
            I am doing mechanical engineering which is the course i desire the
            most because I am passionate about my work and Because I love what I
            do,
          </AboutMe.Text>
          <AboutMe.Text>
            I have a steady source of motivation that drives me to do my best.
          </AboutMe.Text>
          <AboutMe.Text>
            in future i would like to see my self being a well known
            professional mechanical engineer having my own company. as a child
            of god i believe he will help me for fill my dream.
          </AboutMe.Text>
        </AboutMe.Column>
      </AboutMe.Container>
      <AboutMe.Buttons>
        <DownloadCVButton href={cv} target="_blank">
          CV
        </DownloadCVButton>
        <DownloadCVButton href={letter} target="_blank">
          Cover Letter
        </DownloadCVButton>
      </AboutMe.Buttons>
    </AboutMe>
  );
}
