import { PrismaClient, Role, Track, TeamStatus, RoundStatus, SponsorTier, Society, FAQCategory, ContentType, AnnouncementType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding IEEE PRISMTECH database...');

  // ─── Event Settings ───────────────────────────────────────────────────────
  const settings = [
    { key: 'event_name', value: 'PRISMTECH 2026' },
    { key: 'event_tagline', value: 'A 24-Hour Sprint across the Tech Spectrum' },
    { key: 'event_start_date', value: '2026-09-26T08:15:00+05:30' },
    { key: 'event_end_date', value: '2026-09-27T10:45:00+05:30' },
    { key: 'registration_open', value: 'true' },
    { key: 'max_teams', value: '35' },
    { key: 'team_min_size', value: '2' },
    { key: 'team_max_size', value: '4' },
    { key: 'venue_name', value: 'KL University (KLH) Hyderabad Off-Campus' },
    { key: 'venue_address', value: 'R.V.S Nagar, Moinabad Road, near TS Police Academy, Aziz Nagar, Hyderabad - 500075, Telangana' },
    { key: 'venue_maps_url', value: 'https://maps.google.com/maps?q=KL+University+KLH+Hyderabad+Aziz+Nagar' },
    { key: 'contact_email', value: 'ieeeaziznagarklh@gmail.com' },
    { key: 'contact_phone', value: '+91 97047 10888' },
    { key: 'instagram_handle', value: 'ieee_prismtech' },
    { key: 'linkedin_url', value: 'https://www.linkedin.com/company/ieee-prismtech-klh' },
  ];

  for (const setting of settings) {
    await prisma.eventSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log('✅ Event settings seeded');

  // ─── Content Blocks ───────────────────────────────────────────────────────
  const contentBlocks = [
    {
      key: 'hero_headline',
      value: 'PRISMTECH 2026',
      type: ContentType.TEXT,
    },
    {
      key: 'hero_tagline',
      value: 'A 24-Hour Sprint across the Tech Spectrum',
      type: ContentType.TEXT,
    },
    {
      key: 'hero_description',
      value: 'Where hardware meets software meets social impact. A multidisciplinary hackathon where light, logic, and equity converge.',
      type: ContentType.TEXT,
    },
    {
      key: 'about_text',
      value: 'PRISMTECH is organized by the Aziz Nagar KL IEEE Student Branch in collaboration with IEEE Photonics Society, IEEE Computer Society, and IEEE Women in Engineering Affinity Group. Open to all engineering students across colleges.',
      type: ContentType.MARKDOWN,
    },
    {
      key: 'prizes_note',
      value: 'PRISMTECH celebrates innovation, not just prizes. Winners receive recognition, certificates, and opportunities that last a lifetime.',
      type: ContentType.TEXT,
    },
    {
      key: 'optic_stream_description',
      value: 'The Optic Stream challenges teams to push the boundaries of photonics and hardware. Build with light — LEDs, LDRs, Arduinos, and beyond.',
      type: ContentType.MARKDOWN,
    },
    {
      key: 'neural_stream_description',
      value: 'The Neural Stream is where software meets intelligence. Build AI/ML solutions, web apps, and systems that think.',
      type: ContentType.MARKDOWN,
    },
    {
      key: 'social_stream_description',
      value: 'The Social Stream challenges teams to engineer for equity. Build technology that creates real social impact for communities.',
      type: ContentType.MARKDOWN,
    },
  ];

  for (const block of contentBlocks) {
    await prisma.contentBlock.upsert({
      where: { key: block.key },
      update: { value: block.value },
      create: block,
    });
  }
  console.log('✅ Content blocks seeded');

  // ─── FAQs ─────────────────────────────────────────────────────────────────
  const faqs = [
    {
      question: 'Who can participate in PRISMTECH?',
      answer: 'PRISMTECH is open to all engineering students across colleges. You need to bring a valid college ID for verification at check-in.',
      category: FAQCategory.ELIGIBILITY,
      displayOrder: 1,
    },
    {
      question: 'How many members can be in a team?',
      answer: 'Teams can have 2 to 4 members. You can also register solo and find teammates through our Team Formation board.',
      category: FAQCategory.REGISTRATION,
      displayOrder: 2,
    },
    {
      question: 'What are the three tracks?',
      answer: 'The Optic Stream (IEEE Photonics Society — Hardware/Photonics), The Neural Stream (IEEE Computer Society — Software/AI), and The Social Stream (IEEE WIE — Social Impact).',
      category: FAQCategory.ELIGIBILITY,
      displayOrder: 3,
    },
    {
      question: 'When will problem statements be released?',
      answer: 'Problem statements for all three tracks will be released at the Opening Ceremony on September 26, 2026 at 9:00 AM.',
      category: FAQCategory.EVENT_DAY,
      displayOrder: 4,
    },
    {
      question: 'What should we bring to the hackathon?',
      answer: 'Bring your laptop, charger, college ID, and enthusiasm. For the Optic Stream, basic hardware components will be provided. Power sockets (at least 2 per team) and high-speed Wi-Fi will be available.',
      category: FAQCategory.EVENT_DAY,
      displayOrder: 5,
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Please check the registration page for current fee information.',
      category: FAQCategory.REGISTRATION,
      displayOrder: 6,
    },
    {
      question: 'What hardware is provided for the Optic Stream?',
      answer: 'The Hardware Lab provides basic resistors, LEDs, Arduinos, and LDRs for the Photonics track.',
      category: FAQCategory.TECHNICAL,
      displayOrder: 7,
    },
    {
      question: 'What happens if our team is disqualified in Round 1?',
      answer: 'Disqualified teams are still part of PRISMTECH! You can attend The Spectrum Panel at 1:30 PM, visit our LinkedIn Station for professional branding guidance, and get your CV reviewed at the Tech CV Clinic by IEEE senior members.',
      category: FAQCategory.EVENT_DAY,
      displayOrder: 8,
    },
    {
      question: 'How are teams judged?',
      answer: 'Judging emphasizes fair innovation and evaluation. Criteria focus on creativity, technical execution, feasibility, and presentation. A senior jury conducts desk-side scrutiny in Round 1 and deeper technical reviews in subsequent rounds.',
      category: FAQCategory.TECHNICAL,
      displayOrder: 9,
    },
    {
      question: 'Can teams be from multiple colleges?',
      answer: 'Yes! Multi-college teams are allowed and encouraged. PRISMTECH celebrates collaboration across institutions.',
      category: FAQCategory.ELIGIBILITY,
      displayOrder: 10,
    },
    {
      question: 'Is food provided?',
      answer: 'Yes. A Networking Lunch is provided on Day 1, Dinner on Day 1 evening, and coffee/tea throughout the night during the Graveyard Shift.',
      category: FAQCategory.EVENT_DAY,
      displayOrder: 11,
    },
    {
      question: 'How do I submit my project?',
      answer: 'All code must be pushed to a GitHub repository. Hardware kits are powered down at 9:00 AM on Day 2. You can submit your GitHub repo link and a demo video through your participant dashboard.',
      category: FAQCategory.TECHNICAL,
      displayOrder: 12,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq }).catch(() => {/* skip if already exists */});
  }
  console.log('✅ FAQs seeded');

  // ─── Rounds ───────────────────────────────────────────────────────────────
  const rounds = [
    {
      roundNumber: 1,
      name: 'Round 1 — The Blueprint Phase',
      description: 'Teams build their initial architecture. Judges roam for desk-side scrutiny. Expected: 75 teams advance.',
      teamsExpectedIn: 105,
      teamsExpectedOut: 75,
      status: RoundStatus.PENDING,
    },
    {
      roundNumber: 2,
      name: 'Round 2 — Technical Deep Dive',
      description: 'Qualified teams present to a senior jury. Expected: 45 teams advance.',
      teamsExpectedIn: 75,
      teamsExpectedOut: 45,
      status: RoundStatus.PENDING,
    },
    {
      roundNumber: 3,
      name: 'Round 3 — Overnight Build',
      description: 'Qualified teams present updated work to the jury.',
      teamsExpectedIn: 45,
      teamsExpectedOut: null,
      status: RoundStatus.PENDING,
    },
    {
      roundNumber: 4,
      name: 'Round 4 — Final Selection',
      description: 'Top teams compete for a spot in the Finalists Circle. Expected: 4 teams advance to Final Grand Pitch.',
      teamsExpectedIn: null,
      teamsExpectedOut: 4,
      status: RoundStatus.PENDING,
    },
  ];

  for (const round of rounds) {
    await prisma.round.create({ data: round }).catch(() => {});
  }
  console.log('✅ Rounds seeded');

  // ─── Admin User ──────────────────────────────────────────────────────────
  const adminPassword = await bcrypt.hash('Admin@Prismtech2026', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'ieeeaziznagarklh@gmail.com' },
    update: {},
    create: {
      email: 'ieeeaziznagarklh@gmail.com',
      passwordHash: adminPassword,
      role: Role.ADMIN,
      name: 'PRISMTECH Admin',
      emailVerified: true,
    },
  });
  console.log('✅ Admin user seeded');

  // ─── Branch Counselor (Organizer Profile) ─────────────────────────────────
  const counselorPassword = await bcrypt.hash('Organizer@Prismtech2026', 12);
  const counselor = await prisma.user.upsert({
    where: { email: 'saisudha.gadde@klh.edu.in' },
    update: {},
    create: {
      email: 'saisudha.gadde@klh.edu.in',
      passwordHash: counselorPassword,
      role: Role.ORGANIZER,
      name: 'Dr. Sai Sudha Gadde',
      bio: 'Branch Counselor, IEEE KLH SB Aziz Nagar. Faculty Advisor overseeing the PRISMTECH Hackathon and guiding IEEE societies at KL University Hyderabad.',
      college: 'KL University (KLH) Hyderabad',
      emailVerified: true,
    },
  });

  await prisma.organizerProfile.upsert({
    where: { userId: counselor.id },
    update: {},
    create: {
      userId: counselor.id,
      title: 'Branch Counselor',
      displayOrder: 1,
      isFeatured: true,
      society: Society.STUDENT_BRANCH,
    },
  });
  console.log('✅ Organizer profiles seeded');

  // ─── Sponsors (Placeholder) ───────────────────────────────────────────────
  const sponsors = [
    {
      name: 'To Be Announced',
      tier: SponsorTier.TITLE,
      displayOrder: 1,
      isActive: false,
    },
  ];

  for (const sponsor of sponsors) {
    await prisma.sponsor.create({ data: sponsor }).catch(() => {});
  }
  console.log('✅ Sponsors seeded');

  // ─── Welcome Announcement ─────────────────────────────────────────────────
  await prisma.announcement.create({
    data: {
      title: '🎉 Welcome to PRISMTECH 2026!',
      body: 'Registration is now open. Form your team, pick your track, and get ready for 24 hours of building, learning, and innovation. See you on September 26!',
      type: AnnouncementType.INFO,
      publishedById: admin.id,
    },
  }).catch(() => {});
  console.log('✅ Welcome announcement seeded');

  console.log('\n🚀 Database seeded successfully!');
  console.log('Admin credentials: ieeeaziznagarklh@gmail.com / Admin@Prismtech2026');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
