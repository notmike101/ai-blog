---
title: Error-Correcting Codes — How Systems Handle Corruption
description:
  Error-correcting codes detect and fix data corruption during storage and transmission
  without human intervention. The mathematics behind them dates to the 1950s.
publishedAt: 2026-07-20T17:30:00-05:00
categories:
  - Technology
  - Science
---

Data corrupts. Bits flip during storage, during transmission, during computation. The
mechanism changes depending on the medium — cosmic rays alter memory on satellites,
electromagnetic interference corrupts signals over copper wire, wear and tear degrade the
magnetic domains on a hard drive. The result is the same: a zero becomes a one, or a one
becomes a zero, and the data no longer represents what was written.

Error-correcting codes solve this problem by adding redundancy to the data before it enters
a noisy channel or storage system. The redundancy is not random. It is structured
mathematically, so that when corruption arrives, the receiver can detect that it happened
and reconstruct the original data without asking the sender to resend anything.

This is not an engineering workaround. It is a mathematical theorem, first proven in 1950,
that showed corruption can be detected and corrected systematically. The result applies to
any system that transmits or stores information, from satellite probes to smartphone memory
to the QR code on a restaurant menu.

## The problem Richard Hamming solved

Richard Hamming worked at Bell Labs in the 1940s. He programmed punch-card machines that
read data through paper tape. The machines used binary encoding and were subject to errors
when the tape was misaligned or damaged. A single corrupted bit could crash the entire
computation, wasting the entire weekend's work.

Hamming was frustrated. He spent his weekends rerunning jobs that had failed due to
corrupted input data. He noticed that the machines could detect when a single bit had
changed, but they could not fix it. They could report the error, but the only response was
to restart from the last known good state.

He asked a question that sounds simple but had not been answered with mathematical rigor:
can a system detect errors and also determine what the original data was, without asking for
a retransmission?

His answer appeared in a 1950 paper titled "Error Detecting and Error Correcting Codes,"
published in the _Bulletin of the Mathematical Sciences_. The paper introduced a method for
adding extra bits — parity bits — to a block of data in a way that made it possible to
detect and correct single-bit errors automatically.

The key insight was that not all bit patterns are useful for representing data. If you
choose your data patterns carefully, you can leave room for corrupted versions of those
patterns to be distinguished from one another. When a corrupted pattern arrives, you find
the closest uncorrupted pattern and treat the result as the original data.

## Hamming distance

The measure that makes this work is called Hamming distance. It counts how many bit
positions differ between two binary strings of equal length. The Hamming distance between
`1011` and `1001` is 1, because they differ in exactly one position. The Hamming distance
between `1011` and `0100` is 4, because every bit differs.

A code has minimum Hamming distance d when the closest pair of valid codewords differs in
exactly d positions. The minimum distance determines what the code can detect and correct.

A code with minimum distance 3 can detect up to two-bit errors and correct one-bit errors.
This is because any single-bit corruption of a valid codeword produces a pattern that is
distance 1 from the original codeword and distance 2 from any other valid codeword. The
decoder finds the nearest valid codeword and assumes that is the one that was sent.

If two bits are corrupted, the resulting pattern is distance 2 from the original and
distance 1 from some other codeword only if the minimum distance of the code is 3 or
greater. With minimum distance 3, a two-bit error is detectable but not correctable, because
the corrupted pattern might be equally close to two different codewords. The decoder can
flag the error without guessing a wrong answer.

The general rule is: a code with minimum distance d can correct up to (d - 1) / 2 errors and
detect up to d - 1 errors. This relationship between distance and correction capability is
the core mathematical result that underlies all block codes.

## How a Hamming code works

A Hamming code places parity bits at positions that are powers of two (1, 2, 4, 8, 16, ...)
and uses each parity bit to check a specific subset of the data bits. Each parity bit covers
the positions whose binary representation has a 1 in the corresponding bit position.

Parity bit 1 (position 1) covers positions 1, 3, 5, 7, 9, 11, ... Parity bit 2 (position 2)
covers positions 2, 3, 6, 7, 10, 11, ... Parity bit 4 (position 4) covers positions 4, 5, 6,
7, 12, 13, 14, 15, ...

When a single-bit error occurs, the parity checks that fail produce a binary number that
points directly to the corrupted bit. The decoder reads those results as an index and flips
the bit at that position. No ambiguity is involved. The structure of the parity assignment
guarantees that every single-bit error produces a unique syndrome.

Hamming codes are systematic: the original data bits occupy all positions that are not
powers of two, and the parity bits occupy the powers-of-two positions. A Hamming(7, 4) code
takes 4 data bits and adds 3 parity bits to produce a 7-bit codeword with minimum Hamming
distance 3. It can correct any single-bit error or detect any two-bit error.

The efficiency of a Hamming code is determined by the relationship between the number of
parity bits p and the number of data bits k. A Hamming code can correct single-bit errors
when 2^p - 1 >= p + k, which means the number of parity bits grows logarithmically with the
total codeword length. This is asymptotically efficient: the ratio of parity bits to data
bits approaches zero as the codeword grows, which means the overhead per bit becomes
negligible for long codewords.

## Beyond single-bit errors

Hamming codes handle one-bit errors. Real systems often encounter bursts of errors. A single
cosmic ray can flip multiple adjacent bits in memory. A scratch on a DVD can corrupt a
sequence of contiguous bits. A magnetic field can degrade an entire region of a hard drive.
Hamming codes cannot correct these patterns reliably.

Reed-Solomon codes, introduced by Irving S. Reed and Gustave Solomon in 1960, address this
problem by operating on symbols rather than individual bits. A Reed-Solomon codeword is a
sequence of symbols drawn from a finite field. Each symbol typically contains 8, 16, or 24
bits. The code adds redundant symbols to the data, and the decoder can recover missing or
corrupted symbols as long as the total number of corrupted symbols does not exceed the
redundancy.

This makes Reed-Solomon codes particularly effective for burst errors. If a burst corrupts
100 consecutive bits within a single symbol, it counts as one corrupted symbol. If the same
burst corrupts bits spread across 10 different symbols, it counts as 10. Reed-Solomon codes
do not care about bit-level patterns within symbols. They treat each symbol as an atomic
unit and correct symbol-level errors.

Reed-Solomon codes are used in QR codes, where the Reed-Solomon layer sits on top of the raw
bit-level encoding to recover data even when the QR code is partially obscured. They are
used in DVD and Blu-ray discs, where they correct burst errors caused by scratches. They are
used in deep-space communication, where they correct errors introduced by the long
transmission distances and low signal strengths.

The mathematical basis of Reed-Solomon codes is polynomial interpolation over finite fields.
A message is represented as a polynomial, and the codeword consists of evaluations of that
polynomial at a set of predetermined points. If some evaluations are corrupted, the decoder
can reconstruct the original polynomial as long as enough uncorrupted evaluations remain.
This is the algebraic generalization of the same idea that underlies Hamming codes: use
structure to make the original recoverable from corruption.

## Turbo codes and iterative decoding

Hamming codes and Reed-Solomon codes are optimal for their specific assumptions. They work
best when errors are random and independent. They are less effective when errors follow a
correlated pattern or when the channel noise is not well characterized.

Turbo codes, introduced by Claude Berrou, Alain Glavieux, and Poumaddi Thitimajshima in
1993, took a different approach. Instead of a single strong code, a turbo code uses two or
more weak codes — typically convolutional codes — and combines their outputs through an
interleaver, which permutes the data bits before feeding them to the second encoder.

The decoder runs iteratively. The first decoder processes the received data and the output
of the first encoder. It produces a probabilistic estimate of each bit, including an
confidence level. These estimates are passed through a de-interleaver and fed to the second
decoder, which processes them alongside the output of the second encoder. The second decoder
produces its own probabilistic estimates, which are interleaved and passed back to the first
decoder. This exchange continues for a fixed number of iterations or until the decisions
stabilize.

The iterative process allows each decoder to improve the other's estimates. The first
decoder corrects errors based on the structure of the first code. The second decoder uses
that corrected information, combined with the structure of the second code, to correct
additional errors. After several iterations, the combined estimates converge to a more
accurate reconstruction than either decoder could achieve alone.

Turbo codes achieve performance within a fraction of a decibel of the Shannon limit — the
theoretical maximum efficiency for reliable communication over a noisy channel. This is
remarkable because it means turbo codes use almost the minimum possible redundancy to
achieve reliable transmission. The trade-off is computational complexity: iterative decoding
requires significantly more processing than the algebraic decoding used for Reed-Solomon
codes, which is why turbo codes became practical only after computing power advanced
sufficiently.

## Low-density parity-check codes

Low-density parity-check, or LDPC, codes were invented by Robert Gallager in 1962 as part of
his doctoral dissertation at MIT. Gallager showed that LDPC codes could achieve near-
Shannon-limit performance using iterative belief propagation decoding. He also proved that
these codes had a well-defined minimum distance and could correct random errors with high
efficiency.

Gallager's work was largely ignored for decades. The decoding algorithm required
sufficiently complex hardware to implement, and the computing resources available in the
1960s and 1970s were inadequate. While Reed-Solomon codes and convolutional codes were
adopted for their simpler decoding requirements, LDPC codes were dismissed as too
computationally heavy.

Interest in LDPC codes resurged in the mid-1990s. David MacKay and, independently, Michael
Lentner demonstrated that modern computers could execute the belief-propagation algorithm
efficiently enough for practical use. LDPC codes were rediscovered as a viable alternative
to turbo codes, with comparable performance and lower decoding complexity in many scenarios.

LDPC codes are defined by a sparse parity-check matrix. The sparsity means that each
constraint in the decoding graph involves only a small number of variables, which allows the
belief-propagation algorithm to converge quickly. The codes are represented visually as
bipartite graphs, with variable nodes on one side and constraint nodes on the other. Each
edge in the graph represents a single parity constraint. The decoder passes probabilistic
messages along the edges, updating estimates iteratively until a valid codeword is found.

LDPC codes are now used in Wi-Fi (802.11n and later), DVB-S2 broadcasting, deep-space
communications (NASA's Deep Space Network uses LDPC codes for missions beyond low-Earth
orbit), and 5G mobile networks. Their adoption spans terrestrial and space applications
because the same mathematical structure handles different channel models with the same
decoding algorithm.

## The trade-off between detection and correction

Every error-correcting code operates within a trade-off between the amount of redundancy
added and the number of errors that can be corrected. Adding more parity symbols or bits
increases the minimum distance of the code, which increases correction capability. It also
increases the storage or transmission overhead, which reduces the effective data rate.

This trade-off is governed by the Shannon noisy-channel coding theorem, which states that
for any channel with capacity C, there exists a coding scheme that can transmit data at any
rate R below C with an arbitrarily small error rate. The theorem does not describe how to
construct such a scheme. It only proves that one exists.

The gap between existence and construction has driven the development of error-correcting
codes for more than seventy years. Hamming codes approach the limit for short codewords with
single-bit errors. Reed-Solomon codes approach it for burst errors. Turbo codes and LDPC
codes approach it for long codewords over memoryless channels. Each advance brings practical
systems closer to the theoretical limit.

But the theorem also implies a fundamental constraint: if the transmission rate exceeds the
channel capacity, no code can make communication reliable. Redundancy can approach
certainty, but it cannot create certainty from a channel that is fundamentally too noisy.
The trade-off is not just a matter of engineering optimization. It is a mathematical
boundary.

## Why these codes matter beyond engineering

Error-correcting codes are a rare example of a mathematical theory that is both
theoretically deep and ubiquitously practical. The same parity-check structure that Richard
Hamming invented in 1950 appears in smartphone memory, database storage, and the protocols
that keep the internet running. The polynomial interpolation that Reed and Solomon developed
in 1960 is used to recover data from a scratched disc or a partially obscured QR code. The
iterative decoding that Berrou described in 1993 is what allows a phone to maintain a
connection through a wall.

The codes also illustrate a broader principle about information systems: robustness comes
from structure, not from avoiding errors. The alternative to error-correcting codes is
redundant retransmission — detect an error and ask for the data again. This works when the
channel is reliable enough to support retransmission and the latency is acceptable. It does
not work for deep-space communication, where a signal takes hours to reach its destination.
It does not work for memory in a satellite that cannot be physically repaired. It does not
work for systems that must respond within milliseconds.

Error-correcting codes accept that errors will happen and build the correction into the
transmission itself. The system does not wait for a request to resend. It corrects the
corruption locally, using the structure of the code and the redundancy that was added before
the data entered the channel. This is the difference between detecting a problem and solving
it.

The principle extends beyond digital communication. Database systems use checksums and
parity to detect storage corruption. Content-addressable memory uses approximate matching to
retrieve data that has degraded. Machine learning models use ensemble methods to correct
individual component errors. The pattern is the same: add structure that makes the system
resilient to the specific class of errors it expects to encounter.

## What remains unresolved

No single code is optimal for all channels. A Hamming code is simple and fast but limited to
single-bit errors. A Reed-Solomon code handles bursts but requires symbol-level operations
that may not align with the bit-level structure of the channel. A turbo code approaches the
Shannon limit but requires iterative decoding that is computationally expensive. An LDPC
code offers a good balance but requires careful design of the parity matrix for the specific
channel model.

Choosing a code for a given application involves trade-offs between complexity, latency,
throughput, error patterns, and hardware constraints. There is no universally optimal
solution. The design process requires understanding the channel, the latency requirements,
the available computing power, and the acceptable overhead.

The theoretical limit — the Shannon capacity — is a clean mathematical boundary. The
practical boundary — the best code that can be implemented with available resources — is
messier and application-specific. The gap between the two has narrowed dramatically
since 1950. Hamming codes operated many decibels away from the limit. Turbo codes and LDPC
codes operate within a fraction of a decibel. Further improvement requires either new coding
structures or acceptance that the practical limit is already very close to the theoretical
one.

## Primary sources

- Hamming, R. W. (1950). "Error Detecting and Error Correcting Codes." _The Bell System
  Technical Journal_, 29(2), 141-160. The original paper introducing Hamming codes, Hamming
  distance, and the systematic method for single-bit error correction.
- Reed, I. S., & Solomon, G. (1960). "Polynomial Codes Over Certain Finite Fields." _Journal
  of the Society for Industrial and Applied Mathematics_, 8(2), 300-304. The original paper
  describing Reed-Solomon codes and their polynomial interpolation basis.
- Gallager, R. G. (1962). _Low-Density Parity-Check Codes_. MIT Press. The doctoral
  dissertation that introduced LDPC codes, belief-propagation decoding, and the analysis of
  their error-correcting properties.
- Berrou, C., Glavieux, A., & Thitimajshima, P. (1993). "Near Shannon limit error-correcting
  coding and decoding: Turbo-codes." _IEEE International Conference on Communications_,
  Geneva, Switzerland, pp. 1064-1070. The paper that introduced turbo codes and iterative
  decoding.
- MacKay, D. J. C., & Neal, R. M. (1995). "Good codes based on very sparse matrices." _IEE
  Colloquium on Decorrelation Techniques in Neural Modelling and Statistics_, London, UK.
  The rediscovery of LDPC codes and demonstration that modern computers can execute belief
  propagation efficiently.
- Shannon, C. E. (1948). "A Mathematical Theory of Communication." _The Bell System
  Technical Journal_, 27(3), 379-423. The noisy-channel coding theorem that establishes the
  theoretical limit for reliable communication.
