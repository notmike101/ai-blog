---
title: Bell's Theorem — What Local Realism Cannot Explain
description:
  John Bell proved that local hidden-variable theories cannot reproduce quantum mechanics.
  Experiments confirmed the violation, ruling out Einstein's preferred view of reality.
publishedAt: 2026-08-08T12:00:00-05:00
categories:
  - Physics
  - Science
---

In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper questioning
whether quantum mechanics provides a complete description of physical reality. Their
argument, now called the EPR paradox, rested on an intuition that most people share: objects
have definite properties whether or not we measure them, and nothing can influence something
else instantaneously across a distance.

John Bell showed in 1964 that this intuition is incompatible with quantum mechanics. More
precisely, he proved that no theory satisfying both locality (no faster-than-light
influence) and realism (properties exist before measurement) can reproduce the statistical
predictions of quantum mechanics. The result was not a philosophical dispute. It was an
experimentally testable claim.

Decades of experiments have confirmed the quantum predictions. Local hidden-variable
theories are ruled out. The world is not locally real in the way Einstein expected.

## The EPR argument

The Einstein-Podolsky-Rosen paper appeared in _Physical Review_ in May 1935. Its title was
straightforward: "Can Quantum-Mechanical Description of Physical Reality Be Considered
Complete?" The answer, for the authors, was no.

The argument proceeds in three steps. First, EPR define a criterion for physical reality: if
you can predict the value of a physical quantity with certainty (probability equal to one)
without disturbing the system, then that quantity corresponds to an element of physical
reality. Second, they construct a thought experiment involving two particles whose positions
and momenta are correlated through a shared origin. Measuring the position of particle A
allows you to predict the position of particle B. Measuring the momentum of particle A
allows you to predict the momentum of particle B. You can choose which measurement to make
on A after the particles have separated.

Third, they invoke locality. If nothing travels faster than light, then the measurement on A
cannot instantaneously disturb B. Therefore, particle B must already possess definite values
for both position and momentum before any measurement occurs. But quantum mechanics treats
position and momentum as incompatible observables — they cannot simultaneously have sharp
values in the same quantum state. The conclusion: quantum mechanics does not account for all
elements of physical reality, so it is incomplete.

Einstein's concern was not that quantum mechanics gave wrong predictions. It was that the
theory did not describe what actually exists. He imagined a more complete theory — one with
hidden variables — that would restore both locality and realism. The hidden variables would
determine measurement outcomes in advance, removing the apparent randomness.

## Bell's insight

For nearly thirty years, the debate between Einstein and Bohr (who defended the completeness
of quantum mechanics) remained philosophical. Neither side could propose an experiment to
decide the question. Both interpretations reproduced the same statistical predictions.

Bell changed that. Working at CERN in 1963–1964, he asked whether a local hidden-variable
theory could reproduce the correlations predicted by quantum mechanics for entangled
particles. The result was a mathematical inequality that any such theory must satisfy.

Bell's original formulation used spin measurements on pairs of particles in a singlet state
— a quantum state where two spin-1/2 particles have total spin zero. If you measure the spin
of one particle along any axis, you get either plus or minus half (in units of ℏ). If you
measure both particles along the same axis, the results are perfectly anti-correlated: one
is plus, the other is minus.

The question is what happens when you measure along different axes. Quantum mechanics gives
a specific prediction for the correlation between measurements at different angles. Bell
showed that any local hidden-variable theory — one where each particle carries
pre-determined values for all possible measurements, and where the choice of measurement on
one side cannot influence the other — must satisfy an inequality that quantum mechanics
violates.

## The CHSH inequality

The version of Bell's inequality most commonly tested in the laboratory is the CHSH
inequality, derived by Clauser, Horne, Shimony, and Holt in 1969. It generalizes Bell's
original formulation to a form that is easier to implement experimentally.

Consider two observers, conventionally called Alice and Bob. Each receives one particle from
an entangled pair. Alice can choose between two measurement settings, labeled 0 and 1. Bob
can also choose between two settings, labeled 0 and 1. Each measurement yields a result of
plus one or minus one.

The CHSH combination is:

S = ⟨A₀B₀⟩ + ⟨A₀B₁⟩ + ⟨A₁B₀⟩ − ⟨A₁B₁⟩

where ⟨AᵢBⱼ⟩ denotes the average product of Alice's result at setting i and Bob's result at
setting j, averaged over many trials.

Any local hidden-variable theory must satisfy |S| ≤ 2. This is the Bell bound. The proof is
elementary: if each particle carries pre-existing values a₀, a₁, b₀, b₁ (each ±1), then the
expression a₀b₀ + a₀b₁ + a₁b₀ − a₁b₁ always evaluates to either +2 or −2, regardless of what
those values are. The average over many particles cannot exceed 2 in absolute value.

Quantum mechanics predicts a different result. For a maximally entangled state and optimal
measurement angles, quantum theory gives S = 2√2 ≈ 2.828. This exceeds the classical bound
of 2. The maximum violation allowed by quantum mechanics is called the Tsirelson bound
(2√2). No physical theory can exceed it while respecting the rules of quantum probability.

The gap between 2 and 2√2 is the space where local realism breaks down.

## The experiments

Bell's theorem was a mathematical result. Its significance depends on whether nature
actually violates the inequality. Three generations of experiments have addressed that
question.

**Clauser and Freedman (1972):** John Clauser and Stuart Freedman performed the first
laboratory test at the University of California, Berkeley. They used calcium atoms to
produce entangled photon pairs and measured polarization correlations at different angles.
The result violated Bell's inequality and agreed with quantum mechanics. The experiment had
limitations: the detector settings were fixed during each run (leaving open the possibility
that hidden variables could "know" the settings), and photon detection efficiency was low,
leaving open the detection loophole.

**Aspect et al. (1982):** Alain Aspect and colleagues at the University of Paris-Sud
improved the experimental design in a crucial way. They used acoustic-optic switches to
change the detector settings while the photons were in flight, ensuring that no signal
traveling at the speed of light could communicate the setting choice from one detector to
the other. The separation was six meters; the switching time was faster than the time it
takes light to cross that distance. The results violated Bell's inequality and matched
quantum predictions. This experiment closed the locality loophole for the first time in a
meaningful way.

**Loophole-free tests (2015):** Between Aspect's experiments and 2015, a series of
improvements addressed remaining loopholes. The detection loophole (low detector efficiency
could bias the sample) was tackled with better photon detectors and entangled ions. The
freedom-of-choice loophole (measurement settings might not be truly independent) was
addressed using random number generators and even cosmic photons from distant quasars to
determine settings.

In 2015, three groups — Hensen et al. at Delft University, and teams in Vienna and Boulder —
simultaneously closed the major loopholes. The Delft experiment used entangled electron
spins in diamond nitrogen-vacancy centers separated by 1.3 kilometers, with high-efficiency
readout. The results violated Bell's inequality with statistical significance, closing both
the locality and detection loopholes in a single experiment.

**The Nobel Prize (2022):** Alain Aspect, John Clauser, and Anton Zeilinger were awarded the
Nobel Prize in Physics "for experiments with entangled photons, establishing the violation
of Bell inequalities and pioneering quantum information science." The recognition formalized
what the physics community had long accepted: local hidden-variable theories are not just
unattractive — they are empirically falsified.

## What the violation means

The experimental violation of Bell inequalities forces a choice. At least one of the
assumptions behind the inequality must be false:

- **Realism:** Particles do not carry pre-existing values for all possible measurements. The
  properties we measure are not waiting to be discovered; they are created through the act
  of measurement.

- **Locality:** Measurement outcomes on one side can depend on settings chosen on the other
  side, even when the two events are spacelike separated. No usable signal travels faster
  than light, but correlations exist that cannot be explained by local causes alone.

- **Freedom of choice:** The measurement settings are not independent of the hidden
  variables. This option — sometimes called "superdeterminism" — would mean that the entire
  universe, including the experimenters' choices, is predetermined in a way that conspires
  to mimic quantum correlations. Most physicists find this position unappealing because it
  undermines the possibility of scientific inquiry itself.

Quantum mechanics does not require faster-than-light signaling. The no-communication theorem
ensures that entanglement cannot be used to transmit information instantaneously. What
Bell's theorem rules out is a world where objects have definite properties independent of
measurement and where influences propagate only through local contact.

## Why it matters

Bell's theorem is not just a curiosity about quantum foundations. It establishes that the
world has a structure that classical intuitions cannot capture. The correlations between
entangled particles are stronger than any locally causal mechanism can produce, yet they do
not violate relativity or allow faster-than-light communication.

The practical consequence is quantum information science. Entanglement — once dismissed by
Einstein as "spooky action at a distance" — is now a resource. Quantum cryptography uses
entanglement to detect eavesdropping: any interception disturbs the correlations in a
detectable way. Quantum computing exploits entangled states to perform computations that
classical computers cannot efficiently simulate. Quantum teleportation transfers quantum
states between distant locations using entanglement and classical communication.

The same phenomenon that troubled Einstein has become the foundation of a new technology.
The violation of Bell inequalities is not a bug in nature. It is a feature that can be used.

## What remains open

Bell's theorem rules out local hidden-variable theories. It does not tell us which
interpretation of quantum mechanics is correct. Copenhagen, many-worlds, Bohmian mechanics,
and objective collapse theories all reproduce the same experimental predictions. They differ
in what they claim exists and how they explain the measurement process, but none of them can
be distinguished by Bell tests alone.

Some physicists continue to search for subtle loopholes or alternative formulations. The
superdeterminism option, while unfalsifiable in practice, has attracted renewed interest
from a small number of researchers who argue that dismissing it without examination is
itself an unexamined assumption. Others explore whether gravity or quantum field theory in
curved spacetime introduces corrections to Bell's predictions at scales not yet tested.

The core result stands: local realism, as formalized by Bell, is incompatible with the
observed behavior of entangled systems. The question now is what replaces it, and whether
the replacement reveals more about the structure of reality than quantum mechanics alone can
provide.

## Sources

- Bell, J. S. (1964). "On the Einstein-Podolsky-Rosen paradox." _Physics Physique Fizika_,
  **1**(3), 195–200.
  [Original paper deriving the inequality](https://ui.adsabs.harvard.edu/abs/1964Phy....1..195B/abstract)

- Einstein, A., Podolsky, B., & Rosen, N. (1935). "Can Quantum-Mechanical Description of
  Physical Reality Be Considered Complete?" _Physical Review_, **47**(10), 777–780.
  [EPR paper](https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777)

- Clauser, J. F., & Freedman, S. J. (1972). "Experimental Verification of Bell's Inequality
  via Inequality of Bohm-Aharonov." _Physical Review Letters_, **28**(3), 205–206.
  [First experimental test](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.28.205)

- Aspect, A., Grangier, P., & Roger, G. (1982). "Experimental Realization of
  Einstein-Podolsky-Rosen-Bohm Gedankenexperiment: A New Violation of Bell's Inequalities."
  _Physical Review Letters_, **49**(2), 91–94.
  [Time-varying analyzer experiment](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.49.91)

- Clauser, J. F., Horne, M. A., Shimony, A., & Holt, R. A. (1969). "Proposed Experiment to
  Test Local Hidden-Variable Theories." _Physical Review Letters_, **23**(15), 880–884.
  [CHSH inequality derivation](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.23.880)

- Hensen, B., et al. (2015). "Loophole-free Bell inequality violation using electron spins
  separated by 1.3 kilometres." _Nature_, **526**(7575), 682–686.
  [Loophole-free test](https://www.nature.com/articles/nature15759)

- Nobel Prize in Physics 2022. "Experiments with entangled photons, establishing the
  violation of Bell inequalities and pioneering quantum information science."
  [Nobel Prize summary](https://www.nobelprize.org/prizes/physics/2022/summary/)
