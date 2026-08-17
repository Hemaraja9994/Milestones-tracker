'use client';

import React from 'react';
import ManualLayout, {
  Callout,
  Figure,
  PrintButton,
  Section,
  Step,
  Table,
} from '@/components/manual/ManualLayout';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { HIGH_RISK_REGISTER_ITEMS, HRR_CATEGORIES } from '@/data/highRiskRegister';
import { CLINICAL_RED_FLAGS } from '@/data/redFlags';
import { ASHA_BANDS, ASHA_TOTAL_MILESTONES } from '@/data/ashaMilestones';
import { Badge, GaugeRow, StatusDotBadge } from '@/components/ui/Primitives';

export default function ClinicianManual() {
  // Every figure in this manual counts the live data set, so the manual cannot
  // quote a number the application no longer holds.
  const byDomain = ALL_MILESTONES.reduce<Record<string, number>>((acc, m) => {
    acc[m.domain] = (acc[m.domain] || 0) + 1;
    return acc;
  }, {});
  const citations = Array.from(new Set(ALL_MILESTONES.map((m) => m.citation)));
  const criticalCount = HIGH_RISK_REGISTER_ITEMS.filter((i) => i.weight === 'critical').length;

  return (
    <ManualLayout
      audience="User manual · Speech-Language Pathologists & Audiologists"
      title="Clinical surveillance with MilestonePath"
      subtitle="How the milestone set, corrected age, developmental age estimates, High Risk Register and reports work — and what each of them does not claim."
    >
      <PrintButton />

      <Section number={1} title="What this tool is, and is not">
        <p>
          MilestonePath is a <strong>developmental surveillance and documentation aid</strong>. It
          structures observation against published norms, keeps a dated record, and produces a
          report you can put in a file or hand to a colleague.
        </p>
        <Callout tone="caution" title="It is not an assessment instrument">
          It yields no standard scores, no percentiles and no diagnosis. The developmental age
          figures are non-standardised estimates derived from which milestones you marked, not
          test-derived ages. Nothing here substitutes for formal assessment, audiological
          diagnostics (BERA/DPOAE), or your clinical judgement.
        </Callout>
        <p>
          There is no account and no server. Everything is stored in the browser on the device you
          are using — see section 9.
        </p>
      </Section>

      <Section number={2} title="The milestone set">
        <p>
          {ALL_MILESTONES.length} milestones across {AGE_BANDS.length} age bands, from{' '}
          {AGE_BANDS[0].months} to {AGE_BANDS[AGE_BANDS.length - 1].months} months. Each carries a
          citation, a plain description, what to look for, and why it matters.
        </p>
        <Table
          head={['Domain', 'Items']}
          rows={[
            ['Receptive language (understanding)', byDomain['language_receptive'] || 0],
            ['Expressive language (speaking, gesturing)', byDomain['language_expressive'] || 0],
            ['Auditory & hearing', byDomain['auditory_hearing'] || 0],
            ['Speech & articulation', byDomain['speech_articulation'] || 0],
            ['Social & pragmatic', byDomain['social_pragmatic'] || 0],
            ['Cognitive', byDomain['cognitive'] || 0],
          ]}
        />
        <p className="text-[13px] text-ink-muted">
          Sources in the set: {citations.join(', ')}.
        </p>
      </Section>

      <Section number={3} title="Creating a child profile">
        <Step n={1} title="Professional Portal → + New Child Profile" />
        <Step
          n={2}
          title="Enter name or initials, and date of birth"
        >
          <p className="text-[13px] text-ink-muted">
            Initials are enough. Given that records sit unencrypted on the device, prefer initials
            or a file number on any shared machine.
          </p>
        </Step>
        <Step n={3} title="Enter gestational weeks">
          <p className="text-[13px] text-ink-muted">
            This is what drives corrected age. Leave at 40 for a term birth. Below 37 weeks the
            profile is automatically flagged with a prematurity risk factor.
          </p>
        </Step>
        <Step n={4} title="Record home languages and newborn hearing screening outcome">
          <p className="text-[13px] text-ink-muted">
            A <em>Referred</em> screening result raises an alert in the clinical snapshot.
          </p>
        </Step>
      </Section>

      <Section number={4} title="Corrected age">
        <p>
          For births under 37 weeks, MilestonePath computes a corrected age and uses it — not the
          chronological age — to choose the recommended age band and to judge delay. Both ages are
          shown, so the record is never ambiguous about which was applied.
        </p>
        <Callout tone="note">
          Correction is applied throughout the tool, including the High Risk Register and the
          developmental age estimates. Confirm the gestational weeks are right before reading any
          estimate for a preterm child.
        </Callout>
      </Section>

      <Section number={5} title="Recording an assessment" breakBefore>
        <p>
          Open a child&apos;s clinical file, filter by age band and domain, and set a status per
          milestone. Four tiers, deliberately distinct:
        </p>
        <Table
          head={['Status', 'Means', 'Counts as mastered']}
          rows={[
            ['Observed by clinician', 'You saw it in session', 'Yes'],
            ['Reported by parent', 'Caregiver reports it; you did not observe it', 'Yes'],
            ['Emerging / inconsistent', 'Present but not reliable', 'No — tracked separately'],
            ['Not yet observed', 'Not seen, not reported', 'No'],
          ]}
        />
        <p>
          Keeping <em>reported</em> apart from <em>observed</em> matters at review: it tells you
          which of today&apos;s picture you witnessed and which you took on report.
        </p>
        <Figure caption="Status selector, as it appears on each milestone row">
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Observed by Clinician</Badge>
            <Badge variant="info">Reported by Parent</Badge>
            <Badge variant="warning">Emerging / Inconsistent</Badge>
            <Badge variant="default">Not Yet Observed</Badge>
          </div>
        </Figure>
        <p>
          Per-milestone clinical notes take phonetic transcription or behavioural detail. Session
          impressions and recommendations are captured at the foot of the file.
        </p>
      </Section>

      <Section number={6} title="Developmental age estimates">
        <p>
          The snapshot estimates a receptive, expressive and auditory age by finding the highest
          age band in which the child has mastered the milestones for that domain, then adjusting
          for partially mastered bands above it.
        </p>
        <Figure caption="Developmental age snapshot — live component">
          <div className="flex flex-col gap-4">
            <GaugeRow
              label="Receptive Language Age"
              valueLabel="13 mo"
              value={13}
              max={18}
              colorClass="bg-brand-600 dark:bg-brand-400"
            />
            <GaugeRow
              label="Expressive Language Age"
              valueLabel="9 mo"
              value={9}
              max={18}
              colorClass="bg-emerging"
            />
            <GaugeRow
              label="Auditory Behavioural Age"
              valueLabel="12 mo"
              value={12}
              max={18}
              colorClass="bg-achieved"
            />
          </div>
        </Figure>
        <Callout tone="caution" title="Read these as a shape, not a score">
          A delay flag raises when the estimate trails the effective age by more than 25% or three
          months. That is a prompt to look, not a finding. A gap of four months or more between
          receptive and expressive raises a separate note — the late-talker pattern — which again
          is a prompt for assessment, not a conclusion.
        </Callout>
      </Section>

      <Section number={7} title="High Risk Register">
        <p>
          {HIGH_RISK_REGISTER_ITEMS.length} risk indicators across {HRR_CATEGORIES.length}{' '}
          categories, drawn from JCIH 2019 and Indian RBSK / AIISH surveillance.{' '}
          {criticalCount} are weighted critical.
        </p>
        <p>Each item asks the plain-language question first, with the clinical title beneath it, so the same checklist works with a caregiver in the room. When an item is marked present you record the source of information — hospital record, caregiver report, direct observation, or screening test.</p>
        <Table
          head={['Triage level', 'Raised when']}
          rows={[
            ['High risk — prompt referral indicated', '1 or more critical indicators, or 3+ moderate'],
            ['Elevated risk — active surveillance', '1 or more moderate indicators'],
            ['No elevated risk — routine tracking', 'No positive indicators'],
          ]}
        />
        <Figure caption="Triage levels">
          <div className="flex flex-wrap gap-2">
            <StatusDotBadge status="high_risk" label="High risk" />
            <StatusDotBadge status="elevated_risk" label="Elevated risk" />
            <StatusDotBadge status="no_elevated_risk" label="No elevated risk" />
          </div>
        </Figure>
        <Callout tone="note">
          The register is a triage screen. A positive result warrants formal audiological
          diagnostics and speech-language assessment; it does not itself establish anything.
        </Callout>
        <p className="text-[13px] text-ink-muted">
          Separately, {CLINICAL_RED_FLAGS.length} clinical red flags are defined against specific
          band-and-domain combinations and surface in the snapshot when the matching milestone is
          unmet at or beyond its age.
        </p>
      </Section>

      <Section number={8} title="ASHA Communication Milestones checklist" breakBefore>
        <p>
          A parallel checklist reproducing ASHA&apos;s parent handouts verbatim —{' '}
          {ASHA_TOTAL_MILESTONES} items across {ASHA_BANDS.length} ASHA age bands, birth to 24
          months. It runs alongside the main set and does not feed the developmental age estimates.
        </p>
        <Table
          head={['ASHA band', 'Items']}
          rows={ASHA_BANDS.map((b) => [b.label, b.milestones.length])}
        />
        <p>
          Caregivers answer <strong>Yes</strong>, <strong>Not yet</strong>, or{' '}
          <strong>Not sure</strong>. &ldquo;Not sure&rdquo; is stored distinctly but scores the same
          as not-yet-observed — a caregiver who has not had the chance to observe is saying
          something different from one who looked and did not see, and the record keeps that
          difference.
        </p>
        <Callout tone="note" title="Attribution">
          These milestones and the &ldquo;What can I do to help?&rdquo; tips are reproduced from the
          American Speech-Language-Hearing Association&apos;s Communication Milestones handouts and
          are copyrighted by ASHA. The in-app page carries the attribution and links to
          asha.org/profind.
        </Callout>
      </Section>

      <Section number={9} title="Data, privacy and shared devices">
        <p>
          Child profiles, session records and checklist answers are held in this browser&apos;s
          local storage. There is no account, no upload and no sync. That keeps data off any
          server — and means it stays on the device until someone removes it.
        </p>
        <Callout tone="caution" title="On a shared or clinic device">
          Storage is unencrypted and persists after the tab closes. Use{' '}
          <strong>Data on this device → Erase all data</strong> on the Professional Portal or the
          privacy page when you finish a session. Export any report you need first; there is no
          server copy to restore from.
        </Callout>
        <p>
          The same panel reports how many profiles and sessions are held, and can load or remove
          the demonstration profiles used for training.
        </p>
      </Section>

      <Section number={10} title="Reports">
        <p>
          From a child&apos;s clinical file, <strong>Export Clinical PDF</strong> produces a
          surveillance report: identifiers, chronological and corrected age, the estimates, domain
          mastery, flagged items, your impressions and recommendations, and the citation set. The
          High Risk Register has its own triage report.
        </p>
        <p className="text-[13px] text-ink-muted">
          Reports print through the browser. Choose A4 and enable background graphics so status
          colours survive.
        </p>
      </Section>
    </ManualLayout>
  );
}
