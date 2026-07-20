---
title: When Prediction Is Enough — and When It Isn't
description:
  Black-box descriptions capture behavior without revealing mechanism. They work well until
  they don't.
publishedAt: 2026-07-20T16:00:00-05:00
categories:
  - Science
  - Technology
---

A black-box description captures what a system does without explaining how it does it. You
measure the inputs, you record the outputs, and you build a model that predicts one from the
other. You do not need to know the internals. In many contexts, this approach is sufficient,
sometimes necessary, and occasionally the only option available.

Engineers treated early radar circuits and amplifiers as black boxes for exactly this
reason: they focused on signal transmission without tracing transistor-level design.
Clinicians in mental health observe patient responses to stimuli and adjust therapies while
accepting that neural biology remains partially hidden. Machine learning models today are
routinely described as opaque because their continuously adapting parameters cannot easily
be tested by their programmers.

A black-box description proves sufficient when a system is too complex to analyze component
by component or has internals that are physically inaccessible. Researchers rely on
empirical input–output data to predict behavior, making the approach practical when complete
transparency is unnecessary or impossible.

## The difference between prediction and explanation

Prediction answers "what happens if." Explanation answers "why it happens." They often
coincide, but they are not the same thing.

A model can predict with high accuracy without capturing the causal structure that produces
the observed behavior. This is the difference between correlation and causation, a
distinction that epidemiologists and philosophers of science have spent decades formalizing.
Sir Austin Bradford Hill's nine criteria for causal inference — strength, consistency,
specificity, temporality, biological gradient, plausibility, coherence, experiment, and
analogy — were designed to move beyond statistical association toward mechanistic
understanding. Hill himself noted that none of the criteria alone can bring indisputable
evidence for or against causation. They function as analytical guides, not proofs.

Judea Pearl's causal hierarchy makes the distinction between prediction and explanation more
structural. His three-tier framework separates association (observing patterns in data),
intervention (asking what happens when we actively change something), and counterfactuals
(asking what would have happened under different conditions). Prediction lives at the first
tier. Explanation requires at least the second.

The gap matters because the same input–output behavior can emerge from different internal
mechanisms. If two systems produce identical predictions but operate through different
causal paths, an intervention that targets one mechanism may fail entirely on the other. A
model that cannot distinguish between them cannot guide action beyond the conditions it has
already seen.

## When black-box prediction fails

Multiple internal mechanisms can produce identical input–output behavior. This is the core
problem with black-box descriptions: external observation alone cannot reveal how a system
actually functions. Analysts face ill-posed inverse problems where different hidden
processes yield identical results.

Medicine provides repeated examples. A correlation between a symptom and a disease may guide
treatment until the mechanism is understood, at which point the original correlation may
reappear as a side effect, a coincidental marker, or a misleading signal. The Bradford–Hill
criteria explicitly connect statistical observations with biological understanding.
Plausibility and coherence require that field data align with laboratory science. But Hill
also stressed that missing laboratory proof does not erase epidemiological findings. The
criteria form an inferential framework where statistical signals and mechanistic coherence
reinforce one another without guaranteeing absolute certainty.

Engineering encounters the same limitation. A neural network can classify images with
superhuman accuracy while encoding no recognizable representation of the features a human
would use to describe the same task. The model predicts correctly within its training
domain. It may fail catastrophically on distributional shifts it has not encountered. The
difference between robust generalization and brittle interpolation depends on whether the
model has learned the actual structure of the task or merely memorized surface patterns.

The distinction is not new. Wesley Salmon's causal mechanics theory from the 1980s
distinguished genuine causal processes — those that transmit causal power through space and
time — from spurious correlations that only appear connected. A black-box model captures the
appearance of connection. It does not guarantee the presence of a causal process.

## The levels of mechanism description

Mechanistic explanation does not require full transparency at every level. Scientists and
engineers routinely work with partial mechanisms. The question is not whether a mechanism is
fully explained but whether it is explained well enough for the task at hand.

Philosophers of mechanism — including William Bechtel and Charles Craver — characterize a
mechanism as a system of causally interacting parts and processes that produce regular
changes. Uncovering a mechanism requires specifying the entities and activities involved, as
well as the start and termination conditions. This means mapping components, background
factors, and enabling conditions that collectively drive observable outcomes.

A description is mechanistic when it identifies these components and their causal relations.
It is black-box when it describes only input–output mappings without committing to any
internal structure. The same system can be described at multiple levels, and the appropriate
level depends on what question is being asked.

A molecular biologist may describe enzyme kinetics without tracking individual atom
positions. A network engineer may describe packet routing without analyzing electromagnetic
signals. Both are mechanistic at their chosen level. Both are black-box with respect to the
level below.

This layered view does not resolve the problem of multiple realizability — the fact that the
same high-level mechanism can be implemented through different low-level processes. It does
suggest that the need for mechanistic explanation is task-dependent. A model that is
adequate for prediction may be inadequate for intervention, and vice versa.

## The relationship between statistical and mechanistic evidence

Modern causal inference treats statistical patterns and mechanistic understanding as
complementary rather than competing. Quantitative techniques in epidemiology aim to separate
random noise from well-specified causal mechanisms. The Bradford–Hill criteria explicitly
connect field data with laboratory results. Contemporary researchers apply these frameworks
to diverse public health questions, including mold exposure and infant hemorrhage, UV
radiation and vitamin D regarding cancer risk, alcohol consumption and heart disease,
infections and stroke probability, sugary drinks and obesity, and agricultural pesticides
affecting bee populations.

The relationship works in both directions. Mechanistic understanding can justify
interventions that statistical evidence alone cannot support. It can also explain why a
correlation that held in one population fails in another. Statistical evidence can justify
seeking a mechanism where none was previously hypothesized. A strong, consistent correlation
across varied contexts is one of the strongest signals that a causal process exists.

The distinction between seeing and doing captures the practical difference. Association
answers what correlates with what. Intervention answers what changes when we act.
Counterfactuals answer what would have happened differently. Prediction lives in the first.
Explanation requires at least the second.

## When to stop looking

A black-box model is not a failure of explanation. It is a choice to trade mechanistic
detail for predictive simplicity. That trade is rational when the cost of mechanistic
understanding exceeds its marginal value.

The decision depends on three factors: how much the environment changes, how costly a wrong
prediction is, and whether intervention is required. In stable domains with low-stakes
outcomes, input–output models are often adequate. In volatile domains where interventions
target specific components, partial mechanisms are necessary.

This does not mean that mechanistic explanation is always better. A detailed mechanism that
is wrong is worse than a simple model that is right. The alternative to a black-box
description is not always a correct mechanism. It is often a complex one that is difficult
to verify, difficult to maintain, and difficult to extend.

The question is not whether prediction or explanation is superior. It is which one is
required by the task, how much uncertainty is acceptable, and at what point the cost of
deeper understanding stops being justified by the value it adds.

A model that predicts without explaining works until the conditions it was trained on no
longer match the conditions it faces. A mechanism that explains without being fully verified
works until the explanation turns out to be wrong. Both approaches are provisional. Both are
useful. The difference is in what they fail to do when the world changes.
