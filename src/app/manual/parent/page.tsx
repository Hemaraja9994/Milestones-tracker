'use client';

import React from 'react';
import ManualLayout, {
  Callout,
  Figure,
  PrintButton,
  Section,
  Step,
} from '@/components/manual/ManualLayout';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { ASHA_ATTRIBUTION, ASHA_BANDS, ASHA_TOTAL_MILESTONES } from '@/data/ashaMilestones';
import MilestoneArt from '@/components/parent/MilestoneArt';

export default function ParentManual() {
  return (
    <ManualLayout
      audience="Guide for parents & caregivers"
      title="Following your child's milestones"
      subtitle="A short guide to tracking how your child listens, understands, plays and talks — from birth to six years."
    >
      <PrintButton />

      <Section number={1} title="What this is">
        <p>
          MilestonePath is a gentle way to keep track of what your child is doing — the sounds they
          make, the words they understand, how they play and listen. You tick what you have seen,
          and it keeps the picture for you.
        </p>
        <p>
          It holds {ALL_MILESTONES.length} milestones across {AGE_BANDS.length} age stages, drawn
          from CDC, ASHA, and Indian clinical sources including AIISH Mysuru.
        </p>
        <Callout tone="caution" title="This is not a test, and not a diagnosis">
          Children develop at their own pace, and healthy children vary a great deal. Nothing here
          tells you whether something is wrong. It is a record to help you notice, remember, and
          have a better conversation with your doctor or speech-language pathologist.
        </Callout>
      </Section>

      <Section number={2} title="Getting started">
        <Step n={1} title="Open the app and choose Parent Tracker" />
        <Step n={2} title="Add your child">
          <p className="text-[13px] text-ink-muted">
            Two things only: their name (or just initials, if you prefer) and their date of birth.
            That is enough for the app to show the right milestones for their age.
          </p>
        </Step>
        <Step n={3} title="If your baby was born early, add the weeks of pregnancy">
          <p className="text-[13px] text-ink-muted">
            The app then adjusts the ages for you, which is what a clinician would do. If your baby
            was born on time, leave it at 40.
          </p>
        </Step>
        <Callout tone="note">
          Everything you enter stays on your own phone or computer. There is no account, nothing is
          uploaded, and nobody else can see it.
        </Callout>
      </Section>

      <Section number={3} title="Choosing the age">
        <p>
          The app opens at the stage matching your child&apos;s age. You can move to any other
          stage — looking back at earlier ones is often reassuring, and looking ahead shows what
          tends to come next.
        </p>
        <Figure caption="The path across all age stages">
          <p className="text-[13px] leading-[1.65] text-ink-body">
            Each stop on the path is one age stage and shows how many milestones you have ticked
            there — for example <strong>3/5</strong>. A stop turns green when you have seen all of
            them, and amber once you have started.
          </p>
        </Figure>
      </Section>

      <Section number={4} title="Ticking a milestone">
        <p>For each one, choose the answer that fits what you have actually seen:</p>
        <Figure caption="The three answers">
          <ul className="flex flex-col gap-2.5 text-[13px] leading-[1.6]">
            <li>
              <span className="mr-2 inline-flex items-center rounded-full bg-achieved px-3 py-1 text-[12px] font-semibold text-white">
                Yes, doing it consistently
              </span>
              You see it regularly, not just once.
            </li>
            <li>
              <span className="mr-2 inline-flex items-center rounded-full border-[1.5px] border-emerging/50 px-3 py-1 text-[12px] font-semibold text-emerging-ink">
                Sometimes / Just starting
              </span>
              It is beginning to appear, but not every time.
            </li>
            <li>
              <span className="mr-2 inline-flex items-center rounded-full border-[1.5px] border-line-warm px-3 py-1 text-[12px] font-semibold text-ink-soft">
                Not yet seen
              </span>
              You have not noticed it yet.
            </li>
          </ul>
        </Figure>
        <p>
          There is no hurry and no wrong answer. &ldquo;Not yet seen&rdquo; is simply information —
          many milestones arrive over a range of months.
        </p>
      </Section>

      <Section number={5} title="What each area means" breakBefore>
        <div className="flex flex-col gap-3">
          {[
            ['auditory_hearing', 'Listening & hearing', 'Turning to sounds, noticing voices, responding to their name.'],
            ['language_receptive', 'Understanding', 'Following simple directions, knowing familiar words and objects.'],
            ['language_expressive', 'Talking & gesturing', 'Babbling, first words, pointing, putting words together.'],
            ['speech_articulation', 'Speech sounds', 'How clearly sounds and words are produced.'],
            ['social_pragmatic', 'Social & play', 'Taking turns, sharing attention, playing with others.'],
            ['cognitive', 'Thinking & problem solving', 'Working things out, sorting, remembering, pretending.'],
          ].map(([key, title, desc]) => (
            <div key={key} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-brand-600">
                <MilestoneArt name={key} size={30} />
              </span>
              <div>
                <p className="font-semibold text-ink">{title}</p>
                <p className="text-[13px] leading-[1.6] text-ink-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section number={6} title="The Communication Milestones checklist">
        <p>
          Alongside the main list there is a second checklist from the{' '}
          <strong>{ASHA_ATTRIBUTION.source}</strong> — {ASHA_TOTAL_MILESTONES} milestones covering
          hearing, speech and language from birth to 24 months, in ASHA&apos;s own words.
        </p>
        <p>Here the answers are simply:</p>
        <ul className="ml-5 list-disc text-[13px] leading-[1.7]">
          <li>
            <strong>Yes</strong> — you have seen it
          </li>
          <li>
            <strong>Not yet</strong> — you have looked, and not seen it yet
          </li>
          <li>
            <strong>Not sure</strong> — you have not had the chance to notice
          </li>
        </ul>
        <p>
          Each age range also has a <strong>&ldquo;What can I do to help?&rdquo;</strong> section
          with simple things to try at home — talking through your day, playing with sounds at bath
          time, naming pictures in a book.
        </p>
        <Callout tone="note" title="Speaking more than one language at home">
          Raising your child with Kannada, Hindi and English together is good for them and does not
          delay speech. Count the words they know in <em>all</em> your languages together.
        </Callout>
        <p className="text-[12px] leading-[1.6] text-ink-muted">
          Reproduced from {ASHA_ATTRIBUTION.source} — {ASHA_ATTRIBUTION.publication}.{' '}
          {ASHA_ATTRIBUTION.copyright}. Age ranges covered:{' '}
          {ASHA_BANDS.map((b) => b.label).join(', ')}.
        </p>
      </Section>

      <Section number={7} title="Sharing with your doctor or therapist">
        <p>
          <strong>Export Summary for Pediatrician / SLP</strong> produces a printable summary of
          what you have recorded. Taking it to an appointment is often more useful than trying to
          remember — it shows what you have seen, and when.
        </p>
      </Section>

      <Section number={8} title="When to ask someone">
        <p>
          Every child develops at their own pace. If a skill has not appeared yet, keep playing and
          talking together, and mention it at your next check-up.
        </p>
        <Callout tone="caution" title="Worth asking sooner rather than waiting">
          If your child does not meet many of the milestones for their age range, if they seem not
          to hear you, or if they lose a skill they previously had, speak to your pediatrician,
          audiologist or speech-language pathologist. Asking early costs nothing, and waiting is
          the only thing that cannot be undone.
        </Callout>
        <p className="text-[13px] text-ink-muted">
          To find a certified professional: {ASHA_ATTRIBUTION.findProfessional}
        </p>
      </Section>

      <Section number={9} title="Your information">
        <p>
          Everything you record stays in the browser on your own device. There is no account,
          nothing is sent anywhere, and it does not sync to another phone.
        </p>
        <p>
          If you are using a shared device, or you simply want to clear it, open{' '}
          <strong>Clinical Disclaimer &amp; Privacy</strong> and use{' '}
          <strong>Erase all data</strong>. It cannot be undone, so export anything you want to keep
          first.
        </p>
      </Section>
    </ManualLayout>
  );
}
