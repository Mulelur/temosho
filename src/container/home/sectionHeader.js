import React from "react";
import { SectionHeader } from "../../components";
import cv from "../../assets/cv/tomoshocv.pdf";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4>Welcome to my website!</SectionHeader.Heading4>
        <SectionHeader.Heading1>
          greetings, I am Mokgokoloshi Temosho a future mechanical engineer
        </SectionHeader.Heading1>
        <SectionHeader.Text>
          Productivity is never an accident. It’s always the result of a
          commitment to excellence, intelligent planning, and focused effort.
        </SectionHeader.Text>
        <SectionHeader.Download href={cv} target="_blank" download>
          DownLoad CV
        </SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
