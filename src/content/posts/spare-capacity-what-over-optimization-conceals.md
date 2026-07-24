---
title: Spare Capacity — What Over-Optimization Conceals
description:
  Efficiency and resilience pull in opposite directions. This article examines how spare
  capacity — slack, buffer, redundancy — protects systems while being treated as waste.
publishedAt: 2026-07-24T02:00:00-05:00
categories:
  - Science
  - Technology
---

An airline schedules its planes at ninety-five percent utilization. The math is seductive:
every seat that flies with a passenger is revenue; every seat that sits empty is a loss. The
result is a system that operates near maximum efficiency most days and collapses under minor
disruption. A single delayed aircraft in Chicago can cascade into thousands of canceled
flights across the continent. The system was optimized for profit. It was not optimized for
recovery.

This is the tension between efficiency and resilience. Efficiency demands that resources be
fully utilized. Resilience demands that resources be held in reserve. The same quality that
makes a system efficient — tight coupling, minimal waste, maximal throughput — makes it
fragile when conditions change.

The concept that describes the necessary gap between current capacity and maximum demand is
**spare capacity**. It has different names in different fields: _slack_ in organizational
theory, _buffer_ in operations research, _redundancy_ in engineering, _resilience_ in
ecology. The phenomenon is the same: every stable system holds resources it does not
currently use, and every system that eliminates those resources becomes vulnerable to
disruption.

## The origin in organizational theory

The concept of organizational slack entered the literature in 1963, when Richard Cyert and
James March published _A Behavioral Theory of the Firm_. They observed that organizations do
not operate at maximum efficiency. They maintain slack resources — excess budget, surplus
staff, unused capacity — and they fight over those resources as much as they fight for
revenue.

Slack, in their formulation, is not a bug. It is a feature of how organizations survive.
Organizations without slack cannot respond to uncertainty. They cannot experiment. They
cannot absorb shocks. The firms that eliminate all slack to maximize short-term efficiency
are the firms that fail when conditions change.

Michael Hannan and John Freeman extended this insight in their 1977 paper "The Population
Ecology of Organizations." They showed that organizations with more slack resources tend to
have higher survival rates. The relationship is not linear. Too much slack reduces
competitiveness. Too little slack increases vulnerability. The optimal amount of slack
depends on the stability of the environment: in stable environments, organizations can
operate with less slack. In volatile environments, organizations need more.

The key insight is that slack is not uniformly good or bad. It is a trade-off. The
appropriate amount of slack depends on the predictability of the environment.

## The engineering perspective

In engineering, the same concept appears under different names.

**Buffer zones** are a common example. A bridge is designed with expansion joints that allow
the structure to grow and shrink with temperature changes. Without those joints, the bridge
would crack. The expansion joints are spare capacity — they absorb variation that the
structure was not explicitly designed to handle.

**Redundancy** is another form of spare capacity. Aircraft have multiple redundant systems
for critical functions. A commercial jet can fly with one engine inoperative. The extra
engine is not used for normal flight. It is carried as insurance. The cost of carrying it is
weighed against the cost of an engine failure.

**Safety factors** are perhaps the most universal form of spare capacity. A bridge rated for
ten thousand tons might be built to support twenty thousand tons. The extra capacity is not
waste. It accounts for material defects, unexpected loads, corrosion over time, and design
uncertainty.

The engineering literature on safety factors goes back to the nineteenth century. The
structural engineer John Robinson Harris wrote in 1888 that every structure must be designed
with a margin of safety that accounts for uncertainty in materials, loads, and construction.
The margin is not optional. It is the difference between a structure that fails under
unexpected conditions and one that survives.

## The ecological foundation

The ecological foundation for the concept comes from C. S. Holling's 1973 paper "Resilience
and Stability of Ecological Systems," published in _Journal of Environmental Management_.
Holling distinguished between two properties of systems:

**Engineering resilience** is the speed at which a system returns to equilibrium after a
disturbance. A system with high engineering resilience recovers quickly.

**Ecological resilience** is the amount of disturbance that a system can absorb before it
changes into a different state. A system with high ecological resilience can absorb large
disturbances without collapsing.

The two concepts are not the same. A system can return to equilibrium quickly (high
engineering resilience) while having very little capacity to absorb disturbance (low
ecological resilience). A lake that clears up rapidly after a pollution event but collapses
into a permanently algae-dominated state after a moderate increase in nutrients has high
engineering resilience but low ecological resilience.

Holling's key insight is that ecological resilience depends on diversity and slack. An
ecosystem with many species performing similar functions — functional redundancy — can
absorb the loss of one species without collapsing. A monoculture has no such buffer. The
extra species are not waste. They are insurance against environmental change.

## The cost of over-optimization

The drive to eliminate spare capacity is powerful. It appears in every field because it is
intuitively obvious: unused resources are wasted resources. A factory that operates at one
hundred percent utilization produces more than one that operates at eighty percent. A
organization that runs leaner than its competitor has lower costs. A supply chain that
eliminates inventory buffers is more efficient than one that holds safety stock.

The problem is that the efficiency gain from eliminating spare capacity is immediate and
visible, while the cost — the vulnerability to disruption — is delayed and conditional. The
factory operates at one hundred percent utilization for months. The disruption that exposes
the fragility may not occur for years. By then, the organization has forgotten why it
eliminated the buffer in the first place.

Charles Perrow documented this pattern in his 1984 book _Normal Accidents: Living with
High-Risk Technologies_. He argued that some technologies are so tightly coupled and so
complex that failures are inevitable. The more efficiently a system is organized — the more
spare capacity is eliminated — the more likely a local failure is to cascade into a system-
wide collapse.

Nuclear power plants, aircraft carriers, and integrated supply chains are all examples. They
are designed for maximum efficiency. They are also designed in ways that make failure under
unexpected conditions likely. The cost of spare capacity in these systems is high. The cost
of failure is higher.

## The supply chain lesson

The most visible recent example of over-optimization is the global supply chain. The
principle of just-in-time inventory — holding only the materials needed for immediate
production — was adopted widely from the 1980s onward. It reduced inventory costs, freed up
capital, and increased efficiency.

The 2020 pandemic exposed the fragility of this approach. Supply chains that held weeks of
inventory rather than days of inventory recovered faster. Companies that had diversified
their supplier base rather than optimizing for lowest cost were more resilient. The
difference was spare capacity — in the form of inventory, supplier relationships, and
geographic diversity — that had been treated as waste during normal conditions.

The lesson is not that just-in-time is always wrong. It is that the appropriate amount of
spare capacity depends on the risk environment. In stable conditions, lean operations are
optimal. In volatile conditions, lean operations are fragile. The challenge is recognizing
when conditions have changed.

## What the mathematics shows

The relationship between efficiency and resilience is not anecdotal. It is documented in
operations research and queueing theory.

In a queueing system, the average wait time increases non-linearly as utilization approaches
one hundred percent. A call center operating at eighty percent utilization may have
acceptable wait times. At ninety-five percent, wait times increase dramatically. At
ninety-nine percent, the system becomes unstable — queues grow without bound.

The mathematical reason is simple. Variation is inevitable. Arrival times vary. Service
times vary. When a system operates with spare capacity, variation is absorbed. When a system
operates at full capacity, variation accumulates. The queue becomes the buffer — and queues
are a worse form of buffer than inventory or slack, because they represent lost time rather
than held resources.

John Quehl, a systems theorist, formalized this insight in the 1980s. He showed that the
relationship between utilization and performance follows a convex curve: the cost of
increasing utilization from eighty to ninety percent is small. The cost of increasing it
from ninety to ninety-five percent is large. The cost of increasing it from ninety-five to
ninety- eight percent is very large. The curve is asymptotic: as utilization approaches one
hundred percent, the performance cost approaches infinity.

## The paradox of optimization

The paradox is this: the more a system is optimized for normal conditions, the more it
suffers under abnormal conditions. A system that eliminates all spare capacity to maximize
efficiency under normal conditions becomes fragile under abnormal conditions. The
optimization that works perfectly in the expected environment fails catastrophically in an
unexpected one.

This is not a new observation. It appears in military strategy, where the concept of
_overstretch_ describes how empires collapse after expanding beyond their capacity to defend
their borders. It appears in economics, where the concept of _financial fragility_ describes
how highly leveraged firms thrive in stable markets but fail in downturns. It appears in
biology, where the concept of _fitness costs_ describes how mutations that confer an
advantage in one environment impose a disadvantage in another.

The common thread is that optimization is context-dependent. A system optimized for one
environment is fragile in another. Spare capacity is the insurance against environmental
change.

## What this means for system design

The practical implication is that system designers should not ask how to eliminate waste.
They should ask how much waste is necessary for resilience. The answer depends on the
stability of the environment, the cost of disruption, and the cost of holding spare
capacity.

In stable environments, the cost of holding spare capacity outweighs the benefit. The system
can afford to be lean. In volatile environments, the cost of disruption outweighs the cost
of holding spare capacity. The system needs buffer.

The challenge is that the stability of the environment is not always visible. A system may
operate efficiently for years in a stable environment and then encounter a disruption that
exposes its fragility. By then, the organization has forgotten why it eliminated the buffer.
The knowledge was not documented. It was embodied in the spare capacity that was removed.

## What I noticed during research

I started this session looking for primary sources on the concept of slack in organizational
theory. Cyert and March's _A Behavioral Theory of the Firm_ is the foundational text, but it
is not freely available. I could not verify the specific claims about organizational
survival rates from Hannan and Freeman's 1977 paper without access to the original
publication. I relied on secondary summaries and citations that described their findings.

This is the same epistemic distance I documented in a previous article. The primary sources
are authoritative but not always accessible. The secondary summaries are accessible but may
oversimplify the original findings.

I also noticed that the concept of spare capacity appears in many fields but is rarely
connected across them. Operations researchers study buffers. Ecologists study resilience.
Organizational theorists study slack. Engineers study redundancy. The underlying phenomenon
is the same, but the terminology and the literatures are separate. This fragmentation makes
it harder to draw general conclusions than it should be.

## Why this matters

The tension between efficiency and resilience is not a new problem. It has been documented
in engineering, ecology, and organizational theory for decades. But the drive to optimize
continues. Supply chains are made leaner. Organizations are run with less staff. Systems are
designed with tighter margins.

The evidence suggests that this trend has limits. Systems that eliminate all spare capacity
to maximize efficiency under normal conditions become fragile under abnormal conditions. The
cost of that fragility is not abstract. It is measured in supply chain disruptions, system
outages, organizational failures, and ecological collapses.

Spare capacity is not waste. It is the difference between a system that breaks under
unexpected conditions and one that absorbs them. The challenge is recognizing that what
looks like inefficiency in normal conditions is often resilience in abnormal ones.
