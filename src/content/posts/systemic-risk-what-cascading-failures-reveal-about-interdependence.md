---
title: Systemic Risk — What Cascading Failures Reveal About Interdependence
description:
  Systemic risk describes how interconnected systems fail not from a single weak component,
  but from the pattern of connections between them.
publishedAt: 2026-07-23T19:30:00-05:00
categories:
  - Science
  - Technology
---

A single overloaded power line should not black out fifty million people. A single
underwater cable should not disconnect a continent from the internet. A single mortgage
default should not collapse the global banking system. Yet all three have happened.

Systemic risk describes the vulnerability of interconnected systems to cascading failure. It
does not arise from any single weak component. It arises from the pattern of connections
between components — the architecture of interdependence itself.

The concept originated in finance. Hyman Minsky argued in the 1970s that financial systems
are inherently unstable: periods of calm encourage borrowing, borrowing encourages more
lending, and the resulting leverage creates what he called Ponzi finance, where borrowers
rely on asset appreciation rather than income to service debt. When asset prices stop
rising, the structure collapses. Minsky's central insight was not that individual
participants are reckless. It is that rational behavior at the level of each participant
produces fragility at the level of the whole.

The 2008 financial crisis validated this insight. The failure was not concentrated in one
institution. It spread through a network of interbank lending, credit default swaps, and
structured products. When one institution suffered losses, its creditors lost confidence.
They demanded collateral or refused to roll over short-term funding. The distressed
institution sold assets to raise cash, which drove down asset prices, which impaired the
balance sheets of other institutions, which triggered more selling. The network of
connections that normally distributes risk across the system became the mechanism that
amplified it.

Allen and Gale examined this dynamic in their 2000 work on interconnections among similar
banks. They showed that dense interbank networks distribute the impact of a shock across
many participants, which can contain damage from small failures. But they also showed that
the same density can transmit large shocks through the entire system. Interconnectedness is
both a shield and a conduit.

Gai and Kapri formalized this paradox in a 2009 paper. They modeled financial networks with
varying degrees of connectivity and found that increasing connectivity always reduces the
impact of small shocks but increases the probability of a large, system-wide collapse. The
same structural feature that protects against routine stress makes the system more
vulnerable to rare, extreme events.

Acemoglu, Ozdaglar, and Tahbaz-Salehi extended this analysis in 2015. They showed that the
relationship between connectivity and systemic risk is not monotonic. Moderate
interconnectedness can absorb shocks by spreading them. Beyond a threshold, additional
connections create feedback loops that amplify them. The system becomes more fragile the
more resilient it appears.

This pattern — that interconnectedness can be both stabilizing and destabilizing — appears
across many domains.

## Power grids and cascading failure

The 2003 Northeast blackout left fifty million people in eight US states and one Canadian
province without power for up to four days. The official investigation found that the
cascade began when a tree contacted a high-voltage transmission line in Ohio. The line
tripped offline. The power it was carrying redistributed to parallel lines. Those lines
sagged as they overheated, contacted more vegetation, and tripped as well. Within minutes,
dozens of lines had failed.

The investigation report identified several contributing factors. FirstEnergy's software
failed to alert operators to a critical alarm. Their monitoring system had been updated
shortly before the blackout, and the new version suppressed the very warning that would have
told operators to shed load. The operators watched their screens without seeing the full
picture. By the time they understood what was happening, the cascade had passed the point of
no return.

The cascade itself followed a pattern that researchers call direct load redistribution. When
a transmission line trips, the power that was flowing through it must flow through other
lines. If those lines are already near capacity, they overload and trip in turn. The
remaining lines carry more load, trip, and the process repeats until the grid splits into
isolated islands or the entire system collapses.

The 2003 blackout was not the first cascading failure in a power grid. Thomas C. Gordon
studied large electrical disturbances as early as 1951. He observed that failures in
electrical systems rarely propagate randomly. They follow paths determined by the physical
layout of the grid, the loading patterns, and the protection schemes designed to isolate
faults. Those protection schemes can sometimes make cascades worse by forcing load onto
already-stressed lines.

Power grid design illustrates a broader principle: systems are often engineered to withstand
specific, anticipated failures. A transmission line is designed to carry its rated current.
A protection relay is designed to isolate a fault. But the system as a whole is rarely
designed to withstand the interaction of multiple failures, because the number of possible
interactions is too large to enumerate. The system is robust to expected failures and
fragile to unexpected combinations.

## Internet architecture and redundant paths

The Internet was designed to survive nuclear war. That claim is often overstated. The
original ARPANET did not survive nuclear war because the scenario it was designed for —
simultaneous destruction of multiple nodes across a continent — was never tested in
practice. But the design principle was sound: build a network with no single point of
failure, where packets can find alternate routes when links fail.

The Internet's routing protocol, BGP (Border Gateway Protocol), implements this principle by
allowing routers to exchange information about reachable networks and to adjust their paths
when a link fails. In normal operation, this works well. When a major link or router fails,
traffic reroutes through alternative paths.

But BGP has its own failure modes. In 2008, several undersea cables were cut near the Middle
East, disconnecting much of the Middle East and parts of South Asia from the global
Internet. BGP rerouted traffic through available alternatives, but those alternatives were
congested, and in some cases non-existent. The result was not a complete collapse, but
severe degradation for tens of millions of users.

The Internet's architecture makes it resilient to random failures. Remove any single router
or cable, and the network typically reconfigures. But it is vulnerable to coordinated
failures — multiple failures that occur simultaneously in locations that fragment the
network's topology. This vulnerability is not unique to the Internet. It is a property of
any system whose components are arranged in a network topology.

## Scale-free networks and hub vulnerability

Albert-László Barabási and Réka Albert demonstrated in 1999 that many real-world networks —
the Internet, social networks, citation networks — are not random. They follow a power-law
degree distribution, meaning most nodes have few connections while a small number of nodes
(hubs) have many. They called these scale-free networks because the distribution looks the
same at different scales.

Scale-free networks have a distinctive property: they are remarkably robust to random node
removal. If you remove a random node, it is almost certainly not a hub, and the network
remains connected. But they are fragile to targeted attacks on hubs. Remove a few key hubs,
and the network fragments rapidly.

This finding has important implications for systemic risk. If a system's architecture
concentrates connectivity in a few hubs, those hubs become critical points of failure. Their
failure does not just remove one node. It disconnects all the nodes that depended on them.
The system loses not only the hub's capacity but also the connectivity that hub provided.

Financial networks exhibit this pattern. A small number of systemically important
institutions — the "too big to fail" banks — have far more connections than the average
institution. Their failure propagates through the network far more than their size alone
would predict. The 2008 crisis demonstrated this: Lehman Brothers' collapse transmitted
shocks through the entire financial system, not because of its balance sheet alone, but
because of the web of exposures that other institutions held to it.

## The threshold problem

Across these domains — finance, power grids, the Internet — a common pattern emerges.
Systems grow more resilient as they add connections, up to a point. Beyond that point,
additional connections increase the probability of cascading failure. The relationship
between connectivity and resilience is inverted U-shaped.

This threshold behavior is not a flaw in system design. It is a fundamental constraint.
Every connection that distributes risk also provides a path for its transmission. Every
redundant path that survives one failure creates a new dependency that can fail in
combination with other failures.

The threshold is not fixed. It depends on the system's control mechanisms, the speed at
which it can respond to failures, and the degree to which failures are correlated. A power
grid with fast-acting protective relays can tolerate more connectivity than one without. A
financial system with central clearing and margin requirements can absorb shocks that would
overwhelm an uncleared derivatives market.

Understanding where a system sits relative to its threshold is difficult. The threshold is
not visible in normal operation. It only becomes apparent when a failure occurs. By then,
the system may have already crossed it.

## What this means for AI systems

The same principles that govern financial networks, power grids, and the Internet apply to
AI systems. As AI models become more interconnected — integrated into search engines, coding
tools, decision support systems, autonomous agents — the pattern of their interdependence
will determine whether failures are contained or amplified.

A single model producing an incorrect answer is a localized error. A chain of models that
each trust the previous model's output, each introducing small errors that compound into
catastrophic failure, is a systemic risk. The architecture of the system — how models
communicate, how they validate each other's outputs, how they can isolate failures — will
determine whether the system is robust or fragile.

The lesson from decades of research into cascading failures is not to avoid interconnection.
Interconnection is what makes complex systems useful. The lesson is that robustness and
fragility are not properties of individual components. They are properties of the
connections between them. Designing for resilience requires understanding not just what each
component does, but how its failures propagate through the network it inhabits.
