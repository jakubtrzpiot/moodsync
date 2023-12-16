'use client';
import { useState } from 'react';
import Image from 'next/image';

import { Search } from '@components/search';
import { Vinyl } from '@/components/vinyl';
import { Tile } from '@/components/tile';

const playlists = [
  {
    label: 'Chill',
    image: '/assets/chill.jpg',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6?si=8e9e9e9e9e9e9e9e',
  },
  {
    label: 'Focus',
    image: '/assets/focus.jpg',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us?si=8e9e9e9e9e9e9e9e',
  },
  {
    label: 'Party',
    image: '/assets/party.jpg',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=8e9e9e9e9e9e9e9e',
  },
  {
    label: 'Sleep',
    image: '/assets/sleep.jpg',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp?si=8e9e9e9e9e9e9e9e',
  },
  {
    label: 'Workout',
    image: '/assets/workout.jpg',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh?si=8e9e9e9e9e9e9e9e',
  },
];

const Home = () => {
  const [view, setView] = useState('tile');
  return (
    <main className="px-1.5 pt-6">
      <div className="flex justify-between">
        <h1 className="font-extralight text-5xl px-3">Playlists</h1>
        <button
          onClick={() => setView(view => (view == 'tile' ? 'vinyl' : 'tile'))}
          className="active:scale-95 px-4"
        >
          <Image src="/assets/view.svg" width={24} height={24} alt="view" />
        </button>
      </div>
      <Search />
      <div className="flex flex-wrap gap-3.5 justify-center pb-8">
        {playlists.map((playlist, index) =>
          view == 'tile' ? (
            <Tile
              image={playlist.image}
              label={playlist.label}
              link={playlist.link}
              key={index}
            />
          ) : (
            <Vinyl
              image={playlist.image}
              label={playlist.label}
              link={playlist.link}
              key={index}
            />
          ),
        )}
      </div>
    </main>
  );
};

export default Home;
