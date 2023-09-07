import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import pic from './assets/pic.jpg';
import d1 from './assets/d1.jpg';
import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg';
import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg';
import d6 from './assets/d6.jpg';
import ImageCarousel from './imageCarousel';

function App() {
  return (
    <div>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between text-white">
          <h1 className="text-xl pl-5">Omuya G</h1>
          <ul className="flex items-center pr-5">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://instagram.com/omuyag.art?igshid=OGQ5ZDc2ODk2ZA=="
              >
                Get Your Potrait
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center  pb-10">
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
            <img src={pic} layout="fill" objectFit="cover" alt="avatar" />
          </div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-200 md:text-6xl">
            Omuya Godwin
          </h2>
          <h3 className="text-2xl py-2 text-white md:text-3xl">Artist</h3>
          <p className="text-md py-5 leading-8   text-white max-w-xl mx-auto md:text-xl">
            Hi there! Welcome to my portrait gallery. Scroll down to explore.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://x.com/omuya_?s=21&t=8qVNJ9_XZSJwyHOeEYyggQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>

            <a
              href="https://instagram.com/omuyag.art?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
          <a
            href="https://templecodes.netlify.app/project"
            className="text-sm py-5 leading-8 dark:text-gray-500 max-w-xl mx-auto md:text-md no-underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            createdbyTemple.
          </a>
        </div>
      </section>

      <section className="py-10 pb-10">
        <div>
          <h3 className="text-3xl py-1  text-white pl-8">
            Portrait Drawing Service
          </h3>
          <p className="text-md py-2 leading-8 pl-8 text-white">
            My services include custom hand-drawn portraits and digital
            illustrations. Let's bring your ideas to life in beautiful drawings.
          </p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <img className="rounded-lg object-cover" src={d1} alt="afro" />
            <img
              className="rounded-lg object-cover"
              src={d4}
              alt="bald chick"
            />
            <img className="rounded-lg object-cover" src={d3} alt="the idol" />
            <img className="rounded-lg object-cover" src={d5} alt="drizzy " />
            <img className="rounded-lg object-cover" src={d2} alt="mb" />
            <img className="rounded-lg object-cover" src={d6} alt="alcia" />

            <ImageCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
