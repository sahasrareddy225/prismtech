import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Image as ImageIcon, Video, PlaySquare, Camera } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery & Media | PRISMTECH 2026',
  description: 'Photos, videos, and media coverage from PRISMTECH.',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5 text-center flex flex-col items-center">
          <Badge variant="outline" className="mb-6">Memories</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-gold)] to-[var(--color-prism-cyan)] pb-2 px-1">Gallery</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Photos, videos, social updates, and media coverage from the PRISMTECH hackathon.
          </p>
        </div>

        <div className="container py-16 flex flex-col items-center justify-center min-h-[40vh]">
          <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative">
            <Camera className="w-10 h-10 text-[var(--color-text-muted)]" />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--color-prism-cyan)] animate-ping" />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--color-prism-cyan)]" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-3">Gallery will open on Day 1</h2>
          <p className="text-[var(--color-text-secondary)] text-center max-w-md mb-8">
            Check back during the event for live updates, team photos, and the closing ceremony after-movie.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-white/80 transition-colors">Instagram</a>
            <a href="#" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-white/80 transition-colors">Media Kit</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
