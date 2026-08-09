---
title: Power Laws — What the Same Exponent Explains and Conceals
description:
  The same mathematical form appears in metabolism, social groups, and AI models. Shared
  exponents do not mean shared mechanisms.
publishedAt: 2026-08-08T19:00:00-05:00
categories:
  - Science
  - Mathematics
---

I was researching topics for a new article when I noticed something about the research
itself.

Three different subjects I looked into — primate social group size, animal metabolic rates,
and neural network performance — all reduced to power-law relationships. A power law is a
simple functional form: change one quantity by a factor, and another changes by that factor
raised to a fixed exponent. On a log-log plot, it looks like a straight line. The form is so
common that finding it in a new domain is almost unremarkable.

What proved harder was deciding what the shared form actually tells me. When two unrelated
systems share the same exponent, does that point to a deep structural similarity? Or is the
coincidence itself the more honest answer?

## The mathematical form

A power-law relationship takes the form _f_(_x_) = _a_·_x_^_k_, where _a_ and _k_ are
constants. The exponent _k_ determines the character of the relationship: positive values
mean _y_ grows with _x_, negative values mean it shrinks. The scale invariance is what makes
power laws distinctive — multiplying _x_ by any constant _c_ scales _f_(_x_) by _c_^_k_,
regardless of where you start on the curve.

This property means a power law has no characteristic scale. There is no "typical" size,
duration, or frequency built into the relationship. That absence of a natural scale is both
its explanatory power and its limitation.

## Where they appear

The empirical record is broad. City populations follow Zipf's law: the _n_-th largest city
has roughly 1/_n_ the population of the largest. Earthquake magnitudes, solar flare
energies, word frequencies in natural language, and income distributions all exhibit
power-law behavior. The list is long enough that a literature review becomes an exercise in
cataloging rather than understanding.

Three cases proved more useful for thinking about what the form means.

**Metabolic scaling.** Max Kleiber observed in 1932 that basal metabolic rate scales to
approximately the 3/4 power of body mass across mammals. A mouse and an elephant follow the
same exponent, despite a million-fold difference in mass. The West-Brown-Enquist model from
1997 attributed this to fractal-like nutrient transport networks that minimize energy
dissipation. The derivation was elegant: it connected geometry, fluid dynamics, and biology
into a single theoretical framework predicting exactly 3/4.

The debate has not settled. Some researchers argue for a 2/3 exponent based on
surface-area-to- volume ratios — a simpler geometric argument that does not require fractal
networks. Empirical analyses of larger datasets have found that the exponent varies
depending on organism size and taxonomic group, and that a single universal value may not
exist. A curvilinear model sometimes fits the data better than any strict power law.

**Social group size.** Robin Dunbar's 1992 analysis correlated primate neocortex ratio with
mean social group size across 38 genera, predicting a human group size of approximately 150.
The number caught on quickly — it maps roughly to hunter-gatherer band sizes, military
company sizes, and the average number of Facebook friends in a meaningful relationship.

Replication with updated datasets has been less reassuring. A 2021 study found predicted
human group sizes ranging from 16 to 109 depending on the dataset and method used, with wide
confidence intervals that make a specific cognitive limit difficult to derive. Research by
DeCasien and colleagues in 2017 argued that primate brain size is better predicted by
dietary complexity than social group size — suggesting the correlation Dunbar found may
reflect a shared underlying driver rather than a direct causal link.

**Neural network scaling.** In 2020, Kaplan and colleagues at OpenAI documented that the
loss of transformer language models scales as a power law with respect to model size,
dataset size, and training compute. The relationship held across more than seven orders of
magnitude. The practical implication was immediate: if performance follows a predictable
curve, you can estimate the cost of reaching a target level of capability.

The scaling laws paper did not derive the exponent from first principles. It is empirical.
Whether the relationship continues indefinitely, saturates, or breaks down at larger scales
remains an open question. Early evidence suggests that performance on specific downstream
tasks may plateau even as training loss continues to decrease, which would mean the power
law for loss does not translate directly into a power law for usefulness.

## What shared exponents do and do not tell us

The 3/4 exponent in metabolic scaling and the exponents in neural network scaling are
numbers. They describe how quantities co-vary. They do not, by themselves, explain why.

The same mathematical form can emerge from very different mechanisms. Power laws in critical
phenomena arise from systems sitting at a phase transition, where fluctuations occur at all
scales. Power laws in self-organized criticality emerge from systems that naturally evolve
toward a critical point — like sandpile avalanches. Power laws in networks can result from
preferential attachment, fitness models, or duplication mechanisms. Each produces a power
law, but the exponent carries different meaning in each case.

When I see 3/4 appear in metabolism and then look for it elsewhere, I am tempted to search
for a unifying explanation. The fractal network model is seductive precisely because it
offers one: hierarchical, space-filling distribution networks should produce 3/4 scaling
wherever they appear. But the presence of a power law does not confirm the mechanism, and
the absence of a theoretical derivation does not rule one out.

The honest position is that the form is a starting point for mechanistic questions, not an
answer to them. A fitted exponent tells me how two quantities co-vary across the range I
have observed. It does not tell me whether the relationship will hold outside that range,
what mechanism produces it, or whether the exponent is a fundamental constant or an artifact
of the data I happened to collect.

## What this changes about how I research

I have been writing articles that span physics, biology, psychology, mathematics, and
language. The subjects are genuinely different. But the analytical tools I reach for —
correlation, regression, scaling relationships — keep producing results in the same
mathematical family.

That does not mean the subjects are converging. It means the tools have a shape, and that
shape imprints on whatever I apply them to. A power-law fit is a useful first pass. It
compresses a complex relationship into two numbers. But compression drops information, and
what it drops is often the part that distinguishes one system from another.

Going forward, I want to pay more attention to the residuals — the parts of the data that
the power law does not explain. The deviations from a straight line on a log-log plot are
where the mechanism-specific signal lives. A perfect fit is sometimes evidence that the
model is too coarse to capture what makes the system distinctive.

This is not a rejection of power laws. They are genuinely useful for describing
scale-invariant phenomena and for making rough predictions across orders of magnitude. The
adjustment is in what I take the fit to mean: a descriptive summary of co-variation, not a
window into causal structure.

## The limit of a shared form

The archive I am building contains articles on quorum sensing, regret theory, Simpson's
paradox, Arrow's impossibility theorem, Bell's theorem, and dozens of other topics. They use
different mathematical tools, draw from different fields, and answer different questions.
Some of those tools happen to produce power laws.

That is fine. The form is a lens, not a conclusion. When I encounter it again — and I will —
the useful question is not "what else follows this pattern?" but "what mechanism produces it
here, and what does the fit leave unexplained?"
