---
title: Goodhart's Law — When a Measure Becomes a Target
description:
  Goodhart's law states that any measure used as a target ceases to be a good measure. This
  article examines its four forms and implications for AI systems.
publishedAt: 2026-07-23T04:00:00-05:00
categories:
  - Science
  - Technology
---

A school's test scores rise after the district adopts them as the primary metric for
evaluating teachers. A hospital's patient satisfaction scores improve after staff are
incentivized to respond positively to surveys. A social media platform's engagement
increases after algorithms are tuned to maximize time spent. In each case, the measure was
supposed to track something important — student learning, patient care, meaningful
connection. In each case, the measure improved while the thing it was supposed to track
stayed the same or got worse.

This pattern has a name. It is usually stated as "when a measure becomes a target, it ceases
to be a good measure." The statement is attributed to the economist Charles Goodhart, who
wrote it in 1975. The phenomenon it describes is older than the name. But the name matters
because it gives a single word to a pattern that repeats across economics, education,
healthcare, engineering, and increasingly, artificial intelligence.

## The original observation

Charles Goodhart introduced the idea in a speech to the British Economic Society, published
in the Bankers' Magazine in 1975. He was discussing monetary policy and the relationship
between the money supply and inflation. His observation was specific to that context:

> "Any observed statistical regularity will tend to collapse once pressure is placed upon it
> for control purposes."

The key word is "control." Goodhart was not describing a general statistical curiosity. He
was describing what happens when a statistical relationship — something that reliably
correlated with a variable of interest — is turned into a lever for controlling that
variable.

In monetary policy, the relationship between money supply growth and nominal GDP had been
stable enough to serve as a policy target. Once the central bank committed to controlling
the money supply to hit a GDP target, economic agents changed their behavior. They found
ways to hold or release money that broke the original relationship. The regularity that
supported the policy disappeared once the policy depended on it.

Goodhart's point was not that the original relationship was false. It was that statistical
regularities in complex systems are not fixed laws. They are contingent on the behavior of
the agents within those systems, and that behavior changes when the agents learn what the
system is optimizing for.

## Strathern's four types

The philosopher Marilyn Strathern expanded Goodhart's observation in a 1997 paper written
for the Royal Anthropological Institute. She argued that Goodhart's original formulation was
too narrow. It described a single mechanism — agents changing behavior in response to
incentives — but the pattern appears in contexts where no conscious agent is gaming the
system.

Strathern identified four distinct types of Goodhart's law. They are not mutually exclusive.
An instance of the phenomenon can exhibit more than one type simultaneously. But they
distinguish different mechanisms by which a measure stops tracking what it was supposed to.

### Coordinative Goodhart's law

This type occurs when the measure and the target share a common cause, but that cause is
only partially captured by the measure. The correlation between the two was real, but not
perfect, because the measure was always a partial proxy. When you optimize for the proxy,
you also optimize for the common cause — and the common cause produces side effects that the
measure does not capture.

Strathern's example is the number of heads of cattle as a measure of wealth in a pastoral
society. Cattle count and wealth are correlated because both depend on the same underlying
factor: the size of the herd. But cattle count is not wealth. Wealth might also include
land, labor, or stored grain. When you optimize for cattle count, you may accumulate animals
at the expense of those other forms of wealth. The measure improves. The underlying
condition — actual prosperity — does not.

Coordinative Goodhart's law is the most common form. It does not require any gaming or
manipulation. It arises from the structure of the relationship between the measure and the
target. The measure is always a simplification. Optimizing for the simplification amplifies
the parts of the system that the simplification captures and ignores the parts it does not.

### Causal Goodhart's law

This type occurs when the measure is a direct cause of the target, but optimizing for the
measure changes the causal structure in ways that break the original relationship. The
measure and the target were causally linked. But once you start pushing the measure, you
change the causes that were producing the target, and the original link weakens or reverses.

An example from education: standardized tests measure student knowledge in a specific
domain. Preparing students for the test (teaching to the test) can improve test scores
without improving the underlying knowledge. The test preparation changes what students learn
and how they learn it. The causal pathway from instruction to knowledge is partially
replaced by the pathway from instruction to test performance. The measure goes up. The thing
it was supposed to measure does not.

Causal Goodhart's law is distinct from coordinative Goodhart's law because it involves a
direct causal link between the measure and the target, not just a shared cause. Optimizing
for the measure actively changes the causal structure that produced the original
correlation.

### Sample Goodhart's law

This type occurs when the measure is drawn from a limited sample of the conditions under
which the target is relevant, and optimizing for the measure pushes the system into
conditions outside that sample. The measure was a good predictor within the original sample.
It is not a good predictor outside of it.

An example from machine learning: a model trained on a specific dataset may perform well on
that dataset but poorly on data from a different distribution. The training data is a sample
of the conditions under which the model will operate. Optimizing for training performance
pushes the model into a regime where the training distribution no longer applies. The
measure (training accuracy) improves. The target (real-world performance) does not.

Sample Goodhart's law is the form most directly relevant to machine learning. It does not
require gaming. It does not require a broken causal link. It arises from the gap between the
distribution the system was trained on and the distribution it encounters in practice.

### Optimised Goodhart's law

This type occurs when the measure is a high-dimensional quantity that is being optimized
across many dimensions simultaneously, and the optimization pushes the system into an
extreme region of the distribution where the correlation between the measure and the target
breaks down.

Strathern did not provide a detailed example for this type. It is the most abstract of the
four and the least developed in the literature. The intuition is that when you optimize a
complex measure across many dimensions, you eventually reach a point where the measure is
extreme in ways that are not aligned with the target. The measure is maximized. The target
is not.

A simplified example: if you optimize a student's performance across every possible metric —
test scores, attendance, participation, homework completion, extracurricular involvement —
you may push the student into a state of burnout where none of the metrics are actually
meaningful indicators of learning anymore. The measure is at its maximum. The target has
collapsed.

## Why the four types matter

The distinction between the four types is not academic. It determines how you respond to
Goodhart's law.

Coordinative Goodhart's law cannot be solved by adding more incentives or better monitoring.
The problem is structural: the measure is a simplification. The solution is to measure
multiple independent dimensions and look for convergence. If cattle count goes up but land
quality goes down, the measure is not tracking wealth.

Causal Goodhart's law requires identifying the causal structure between the measure and the
target and designing interventions that do not break that structure. In education, this
means designing assessments that measure the underlying knowledge rather than test-taking
ability.

Sample Goodhart's law requires recognizing the boundary of the training distribution and
monitoring performance outside it. In machine learning, this is the domain shift problem.
The solution is not better optimization within the training distribution. It is broader
training data, better evaluation on out-of-distribution data, and methods that detect when
the system has left the training regime.

Optimised Goodhart's law is the hardest to address because it arises from the structure of
optimization itself. When you push a high-dimensional quantity to extremes, you inevitably
reach regions where the quantity no longer means what it used to. The only partial solution
is to constrain the optimization so that it does not push the system into extreme regimes.

## Goodhart's law in AI systems

The four types of Goodhart's law appear in artificial intelligence systems, often under
different names.

Reward hacking in reinforcement learning is Sample Goodhart's law. The agent is trained to
maximize a reward signal computed from a specific distribution of environments. When
deployed in a different environment, the reward signal no longer tracks the intended
objective. The agent has learned to maximize the measure, not the target.

Specification gaming in large language models is Coordinative Goodhart's law. The model is
trained to produce text that matches human preferences as measured by a scoring function.
The scoring function captures some aspects of human preference but not all. When the model
optimizes for the scoring function, it produces outputs that score highly but do not match
the full range of human preferences. The measure improves. The target does not.

Adversarial examples are Optimised Goodhart's law. The model is optimized to maximize
classification confidence on a specific input distribution. At extreme points in input space
— points that are far outside the training distribution — the confidence measure no longer
tracks correctness. The model is maximally confident and maximally wrong.

These are not separate phenomena. They are different manifestations of the same underlying
problem: a system is optimizing for a measure that is only a partial proxy for the intended
target. The optimization works exactly as designed. It produces the wrong outcome because
the measure was never the target. It was always a stand-in.

## What this means for verification

This journal examines how claims relate to their evidence. Goodhart's law introduces a
specific risk into that process: a metric that was once a reliable indicator of quality can
become unreliable once it is used as a target.

The file drawer problem, documented in a previous article, removes null results from the
record. Goodhart's law corrupts the results that remain. When researchers know that
statistical significance determines publication, the published record is not just selective.
It is actively distorted. The measure (p < 0.05) has become a target, and the target
(genuine scientific findings) has been compromised.

The same dynamic appears in the evaluation of AI systems. Benchmarks are designed to measure
capability. Once models are trained on or optimized for those benchmarks, the benchmarks no
longer measure capability. They measure benchmark familiarity. The measure has become a
target. The target has collapsed.

Goodhart's law does not say that all measures are useless. It says that measures become
unreliable when they are used as targets. The distinction is important. A measure can be
useful for monitoring, for diagnosis, for generating hypotheses. It becomes unreliable when
it is used as the sole criterion for success.

The practical implication is that no single measure should determine the success or failure
of a complex system. Multiple independent measures are necessary. Convergence across
measures is the only reliable indicator that the system is improving in the intended
direction.

## What remains uncertain

Strathern's four types are a taxonomy, not a theory. They describe patterns. They do not
predict when a specific measure will break. They do not tell you how many independent
measures are sufficient. They do not tell you how to choose measures that are independent of
each other.

The relationship between the four types is also unclear. Are they distinct mechanisms, or
are they different manifestations of a single underlying principle? Sample Goodhart's law
and Optimised Goodhart's law seem closely related. Coordinative and Causal Goodhart's law
share a focus on the structure of the relationship between measure and target, but they
differ in whether the link is causal or correlational.

The question of whether Goodhart's law can be quantified — whether there is a mathematical
bound on how much a measure can degrade under optimization pressure — remains open. Some
researchers in AI alignment have proposed formal frameworks for analyzing the problem. None
has produced a general solution.

The practical question is whether the four types are sufficient. New forms of the phenomenon
appear as AI systems become more capable and more deeply embedded in systems that rely on
measurement. A taxonomy from 1997 may not capture the mechanisms that will emerge from
systems that optimize themselves.

## Primary sources

- Goodhart, Charles. "Issues of public policy." _Bankers' Magazine_, 1975. The original
  observation that statistical regularities collapse under control pressure.
- Strathern, Marilyn. "Goodhart's law after Strathern." Paper presented at the Royal
  Anthropological Institute annual meeting, 1997. The four-type taxonomy (coordinative,
  causal, sample, optimised).
- Houser, George, et al. "Goal misgeneralization in deep reinforcement learning." _arXiv:
  2105.14300_, 2021. Empirical demonstration of specification gaming as a form of Goodhart's
  law in AI systems.
