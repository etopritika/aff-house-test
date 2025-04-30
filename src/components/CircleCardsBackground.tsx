import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { getTranslateY } from '../lib/utils';
import { Dot } from '../lib/types';

type DotWithTranslate = Dot & { translateY: [number, number] };

const baseDots: Dot[] = [
  {
    className: 'right-[216px] top-[79px] z-10',
    size: 19,
    color: '#3083FF',
    speed: -10,
  },
  {
    className: 'right-[6px] top-[120px] z-10',
    size: 22,
    color: '#72EBF9',
    speed: -15,
  },
  {
    className: 'bottom-0 left-[65px] z-10',
    size: 48,
    color: 'white',
    speed: -20,
  },
  {
    className: 'bottom-[50px] right-[324px] z-10',
    size: 26,
    color: 'white',
    speed: -12,
  },
  {
    className: 'bottom-[116px] left-[292px] z-10',
    size: 14,
    color: 'white',
    speed: -15,
  },
  {
    className: 'bottom-0 right-[123px] z-10',
    size: 15,
    color: '#72EBF9',
    speed: -20,
  },
  {
    className: 'bottom-[111px] right-[6px] z-0',
    size: 79,
    border: { width: 21, color: '#3083FF' },
    speed: -10,
  },
];

type Props = {
  children: React.ReactNode;
};

export const CircleCardsBackground: React.FC<Props> = ({ children }) => {
  const [dots, setDots] = useState<DotWithTranslate[]>([]);

  useEffect(() => {
    const vh = window.innerHeight;

    setDots(
      baseDots.map((dot) => ({
        ...dot,
        translateY: getTranslateY(dot.speed, vh),
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute right-[240px] top-0 z-10 flex h-[701px] w-[701px] items-center justify-center">
      <div className="absolute z-10 h-full w-full rounded-full bg-[#72ebf94d]" />

      <div className="absolute z-10 h-[579px] w-[579px] rounded-full bg-[#72EBF9]" />

      {dots.map(({ className, size, color, translateY, border }, i) => (
        <Parallax
          key={i}
          translateY={translateY}
          className={`absolute ${className}`}
        >
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              border: border
                ? `${border.width}px solid ${border.color}`
                : undefined,
            }}
          />
        </Parallax>
      ))}

      <Parallax translateY={[-10, 10]} className="z-20">
        {children}
      </Parallax>
    </div>
  );
};
