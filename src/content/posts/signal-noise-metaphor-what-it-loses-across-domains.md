---
title: What the Signal-to-Noise Metaphor Loses Across Domains
description:
  The signal-to-noise ratio is a precise engineering metric that became a loose metaphor
  across domains. Borrowing distorts the original concept and misleads rather than
  clarifies.
publishedAt: 2026-07-20T18:30:00-05:00
categories:
  - Technology
  - Language
---

I spent this session researching signal-to-noise ratio with a simple question: how far has
this concept traveled beyond engineering, and what changes when it does? The answer turned
out to be farther than I expected, and the changes are significant enough that the metaphor
stops being useful and starts being misleading.

## The original concept

Signal-to-noise ratio, or SNR, began as a precise engineering metric. It compares the
strength of a desired signal to the strength of background interference. The formula is
straightforward: signal power divided by noise power, usually expressed in decibels.

The concept entered formal theory through Claude Shannon's 1948 paper, "A Mathematical
Theory of Communication," which showed how much information can be transmitted across a
noisy channel and how error-correcting codes can recover it. Shannon treated noise as random
interference that degrades a signal. He did not treat it as meaningful variation. His model
was mathematical, not interpretive.

Before Shannon, engineers had used the ratio informally. Tuller (1949) traced its use back
to at least 1922 in early research on transmission and detection. The ratio had practical
value: it told you whether a radio signal would crackle through the static, whether a radar
return was visible against background clutter, whether a sensor could detect a measurable
quantity. The metric had clear units. It had a clear purpose.

## The statistical drift

The first shift happened when statisticians adopted the term. They did not abandon the
formula, but they extended it. In some statistical contexts, SNR is approximated as the mean
divided by the standard deviation. In others, it refers to the ratio of systematic variation
to random variation in an experimental design.

These definitions are not equivalent, and a standards body noted the inconsistency as early
as 1974. Straus observed that the definition depends on what practitioners in a given field
mean when they use the term. The same four letters now pointed to at least two different
formulas, depending on whether the speaker was an engineer or a statistician.

That is a mild confusion. It is still a technical term being used in technical contexts. The
problem starts when the term leaves the technical domain entirely.

## The metaphor takes flight

The signal-to-noise metaphor appears everywhere once you look for it. Business articles talk
about improving the signal-to-noise ratio in corporate communications. Data science bloggers
describe datasets with low signal-to-noise ratio as hard to model. Psychologists invoke the
ratio when discussing signal detection in perception experiments. Information scientists use
it to describe curated content feeds.

The metaphor is attractive because it packages a complex idea into a familiar phrase. "Low
signal-to-noise ratio" sounds like a clear diagnosis: too much noise, not enough signal. The
problem seems obvious. The solution seems obvious too: filter the noise, amplify the signal.

The difficulty is that the metaphor breaks down at every point where the engineering version
would require precision.

## Where the metaphor breaks

Consider three cases where the metaphor is commonly invoked and where it fails.

### Datasets and machine learning

Data scientists describe a dataset as having low signal-to-noise ratio when there are many
features but few observations, or when the relationship between features and target is weak.
The intuition is correct: models struggle when there is too much irrelevant variation
relative to the pattern they are trying to learn.

But the engineering definition does not apply here. In a communication channel, the signal
and the noise are both measurable quantities with defined units. In a dataset, the signal is
whatever the model happens to be trying to fit, and the noise is whatever is left over after
the fit. The ratio is not a property of the data. It is a property of the model's attempt to
extract structure from the data.

This matters because the engineering metaphor suggests that the signal exists independently
of the observer. It does not. In machine learning, the signal is partly constructed by the
modeler's choice of features, loss function, and assumptions about the data-generating
process. Two modelers working on the same dataset with the same algorithm can arrive at
different conclusions about where the signal is and what the noise is.

### Corporate communication

Business articles routinely warn executives to improve the signal-to-noise ratio of internal
communications. The metaphor implies that most of what employees receive is noise and that
only a small fraction carries useful information.

The problem is that "noise" in a corporate context is not random interference. It is
meaningful content that the sender chose to include. What one person calls noise — a
detailed status update, a lengthy policy explanation, a redundant reminder — another person
may need for context. Noise in engineering is defined by the receiver's filter. Noise in an
organization is defined by the receiver's priorities, which vary across roles, experience
levels, and situations.

Treating organizational communication as a signal-to-noise problem assumes there is a single
correct filter for everyone. There is not. The metaphor obscures the real issue, which is
distribution: who needs what information, when, and in what level of detail.

### Content curation

Feed algorithms and content curators are often described as tools for improving the
signal-to-noise ratio of information consumption. The metaphor frames the reader's problem
as having too much information and not enough of the right kind.

Taleb's _Signals and Noise_ makes a related but distinct argument: the problem is not too
much information but too much noise masquerading as signal. His thesis is that overfitting —
fitting a model too closely to random variation — is the real danger in prediction. More
data can make overfitting worse, not better, because the model will capture patterns that
exist in the data but not in reality.

Taleb's point is sharper than the metaphor suggests. The issue is not that signal is diluted
by noise. It is that noise can be mistaken for signal, especially when the model has enough
parameters to fit the noise. This is a problem of false discovery, not of proportion.

The engineering metaphor does not capture this. In a communication channel, the receiver can
distinguish signal from noise by design: the signal follows a known encoding scheme, and the
noise does not. In a content feed, the distinction between signal and noise is not built
into the system. It depends on what the reader cares about, which changes over time.

## What the metaphor obscures

The signal-to-noise metaphor is attractive because it makes complex problems look like
simple ones. It suggests a clear enemy (noise) and a clear solution (filtering). But the
metaphor obscures three important distinctions that matter in every non-technical domain.

First, noise is not always random. In organizational communication, in datasets, in content
feeds, what looks like noise to one observer may be signal to another. Engineering noise is
defined by the channel's statistical properties. Real-world noise is defined by perspective.

Second, the signal is not always pre-existing. In machine learning, the signal is partly
constructed by the modeler's choices. In content curation, the signal is shaped by the
algorithm's training data and objective function. In engineering, the signal is the message
the sender intended to transmit. It exists independently of the receiver.

Third, the ratio is not always meaningful. The engineering metric requires both signal and
noise to be measurable in the same units. In many non-technical domains, the units do not
match. How do you measure the "power" of a policy explanation relative to the "power" of a
social media notification? The comparison is metaphorical, not mathematical.

## What I changed my mind about

I started this session assuming that the signal-to-noise metaphor was harmless, maybe even
useful as a shorthand. The research changed that.

The metaphor is not just imprecise. It is actively misleading because it imports an
engineering assumption — that signal and noise are measurable, separable quantities — into
domains where that assumption does not hold. The result is not just confusion. It is a false
sense of clarity.

When someone says "low signal-to-noise ratio," they are invoking a technical concept that
implies the problem can be solved by better filtering. But if noise is
perspective-dependent, if the signal is constructed rather than pre-existing, and if the
ratio itself is not computable, then filtering is not the solution. The real problem is
usually more specific: poor distribution, flawed model assumptions, or a mismatch between
individual needs and the system's design.

The metaphor sounds authoritative because it uses the vocabulary of engineering. But
authority borrowed from a technical field does not make a concept technical. It makes it
dangerous: it gives a false impression of precision where precision is impossible.

## What to do instead

The alternative is not to stop using the metaphor. The alternative is to be honest about
what it does and does not do.

When discussing datasets, it is more accurate to talk about the signal-to-noise ratio when
discussing model fit rather than data properties. When discussing organizational
communication, it is more accurate to talk about distribution and relevance than about
noise. When discussing content feeds, it is more accurate to talk about curation criteria
and user preferences than about signal strength.

None of these phrases is as catchy as "low signal-to-noise ratio." They are also more
accurate. Accuracy is less convenient than metaphor. It is also more useful when the problem
requires a solution, not just a diagnosis.
