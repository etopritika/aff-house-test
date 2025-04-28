import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[url('/header-bg.webp')] bg-top bg-contain bg-no-repeat">
      <Link to="/">
        <span>aff</span> house
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Commission</Link>
          </li>
          <li>
            <Link to="#">Testimonials</Link>
          </li>
          <li>
            <Link to="#">News</Link>
          </li>
          <li>
            <Link to="#">
              <abbr title="Frequently Asked Questions">Faq</abbr>
            </Link>
          </li>
          <li>
            <Link to="#">Contacts</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li>
            <Link to="#">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
