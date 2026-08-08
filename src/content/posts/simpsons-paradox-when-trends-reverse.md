---
title: Simpson's Paradox — When Trends Reverse
description:
  A trend in aggregated data can reverse when the same data is split into groups. Simpson's
  paradox reveals why combining numbers without context misleads.
publishedAt: 2026-08-08T14:00:00-05:00
categories:
  - Mathematics
  - Science
---

A treatment works better for small kidney stones and better for large kidney stones, yet
when you combine the data it appears worse. A university admits a lower percentage of women
overall, but within most departments the rate for women is equal to or higher than for men.
The numbers are correct in both cases. They also contradict each other.

This is Simpson's paradox: a statistical phenomenon where a trend that holds in several
separate groups reverses direction when those groups are combined. It is not a mistake in
calculation. It is a structural property of how weighted averages behave when group sizes
differ substantially.

The paradox carries a practical lesson. Aggregated data can conceal the very patterns that
subgroup analysis reveals, and subgroup analysis can omit the allocation decisions that
shaped the groups in the first place. Neither view is wrong. Both are incomplete without the
other.

## History

The phenomenon predates its name. Karl Pearson documented it in 1899, observing that
aggregated correlation coefficients could differ from those computed within subgroups. Udny
Yule returned to the problem in 1903, developing what is now called Yule's formula for
partial association in contingency tables. Yule recognized that an overall association
between two variables could mask a different relationship once a third variable was
controlled for.

Edward H. Simpson published a formal treatment in 1951 in the _Journal of the Royal
Statistical Society, Series B_. His paper, "The Interpretation of Interaction in Contingency
Tables," showed how interaction effects in multi-way tables can produce reversals when
margins are collapsed. Simpson did not name the phenomenon after himself. That happened in
1972, when Colin R. Blyth coined "Simpson's paradox" in a paper on statistical inference for
binomial distributions.

The naming itself is a reminder: the person whose name sticks to a discovery is not always
the first person to notice it, nor necessarily the one who understood it most deeply.

## Why it happens

The mechanism is straightforward. A combined statistic is a weighted average of subgroup
statistics, where the weights are the subgroup sizes. When those weights differ across the
groups being compared, the combined result reflects both the subgroup values and the
distribution of observations across subgroups.

Consider two rates, $a/b$ and $c/d$, each greater than their counterparts $a'/b'$ and
$c'/d'$. The combined rate $(a+c)/(b+d)$ can still fall below $(a'+c')/(b'+d')$ if the
denominators are distributed unevenly. In vector terms, each rate corresponds to a direction
in the plane, and the combined rate is the direction of the vector sum. Two vectors pointing
in one direction can sum to a vector pointing in another direction when their lengths differ
substantially.

The paradox arises whenever a confounding variable — stone size, department selectivity,
disease severity — correlates with both group membership and outcome. Collapsing across that
variable mixes groups with different baseline rates, and the resulting aggregate reflects
the mixing pattern as much as the underlying trend.

## The kidney stone treatment

The most widely cited medical example comes from a 1986 study published in the _British
Medical Journal_ by M.R. Charig and colleagues. The study compared two treatments for kidney
stones — percutaneous nephrolithotomy (Treatment A) and open surgery (Treatment B) — across
two patient groups defined by stone size.

The results by subgroup were clear:

- **Small stones:** Treatment A succeeded in 93% of cases (81 out of 87), versus 87% for
  Treatment B (234 out of 270).
- **Large stones:** Treatment A succeeded in 73% of cases (192 out of 263), versus 69% for
  Treatment B (55 out of 80).

Treatment A outperformed Treatment B in both subgroups. Yet the combined data told a
different story: Treatment A had a 78% overall success rate (273 out of 350), while
Treatment B reached 83% (289 out of 350).

The explanation lies in how doctors assigned patients. Treatment A — the more invasive
procedure — was preferentially given to patients with large stones, the harder cases.
Treatment B was used more often for small stones, where success is easier to achieve. The
aggregate data conflated treatment effectiveness with case difficulty. Treatment B looked
better overall because it was tested against an easier set of problems.

This example appears in statistical textbooks and was later discussed by Julian Julious and
Mark Mullee in a 1994 _BMJ_ article on the paradox. It illustrates why clinical data
requires stratification: a treatment's apparent effectiveness depends on which patients
receive it.

## The Berkeley admissions case

In 1973, the University of California, Berkeley faced allegations of gender bias in graduate
admissions. An analysis of the aggregate data seemed to confirm the concern: 44% of male
applicants were admitted (3,737 out of 8,442), compared to 35% of female applicants (1,494
out of 4,321).

P.J. Bickel, E.A. Hammel, and J.W. O'Connell investigated further, publishing their findings
in _Science_ in 1975. When they broke the data down by department, the pattern changed.
Among the six largest departments, women had an admission advantage in four. The overall
disadvantage for women was not caused by bias within departments. It was caused by
application patterns.

Women applied disproportionately to departments with low admission rates — programs that
were competitive regardless of gender. Men applied more often to departments with high
admission rates. When Bickel and colleagues controlled for department, the aggregate bias
disappeared. The corrected analysis showed a "small but statistically significant bias in
favor of women."

The case was confirmed by a subsequent investigation by the university. It remains a
textbook example of how an aggregate statistic can suggest discrimination where none exists
at the level where decisions are actually made.

## What the paradox does not mean

Simpson's paradox is sometimes invoked to dismiss legitimate concerns about aggregate data.
That is a misapplication. The paradox does not say that aggregated data is meaningless, or
that subgroup analysis is always the correct view. It says that both views carry information
and that choosing between them requires understanding how the data were generated.

In the Berkeley case, the aggregate rate was still a meaningful summary of the application
landscape. It told a story about where women chose to apply and what barriers they faced at
the program level. The subgroup analysis told a different story about department-level
fairness. Both stories were true.

In the kidney stone study, the aggregate rate reflected real patient outcomes across the
hospital. The subgroup analysis revealed which treatment worked better for each type of
case. A clinician deciding between treatments needs the subgroup data. A hospital
administrator evaluating overall outcomes needs both views.

The paradox is not a trick. It is a signal that a third variable — one that affects both
group assignment and outcome — deserves attention. Ignoring it produces misleading
conclusions. But so does ignoring the allocation pattern that created the groups.

## When to expect it

Simpson's paradox appears in any domain where data are aggregated across heterogeneous
subgroups. It has been documented in:

- **Clinical trials** where treatment assignment correlates with disease severity
- **Educational research** where school-level and student-level effects differ in direction
- **Sports analytics** where a player's batting average can decline in each season yet rise
  over the combined span (because more at-bats occur in stronger seasons)
- **Epidemiology** where disease rates by region can reverse when age structure is
  controlled for
- **Quality control** where defect rates by machine can reverse when shift length is
  accounted for

The common thread is a confounding variable that correlates with both the grouping and the
outcome. When that variable is ignored, the aggregate statistic reflects the confound as
much as the relationship of interest.

## How to handle it

There is no universal rule for whether to report aggregated or stratified data. The right
approach depends on the question being asked and the structure of the data-generating
process.

Start by asking what determines group membership. If assignment is random, the aggregate is
usually the most informative summary. If assignment is systematic — doctors choosing
treatments, applicants choosing departments, managers allocating resources — then
stratification reveals patterns the aggregate conceals.

Report both views when possible. An aggregate statistic without subgroup breakdown can hide
important heterogeneity. Subgroup statistics without an aggregate can obscure the allocation
decisions that shaped the groups. Together they provide a more complete picture.

Be cautious with small subgroups. Stratification increases the number of comparisons and can
produce unstable estimates when some groups have few observations. A reversal driven by a
handful of cases in one subgroup deserves scrutiny before it becomes a conclusion.

## What it reveals about data

Simpson's paradox is a reminder that numbers carry structure. A single statistic compresses
multiple dimensions into one value, and the compression discards information about how those
dimensions were distributed. Two datasets can produce the same aggregate while telling very
different stories at the subgroup level.

The paradox does not undermine statistics. It clarifies what statistics can and cannot do.
Aggregated data answers one question: what happened overall? Stratified data answers
another: what happened within each group? Both questions matter. The paradox is what happens
when you answer one and pretend it answers both.

## Sources

- Simpson, E.H. (1951). "The Interpretation of Interaction in Contingency Tables." _Journal
  of the Royal Statistical Society, Series B_, 13(2), 238–241.
- Bickel, P.J., Hammel, E.A., and O'Connell, J.W. (1975). "Sex Bias in Graduate Admissions:
  Data From Berkeley." _Science_, 187(4175), 398–404.
- Charig, M.R., et al. (1986). "Randomised Controlled Trial of Emergency Percutaneous
  Nephrostomy and Open or Mini-open Nephrolithotomy in Obstructing Renal Calculi." _British
  Medical Journal_, 292(6519), 789–792.
- Julious, S.A. and Mullee, M.A. (1994). "Confounding Simpson's Paradox." _British Medical
  Journal_, 308(6937), 814.
- Blyth, C.R. (1972). "On Simpson's Paradox." _Journal of the Australian Statistical
  Society_, 14, 7–15.
