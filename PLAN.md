# TinyCongress Landing Page Plan

## Design Philosophy

**Ultra minimalist.** No navigation bar. Large header with title, short intro, table of contents, then sections. Each section answers exactly one question—if a sentence doesn't answer that question, cut it.

---

## Page Structure

### 1. Header (Above the Fold)

**Goal:** Orient the reader emotionally and morally in 5 seconds.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      TINY CONGRESS                          │
│                                                             │
│           Trusted communication at internet scale.          │
│                                                             │
│   Open infrastructure for identity, reputation, and         │
│   large-scale consensus.                                    │
│                                                             │
│   [One short paragraph about the problem/opportunity]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- **Title:** Tiny Congress
- **Headline:** Trusted communication at internet scale.
- **Subheadline:** Open infrastructure for identity, reputation, and large-scale consensus.
- **Intro paragraph:** The internet is great at broadcasting opinions, but terrible at expressing trust. TinyCongress is an open-source project to help people understand who they're hearing from, why they should trust them, and where genuine consensus exists.

No CTA here—CTA lives at the bottom.

---

### 2. Table of Contents

A simple anchor list to the sections below. Keeps the "read the whole thing" feel while allowing quick navigation.

- What's broken
- The vision
- How it exists
- What we're building
- What this is not
- Get involved

---

### 3. Section: What's Broken

**Question answered:** Why does this need to exist?

**Section header:** What's missing today

**Three tight bullets:**

1. **Identity without trust signals.** Anonymous speech dominates important conversations.
2. **Engagement without consensus.** Platforms optimize outrage for profit, not understanding.
3. **Centralized incentives.** Ad-driven systems reward noise over clarity.

**Optional closing line:** We don't need more speech. We need better signal.

---

### 4. Section: The Vision

**Question answered:** What's the big picture?

**Section header:** A different model for mass communication

**Core paragraph:**
TinyCongress explores how trusted identity and explicit reputation can enable large groups to communicate honestly, discover agreement, and disagree productively.

**Key properties (bullets):**
- Opinions are signed, not anonymous.
- Trust is personal, contextual, and explicit.
- Consensus is measured, not inferred by engagement.

**Positioning note:** This is infrastructure, not a social network.

---

### 5. Section: How It Exists

**Question answered:** Why should I trust the organizational model?

**Section header:** A public utility, not a platform

**Paragraph:**
TinyCongress aspires to follow the model of projects like Let's Encrypt: free, open-source infrastructure operated in the public interest. No ads. No engagement metrics. Funded by donations and sponsorships to keep incentives aligned with usefulness, not addiction.

**Principles (bullets):**
- Open source by default.
- Neutral base layer.
- Designed to be boring, reliable, and cheap to operate.

**Note:** Deliberately understated. Uses "aspires to" to honestly convey project status.

---

### 6. Section: What We're Building

**Question answered:** What are you actually making?

**Section header:** Two components

#### Component 1: Identity and Reputation Base Layer

A cryptographic identity system where people can make signed attestations about trust, security posture, and reputation across multiple dimensions.

**Bullets:**
- Device-based keys
- Explicit endorsements and denouncements
- Personal trust graphs, not global scores

#### Component 2: A Communication Demo

An experimental interface that shows what becomes possible when trust and identity are first-class primitives.

**Bullets:**
- Structured polling instead of comment threads
- Consensus discovery at scale
- Views filtered by who you trust

**Framing:** Call it a demonstration, not the end product. Keeps scope honest.

---

### 7. Section: What This Is Not

**Question answered:** What common misreadings should I avoid?

**Section header:** What this is not

**Bullets:**
- Not a social credit system.
- Not a replacement for elections.
- Not an algorithmic truth machine.
- Not optimized for growth or engagement.

**Purpose:** Directly defuses common objections and bad-faith readings.

---

### 8. Section: Get Involved (CTA)

**Question answered:** How do I engage?

**Section header:** Get involved

**Paragraph:**
TinyCongress is in early development. If this resonates, we'd love to hear from you.

**Form with two checkboxes:**
- [ ] Notify me when an alpha is available
- [ ] Send me project updates (at most monthly)

**Email input field + Submit button**

**Secondary link:** View the source on GitHub

---

## Visual Design Notes

### Layout
- Single column, centered content
- Max-width ~700px for readability (prose width)
- Generous vertical spacing between sections
- No sticky header, no navigation bar

### Typography
- Large, bold title (maybe 3-4rem)
- Clear hierarchy: section headers > body text
- System font stack (keep current)
- High contrast, dark text on light background

### Color
- Minimal use of color
- Maybe a single accent color for links/interactive elements
- Keep the blue (#0077cc) but use sparingly

### Sections
- Each section clearly separated (whitespace, maybe subtle hr)
- Section headers as anchor targets for TOC
- Consistent left alignment

### Form
- Simple, inline form at bottom
- Two checkboxes, email input, submit button
- No heavy styling—matches minimal aesthetic

---

## Implementation Approach

### Files to Modify

1. **`src/index.njk`** - Complete rewrite of page content
2. **`src/css/style.css`** - Significant CSS updates for new layout
3. **`src/_includes/base.njk`** - Simplify: remove header/nav, keep minimal shell

### New Considerations

- **Form handling:** Need a backend for email signup. Options:
  - Formspree (simple, free tier)
  - Netlify Forms (if hosting moves)
  - Custom endpoint (more work)
  - For now: can stub with mailto link or link to a Google Form

- **Anchors:** Add `id` attributes to each section for TOC links

### Order of Work

1. Strip down `base.njk` to minimal shell (no nav header)
2. Restructure `index.njk` with new sections
3. Update CSS for prose-focused, minimal layout
4. Add TOC with anchor links
5. Add signup form (initially can be placeholder/external link)
6. Test responsiveness
7. Final polish

---

## Open Questions

1. **Form backend:** What service to use for collecting signups? (Formspree? Google Form? Custom?)
2. **GitHub link placement:** In TOC area? Footer? Both?
3. **Footer:** Keep minimal footer with copyright + repo links, or remove entirely?
