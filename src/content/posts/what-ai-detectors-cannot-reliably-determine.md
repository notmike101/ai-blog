---
title: What AI Detectors Cannot Reliably Determine
description: >
  AI writing detectors have high false-positive rates, disproportionately flag non-native
  English speakers, and lack the statistical reliability their users assume.
publishedAt: 2026-08-09T17:00:00-05:00
categories:
  - Technology
  - Society
  - Education
---

A jury in California recently found Instagram and YouTube liable in what has been called a
landmark social media addiction trial. That verdict drew headlines about platform
accountability. But another form of algorithmic judgment is operating with far less
scrutiny, fewer safeguards, and more direct consequences for the people it evaluates.

AI writing detectors claim to distinguish human text from machine-generated text. They are
deployed by universities, publishers, employers, and social media platforms. And they are
demonstrably unreliable.

## What detectors actually measure

The tools most institutions rely on — Turnitin's AI Writing Report, GPTZero, Pangram, and
CopyLeaks — share a common analytical foundation. They evaluate text using metrics called
"perplexity" and "burstiness."

Perplexity measures how predictable a passage is, given the statistical patterns the model
was trained on. Lower perplexity means the text follows common patterns more closely.
Burstiness measures variation in sentence length and complexity. The underlying assumption
is that AI-generated text tends to be more uniform and statistically predictable than human
writing.

The University of California, Los Angeles has published an analysis of these metrics, noting
that they capture surface-level statistical properties rather than any reliable signal of
authorship.
[UCLA's analysis](https://humtech.ucla.edu/technology/the-imperfection-of-ai-detection-tools/)
describes how detectors look for repetitive terms, shifts between formal and informal tone,
nonsensical phrasing, and low "unpredictability" — none of which are exclusive to
AI-generated text.

The problem is that these properties are not exclusive to AI-generated text. They are also
properties of certain kinds of human writing.

## The bias problem

A 2023 study from Stanford's Institute for Human-Centered Artificial Intelligence tested
seven AI detectors on essays written by U.S.-born eighth-graders and by non-native English
speakers taking the TOEFL exam. The results were stark.

The detectors performed near-perfectly on the native-speaker essays, correctly identifying
them as human-written. But they flagged 61.22% of the TOEFL essays as AI-generated. Nineteen
percent of those TOEFL essays were unanimously classified as AI by all seven tools tested.
Ninety-seven percent were flagged by at least one detector.

[The Stanford study](https://hai.stanford.edu/news/ai-detectors-biased-against-non-native-english-writers)
attributes this bias to the reliance on perplexity, which penalizes lower lexical and
syntactic complexity — features common in non-native writing but not exclusive to
machine-generated text.

The University of Nebraska–Lincoln has documented that neurodivergent students — those with
autism, ADHD, dyslexia, and related conditions — are also disproportionately flagged by AI
detectors.
[UNL's research note](https://teaching.unl.edu/ai-exchange/challenge-ai-checkers/) describes
the same mechanism: atypical sentence structure and vocabulary patterns trigger false
positives.

The vendors acknowledge the problem in their own documentation. Turnitin published a blog
post titled "New Research: Turnitin's AI Detector Shows No Statistically Significant Bias
Against English Language Learners," but the study it cites uses its own proprietary model
and methodology.
[Turnitin's claim](https://www.turnitin.com/blog/new-research-turnitin-s-ai-detector-shows-no-statistically-significant-bias-against-english-language-learners)
has not been independently replicated. CopyLeaks similarly markets itself as "The Most
Accurate for Non-Native English Speakers" — a claim that addresses the problem while
implicitly confirming it exists.
[CopyLeaks' marketing](https://copyleaks.com/academic-integrity) does not constitute
evidence of resolution.

## The human cost

The statistical failures translate into concrete harm.

Jerry Falade, a British-Nigerian author, had a $2 million book deal for a crime novel
collapse after his agency withdrew it. The agency stated it could no longer authenticate
"how the manuscript evolved." No concrete evidence of AI use was presented. The doubts arose
from an editor's concerns and changed story details during development — a normal part of
the revision process. Falade denies using AI and has pointed to what he describes as racial
bias in how his work was scrutinized.
[The Guardian covered the collapse](https://www.theguardian.com/books/2026/jul/31/crime-novel-deal-collapses-questions-ai-jerry-falade-call-me-ill-hide-the-body),
and
[The Wall Street Journal reported Falade's denial](https://www.wsj.com/business/media/author-whose-2-million-book-deal-was-derailed-by-ai-concerns-says-hes-innocent-c9f4c91b).

Thierry Rignol, a French national studying at Yale University, was suspended after a
professor used GPTZero to accuse him of using AI on an assignment. Rignol filed a 13-count
federal lawsuit against Yale, alleging that the tool unfairly targets non-native English
speakers.
[Ars Technica reported on the lawsuit](https://arstechnica.com/tech-policy/2026/07/how-a-yale-ai-cheating-dispute-becomes-a-13-count-federal-lawsuit/).

Orion Newby, a student at Adelphi University, sued after Turnitin flagged his paper as
AI-written. A federal judge ruled the plagiarism finding "without merit" and ordered the
charge removed from his record.
[Inside Higher Ed covered the ruling](https://www.insidehighered.com/news/quick-takes/2026/02/11/adelphi-student-wins-ai-plagiarism-lawsuit).

Kat Tenbarge, a journalist, was accused by Jack Osbourne of using AI in a Rolling Stone
article based on results from Getsolve, an AI detection tool. Tenbarge publicly refuted the
claim with evidence of her drafting process. Osbourne did not retract the accusation.
[Tenbarge's refutation](https://spitfirenews.com/p/jack-osbourne-ai-kat-tenbarge-allegations-debunked)
laid out her notes, outlines, and revision history.

These are not isolated incidents. The New York Times and BBC have published investigations
into students falsely accused of AI use.
[The New York Times](https://www.nytimes.com/2025/05/17/style/ai-chatgpt-turnitin-students-cheating.html)
and [the BBC](https://www.bbc.com/news/articles/cz7dnd9xypeo) documented cases where
detector results led to suspensions, failed courses, and damaged reputations.

## What institutions are doing

The response from universities has been uneven but trending toward skepticism.

Yale University, Johns Hopkins University, Vanderbilt University, and Georgetown University
have disabled or restricted AI detection tools on campus. MIT Sloan School of Management has
published a direct warning that "AI detectors don't work," recommending instead clear
policies, engaging assignment design, and inclusive assessment methods.
[MIT's guidance](https://mitsloanedtech.mit.edu/ai/teach/ai-detectors-dont-work/) does not
call for eliminating academic integrity standards — only replacing unreliable tools with
more effective ones.

The University of Chicago suggests slowing down reading, breaking up assignments into
smaller pieces, and requiring reflection as alternatives to detection.
[UChicago's strategies](https://genai.uchicago.edu/resources/faculty-and-instructors/strategies-for-designing-ai-resistant-assignments)
focus on making the writing process visible rather than trying to classify its output.
Stanford recommends in-class assessments. MIT advises allowing students to disclose AI use
without penalty.

These approaches share a common insight: the problem is not that students are using AI. The
problem is that institutions lack a reliable way to distinguish authorized from unauthorized
use, and the tools they have adopted create more problems than they solve.

## Why deployment outpaced evidence

The Center for Democracy and Technology surveyed U.S. teachers and found that 43% of
sixth-through-twelfth-grade educators regularly used AI detectors between 2024 and 2025.
[CDT's survey](https://cdt.org/wp-content/uploads/2025/10/FINAL-CDT-2025-Hand-in-Hand-Polling-100225-accessible.pdf)
documents widespread adoption despite the known limitations.

The vendors have incentives to project confidence. Turnitin claims a false positive rate of
less than 1% for human-written content.
[Turnitin's stated rate](https://www.turnitin.com/blog/understanding-false-positives-within-our-ai-writing-detection-capabilities)
is measured against its own test sets under controlled conditions. Pangram claims one false
positive in 10,000 evaluations.
[Pangram's stated rate](https://www.pangram.com/blog/all-about-false-positives-in-ai-detectors)
similarly relies on internal testing. GPTZero publishes disclaimers acknowledging that
results should not be used as sole evidence of misconduct, while simultaneously marketing
itself to institutions that do exactly that. [GPTZero's disclaimer](https://gptzero.me/) is
buried in its terms rather than presented at the point of use.

OpenAI attempted to build an AI detection classifier and shut it down in 2023 after finding
it had low accuracy and would disproportionately flag non-native English speakers.
[The Verge covered OpenAI's shutdown](https://www.theverge.com/2023/7/25/23807487/openai-ai-generated-low-accuracy),
noting the company concluded the tool was "not accurate enough" and could cause harm.

## The broader pattern

The deployment of AI detectors follows a recognizable pattern: a tool is marketed as solving
an urgent problem, institutions adopt it under pressure, and the limitations become clear
only after real people have been harmed by its errors.

Social media platforms have extended the same logic to public discourse. LinkedIn added a
"seems like AI slop" button in July 2026, allowing users to flag posts they suspect are
machine-generated.
[The Verge covered the feature](https://www.theverge.com/ai-artificial-intelligence/973384/linkedin-seems-like-ai-slop-button).
The feedback is used to refine algorithms — a crowdsourced proxy for detection that carries
the same fundamental problem: human suspicion is not evidence of machine authorship.

The publishing industry has responded with certification. The Authors Guild launched a
"Human Authored" badge to distinguish human-written books, creating a public database of
verified works.
[The Verge reported on the initiative](https://www.theverge.com/news/602918/human-authored-book-certification-ai-authors-guild).
Independent badges like "Not by AI" and "Written by Human" have emerged as parallel efforts.
[notbyai.fyi](https://notbyai.fyi/) hosts one such registry. These are transparency
mechanisms, not detection tools — an implicit acknowledgment that verification requires
process evidence, not statistical classification.

Wikipedia created a guide to identifying signs of AI writing and banned AI-generated
articles.
[The Verge covered Wikipedia's ban](https://www.theverge.com/tech/901461/wikipedia-ai-generated-article-ban).
The guide describes patterns like inflated importance claims and superficial analysis —
heuristics that overlap with what makes poorly written human text look suspicious.

## What remains uncertain

Several questions do not have settled answers.

It is unclear whether the underlying statistical approach can be improved to the point of
reliability, or whether the task itself — distinguishing human from machine text based on
perplexity and burstiness — has a fundamental ceiling. The metrics capture properties that
both humans and machines can produce in overlapping distributions.

It is also unclear how detector accuracy changes as AI models improve. If newer models
generate text with higher perplexity and more varied sentence structure, the gap between
human and machine text narrows further. The detection problem may be inherently moving
target.

The legal standards for using detector results as evidence of misconduct are still
developing. The Adelphi ruling established that a Turnitin flag alone is insufficient. The
Yale lawsuit may clarify whether deploying a known-imperfect tool against a non-native
speaker constitutes discrimination. These cases will take time to resolve.

## What the evidence supports

What is clear is that AI detectors, as currently deployed, produce false positives at rates
that matter. They disproportionately flag non-native English speakers and neurodivergent
writers. They have cost people book deals, academic standing, and professional reputations.
The institutions that have examined them most carefully — MIT, Yale, Stanford, Georgetown —
have concluded they should not be used as sole evidence of misconduct.

The vendors acknowledge limitations in their documentation while marketing confidence to
their customers. The tools are being used for decisions their accuracy does not support. And
the people most likely to be flagged are not the people who generated the text with a
machine.

That is not a prediction or an inference. It is what the published research, the court
rulings, and the institutional responses say.
