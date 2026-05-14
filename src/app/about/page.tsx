'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CtaSection from '@/components/home/CtaSection'

const approachCards = [
  { num: '01', title: 'Discovery before everything', body: 'Every engagement begins with understanding your team\'s specific deal environment, buyer personas, and competitive context. Coaching is never generic.' },
  { num: '02', title: 'Application over lecture', body: 'More than 70% of every session is application and discussion on live deals. Theory without practice degrades within weeks. Application under real stakes sticks.' },
  { num: '03', title: 'Cross-functional by design', body: 'AEs and SEs are coached together wherever possible. A shared framework eliminates the friction that costs deals at handoff points.' },
  { num: '04', title: 'The buyer\'s decision is the goal', body: 'Everything in my system points toward one outcome: a buyer who can confidently justify, align around, and commit to a decision.' },
  { num: '05', title: 'Leaders are part of the work', body: 'CROs and VPs are not passengers in an engagement. Their visibility into deal quality is what makes forecast improvements durable.' },
  { num: '06', title: 'Depth over volume', body: 'I work with a limited number of clients at any given time. That constraint is deliberate — it is the only way to deliver the quality of engagement I stand behind.' },
]

const perspectives = [
  { quote: 'Your job is not to sell software.', body: 'It is to enable decision confidence. Buyers are not stuck on price or product. They are stuck on the risk of being wrong. The seller\'s job is to reduce that risk systematically.' },
  { quote: 'Value is not what your product does.', body: 'Value is what a buying group can align on, defend internally, and commit to. Until that alignment exists, your product\'s capability is irrelevant to the decision.' },
  { quote: 'Discovery is not qualification.', body: 'Most teams use discovery to qualify opportunities. The best teams use it to build the buyer\'s business case from the inside out — before a demo is ever built.' },
  { quote: 'Demos should be about decisions.', body: 'A demo that impresses but does not advance a decision is a performance, not a tool. Every demonstration should be structured around the stakeholders who need to say yes.' },
]

const testimonials = [
  { pullquote: 'He demonstrates his own principles in every session', body: 'Instead of traditional lectures, Nikhil demonstrates value-based selling through value-based teaching. Real life situations, live deal guidance, brainstorming exercises and constant reinforcement are the norm. I\'d urge anyone involved in sales to have a conversation with Nikhil.', name: 'Gavin Thomas', role: 'Manager, Presales SEA', company: 'Locus' },
  { pullquote: 'Complex concepts feel immediately actionable', body: 'His ability to connect strategic themes like value discovery with the real, day-to-day challenges of our sales teams across regions was especially valuable. What stood out most was how quickly he earned the group\'s attention and respect.', name: 'Robert Latas', role: 'Managing Director', company: 'Thinkproject Poland' },
  { pullquote: 'A unique ability to reframe negotiation as a value conversation', body: 'He brings clarity, structure, and a deep understanding of how to align with what truly matters to the customer. A great session, and an even better perspective on how negotiation should actually work in enterprise deals.', name: 'Guru Vaidya', role: 'Head of APAC DMe Field Solution Consulting', company: 'Adobe' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — ink */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-ink)' }} aria-labelledby="about-heading">
        <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(153,51,47,0.07) 0%, transparent 68%)' }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-16 relative z-10">
          <div className="about-intro-content flex flex-col">
            <span className="inline-block self-start px-3 py-1 rounded-full text-[0.7rem] tracking-[0.18em] uppercase font-medium mb-6" style={{ color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Hi, I'm Nikhil
            </span>
            <h1 className="font-display font-medium italic text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)', lineHeight: 1.12 }}>
              <em className="not-italic" style={{ color: 'var(--color-sage-mid)' }}>I have walked in<br />your team's shoes.</em>
            </h1>
            <p className="font-light mb-2" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, maxWidth: 520 }}>
              As an individual contributor and as a first-line Solutions Engineering and Sales Manager, I faced the same patterns your teams face today.
            </p>
            <p className="font-light mb-2" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>Strong products. Smart people.</p>
            <p className="font-light mb-9" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>Inconsistent execution and fragile forecasts.</p>
            <Link href="#contact" className="self-start inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 rounded-sm transition-colors" style={{ background: 'var(--color-red)', color: '#fff' }}>
              Schedule a Strategy Session
            </Link>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <div className="relative w-[320px] h-[400px]">
              <div className="absolute rounded-sm pointer-events-none z-0" style={{ top: 18, left: 18, right: -18, bottom: -18, border: '1px solid rgba(153,51,47,0.3)' }} aria-hidden="true" />
              <Image src="/images/nikhilsarma.jpg" alt="Nikhil Sarma, GTM Coach" fill className="object-cover object-center rounded-sm relative z-10" priority />
            </div>
          </div>
        </div>
        <style jsx>{`
          .about-intro-content > * { opacity: 0; animation: fadeUp 0.7s ease forwards; }
          .about-intro-content > *:nth-child(1) { animation-delay: 0.1s; }
          .about-intro-content > *:nth-child(2) { animation-delay: 0.25s; }
          .about-intro-content > *:nth-child(3) { animation-delay: 0.4s; }
          .about-intro-content > *:nth-child(4) { animation-delay: 0.5s; }
          .about-intro-content > *:nth-child(5) { animation-delay: 0.6s; }
          .about-intro-content > *:nth-child(6) { animation-delay: 0.7s; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* Background — white */}
      <section style={{ background: 'var(--color-white)' }} aria-labelledby="background-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>
            Background
          </span>
          <h2 id="background-heading" className="font-display font-medium mb-6" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', color: 'var(--color-ink)', maxWidth: 640 }}>
            Forged inside active sales opportunities.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <p className="font-light mb-4" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                At companies like <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>Dolby, Optimizely, Lofelt, and Contentful</strong> — across large enterprises and fast-growing startups — my teams faced a familiar pattern. Not because we lacked effort or training, but because we lacked a coherent system for discovering value and guiding decisions.
              </p>
              <p className="font-light" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                To overcome this, I systematically adopted, developed, and refined the frameworks and practices I now teach. They were built inside active sales opportunities, under real commercial pressure — not in a classroom or a consultant's model.
              </p>
            </div>
            <div>
              <p className="font-light mb-4" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                Over time, this system helped teams I worked with contribute to more than <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>$60M in software revenue</strong> across EMEA and Asia, while improving deal qualification, execution discipline, and forecast reliability.
              </p>
              <p className="font-light" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                I have lived and worked across Asia, North America, and Europe. That experience shapes how I think about selling across cultures, stakeholders, and decision norms.
              </p>
            </div>
          </div>

          {/* Shift inset */}
          <div className="mt-12 p-12 rounded-sm grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-14" style={{ background: 'var(--color-linen)', border: '1px solid rgba(26,26,26,0.1)' }}>
            <div>
              <h3 className="font-display font-medium italic mb-6" style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)', color: 'var(--color-ink)', lineHeight: 1.2 }}>
                From practitioner<br />to coach.
              </h3>
              <blockquote className="font-display italic pl-5" style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', color: 'var(--color-ink)', lineHeight: 1.35, borderLeft: '2px solid var(--color-red)' }}>
                "The root cause was almost always the same. Sellers trained in isolation, skills applied to hypothetical scenarios, then left alone with a live pipeline."
              </blockquote>
            </div>
            <div>
              <p className="font-light mb-4" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                I spent years watching the same problems recur across different companies, different teams, different geographies. Effort was never the issue. A coherent, shared operating model was.
              </p>
              <p className="font-light mb-4" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                Today, I partner with <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>CROs and senior GTM leaders</strong> who want to move beyond isolated training and toward a repeatable, buyer-centric system — one that improves not just individual skill, but the coherence of the entire GTM motion.
              </p>
              <p className="font-light" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
                That shift from practitioner to coach was not a departure from the work. It was the next logical step in it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach — linen */}
      <section style={{ background: 'var(--color-linen)' }} aria-labelledby="approach-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>
            How I Work
          </span>
          <h2 id="approach-heading" className="font-display font-medium mb-12" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', color: 'var(--color-ink)', maxWidth: 560 }}>
            Principles that shape every engagement.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachCards.map((c, i) => (
              <div key={i} className="p-8 rounded-sm" style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}>
                <div className="font-display font-semibold mb-4" style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)', color: 'var(--color-red)', opacity: 0.4, lineHeight: 1 }}>{c.num}</div>
                <h3 className="font-display font-medium italic mb-2" style={{ fontSize: '1.15rem', color: 'var(--color-ink)' }}>{c.title}</h3>
                <p className="font-light" style={{ fontSize: '0.86rem', color: 'var(--color-sage)', lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspective — ink */}
      <section style={{ background: 'var(--color-ink)' }} aria-labelledby="perspective-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
            My Point of View
          </span>
          <h2 id="perspective-heading" className="font-display font-medium text-white mb-12" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', maxWidth: 560 }}>
            How I think about buying, selling, and value.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {perspectives.map((p, i) => (
              <div
                key={i}
                className="p-9 transition-colors duration-200"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  background: 'transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <blockquote className="font-display italic text-white mb-3 pl-4" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.45, borderLeft: '2px solid var(--color-red)' }}>
                  {p.quote}
                </blockquote>
                <p className="font-light" style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.72 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — lightest2 */}
      <section style={{ background: 'var(--color-lightest2)' }} aria-labelledby="testimonials-about-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <h2 id="testimonials-about-heading" className="font-display font-medium mb-10" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', color: 'var(--color-ink)' }}>
            What clients say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 p-8 rounded-sm transition-all duration-200"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-red-mid)'; el.style.boxShadow = '0 6px 28px rgba(26,26,26,0.07)'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(26,26,26,0.1)'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
              >
                <div className="font-display font-semibold italic relative pl-4" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'var(--color-ink)', lineHeight: 1.42 }}>
                  <span className="absolute left-0 top-[-4px] not-italic font-normal" style={{ color: 'var(--color-red)', fontSize: '1.8rem', lineHeight: 1 }} aria-hidden="true">&#8220;</span>
                  {t.pullquote}
                </div>
                <p className="font-light flex-1" style={{ fontSize: '0.84rem', color: 'var(--color-sage)', lineHeight: 1.78 }}>{t.body}</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
                  <strong className="block font-medium" style={{ fontSize: '0.86rem', color: 'var(--color-ink)' }}>{t.name}</strong>
                  <span className="font-light" style={{ fontSize: '0.78rem', color: 'var(--color-sage)' }}>{t.role} &mdash; {t.company}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}