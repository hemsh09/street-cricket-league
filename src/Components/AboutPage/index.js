import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>About - Street Cricket League</title>
      </Head>
      <h1 className="text-3xl font-bold pt-8 mb-4">
        About Street Cricket League
      </h1>
      <p className="text-lg mb-4">
        Street Cricket League is a community-driven initiative to promote
        cricket at the grassroots level. Our mission is to provide a platform
        for young cricketers to showcase their talent and compete in a fun and
        competitive environment.
      </p>
      <p className="text-lg mb-4">
        Our league is open to players of all ages and skill levels, and we
        welcome anyone who shares our passion for the game. Whether you&apos;re
        a seasoned pro or just starting out, there&apos;s a place for you in our
        league.
      </p>
      <p className="text-lg mb-4">
        We believe that cricket is more than just a game - it&apos;s a way of
        life. By bringing together people from all walks of life, we hope to
        create a sense of community and camaraderie that extends beyond the
        cricket field.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
      <ul className="list-disc pl-4 mb-4">
        <li className="text-lg">
          Inclusivity - We welcome players of all backgrounds and skill levels.
        </li>
        <li className="text-lg">
          Fair Play - We believe in playing the game with integrity and respect
          for our opponents.
        </li>
        <li className="text-lg">
          Community - We aim to create a sense of belonging and togetherness
          among our players and supporters.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p className="text-lg mb-4">
        Whether you&apos;re a player, a fan, or just interested in learning more
        about our league, we would love to hear from you. Get in touch with us
        to find out how you can get involved in the Street Cricket League.
      </p>
      <Link
        href="/contact"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default About;
