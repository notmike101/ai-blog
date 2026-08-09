---
title: Markov Chains — What Memorylessness Assumes and Loses
description:
  Markov chains model systems where only the present state determines what comes next. The
  assumption is powerful, but it discards history that sometimes matters.
publishedAt: 2026-08-09T01:00:00-05:00
categories:
  - Mathematics
  - Technology
---

A Markov chain is a stochastic process with one defining constraint: the probability of
moving to the next state depends only on the current state, not on how the system arrived
there. This "memoryless" property — the Markov property — makes the model tractable. It also
means the model throws away information. Understanding what it discards, and when that
matters, is more useful than the mathematical formalism alone.

## The Markov property

Formally, for a discrete-time process $X_0, X_1, X_2, \ldots$ taking values in a state space
$\mathcal{S}$, the Markov property states:

$$\Pr(X_{n+1} = x \mid X_n = x_n, X_{n-1} = x_{n-1}, \ldots, X_0 = x_0) = \Pr(X_{n+1} = x \mid X_n = x_n)$$

The entire history collapses to the present. If the current state captures everything
relevant about the system, the model works well. If not, it produces confident but
misleading predictions.

The distinction is practical rather than philosophical. A weather model that tracks only
today's conditions — sunny, cloudy, rainy — ignores atmospheric patterns that unfold over
days. The chain will still produce probabilities, but those probabilities may not reflect
reality accurately. Whether the simplification is acceptable depends on what you need the
model for.

## Transition matrices

When the state space is finite, a Markov chain is represented by a transition matrix $P$.
Each entry $p_{ij}$ gives the probability of moving from state $i$ to state $j$ in one step.
Every row sums to 1, since the system must go somewhere.

Consider a simple two-state system: a server that is either up or down.

$$P = \begin{pmatrix} 0.95 & 0.05 \\ 0.3 & 0.7 \end{pmatrix}$$

From the "up" state, there's a 95% chance of staying up and a 5% chance of failing. From
"down," there's a 30% chance of recovering and a 70% chance of staying down. The matrix
encodes the full dynamics of the system — assuming those probabilities are accurate and
stable over time.

Raising $P$ to the $n$th power gives the $n$-step transition probabilities. $P^2$ tells you
the probability of being in any state after two steps, regardless of where you started. This
compositional property is what makes Markov chains computationally convenient: you can
project forward without tracking individual histories.

## Stationary distributions

Many Markov chains settle into a long-term pattern. A stationary distribution $\pi$
satisfies $\pi P = \pi$ — applying the transition matrix leaves the distribution unchanged.
For the server example, solving this system gives approximately
$\pi \approx (0.857, 0.143)$: over the long run, the server is up about 86% of the time.

Not every chain has a unique stationary distribution. Three conditions matter:

- **Irreducibility**: every state is reachable from every other state. If some states are
  isolated, the chain can get trapped in a subset of states.
- **Aperiodicity**: the chain doesn't cycle through states in fixed periods. A deterministic
  alternation between two states never settles.
- **Positive recurrence**: the expected return time to each state is finite. Without this,
  the chain may drift away indefinitely.

When all three hold, the ergodic theorem for Markov chains guarantees convergence to a
unique stationary distribution, regardless of the starting state. This result is the
mathematical foundation for PageRank, Monte Carlo methods, and many equilibrium models in
physics and economics.

## PageRank as a Markov chain

Google's original PageRank algorithm, described by Larry Page and Sergey Brin in their
[1998 paper "The Anatomy of a Large-Scale Hypertextual Web Search Engine"](https://ilpubs.stanford.edu:8443/422/),
models web surfing as a random walk. Each page is a state; each outgoing link is a
transition with equal probability. The importance of a page is its stationary distribution
probability — the fraction of time a random surfer spends on it.

The raw web graph has two problems for this model. Pages with no outgoing links (dangling
nodes) create absorbing states that trap the random walk. Groups of pages that link only to
each other form closed sets, preventing convergence to a unique distribution.

PageRank solves both with a damping factor $d$, typically set to 0.85. At each step, the
surfer follows a link with probability $d$ and jumps to a random page with probability
$1 - d$. This "teleportation" ensures every state is reachable from every other state
(irreducibility) and breaks deterministic cycles (aperiodicity). The resulting transition
matrix has a unique stationary distribution that can be computed through power iteration —
repeatedly multiplying the current estimate by the transition matrix until it converges.

The elegance of this approach is that it reduces web-scale ranking to an eigenvector
problem. The limitation is that it treats all links equally and assumes link structure
reflects content quality, which link farms and SEO manipulation exploit.

## Text generation and n-grams

Markov chains have been used for text generation since Claude Shannon's
[1948 paper "A Mathematical Theory of Communication"](https://doi.org/10.1038/164771a0),
where he demonstrated that English letter sequences follow statistical patterns. Shannon
showed that even character-level Markov models produce strings more recognizable than random
letters, though still largely nonsensical. A sample from his word-trigram model: "in no ist
lat whey."

The connection between n-grams and Markov chains is direct: an n-gram model is a Markov
chain of order $n-1$. A bigram model (order 1) chooses the next word based only on the
current word. A trigram model (order 2) considers the previous two words, and so on.

Higher-order models produce more coherent text but require exponentially more training data.
With a vocabulary of 50,000 words, a trigram model has up to $50{,}000^2 = 2.5$ billion
possible contexts — most of which never appear in any realistic corpus. This sparsity
problem is a fundamental trade-off: more context means better predictions for observed
patterns, but worse coverage overall.

Modern language models address this with neural networks and attention mechanisms that weigh
distant context without enumerating every possible n-gram. But the underlying tension
remains: how much history is enough, and how do you represent it efficiently?

## Absorbing states and absorbing chains

A state is absorbing if, once entered, the chain cannot leave it — formally, $p_{ii} = 1$.
Chains with one or more absorbing states and paths from all other states to at least one
absorbing state are called absorbing chains. They always reach an absorbing state
eventually; the question is which one and how long it takes.

Absorbing chains model processes with terminal outcomes: a patient who recovers or dies, a
gambler who wins or goes broke, a webpage that eventually leads to a dead end. The
"gambler's ruin" problem — calculating the probability that a gambler starting with $k$
dollars reaches $N$ before hitting 0 — is a classic absorbing chain with states
$\{0, 1, \ldots, N\}$ and transitions determined by the win/loss probabilities.

The expected time to absorption and the probability of reaching each absorbing state can be
computed from the transition matrix using standard linear algebra. These quantities matter
in practice: queueing theory uses them to estimate wait times, epidemiology uses them to
model disease spread, and reliability engineering uses them to predict system failure.

## What the Markov assumption loses

The Markov property is a simplification. Real systems have memory. Weather depends on
pressure systems that evolve over days. Language meaning depends on context that stretches
across paragraphs. Financial markets respond to trends, sentiment, and structural shifts
that no single "state" captures fully.

When you model a system as a Markov chain, you make a claim: the current state encodes
everything relevant about the future. That claim is either approximately true (the discarded
history has negligible effect), or it's a deliberate trade-off (the model is simpler and
faster, even if less accurate).

You can recover some lost memory by expanding the state space. Instead of tracking "sunny"
or "rainy," you track "(sunny, 3 consecutive sunny days)" versus "(sunny, 1 consecutive
sunny day)." The augmented chain is still Markovian — the extended state includes the
history that matters — but the state space grows quickly. This is the same trade-off that
n-gram models face: more context means a larger model.

Higher-order Markov chains formalize this approach by conditioning on the last $k$ states
instead of just the most recent one. They are useful when short-range dependencies matter
but long-range ones don't. When dependencies span arbitrary distances, Markov chains — even
high-order ones — become impractical, and other models take over.

## Why they remain useful

Markov chains persist because they strike a balance that few models do. They are simple
enough to analyze exactly — stationary distributions, absorption probabilities, and expected
hitting times have closed-form solutions for small chains. They scale to large systems
through iterative methods like power iteration. And they provide interpretable structure:
the transition matrix is a readable summary of system dynamics.

They appear in places where exact analysis matters: queuing networks, reliability models,
population genetics, hidden Markov models for speech recognition and bioinformatics, and
Markov chain Monte Carlo methods that underpin much of modern Bayesian statistics. In each
case, the Markov property is either a reasonable approximation or a deliberate modeling
choice that enables computation otherwise out of reach.

The value isn't in the assumption itself. It's in what the assumption makes possible:
tractable analysis of stochastic systems, with a clear account of what information the model
uses and what it discards.
