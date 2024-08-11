import dayjs from 'dayjs';

import BoxReveal from '../components/magicui/box-reveal';
import Meteors from '../components/magicui/meteors';
import ShimmerButton from '../components/magicui/shimmer-button';
import ShineBorder from '../components/magicui/shine-border';
import Vortex from '../components/ui/vortex';
import { cn } from '../lib/utils';

const Home = () => (
  <main className="">
    <div
      className={cn(
        'relative',
        'min-h-screen w-full overflow-hidden',
        'rounded-lg border bg-background md:shadow-xl'
      )}>
      <Meteors number={30} />

      <ShineBorder
        className={cn(
          'relative mx-[5vw] my-[5dvh] h-[90dvh] w-[90vw] overflow-hidden',
          'rounded-lg border bg-transparent md:shadow-xl'
        )}
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}>
        <div className="h-full w-full items-center justify-center overflow-hidden px-12">
          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <h2 className="pointer-events-none mt-[10dvh] w-full whitespace-pre-wrap text-left text-4xl font-semibold leading-none text-transparent">
              <span className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">Hi </span>
              <span className="text-yellow-600">👋</span>
              <span className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">,</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <h1 className="mt-[.5rem] text-8xl">
              <span className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent">
                I&apos;m{' '}
              </span>
              <span className="bg-gradient-to-b from-[#5046e6] to-[#FF4E88] bg-clip-text font-semibold text-transparent">
                Sohan Dutta
              </span>
            </h1>
          </BoxReveal>

          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <h2 className="mt-[.5rem] text-[1.5rem]">
              a <span className="font-semibold text-[#5046e6]">Software Engineer</span>
              <span className=""> from </span>
              <span className="font-semibold">India 🇮🇳</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                <span>-&gt; Specialized in building </span>
                <span className="font-semibold text-[#5046e6]">Web Applications</span>
                <span> and </span>
                <span className="font-semibold text-[#5046e6]">Mobile Applications</span>
              </p>
              <p>
                <span>-&gt; With </span>
                <span className="font-semibold text-[#5046e6]">
                  {dayjs().diff(dayjs('2018-07-01'), 'year')}+ years
                </span>
                <span> of experience</span>
              </p>
              <p>
                <span>-&gt; My poison of choice is </span>
                <span className="font-semibold text-[#5046e6]">Javascript</span>
              </p>
              <p>
                <span>-&gt; FullStack Engineer experienced in </span>
                <span className="font-semibold text-[#5046e6]">React, React Native and NodeJS</span>
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <ShimmerButton
              className="z-10 mt-10 font-semibold"
              background="#5046e6"
              shimmerColor="#FF4E88">
              Curious? 👇
            </ShimmerButton>
          </BoxReveal>
        </div>

        <Vortex
          backgroundColor="transparent"
          className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
        />
      </ShineBorder>
    </div>
  </main>
);

export default Home;
