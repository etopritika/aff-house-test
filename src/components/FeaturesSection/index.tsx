import {
  IconShieldCheck,
  IconStarBadge,
  IconUserSupport,
  IconWalletFast,
} from './features-icons';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <IconShieldCheck />,
      className: 'bg-[#9524F5] shadow-[0_8px_20px_rgba(158,62,240,0.4)]',
      title: 'Space-quality Games',
      description:
        'Andromeda loves having fun and playing games. That’s why she wants you to get the best gaming experience at her intergalactic casino. She has spent days and nights looking for the best game creators, and now you can enjoy the best casino games that will take you to the moon and back.',
    },
    {
      icon: <IconStarBadge />,
      className: 'bg-[#3083FF] shadow-[0_8px_20px_rgba(48,131,255,0.4)]',
      title: 'Cool Bonuses and Tournaments',
      description:
        'If you enjoy playing games, then you definitely like getting rewards. In her turn, Andromeda loves giving presents and bonuses to her fellow astronauts...',
    },
    {
      icon: <IconUserSupport />,
      className: 'bg-[#51D2F2] shadow-[0_8px_20px_rgba(94,211,224,0.4)]',
      title: 'Reliable Support 24/7',
      description:
        "Do you remember that famous help request: “Okay, Houston, we've had a problem here”? No problems are waiting for you until our Command Center is on air 24/7...",
    },
    {
      icon: <IconWalletFast />,
      className: 'bg-[#C037D7] shadow-[0_8px_20px_rgba(188,67,208,0.4)]',
      title: 'Fast Payments',
      description:
        'When you’re in outer space, time flows differently. For this reason, Andromeda decided to ensure you get paid at the speed of light...',
    },
  ];

  return (
    <section className="relative z-20 bg-white pb-[136px] pt-[200px]">
      <div className="mx-auto max-w-[1200px] px-2.5">
        <h2 className="sr-only">Our Features</h2>
        <ul className="grid grid-cols-2 gap-52">
          {features.map((feature, index) => (
            <li key={index}>
              <div
                className={`${feature.className} inline-block rounded-[3px] p-4`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-5 mt-7 text-2xl font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="text-base font-normal">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
