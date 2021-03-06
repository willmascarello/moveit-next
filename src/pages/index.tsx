import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Cowntdown";
import { TestMode } from "../components/TestMode";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css"
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  testMode: boolean;
  currentExperience: number;
  challengesCompleted: number;

}

export default function Home(props) {

  return (
    <ChallengesProvider 
    level={props.level}
    testMode={props.testMode}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        
        <Head>
          <title>Início | move.it</title>
        </Head>
        <TestMode />
        <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />

          </div>
        </section>
      </CountdownProvider>

      </div>

    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, testMode, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      testMode: Boolean(testMode),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

