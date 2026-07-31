---
title: The Problem of Induction — What Hume Discovered and Why It Still Matters
description:
  David Hume showed that predicting the future from the past has no logical foundation. The
  same problem surfaces in machine learning and every prediction that cannot be deduced.
publishedAt: 2026-07-30T18:00:00-05:00
categories:
  - Philosophy
  - Science
  - Learning
---

Every prediction about the future rests on an assumption that cannot be proven: that the
patterns we have observed so far will continue to hold. The sun has risen every day of human
record. Copper conducts electricity in every experiment ever performed. A language model
trained on billions of tokens produces coherent text on inputs it has never seen.

None of these successes proves that the pattern will persist. They only show that it has
persisted so far. The gap between "has always been true" and "will be true" is the problem
of induction.

## Hume's original challenge

David Hume's 1739 treatise _A Treatise of Human Nature_ identified a problem that has not
been resolved, only reframed. The argument is simple and difficult to escape:

Deductive reasoning guarantees its conclusions. If the premises are true, the conclusion
must be true. But no deductive argument can move from observed cases to unobserved ones
without adding an extra premise — typically that "the future will resemble the past" or
"nature is uniform." That premise cannot itself be deduced.

Inductive reasoning moves from observed cases to general claims. Every swan observed so far
has been white, therefore all swans are white. But this form of reasoning is circular: it
assumes the very principle it is trying to establish. You cannot use induction to prove
induction, because that would presuppose the reliability of induction in the proof itself.

Hume's conclusion was not that prediction is useless. It was that prediction rests on custom
or habit — a psychological disposition, not a logical principle. We expect the sun to rise
not because reason compels us, but because we have no other mechanism for navigating the
world. The expectation is a feature of how minds work, not a theorem about how the world
works.

## The pragmatic defense

Hans Reichenbach offered a pragmatic response in the mid-twentieth century. His argument
does not claim that induction is logically justified. Instead, it claims that induction is
the only game in town. If any method is going to predict the future correctly, induction is
the one most likely to succeed. Abandoning it guarantees failure; using it offers a chance
of success, however unproven.

Reichenbach called this a "principle of faith," but a pragmatic one: you do not need to be
certain that the future resembles the past to have a rational reason to assume it does. The
assumption is a bet, not a proof. And it is the only bet available.

This defense is honest about what it offers. It does not solve the problem of induction. It
accepts the problem and argues that accepting the problem does not paralyze action. The
position is similar to wearing a seat belt: you cannot prove you will be in an accident, but
the asymmetry of outcomes makes the assumption rational.

## Goodman's new riddle

If Hume's problem is why we should trust induction at all, Nelson Goodman's 1946
contribution asks a sharper question: why do we trust some inductive projections and not
others, when the evidence for both appears identical?

Goodman introduced the predicate "grue." An object is grue if it is observed before a fixed
future time _t_ and is green, or if it is first observed at or after _t_ and is blue. Every
emerald observed before time _t_ is both green and grue. The entire body of evidence
supports two conflicting predictions: that the next emerald will be green, and that the next
emerald will be grue (which means blue, if _t_ has passed).

The evidence does not decide between them. Both are equally consistent with all observations
made so far. Yet anyone who predicts that the next emerald will be blue is wrong — not
because the evidence contradicts them, but because the predicate "grue" is not the right one
to project.

Goodman's answer was "entrenchment." Predicates that have been successfully projected in the
past — like "green" — earn the right to be projected again. "Grue" has no such history. The
distinction is not logical; it is linguistic and historical. The predicates we trust are the
ones we have already trusted. Goodman's riddle shows that the problem of induction is not
just about whether to generalize, but about which generalizations are legitimate when the
data supports multiple incompatible ones.

## Popper's rejection

Karl Popper took a different path. Rather than try to justify induction, he rejected it
entirely. Science, he argued, does not proceed by accumulating confirming instances and then
generalizing. It proceeds by conjecture and refutation: bold hypotheses are proposed and
then tested with the intent of falsifying them. A theory that survives attempted
falsification is not proven or confirmed — it is merely "corroborated," a temporary status
that carries no guarantee of future survival.

Popper's account is elegant but incomplete. It describes how theories are eliminated, not
how they are selected. In practice, scientists and engineers do not generate hypotheses at
random and then discard the ones that fail. They use inductive patterns — regularities,
analogies, and prior successes — to guide which conjectures are worth making. Popper
eliminates the logical problem of induction by eliminating induction itself, but the
psychological and practical reality of inductive reasoning remains.

## The machine learning formulation

The problem of induction has a direct counterpart in modern machine learning, where it
appears as the generalization problem. A model trained on a finite dataset must make
predictions on inputs it has never seen. The training data is the observed past; the test
data is the unobserved future.

The No Free Lunch theorem, proven by David Wolpert and William Macready in 1997, formalizes
Hume's insight in mathematical terms. Averaged over all possible problem distributions,
every learning algorithm performs equally — including random guessing. No algorithm has an
advantage unless it makes assumptions about the structure of the target function. These
assumptions are called "inductive bias."

The term is revealing. "Bias" in everyday language suggests error. In machine learning,
inductive bias is not a defect — it is a prerequisite. Without assumptions about smoothness,
sparsity, symmetry, or some other regularity, no amount of data is sufficient to learn
anything. The model needs constraints to generalize, and those constraints are exactly the
kind of unprovable assumptions that Hume identified three centuries earlier.

Overfitting is the failure mode that happens when a model's inductive bias is misaligned
with the actual structure of the data. A model that memorizes its training data has zero
training error and maximum generalization error. It has fit the noise instead of the signal.
The archive has covered overfitting before — from the angle of model complexity and
information criteria — but the deeper problem is the same one Hume identified: the gap
between what the data shows and what the model assumes about what comes next.

## What the problem reveals

The problem of induction is not a flaw in reasoning. It is a structural feature of any
system that reasons from finite evidence to claims beyond that evidence. The implications
are not paralyzing; they are clarifying:

Every prediction carries assumptions that the data cannot prove. Bayesian inference makes
these assumptions explicit in the prior. Frequentist statistics hides them in the choice of
test and confidence level. Machine learning encodes them in architecture, loss functions,
and regularization. None of these approaches eliminates the assumption. They make it
visible, manageable, and testable — but it remains an assumption.

The most honest account of prediction is one that acknowledges this. A forecast that exposes
its inductive assumptions is more useful than one that implies its conclusions follow
necessarily from the data. The data never does that work on its own.

## Why the problem persists

New formulations of the problem of induction appear regularly because the underlying tension
does not go away. Better data does not solve it. More powerful models do not solve it. The
No Free Lunch theorem guarantees that every improvement in one domain comes at the cost of
increased fragility in another, because the inductive bias that helps in one setting harms
in another.

The problem also does not go away because it is not a single problem. Hume's original
challenge — why trust induction at all — is one layer. Goodman's riddle — which
generalizations are legitimate — is another. The machine learning formulation — how to
encode inductive bias so that models generalize — is a third. Each layer is active, each has
partial answers, and none invalidates the others.

The problem of induction matters because it is the boundary condition for every prediction,
every model, and every generalization. It is the reminder that the leap from observed to
unobserved is always a leap, regardless of how much data supports it.
