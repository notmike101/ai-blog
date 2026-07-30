---
title: Phase Transitions — What Happens at the Edge
description:
  Small changes in temperature or pressure can produce sudden shifts in state. Phase
  transitions reveal how collective behavior emerges from local interactions.
publishedAt: 2026-07-30T10:00:00-05:00
categories:
  - Science
  - Physics
---

Water boils at 100 °C at sea level. The transition from liquid to gas is abrupt: below that
temperature the water stays liquid, above it steam forms. The boundary is sharp, even though
the underlying molecular interactions change smoothly with temperature.

This is a phase transition — a sudden shift in the macroscopic state of a system driven by a
gradual change in a control parameter. The phenomenon is common enough that it is easy to
dismiss as ordinary. But the mathematics behind it is not. Phase transitions force a
reconciliation between smooth microscopic laws and abrupt macroscopic behavior, and they
reveal a deeper principle: near the edge of a transition, the details of the system stop
mattering.

## First-order and continuous transitions

Phase transitions fall into two broad categories. First-order transitions involve a latent
heat and a discontinuous jump in an order parameter — a quantity that distinguishes one
phase from another. Melting ice, boiling water, and the solid-to-liquid transition in metals
are first-order. At the transition point, both phases coexist. The system can be partly ice
and partly water at 0 °C, and the energy required to move material from one phase to the
other is the latent heat.

Continuous (or second-order) transitions lack latent heat. The order parameter changes
smoothly from zero to nonzero, but its derivatives diverge at the critical point. The
transition from ferromagnet to paramagnet at the Curie temperature is the canonical example.
Below the Curie temperature — 770 °C for iron — atomic magnetic moments align spontaneously.
Above it, thermal agitation randomizes them and the material loses its permanent magnetism.
No latent heat is absorbed or released. Instead, the heat capacity diverges, meaning the
system becomes infinitely sensitive to temperature changes at the critical point.

## The Ising model and the exact solution

The Ising model, proposed by Ernst Ising in 1920 and named after his cousin Wilhelm Ising,
is a simplified lattice model of magnetism. Each site on a grid holds a spin that points up
or down. Neighboring spins prefer to align. The model has a single control parameter —
temperature — and captures the essence of the ferromagnetic phase transition: at low
temperatures the spins align collectively, at high temperatures they randomize.

In one dimension, Ernst Ising showed that no phase transition occurs at any finite
temperature. The result was taken as evidence that the model was too simple to capture real
magnetism. In 1944, Lars Onsager proved that conclusion depended on dimensionality. He
solved the two-dimensional Ising model exactly, finding a finite critical temperature where
the specific heat diverges logarithmically. The solution, published in _Physical Review_,
was a mathematical tour de force that confirmed the model could indeed exhibit a genuine
phase transition.

Onsager's result mattered because it provided an exact benchmark. Approximations such as
mean-field theory predicted a transition, but got the critical behavior wrong. The exact
solution showed that the nature of the divergence near the critical point depended on
dimensionality in ways that mean-field theory could not capture.

## Critical phenomena and universality

The most surprising discovery about continuous phase transitions is universality. Different
systems — liquid-gas transitions, ferromagnets, binary alloys — share the same critical
exponents. These exponents describe how quantities like heat capacity, correlation length,
and magnetization behave near the critical point. For example, the heat capacity diverges as
a power law of the temperature difference from criticality: $C \propto |T_c - T|^{-\alpha}$.
The value of $\alpha$ is the same for liquid-gas and uniaxial ferromagnetic transitions,
even though the microscopic forces are entirely different.

Universality means that thermodynamic behavior near the critical point depends not on atomic
details but on broad features: the dimensionality of the system and the symmetry of the
order parameter. A fluid and a magnet can belong to the same universality class because they
share those features. The microscopic forces — van der Waals interactions in fluids,
exchange interactions in magnets — become irrelevant.

The physical mechanism behind universality is the divergence of the correlation length. The
correlation length measures how far apart two regions of the system can be while still
influencing each other. Far from the critical point, correlations decay quickly and the
system looks locally ordered. As the critical point is approached, the correlation length
grows without bound. Fluctuations appear at every scale. The system becomes self-similar — a
pattern repeats at larger and larger scales — and the microscopic details wash out because
no single scale dominates.

## The renormalization group

Kenneth Wilson provided the theoretical framework that explains universality. His
renormalization group theory, developed in the early 1970s, describes how physical systems
change when viewed at different scales. The core idea is coarse-graining: group nearby
degrees of freedom into blocks, average over the short-distance details, and rescale the
result so it can be compared to the original system.

Under repeated coarse-graining, the parameters that define a system — coupling strengths,
interaction ranges, temperature — flow through a space of possible values. Most flows
converge toward fixed points. A fixed point represents a scale-invariant system, one that
looks the same at every magnification. The critical point of a continuous phase transition
corresponds to such a fixed point.

Wilson's framework classifies parameters as relevant or irrelevant. Relevant parameters grow
under coarse-graining and push the system away from the fixed point. Irrelevant parameters
shrink and vanish. Universality emerges because all systems whose irrelevant parameters flow
to zero end up looking the same at large scales. Only the relevant parameters —
dimensionality and symmetry — survive.

Wilson's renormalization group theory earned him the 1982 Nobel Prize in Physics. It
provided a constructive explanation for critical phenomena that earlier theories could not
deliver.

## Water at the critical point

The liquid-gas critical point of water sits at 373.946 °C and 22.064 MPa (about 218
atmospheres). Above this temperature and pressure, the distinction between liquid and gas
vanishes. There is no phase boundary. The heat of vaporization drops to zero. Water exists
as a supercritical fluid with properties intermediate between liquid and gas.

Near the critical point, water exhibits "critical opalescence." The liquid becomes cloudy
because density fluctuations occur at every scale, including the scale of visible
wavelengths. Light scatters off these fluctuations, turning the fluid milky. The effect is a
direct visual manifestation of the diverging correlation length.

## Phase transitions beyond thermodynamics

The mathematics of phase transitions extends beyond condensed matter physics. Percolation
theory models a geometric phase transition on a lattice. Each site or bond is occupied with
probability $p$. Below a critical threshold $p_c$, occupied sites form small clusters. Above
it, an infinite cluster spans the system. The connection probability plays the role of
temperature. Percolation thresholds depend on the lattice structure and dimensionality, and
the transition exhibits its own universality class.

Epidemic spreading maps onto percolation. In network models of disease transmission, the
infection rate determines whether an outbreak remains localized or becomes a pandemic. The
epidemic threshold is a percolation transition. Below it, chains of infection die out. Above
it, a connected component of infected individuals spans the population.

Second-order phase transitions appear in models of neural activity, where networks operate
near a critical point between ordered and chaotic regimes. This "critical brain" hypothesis
suggests that operating at the edge of a transition maximizes information processing and
dynamic range. The evidence is still developing, but the connection between criticality and
computational capacity is a active area of research.

Network science has found phase transitions in cascading failures, opinion dynamics, and the
emergence of giant components in random graphs. The Erdős–Rényi model of random graphs
exhibits a sharp transition: when the average number of connections per node crosses unity,
a giant connected component appears suddenly. Below the threshold, all components remain
small.

## What phase transitions reveal

Phase transitions show that abrupt change does not require an abrupt cause. Smooth
microscopic interactions can produce discontinuous macroscopic behavior when the system is
large enough and the control parameter crosses a critical value. The transition is a
property of the collective, not of any individual component.

Universality is the deeper lesson. Systems with different microscopic rules can share the
same large-scale behavior near criticality. The details that distinguish a fluid from a
magnet become irrelevant. What matters is the dimensionality, the symmetry, and the
structure of the fluctuations.

This is not a metaphor for simplification. It is a mathematical result with precise
predictions. Critical exponents measured in liquid crystals match those of magnetic
materials. Percolation thresholds predicted on theoretical lattices match those observed in
porous media. The renormalization group explains why: at the critical point, the system has
no characteristic scale, and the microscopic rules that govern individual particles cannot
imprint themselves on behavior that spans all scales.

Phase transitions are common enough to be invisible. The fact that they produce universal
behavior — that different systems converge to the same mathematics at the edge of a
transition — is what makes them worth studying.

## Sources

- Onsager, L. (1944). "Crystal Statistics. I. A Two-Dimensional Model with an Order-Disorder
  Transition." _Physical Review_, 65(3–4), 117–149.
- Wilson, K. G. (1971). "Renormalization Group and Critical Phenomena. I. Renormalization
  Group and the Kadanoff Scaling Picture." _Physical Review B_, 4(9), 3174–3183.
- Wilson, K. G. (1975). "The Renormalization Group: Critical Phenomena and the Kondo
  Problem." _Reviews of Modern Physics_, 47(4), 773–840.
- Goldenfeld, N. (1992). _Lectures on Phase Transitions and the Renormalization Group_.
  Addison-Wesley. (Reprinted by Westview Press, 1999.)
- Stanley, H. E. (1971). "Introduction to Phase Transitions and Critical Phenomena." Oxford
  University Press.
