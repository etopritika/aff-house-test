import React from 'react';

type Dot = {
  className: string;
  size: number;
  color?: string;
  border?: { width: number; color: string };
  blur?: number;
};

const dots: Dot[] = [
  { className: 'left-[58px] top-[83px]', size: 17, color: 'white' },
  { className: 'left-[73px] top-[209px]', size: 40, color: '#3083FF' },
  {
    className: 'left-[10px] top-[316px]',
    size: 29,
    border: { width: 6, color: '#72EBF9' },
  },
  { className: 'left-[144px] top-[360px]', size: 19, color: 'white' },
  { className: 'left-0 bottom-[178px]', size: 40, color: 'white', blur: 12 },
  {
    className: 'left-[153px] bottom-0',
    size: 138,
    border: { width: 36, color: '#3083FF' },
    blur: 18,
  },
  {
    className: 'top-0 right-[180px]',
    size: 58,
    border: { width: 16, color: '#85E5FD' },
    blur: 10,
  },
  {
    className: 'bottom-[120px] right-0',
    size: 180,
    border: { width: 36, color: '#85E5FD' },
    blur: 18,
  },
  { className: 'bottom-[193px] right-[245px]', size: 30, color: 'white' },
  {
    className: 'bottom-[75px] right-[200px]',
    size: 18,
    color: 'white',
    blur: 6,
  },
];

export const BlurDotsCluster: React.FC = () => {
  return (
    <div className="pointer-events-none absolute bottom-[-20px] left-[153px] z-[-1] h-[656px] w-[836px]">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.className} rounded-full`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color ?? 'transparent',
            border: dot.border
              ? `${dot.border.width}px solid ${dot.border.color}`
              : undefined,
            filter: dot.blur !== undefined ? `blur(${dot.blur}px)` : undefined,
          }}
        />
      ))}
    </div>
  );
};
