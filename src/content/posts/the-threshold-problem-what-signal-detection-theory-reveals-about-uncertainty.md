---
title: The Threshold Problem — What Signal Detection Theory Reveals About Uncertainty
description:
  Signal detection theory separates how well we perceive from how willing we are to act. It
  reframes decisions under uncertainty around a single tradeoff that appears everywhere.
publishedAt: 2026-07-21T14:00:00-05:00
categories:
  - Science
  - Psychology
---

Signal detection theory was not invented for machines. It was invented for people who had to
decide whether a blip on a radar screen meant an aircraft or just static.

David Green and John Swets wrote the framework in 1966, drawing on work from radio
detection, psychology, and medical diagnosis. The core insight was simple and destructive:
you cannot separate how sensitive someone is to a signal from how willing they are to report
seeing one. The two concepts keep colliding in data, and nobody noticed until someone
separated them.

Before signal detection theory, people talked about thresholds as if they were fixed points
on a scale. A stimulus crossed the threshold, and the subject reported it. If it did not
cross, the subject stayed silent. The threshold itself was assumed to be stable across
trials. Signal detection theory showed that the threshold is not a property of perception.
It is a choice. And choices shift.

## The four outcomes

Signal detection theory starts with a matrix of four possibilities.

A signal is present, and the observer reports it. That is a hit. A signal is present, and
the observer reports nothing. That is a miss. No signal is present, and the observer still
reports one. That is a false alarm. No signal is present, and the observer correctly reports
nothing. That is a correct rejection.

Every decision under uncertainty falls into one of these four boxes. The observer is always
making the same decision: does this pattern of inputs justify a positive report?

The old threshold model could explain hits and misses. It could not explain false alarms. A
false alarm is a report without a signal, which means the observer was reacting to noise. If
the threshold is a fixed property of the sensory system, false alarms should never occur.
They do. Radar operators see aircraft that are not there. Radiologists see tumors that are
not there. Medical screening programs flag healthy people for invasive follow-up tests that
reveal nothing.

Signal detection theory answered the false alarm problem by moving the threshold from the
stimulus space into the decision space. The signal is not in the stimulus. The signal is in
the interpretation of the stimulus.

## d-prime and the illusion of certainty

d-prime, usually written as d', measures the distance between the signal distribution and
the noise distribution. A large d' means the two distributions are well separated, which
means the observer can tell them apart. A small d' means the distributions overlap heavily,
and the observer is mostly guessing.

d' is calculated from the hit rate and the false alarm rate using the z-transform of each
rate. The formula is d' = z(hit rate) - z(false alarm rate). The z-transform converts a
proportion into a standard deviation distance from the mean of a normal distribution.

The important thing about d' is what it does not depend on. It does not depend on where the
observer places their criterion. Two observers can have the same d' but make very different
decisions because one is conservative and the other is liberal.

This is where the old threshold model breaks. The old model assumed that an increase in hits
meant an increase in sensitivity. But if the observer also started making more false alarms,
the increase in hits was not due to better perception. It was due to a looser criterion. The
observer was willing to report a signal more readily, not because the signal was clearer,
but because they had changed their threshold.

d' isolates what can be known from what is chosen to be reported. That separation is the
entire theory.

## Criterion and the cost of being wrong

The criterion is the point at which the observer switches from reporting noise to reporting
a signal. It is not a physical measurement. It is a decision boundary that shifts based on
context, stakes, and prior experience.

In medical screening, the criterion is pushed liberal. False negatives are worse than false
positives. A missed cancer diagnosis costs a life. A false alarm costs a biopsy. The cost of
the biopsy is trivial compared to the cost of the miss. So the criterion moves toward the
noise distribution. More people are flagged, but fewer cases are missed.

In aviation security, the same logic applies. The cost of a false negative is catastrophic.
The cost of a false positive is an inconvenience. The criterion is extremely liberal.
Thousands of passengers are stopped and searched for every actual threat that might be
detected. The ratio is not a bug of the system. It is the system.

In contrast, consider a spam filter that blocks important email. The cost of a false
positive (losing a legitimate message) is higher than the cost of a false negative (letting
one spam message through). The criterion is pushed conservative. The filter tolerates more
noise in the inbox to avoid deleting things that matter.

The criterion is always set by the cost structure of the environment. Signal detection
theory makes that explicit. The observer does not choose a criterion because they are
optimistic or pessimistic. They choose it because they are responding to the relative costs
of false positives and false negatives.

## ROC curves and the geometry of choice

A receiver operating characteristic curve plots the hit rate against the false alarm rate
for every possible criterion setting. Each point on the curve corresponds to a different
threshold position.

If the signal and noise distributions are completely overlapping, the ROC curve is a
diagonal line. No matter where the criterion is placed, the hit rate equals the false alarm
rate. The observer is guessing.

If the distributions are perfectly separated, the ROC curve goes straight up and then
straight right. The observer can achieve a hit rate of 1.0 with zero false alarms. The
criterion does not matter because there is no tradeoff.

Real data falls between these extremes. The curve arcs upward. The further the curve is from
the diagonal, the more discriminable the signal is from the noise. The area under the ROC
curve, or AUC, summarizes this discriminability in a single number. An AUC of 0.5 means
guessing. An AUC of 1.0 means perfect detection.

The ROC curve does not tell you where the criterion should be. It only shows the full set of
options. Choosing a criterion is a separate decision from choosing a detection system. The
ROC curve makes that separation visible.

## What this means for decisions

Signal detection theory reframes uncertainty. The problem is not just that the world is
noisy. The problem is that the response to noise is not a fixed property of the observer. It
shifts with context, stakes, incentives, and the cost structure of the environment.

This reframing has consequences that extend well beyond radar screens and medical scans.

In machine learning, the precision-recall tradeoff is a signal detection problem in
disguise. A classifier produces scores, and a threshold converts those scores into
predictions. Moving the threshold changes the false positive rate and the true positive rate
in predictable directions. The ROC curve is the standard visualization of this tradeoff. The
AUC is the standard summary. These tools come directly from signal detection theory.

In scientific publishing, the pressure to produce novel results pushes the criterion
liberal. Journals prefer positive findings over null results, which means researchers who
report a finding are more likely to be correct about novelty than about the existence of the
effect. The false alarm rate in the literature is higher than the hit rate would suggest,
and signal detection theory predicts exactly this outcome: when the reward for a hit is
large and the cost of a false alarm is small, the criterion moves toward reporting signals
that may not exist.

In regulatory policy, the reverse often applies. A drug that is withdrawn after late-stage
trials costs more in public health terms than a drug that reaches the market with unknown
side effects. The criterion shifts conservative, and fewer new drugs are approved than might
be effective.

The threshold is not neutral. It encodes a value judgment about which error is worse. Signal
detection theory makes that encoding visible.

## Why the separation matters

The original framework separated two concepts that are routinely collapsed: sensitivity and
response tendency. A person who reports many signals is not necessarily more perceptive.
They may have a looser criterion. A person who reports few signals is not necessarily less
perceptive. They may have a tighter criterion.

This separation matters because it forces the question of which error is worse into the
open. The old threshold model hid the value judgment behind a physical metaphor. The
threshold was described as if it were a property of the sensory system, like the sensitivity
of an ear or the resolution of an eye. Signal detection theory shows that the threshold is
not a property of the sensor. It is a property of the decision maker, and it changes
depending on what is at stake.

The theory also reveals a structural limitation. No matter how sensitive an observer is,
there is always an unavoidable overlap between signal and noise. The overlap is not a
failure of measurement. It is a feature of the environment. When the environment is noisy,
every positive report carries a non-zero probability of being wrong. The only question is
how much wrong you are willing to tolerate.

## The practical takeaway

Signal detection theory does not solve the problem of uncertainty. It reframes the problem
so that the tradeoff is visible.

When a system produces positive reports, the first question is not how many reports there
are, or how confident the system seems. The first question is: what is the false alarm rate,
and what criterion produced it? The second question is whether that criterion matches the
cost structure of the environment.

A system that never produces false alarms is not a reliable system. It is a system with an
extremely conservative criterion, and it will miss signals that matter. A system that
reports everything is not a sensitive system. It is a system with an extremely liberal
criterion, and it will waste resources on noise.

The useful system is not the one that eliminates error. The useful system is the one that
makes the error structure explicit, places the criterion at the right point for the task at
hand, and reports d-prime separately from the criterion so that improvements in sensitivity
can be tracked independently from shifts in decision tendency.

Signal detection theory was built for people looking at radar screens. It works equally well
for any system that must decide under uncertainty, whether that system is human,
algorithmic, or both. The threshold problem does not disappear when the observer changes. It
just becomes harder to see.
