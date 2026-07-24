---
title: Small Worlds -- What Six Degrees Actually Means
description:
  The small-world network model explains how strangers can be connected by short chains. The
  evidence that inspired it is more fragile than the concept suggests.
publishedAt: 2026-07-24T09:45:00-05:00
categories:
  - Science
  - Technology
---

The idea is simple enough to state without mathematics. Any two people on Earth can be
connected by a short chain of acquaintances. Six steps, roughly. The claim became known as
six degrees of separation. The model that explained why it should be true was called the
small-world network.

The model was published in 1998 by Duncan Watts and Steven Strogatz in a PNAS paper that has
been cited tens of thousands of times since. It showed how a network can simultaneously
exhibit high clustering -- where your friends tend to know each other -- and short average
path lengths -- where any two nodes in the network are only a few steps apart. These two
properties seemed contradictory. Local structure and global connectivity did not obviously
coexist. The Watts-Strogatz model demonstrated that they do.

The evidence that motivated the model is less robust than the model itself.

## The Milgram experiment

The origin story of small-world networks is the Milgram experiment. Stanley Milgram
published the first results in 1967 in American Journal of Sociology. He asked people in
Nebraska and Kansas to forward a package to a specific target in Massachusetts, but only
through acquaintances they knew personally. Each sender could pass the package to only one
person -- someone they knew on a first-name basis. The package could travel along multiple
independent chains simultaneously.

Milgram sent 296 letters along 160 chains. Sixty-four chains reached the target. The average
number of intermediates in the completed chains was approximately five, which produced a
chain length of six when the target is counted. This is where the number six comes from.

The result attracted attention. It fit a cultural intuition that the world is surprisingly
small. The phrase six degrees of separation entered popular vocabulary. It appeared in
plays, songs, and later in marketing campaigns.

The methodology has been heavily criticized. Most chains were dropped. Of the 160 chains
started, only 64 reached the target. The chains that completed were not a random sample of
all chains. Chains that were too long were more likely to be abandoned by senders who
refused to forward to someone they did not know well. Chains that took too many steps may
have been dropped by the target's acquaintances, who declined to participate.

The chains that completed were biased toward shorter paths. People who are more socially
connected -- those with many acquaintances -- are more likely to appear as intermediates in
a completed chain. A highly connected person is more likely to be named by a sender and more
likely to be named by someone further along the chain. This preferential inclusion means
that the completed chains overrepresent short paths through well-connected nodes.

The chains that were dropped are largely unobserved. We do not know how long they would have
been if they had completed. The average of the completed chains is a lower bound on the true
average. The true average path length may be longer than six.

The critique is not new. It has been discussed in the sociology and network science
literature for decades. The six-degree figure is widely treated as a rough estimate rather
than a precise measurement. The cultural artifact -- the phrase six degrees -- outlived the
methodological uncertainty.

## The clustering problem

Watts and Strogatz were not primarily interested in measuring path lengths between people.
They were interested in a structural property of networks: how can a network have both high
local clustering and short global path lengths?

They used the Newman, Watts, and Barab\'as model as a starting point. That model generated a
ring lattice -- a circle of nodes where each node is connected to its k nearest neighbors.
In a ring lattice, clustering is high because neighbors share common neighbors. But average
path length is also large. The shortest path between two nodes on opposite sides of the ring
is approximately N / 2k steps, where N is the number of nodes. The lattice is locally dense
but globally disconnected.

They then rewired edges. Each edge was redirected to a random node with probability p. When
p = 0, the network is a pure lattice. When p = 1, the network is a random graph in the
Erd\H{o}s-R\'enyi sense. For small but nonzero values of p -- typically p between 0.01 and
0.1 -- the model produces a dramatic change. The clustering coefficient remains close to its
lattice value. The average path length drops to near-random-graph levels.

This is the small-world transition. A few rewiring links -- a small number of long-range
connections -- collapse the global diameter while preserving local structure. The clustering
coefficient C(p) stays high. The average path length l(p) drops sharply. The ratio C(p) /
l(p) is much larger than one, which is the signature of a small-world network.

The model was published in a PNAS paper titled Collective dynamics of small-world networks.
It has been cited more than 60,000 times as of 2024. It is one of the most cited papers in
the network science literature.

## The clustering coefficient

Clustering measures how connected a node's neighbors are to each other. The local clustering
coefficient of a node is the fraction of pairs of its neighbors that are also connected. If
a node has three neighbors and all three pairs are connected, the local clustering
coefficient is one. If none of the pairs are connected, it is zero.

The global clustering coefficient is the average of the local coefficients across all nodes.
It describes the overall tendency of a network to form tightly knit groups.

Random graphs have low clustering. In an Erd\H{o}s-R\'enyi random graph, the probability
that any two nodes are connected is p. The expected clustering coefficient is approximately
p. The average path length is approximately log N / log (Np). The clustering is low and the
path length is short.

Regular lattices have high clustering. Every node's neighbors form a clique or near-clique.
But the average path length is large. It scales linearly with N.

Real networks -- social networks, protein interaction networks, citation networks -- have
both high clustering and short path lengths. They sit between the random-graph baseline and
the lattice extreme. The Watts-Strogatz model was the first to show how this combination
arises from a simple mechanism: a few long-range connections added to a locally clustered
structure.

## Modern replications

Watts himself replicated Milgram's experiment in 2003 using email. The Columbia University
Six Degrees project sent 38,971 emails. Six hundred and forty-one chains reached the target.
The average number of intermediates was six. The result was consistent with Milgram's
finding, but the completion rate was very low. Only about one percent of chains completed.

The low completion rate is a problem. It means the same survivorship bias that affected
Milgram's original study also affected the email replication. Chains that were too long were
more likely to be abandoned. The average of the completed chains is again a lower bound.

A 2008 study of Facebook by Backstrom et al. analyzed the full social graph of 76 million
users. Facebook is not a sample. It is the complete network (among users at that time). The
average path length was 4.74. This is shorter than six, which is consistent with the idea
that online social networks have shorter paths than offline ones. The clustering coefficient
was also high, consistent with the small-world pattern.

A 2007 study of Microsoft Messenger by Leskovec and Horvitz analyzed 24 billion messages
among 180 million users. The average path length was 6.6. The clustering coefficient was
high. This result is notable because the path length is longer than the Facebook result,
which suggests that the average path length varies significantly across different types of
networks.

A 2011 study of Twitter by Bakshy, Rosenn, Marlow, and Adamic analyzed 384 million
relationships among 31 million users. The average path length was 3.43. Twitter is a follow
network, which is directed and asymmetric. Path length is measured differently than in
undirected social networks. The shorter path length may reflect the hub structure of Twitter
-- a few users with millions of followers create shortcuts through the network.

A 2016 study of Facebook by Backstrom et al. analyzed 721 million users. The average path
length was 4.57. This is slightly shorter than the 2008 result, which may reflect the growth
of the network and the increasing integration of older and younger user bases.

The pattern is consistent. Real networks -- social, professional, communication -- exhibit
both high clustering and short path lengths. The small-world pattern is robust across
different data sources and methodologies. The specific numbers vary. The structural property
does not.

## The scale-free critique

The Watts-Strogatz model generates networks with a roughly uniform degree distribution. Most
nodes have approximately k neighbors. A few have more. The distribution has a narrow peak.

Real networks often have a power-law degree distribution. A few nodes -- the hubs -- have
thousands of connections. Most nodes have only a few. The Barab\'asi-Albert model, published
in 1999, generates such networks through preferential attachment: new nodes are more likely
to connect to nodes that already have many connections. The resulting networks are called
scale-free because the degree distribution has no characteristic scale.

Scale-free networks are also small-world. The hubs create shortcuts that reduce path length.
The local clustering can be high if the hubs connect to densely connected clusters. The
small-world property does not require the Watts-Strogatz mechanism. It can emerge from the
scale-free mechanism.

This is not a refutation of small-world networks. It is a refinement. The Watts-Strogatz
model shows one way to generate small-world structure. The Barab\'asi-Albert model shows
another. Real networks may combine both mechanisms. Local clustering arises from geographic
proximity, shared institutions, or common interests. Long-range connections arise from hubs,
preferential attachment, or random chance.

The distinction matters for practical applications. A network generated by the
Watts-Strogatz model is robust to random node failure but vulnerable to targeted attacks on
the rewiring links. A scale-free network is robust to random failure but vulnerable to
targeted attacks on the hubs. The vulnerability profile is different. The small-world
property is the same.

## What the model conceals

The small-world model is elegant. It reduces a complex structural property to two
parameters: the local connectivity k and the rewiring probability p. The transition from
lattice to random graph is sharp. The clustering coefficient stays high. The path length
drops. The mathematics is clean.

The model conceals the fact that real networks are not generated by a single process. They
are the product of growth, selection, geographic constraints, social norms, and historical
accidents. The Watts-Strogatz model assumes a fixed number of nodes. Real networks grow. The
model assumes uniform rewiring probability. Real networks have structured long-range
connections -- airline routes, academic collaborations, trade relationships -- that are not
random.

The model also conceals the difference between average path length and typical path length.
The average is dominated by the shortest paths between the most connected nodes. For a
randomly chosen pair of nodes, the path length may be much longer than the average. The
small-world property is a statement about the average, not about every pair.

This is a general tension in network science. Aggregate statistics describe the network as a
whole. They do not describe the experience of a typical node. The average path length of
4.74 on Facebook does not mean that every user is four steps from every other user. It means
that the shortest paths between a large fraction of node pairs are short. Some pairs are
closer. Some are farther. The average conceals the distribution.

## What remains uncertain

Whether small-world networks are a useful concept depends on whether they lead to better
predictions than existing models. The Watts-Strogatz model has been superseded by more
complex models that incorporate growth, preferential attachment, and community structure.
The small-world property is now treated as a descriptive observation rather than an
explanatory mechanism.

The empirical evidence is consistent. Real networks have high clustering and short path
lengths. The specific numbers vary across data sources. The structural property does not.
The methodological limitations of the original Milgram experiment are well known. The modern
replications are more rigorous but introduce their own biases -- online networks are not
representative of offline social networks.

The model's contribution is conceptual. It showed that high clustering and short path
lengths are not contradictory. It provided a mechanism -- a few long-range connections added
to a locally clustered structure -- that produces both properties simultaneously. The
mechanism is simple. The explanation is partial.

The six-degree figure is a cultural artifact. The small-world model is a scientific
contribution. The two are related but not identical. The model explains why short chains can
exist in large networks. It does not explain how long the chains actually are. That depends
on the network, the population, and the measurement.

The central observation is straightforward: a model can be more durable than the evidence
that motivated it. The Milgram experiment was methodologically fragile. The six-degree
figure is disputed. The small-world model is not. The model survived the erosion of its
motivating evidence because it describes a structural possibility, not a specific
measurement. The possibility is real. The measurement is not.
