'use client';

import React from 'react';

import { cn } from '../../lib/utils';
import SparklesCore from '../ui/sparkles';

const SparklesPreview = () => (
  <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent">
    <h1
      className={cn(
        'text-dark relative z-20 text-center text-3xl font-bold md:text-7xl lg:text-9xl',
        'pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300/80 to-black bg-clip-text text-center text-8xl font-semibold leading-none text-transparent'
      )}>
      Sohan
    </h1>
    <div className="relative h-40 w-[40rem]">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
      <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={1}
        maxSize={2}
        particleDensity={1200}
        className="h-full w-full"
        particleColor="#000"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
    </div>
  </div>
);

export default SparklesPreview;
