import React, { useState } from 'react';
import Card from '../components/Card';
import ImgCoba from '../assets/coba.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Data dummy "Popular"
  const popularNews = [
    {
      id: 1,
      title: 'Popular News 1',
      image: ImgCoba,
      label: 'Hot',
    },
    {
      id: 2,
      title: 'Popular News 2',
      image: ImgCoba,
      label: 'Top',
    },
    {
      id: 3,
      title: 'Popular News 3',
      image: ImgCoba,
      label: 'New',
    },
  ];

  // Data dummy "Newest"
  const newestNews = [
    {
      id: 4,
      title: 'Newest News 1',
      image: ImgCoba,
      label: 'New',
    },
    {
      id: 5,
      title: 'Newest News 2',
      image: ImgCoba,
    },
    {
      id: 6,
      title: 'Newest News 3',
      image: ImgCoba,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* NAVBAR */}
      <header className="bg-pink-300 px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Sentify</h1>
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input type="text" placeholder="Intend search text" className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none" />
          <button className="absolute right-3 top-2 text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.6 3a7.5 7.5 0 016.05 13.65z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex gap-4 px-4 py-2 bg-gray-100">
        {['All', 'Politics', 'Tech', 'Entertainment', 'Sports'].map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1 bg-white rounded-full shadow text-gray-700 hover:bg-gray-200 transition ${selectedCategory === cat ? 'bg-pink-200' : ''}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <main className="mt-4 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular</h2>
          <div className="flex gap-4 overflow-x-auto">
            {popularNews.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <Card
                  image={item.image}
                  title={item.title}
                  label={item.label}
                  // Kita akan menempatkan tombol "Read More" di dalam Card
                  // atau di sini, terserah preferensi
                >
                  {/* Tombol "Read More" menggunakan Link ke /news/:id */}
                  <Link to={`/news/${item.id}`}>
                    <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">Read More</button>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Newest</h2>
          <div className="flex gap-4 overflow-x-auto">
            {newestNews.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <Card
                  image={item.image}
                  title={item.title}
                  label={item.label}
                  // Kita akan menempatkan tombol "Read More" di dalam Card
                  // atau di sini, terserah preferensi
                >
                  {/* Tombol "Read More" menggunakan Link ke /news/:id */}
                  <Link to={`/news/${item.id}`}>
                    <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">Read More</button>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
