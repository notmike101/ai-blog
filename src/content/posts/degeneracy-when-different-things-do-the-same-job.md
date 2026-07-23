---
title: Degeneracy — When Different Things Do the Same Job
description:
  Degeneracy describes different components performing the same function under some
  conditions. This article examines the idea in biology, engineering, and complex systems.
publishedAt: 2026-07-23T00:15:00-05:00
categories:
  - Science
  - Technology
---

A backup hard drive is identical to the primary drive. If it fails, you swap in a clone.
That is redundancy. It works. It is also expensive and fragile — if the failure mode affects
the design, both drives fail together.

A different approach exists in nature. The human motor system contains roughly a thousand
times more neurons than the muscles it controls. Different neuron groupings can produce the
same movement. Damage one pathway, and another arrangement takes over. The components are
not identical. They are distinct, sometimes overlapping, and each can do a different job in
a different context. This property is called degeneracy.

Degeneracy was formalized in the late 1990s by Gerald Edelman and Giulio Tononi, who defined
it as the capacity of structurally different elements to perform the same function or yield
the same output under specific conditions. The same elements produce different outputs under
other conditions. Degeneracy is not redundancy. Redundancy duplicates. Degeneracy
diversifies.

The distinction matters because the two approaches to robustness scale differently.
Redundant systems grow linearly in cost: each backup adds cost, each spare consumes
resources, and each duplicate multiplies expense. Degenerate systems scale differently: they
gain capability from the interactions between diverse components.

## The biological origin

Edelman and Tononi arrived at degeneracy while studying the immune system and the nervous
system. Both systems face the same problem: how to maintain function when the environment
changes unpredictably and damage is inevitable.

The immune system uses degenerate recognition. A single pathogen can be recognized by many
different B-cell receptors. Conversely, a single receptor can bind to multiple pathogens.
The mapping is many-to-many, not one-to-one. This means the system is robust to the loss of
any single receptor type, and it can adapt to novel pathogens without pre-designed
responses.

The nervous system shows degeneracy at every level. Different neuron groupings produce the
same movement. Different neural circuits produce the same behavior. Different brain regions
can compensate for damage to others. Edelman called this property a prerequisite for
adaptive behavior: a system that can respond flexibly to novel situations needs components
that are not locked into a single function.

Giulio Tononi and Gerald M. Edelman described this in their 1999 paper "Modularity,
Fragementation, and the Organization of the Nervous System," published in NeuroReport. They
argued that degeneracy, not redundancy, is the key to robustness in complex systems.

## The bridge to complex systems theory

John Whitacre at the University of Manchester formalized degeneracy as a general principle
of complex systems in a series of papers in the mid-2000s. He showed that degeneracy appears
in genetic regulatory networks, artificial neural networks, and engineered systems.

Whitacre's key finding was that degeneracy supports two properties that are often treated as
separate: robustness and evolvability. Robustness is the ability to maintain function when
components fail. Evolvability is the ability to adapt to new conditions. Redundant systems
are robust but not evolvable — the identical backups do not provide new capabilities.
Degenerate systems are both: the diverse components that compensate for failure also provide
raw material for adaptation.

In genetic regulatory networks, this manifests as different gene combinations producing the
same phenotype. In neural networks, it manifests as different weight configurations
producing the same output. In both cases, the system can absorb damage and explore new
solutions simultaneously.

Whitacre, Holland, and Stevens documented this in "Degeneracy and Complementarity in Robust
and Evolvable Systems," published in Evolutionary Computation in 2005. They showed that
degenerate artificial neural networks learn faster, generalize better, and recover from
damage more effectively than redundant ones.

## Engineering applications

Engineers have used redundancy for decades. Triple-modular redundancy in aerospace systems
runs three identical processors and votes on the output. If one fails, the other two agree.
This approach works well in stable environments, but it is expensive, and it does not handle
common-mode failures.

Degenerate design offers an alternative. Instead of identical backups, you design diverse
components that can perform the same function through different mechanisms. This is the
principle behind diversity-based fault tolerance, used in safety-critical systems like
aircraft flight controllers and nuclear reactor controls.

The NASA International Space Station uses diverse redundancy in its command and control
computers. Different computers run different operating systems and different software, but
they all serve the same function: keeping the station operational. If a bug affects one
design, the others are not affected, because they are built differently.

This is degeneracy in practice. The components are not clones. They are distinct, sometimes
overlapping, and each can do something the others cannot in a different context.

## The tradeoff

Degeneracy is not universally better than redundancy. It is harder to design, harder to
verify, and harder to reason about. When every component does the same job in a different
way, you cannot predict which component will fail and how the system will respond. Redundant
systems are predictable: fail one, swap in the clone. Degenerate systems are adaptive: fail
one, and the system reconfigures itself using whatever components are available.

The tradeoff is between predictability and adaptability. Redundancy buys predictability.
Degeneracy buys adaptability. The choice depends on the environment: in stable environments
with known failure modes, redundancy is sufficient. In unstable environments with unknown
failure modes, degeneracy is superior.

## What it means for artificial systems

Artificial neural networks exhibit degeneracy in their weight configurations. Many different
weight assignments produce the same input-output behavior. This is why neural networks can
be trained with different initializations and still converge to similar solutions. It is
also why neural networks can tolerate the removal of individual neurons or connections
without catastrophic failure.

The same principle applies to large language models. Different architectural choices,
training data, and optimization paths can produce models with similar capabilities. The
models are structurally different, but they perform the same function: generating coherent
text from prompts.

This observation has implications for robustness. If a model's vulnerability comes from its
architecture rather than its weights, then training a different architecture may not help.
If the vulnerability comes from the weights, then fine-tuning or pruning may be sufficient.
Degeneracy suggests that the same capability can emerge from many different structural
configurations, which means that robustness requires diversity, not just scale.

The connection to adversarial examples is direct. Adversarial examples exploit the fact that
neural networks learn decision boundaries that are sensitive to specific directions in input
space. A degenerate system would distribute the decision function across many different
structural pathways, making it harder for a single perturbation to disrupt the output. This
is not a solution, but it is a design principle worth considering.

## The broader lesson

Degeneracy appears wherever systems face the twin pressures of maintenance and change.
Biological systems need to survive today and adapt tomorrow. Engineering systems need to
work now and handle surprises later. Software systems need to pass tests today and tolerate
unknown inputs tomorrow.

Redundancy answers these pressures with duplication. Degeneracy answers them with diversity.
The two approaches are not mutually exclusive. The most robust systems use both: redundant
components for known failure modes, degenerate components for unknown ones.

The insight is simple and easy to miss. Identical backups are easy to understand and easy to
build. Diverse components that overlap in function are harder to reason about and harder to
verify. But the systems that survive unpredictable environments are rarely the ones with the
most backups. They are the ones with the most options.
