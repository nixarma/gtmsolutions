import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import CtaSection from '@/components/home/CtaSection'
import HoverCard from '@/components/HoverCard'

export const metadata: Metadata = {
  title: 'GTM Coaching for B2B SaaS Teams | Nikhil Sarma',
  description: 'Structured 6-8 week GTM coaching engagements for CROs and revenue leaders. Applied to live pipeline, cross-functional by design. Covering value discovery, storytelling, demos, and negotiation.',
  alternates: { canonical: '/coaching' },
  openGraph: {
    title: 'GTM Coaching for B2B SaaS Teams | Nikhil Sarma',
    description: 'Structured GTM coaching engagements for CROs and revenue leaders. Applied to live deals, not case studies. Cross-functional by design.',
    url: '/coaching',
  },
}

const heroStats = [
  { num: '6-8', label: 'Weeks per engagement', sub: 'Not a one-day event. A sustained system applied to your live pipeline.' },
  { num: '70%', label: 'Application in every session', sub: 'Frameworks practised on real deals, not hypothetical case studies.' },
  { num: '4', label: 'Functions coached together', sub: 'AEs, SEs, CS, and Services. One shared operating model.' },
  { num: '5★', label: 'Client rating', sub: 'From Jonathan Corrie, CEO of Precursive.' },
]

const forCards = [
  { tag: 'Sales', title: 'Higher quality pipeline. Fewer no-decisions.', body: 'AEs leave with a structured discovery discipline that builds multi-stakeholder business cases from the inside out. Deals that previously stalled move. Forecasts become more reliable.' },
  { tag: 'Solutions', title: 'SEs who shape deals, not just support them.', body: 'Presales teams leave with the commercial language and demo structure to drive decisions, not just demonstrate features. Discovery-led demos that speak to economic buyers.' },
  { tag: 'Customer Success', title: 'Renewals grounded in demonstrated value.', body: 'CS teams leave with the ability to quantify and communicate the outcomes their customers have achieved — and use that evidence to drive expansion and protect retention.' },
  { tag: 'Professional Services', title: 'Delivery teams that speak the language of business.', body: 'Services teams leave with commercial awareness and value communication skills that elevate every customer interaction — from onboarding to delivery reviews.' },
]

const problemCards = [
  { title: 'Trained in silos.', body: 'AEs attend one program. SEs attend another. CS is left out entirely. The result is a team that speaks three different languages in front of the same buyer.' },
  { title: 'Applied to hypotheticals.', body: 'Case studies and role plays feel relevant in a room. They degrade within weeks because they were never practised under real commercial pressure on real deals.' },
  { title: 'No reinforcement.', body: 'A two-day workshop produces awareness, not behaviour change. Without weekly reinforcement applied to live opportunities, skills revert to default within a quarter.' },
]

const expectCards = [
  { num: '01', title: 'Expect your team to be challenged.', body: 'This is not a comfortable affirmation of existing habits. Your team will be pushed to examine how they currently discover, demonstrate, and defend value — and to do it differently. Leaders are part of that conversation, not observers of it.' },
  { num: '02', title: "Expect the focus to be on the buyer's business problem.", body: "Every session is anchored in your buyers' reality — their priorities, their stakeholders, their decision-making constraints. The methodology is built around helping buyers decide, not helping sellers pitch." },
  { num: '03', title: 'Expect AEs, SEs, and CS to work as one team.', body: 'Cross-functional sessions are not a nice-to-have. They are the mechanism by which a shared operating model is built. Functions that have never been in the same room — with the same framework and the same language — discover what alignment actually feels like.' },
  { num: '04', title: 'Expect your live deals to be part of every session.', body: 'Frameworks are not taught in isolation and then left to the team to apply. Every session uses your actual pipeline as the raw material. The Value Discovery Map and Compass Questioning Model are practised under real commercial pressure, not in a hypothetical.' },
  { num: '05', title: 'Expect a buyer-first mentality to become the default.', body: "By the end of the engagement, your team's instinct — in every discovery call, every demo, every follow-up — should be to ask what the buyer needs to be able to decide, not what you need to say to close. That shift is the outcome." },
]

const roiCards = [
  { title: 'Win rate improvement', body: 'Better discovery and stronger business cases close the gap between a good demo and a signed order. Teams see measurable improvement within the engagement window.' },
  { title: 'Faster decision cycles', body: 'Buyers who receive structured value discovery move through buying committees faster. Deals that previously slipped stall less often when the business case is built from the inside out.' },
  { title: 'Margin protection', body: 'Teams that negotiate from a position of established value concede less in procurement. Commercial negotiation coached after value demonstration, not instead of it.' },
]

const testimonials = [
  { pullquote: "One of the most relatable and relevant facilitators I've worked with", body: "Nikhil's ability to tailor his approach to different groups with unique challenges was truly impressive. His genuine interest in understanding our business prior to the workshop led to exceptionally strong outcomes.", name: 'Pooja Kumar', role: 'Director Field Enablement, JAPAC', company: 'Adobe' },
  { pullquote: 'Complex concepts feel immediately actionable', body: 'His ability to connect strategic themes like value discovery with the real, day-to-day challenges of our sales teams across regions was especially valuable. What stood out most was how quickly he earned the group\'s attention and respect.', name: 'Robert Latas', role: 'Managing Director', company: 'Thinkproject Poland' },
  { pullquote: 'An absolute masterclass in value-based selling', body: 'Instead of traditional lectures, Nikhil demonstrates value-based selling through value-based teaching. Real life situations, live deal guidance, brainstorming exercises and constant reinforcement are the norm.', name: 'Gavin Thomas', role: 'Manager, Presales SEA', company: 'Locus' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GTM Coaching Engagement',
  provider: { '@type': 'Person', name: 'Nikhil Sarma', url: 'https://gtmsolutions.co/about' },
  description: 'A structured 6-8 week GTM coaching engagement for B2B SaaS teams. Applied to live pipeline, cross-functional by design.',
  serviceType: 'GTM Coaching',
  areaServed: 'Worldwide',
}

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — ink */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-ink)' }} aria-labelledby="hero-heading">
        <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(153,51,47,0.07) 0%, transparent 68%)' }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="fade-up-children flex flex-col">
            <span className="inline-block self-start px-3 py-1 rounded-full text-[0.75rem] tracking-[0.18em] uppercase font-medium mb-6" style={{ color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
              GTM Coaching &nbsp;&bull;&nbsp; B2B SaaS &nbsp;&bull;&nbsp; Cross-functional
            </span>
            <h1 className="font-display font-medium italic text-white mb-7" style={{ fontSize: 'clamp(2.6rem, 4vw, 4rem)', lineHeight: 1.1 }}>
              Your AEs and SEs<br />are not the problem.<br /><em className="not-italic" style={{ color: 'var(--color-sage-mid)' }}>The system is.</em>
            </h1>
            <p className="mb-3" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, maxWidth: 500 }}>
              Most GTM teams train in silos and wonder why execution is inconsistent.
            </p>
            <p className="mb-11" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, maxWidth: 500 }}>
              I work with CROs and revenue leaders to build a shared operating model — applied to live deals, across every function that touches the buyer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 rounded-sm transition-colors" style={{ background: 'var(--color-red)', color: '#fff' }}>Schedule a Strategy Session</Link>
              <Link href="#system" className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 rounded-sm transition-colors" style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.22)' }}>See the System</Link>
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            {heroStats.map((s, i) => (
              <div key={i} className="flex items-center gap-5 px-7 py-6" style={{ background: 'var(--color-linen)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3 }}>
                <div className="font-display font-semibold leading-none min-w-[72px]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--color-red)' }}>{s.num}</div>
                <div>
                  <strong className="block font-medium text-sm mb-0.5" style={{ color: 'var(--color-ink)' }}>{s.label}</strong>
                  <p className="" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.6 }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes by function — white */}
      <section style={{ background: 'var(--color-white)' }} aria-labelledby="for-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>Outcomes by Function</span>
          <h2 id="for-heading" className="font-display font-medium mb-3" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)', maxWidth: 640 }}>What changes for each part of your GTM team.</h2>
          <p className="mb-12" style={{ fontSize: '1rem', color: 'var(--color-sage)', lineHeight: 1.8, maxWidth: 580 }}>
            A shared operating model does not mean identical training. Each function leaves with outcomes specific to their role and a <strong style={{ color: 'var(--color-ink)', fontStyle: 'italic' }}>shared language</strong> that makes the whole motion more coherent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden rounded-sm" style={{ border: '1px solid rgba(26,26,26,0.1)' }} role="list">
            {forCards.map((c, i) => (
              <HoverCard
                key={i}
                tag="article"
                className="flex flex-col p-8 transition-colors duration-200"
                style={{ borderRight: i < forCards.length - 1 ? '1px solid rgba(26,26,26,0.1)' : 'none', background: 'var(--color-white)' }}
                hoverStyle={{ background: 'var(--color-lightest2)' }}
              >
                <div className="text-[0.72rem] tracking-[0.16em] uppercase font-medium mb-3" style={{ color: 'var(--color-red)' }}>{c.tag}</div>
                <h3 className="font-display font-medium italic mb-3" style={{ fontSize: '1.2rem', color: 'var(--color-ink)', lineHeight: 1.3 }}>{c.title}</h3>
                <p className="mt-auto pt-3" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.72, borderTop: '1px solid rgba(26,26,26,0.1)' }}>{c.body}</p>
              </HoverCard>
            ))}
          </div>
          <div className="mt-5 px-8 py-6 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: 'var(--color-sage)' }}>
            <div>
              <div className="text-[0.75rem] tracking-[0.18em] uppercase font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>Your GTM team's outcome</div>
              <div className="font-display italic text-white" style={{ fontSize: '1.4rem' }}>Qualify better. Execute better. Forecast better.</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Sales', 'Solutions', 'Customer Success', 'Professional Services'].map(p => (
                <span key={p} className="text-[0.72rem] tracking-[0.1em] uppercase font-medium px-4 py-1.5 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.15)' }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why training fails — ink */}
      <section style={{ background: 'var(--color-ink)' }} aria-labelledby="problem-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>Why Training Fails</span>
          <h2 id="problem-heading" className="font-display font-medium text-white mb-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.9rem)', maxWidth: 680, lineHeight: 1.2 }}>The reason last year's training didn't work.</h2>
          <p className="font-display italic mb-12" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'rgba(255,255,255,0.7)', maxWidth: 620, lineHeight: 1.5 }}>It wasn't your team. It wasn't the trainer. It was the structure.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {problemCards.map((c, i) => (
              <HoverCard
                key={i}
                className="p-9 rounded-sm transition-colors duration-200"
                style={{ background: 'var(--color-linen)', border: '1px solid rgba(255,255,255,0.07)' }}
                hoverStyle={{ background: 'var(--color-lightest2)' }}
              >
                <h3 className="font-display font-medium italic mb-2.5" style={{ fontSize: '1.1rem', color: 'var(--color-ink)' }}>{c.title}</h3>
                <p className="" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.75 }}>{c.body}</p>
              </HoverCard>
            ))}
          </div>
          <div className="mt-12 pt-10 flex flex-col items-center text-center gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <blockquote className="font-display italic" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', color: 'rgba(255,255,255,0.9)', maxWidth: 600, lineHeight: 1.45 }}>
              "If you don't invest in people, if you don't take the time and effort, how do you expect them to learn? By osmosis?"
            </blockquote>
            <p className="" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)' }}>Jonathan Corrie, CEO, Precursive</p>
            <Link href="#how" className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 rounded-sm transition-colors" style={{ background: 'var(--color-red)', color: '#fff' }}>See how this engagement works</Link>
          </div>
        </div>
      </section>

      {/* The System — linen */}
      <section style={{ background: 'var(--color-linen)' }} id="system" aria-labelledby="system-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>The Decision Confidence Operating System</span>
          <h2 id="system-heading" className="font-display font-medium mb-3" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)', maxWidth: 620 }}>Value Discovery is the foundation. Everything builds from it.</h2>
          <p className="mb-10" style={{ fontSize: '1rem', color: 'var(--color-sage)', lineHeight: 1.8, maxWidth: 580 }}>
            The system is structured in two tracks — Foundational and Advanced. Value Discovery anchors the foundational track because it is the prerequisite for everything else. You cannot demonstrate value you haven't discovered. You cannot tell a story around a problem you haven't diagnosed.
          </p>
          <div className="p-10 rounded-sm text-center" style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}>
            <Image
              src="/images/decisionconfidence.webp"
              alt="The Decision Confidence Operating System framework"
              width={720}
              height={480}
              className="mx-auto rounded-sm"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* What to expect — white */}
      <section style={{ background: 'var(--color-white)' }} id="how" aria-labelledby="expect-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>What to Expect</span>
          <h2 id="expect-heading" className="font-display font-medium mb-3" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)', maxWidth: 580 }}>What a coaching engagement actually feels like.</h2>
          <p className="mb-12" style={{ fontSize: '1rem', color: 'var(--color-sage)', lineHeight: 1.8, maxWidth: 560 }}>From a CRO or VP perspective, here is what sets this engagement apart from everything else you have tried.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {expectCards.map((c, i) => (
              <HoverCard
                key={i}
                className="flex flex-col gap-3 p-9 rounded-sm transition-all duration-200"
                style={{ background: 'var(--color-lightest2)', border: '1px solid rgba(26,26,26,0.1)' }}
                hoverStyle={{ background: 'var(--color-white)', boxShadow: '0 4px 20px rgba(26,26,26,0.06)' }}
              >
                <div className="font-display font-semibold" style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)', color: 'var(--color-red)', opacity: 0.4, lineHeight: 1 }}>{c.num}</div>
                <h3 className="font-display font-medium italic" style={{ fontSize: '1.2rem', color: 'var(--color-ink)', lineHeight: 1.3 }}>{c.title}</h3>
                <p className="" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.75 }}>{c.body}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ROI — ink */}
      <section style={{ background: 'var(--color-ink)' }} aria-labelledby="roi-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>The Investment</span>
            <h2 id="roi-heading" className="font-display font-medium text-white mb-5" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>Your team is already a significant investment. Protect it.</h2>
            <p className="mb-4" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
              A GTM team of nine people represents close to <strong style={{ color: 'var(--color-white)', fontWeight: 500 }}>$1 million in combined salary</strong>. The question is not whether coaching costs money. The question is what it costs to leave that investment underperforming.
            </p>
            <p className="" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
              Skills left undeveloped, deals lost to no-decision, margin eroded in negotiation. The commercial case for this engagement builds itself.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {roiCards.map((c, i) => (
              <div key={i} className="flex gap-5 items-start p-8 rounded-sm" style={{ background: 'var(--color-linen)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: 'var(--color-red)' }} aria-hidden="true" />
                <div>
                  <h4 className="font-display font-medium italic mb-1.5" style={{ fontSize: '1rem', color: 'var(--color-ink)', lineHeight: 1.4 }}>{c.title}</h4>
                  <p className="" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.7 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study — linen */}
      <section style={{ background: 'var(--color-linen)' }} aria-labelledby="case-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <span className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>Client Story</span>
          <h2 id="case-heading" className="font-display font-medium mb-10" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)', maxWidth: 600 }}>What changes when the whole GTM team learns together.</h2>
          <div className="overflow-hidden rounded-sm" style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}>
            <div className="px-10 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: 'var(--color-sage)' }}>
              <div>
                <h3 className="font-display font-medium italic text-white mb-1" style={{ fontSize: '1.4rem' }}>Precursive</h3>
                <p className="" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>Professional Services Automation &nbsp;&bull;&nbsp; UK & United States</p>
              </div>
              <div className="flex gap-8">
                {[{ num: '4', label: 'Functions' }, { num: '8', label: 'Week program' }, { num: '5★', label: 'CEO rating' }].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-semibold text-white leading-none mb-1" style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)' }}>{s.num}</div>
                    <div className="uppercase tracking-[0.1em] font-medium" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[0.75rem] tracking-[0.18em] uppercase font-medium mb-4" style={{ color: 'var(--color-red)' }}>The Challenge</h4>
                <p className="mb-4" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>
                  Jonathan Corrie, CEO of Precursive, needed his GTM organisation to be <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>tightly aligned</strong> across Sales, Customer Success, and Services. The problem was threefold: inconsistent customer engagement across functions, varied ability to communicate business value to multiple stakeholder types, and limited commercial awareness within the Services team despite their direct customer contact.
                </p>
                <p className="italic" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>
                  "I wanted some consistency in those teams regarding customer engagement, discovery, how we communicate the value of our solutions to our customers and the individual stakeholders within those companies."
                </p>
              </div>
              <div>
                <h4 className="text-[0.75rem] tracking-[0.18em] uppercase font-medium mb-4" style={{ color: 'var(--color-red)' }}>What Changed</h4>
                {[
                  { label: 'Sales & Presales:', text: 'The Value Discovery Map gave the presales team a structured approach to multi-stakeholder discovery. AEs learned to look horizontally and vertically across buyer organisations rather than remaining single-threaded.' },
                  { label: 'Services & CS:', text: 'The most significant shift was moving from product knowledge-led demonstrations to value-led conversations anchored in business outcomes relevant to the specific audience.' },
                  { label: 'Observable change:', text: '"Everyone is much more in tune to: how do we talk about value? How do we communicate value? How do we diagnose value? That\'s genuinely noticeable. Raising the altitude of how people think."' },
                  { label: 'Business impact:', text: '"We\'re on for a very strong year, and this will definitely be a part of the foundation."' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 mt-1.5 font-body text-xs" style={{ color: 'var(--color-sage)', opacity: 0.7 }}>✓</span>
                    <p className="" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.65 }}>
                      <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>{item.label}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-10 mb-10 pt-9" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              <div className="flex gap-1 mb-4 pl-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-red)' }} aria-hidden="true">
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display italic mb-4 pl-5" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'var(--color-ink)', lineHeight: 1.5, borderLeft: '2px solid var(--color-red)' }}>
                "Working with you has been an absolute pleasure. You've been so professional, always prepared for every meeting. You demonstrate immediately that I've made a good decision on partnering. You showed up, you were prepared, you knew my business. Probably the best virtual training I've attended. Five stars. Highly recommend."
              </blockquote>
              <div className="pl-5">
                <strong className="block font-medium text-sm" style={{ color: 'var(--color-ink)' }}>Jonathan Corrie</strong>
                <span className="" style={{ fontSize: '0.82rem', color: 'var(--color-sage)' }}>CEO, Precursive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — lightest2 */}
      <section style={{ background: 'var(--color-lightest2)' }} aria-labelledby="testimonials-heading">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16">
          <h2 id="testimonials-heading" className="font-display font-medium mb-10" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)' }}>What other clients say.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <HoverCard
                key={i}
                tag="article"
                className="flex flex-col gap-4 p-8 rounded-sm transition-all duration-200"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}
                hoverStyle={{ borderColor: 'var(--color-red-mid)', boxShadow: '0 6px 28px rgba(26,26,26,0.07)', transform: 'translateY(-2px)' }}
              >
                <div className="font-display font-semibold italic relative pl-4" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--color-ink)', lineHeight: 1.38 }}>
                  <span className="absolute left-0 top-[-4px] not-italic font-normal" style={{ color: 'var(--color-red)', fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">&#8220;</span>
                  {t.pullquote}
                </div>
                <p className="flex-1" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.78 }}>{t.body}</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
                  <strong className="block font-medium" style={{ fontSize: '0.88rem', color: 'var(--color-ink)' }}>{t.name}</strong>
                  <span className="" style={{ fontSize: '0.82rem', color: 'var(--color-sage)' }}>{t.role} &mdash; {t.company}</span>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}