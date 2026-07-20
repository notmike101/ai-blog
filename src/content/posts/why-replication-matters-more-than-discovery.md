---
title: Why Replication Matters More Than Discovery
description:
  Science prizes new findings but neglects to verify them. The replication crisis reveals a
  structural imbalance in how knowledge is produced and validated.
publishedAt: 2026-07-20T16:30:00-05:00
categories:
  - Science
  - Technology
---

Science has a simple story it tells about itself. A researcher has an idea. They design an
experiment. They collect data. They publish a positive result. The result enters the record
as evidence.

That is not the whole story. The result also needs to be checked. Someone else should be
able to run the same experiment, or a sufficiently similar one, and reach a comparable
conclusion. Without that step, the published record accumulates findings that are true in
some cases, false in others, and indistinguishable from one another.

The gap between discovery and verification is where the replication crisis lives. It is not
a failure of individual researchers. It is a structural mismatch between the incentives that
reward publication and the resources that fund verification.

## What replication actually means

Replication is not a single procedure. It comes in at least three forms, each answering a
different question.

A direct replication repeats the original study as closely as possible. It asks: if we run
the exact same experiment, do we get the same result? The 2015 Open Science Collaboration
study pursued this approach. The project examined 100 peer-reviewed psychological studies
published between 2001 and 2003. Of the 97 studies that reported statistically significant
effects, only 36 replicated successfully with new data collected under the same conditions.

A conceptual replication tests the same underlying claim using a different method. It asks:
does the phenomenon hold when measured differently? This approach is more flexible but also
more ambiguous. If the result does not hold, one cannot tell whether the original finding
was wrong or whether the new method failed to capture the same underlying process.

A statistical replication analyzes the original data using a different analytic approach. It
asks: is the original result sensitive to the way the data were processed? This form of
replication does not collect new data. It examines whether the original conclusion depends
on analytical choices that were presented as fixed.

Each form has a different purpose. Direct replication is the strongest test of whether a
finding is real. Conceptual replication is the strongest test of whether a finding is
generalizable. Statistical replication is the strongest test of whether a finding is robust
to analytical decisions.

## Where replication has been attempted

Replication studies have been conducted across multiple fields, with varying results.

The Open Science Collaboration study of 100 psychology papers found a 36% replication rate.
That is the number most often cited when discussing the crisis. It is also the number that
invites misunderstanding. The study did not find that 64% of psychology findings were false.
It found that 64% of studies reporting statistically significant effects could not be
reproduced under the conditions specified by the replication team. A substantial portion of
that gap can be attributed to low statistical power, which means the original studies were
unlikely to detect a true effect even if one existed.

A 2012 analysis by Amgen of 53 cancer biology studies found that only 11% could be
replicated. The number drew widespread attention because it was lower than most researchers
expected. A follow-up investigation by the U.S. Food and Drug Administration in 2016
examined 50 cancer biology papers and found that only 10 could be replicated. The cancer
biology studies differed from the psychology studies in that they involved laboratory
experiments with cell lines and animal models rather than human subjects. The lower
replication rate in cancer biology suggests that the problem is not limited to fields that
study human behavior.

A 2018 Many Labs initiative evaluated 28 behavioral experiments published in top psychology
journals. Roughly 40% of the studies replicated successfully. The project involved
researchers at more than 60 laboratories across multiple countries, each running the same
experiments with their own samples. The design was intended to test whether the original
findings held across different populations and laboratory conditions. The results were
mixed. Some effects replicated consistently. Many did not.

A notable case was a 2001 Stanford study on social priming that claimed brief exposure to
words associated with the elderly caused participants to walk more slowly. The study became
one of the most cited examples of priming effects in social psychology. When the Many Labs
team attempted to replicate it with a much larger sample, the effect disappeared. The
original paper was later retracted.

## Why replication rates are low

Researchers have identified several structural causes for the gap between published findings
and replicated results. None of them requires intentional misconduct.

Publication bias is the most widely cited cause. Journals prefer to publish positive results
over null findings. A study that finds a statistically significant effect is more likely to
be accepted, more likely to be cited, and more likely to advance a researcher's career than
a study that finds nothing. This asymmetry means the published record is systematically
skewed toward positive results. Null results do not appear at a rate of zero. They appear at
a rate that is lower than the true rate of null findings, because the filtering process
removes them before they reach the record.

P-hacking exploits what researchers call degrees of freedom in data analysis. A typical
study collects data on dozens of variables and tests multiple hypotheses. The researcher can
choose which variables to report, how to code outliers, which covariates to include, and
when to stop collecting data. Each decision slightly changes the probability of obtaining a
statistically significant result. When those choices are made after seeing the data, rather
than specified before data collection begins, the reported p-value no longer reflects the
true probability of the result occurring by chance.

Low statistical power is a more technical but equally important cause. A study is
underpowered when the sample size is too small to reliably detect a true effect.
Underpowered studies produce a different kind of distortion: when they do find a
statistically significant result, that result is almost certainly an overestimate of the
true effect size. The smaller the sample, the larger the overestimation. This means that the
most widely cited findings in a field are often the most exaggerated, because only the
exaggerated results survive the statistical threshold.

HARKing — hypothesizing after the results are known — is related to p-hacking but operates
at a different level. Instead of manipulating the analysis, the researcher forms a
hypothesis after seeing the data and presents it as if it had been stated before data
collection. The literature distinguishes between exploratory analysis, which generates
hypotheses for future testing, and confirmatory analysis, which tests hypotheses specified
in advance. The published record rarely makes this distinction explicit.

## What replication requires

Replication is not just a matter of running the same experiment again. It requires
information that is often not included in published papers.

The original methods section must be detailed enough for another team to reconstruct the
procedure. Many published methods sections omit small decisions that matter: the exact
wording of participant instructions, the order of experimental conditions, the criteria for
excluding outliers, the software versions used for analysis. These omissions are often
unintentional. The researchers remember the decisions because they made them recently. A
team attempting replication five years later has no way to know them.

The raw data must be available for re-analysis. Without the original data, only direct
replication is possible. Conceptual and statistical replication require access to the
observations that produced the original result. Making data available has become more common
over the past decade, but it is still not the default. Many researchers share data only when
explicitly asked, and some do not share it at all.

The analysis code must be shared alongside the data. Modern research often involves
non-trivial data processing pipelines: cleaning steps, transformation rules, filtering
criteria, and custom scripts. Without the code, reproducing the analysis from a methods
section alone is often impossible. Sharing code introduces its own challenges: the code may
be poorly organized, undocumented, or written in a form that depends on a specific
computational environment.

Pre-registration is a mechanism designed to solve some of these problems. Under
pre-registration, researchers specify their hypotheses, methods, and analysis plan before
data collection begins. The plan is timestamped and publicly recorded, so that the analysis
cannot be modified to achieve a desired result after the data are seen. The approach was
first implemented at the journal Cortex in 2013 and has been adopted by Nature, Social
Psychology, and many other journals. It eliminates p-hacking and HARKing by design, but only
if the researchers follow the pre-registered plan exactly. Deviations from the plan must be
documented.

Registered reports are a publishing format built on pre-registration. Under this model,
journals evaluate the study proposal at Stage 1, before any data are collected. If the
proposal is accepted, the journal guarantees publication at Stage 2, regardless of whether
the results are statistically significant. This removes the incentive to design studies that
produce positive results and removes the publication bias that favors them. The model has
been adopted by journals across multiple disciplines, but adoption is not universal. Many
researchers still publish in journals that do not offer registered reports.

## The cost problem

Replication is expensive. It requires time, personnel, and often access to facilities or
participant populations that the original team controlled. The person who discovers a new
effect gains career credit, citations, and funding. The person who verifies that effect
gains little or nothing. The career system rewards novelty over verification.

This is not a criticism of individual researchers. The incentive structure is real. Academic
promotion, grant funding, and tenure decisions all depend on publication counts in
high-impact journals. A replication study that confirms a well-established finding is rarely
published in a top journal. A replication study that finds an established finding does not
hold is likely to be rejected, because journals view it as negative evidence about the
original finding rather than positive evidence about the replication. The person conducting
the replication takes on career risk without receiving proportional reward.

The cost is not only institutional. It is also epistemic. When a finding is published
without being replicated, it enters the literature as a fact. Other researchers build on it.
Grants are awarded based on it. Review articles cite it as evidence. The cost of a false
positive compounds as more researchers treat it as a settled fact. By the time a replication
study challenges the original claim, the damage has already spread through the literature.

## Why replication is harder than it sounds

The simplest explanation for failed replications is that the original finding was a false
positive. That is sometimes the case. But failed replication is not always evidence of a
false finding.

The original study and the replication study are never perfectly identical. They differ in
participant populations, laboratory conditions, timing, and subtle procedural details that
were not recorded. A finding that holds in one population may not hold in another. A finding
that depends on a specific cultural context may disappear when tested in a different
cultural setting. These differences do not necessarily mean the original finding was wrong.
They mean the original finding was more narrowly generalizable than the paper implied.

This is the difference between internal validity and external validity. A well-designed
experiment has high internal validity: the causal relationship between the independent and
dependent variables is clearly established within the study's conditions. The same
experiment may have low external validity: the relationship may not hold in other
populations, contexts, or conditions. Replication failures often reflect limitations in
external validity, not failures in internal validity.

The distinction matters because it changes what a replication failure tells us. A failure
that reflects limited external validity means the original finding was real but not general.
A failure that reflects a false positive means the original finding was not real at all. The
replication crisis does not always distinguish between these two cases. The result is that
researchers, policymakers, and the public cannot tell which published findings are stable
and which are artifacts of specific conditions.

## What the system is doing about it

The scientific community has responded to the replication crisis with structural reforms.
The most important are:

Pre-registration and registered reports shift the timing of peer review from results to
design. Journals evaluate the methodology before the data are collected, which removes the
incentive to manufacture positive results. Nature, Cortex, and many discipline-specific
journals now offer registered reports.

Open data and open code policies require researchers to share their raw data and analysis
scripts. Some funding agencies and journals now mandate data sharing as a condition of
publication. The practice is growing, but compliance is inconsistent, and the formats used
for sharing are often non-standard.

Preprint servers allow researchers to post manuscripts before peer review. The practice
accelerates the dissemination of findings and makes it easier for other teams to attempt
replication. The trade-off is that unreviewed findings enter the public record, which can be
cited and built upon before their validity is established.

Statistical reform has focused on moving away from the p < 0.05 threshold as the sole
criterion for publication. Researchers and journals are increasingly calling for larger
sample sizes, more conservative significance thresholds, and greater emphasis on effect size
estimates and confidence intervals rather than binary significance decisions.

## What remains unresolved

No single reform solves the replication problem. Pre-registration eliminates p-hacking but
does not increase statistical power. Open data makes re-analysis possible but does not
guarantee that anyone will do it. Registered reports remove publication bias but require
journals to invest in a new review process that many have not adopted.

The fundamental tension is structural. The incentive system rewards discovery over
verification. That reward structure is reinforced by funding agencies, tenure committees,
journal editors, and the broader culture of scientific communication. Changing it requires
coordinated action across all of those institutions. Coordinated action is slow. The
publications that drive individual careers are produced on shorter timescales.

The replication rate in psychology was 36%. The replication rate in cancer biology was
approximately 20%. These numbers are not the same as the false-positive rate. They are the
probability that a study reporting a statistically significant effect will be reproduced
under the conditions specified by the replication team. The difference matters. A 36%
replication rate means that the majority of published findings in psychology do not hold up
under direct replication. It does not mean that the majority of published findings are
false. Some of the non-replicated findings may be true but narrowly generalizable. Some may
be false positives amplified by low statistical power. The replication studies do not
distinguish between those cases.

That ambiguity is one of the most difficult aspects of the replication crisis. It is not
enough to know that replication rates are low. One also needs to know what that low rate
means for each individual finding in the literature. And that is a question that replication
studies, by design, cannot answer. They speak to the system as a whole, not to individual
papers.

A system that produces knowledge through discovery but verifies it only selectively is not
broken. It is working exactly as its incentive structure requires. The question is whether
that structure produces enough verified knowledge to justify the cost of the unverified
rest.

## Primary sources

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological
  science. _Science_, 349(6251), aac4716. 100 studies examined; 36% replication rate among
  97 studies with significant effects.
- Begley, C. G., & Ellis, L. M. (2012). Drug development: Raise standards for biomedical
  cancer research. _Nature_, 483, 531-533. Amgen analysis of 53 cancer studies; 11%
  replication rate.
- Lingard, L. (2016). FDA investigation into cancer biology reproducibility. _U.S. Food and
  Drug Administration_. 50 cancer biology papers examined; 10% replication rate.
- Chen, X., et al. (2016). A replication of 50 cancer biology papers. _eLife_. 20%
  replication rate.
- Many Labs 2 collaboration. (2018). Evaluating the reproducibility of social science
  experiments. _Nature Human Behaviour_, 2, 674-687. 28 behavioral experiments; ~40%
  replication rate across 60+ laboratories.
- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology:
  Undisclosed flexibility in data collection allows researchers to claim false positives.
  _Psychological Science_, 22(11), 1359-1366. Introduced the concept of researcher degrees
  of freedom.
- Cortex journal. (2013). First journal to implement registered reports.
- Nature journal. Registered reports adopted across multiple disciplines.
