---
title: Arrow's Impossibility Theorem — What No Voting System Can Satisfy
description:
  Kenneth Arrow proved that no ranked voting system can satisfy four basic fairness
  conditions. The result reshaped how we think about collective decision-making.
publishedAt: 2026-08-08T13:00:00-05:00
categories:
  - Mathematics
  - Politics
---

In 1951, Kenneth Arrow published a proof showing that no ranked voting system can satisfy a
set of four seemingly reasonable fairness conditions. The result — now called Arrow's
impossibility theorem — is one of the most influential findings in social choice theory. It
demonstrates that collective decision-making through ranked voting faces a structural
limitation: you cannot have it all.

The theorem does not say voting is useless or that democracy is flawed. It says something
more precise: any system that aggregates individual preferences into a group ranking must
give up at least one property that we intuitively expect a fair system to have.

## The Condorcet paradox

Arrow's work built on an earlier discovery by the French mathematician and philosopher
Nicolas de Condorcet. In his 1785 _Essay on the Application of Mathematical Analysis to the
Probability of Decisions by Majority_, Condorcet showed that majority rule can produce
cycles.

Consider three voters and three candidates — A, B, and C:

- Voter 1 ranks: A > B > C
- Voter 2 ranks: B > C > A
- Voter 3 ranks: C > A > B

In a head-to-head contest, A beats B (two voters prefer A), B beats C (two voters prefer B),
and C beats A (two voters prefer C). The group preference is cyclic: A beats B, B beats C,
but C beats A. There is no Condorcet winner — no candidate who defeats every other candidate
in pairwise comparison.

Condorcet recognized that majority rule, the most natural method for collective choice, can
produce outcomes that are logically inconsistent. The paradox does not require irrational
voters. Each voter has a perfectly consistent ranking. The inconsistency emerges from the
aggregation process itself.

## Arrow's four conditions

Arrow formalized the problem by asking what properties a social welfare function — a rule
that converts individual rankings into a group ranking — should satisfy. He identified four
conditions that any reasonable voting system ought to meet:

**Unrestricted domain:** The rule should work for any set of individual preference
orderings. Voters can rank candidates however they like, and the system should produce a
result. No preference pattern should be excluded in advance.

**Pareto efficiency (Pareto criterion):** If every voter prefers candidate A to candidate B,
then the group ranking should also place A above B. When everyone agrees on a preference,
the collective outcome should respect that agreement.

**Independence of irrelevant alternatives (IIA):** The group's relative ranking of any two
candidates should depend only on how individual voters rank those two candidates. The
presence or absence of a third candidate — one who is "irrelevant" to the comparison between
A and B — should not change whether the group ranks A above B or vice versa.

**Non-dictatorship:** No single voter should determine the group's ranking regardless of how
everyone else votes. The outcome should reflect the preferences of the group, not one
individual.

Each condition is difficult to reject on its own terms. Unrestricted domain means the system
works for any electorate. Pareto efficiency means unanimous preferences are respected.
Independence of irrelevant alternatives means the relative ranking of two options does not
depend on a third option that neither party cares about. Non-dictatorship means the system
is genuinely collective.

## The theorem

Arrow proved that no social welfare function satisfying all four conditions exists when
there are three or more candidates. Any ranked voting system must violate at least one of
them. If the system satisfies unrestricted domain, Pareto efficiency, and independence of
irrelevant alternatives, then it is a dictatorship — one voter's preferences always become
the group's preferences.

The proof proceeds by showing that any system satisfying the first three conditions has a
"decisive" set of voters whose preferences determine the outcome for at least one pair of
candidates. Arrow then shows that this decisive set can be shrunk until it contains a single
voter — a dictator. The argument does not assume malice or coordination. It follows from the
logical structure of preference aggregation.

Arrow developed this proof as a 22-year-old graduate student at Columbia University. His
1951 book, _Social Choice and Individual Values_, published by John Wiley & Sons, laid out
the formal framework that became modern social choice theory. He was awarded the Nobel
Memorial Prize in Economic Sciences in 1972 for this body of work.

## What independence of irrelevant alternatives means in practice

The condition that is most commonly violated — and hardest to defend intuitively — is
independence of irrelevant alternatives. To see why, consider a real-world voting scenario.

Three candidates run for office: A, B, and C. In a pairwise comparison, the group prefers A
to B. Now suppose candidate C drops out of the race. Under IIA, the group should still
prefer A to B, because C's presence or absence is irrelevant to the comparison between A and
B.

Most ranked voting systems do not satisfy this. In instant-runoff voting (also called
ranked-choice voting), the elimination of a candidate can change how votes are
redistributed, which can flip the relative ranking of the remaining candidates. The
"irrelevant" candidate was not irrelevant after all — their presence shaped how ballots were
counted.

This phenomenon is commonly called the spoiler effect. A candidate who cannot win changes
the outcome between two other candidates simply by running. Arrow's theorem shows that the
spoiler effect is not a bug in one particular system. It is a structural feature of ranked
voting more broadly.

## The Gibbard–Satterthwaite theorem

A related result strengthens the picture. The Gibbard–Satterthwaite theorem, proved
independently by Allan Gibbard (1973) and Mark Satterthwaite (1975), shows that any
deterministic ranked voting system with three or more outcomes is either dictatorial or
manipulable.

Manipulable means there are situations in which a voter can achieve a better outcome by
misrepresenting their true preferences. No ranked voting system eliminates the incentive to
strategically vote. If you care about the outcome, you sometimes have an incentive to rank
candidates differently from how you actually feel.

The Gibbard–Satterthwaite theorem and Arrow's impossibility theorem address different
questions — one about the logical consistency of aggregation, the other about strategic
incentives — but together they paint a picture of ranked voting as fundamentally
constrained.

## What the theorem does not rule out

Arrow's impossibility theorem applies to ranked voting systems that produce a complete
social ordering. It does not apply to every method of collective decision-making. Several
approaches sidestep the result by relaxing one of the four conditions:

**Rated voting systems:** Approval voting, score voting, and range voting ask voters to rate
or score candidates rather than rank them. Because the input is not a strict ordering, the
theorem's assumptions do not hold. These systems can satisfy analogues of Arrow's conditions
that ranked systems cannot.

**Randomized rules:** Lotteries and other probabilistic methods escape the theorem because
they do not produce deterministic outcomes. Random selection satisfies fairness criteria
that deterministic rules cannot.

**Restricting domain:** If voters' preferences fall into a restricted class — for example,
single-peaked preferences along a one-dimensional spectrum — then consistent aggregation
becomes possible. The median voter theorem shows that majority rule produces transitive
outcomes when preferences are single-peaked.

**Positional systems:** Borda count and other point-based ranking methods trade independence
of irrelevant alternatives for freedom from Condorcet cycles. They produce consistent
rankings but are sensitive to the presence of candidates who would not win.

Each workaround has trade-offs. Rated voting requires voters to calibrate scores, which
introduces its own strategic considerations. Randomized rules sacrifice predictability.
Domain restrictions do not hold in every election. Positional systems remain vulnerable to
the spoiler effect that Arrow identified.

## Why it matters

Arrow's theorem changed how economists, political scientists, and mathematicians think about
collective choice. Before the theorem, the search for a better voting system was largely
practical — find the rule that minimizes manipulation or maximizes representation. After the
theorem, the question became more fundamental: what properties are worth trading off against
each other, and which trade-offs are acceptable?

The result also influenced mechanism design — the study of how to structure rules so that
individual incentives produce desirable collective outcomes. The 2007 Nobel Memorial Prize
in Economic Sciences went to Leonid Hurwicz, Eric Maskin, and Roger Myerson for building on
Arrow's framework to develop mechanism design theory. Their work shows how to design systems
that align individual incentives with social objectives, even when full consistency is
unattainable.

In practice, the theorem reminds us that no voting system is neutral. Every rule encodes
values about what fairness means. Instant-runoff voting prioritizes broad support over
intensity of preference. Plurality voting prioritizes simplicity over representation. Borda
count prioritizes consistency over independence. The choice among them is not a technical
decision. It is a normative one.

## What remains open

Social choice theory has matured considerably since Arrow's original proof. Researchers have
explored conditions under which approximate versions of the four criteria can be satisfied
simultaneously. The field of computational social choice studies how complexity constraints
affect voting outcomes and manipulation. Empirical work examines how different voting rules
perform in real elections with actual voter preferences.

One persistent question is how closely real-world preferences resemble the unrestricted
domain that Arrow assumed. If voters' preferences are structured — clustered along
ideological dimensions, for example — then the impossibility result may be less binding in
practice. The theorem describes what is logically possible across all preference profiles,
not what typically occurs in a given electorate.

Another open direction is the design of voting systems for specific contexts. Arrow's
theorem addresses general-purpose aggregation, but specialized settings — committee
selection, resource allocation, multi-winner elections — have different constraints and may
admit rules that avoid the worst trade-offs.

The core insight endures: collective decision-making through ranked voting involves
irresolvable trade-offs. The task is not to find a system that satisfies every fairness
criterion. It is to choose which criteria matter most for the decisions at hand.

## Sources

- Arrow, K. J. (1951). _Social Choice and Individual Values_. John Wiley & Sons.
  [Yale University press reprint](https://press.yale.edu/books/9780300177536/social-choice-and-individual-values)

- Condorcet, N. (1785). _Essay on the Application of Mathematical Analysis to the
  Probability of Decisions by Majority_.
  [Original text (French)](https://gallica.bnf.fr/ark:/12148/bpt6k5547280z)

- Gibbard, A. (1973). "Manipulation of Voting Schemes: A General Result." _Econometrica_,
  **41**(4), 757–772.
  [Manipulability proof](https://onlinelibrary.wiley.com/doi/10.2307/1914083)

- Satterthwaite, M. A. (1975). "Strategy-Proofness and Arrow's Conditions: Existence and
  Correspondence Theorems for Voting Procedures and Social Welfare Functions." _Journal of
  Economic Theory_, **10**(2), 187–217.
  [Strategy-proofness theorem](<https://www.sciencedirect.com/science/article/pii/0022-0531(75)90054-2>)

- Nobel Prize in Economic Sciences 1972. Kenneth J. Arrow.
  [Nobel Prize announcement](https://www.nobelprize.org/prizes/economic-sciences/1972/arrow/facts/)
