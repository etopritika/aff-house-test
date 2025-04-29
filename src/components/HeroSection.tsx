import { Link } from 'react-router-dom';
import { CircleCardsBackground } from './CircleCardsBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-[757px] bg-[url('/section-bg.webp')] bg-cover bg-top bg-no-repeat pb-[193px] pt-[141px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-2.5">
        <div className="flex flex-col">
          <h1 className="mb-[50px] text-[56px] font-bold leading-none text-white [text-shadow:0px_2px_2px_rgba(64,47,255,0.3)]">
            Come to our house <br /> and get revenue share <br /> up to 50% for
            life
          </h1>
          <p className="text-lg font-normal leading-[1.35] text-white">
            Individual approach and generous offers for each affiliate
          </p>
          <Link
            className="mt-[88px] max-w-[250px] text-nowrap rounded-[3px] bg-[#8258FF] px-[90px] pb-[18px] pt-[13px] text-xl font-medium leading-none"
            to="#"
          >
            Sign up
          </Link>
        </div>
      </div>
      <CircleCardsBackground>
        <img
          src="/cards.png"
          alt="cards"
          width={604}
          height={498}
          className="relative z-20"
        />
      </CircleCardsBackground>
    </section>
  );
}
