// src/pages/NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import NewsContent from '../components/NewsContent';
import SentimentAnalysis from '../components/SentimentAnalysis';
import EmotionAnalysis from '../components/EmotionAnalysis';

function NewsDetail() {
  // Ambil param :id
  const { id } = useParams();

  // Contoh data dummy, sebaiknya diambil dari API atau state global
  const dummyNews = [
    {
      id: 1,
      title: 'Berita Pertama',
      image: 'https://source.unsplash.com/random/800x400/?news1',
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed euismod, mauris vitae finibus laoreet, nibh felis commodo sapien...'],
    },
    {
      id: 2,
      title: 'Berita Kedua',
      image: 'https://source.unsplash.com/random/800x400/?news2',
      paragraphs: ['Vivamus tincidunt, quam eget posuere hendrerit...', 'Nulla ut nulla quis neque fermentum ullamcorper...'],
    },
    {
      id: 3,
      title: 'Berita Ketiga',
      image: 'https://source.unsplash.com/random/800x400/?news3',
      paragraphs: ['Phasellus interdum risus vel quam fermentum...', 'Vivamus tincidunt, quam eget posuere hendrerit...'],
    },
  ];

  // Temukan berita yang sesuai dengan id
  const newsId = parseInt(id, 10);
  const selectedNews = dummyNews.find((item) => item.id === newsId);

  // Jika berita tidak ditemukan, kita bisa tampilkan pesan error
  if (!selectedNews) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-700">Berita dengan ID {id} tidak ditemukan.</h1>
      </div>
    );
  }

  // Data breadcrumb
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Category', href: '/category' },
    { name: selectedNews.title, href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HEADER / BREADCRUMB */}
      <header className="bg-pink-300 px-4 py-3">
        <Breadcrumb items={breadcrumbItems} />
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto p-4">
        {/* DETAIL BERITA */}
        <NewsContent title={selectedNews.title} image={selectedNews.image} paragraphs={selectedNews.paragraphs} />

        {/* ANALISIS SENTIMEN */}
        <SentimentAnalysis chartPlaceholder="Chart Sentimen" description="Mayoritas komentar publik cenderung positif..." />

        {/* ANALISIS EMOSI */}
        <EmotionAnalysis chartPlaceholder="Chart Emosi" description="Emosi senang dan tertarik mendominasi..." />
      </main>
    </div>
  );
}

export default NewsDetail;
