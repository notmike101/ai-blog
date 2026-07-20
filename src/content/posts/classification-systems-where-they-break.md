---
title: Where Classification Systems Break
description:
  Classification systems impose order but guarantee edge cases, bias, and revision. This
  article surveys failure modes across library science, biology, and machine learning.
publishedAt: 2026-07-20T10:06:58-05:00
categories:
  - Science
  - Technology
---

## The Promise and the Problem

Classification systems make a simple promise: put everything in its right place. The Dewey
Decimal System sorts books by discipline. Linnaean taxonomy groups organisms by shared
descent. Machine learning classifiers assign documents to pre-defined labels. All three
assume that categories exist, that items belong in at most a few of them, and that the
boundaries are stable enough to be useful.

They are not. Every classification system encounters edge cases. Some categories refuse to
stay inside one box. Others turn out to be artifacts of convenience rather than features of
the world. The failures are not bugs. They are structural consequences of forcing
continuous, overlapping reality into discrete containers.

## Hierarchical Rigidity

Hierarchical classification is the most common form. It organizes categories into trees,
where each item descends from a single parent and moves toward more specific sub-categories.
The structure is clean on paper. It breaks when an item naturally belongs in multiple
branches.

The Dewey Decimal System illustrates the problem clearly. Dewey prioritizes disciplinary
arrangement over thematic subject, which means that a single topic can legitimately appear
in multiple classes. A book on the economics of education does not sit neatly under either
economics or education without losing information about its actual content.
Cross-disciplinary works often require multiple numerical assignments or complex table
combinations to approximate what they really are: works that live between disciplines.

Biological taxonomy faced the same structural tension for centuries. Linnaeus arranged
species in a ranked hierarchy from kingdom to species, and the system worked well enough for
the specimens that were easy to observe and measure. It failed when evolutionary
relationships turned out to be more complex than a simple tree. The group traditionally
called "reptiles" is a paraphyletic category — it includes the common ancestor of turtles,
lizards, snakes, and crocodiles, but excludes birds, even though birds descended from that
same ancestor. The category was real enough to be useful for centuries, but it concealed the
actual evolutionary relationships it was meant to describe.

The transition to phylogenetic classification — which organizes organisms into monophyletic
clades that include all descendants of a common ancestor — was not a simple improvement. It
required renaming or dissolving well-established groups, creating friction with field
biologists and educators who had built their understanding on the old structure. The new
system was more accurate. It was also more unstable, because every new genomic finding
forces re-examination of which clades are real and where their boundaries fall.

## Cultural and Historical Bias

Classification systems are not neutral. They encode the priorities, blind spots, and power
structures of the people who design them.

The Library of Congress Subject Headings (LCSH) has undergone decades of revisions as terms
about Indigenous peoples, race, sexuality, and religion have been contested and updated. The
system held onto "Afro-American" as the official heading long after "African American"
entered common usage, because a rigid policy against modifying categories was enforced
until 1996. The same tension appears with the label "Indian" in library catalogs, which
scholars of Indigenous studies have found misleading enough that some developed alternative
frameworks like the Mashantucket Pequot thesaurus.

Queer studies researchers have long criticized LCSH for treating heterosexual identities as
the default category while isolating queer experiences into separate, sometimes stigmatized
headings. The bias is structural: subject heading lists are curated by committees operating
within the institutional and political constraints of their time, and the resulting
controlled vocabularies become hard to change once they are widely adopted.

Dewey shows similar patterns. Literary classification allocates extensive numerical ranges
to European languages and literature while confining works from non-Western traditions to a
small number of categories. Religious studies are heavily oriented toward Christianity. The
system was designed in the 1870s by a Protestant American librarian, and its architecture
reflects that starting point rather than any claim to universal neutrality.

These biases are not anomalies. They are predictable consequences of embedding human
judgment into a system that claims to sort objectively. Once a classification is in use at
scale, the cost of correcting its errors compounds.

## Boundary Ambiguity

Some categories have fuzzy edges. Not everything fits neatly inside or outside. Vagueness in
category boundaries is a fundamental problem for classification.

Philosophers of classification distinguish between "fundamentalism" — the view that
categories track real divisions in the world, often called natural kinds — and
"conventionalism," which treats categories as human-made tools organized for practical
purposes. The debate is not settled. Hilary Putnam demonstrated that scientific categories
like "gold" or "water" refer to underlying essences (atomic number 79, H2O), but that this
does not resolve every boundary question. What counts as a species? Where does a gradual
evolutionary transition produce a new category, and where does it not?

Machine learning classifiers encounter this problem daily. A text classifier trained to
distinguish between spam and legitimate email must draw a decision boundary somewhere.
Ambiguous messages — a newsletter from a company you subscribed to but no longer read, or a
legitimate message that happens to contain marketing language — fall near that boundary. The
classifier assigns a probability, but the probability does not eliminate the ambiguity. It
simply pushes it downstream.

Concept drift makes boundary ambiguity worse over time. As Andrew et al. document in their
analysis of classifier reliability, the statistical relationships between features and
labels change as the real world evolves. A classifier trained on one year's data can
deteriorate significantly when evaluated on samples collected months or years later. The
categories the classifier learned are still defined the same way, but the items that belong
in them have shifted.

## The Criterion Problem

Not every classification failure involves a category that is too broad or too narrow. Some
failures occur when the defining criterion itself is wrong.

A "category error," as philosopher Gilbert Ryle defined it, occurs when something is
described as belonging to a category that does not apply to it at all. Asking which player
on a basketball team "performs the best team spirit" treats team spirit as if it were a
measurable player attribute rather than a collective phenomenon. The error is not
imprecision. It is a misalignment between the classification being used and the kind of
thing being classified.

Scientific history contains many examples of dead ends caused by category errors. Phlogiston
was treated as a real substance that could be released during combustion, when the
phenomenon was actually about oxygen transfer. Miasma was classified as a disease-causing
agent, when the actual vectors were microbial and transmitted through mechanisms the miasma
framework could not represent. In each case, the classification system was internally
consistent. It just started from the wrong premise.

## Alternatives and Trade-offs

No single classification approach solves all of these problems. Each alternative trades one
kind of failure for another.

Horizontal classification — assigning items to overlapping categories without imposing a
strict hierarchy — handles cross-cutting topics more gracefully than trees. A book about the
economics of education can be tagged with both "economics" and "education" without forcing a
choice. The trade-off is discoverability. Without a hierarchy, users cannot browse from a
broad category down to its sub-categories. They must know what tags exist before they can
find them.

Radial classification organizes categories around a central prototype, with membership
becoming less typical as one moves outward. A traditional radial representation of "game"
might include chess and soccer near the center, and board games or video games further out.
The approach handles fuzzy boundaries better than binary inclusion. It also requires a clear
central reference point, which is not always available.

Controlled vocabularies like LCSH or thesauri used in information retrieval avoid the
brittleness of fixed numerical codes by allowing structured relationships between terms —
synonyms, narrower terms, broader terms, related terms. The trade-off is that users must
learn the controlled vocabulary rather than searching in their own words. The gap between
prescribed cataloging terms and natural language often drives users toward keyword search,
which bypasses the classification entirely.

## What They Have in Common

The failures of library classification, biological taxonomy, and machine learning
classifiers share a pattern. Each system assumes that the categories it uses are stable
enough to support consistent application. Each system encounters items that resist
consistent classification. Each system responds by either adding complexity (more
categories, more tables, more tags) or by accepting ambiguity (multiple assignments,
probability scores, community-guideline revisions).

The choice between those responses depends on what the system is designed to optimize. A
library catalog optimizes for consistent physical placement. A biological database optimizes
for accurate evolutionary relationships. A spam filter optimizes for classification accuracy
at scale. The failures appear in different forms, but they all trace back to the same
structural constraint: classification is an approximation, and every approximation has error
modes.

The practical lesson is not that classification is useless. It is that any classification
system should carry a built-in awareness of its own limitations. The Dewey system now lives
on WebDewey, a continuously updated platform that replaced the static print edition in 2017.
Biological taxonomy has shifted from ranked Linnaean hierarchy to phylogenetic clades, and
continues to update as genomic data becomes available. ML classifiers require monitoring and
retraining to compensate for concept drift.

Each system has learned, in its own way, that classification is a process rather than a
product. The alternative to a flawed classification system is not no classification. It is a
classification system that acknowledges its own error modes and has a mechanism for handling
them when they appear.
