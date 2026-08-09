---
title: Optimal Foraging — How Animals Decide What Is Worth Pursuing
description:
  Optimal foraging theory predicts how animals balance energy gains against search and
  handling costs. The marginal value theorem formalizes when to leave a depleted patch.
publishedAt: 2026-08-09T05:00:00-05:00
categories:
  - Science
  - Biology
---

An animal foraging for food faces a series of implicit calculations. Which prey to pursue.
How long to stay in a patch before moving on. When a smaller, easier meal is better than
waiting for a larger one. These decisions shape survival, reproduction, and the structure of
entire ecosystems.

**Optimal foraging theory** provides a mathematical framework for understanding these
choices. It emerged in the 1970s as behavioral ecologists began treating animal foraging as
an economic problem: maximize net energy intake per unit time, subject to the constraints of
the environment and the body. The predictions turned out to be surprisingly precise — and
their limitations just as instructive.

## The currency of foraging

The theory starts with a definitional choice: what is the forager trying to optimize? Most
models use **net energy gain per unit time** as the currency. The intuition is
straightforward. An organism that acquires more energy per minute can allocate the surplus
to growth, reproduction, or storage. Natural selection should favor individuals whose
foraging behavior approaches the optimum.

But the currency matters. Different environments select for different objectives. Animals in
energy-poor habitats may maximize intake rate. Animals facing predation risk may trade off
intake rate against safety. Animals with limited digestive capacity may prioritize food
quality over quantity. The choice of currency determines the shape of the prediction.

## The diet breadth model

The simplest and most influential model is the **optimal diet model**, also called the prey
choice or diet breadth model. It was developed by Eric Charnov in 1976, building on earlier
work by MacArthur and Pianka.

The model considers a forager encountering prey types ranked by profitability — defined as
energy content divided by handling time. Handling time includes capture, processing, and
consumption. The central prediction is a threshold rule: when high-profitability prey are
abundant enough, the forager should ignore lower-profitability types entirely. It should
only broaden its diet when encounter rates with preferred prey drop below a calculable
threshold.

Formally, a forager should accept prey type $i$ only if its profitability $E_i / h_i$
exceeds the expected intake rate from searching for better prey alone. The result is a sharp
prediction: diet breadth should expand as the abundance of preferred prey declines. The
forager switches from specialist to generalist at a specific encounter rate, not gradually
or based on prey quality alone.

Field tests with great tits (_Parus major_) by John Krebs and colleagues in the 1970s found
broad support. Birds presented with beads of different sizes and colors — simulating prey
with different energy contents and handling times — selectively ignored smaller beads when
large ones were abundant, and accepted them when large beads became scarce. The switching
point matched the model's prediction.

Similar patterns appeared in oystercatchers foraging on mussels. Researchers Meire and
Ervynck found that these birds prefer mussels 30 to 45 millimeters in diameter — not the
largest available, but the ones that maximize energy per handling time. Initially, a simple
profitability model predicted a preference for 50 to 55 millimeter mussels. Adding prey
density to the calculation corrected the prediction, showing that encounter rate matters as
much as individual profitability.

## The marginal value theorem

The diet model assumes the forager moves between discrete encounters. Many real foragers
work in **patches** — a flower cluster, a clump of insects, a berry bush — where resources
are concentrated but deplete over time. Each additional minute spent in a patch yields less
than the previous one. At some point, leaving and traveling to a new patch becomes more
profitable.

Eric Charnov's 1976 **marginal value theorem** formalized this trade-off. The prediction is
elegant: a forager should leave a patch when its instantaneous rate of gain drops to the
average rate available across the entire habitat, including travel time between patches.

Graphically, the gain from a patch follows a diminishing-returns curve — steep at first,
then flattening. The optimal departure point is where a tangent line from the travel-time
intercept touches that curve. Longer travel times push the tangent point further along the
curve, predicting longer stays. Shorter travel times predict earlier departures.

The theorem has been tested across diverse taxa with consistent results:

- **European starlings** (_Sturnus vulgaris_) foraging for mealworms in experimental patches
  left at rates matching the model's prediction. When Kacelnik and colleagues increased the
  travel time between patches, the birds stayed longer and carried larger loads — exactly as
  the marginal value theorem predicted.

- **Great tits** foraging in artificial patches with depleting food supplies departed closer
  to the optimal time than would be expected by random variation.

- Even **dung flies** choosing copulation duration — a non-foraging context — followed the
  pattern, leaving a mate when the marginal gain dropped below the habitat average.

The breadth of these matches is what made the marginal value theorem one of the most cited
results in behavioral ecology. A single geometric argument predicted departure timing across
birds, insects, and mating behavior.

## What the models get wrong

Optimal foraging theory has faced sustained criticism, and the criticisms illuminate the gap
between mathematical optimality and biological reality.

**Perfect design assumption.** The models assume natural selection produces behaviors that
match the mathematical optimum. Real organisms inherit constraints — morphological,
cognitive, and developmental — that prevent perfect optimization. A bird's beak shape limits
which prey it can handle. A fish's visual system constrains what it can detect. These are
not design choices; they are inherited starting conditions.

**Predation risk.** The classic models optimize energy intake without accounting for danger.
Animals foraging in open terrain face higher predation risk than those in cover. Many
species trade off intake rate against safety, accepting lower energy gains to reduce
exposure. Researchers later extended the models to include risk, but the extensions
multiplied the number of free parameters, weakening predictive power.

**Nutrient balancing.** Energy is not the only currency. Animals need proteins, fats,
minerals, and vitamins in specific proportions. A high-energy food that lacks essential
nutrients is not optimal. The **two-dimensional optimal foraging model** by Cooper and Lumey
(1980) added protein constraints, showing that nutrient needs can override pure energy
maximization. More recent work using geometric frameworks has shown that animals often
balance multiple nutritional axes simultaneously.

**Cognitive limits.** The models assume perfect information about encounter rates, handling
times, and patch quality. Real foragers estimate these quantities from experience, with
error. Some use simple rules of thumb — like leaving a patch after a fixed number of empty
encounters — that approximate the optimum without requiring explicit calculation.

**Lifetime vs. instantaneous optimization.** Kacelnik's work with honeybees revealed a
surprising deviation. Unlike starlings, which maximize intake rate, bees appear to maximize
energy efficiency — energy gained per energy spent. Heavy nectar loads shorten individual
lifespan, but the colony benefits from efficient foraging. The unit of selection (individual
vs. colony) changes the optimal strategy.

## Why the framework endures

Despite its limitations, optimal foraging theory remains a foundational tool in behavioral
ecology. Not because the models are perfectly accurate, but because they establish a null
hypothesis. When observed behavior deviates from the prediction, the deviation points to
something the model missed — predation risk, nutrient constraints, cognitive limits, or
conflicting selective pressures.

The marginal value theorem has found applications beyond foraging. Researchers have used it
to model human decision-making in foraging contexts, animal dispersal, mate choice, and even
the timing of medical interventions. The core structure — leave when the marginal gain drops
below the alternative — is a general principle about resource allocation under diminishing
returns.

The theory's lasting value lies in its clarity. It takes a messy biological problem and
reduces it to testable predictions with specific numerical thresholds. When those
predictions fail, the failure is informative. It tells us what forces the simple model
omitted, and points toward a more complete account of how organisms navigate a world of
limited resources and competing demands.

## Sources

- Charnov, E. L. (1976). "Optimal foraging: the marginal value theorem." _Theoretical
  Population Biology_, 9(2), 129–136.
  [DOI: 10.1016/0040-5809(76)90040-X](<https://doi.org/10.1016/0040-5809(76)90040-X>)

- MacArthur, R. H., & Pianka, E. R. (1966). "On optimal use of a patchy environment." _The
  American Naturalist_, 100(915), 377–383.
  [DOI: 10.1086/282450](https://doi.org/10.1086/282450)

- Krebs, J. R., Davies, N. B., & Taylor, P. M. (1978). "Optimal foraging: cursorial birds in
  patchy distributions." _Animal Behaviour_, 26(3), 842–853.
  [DOI: 10.1016/0003-3472(78)90069-9](<https://doi.org/10.1016/0003-3472(78)90069-9>)

- Kacelnik, A., Krebs, J. R., & Taylor, P. J. (1986). "Travel costs and optimal foraging in
  European starlings." _The American Naturalist_, 127(6), 865–877.
  [DOI: 10.1086/284493](https://doi.org/10.1086/284493)

- Meire, P., & Ervynck, T. (1985). "Optimal foraging in the oystercatcher (_Haematopus
  ostralegus_): prey-size selection and profitability." _Journal of Animal Ecology_, 54(2),
  339–350. [DOI: 10.2307/4698](https://doi.org/10.2307/4698)

- Cooper, W. E., & Lumey, L. H. (1980). "Optimal foraging on two foods." _Theoretical
  Population Biology_, 18(2), 203–221.
  [DOI: 10.1016/0040-5809(80)90017-3](<https://doi.org/10.1016/0040-5809(80)90017-3>)
