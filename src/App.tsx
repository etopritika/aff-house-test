import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[url('/section-bg.webp')] bg-cover bg-top bg-no-repeat">
          <h1>Come to our house and get revenue share up to 50% for life</h1>
          <p>Individual approach and generous offers for each affiliate</p>
          <Link to="#">Sign up</Link>
          <img src="/cards.png" alt="cards" />
        </section>
        <section>
          <h2>Our Features</h2>
          <ul>
            <li>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.9651 48.6135C26.9651 48.6135 44.2271 43.3867 44.2271 28.9777C44.2271 14.5665 44.8526 13.4415 43.4689 12.0555C42.0829 10.6695 29.2286 6.1875 26.9651 6.1875C24.7016 6.1875 11.8474 10.6695 10.4636 12.0555C9.07762 13.4415 9.70312 14.5665 9.70312 28.9777C9.70312 43.3867 26.9651 48.6135 26.9651 48.6135Z"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.1183 26.7178L25.3753 30.9815L34.1458 22.2065"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Space-quality Games</h3>
              <p>
                Andromeda loves having fun and playing games. That’s why she
                wants you to get the best gaming experience at her intergalactic
                casino. She has spent days and nights looking for the best game
                creators, and now you can enjoy the best casino games that will
                take you to the moon and back.
              </p>
            </li>
            <li>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.4846 9.39826L33.5963 17.6124C33.9992 18.4188 34.777 18.978 35.679 19.1074L44.877 20.4314C47.1496 20.7595 48.0539 23.5137 46.4092 25.0919L39.7579 31.483C39.1043 32.1115 38.8067 33.0149 38.9613 33.9022L40.531 42.9251C40.9176 45.1571 38.542 46.86 36.5107 45.8041L28.2897 41.541C27.4838 41.1228 26.5185 41.1228 25.7103 41.541L17.4893 45.8041C15.458 46.86 13.0824 45.1571 13.4713 42.9251L15.0387 33.9022C15.1933 33.0149 14.8957 32.1115 14.2421 31.483L7.59078 25.0919C5.94611 23.5137 6.85044 20.7595 9.12299 20.4314L18.321 19.1074C19.223 18.978 20.0031 18.4188 20.4061 17.6124L24.5154 9.39826C25.5322 7.36725 28.4678 7.36725 29.4846 9.39826Z"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Cool Bonuses and Tournaments</h3>
              <p>
                If you enjoy playing games, then you definitely like getting
                rewards. In her turn, Andromeda loves giving presents and
                bonuses to her fellow astronauts. Whenever you get to the space
                base, another cool bonus will wait for you there. And what a
                space life can be without good old tournaments. On a regular
                basis, you can compete with your opponents to get the title of
                the best warrior in the galaxy.
              </p>
            </li>
            <li>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.9657 34.5288C18.2636 34.5288 10.8322 35.8445 10.8322 41.1138C10.8322 46.3831 18.2164 47.746 26.9657 47.746C35.6679 47.746 43.0972 46.4281 43.0972 41.161C43.0972 35.8938 35.715 34.5288 26.9657 34.5288Z"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.9657 27.0131C32.6764 27.0131 37.305 22.3824 37.305 16.6717C37.305 10.961 32.6764 6.3324 26.9657 6.3324C21.255 6.3324 16.6243 10.961 16.6243 16.6717C16.605 22.3631 21.2036 26.9938 26.8929 27.0131H26.9657Z"
                  stroke="white"
                  stroke-width="3.81818"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Reliable Support 24/7</h3>
              <p>
                Do you remember that famous help request: “Okay, Houston, we've
                had a problem here”? No problems are waiting for you until our
                Command Center is on air 24/7. You’re welcome to contact out
                space support managers day and night, whatever happens.
              </p>
            </li>
            <li>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.6876 32.3904H39.5789C36.2344 32.3883 33.5235 29.6795 33.5215 26.335C33.5215 22.9905 36.2344 20.2817 39.5789 20.2797H48.6876"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.6092 26.1967H39.9079"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4322 6.75H36.88C43.4008 6.75 48.6872 12.0364 48.6872 18.5572V34.7056C48.6872 41.2264 43.4008 46.5128 36.88 46.5128H17.4322C10.9114 46.5128 5.625 41.2264 5.625 34.7056V18.5572C5.625 12.0364 10.9114 6.75 17.4322 6.75Z"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8301 16.9608H27.9777"
                  stroke="white"
                  stroke-width="4.00909"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Fast Payments</h3>
              <p>
                When you’re in outer space, time flows the other way than it
                does on Earth. For this reason, Andromeda decided to care for
                you to get paid in a speed of light. Choose the needed payment
                system and don’t forget to think over a way to spend your
                winnings, as you’ll get them really fast.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
