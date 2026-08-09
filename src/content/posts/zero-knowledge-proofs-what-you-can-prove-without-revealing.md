---
title: Zero-Knowledge Proofs — What You Can Prove Without Revealing
description:
  Zero-knowledge proofs let one party verify a claim is true without learning the evidence
  behind it.
publishedAt: 2026-08-09T03:00:00-05:00
categories:
  - Science
  - Technology
---

A zero-knowledge proof lets one party convince another that a claim is true without
revealing anything beyond the fact that it is true. Not the evidence, not the method, not
even a hint of what was checked — just assurance that the statement holds.

The idea sounds like a logical curiosity. It turned out to be one of the most useful
constructions in modern cryptography.

## Where the concept came from

Shafi Goldwasser, Silvio Micali, and Charles Rackoff introduced zero-knowledge proofs in
their 1985 paper
["The Knowledge Complexity of Interactive Proof-Systems"](https://doi.org/10.1145/322258.322276).
They were working on interactive proof systems — protocols where a computationally unbounded
"prover" tries to convince a polynomial-time "verifier" that a statement is true through a
series of messages.

The key insight was to measure not just whether the verifier is convinced, but how much it
learned in the process. Goldwasser and Micali defined "knowledge complexity" as the amount
of information the verifier gains about the witness (the hidden evidence) beyond the truth
of the statement itself. A protocol with zero knowledge complexity reveals nothing.

This was a new way to think about proof. Traditional mathematical proofs reveal their
reasoning entirely — every step is visible. Zero-knowledge proofs flip that: the conclusion
is verified, but the path to it stays private.

## The three properties

A valid zero-knowledge proof must satisfy three conditions, all defined formally in the
original work:

**Completeness.** If the statement is true and both parties follow the protocol honestly,
the verifier will be convinced. An honest prover can always persuade an honest verifier.

**Soundness.** If the statement is false, no cheating prover can convince an honest verifier
that it is true, except with negligible probability. The protocol cannot be fooled.

**Zero-knowledge.** The verifier learns nothing beyond the truth of the statement. Formally,
anything the verifier could learn from the interaction, it could also simulate on its own
without talking to the prover. This simulation property is the rigorous definition of
"learning nothing."

These three properties are independent. A protocol could be complete and sound but reveal
information (a normal proof). It could be complete and zero-knowledge but unsound (the
verifier always accepts, learning nothing because it checks nothing). All three together
create something genuinely new.

## The cave analogy

Jean-Jacques Quisquater and colleagues published a now-famous illustration in 1990 that
makes the structure intuitive without requiring the formal definitions.

Imagine a ring-shaped cave with two paths leading to a single door in the center. The door
can be opened by a secret word. Peggy claims she knows the word. Victor wants to verify this
without learning the word himself.

Here is the protocol:

1. Victor stands at the entrance. Peggy enters and chooses either the left or right path,
   unknown to Victor.
2. Victor calls out a random path — left or right — and asks Peggy to emerge from it.
3. If Peggy knows the secret word, she can open the door and exit from whichever path Victor
   chose. If she does not know it, she can only exit correctly if she happened to enter that
   path already, which happens half the time by chance.

Repeat this many times. Each round cuts the probability of a lucky guess in half. After 20
rounds, a cheater succeeds with probability 1 in 1,048,576. After 40 rounds, the chance is
negligible.

The protocol satisfies all three properties: an honest Peggy always succeeds (completeness),
a cheater cannot reliably fake it (soundness), and Victor learns nothing about the word —
only that Peggy knows it (zero-knowledge).

## From interactive to non-interactive

The cave protocol requires back-and-forth communication. Each round needs Victor's random
challenge and Peggy's response. For practical use, this round-trip structure is expensive
over networks and impossible in asynchronous settings.

The Fiat-Shamir heuristic, introduced by Amos Fiat and Adi Shamir in 1986, converts many
interactive zero-knowledge proofs into non-interactive ones by replacing the verifier's
random challenges with outputs from a cryptographic hash function. The prover generates the
challenges itself by hashing the transcript so far. This works under the "random oracle
model" — an idealization where the hash function behaves like a truly random function that
anyone can query.

The trade-off is theoretical: the random oracle model is not perfectly realistic, and later
research showed that some protocols lose their zero-knowledge guarantee when Fiat-Shamir is
applied. In practice, though, the heuristic has proven reliable and forms the backbone of
most deployed systems.

## Why it matters for NP problems

A major theoretical breakthrough came in 1991 when Oded Goldreich, Silvio Micali, and Avi
Wigderson showed that every problem in NP — the class of problems whose solutions can be
verified efficiently — has a zero-knowledge proof, assuming one-way functions exist. One-way
functions are easy to compute but hard to invert; their existence is widely believed though
not formally proven.

This result means that, in principle, any verifiable computation can be made zero-knowledge.
If you can check an answer efficiently, you can construct a protocol where someone proves
they know the answer without revealing it. The scope is enormous: from proving you hold a
valid credential to proving a complex calculation ran correctly.

## Succinct proofs and the trusted setup problem

The theoretical constructions above produce proofs that can be large and slow to generate. A
practical breakthrough came with the development of **zk-SNARKs** — Zero-Knowledge Succinct
Non-Interactive Arguments of Knowledge — where "succinct" means the proof is small (often
just a few hundred bytes) and fast to verify (milliseconds).

The first practical zk-SNARK construction appeared in the 2012 paper
["Succinct Non-interactive Zero Knowledge for a von Neumann Architecture"](https://eprint.iacr.org/2012/235)
by Christina Garman, Matthew Green, and Ian Miers. It enabled encrypted transactions that
could be verified without revealing sender, receiver, or amount — a design later used in the
Zcash cryptocurrency.

Early zk-SNARKs required a "trusted setup": a one-time ceremony where random parameters are
generated and then destroyed. If anyone keeps a copy of these parameters, they can fabricate
valid proofs for false statements. The ceremony relies on multiple participants contributing
randomness and deleting their copies — a social trust mechanism layered on top of the
mathematics.

This limitation motivated **zk-STARKs** — Scalable Transparent Arguments of Knowledge —
introduced by Eli Ben-Sasson and colleagues in 2018. STARKs replace elliptic curve
cryptography with hash functions, eliminating the trusted setup entirely. The trade-off is
larger proof sizes (kilobytes instead of bytes), but the removal of the trusted setup makes
them more transparent and cryptographically robust.

## What zero-knowledge proofs do not do

Zero-knowledge proofs verify that a computation was performed correctly given certain
inputs. They do not verify that the inputs themselves are truthful about the real world. A
proof can confirm that a transaction balances, but it cannot confirm that the transaction
represents a legitimate exchange of value. The cryptographic guarantee is internal to the
protocol — it does not extend to external facts.

They also do not replace encryption. A zero-knowledge proof reveals nothing about the
witness, but it does not hide the fact that a proof exists or what statement was proven.
Privacy in deployed systems requires combining proofs with encryption, mixing protocols, and
careful metadata management.

## Why the concept sticks

What makes zero-knowledge proofs distinctive is not just the privacy they enable, but the
separation they create between verification and disclosure. Most proof systems conflate the
two: to verify a claim, you inspect the evidence. Zero-knowledge proofs show that inspection
is not necessary — a carefully structured interaction can confirm truth while preserving
secrecy.

The original 1985 paper framed this as a complexity measure. The practical systems built on
it treat it as a design primitive. Both perspectives are useful: the theoretical definition
clarifies what "zero knowledge" actually means, and the deployed systems show how much
ground the concept can cover when the simulation property holds.

The archive has touched on related ideas —
[lossy compression](lossy-compression-what-can-be-dropped) explores what information can be
discarded without loss of function;
[error-correcting codes](error-correcting-codes-how-systems-handle-corruption) examine how
systems recover from partial data. Zero-knowledge proofs add a different dimension: they
show that verification itself can be lossy, discarding everything about the witness while
preserving confidence in the conclusion.

## Sources

- Goldwasser, S., Micali, S., & Rackoff, C. (1985).
  [The Knowledge Complexity of Interactive Proof-Systems](https://doi.org/10.1145/322258.322276).
  SIAM Journal on Computing, 18(1), 186–208.
- Quisquater, J.-J., et al. (1990).
  [How to Explain Zero-Knowledge Protocols to Your Children](https://doi.org/10.1007/3-540-52916-1_28).
  CRYPTO '90, Lecture Notes in Computer Science, vol 537.
- Goldreich, O., Micali, S., & Wigderson, A. (1991).
  [How to Play Any Mental Game](https://doi.org/10.1145/103418.103479). STOC '91, pp.
  218–229.
- Fiat, A., & Shamir, A. (1986).
  [How to Prove Yourself: Practical Solutions to Identification and Signature Problems](https://doi.org/10.1007/3-540-47721-7_33).
  CRYPTO '86, Lecture Notes in Computer Science, vol 263.
- Garman, C., Green, M., & Miers, I. (2012).
  [Real-world Cryptanalysis of a Practical Proof System](https://eprint.iacr.org/2012/235).
  IACR ePrint Archive.
- Ben-Sasson, E., et al. (2018).
  [Scalable Zero Knowledge via Cycles of Merkle Trees](https://eprint.iacr.org/2018/046).
  IACR ePrint Archive.
