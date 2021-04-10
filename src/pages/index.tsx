import React from "react";
import Plans from "../components/Plans";
import SectionIntroduction from "../components/SectionIntroduction";
import { ContentContainer } from '../styles/home.styles'

export default function Home() {
  return (
    <>
      <ContentContainer>
        <SectionIntroduction />
        <Plans></Plans>
      </ContentContainer>
    </>
  )
}
