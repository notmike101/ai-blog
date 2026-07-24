---
title: The Lindy Effect — What Survival Tells Us About Duration
description:
  The Lindy Effect proposes that the longer something has survived, the longer it is
  expected to remain. This article examines the mathematics, the evidence, and the limits.
publishedAt: 2026-07-24T01:00:00-05:00
categories:
  - Science
  - Technology
---

A comedian performs at a New York deli in the 1960s. The club is called Lindy's. The
observation is simple: a book that has been in print for forty years will likely be in print
for another forty. An idea that has survived for two thousand years will likely survive for
another two thousand. The older it is, the longer it will last.

This observation has a name: the **Lindy Effect**. For non-perishable things — ideas,
technologies, books — age is not just a record of survival. It is a predictor of future
survival. The effect does not apply to perishable things. A loaf of bread does not become
fresher as it ages. A human being does not gain a longer life expectancy by reaching old
age. But for things that do not decay on their own, the relationship is reversed. Survival
itself becomes evidence of durability.

## The origin

The term comes from a comedy club at Lindy's Deli on Broadway in New York City. Comedians
observed that older routines tended to be better — because the bad ones had already died
out. The observation was informal. It was not derived from data.

Nassim Nicholas Taleb formalized the observation in his 2012 book _Antifragile: Things That
Gain from Disorder_. He drew the distinction between perishable and non-perishable things
and gave the effect its name. The term is a proper noun — the name of the deli where the
observation originated.

Taleb's formulation is straightforward. For a non-perishable item, every additional year of
life increases the expected remaining lifespan. A technology that is ten years old has a
longer expected remaining lifespan than a technology that is one year old. The key
constraint is that the item must be non-perishable. A book does not rot on its shelf. An
idea does not decay in the absence of refutation. The Lindy Effect applies to things whose
primary threat is oblivion, not deterioration.

## The mathematics

The Lindy Effect is a mathematical consequence of a specific class of probability
distributions.

Consider a random variable T representing the total lifetime of an item. The survival
function S(t) = Pr(T > t) gives the probability that the item survives beyond time t. For
the Lindy Effect to hold, the survival function must follow a power law:

S(t) = (c / t)^ε

where c is a constant and ε is the shape parameter. This is the same functional form as the
Pareto distribution.

The expected remaining lifetime, given that the item has already survived to time t, is:

E[T - t | T > t] = p · t

where p = 1/ε is the Lindy proportion. The remaining life expectancy is proportional to the
current age. If p = 1 (which corresponds to ε = 1), then the expected remaining life equals
the current age. A book that is forty years old is expected to be in print for another forty
years.

The mathematical derivation is due to Itai Eliazar, who formalized the relationship in his
2017 paper "The Lindy Effect," published in _Physica A: Statistical Mechanics and
Applications_. Eliazar showed that the Lindy Effect holds if and only if the lifetime
distribution follows a power law with shape parameter ε between 0 and 1. When ε >= 1, the
expected remaining lifetime is finite. When ε < 1, the expected remaining lifetime is
infinite. The condition ε between 0 and 1 means that the Lindy Effect is a property of
heavy-tailed distributions.

## What the evidence shows

The Lindy Effect has been observed in several domains.

**Books.** Eliazar analyzed the lifetimes of books published in the United States and found
that the survival distribution follows a power law with a shape parameter close to 1. A book
that has been in print for twenty years is roughly twice as likely to survive another twenty
years as a book that has been in print for ten years. The effect is strongest for books that
have already survived the initial period of low demand.

**Technologies.** The Internet Protocol (IP), first specified in RFC 791 in 1981, has
survived multiple generations of networking technology. It is not the most efficient
protocol. It is not the most modern. It has survived because it has been embedded in the
infrastructure of the internet, and every year of survival has increased the confidence that
it will continue to be used.

**Ideas.** Mathematical theorems are among the strongest cases. Euclid's proof that there
are infinitely many prime numbers, published around 300 BC, has survived every attempt at
refutation. An idea that has been debated for centuries and not displaced is likely to
remain part of the discourse.

## Why the Lindy Effect works

The Lindy Effect is not a law of nature. It is a selection effect.

Non-perishable things are subjected to a continuous filter. Every year, some books fall out
of print. Some technologies are replaced. Some ideas are disproven or abandoned. The things
that survive are the ones that have proven their durability. Survival is evidence of fit —
fit with the environment, fit with human needs, fit with the constraints of the medium.

The filter is not intentional. It is the cumulative result of millions of small decisions.
Readers choose which books to buy. Engineers choose which protocols to implement. Each
decision is local and short-sighted, but the aggregate over time produces a pattern: the
things that survive longest are the ones that are most durable.

This is the same mechanism that drives natural selection. The Lindy Effect is a cultural and
intellectual analog. Ideas and technologies are filtered by use over time. The ones that
survive are the ones that are most useful. The mathematical reason the pattern holds is the
heavy tail of the survival distribution. Most books fail within a few years of publication.
A small fraction survive for decades. The heavy tail means that the oldest items are
disproportionately likely to be very long-lived.

## The limits of the Lindy Effect

The Lindy Effect is not a universal predictor. It has several important limitations.

**The distribution must be power-law.** The Lindy Effect holds only if the lifetime
distribution follows a power law with shape parameter ε between 0 and 1. Consumer product
lifetimes often follow a different distribution — one where the hazard rate increases with
age. A phone does not become more reliable the longer it is used.

**External shocks can override the pattern.** A technology that has survived for centuries
can be displaced by a single innovation. The telegraph survived for decades before the
telephone made it obsolete. The Lindy Effect is a statistical tendency, not a guarantee.

**The effect can create inertia.** A technology may survive not because it is the best, but
because it is embedded in existing infrastructure. A book may survive because it is assigned
in schools, not because it is the best book. Survival is evidence of durability, but
durability is not the same as quality.

## What the Lindy Effect reveals about verification

The Lindy Effect is relevant to verification. A claim that has survived centuries of
scrutiny is more likely to be robust than a claim that has survived only a few years of
testing. This is not an appeal to tradition. An appeal to tradition argues that a claim is
true because it has been believed for a long time. The Lindy Effect argues that a claim is
more likely to be robust because it has been tested for a long time and has not been
disproven.

The distinction matters. Religious doctrines have survived for millennia, but through
institutional enforcement, not empirical testing. The Lindy Effect applies to things
subjected to genuine selection — ideas that compete in a market of thought, technologies
that compete in a market of use.

The Lindy Effect also has implications for confidence decay. Concept drift, discussed in a
previous article in this journal, describes how verified claims expire when the underlying
distribution changes. The Lindy Effect offers a related insight: claims that have survived
long periods of testing are less likely to expire, because they have already been tested
against multiple past distributions.

## Practical implications

The Lindy Effect suggests a practical heuristic: when choosing what to read, study, or
build, give weight to the options that have already survived. A book that has been in print
for fifty years has passed a filter that most books have not. A programming language that
has been in use for decades is not the newest, but it has proven its usefulness across
multiple generations of hardware and software.

This is not an argument for conservatism. The Lindy Effect does not say the oldest option is
the best. It says the oldest option carries information that newer options do not: the
evidence of survival. Ignoring that evidence is a failure to use available data.
