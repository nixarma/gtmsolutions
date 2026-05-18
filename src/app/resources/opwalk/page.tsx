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
 * See <PhaseStepper> below - it is already promoted to 'use client'.
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
  failureMode: string
  doThis: string
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
    aim: 'Understand who you are talking to, what they own, and which process is worth mapping in detail. You are choosing the right thread to pull - not pulling all of them.',
    failureMode: 'The prospect jumps straight to a specific tool or pain point and you follow them - skipping the process map entirely.',
    doThis: 'Redirect with: "Before we go there - help me understand the full picture of what your team owns. I want to make sure we\'re looking at the right part of the workflow."',
    intro: 'Establish scope before any process detail. You are orienting, not interrogating.',
    questions: [
      'Walk me through what your team is responsible for - end to end.',
      'Where does the process start - what triggers it?',
      'Which process would have the highest impact if it ran faster or more consistently?',
      'How many people are involved in this process? Across which teams?',
    ],
  },
  {
    num: '02', id: 'phase-2',
    label: 'Current State Map',
    durationMin: '15 min',
    aim: 'Build a shared, accurate picture of how the work flows today - step by step, system by system. This map becomes the foundation for every AI conversation that follows.',
    failureMode: 'The prospect describes how things should work, not how they actually work today. You end up mapping a fiction.',
    doThis: 'Anchor them with: "Walk me through the last time this actually happened - what did you do, step by step?" Real instances beat general descriptions every time.',
    intro: 'Build a step-by-step picture of how the work actually flows today. No assumptions.',
    questions: [
      'Walk me through exactly what happens from trigger to output.',
      'What does the handoff look like between teams at that point?',
      'What systems or tools are involved at each step?',
      'Where do things slow down - or stop - most often?',
      'Is this the same every time, or does it vary by case?',
      'Do you need different workflows in other geographies?',
    ],
  },
  {
    num: '03', id: 'phase-3',
    label: 'Process Deep Dive',
    durationMin: '20 min',
    aim: 'Surface the AI signal data hidden inside each process step - volume, consistency, input quality, and decision complexity. What looks like a workflow conversation is actually a readiness assessment.',
    failureMode: 'You get surface answers - "it varies," "depends on the case" - and move on. The AI readiness data never materialises.',
    doThis: 'Stay on the step. "When it varies, what does that look like? Give me the two or three most common versions." Specificity is the whole point of this phase.',
    intro: 'Interrogate each step for volume, consistency, and decision complexity - these are your AI signal indicators.',
    split: true,
    questions: [
      'Who else is involved at this step?',
      'How often does this happen - and at what volume?',
      'Where does this information come from? How consistent is it?',
      'Does this step require human judgment, or is it mostly rule-based?',
      'Are there dependencies on other teams?',
      'What would you do if this constraint didn\u2019t exist at all?',
    ],
    captures: [
      'Tools and systems used at each step',
      'Manual, repetitive steps - high-volume tasks are AI candidates',
      'Handoffs between teams - where data changes hands',
      'Wait times and delays - especially approval or review bottlenecks',
      'Data re-entry and format inconsistency - signals poor AI readiness',
      'Frustrations - around speed, scale, or consistency',
      'Tasks done the same way every time - strongest AI signal',
    ],
  },
  {
    num: '04', id: 'phase-4',
    label: 'Pain Point Deep Dive',
    durationMin: '10 min',
    aim: 'Turn a surface-level frustration into a quantified business problem. You need frequency, impact, and stakeholder breadth before you can build a credible business case or a focused demo.',
    failureMode: 'The prospect can\'t quantify. You accept "it takes a while" or "it happens a lot" and move on. The business case stays vague.',
    doThis: 'Estimate together. "If you had to guess - ten times a month? Fifty? And when it goes wrong, are we talking hours of rework or days?" A rough number is more useful than no number.',
    intro: 'Pick 1\u20132 pain points surfaced in Phase 3 and go deep. This is where the business case is built.',
    questions: [
      'What happens immediately upstream and downstream of this step?',
      'When this step is delayed or wrong, which downstream processes also break?',
      'In a typical month, how many times does this happen?',
      'What\u2019s the variance between best and worst case?',
      'Is the input consistent enough to automate, or does it vary too much?',
      'What\u2019s the impact when this goes wrong?',
      'What is the financial exposure of failure here - revenue risked, penalties, or cost of workaround?',
      'When this comes up in your leadership meetings, who raises it - and how is it framed?',
      'Who would need to sign off on a change to how this works - and which of them would object?',
      'Who in your organization would need to support a change to how this works?',
    ],
  },
  {
    num: '05', id: 'phase-5',
    label: 'Wrap-up & Next Steps',
    durationMin: '5 min',
    aim: 'Leave the prospect feeling heard, and leave yourself with a clear brief. A confirmed summary prevents misalignment in the demo stage. A committed next step prevents the deal from going quiet.',
    failureMode: 'You summarize, the prospect agrees, and you close without a specific committed next step. The deal goes quiet because nobody owns what happens next.',
    doThis: 'Name it explicitly. "So the next step is X - I\'ll send the summary by end of day. Can we get thirty minutes in the calendar for [specific person] by [specific date]?" Vague agreement is not a next step.',
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
  { num: '5 - 7', suf: '', label: 'Process steps' },
  { num: '3', suf: '', label: 'Pain points' },
  { num: '80', suf: '%+', label: 'Prospect talk time' },
]

const SIGNALS_GOOD = [
  { label: 'Strong AI candidate', body: 'High volume, consistent inputs, rule-based steps, clear output. The process runs the same way every time.' },
  { label: 'Transformation opportunity', body: 'Something they can\u2019t do at all today - scale, speed, or language coverage - not just doing the same thing faster.' },
  { label: 'Executive alignment', body: 'The pain connects directly to a KBR the CEO or board is already tracking - revenue, cost, or risk. Someone at the top has a reason to care.' },
  
]
const SIGNALS_RISK = [
  { label: 'Weak AI candidate', body: 'Low frequency, high variability, heavy editorial judgment, or data that is inconsistent and unstructured.' },
  { label: 'Data readiness risk', body: 'Inconsistent taxonomy, unstructured content, or data spread across disconnected systems. AI will not fix a messy foundation.' },
  { label: 'Change readiness risk', body: 'Strong process ownership by one person, previous failed automation attempts, or no executive sponsor for change. Without a sponsor, the deal will stall.' },
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
  { label: 'Document the flow', body: 'Capture the process map and flag each step as strong, weak, or unclear AI candidate.' },
  { label: 'Send the summary', body: 'Thank you note with your initial read on where AI fits - and, importantly, where it doesn\u2019t.' },
  { label: 'Tag in CRM', body: 'Log AI readiness signals: volume, data quality, integration constraints, change readiness.' },
  { label: 'Build the demo brief', body: 'Map the 2\u20133 strongest AI use-cases to specific capabilities. That\u2019s your demo. Nothing else.' },
]

/* Testimonials - placeholder copy. Replace with real AE/SE quotes before shipping. */
type TestimonialVariant = 'default' | 'linen' | 'ink'
type TestimonialData = {
  quote: string; name: string; role: string; company: string
  initials: string; variant?: TestimonialVariant
}

const TESTIMONIALS: Record<'midPhases' | 'midPractices' | 'preCta', TestimonialData> = {
  midPhases: {
    quote: 'This is such a consultative approach, and our prospects love it! They open up in a way they don\u2019t in a typical discovery call. This is my go-to approach before validation demos now.',
    name: 'Senior Sales Engineer', role: 'Enterprise SaaS', company: '',
    initials: 'SE', variant: 'default',
  },
  midPractices: {
    quote: 'When you walk their workflow with them [your prospects], they start connecting dots themselves. I\u2019ve had prospects hand me 80% of the business case before my SE and I demoed to their team.',
    name: 'Enterprise AE', role: 'Enterprise SaaS', company: '',
    initials: 'SE', variant: 'linen',
  },
  preCta: {
    quote: 'We ran an Operational Walkthrough with a prospect and identified exactly where they were losing time. By the end of the call we were already in a financial conversation. No demo, no pitch. The deal moved faster than anything else in our pipeline that quarter!',
    name: 'Senior Sales Engineer', role: 'Enterprise SaaS', company: '',
    initials: 'SE', variant: 'ink',
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
            <div className="sub-eyebrow">Questions to ask</div>
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

        <div className="sub-eyebrow">Failure mode</div>
        <div className="failure-block">
          <p className="failure-mode">{phase.failureMode}</p>
          <p className="failure-do"><span className="failure-do-label">Do this instead</span>{phase.doThis}</p>
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
              <Link href="/resources">Resources</Link>
              <span className="sep">›</span>
              <span className="here">Operational Walkthrough</span>
            </div>
            <div className="hero-eyebrows">
              <span className="chip chip--on-dark"><span className="dot" />Discovery Framework</span>
              <span className="chip chip--sage-on-dark"><span className="dot" />AI Variant</span>
            </div>
            <h1>Find where AI <em>actually fits</em><br />in your prospect&apos;s workflow.</h1>
            <p className="lede">
              Stop demoing AI features nobody asked for.<br /><br />
              The Operational Walkthrough is a 5-phase structured discovery process for AEs and SEs - built around the buyer&apos;s process, not your feature list.
            </p>
            <div className="hero-meta">
              <span>Read time <b>9 min</b></span>
              <span>For <b>AEs &amp; SEs</b></span>
              <span>Use it <b>pre-demo</b></span>
            </div>
          </div>

          {/* Anatomy of the walkthrough card */}
          <aside className="anatomy" aria-label="Anatomy of the walkthrough">
            <div className="anatomy-head">
              <span>Anatomy of the walkthrough</span>
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
        <p className="stats-eyebrow">Measures of success</p>
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

      {/* ── OpWalk difference diagram ────────────────────────── */}
      <section className="diff-section">
        <div className="diff-inner">
          <div className="diff-head">
            <span className="diff-eyebrow">The OpWalk difference</span>
            <h2 className="diff-h2">Demo what moves the needle. <em>Skip what doesn&apos;t.</em></h2>
            <p className="diff-caveat">Your prospect&apos;s workflow will look different. The principle is the same.</p>
          </div>
          <div className="diff-diagram-wrap">

            {/* ── DESKTOP SVG ── */}
            <svg className="diff-svg diff-svg--desktop" viewBox="-10 80 1040 320"
              xmlns="http://www.w3.org/2000/svg" aria-label="Process flow diagram">
              <defs>
                <marker id="arr-d" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#474747" />
                </marker>
                <filter id="glow-d" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="7" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* CONNECTORS */}
              {/* 01→02 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="150" y1="240" x2="167" y2="240" markerEnd="url(#arr-d)" />
              {/* 02 top → elbow right → 03 left */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M244,208 L244,148 Q244,125 269,125 L329,125" markerEnd="url(#arr-d)" />
              {/* 02 bottom → elbow right → 04 left */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M244,272 L244,332 Q244,355 269,355 L329,355" markerEnd="url(#arr-d)" />
              {/* 03 right → elbow down → 05 top */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M484,125 L565,125 Q590,125 590,150 L590,201" markerEnd="url(#arr-d)" />
              {/* 04 right → elbow up → 05 bottom */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M484,355 L565,355 Q590,355 590,330 L590,279" markerEnd="url(#arr-d)" />
              {/* 05→06 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="660" y1="240" x2="679" y2="240" markerEnd="url(#arr-d)" />
              {/* 06→07 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="834" y1="240" x2="853" y2="240" markerEnd="url(#arr-d)" />

              {/* NODES */}
              {/* 01 Intake / triage */}
              <g>
                <rect x="10" y="208" width="140" height="64" rx="12"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="80" y="232" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">01</text>
                <text x="80" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="14" fill="rgba(255,255,255,0.72)">Intake / triage</text>
              </g>
              {/* 02 Assign / investigate */}
              <g>
                <rect x="174" y="208" width="140" height="64" rx="12"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="244" y="232" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">02</text>
                <text x="244" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="14" fill="rgba(255,255,255,0.72)">Assign / investigate</text>
              </g>
              {/* 03 Escalate — red */}
              <g filter="url(#glow-d)">
                <rect x="336" y="93" width="148" height="64" rx="12"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="410" y="117" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">03</text>
                <text x="410" y="137" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="15" fontWeight="600" fill="#FFFFFF">Escalate</text>
              </g>
              {/* 04 Enrich — red */}
              <g filter="url(#glow-d)">
                <rect x="336" y="323" width="148" height="64" rx="12"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="410" y="347" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">04</text>
                <text x="410" y="367" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="15" fontWeight="600" fill="#FFFFFF">Enrich</text>
              </g>
              {/* 05 Validate */}
              <g>
                <rect x="520" y="208" width="140" height="64" rx="12"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="590" y="232" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">05</text>
                <text x="590" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="14" fill="rgba(255,255,255,0.72)">Validate</text>
              </g>
              {/* 06 Resolve — red */}
              <g filter="url(#glow-d)">
                <rect x="686" y="208" width="148" height="64" rx="12"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="760" y="232" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">06</text>
                <text x="760" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="15" fontWeight="600" fill="#FFFFFF">Resolve</text>
              </g>
              {/* 07 Document / Close */}
              <g>
                <rect x="860" y="208" width="140" height="64" rx="12"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="930" y="232" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">07</text>
                <text x="930" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="14" fill="rgba(255,255,255,0.72)">Document / Close</text>
              </g>
            </svg>

            {/* ── MOBILE SVG ── */}
            <svg className="diff-svg diff-svg--mobile" viewBox="0 10 410 448"
              xmlns="http://www.w3.org/2000/svg" aria-label="Process flow diagram">
              <defs>
                <marker id="arr-m" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#474747" />
                </marker>
                <filter id="glow-m" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="6" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* CONNECTORS */}
              {/* 01→02 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="192" y1="64" x2="192" y2="93" markerEnd="url(#arr-m)" />
              {/* 02 → 03 elbow left */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M192,143 L192,169 Q192,192 124,192" markerEnd="url(#arr-m)" />
              {/* 02 → 04 elbow right */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M192,143 L192,169 Q192,192 252,192" markerEnd="url(#arr-m)" />
              {/* 03 → 05 elbow right */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M79,213 L79,247 Q79,269 141,269" markerEnd="url(#arr-m)" />
              {/* 04 → 05 elbow left */}
              <path fill="none" stroke="#474747" strokeWidth="1.5"
                d="M304,213 L304,247 Q304,269 244,269" markerEnd="url(#arr-m)" />
              {/* 05→06 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="192" y1="290" x2="192" y2="320" markerEnd="url(#arr-m)" />
              {/* 06→07 */}
              <line stroke="#474747" strokeWidth="1.5"
                x1="192" y1="369" x2="192" y2="399" markerEnd="url(#arr-m)" />

              {/* NODES */}
              {/* 01 Intake / triage */}
              <g>
                <rect x="104" y="22" width="176" height="42" rx="9"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="192" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">01</text>
                <text x="192" y="53" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fill="rgba(255,255,255,0.72)">Intake / triage</text>
              </g>
              {/* 02 Assign / investigate */}
              <g>
                <rect x="104" y="101" width="176" height="42" rx="9"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="192" y="117" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">02</text>
                <text x="192" y="132" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fill="rgba(255,255,255,0.72)">Assign / investigate</text>
              </g>
              {/* 03 Escalate — red */}
              <g filter="url(#glow-m)">
                <rect x="11" y="171" width="136" height="42" rx="9"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="79" y="187" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">03</text>
                <text x="79" y="202" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fontWeight="600" fill="#FFFFFF">Escalate</text>
              </g>
              {/* 04 Enrich — red */}
              <g filter="url(#glow-m)">
                <rect x="236" y="171" width="136" height="42" rx="9"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="304" y="187" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">04</text>
                <text x="304" y="202" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fontWeight="600" fill="#FFFFFF">Enrich</text>
              </g>
              {/* 05 Validate */}
              <g>
                <rect x="104" y="248" width="176" height="42" rx="9"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="192" y="264" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">05</text>
                <text x="192" y="279" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fill="rgba(255,255,255,0.72)">Validate</text>
              </g>
              {/* 06 Resolve — red */}
              <g filter="url(#glow-m)">
                <rect x="104" y="327" width="176" height="42" rx="9"
                  fill="#6B1614" stroke="#99332F" strokeWidth="2"/>
                <text x="192" y="343" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.08em">06</text>
                <text x="192" y="358" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fontWeight="600" fill="#FFFFFF">Resolve</text>
              </g>
              {/* 07 Document / Close */}
              <g>
                <rect x="104" y="406" width="176" height="42" rx="9"
                  fill="#1e1e1e" stroke="rgba(0,0,0,0)" strokeWidth="1.5"/>
                <text x="192" y="422" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">07</text>
                <text x="192" y="437" textAnchor="middle" fontFamily="DM Sans,sans-serif"
                  fontSize="13" fill="rgba(255,255,255,0.72)">Document / Close</text>
              </g>
            </svg>

          </div>
          <p className="diff-scroll-hint">← scroll to see full flow →</p>

          {/* Legend */}
          <div className="diff-legend">
            <div className="diff-legend-item">
              <span className="diff-legend-node diff-legend-node--active">STEP</span>
              <div className="diff-legend-text">
                <span className="diff-legend-title">Where AI moves the needle</span>
                <span className="diff-legend-sub">High volume, consistent input, clear output. Demo these.</span>
              </div>
            </div>
            <div className="diff-legend-item">
              <span className="diff-legend-node">STEP</span>
              <div className="diff-legend-text">
                <span className="diff-legend-title">Not the focus</span>
                <span className="diff-legend-sub">Low AI signal. Acknowledge and move on.</span>
              </div>
            </div>
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
            A demo built before a walkthrough is a guess.<br /><br />A demo built after a walkthrough
            is a <em>response to a problem</em> the prospect has already told you matters.<br /><br />Don't guess.
          </div>
          <div className="attr">The point of view</div>
        </div>
      </section>

      {/* ── Testimonial - after the framework ────────────────── */}
      <Testimonial {...TESTIMONIALS.midPhases} />

      {/* ── AI Readiness scorecard ────────────────────────────── */}
      <section className="section signals">
        <div className="section-inner">
          <div className="signals-head">
            <span className="chip chip--red">What to look for</span>
            <h2 style={{ marginTop: '1.25rem' }}>AI Readiness <em>signals</em> &amp; risks</h2>
            <p>
              Sort what you hear into two columns as you go. By the end of the call,
              you should know which signal each step belongs to - and whether this
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
            <p>The walkthrough is a buyer-centric conversation. These habits keep you on that side of the table - and out of demo-mode reflexes.</p>
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

      {/* ── Testimonial - between Practices and Flags ─────────── */}
      <Testimonial {...TESTIMONIALS.midPractices} />

      {/* ── Red Flags ─────────────────────────────────────────── */}
      <section className="flags">
        <div className="flags-inner">
          <div className="flags-head">
            <span className="chip chip--red">Overheard in discovery</span>
            <h2><em>Red flags</em> worth pausing for</h2>
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
            <p>The walkthrough is only valuable if you act on it. Four moves between the call and the demo.</p>
          </div>
          <div className="timeline">
            {POST_INTERVIEW.map((s, i) => (
              <div className="tl-step" key={i}>
                <span className="marker">{i + 1}</span>
                <h4>{s.label}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          {/* ── Summary email template ── */}
          <div className="email-template">
            <div className="email-template-label">Summary email template</div>
            <div className="email-field">
              <span className="email-field-key">Subject</span>
              <span className="email-field-val">Our demo on [date]</span>
            </div>
            <div className="email-body">
              <p>Hi [First Name],</p>
              <p>Thank you for walking us through your workflow today. The level of detail you shared gave us a clear picture of how your team operates - and where the real pressure points are.</p>
              <p>Based on what you shared, the areas we&apos;d focus on are:</p>
              <ul>
                <li>[Bottleneck 1]</li>
                <li>[Bottleneck 2]</li>
                <li>[Bottleneck 3]</li>
              </ul>
              <p>Our demo will be built around these specifically. You&apos;ll see how [Product] addresses [Outcome 1], [Outcome 2], and [Outcome 3].</p>
              <p>I&apos;ll be in touch shortly to confirm the details. In the meantime, if anything we discussed prompts further questions, feel free to reach out directly.</p>
              <p className="email-sig">Best regards,<br />[Your name]</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Testimonial - before CTA ──────────────────────────── */}
      <Testimonial {...TESTIMONIALS.preCta} />

      {/* ── Download templates ───────────────────────────────── */}
      <section className="downloads">
        <div className="downloads-inner">
          <div className="downloads-head">
            <p className="kicker kicker--ink">Take it into your next meeting</p>
            <h2>Stop winging discovery. <em>Run the OpWalk.</em></h2>
            <p>Five-phase structured template for immediate use..</p>
          </div>
          <div className="downloads-grid">
          {/*  <div className="download-card">
              <div className="download-card-top">
                <span className="download-logo download-logo--miro">M</span>
                <span className="download-platform">Miro</span>
              </div>
              <p className="download-desc">Operational Walkthrough template for Miro. Five-phase board, AI signals legend included.</p>
              <a href="#" className="download-btn">Download Miro template</a>
            </div> */}
            <div className="download-card">
              <div className="download-card-top">
                <span className="download-logo download-logo--figjam">F</span>
                <span className="download-platform">FigJam</span>
              </div>
              <p className="download-desc">Five-phase board, AI signals legend included.</p>
              <a href="/downloads/opwalk-template.jam" className="download-btn">Download FigJam template</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA + Booking embed ───────────────────────────────── */}
      <section className="cta" id="booking">
        <div className="cta-inner">
          <div>
            <p className="kicker">Is your team struggling to position your AI capabilities?</p>
            <h2>Let&apos;s talk <em>through it.</em></h2>
            <p>
              A focused one-on-one for sales leaders. When discovery is built around your
              prospect&apos;s processes - not your feature list - your demos land differently.
              Prospects arrive at next steps with confidence, not hesitation.
            </p>
            <div className="cta-card">
              <h3>What you&apos;ll leave with</h3>
              <ul>
                <li>Clarity on where your team&apos;s discovery is leaving decision confidence on the table</li>
                <li>Clarity on which changes to make - and in what order</li>
                <li>Clarity on whether structured, reinforced coaching is the right decision for your team</li>
              </ul>
            </div>
          </div>
          {/* Cal.com embed - lazy-loaded via IntersectionObserver */}
          <CalEmbed calLink={CAL_LINK} slug="opwalk" />
        </div>
      </section>

    </main>
  )
}