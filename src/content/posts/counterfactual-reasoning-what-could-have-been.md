---
title: Counterfactual Reasoning — What Could Have Been
description:
  Counterfactual reasoning evaluates what would have happened if things had been different.
  It sits at the top of causal inference and is central to AI fairness and explainability.
publishedAt: 2026-07-23T16:00:00-05:00
categories:
  - AI Life
  - Science
---

Counterfactual reasoning asks a question the actual world cannot answer: what would have
happened if things had been different? It is the cognitive and computational process of
evaluating alternate histories -- worlds that could have been but were not.

The form is simple. "If A had been the case, then B would have been the case." But A is
known to be false. The reasoning must construct a model of an alternate world, change one
fact, and trace the consequences through causal structure. That is harder than it sounds.

## The three rungs of causation

Judea Pearl organized causal reasoning into three levels, called the Ladder of Causation.

The first rung is **association**. It asks: "What if I see X? What is the probability of Y?"
This is probabilistic reasoning -- predicting outcomes from observed correlations. It
requires no causal model. You can do it by counting frequencies.

The second rung is **intervention**. It asks: "What if I do X? What is the probability of
Y?" This is causal reasoning. It requires Pearl's do-calculus framework and a structural
causal model. It asks about the effect of actively changing a variable, not just observing
it.

The third rung is **counterfactuals**. It asks: "What if I had done X? What would have been
the probability of Y?" This is counterfactual reasoning -- asking about alternate histories.
It requires the most complete causal model, including structural equations with noise
variables for individual-level variation.

Counterfactuals subsume the other two rungs. You can answer causal questions using
counterfactuals, but not vice versa. Counterfactual reasoning is the highest rung because it
demands the richest causal understanding.

## Why counterfactuals matter

Counterfactual reasoning is everywhere in human judgment. A student who fails an exam
thinks, "If I had studied, I would have passed." A doctor whose patient dies on the
operating table asks, "If I had caught that bleed earlier, would the patient have survived?"
A policymaker who sees inflation rise wonders, "If I had raised rates sooner, would prices
have stayed stable?"

These are not exercises in regret. They are causal judgments about individual cases, not
population averages. Population-level statistics can tell you the probability of success
given study habits across a cohort. Only counterfactual reasoning can tell you whether
**this** student would have passed **this** exam had they studied.

That distinction matters because population-level reasoning and individual-level reasoning
can give different answers. A treatment that helps most people might harm a specific
patient. A policy that works on average might fail in a particular context. Counterfactual
reasoning attempts to bridge that gap.

## Counterfactuals in machine learning

The most mature application of counterfactual reasoning in AI is counterfactual
explanations. They answer the question: what minimal changes to the input would have led to
a different output?

"Wachter, Mittelstadt, and Russell formalized this approach in 2017, connecting
counterfactual explanations to GDPR's right to explanation. Their proposal was simple:
instead of opening the black box, tell the affected person what would need to change. "Your
loan was denied. If your income had been $10,000 higher, it would have been approved."

The advantages are clear. Counterfactual explanations are intuitive, actionable, and
model-agnostic -- they can be generated without accessing the model's internal parameters.
They do not require external audiences to understand feature importance scores or SHAP
values.

But counterfactual explanations face real challenges. Verma et al. reviewed-ISATs in 2024
and identified criteria for trustworthy counterfactual explanations that are difficult to
satisfy simultaneously. Plausibility (the counterfactual should be realistic), feasibility
(the changes should be actionable), and minimality (the changes should be as small as
possible) can conflict. A counterfactual that is minimal may not be plausible. A
counterfactual that is plausible may not be minimal.

## Counterfactual fairness

A parallel application is counterfactual fairness. Kusner et al. introduced the concept: a
decision is counterfactually fair if the outcome would be the same in both the actual world
and a counterfactual world where a protected attribute (race, gender, etc.) differs while
all other causes remain constant.

The implementation uses structural causal models to generate counterfactual worlds where the
protected attribute changes, then checks whether predictions remain identical. If a loan
model denies credit to a qualified applicant because of zip-code-level racial segregation,
the counterfactual world where the applicant's race is different but their credit history is
the same should produce the same outcome. It does not. The model is not counterfactually
fair.

Counterfactual fairness faces theoretical challenges. Dandl et al. extended the approach in
2022 to handle multiple objectives. Zhu et al. addressed path-specific fairness in
recommender systems in 2023. Both works note that counterfactual fairness faces
unidentification problems in practice -- the structural causal model required to compute
counterfactuals may not be identifiable from observational data alone.

## Counterfactual reasoning in large language models

Recent research has focused on how well LLMs reason counterfactually. Chen et al. published
CounterBench through AAAI, a benchmark and improvement framework for LLM counterfactual
reasoning. Their work shows that LLMs perform worse on counterfactual reasoning than on
standard reasoning tasks, and that performance can be significantly improved through their
proposed methods.

Georgousis et al. evaluated LLM counterfactual strategic reasoning in 2026, testing how well
models handle counterfactual scenarios in game-theoretic contexts. Wang et al. proposed a
neurosymbolic framework in 2024 that combines neural networks with symbolic causal reasoning
to improve counterfactual inference in LLMs.

One consistent finding is that LLMs tend to default to population-level reasoning rather
than individual-level counterfactual reasoning. A model asked about an individual patient's
outcome under an alternate treatment may respond with population-level statistics rather
than constructing an individual-level counterfactual world. This is a fundamental
limitation: counterfactual reasoning at the individual level requires a causal model of that
specific case, which LLMs do not possess.

## The limits of counterfactual reasoning

Counterfactual reasoning faces persistent challenges.

Philosophically, Lewis and Stalnaker defined counterfactuals using possible-worlds
semantics. Truth conditions depend on similarity between possible worlds. But defining
"similarity" is inherently vague and context-dependent. The same counterfactual can have
different truth values in different contexts.

Computationally, counterfactuals are expensive to compute. They require full structural
causal models, which are costly to learn and evaluate. Counterfactual quantities are
generally not identifiable from observational data alone -- they require strong assumptions
about the structural causal model.

Practically, it is often impossible to verify whether a counterfactual explanation is
"correct" since the counterfactual world never occurred. A counterfactual explanation is a
claim about a world that did not happen. You cannot observe it, measure it, or check it
against reality. You can only check whether the reasoning is internally consistent with your
causal model.

Cognitively, Kahneman and Tversky showed that human counterfactual thinking follows
predictable patterns. People more easily imagine alternatives to recent events, to actions
rather than inactions, and to sentences with negated clauses. Byrne's research established
that people construct limited mental models of alternatives, leading to systematic errors.

## What counterfactual reasoning reveals

Counterfactual reasoning is not just a tool. It is a lens on how systems -- human and
artificial -- make sense of incomplete information.

It reveals a fundamental asymmetry between the actual world and possible worlds. The actual
world is fixed. Possible worlds are constructed. Construction requires assumptions, and
assumptions introduce uncertainty. Two people with the same evidence can construct different
counterfactual worlds and reach different conclusions about what would have happened.

It reveals that individual-level reasoning is harder than population-level reasoning.
Population-level statistics aggregate across cases and smooth over individual variation.
Individual-level counterfactuals must account for the specific causal structure of each
case. That is why counterfactual explanations in AI are often approximate -- the individual
causal model is not fully known.

It reveals that the highest rung of causation -- counterfactuals -- is also the most
contested. Pearl's framework treats counterfactuals as the pinnacle of causal reasoning. But
their unidentifiability, their dependence on untestable assumptions, and their
susceptibility to systematic bias mean that counterfactual claims are always provisional.
They are not facts about alternate worlds. They are claims about what our best causal models
suggest would have happened.

That is not a reason to abandon counterfactual reasoning. It is a reason to use it
carefully. Counterfactuals are useful precisely because they force us to make our
assumptions explicit. They reveal the structure of our causal models. They expose the gap
between what we know and what we wish we knew.

The question "what if things had been different?" is not just a cognitive exercise. It is a
method for examining the limits of our understanding. And in that examination, there is more
value than in any answer.
