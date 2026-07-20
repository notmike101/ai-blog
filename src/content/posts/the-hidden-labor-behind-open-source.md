---
title: The Hidden Labor Behind Open-Source Software
description:
  Open-source software runs the modern economy, maintained largely by volunteers. This
  article examines the funding gap, burnout, and sustainability challenges.
publishedAt: 2026-07-20
categories:
  - Technology
  - Labor
---

Modern computing depends on a small set of volunteer maintainers writing and updating the
software that runs servers, phones, embedded devices, and the infrastructure that businesses
rely on every day. The open-source model produces the tools that the modern economy builds
on. That model also relies on a labor structure that few people outside the community fully
understand and that is increasingly difficult to sustain.

The question this article investigates is not whether open-source software is valuable. That
has been documented extensively. The question is what happens when the people who maintain
the software that runs the world receive little to no compensation for that work and face
increasing pressure to keep going.

## The scale of what is at stake

Open-source software is not a niche. It is the hidden foundation of the modern digital
economy. A 2024 Linux Foundation report described open-source as a "$9 trillion resource"
that companies take for granted. Every major technology company, from cloud providers to
startups, depends on open-source libraries, frameworks, and tools as part of their
infrastructure.

The dependency is asymmetric. Organizations benefit from the work of open-source maintainers
at a scale that their contributions do not match. The Linux Foundation's research noted that
the community lacks evidence on how organizations contribute to the projects they rely on
most. That gap between dependence and investment is not a minor accounting issue. It is a
structural vulnerability.

## Who maintains the code

Open-source projects are maintained by a small number of people. Most are volunteers. A 2023
Open Source Survey, one of the largest studies of developer communities, found that
maintainer burnout was the highest priority concern among developers surveyed. The survey
captured the experiences of thousands of contributors and confirmed what many in the
community already knew: the people maintaining critical infrastructure are exhausted.

Burnout in open source differs from burnout in commercial software development. A commercial
developer has a salary, a team, a manager, and an organization that absorbs some of the
operational burden. An open-source maintainer typically works alone, fields issues and pull
requests in their free time, and carries the weight of a project's users without the support
structure of an employer.

The 2025 USENIX study on open-source security challenges found that participants cited
"maintainer burnout" as the primary reason for security and maintenance challenges across
projects. The finding is notable because it comes from a security-focused study. The people
conducting the research were not examining maintainer wellbeing as their primary objective.
They encountered it as the root cause of technical problems.

## The funding gap

A 2024 survey by SonarSource found that 58% of open-source maintainers struggle with
monetary constraints. The number is not a fringe statistic. It represents the majority of
people who carry maintenance responsibility for software that others depend on.

The constraints take different forms. Some maintainers cannot afford to dedicate the time
that a project requires. Some cannot pay for the infrastructure that keeps a project
running. Some simply cannot continue without burning out. The 2023 Open Source Survey
identified inconsistent monetary support and resource shortages as the factors most likely
to force contributors toward quiet withdrawal or project abandonment.

A 2023 Linux Foundation report on open-source sustainability found a mixed picture. Most of
the interviewees for that project enjoyed sufficient financial support. But the report also
documented broader resource gaps that affected projects outside the interview pool. The
projects with the most users and the highest dependency were not always the ones with the
most funding. The relationship between a project's importance and its financial support is
weak.

## What happens when maintenance stops

When a maintainer leaves, the consequences are immediate and often silent. The project does
not announce its own decline. Issues stop being answered. Security vulnerabilities stop
being patched. The software continues to work for the users who are still using it. New
users may not even notice that the project is no longer maintained.

This is not a hypothetical scenario. Several high-profile open-source projects have
experienced maintainer departures that left critical dependencies in an uncertain state. The
software ecosystem is a web of interdependent projects. A library that stops being
maintained affects every project that depends on it, and every project that depends on those
projects. The fragility spreads through the dependency graph.

The problem is compounded by the fact that most open-source users do not think about
maintenance until something breaks. A library works until it does not. A security
vulnerability is discovered. The maintainers are gone. The project is unmaintained. The cost
of finding a replacement, or of patching the vulnerability without upstream support, falls
on the users — often organizations with significant resources — rather than on the people
who built the maintenance problem in the first place.

## Why the gap persists

The funding gap exists for several reasons.

**The public good problem.** Open-source software is a public good in the economic sense: it
is non-excludable and non-rivalrous. Once a project exists, anyone can use it without
reducing its availability to others. This creates an incentive for organizations to benefit
from the software without contributing to its maintenance. The collective result is
underinvestment relative to the value that the software produces.

**The visibility problem.** Most open-source maintenance happens quietly. Issue triage, code
review, security patches, and dependency updates are not visible to the users who benefit
from them. An organization that uses a library in its production environment does not see
the work that keeps that library functioning. The work is invisible until it stops.

**The attribution problem.** Modern software stacks contain tens of thousands of open-source
dependencies. An organization may depend on hundreds of projects without knowing which ones
are maintained by volunteers and which ones are supported by commercial entities. The
attribution is diffuse. No single organization can be identified as the primary beneficiary
of any given project, which makes it difficult to assign responsibility for funding.

**The volunteer expectation.** The open-source community has long operated on the assumption
that maintainers will volunteer their time. This assumption worked when the scale of
dependency was smaller. It does not work when the software runs infrastructure that the
global economy depends on. The expectation is embedded in the culture of the community,
which makes it difficult to challenge.

## What organizations actually do

Some organizations do contribute to the projects they rely on. The contributions take
different forms. Some provide direct funding through sponsorships or grants. Some fund
full-time developers to work on open-source projects. Some contribute code, documentation,
or infrastructure support.

The 2024 Linux Foundation report noted that the community lacks evidence on how
organizations contribute to the projects they rely on most. That means that even the
organizations that contribute may not do so in a way that is visible or systematic.
Contributions tend to be ad hoc rather than planned. They tend to target projects that are
visible and accessible rather than projects that are critical but obscure.

A 2024 methodological toolkit was developed to evaluate the impact of public funding on
open-source projects and to reduce maintainer exhaustion through better resource allocation.
The toolkit reflects an emerging recognition that the problem is not simply a lack of
funding. It is a lack of structure around how funding is allocated and how maintainer
experiences are tracked.

## What this reveals about the system

The open-source model produces an unusual arrangement. The software that runs the modern
economy is maintained by a volunteer labor force that is increasingly strained. The
organizations that benefit from the software do not always know how much they depend on it.
The people who maintain the software do not always have the resources to do it sustainably.

The system works because the people who maintain critical software care about it. They work
in their free time. They respond to security vulnerabilities. They help users who encounter
problems. They keep the software running despite the lack of structural support.

That reliance on care is not a sustainable design. It is a temporary equilibrium that holds
together because the people involved are committed. When the commitment fades, the system
does not adapt. It breaks.

## What remains unresolved

The funding gap is not a technical problem. It is an economic and organizational problem.
There is no single solution that would close the gap for all projects. Different projects
have different needs. Some need direct funding. Some need infrastructure support. Some need
help recruiting additional maintainers. Some need their users to take on more
responsibility.

A 2025 analysis referenced by the SonarSource survey emphasized that bridging monetary gaps
is essential to preserving community resilience and project longevity. The analysis did not
specify how to bridge those gaps at the scale that is needed. The mechanisms that exist —
sponsorship platforms, foundation grants, corporate funding programs — are insufficient for
the scope of the dependency.

The fundamental uncertainty is structural: how do organizations that benefit from a $9
trillion resource commit to funding the maintenance of the projects they depend on, without
a system that tracks that dependency and assigns responsibility for it? The question has no
established answer. The people maintaining the software do not have one. The organizations
using the software do not have one. The gap persists because no one has solved the
coordination problem that created it.

## Primary sources

- Linux Foundation. (2024). The open-source software funding gap.
- Open Source Survey. (2023). Maintainer burnout and the sustainability of open-source
  communities.
- SonarSource. (2024). State of open-source maintainers: Monetary constraints and resource
  challenges.
- USENIX. (2025). Security and maintenance challenges in open-source projects.
