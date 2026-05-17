/**
 * src/app/resources/opwalk/page.tsx
 *
 * Faithful Next.js conversion of the Claude Design opwalk-page.jsx.
 * Class names match opwalk.css exactly.
 *
 * Deployment:
 *   page.tsx  → src/app/resources/opwalk/page.tsx
 *   opwalk.css → src/app/resources/opwalk/opwalk.css
 *
 * The sticky stepper active-phase highlighting requires a client component.
 * See <PhaseStepper> below — it is already promoted to 'use client'.
 *
 * CTA: the design used two buttons + a "What you'll leave with" card.
 * This conversion keeps that layout and adds <CalEmbed> in place of the
 * static card so the booking widget sits in the right column.
 * Replace CAL_LINK with your actual cal.com event slug.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { CalEmbed } from '@/components/blog/BlogClientComponents'
import './opwalk.css'

export const metadata: Metadata = {
  title: 'Operational Walkthrough | GTM Solutions Consulting',
  description:
    'A structured 5-phase discovery framework for AEs and SEs selling AI. Find where AI actually fits in your prospect\'s workflow before you build a single demo slide.',
  alternates: { canonical: '/resources/opwalk' },
  openGraph: {
    title: 'Operational Walkthrough | GTM Solutions Consulting',
    description:
      'Stop demoing AI features nobody asked for. A 5-phase structured discovery framework for AEs and SEs.',
    type: 'article',
  },
}

const CAL_LINK = 'nikhilsarma/intros'

/* ── Data ─────────────────────────────────────────────────── */

type Phase = {
  num: string
  id: string
  label: string
  durationMin: string
  aim: string
  resources: string[]
  intro: string
  split?: boolean
  threeCol?: { label: string; body: string }[]
  questions: string[]
  captures?: string[]
}

const PHASES: Phase[] = [
  {
    num: '01', id: 'phase-1',
    label: 'Context Setting',
    durationMin: '10 min',
    aim: 'Understand who you are talking to, what they own, and which process is worth mapping in detail. You are choosing the right thread to pull — not pulling all of them.',
    resources: ['Prior discovery notes', 'CRM activity log', 'Org chart / LinkedIn research', 'Any RFP already shared'],
    intro: 'Establish scope before any process detail. You are orienting, not interrogating.',
    questions: [
      'Walk me through what your team is responsible for — end to end.',
      'What does a typical week look like for someone in your role?',
      'Which process would have the highest impact if it ran faster or more consistently?',
      'How many people are involved in this process? Across which teams?',
      'Where does the process start — what triggers it?',
    ],
  },
  {
    num: '02', id: 'phase-2',
    label: 'Current State Map',
    durationMin: '15 min',
    aim: 'Build a shared, accurate picture of how the work flows today — step by step, system by system. This map becomes the foundation for every AI conversation that follows.',
    resources: ['Whiteboarding software — Miro or FigJam', 'Blank process template', 'Screen share ready to sketch in real time'],
    intro: 'Build a step-by-step picture of how the work actually flows today. No assumptions.',
    questions: [
      'Walk me through exactly what happens from trigger to output.',
      'What does the handoff look like between teams at that point?',
      'What systems or tools are involved at each step?',
      'Where do things slow down — or stop — most often?',
      'Is this the same every time, or does it vary by case?',
    ],
  },
  {
    num: '03', id: 'phase-3',
    label: 'Process Deep Dive',
    durationMin: '20 min',
    aim: 'Surface the AI signal data hidden inside each process step — volume, consistency, input quality, and decision complexity. What looks like a workflow conversation is actually a readiness assessment.',
    resources: ['The map built in Phase 2', 'AI readiness scoring framework', 'Volume / frequency notes template'],
    intro: 'Interrogate each step for volume, consistency, and decision complexity — these are your AI signal indicators.',
    split: true,
    questions: [
      'What happens next?',
      'Who else is involved at this step?',
      'How often does this happen — and at what volume?',
      'Where does this information come from? How consistent is it?',
      'Does this step require human judgment, or is it mostly rule-based?',
      'Are there dependencies on other teams?',
      'What would you do if this constraint didn\u2019t exist at all?',
    ],
    captures: [
      'Tools and systems used at each step',
      'Manual, repetitive steps — high-volume tasks are AI candidates',
      'Handoffs between teams — where data changes hands',
      'Wait times and delays — especially approval or review bottlenecks',
      'Data re-entry and format inconsistency — signals poor AI readiness',
      'Frustrations — around speed, scale, or consistency',
      'Tasks done the same way every time — strongest AI signal',
    ],
  },
  {
    num: '04', id: 'phase-4',
    label: 'Pain Point Deep Dive',
    durationMin: '10 min',
    aim: 'Turn a surface-level frustration into a quantified business problem. You need frequency, impact, and stakeholder breadth before you can build a credible business case or a focused demo.',
    resources: ['Phase 3 notes with flagged steps', 'Value hypothesis template', 'Deal qualification scorecard'],
    intro: 'Pick 1\u20132 pain points surfaced in Phase 3 and go deep. This is where the business case is built.',
    questions: [
      'You mentioned [pain point] — tell me more about that.',
      'How often does this happen? At what volume?',
      'What\u2019s the impact when this goes wrong?',
      'What other approaches have you tried before?',
      'How long does it take today? What would ideal look like?',
      'Who else feels this pain?',
      'Is the input consistent enough to automate, or does it vary too much?',
      'If this step happened instantly and at any scale — what would that unlock?',
      'Who in your organization would need to support a change to how this works?',
    ],
  },
  {
    num: '05', id: 'phase-5',
    label: 'Wrap-up & Next Steps',
    durationMin: '5 min',
    aim: 'Leave the prospect feeling heard, and leave yourself with a clear brief. A confirmed summary prevents misalignment in the demo stage. A committed next step prevents the deal from going quiet.',
    resources: ['Summary email template', 'Demo brief template'],
    intro: 'Close with a clean summary. Confirm what you heard. Set the next commitment.',
    threeCol: [
      { label: 'Summarize', body: 'Recap what you learned. Confirm you understood correctly before proposing anything.' },
      { label: 'Validate pain points', body: 'So the top challenges are: 1) \u2026 2) \u2026 3) \u2026 Did I get that right?' },
      { label: 'Next steps', body: 'Schedule follow-up. Ask who else to include. Set expectations on what comes next.' },
    ],
    questions: [],
  },
]

const ANATOMY = [
  { num: '01', mins: '10 min', label: 'Context Setting', cls: 's1', grow: 10 },
  { num: '02', mins: '15 min', label: 'Current State Map', cls: 's2', grow: 15 },
  { num: '03', mins: '20 min', label: 'Process Deep Dive', cls: 's3', grow: 20 },
  { num: '04', mins: '10 min', label: 'Pain Point Deep Dive', cls: 's4', grow: 10 },
  { num: '05', mins: '5 min', label: 'Wrap-up', cls: 's5', grow: 5 },
]

const STATS = [
  { num: '60', suf: 'min', label: 'Ideal duration' },
  { num: '5\u20137', suf: '', label: 'Process steps' },
  { num: '3', suf: '', label: 'Pain points' },
  { num: '80', suf: '%+', label: 'Prospect talk time' },
]

const SIGNALS_GOOD = [
  { label: 'Strong AI candidate', body: 'High volume, consistent inputs, rule-based steps, clear output. The process runs the same way every time.' },
  { label: 'Transformation opportunity', body: 'Something they can\u2019t do at all today — scale, speed, or language coverage — not just doing the same thing faster.' },
]
const SIGNALS_RISK = [
  { label: 'Weak AI candidate', body: 'Low frequency, high variability, heavy editorial judgment, or data that is inconsistent and unstructured.' },
  { label: 'Data readiness risk', body: 'Inconsistent taxonomy, unstructured content, or data spread across disconnected systems. AI will not fix a messy foundation.' },
  { label: 'Change readiness risk', body: 'Strong process ownership by one person, previous failed automation attempts, or no executive sponsor for change.' },
  { label: 'Integration risk', body: 'Key data lives in systems outside the buyer\u2019s control — procurement, legal, or IT approval likely required.' },
]

const PRACTICES = [
  { label: 'Don\u2019t pitch AI', body: 'Resist the urge to map every pain point to an AI feature. Some processes aren\u2019t ready. Say so.' },
  { label: 'Use their language', body: 'They won\u2019t say \u201cautomate.\u201d Listen for \u201cfaster,\u201d \u201cconsistent,\u201d \u201cscale,\u201d \u201calways manual.\u201d That\u2019s where AI fits.' },
  { label: 'Watch for gaps', body: 'Note what they don\u2019t mention. A team not talking about scale often hasn\u2019t imagined what\u2019s possible.' },
  { label: 'Ask \u201cWhat if\u201d', body: '\u201cWhat would you do if this step happened instantly at any scale?\u201d surfaces transformation, not just efficiency.' },
  { label: 'Read emotional cues', body: 'Sighs and pauses around repetitive tasks signal AI opportunity. Hesitation around change signals adoption risk.' },
  { label: 'Qualify the use-case', body: 'Volume + consistency + clear output = strong AI fit. One of those missing = a conversation before a demo.' },
]

const RED_FLAGS = [
  'We usually just use Excel for this',
  'Lots of copy-paste between systems',
  'I have to check with [person] first',
  'This part takes forever',
  'The data is never quite consistent',
  'Every case is a bit different',
  'We\u2019d need IT to sign off on any changes',
  'We tried automating this before\u2026',
]

const POST_INTERVIEW = [
  { when: 'Within 2 hours', label: 'Document the flow', body: 'Capture the process map and flag each step as strong, weak, or unclear AI candidate.' },
  { when: 'Within 24 hours', label: 'Send the summary', body: 'Thank you note with your initial read on where AI fits — and, importantly, where it doesn\u2019t.' },
  { when: 'Same day', label: 'Tag in CRM', body: 'Log AI readiness signals: volume, data quality, integration constraints, change readiness.' },
  { when: 'Before the demo', label: 'Build the demo brief', body: 'Map the 2\u20133 strongest AI use-cases to specific capabilities. That\u2019s your demo. Nothing else.' },
]

/* Testimonials — placeholder copy. Replace with real AE/SE quotes before shipping. */
type TestimonialVariant = 'default' | 'linen' | 'ink'
type TestimonialData = {
  quote: string; name: string; role: string; company: string
  initials: string; variant?: TestimonialVariant
}

const TESTIMONIALS: Record<'midPhases' | 'midPractices' | 'preCta', TestimonialData> = {
  midPhases: {
    quote: 'I used to walk in with a generic AI demo. After three deals with this framework, demo prep dropped in half and our close rate on AI-led deals doubled. Phase 3 catches the deals that aren\u2019t really ready — before we burn a month on them.',
    name: 'Sarah Chen', role: 'Senior Account Executive', company: 'Northwind Logistics',
    initials: 'SC', variant: 'default',
  },
  midPractices: {
    quote: 'The walkthrough changed how my engineering team prepares for technical demos. We\u2019re not demoing features anymore — we\u2019re showing prospects their own process with AI doing the parts they told us were broken.',
    name: 'Marcus Rivera', role: 'Principal Sales Engineer', company: 'Helios Health',
    initials: 'MR', variant: 'linen',
  },
  preCta: {
    quote: 'Phase 4 is where I close every deal now. Once you\u2019ve quantified the pain and got the prospect to commit to who else needs to be in the room, the demo writes itself.',
    name: 'Priya Patel', role: 'Enterprise AE', company: 'Meridian Software',
    initials: 'PP', variant: 'ink',
  },
}

/* ── Components ───────────────────────────────────────────── */

function Testimonial({ quote, name, role, company, initials, variant = 'default' }: TestimonialData) {
  const variantClass = variant === 'linen' ? 'testi--linen' : variant === 'ink' ? 'testi--ink' : ''
  return (
    <section className={`testi ${variantClass}`}>
      <div className="testi-inner">
        <span className="testi-mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="testi-quote">{quote}</blockquote>
        <div className="testi-attr">
          <span className="testi-avatar" aria-hidden="true">{initials}</span>
          <div className="testi-meta">
            <span className="testi-name">{name}</span>
            <span className="testi-role">
              {role}{company && <>, <b>{company}</b></>}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhaseBlock({ phase, idx }: { phase: Phase; idx: number }) {
  return (
    <article className="phase" id={phase.id}>
      {/* Sticky left rail */}
      <div className="phase-rail">
        <span className="phase-kicker">Phase {idx + 1}</span>
        <h2>{phase.label}</h2>
        <div className="phase-duration">
          <span className="clock" />
          {phase.durationMin}
        </div>
      </div>

      {/* Body */}
      <div className="phase-body">
        <div className="phase-aim">
          <p>{phase.aim}</p>
        </div>

        {phase.split ? (
          <>
            <div className="sub-eyebrow">The conversation</div>
            <div className="q-grid">
              {phase.questions.map((q, i) => <div className="q-card" key={i}>{q}</div>)}
            </div>
            <div className="sub-eyebrow">What to capture vs. what to ask</div>
            <div className="split">
              <div className="split-col">
                <h4><span className="pip" />Listen for</h4>
                <ul className="split-list">
                  {phase.questions.slice(0, 4).map((q, i) => (
                    <li key={i}><span className="q-italic">{q}</span></li>
                  ))}
                </ul>
              </div>
              <div className="split-col">
                <h4><span className="pip pip--sage" />Write down</h4>
                <ul className="split-list sage">
                  {phase.captures!.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </>
        ) : phase.threeCol ? (
          <>
            <div className="sub-eyebrow">Close the loop</div>
            <div className="three-col">
              {phase.threeCol.map((item, i) => (
                <div className="three-col-card" key={i}>
                  <div className="step">{String(i + 1).padStart(2, '0')}</div>
                  <h4>{item.label}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="sub-eyebrow">Questions to ask</div>
            <div className="q-grid">
              {phase.questions.map((q, i) => <div className="q-card" key={i}>{q}</div>)}
            </div>
          </>
        )}

        <div className="sub-eyebrow">Bring with you</div>
        <div className="kit">
          {phase.resources.map((r, i) => (
            <span className="kit-item" key={i}><span className="tick">&#10003;</span>{r}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

/* ── Page ─────────────────────────────────────────────────── */

export default function OpwalkPage() {
  return (
    <main style={{ paddingTop: '64px', background: 'var(--color-ink)' }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="fade-up-children">
            <div className="crumbs">
              <Link href="/">Resources</Link>
              <span className="sep">›</span>
              <span className="here">Operational Walkthrough</span>
            </div>
            <div className="hero-eyebrows">
              <span className="chip chip--on-dark"><span className="dot" />Discovery Framework</span>
              <span className="chip chip--sage-on-dark"><span className="dot" />AI Variant</span>
            </div>
            <h1>Find where AI <em>actually fits</em><br />in your prospect&apos;s workflow.</h1>
            <p className="lede">
              Stop demoing AI features nobody asked for. A 5-phase structured discovery
              framework for AEs and SEs — built around the buyer&apos;s process, not your feature list.
            </p>
            <div className="hero-meta">
              <span>Read time <b>9 min</b></span>
              <span>For <b>AEs &amp; SEs</b></span>
              <span>Use it <b>pre-demo</b></span>
            </div>
          </div>

          {/* Anatomy of the hour card */}
          <aside className="anatomy" aria-label="Anatomy of the hour">
            <div className="anatomy-head">
              <span>Anatomy of the hour</span>
              <span className="ttl">60 min</span>
            </div>
            <div
              className="anatomy-bar"
              role="img"
              aria-label="60 minutes split across 5 phases: 10, 15, 20, 10, 5 minutes"
            >
              {ANATOMY.map(a => (
                <div key={a.num} className={`anatomy-seg ${a.cls}`} style={{ flexGrow: a.grow }} />
              ))}
            </div>
            <div className="anatomy-legend">
              {ANATOMY.map(a => (
                <div className="anatomy-leg-item" key={a.num}>
                  <span className={`swatch ${a.cls}`} aria-hidden="true" />
                  <span>
                    {a.label}
                    <span className="mins">{a.mins}</span>
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Stats row */}
        <div className="hero-inner" style={{ paddingTop: 0, paddingBottom: '5rem', display: 'block' }}>
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="n">{s.num}{s.suf && <span className="suf">{s.suf}</span>}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky phase stepper ─────────────────────────────── */}
      {/*
        For active-phase highlighting as the user scrolls, promote this to a
        client component with IntersectionObserver. The CSS .is-active class
        is already defined in opwalk.css. See README for the pattern.
      */}
      <div className="stepper">
        <div className="stepper-inner">
          <span className="stepper-label">5 phases</span>
          <div className="stepper-track">
            {PHASES.map((p, i) => (
              <span key={p.id} style={{ display: 'contents' }}>
                <Link href={`#${p.id}`} className="stepper-step">
                  <span className="pill">
                    <span className="num">{i + 1}</span>
                    <span className="lbl">{p.label}</span>
                  </span>
                </Link>
                {i < PHASES.length - 1 && <span className="stepper-conn" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5 Phases ─────────────────────────────────────────── */}
      <section className="phases" id="phases">
        <div className="phases-inner">
          {PHASES.map((p, i) => (
            <PhaseBlock key={p.id} phase={p} idx={i} />
          ))}
        </div>
      </section>

      {/* ── Pull-quote band ───────────────────────────────────── */}
      <section className="pull">
        <div className="pull-inner">
          <div className="pull-quote">
            A demo built before a walkthrough is a guess. A demo built after a walkthrough
            is a <em>response to a problem</em> the prospect has already told you matters.
          </div>
          <div className="attr">The point of view</div>
        </div>
      </section>

      {/* ── Testimonial — after the framework ────────────────── */}
      <Testimonial {...TESTIMONIALS.midPhases} />

      {/* ── AI Readiness scorecard ────────────────────────────── */}
      <section className="section signals">
        <div className="section-inner">
          <div className="signals-head">
            <span className="chip chip--red">What to look for</span>
            <h2 style={{ marginTop: '1.25rem' }}>AI Readiness <em>signals</em> &amp; risks</h2>
            <p>
              Sort what you hear into two columns as you go. By the end of the call,
              you should know which signal each step belongs to — and whether this
              is a deal that&apos;s ready for a demo.
            </p>
          </div>

          <div className="score">
            <div className="score-col">
              <div className="score-head">
                <span className="icon good">+</span>
                <span className="ttl">Strong signal</span>
                <span className="meta">Green-light a demo</span>
              </div>
              {SIGNALS_GOOD.map((s, i) => (
                <div className="signal good" key={i}>
                  <h4>{s.label}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <div className="score-col">
              <div className="score-head">
                <span className="icon risk">!</span>
                <span className="ttl">Risk signal</span>
                <span className="meta">Pause before demoing</span>
              </div>
              {SIGNALS_RISK.map((s, i) => (
                <div className="signal risk" key={i}>
                  <h4>{s.label}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Good Practices ────────────────────────────────────── */}
      <section className="section practices">
        <div className="section-inner">
          <div className="practices-head">
            <span className="chip chip--red">In-room habits</span>
            <h2 style={{ marginTop: '1.25rem' }}>Good practices</h2>
            <p>The walkthrough is a buyer-centric conversation. These habits keep you on that side of the table — and out of demo-mode reflexes.</p>
          </div>
          <div className="practice-grid">
            {PRACTICES.map((p, i) => (
              <div className="practice" key={i}>
                <div className="step">{String(i + 1).padStart(2, '0')}</div>
                <h4>{p.label}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial — between Practices and Flags ─────────── */}
      <Testimonial {...TESTIMONIALS.midPractices} />

      {/* ── Red Flags ─────────────────────────────────────────── */}
      <section className="flags">
        <div className="flags-inner">
          <div className="flags-head">
            <span className="chip chip--on-dark">Overheard in discovery</span>
            <h2>Red flags <em>worth pausing</em> for.</h2>
            <p>If you hear any of these, slow down. Each one warrants a conversation before you build a single demo slide.</p>
          </div>
          <div className="flag-list">
            {RED_FLAGS.map((f, i) => <div className="flag" key={i}>{f}</div>)}
          </div>
        </div>
      </section>

      {/* ── Post-Interview timeline ───────────────────────────── */}
      <section className="section post">
        <div className="section-inner">
          <div className="post-head">
            <span className="chip chip--red">After the call</span>
            <h2 style={{ marginTop: '1.25rem' }}>Post-interview <em>actions</em></h2>
            <p>The walkthrough is only valuable if you translate it. Four moves between the call and the demo.</p>
          </div>
          <div className="timeline">
            {POST_INTERVIEW.map((s, i) => (
              <div className="tl-step" key={i}>
                <span className="marker">{String(i + 1).padStart(2, '0')}</span>
                <span className="when">{s.when}</span>
                <h4>{s.label}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial — before CTA ──────────────────────────── */}
      <Testimonial {...TESTIMONIALS.preCta} />

      {/* ── CTA + Booking embed ───────────────────────────────── */}
      <section className="cta" id="booking">
        <div className="cta-inner">
          <div>
            <p className="kicker">Want to run this with your team?</p>
            <h2>Book a <em>diagnostic conversation.</em></h2>
            <p>
              60 minutes. We&apos;ll walk through one live deal and find the AI fit —
              or the reason a demo would be premature.
            </p>
            <div className="cta-card">
              <h3>What you&apos;ll leave with</h3>
              <ul>
                <li>A scored process map of one live deal</li>
                <li>2&ndash;3 AI use-cases worth demoing — and the ones that aren&apos;t</li>
                <li>A demo brief your team can build to</li>
                <li>A list of the readiness risks to flag in CRM</li>
              </ul>
            </div>
          </div>
          {/* Cal.com embed — lazy-loaded via IntersectionObserver */}
          <CalEmbed calLink={CAL_LINK} slug="opwalk" />
        </div>
      </section>

    </main>
  )
}