import React from 'react';

const dots = [
  { className: 'right-[216px] top-[79px]', size: 19, color: '#3083FF' },
  { className: 'right-[6px] top-[120px]', size: 22, color: '#72EBF9' },
  { className: 'bottom-0 left-[65px]', size: 48, color: 'white' },
  { className: 'bottom-[50px] right-[324px]', size: 26, color: 'white' },
  { className: 'bottom-[116px] left-[292px]', size: 14, color: 'white' },
  { className: 'bottom-0 right-[123px]', size: 15, color: '#72EBF9' },
];

type Props = {
  children: React.ReactNode;
};

export const CircleCardsBackground: React.FC<Props> = ({ children }) => {
  return (
    <div className="pointer-events-none absolute right-[240px] top-0 z-10 flex h-[701px] w-[701px] items-center justify-center">
      <div className="absolute z-10 h-full w-full rounded-full bg-[#72ebf94d]" />

      <div className="absolute bottom-[111px] right-[6px] z-0 h-[79px] w-[79px] rounded-full border-[21px] border-[#3083FF]" />

      <div className="absolute z-10 h-[579px] w-[579px] rounded-full bg-[#72EBF9]" />

      {dots.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.className} z-10 rounded-full`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
          }}
        />
      ))}

      {children}
    </div>
  );
};
