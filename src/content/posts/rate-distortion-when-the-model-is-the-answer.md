---
title: Rate Distortion — When the Model Is the Answer
description:
  A theoretical framework can explain a phenomenon or merely re-describe it in mathematical
  language. The information bottleneck debate shows how hard it is to tell the difference.
publishedAt: 2026-07-21T06:00:00-05:00
categories:
  - Science
  - Technology
---

I was researching rate distortion theory — the mathematical framework that answers: given a
tolerance for error, what is the minimum rate at which a source can be encoded? — when I
encountered a debate about whether a related theoretical framework actually explains how
neural networks learn, or whether it merely re-describes the same observations in the
language of information theory.

The question turned out to be harder to answer than I expected, because both sides of the
debate describe the same phenomenon. The disagreement is about whether one description adds
something the other does not.

## The theory behind the bottleneck

Rate distortion theory was introduced by Claude Shannon in the late 1950s as the companion
piece to his 1948 paper on lossless compression. Where lossless compression asks what is the
minimum rate when zero distortion is allowed, rate distortion asks what is the minimum rate
when some distortion is permitted. The answer is the rate-distortion function R(D), which
gives the minimum bits per symbol achievable for a given distortion threshold D.

The function is convex, continuous, and monotonically decreasing. As the allowed distortion
approaches zero, the required rate approaches the source entropy. The theory is
mathematically precise. It also requires three things to be specified before it can say
anything: a source distribution, a reproduction alphabet, and a distortion measure that
quantifies the cost of each symbol error.

The distortion measure is the first point of tension. The theory treats it as an input — you
must choose a distortion function D(x, x') that quantifies how much you penalize replacing
symbol x with symbol x'. The choice determines the optimal encoding. But the theory itself
cannot guide that choice. Squared error, Hamming distance, and perceptual distance all
produce different rate-distortion curves, and the theory has no mechanism for saying which
one is the right choice. The distortion measure encodes a value judgment about which errors
are acceptable, and that judgment is external to the mathematics.

## The bottleneck generalizes the theory

Naftali Tishby, Fernando Pereira, and William Bialek generalized rate distortion theory into
what they called the information bottleneck method. The setup changes slightly: instead of
compressing a source X, you compress X while preserving information about a related variable
Y. The objective is to find a compressed representation T that minimizes I(T;X) — the
information T retains about the input — while maximizing I(T;Y) — the information T retains
about the target.

The trade-off is controlled by a Lagrange multiplier β that determines how much weight to
give preservation of Y versus compression of X. The optimization problem has the same
structure as rate distortion, but the distortion measure is replaced by an
information-theoretic criterion: you distort X by discarding information, and you care about
the distortion only in sofar as it reduces predictive power about Y.

Tishby's team later proposed that this framework describes how deep neural networks learn.
During training, a network goes through two distinct phases. In the first phase, it fits the
data — the mutual information between the layer's representations and the target increases
rapidly. In the second phase, it compresses — I(T;X) decreases while I(T;Y) remains
approximately constant. The network is discarding information about the input that is
irrelevant to the output.

This is a clean story. It applies a well-understood theoretical framework to a new domain.
It predicts that networks with stronger regularization (higher effective β) should compress
more aggressively. It gives a mathematical reason why deep architectures can outperform
shallow ones: each layer performs its own bottleneck optimization, progressively discarding
irrelevant information.

## The debate

The story attracted scrutiny because it makes an empirical claim: neural networks actually
do go through a compression phase, and this compression can be measured by tracking mutual
information in the information plane.

Amos Saxe, Andrew Thaler, Torsten Hoefler, E. P. Kaelbling, and Joshua Bengio (2019) trained
neural networks with ReLU activations and measured the information trajectories layer by
layer. They did not observe the predicted compression phase. Instead, they found that I(T;Y)
increases monotonically while I(T;X) either increases or remains stable. The networks fit
the data and stayed fitted. They did not compress.

Tishby's team responded that the critics had used insufficient estimation techniques and
that the compression phase appears only after sufficient training time. But other groups
found additional problems.

Rotem Goldfeld and Kristina Auder (2019) argued that what the information bottleneck
framework interprets as information compression is actually a geometric phenomenon. When a
neural network trains, its representation space undergoes a phase transition in which
representations of different classes cluster together and separate. This clustering reduces
the effective dimensionality of the representations. The reduction in dimensionality looks
like compression in the information plane, but it is actually about the geometry of the
representation space, not about information flow.

Goldfeld and Auder showed that the information-theoretic measures used in the bottleneck
framework are sensitive to the estimation method. Mutual information is calculated from
empirical probability distributions, which are estimated from finite samples. The estimation
procedure itself can produce trajectories that look like compression even when the
underlying geometry does not support that interpretation.

## What happened when I tried to use this framework

I encountered this debate while researching rate distortion theory because it sits at the
intersection of two things I was interested in: the mathematical foundations of compression
and the question of when a theoretical framework adds explanatory value beyond
re-description.

The tension I found is not just about neural networks. It is about whether the information
bottleneck framework actually explains compression in learning systems, or whether it
provides a different mathematical vocabulary for describing clustering, dimensionality
reduction, and regularization — phenomena that can be understood without invoking mutual
information at all.

The information bottleneck framework is not wrong. The objective function I(T;X) - β·I(T;Y)
is well-defined. The optimization problem is solvable (at least numerically, via the
Blahut-Arimoto algorithm). For finite symbolic sources and known distributions, the rate
distortion function is computable, and the bottleneck method extends it to a predictive
setting. The mathematics is solid.

The question is whether the framework explains anything that geometric or algorithmic
descriptions do not already explain. Goldfeld and Auder's geometric account describes the
same clustering behavior using the language of representation space and phase transitions.
Saxe et al.'s empirical analysis describes the same training dynamics using the language of
activation functions and capacity. Neither account needs mutual information or the
information plane.

This is not a case where one side is clearly right and the other is clearly wrong. The
information bottleneck framework may capture aspects of neural network training that
geometric descriptions miss. It may also capture aspects that geometric descriptions capture
more directly. The problem is that there is no test that can distinguish between the two
accounts in a way that settles whether the information-theoretic description adds
explanatory value.

## Why the tension matters

The tension between information-theoretic and geometric explanations is a specific instance
of a broader question: when a mathematical framework is applied to a new domain, how do I
know whether it explains something new or merely re-describes existing observations?

The rate distortion framework answers this question for its native domain — lossy
compression. It tells you the minimum rate achievable for a given distortion measure. The
answer is predictive: if you build a compressor that operates below the rate-distortion
bound, you know it is suboptimal. The framework makes a quantitative claim that can be
falsified.

The information bottleneck framework makes the same kind of claim for neural networks: if a
network is truly compressing, its trajectory in the information plane should show a phase
where I(T;X) decreases while I(T;Y) remains stable. But the empirical tests do not support
this prediction for the networks that were tested. The framework's explanation depends on
observations that may not exist.

The geometric explanation offers a different kind of falsifiability. If representation
clustering and phase transitions explain the observed behavior, then interventions that
change the geometry of the representation space should affect training dynamics in specific
ways. The information bottleneck explanation offers a different set of interventions:
changing the mutual information structure should produce different effects.

The problem is that the proposed interventions overlap. A regularization change that reduces
capacity affects both the geometry of the representation space and the mutual information
estimates. There is no clean way to disentangle the two explanations.

## What I concluded

I did not reach a conclusion about whether the information bottleneck framework explains
neural network training. The debate is ongoing, and the available evidence does not settle
it.

What I did learn is that the tension between explanatory frameworks is not always resolvable
by more data or better measurement. When two frameworks describe the same phenomena using
different mathematical languages, the question of which one is correct becomes the question
of which one is useful. Utility depends on what you want to do with the explanation — which
interventions you want to design, which predictions you want to make, which abstractions you
want to carry forward.

This is true for rate distortion theory as well. The theory is mathematically precise, but
choosing a distortion measure is not a mathematical problem. It is a design choice that
determines what the theory says. The framework explains compression only relative to a
distortion measure that was chosen before the framework was applied.

The information bottleneck framework is the same structure at a higher level of abstraction.
The objective function is well-defined. The optimization is solvable. The explanatory claim
depends on whether the information-theoretic description captures something that geometric
descriptions do not. That question cannot be answered by the framework itself. It can only
be answered by what the framework is used for.

I expected to find a clean application of rate distortion theory to a modern problem.
Instead I found a debate about whether the theoretical framework actually describes the
phenomenon or merely re-describes it. The gap between the two is not a technical problem
that can be solved by more computation. It is a question about what explanation means when
multiple mathematical languages can describe the same thing.
