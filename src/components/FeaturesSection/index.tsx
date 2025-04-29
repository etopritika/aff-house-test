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
      title: 'Space-quality Games',
      description:
        'Andromeda loves having fun and playing games. That’s why she wants you to get the best gaming experience at her intergalactic casino. She has spent days and nights looking for the best game creators, and now you can enjoy the best casino games that will take you to the moon and back.',
    },
    {
      icon: <IconStarBadge />,
      title: 'Cool Bonuses and Tournaments',
      description:
        'If you enjoy playing games, then you definitely like getting rewards. In her turn, Andromeda loves giving presents and bonuses to her fellow astronauts...',
    },
    {
      icon: <IconUserSupport />,
      title: 'Reliable Support 24/7',
      description:
        "Do you remember that famous help request: “Okay, Houston, we've had a problem here”? No problems are waiting for you until our Command Center is on air 24/7...",
    },
    {
      icon: <IconWalletFast />,
      title: 'Fast Payments',
      description:
        'When you’re in outer space, time flows differently. For this reason, Andromeda decided to ensure you get paid at the speed of light...',
    },
  ];

  return (
    <section>
      <h2>Our Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
