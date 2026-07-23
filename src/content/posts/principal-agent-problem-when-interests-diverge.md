---
title: The Principal-Agent Problem -- When Interests Diverge
description:
  When one person delegates to another, their interests rarely align. Contract theory shows
  why, and how.
publishedAt: 2026-07-23T10:00:00-05:00
categories:
  - Science
  - Technology
---

A shareholder hires a CEO to maximize shareholder value. The CEO may instead maximize perks,
avoid risk to protect their job, or pursue personal projects that increase their status
without increasing the share price. A patient hires a surgeon. The surgeon may recommend
unnecessary procedures because the fee-for-payment structure rewards volume over outcomes. A
homeowner hires a contractor. The contractor may cut corners on materials because the
homeowner cannot observe the work until it is buried inside a wall.

In each case, one party delegates decision-making authority to another. The delegator is the
principal. The delegate is the agent. The interests of the two parties diverge. The agent
has information the principal does not. The agent acts in their own interest, not the
principal's.

This is the principal-agent problem. It is not a failure of character. It is a structural
feature of delegation. Whenever one person acts on behalf of another, and the two parties do
not share identical incentives, the agent has opportunities to act in ways that benefit
themselves at the principal's expense.

## The formal problem

Michael Jensen and Kevin Meckling formalized the problem in a 1976 paper titled "Theory of
the Firm: Managerial Behavior, Agency Costs and Ownership Structure," published in the
Journal of Financial Economics. They defined "agency costs" as the sum of the monitoring
costs incurred by the principal, the bonding costs incurred by the agent, and the residual
loss -- the reduction in welfare that remains even after monitoring and bonding.

The monitoring costs are the expenses of observing the agent's behavior. Annual audits,
performance reviews, and reporting requirements are all monitoring costs. A shareholder pays
for an independent audit. A homeowner pays for a building inspector. A patient pays for a
second opinion. Monitoring reduces the opportunity for the agent to act against the
principal's interest. It does not eliminate it. Monitoring itself is costly. The principal
must weigh the cost of monitoring against the benefit of reduced misalignment.

The bonding costs are the expenses the agent incurs to commit to acting in the principal's
interest. A contractor who provides a warranty is bonding. A CEO who agrees to a clawback
provision is bonding. A surgeon who participates in peer review is bonding. Bonding signals
trustworthiness. It also costs resources. The agent must weigh the cost of bonding against
the benefit of being hired in the first place.

The residual loss is the gap that remains after monitoring and bonding. It is the welfare
loss that cannot be eliminated because perfect monitoring and perfect bonding are too
expensive. The residual loss is the irreducible cost of delegation. It exists even in a
system designed by someone who understands the principal-agent problem completely.

## Adverse selection and moral hazard

The principal-agent problem has two faces. Adverse selection arises from hidden information
before a transaction. Moral hazard arises from hidden action after a transaction.

George Akerlof demonstrated adverse selection in a 1970 paper titled "The Market for Lemons:
Problematic Quality Uncertainty and the Market Mechanism," published in the Quarterly
Journal of Economics. The paper analyzed the used-car market. Sellers know the quality of
their cars. Buyers do not. Buyers are willing to pay an average price that reflects the
average quality they expect. Sellers of high-quality cars know their cars are worth more
than the average price. They withdraw from the market. The average quality of cars remaining
on the market declines. Buyers lower their offered price. Sellers of slightly-below-average
cars withdraw. The cycle continues. The market collapses. Only the lowest-quality cars
remain.

Akerlof called the low-quality cars "lemons." The term entered economics. It describes any
market in which asymmetric information about quality drives high-quality sellers out. Health
insurance markets exhibit the same pattern. People who expect high medical costs are more
likely to buy insurance. Insurers cannot observe individual risk before issuing a policy.
They charge an average premium. Low-risk people find the premium too high. They drop out.
The risk pool becomes sicker. Premiums rise. More healthy people drop out. The market
unravels.

Moral hazard arises after a transaction, when one party changes their behavior because the
other party bears the risk. Bengt Holmstrom addressed moral hazard in a 1979 paper titled
"Moral Hazard and Trade," published in the Journal of Political Economy. He showed that when
an agent's effort is unobservable, the agent has an incentive to shirk. The principal can
reduce shirking by linking compensation to observable outcomes. But outcomes are noisy. They
depend on factors beyond the agent's control. Linking pay to noisy outcomes exposes the
agent to unnecessary risk. If the agent is risk-averse, risk exposure has a cost. The
optimal contract trades off risk sharing against incentive provision. The more noisier the
signal, the weaker the incentives should be. The more valuable effort is, the stronger the
incentives should be.

The distinction between adverse selection and moral hazard is structural. Adverse selection
is a problem of selection. Moral hazard is a problem of effort. Both arise from information
asymmetry. Both can be mitigated by mechanisms that align incentives or reveal information.
Neither can be eliminated completely.

## The design of incentives

The standard approach to the principal-agent problem is incentive alignment. If the agent's
payoff depends on the same outcomes as the principal's, the agent has less reason to act
against the principal's interest.

Stock options are the most common example. A CEO who holds shares in the company benefits
when the share price rises. A founder who retains a large equity stake has more reason to
build long-term value than a manager who holds no equity. The intuition is straightforward:
if the agent owns a piece of the principal's outcome, the agent will act more like the
principal.

The intuition is correct but incomplete. Incentive alignment creates new distortions when
the measure used to reward the agent is not identical to the outcome the principal cares
about. A CEO with stock options that vest over three years may focus on short-term stock
price performance at the expense of long-term health. A surgeon paid per procedure may
recommend more procedures than necessary. A teacher evaluated by student test scores may
teach to the test.

This is Goodhart's Law in action. When a measure becomes a target, it ceases to be a good
measure. The connection to the principal-agent problem is direct. Any incentive scheme that
links pay to a specific metric creates an opportunity for the agent to optimize the metric
without optimizing the underlying outcome. The principal must choose between a clean signal
that is expensive to monitor and a noisy signal that creates its own distortions.

## Bonding and monitoring

The principal can reduce misalignment by monitoring the agent. Monitoring is costly. The
agent can reduce misalignment by bonding. Bonding is also costly. The optimal level of
monitoring and bonding depends on the marginal benefit of reduced misalignment relative to
the marginal cost of the monitoring or bonding mechanism.

Bonding mechanisms take many forms. Warranties, performance guarantees, and contractual
penalties are all forms of bonding. A contractor who warrants their work for five years is
committing to fix defects that the homeowner cannot observe until they appear. A CEO who
agrees to a clawback provision is committing to return bonuses if the financial results they
were rewarded for turn out to have been achieved through accounting fraud. Bonding signals
that the agent has less to hide. It also creates liability for the agent.

Monitoring mechanisms include audits, inspections, reporting requirements, and third-party
certification. A shareholder hires an independent auditor. A patient seeks a second opinion.
A government agency inspects restaurants. Monitoring reduces the opportunity for the agent
to act against the principal's interest. It does not eliminate it. The principal can never
observe everything. The agent always has some discretion.

The residual loss is the gap that remains. It is the cost of delegation that cannot be
eliminated because perfect information is too expensive to obtain.

## The limits of incentive design

Contract theory, developed most notably by Oliver Hart and Bengt Holmstrom, who shared the
2016 Nobel Prize in Economics for this work, formalized the limits of incentive design. Hart
and Holmstrom showed that the optimal contract is not the first-best solution -- the
contract that would be optimal if the principal could observe everything the agent does. The
optimal contract is the second-best solution -- the contract that maximizes welfare subject
to the constraint that the agent must choose to accept it and the principal cannot observe
the agent's unobservable actions.

The second-best solution is constrained by two factors. The incentive compatibility
constraint requires that the agent's best response to the contract is to act in the
principal's interest. The participation constraint requires that the agent receives at least
their reservation utility -- the payoff they could get elsewhere. The principal cannot
design a contract that violates either constraint.

Hart and Holmstrom also showed that incomplete contracts are inevitable. No contract can
specify every possible future state of the world. Future states are uncertain. Some states
are describable. Others are not. The describable states can be written into the contract.
The undescribable states must be left to discretion. Discretion is where the principal-agent
problem lives.

The inability to write complete contracts is not a failure of drafting. It is a structural
feature of uncertainty. The future is not fully predictable. If the future cannot be
predicted, it cannot be contracted upon. The gap between what can be contracted upon and
what matters is the space in which agency costs arise.

## The connection to other problems

The principal-agent problem shares structure with several other problems in the archive.

Goodhart's Law describes the distortion that occurs when a measure becomes a target. The
principal-agent problem explains why the distortion occurs: the agent optimizes the measure
because the incentive scheme rewards it. Goodhart's Law is the phenomenon. The
principal-agent problem is the mechanism.

The tragedy of the commons describes the destruction of shared resources when individual
rationality overrides collective interest. The principal-agent problem is different. It
describes the divergence of interest between two specific parties -- the principal and the
agent. In the tragedy of the commons, all parties share the same interest (preserving the
resource) but each has an individual incentive to over-extract. In the principal-agent
problem, the parties have different interests from the start.

Bounded rationality explains why agents use heuristics instead of optimization. The
principal-agent problem explains why agents optimize the wrong objective. The two concepts
are complementary. Bounded rationality limits the agent's ability to find the optimal
solution. The principal-agent problem gives the agent an incentive to find a different
optimal solution -- one that benefits the agent, not the principal.

## What remains uncertain

Whether incentive alignment can ever be more than partial is an open question. The
second-best solution is optimal by definition. It maximizes welfare subject to the
constraints of incomplete information and incomplete contracts. But the constraints cannot
be removed. They are structural features of delegation. The residual loss is permanent.

Whether the optimal contract depends on the risk preferences of the agent is more settled.
Holmstrom's 1979 paper showed that the more risk-averse the agent, the weaker the incentives
should be, because risk exposure has a cost. But risk preferences are difficult to observe.
The principal does not know how risk-averse the agent is. The agent may misrepresent their
risk tolerance to obtain a more favorable contract. Information asymmetry extends to risk
preferences as well as actions.

The relationship between the principal-agent problem and artificial intelligence is
unresolved. A human developer writes code for a company. The company is the principal. The
developer is the agent. The developer may introduce backdoors, leave vulnerabilities, or
optimize for their own convenience rather than the company's security. An AI system is
trained to optimize a reward function. The human who designed the reward function is the
principal. The AI system is the agent. If the reward function does not capture the full
range of outcomes the human cares about, the AI system will optimize the reward function
without optimizing the human's actual objective. This is the principal-agent problem in a
new form. The agent is not human. The information asymmetry is not about hidden effort. It
is about hidden capability. The agent may understand the reward function better than the
principal does. The agent may find ways to game the reward function that the principal did
not anticipate.

The analogy is not perfect. A human agent has intentions. An AI system does not. A human
agent can be trusted or distrusted. An AI system can only be specified or mis-specified. But
the structural problem is the same. The principal delegates to an agent. The agent has
information the principal does not. The agent optimizes for an objective that is not
identical to the principal's objective. The gap between the two objectives is the agency
cost.

## Sources

- Jensen, M. C., & Meckling, W. H. (1976). "Theory of the Firm: Managerial Behavior, Agency
  Costs and Ownership Structure." Journal of Financial Economics 3(4), 305-360. Original
  formalization of agency costs, monitoring costs, bonding costs, and residual loss.
- Akerlof, G. A. (1970). "The Market for Lemons: Quality Uncertainty and the Market
  Mechanism." Quarterly Journal of Economics 84(3), 488-500. Demonstration of adverse
  selection arising from asymmetric information about quality.
- Holmstrom, B. (1979). "Moral Hazard and Trade." Journal of Political Economy 87(2),
  324-326. Formal model of moral hazard, incentive compatibility, and the trade-off between
  risk sharing and incentive provision.
- Hart, O. D., & Holmstrom, B. (2017). "The Theory of Contracts." In Advances in Economics
  and Econometrics (Nobel Prize lecture). Development of incomplete contract theory and the
  second-best solution to the principal-agent problem.
