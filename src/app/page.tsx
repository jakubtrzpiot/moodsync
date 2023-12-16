import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-20 mb-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Mood Sync App</h1>
      <p className="text-lg mb-8">
        Track your mood, discover playlists, and find inspiration for a balanced
        life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Discover Your Mood</h2>
          <p>
            Use our mood tracker to log your daily emotions and gain insights
            into your wellbeing.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Personalized Playlists</h2>
          <p>
            Explore curated playlists tailored to your mood and preferences,
            designed to enhance your daily activities.
          </p>
        </div>
      </div>
      <Link
        href="/user"
        className="bg-primary hover:bg-blue-700 text-text font-bold py-2 px-4 rounded mt-8"
      >
        Go to User Page
      </Link>
      <Link href="/music" className="mt-4 text-primary hover:underline">
        Explore Music
      </Link>
    </main>
  );
};

export default Home;
