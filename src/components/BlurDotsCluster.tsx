import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { getTranslateY } from '../lib/utils';
import { Dot } from '../lib/types';

type DotWithTranslate = Dot & { translateY: [number, number] };

const baseDots: (Dot & { speed: number })[] = [
  { className: 'left-[58px] top-[83px]', size: 17, color: 'white', speed: -10 },
  {
    className: 'left-[73px] top-[209px]',
    size: 40,
    color: '#3083FF',
    speed: -12,
  },
  {
    className: 'left-[10px] top-[316px]',
    size: 29,
    border: { width: 6, color: '#72EBF9' },
    speed: -14,
  },
  {
    className: 'left-[144px] top-[360px]',
    size: 19,
    color: 'white',
    speed: -10,
  },
  {
    className: 'left-0 bottom-[178px]',
    size: 40,
    color: 'white',
    blur: 12,
    speed: -16,
  },
  {
    className: 'left-[153px] bottom-0',
    size: 138,
    border: { width: 36, color: '#3083FF' },
    blur: 18,
    speed: -8,
  },
  {
    className: 'top-0 right-[180px]',
    size: 58,
    border: { width: 16, color: '#85E5FD' },
    blur: 10,
    speed: -14,
  },
  {
    className: 'bottom-[120px] right-0',
    size: 180,
    border: { width: 36, color: '#85E5FD' },
    blur: 18,
    speed: -10,
  },
  {
    className: 'bottom-[193px] right-[245px]',
    size: 30,
    color: 'white',
    speed: -12,
  },
  {
    className: 'bottom-[75px] right-[200px]',
    size: 18,
    color: 'white',
    blur: 6,
    speed: -16,
  },
];

export const BlurDotsCluster: React.FC = () => {
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
    <div className="pointer-events-none absolute left-[-207px] top-[-22px] z-[-1] h-[656px] w-[836px]">
      {dots.map(({ className, size, color, border, blur, translateY }, i) => (
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
              backgroundColor: color ?? 'transparent',
              border: border
                ? `${border.width}px solid ${border.color}`
                : undefined,
              filter: blur !== undefined ? `blur(${blur}px)` : undefined,
            }}
          />
        </Parallax>
      ))}
    </div>
  );
};
