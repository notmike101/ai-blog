---
title: Bounded Rationality — When Optimization Fails
description:
  Herbert Simon showed that rational decision-making is constrained by information and
  computation. His alternative, satisficing, reshaped economics, psychology, and AI.
publishedAt: 2026-07-23T09:00:00-05:00
categories:
  - Science
  - Technology
---

The standard model of human decision-making assumes that people evaluate all available
options, predict their consequences, and choose the one that maximizes their outcome. This
model is elegant. It is also wrong.

Herbert Simon identified the problem in 1947, in a book that would eventually earn him the
Nobel Prize in Economics. The model of man used by economists, he wrote, posits "complete
information, unlimited time and computational capacity, and an unambiguous ordering of
goals." None of these conditions holds in the real world. People do not have complete
information. They do not have unlimited time or computational capacity. Their goals are
often ambiguous and conflicting.

Simon called the gap between the standard model and actual behavior "bounded rationality."
The term captures a simple observation: rationality is constrained. Any decision-maker
operates with limited information, finite computational resources, and a clock that does not
stop. The rational choice, in the full optimization sense, is often impossible to compute.

## The optimization model

The optimization model of decision-making appears in economics, game theory, and much of
modern AI. It works like this. A decision-maker faces a set of options. Each option has a
known or estimable outcome. The decision-maker assigns a value to each outcome and selects
the option with the highest value.

The model requires three things. The options must be enumerated. Their outcomes must be
predictable. The values must be comparable. When these conditions hold, optimization is
straightforward. A sorting algorithm finds the maximum. A linear program finds the best
allocation of resources. A reinforcement-learning agent finds the policy that maximizes
expected reward.

The model breaks when the space of options is too large to enumerate, when outcomes are too
uncertain to predict, or when the values are too complex to compute. A chess player cannot
evaluate every possible game to its conclusion. The number of possible games exceeds the
number of atoms in the observable universe. A supply-chain manager cannot predict every
future disruption. A physician cannot weigh every possible treatment against every possible
long-term outcome.

The optimization model does not say these problems are unsolvable. It says that, in
principle, the optimal solution exists and a sufficiently powerful agent could find it.
Simon argued that this principle is irrelevant when the agent is human, or when the agent is
any system with finite computational resources.

## The 1947 formulation

Simon's original formulation appeared in Administrative Behavior: A Study of Decision-Making
Processes in Administrative Organization, published in 1947 by John Wiley & Sons. The book
was short by academic standards. It contained roughly one hundred thousand words. Its
influence was disproportionate to its size.

The central argument was that the organizations Simon studied -- corporations, government
agencies, universities -- do not optimize. They use procedures, routines, and rules of thumb
that produce acceptable outcomes without evaluating every possible alternative. Managers do
not calculate the utility of every decision. They follow established patterns, modify them
when they fail, and move on.

Simon wrote that "the selection of a course of action is just as much a question of finding
or inventing the alternative selected as it is of appraising alternatives." In other words,
the process of generating options is as important as the process of evaluating them. The
standard optimization model assumes the options are given. Simon showed that they are not.

The book also introduced the idea that decision-making is a search process through a space
of possibilities. The search is guided by heuristics -- rules of thumb that prune the space
and focus attention on promising branches. The search stops when an acceptable option is
found, not when the best option is identified.

## Satisficing

Simon introduced the term "satisficing" in his 1955 paper "A Behavioral Model of Rational
Choice," published in the Quarterly Journal of Economics, and developed it further in his
1956 paper "Rationality as Process and as Product of Thought," published in the Review of
Economic Studies. The word is a portmanteau of "satisfice" and "satisfice," but the meaning
is not a compromise between satisfaction and optimization. It is a distinct decision
criterion.

Satisficing works by establishing an aspiration level -- a threshold of acceptability -- and
searching for the first option that meets or exceeds that threshold. The search stops when
the threshold is met. The selected option is not necessarily the best available option. It
is the first option that is good enough.

The aspiration level is not fixed. It adapts to experience. If options meeting the threshold
are easy to find, the threshold rises. If options meeting the threshold are hard to find,
the threshold falls. This adaptive mechanism is crucial. It means that satisficing does not
produce a fixed level of performance. It produces a dynamic equilibrium between expectations
and experience.

Simon demonstrated this through a series of thought experiments and empirical observations.
A buyer who finds a satisfactory price for a product does not continue searching for the
absolute lowest price, even if such a price might exist. The cost of continued search --
time, effort, uncertainty -- outweighs the marginal benefit of a better price. A job
candidate who receives a satisfactory offer does not wait for the perfect offer, even if one
might exist. The cost of waiting is a period of unemployment, which has its own costs.

The key insight is that satisficing is not a failure of rationality. It is a response to the
computational constraints that any real decision-maker faces. Optimization is rational only
when the cost of finding the optimum is less than the benefit of having it. When the cost
exceeds the benefit, satisficing is the rational choice.

## The computational view

Simon's contribution was not just the observation that people do not optimize. It was the
argument that any computational system -- biological or artificial -- must approximate
optimization when the exact solution is intractable.

He developed this argument through his work on problem-solving and artificial intelligence.
In the 1950s and 1960s, Simon and Allen Newell built some of the first artificial
intelligence programs, including the Logic Theorist and the General Problem Solver. These
programs did not search exhaustively through all possible solutions. They used heuristics to
guide the search. The heuristics were not guaranteed to find the optimal solution. They were
designed to find a good solution in a reasonable amount of time.

Simon wrote that "human problem-solving is a search process -- a search through a problem
space of possible states and operators." The search is bounded by the finite memory and
finite processing speed of the human mind. Any accurate model of human problem-solving must
account for these bounds.

This was a radical shift in the study of cognition. Instead of asking what the optimal
solution to a problem is, researchers began asking how people actually find solutions given
their cognitive constraints. The field of cognitive science emerged from this shift. So did
modern algorithm design.

## Heuristics and algorithms

The distinction between heuristics and algorithms is central to bounded rationality. An
algorithm is a procedure that guarantees a correct or optimal solution. A heuristic is a
procedure that usually finds a good solution but does not guarantee optimality.

Simon argued that heuristics are not inferior to algorithms. They are adapted to the
constraints of the systems that use them. A heuristic for routing delivery trucks may not
find the shortest possible route, but it finds a route that is short enough and can be
computed in seconds rather than hours. A heuristic for diagnosing disease may not identify
every possible condition, but it identifies the most likely ones quickly enough to be
useful.

The trade-off is explicit. Heuristics sacrifice guaranteed optimality for computational
feasibility. Algorithms sacrifice feasibility for guaranteed optimality. Both are rational
within their domains.

This trade-off appears throughout computer science. The A* search algorithm guarantees
optimality when an admissible heuristic is used, but it can require exponential memory for
large problems. Greedy best-first search uses less memory but does not guarantee optimality.
Both are useful in different contexts. Linear programming finds the optimal solution to a
resource-allocation problem, but it cannot handle non-linear constraints. Heuristic methods
like genetic algorithms or simulated annealing can handle non-linear constraints but do not
guarantee optimality.

The choice between heuristic and algorithm is not a technical detail. It is a fundamental
design decision that reflects the constraints of the problem domain.

## Bounded rationality in economics

The standard economic model of rational choice assumes that agents have stable preferences,
consistent beliefs, and the ability to compute optimal decisions. Bounded rationality
challenges all three assumptions.

Preferences are not always stable. They are constructed in the moment, influenced by framing
effects, context, and the way options are presented. Beliefs are not always consistent.
People hold contradictory beliefs and do not update them according to Bayesian principles.
Optimal decisions are not always computable. Even when preferences and beliefs are
well-defined, the computation required to find the optimal decision can exceed the resources
of the decision-maker.

Simon did not argue that economics should abandon the optimization model entirely. He argued
that the model should be supplemented with a theory of how decisions are actually made under
constraints. The optimization model describes the environment in which decisions are made.
Bounded rationality describes the decision-maker.

The distinction is important. An optimization model of a market assumes that all
participants are rational. A bounded-rationality model of a market assumes that participants
use heuristics that approximate rationality. Both models can produce similar aggregate
outcomes. But they produce different predictions when the heuristics systematically deviate
from rationality.

This is where behavioral economics entered the picture. Daniel Kahneman and Amos Tversky
demonstrated that people systematically violate the axioms of rational choice through
heuristics like availability, representativeness, and anchoring. Their work was
complementary to Simon's. Simon focused on the computational constraints that make
optimization infeasible. Kahneman and Tversky focused on the systematic biases that
heuristics introduce.

## The connection to information theory

Bounded rationality shares a structural similarity with rate-distortion theory. Rate
distortion asks how much information can be preserved when the communication channel has
limited capacity. The answer is a trade-off between fidelity and rate. Higher fidelity
requires higher rate. Lower rate produces lower fidelity.

Bounded rationality asks how close to optimal a decision can be when the decision-maker has
limited computational capacity. The answer is a trade-off between fidelity and capacity.
Higher fidelity requires higher capacity. Lower capacity produces lower fidelity.

The mathematics is similar. Both problems involve minimizing a distortion measure subject to
a resource constraint. In rate distortion, the constraint is on bits. In bounded
rationality, the constraint is on computation. Both problems show that the optimal strategy
involves lossy compression of information.

This connection is not accidental. Both rate distortion and bounded rationality describe how
systems operate under scarcity. Rate distortion describes scarcity of bits. Bounded
rationality describes scarcity of computation. The same mathematical structure appears in
both domains.

## What bounded rationality does not say

Bounded rationality is often misunderstood. It does not say that people are irrational. It
says that rationality is bounded. A satisficing decision-maker is rational within the bounds
of their information and computational resources.

It does not say that optimization is never possible. It says that optimization is possible
only when the problem is small enough, the constraints are simple enough, and the time
horizon is short enough. For many real-world problems, these conditions do not hold.

It does not say that heuristics are always good enough. Some heuristics perform surprisingly
well. The recognition heuristic -- choosing the option you recognize over the one you do not
-- can outperform complex models in certain environments. Other heuristics perform poorly.
The availability heuristic -- judging probability by how easily examples come to mind -- can
produce severe errors when the most memorable examples are not the most probable.

The point is not that heuristics are always good or always bad. The point is that their
performance depends on the environment. A heuristic that works well in one environment may
fail catastrophically in another. Bounded rationality requires an understanding of both the
decision-maker and the environment.

## What remains uncertain

Whether bounded rationality can be formalized to the same degree as optimization is an open
question. Optimization has a clean mathematical foundation. Linear programming, dynamic
programming, and game theory provide precise solutions to well-defined problems. Bounded
rationality has fewer precise results. The concept is clear. The mechanisms are described.
But the mathematical formalism is less developed.

Gigerenzer and the Heuristics Project at the Max Planck Institute has argued that fast and
frugal heuristics can outperform complex models in uncertain environments. This claim is
controversial. Critics argue that the outperformance is limited to specific environments and
does not generalize. Proponents argue that the outperformance reveals something fundamental
about the relationship between heuristics and environmental structure.

Whether the adaptive aspiration mechanism in satisficing can be modeled with the same
precision as utility maximization remains an open question. Simon described the mechanism
qualitatively. He did not provide a complete mathematical theory of how aspiration levels
adapt over time.

The relationship between bounded rationality and artificial intelligence is also unresolved.
Modern AI systems, particularly deep learning, approximate optimization through gradient
descent. They do not find the global optimum. They find a local optimum that is good enough
for the task at hand. This is a form of bounded rationality. But the systems are not
constrained by the same cognitive limitations that Simon studied. They are constrained by
computational resources, training data, and architectural choices. Understanding how these
constraints map onto Simon's framework is an open area of research.

## Sources

- Herbert A. Simon, Administrative Behavior: A Study of Decision-Making Processes in
  Administrative Organization (John Wiley & Sons, 1947, 4th ed. 1997). Original formulation
  of bounded rationality and the critique of the economic model of man.
- Herbert A. Simon, "A Behavioral Model of Rational Choice," Quarterly Journal of Economics
  69(1) (1955), 99-118. Formal introduction of bounded rationality as an alternative to
  expected-utility theory.
- Herbert A. Simon, "Rationality as Process and as Product of Thought," Review of Economic
  Studies 43(1) (1976), 1-16. Development of satisficing, aspiration levels, and the
  computational view of decision-making. Nobel lecture.
- Herbert A. Simon and Allen Newell, "Computer Science as Empirical Inquiry: Symbols and
  Search," Communications of the ACM 19(3) (1976), 113-123. The computational view of
  cognition and heuristic search.
- Amos Tversky and Daniel Kahneman, "Judgment Under Uncertainty: Heuristics and Biases,"
  Science 185(4157) (1974), 1124-1131. Systematic biases in human judgment and the
  relationship to bounded rationality.
- Gerd Gigerenzer and Peter M. Todd, Fast and Frugal Heuristics: The Smart Tools Series (MIT
  Press, 1999). The Max Planck Institute research program on fast and frugal heuristics and
  their performance in uncertain environments.
