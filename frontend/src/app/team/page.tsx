import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, Phone, Camera, Briefcase, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Organizing Committee | PRISMTECH 2026',
  description: 'Meet the minds behind PRISMTECH. The IEEE KLH Student Branch organizing committee.',
};

const committee = [
  {
    role: 'Student General Chair',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch, Aziz Nagar',
    socials: {
      insta: '#',
      email: 'mailto:contact@example.com',
      whatsapp: 'https://wa.me/910000000000'
    }
  },
  {
    role: 'Vice Chair – Technical',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch',
    socials: {
      insta: '#',
      email: 'mailto:contact@example.com',
      whatsapp: 'https://wa.me/910000000000'
    }
  },
  {
    role: 'Vice Chair – Operations',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch',
    socials: {
      insta: '#',
      email: 'mailto:contact@example.com',
      whatsapp: 'https://wa.me/910000000000'
    }
  },
  {
    role: 'Branch Counselor',
    name: 'Dr. Sai Sudha Gadde',
    org: 'IEEE KLH SB Aziz Nagar',
    socials: {
      linkedin: '#',
      email: 'mailto:contact@example.com',
    }
  }
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">The People</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ieee-blue-light)] to-[var(--color-prism-cyan)] pb-2 px-1">Committee</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
            Meet the minds behind PRISMTECH 2026. Reach out to our team via Email, Instagram, or WhatsApp for any inquiries.
          </p>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((member, idx) => (
              <Card key={idx} variant="glass" className="hover:border-white/20 transition-colors text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-surface-2)] mb-6 flex items-center justify-center overflow-hidden border border-white/10">
                    <span className="text-2xl text-white/40 font-display">{member.name.charAt(0)}</span>
                  </div>
                  <Badge variant="secondary" className="mb-3 mx-auto w-fit block">{member.role}</Badge>
                  <h3 className="font-display font-bold text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6">{member.org}</p>
                  
                  <div className="flex items-center justify-center gap-3">
                    {member.socials.insta && (
                      <a href={member.socials.insta} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-prism-cyan)]/20 hover:border-[var(--color-prism-cyan)] hover:text-[var(--color-prism-cyan)] transition-all">
                        <Camera className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-prism-violet)]/20 hover:border-[var(--color-prism-violet)] hover:text-[var(--color-prism-violet)] transition-all">
                        <Briefcase className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.whatsapp && (
                      <Link href={member.socials.whatsapp} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-colors">
                        <Phone className="w-4 h-4" />
                      </Link>
                    )}
                    {member.socials.email && (
                      <Link href={member.socials.email} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-[var(--color-prism-gold)] transition-colors">
                        <Mail className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
