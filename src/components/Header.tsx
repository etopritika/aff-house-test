import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About us', to: '#' },
  { label: 'Commission', to: '#' },
  { label: 'Testimonials', to: '#' },
  { label: 'News', to: '#' },
  {
    label: (
      <abbr title="Frequently Asked Questions" className="uppercase">
        Faq
      </abbr>
    ),
    to: '#',
  },
  { label: 'Contacts', to: '#' },
];

export default function Header() {
  const commonStyles = 'text-base leading-none font-medium';
  return (
    <header className="bg-[url('/header-bg.webp')] bg-cover bg-top bg-no-repeat pb-[45px] pt-10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-2.5">
        <Link
          className="font-secondary text-[36px] font-black uppercase italic leading-none text-primary"
          to="/"
        >
          <span className="inline-block skew-x-[-10deg] bg-gradient-to-br from-[#9F24FF] to-[#541CAE] py-1 pl-2 pr-3.5">
            <span className="block skew-x-[10deg] text-[#72EBF9]">aff</span>
          </span>{' '}
          house
        </Link>
        <nav>
          <ul className="flex items-center gap-[30px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link className={commonStyles} to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-2.5 flex gap-1">
              <Link className={`px-[30px] py-2.5 ${commonStyles}`} to="#">
                Login
              </Link>
              <Link
                className={`rounded-[3px] border border-white px-[30px] py-2.5 ${commonStyles}`}
                to="#"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
