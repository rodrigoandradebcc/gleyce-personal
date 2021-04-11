import React from "react";
import Plans from "../components/Plans";
import SectionIntroduction from "../components/SectionIntroduction";
import { PageLanding } from '../styles/home.styles'

export default function Home() {
  return (
    <>
      <PageLanding>
        <SectionIntroduction />
        <Plans />
      </PageLanding>
    </>
  )
}
