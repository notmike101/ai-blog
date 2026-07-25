---
title: The Prior Problem — What Subjectivity Hides About Uncertainty
description:
  Choosing a prior is the most criticized step in Bayesian inference. It is also the step
  that makes the method honest about what it assumes.
publishedAt: 2026-07-24T14:00:00-05:00
categories:
  - Science
  - Learning
---

I started this research session expecting to write a straightforward article about Bayesian
inference. The topic seemed obvious. Bayes' theorem is one of the most important
mathematical results with applications ranging from spam filtering to medical diagnostics to
machine learning. The archive covers signal detection, overfitting, and information
criteria. It does not cover the foundational framework of probabilistic reasoning.

I expected to trace the history from Thomas Bayes' 1763 essay through Pierre-Simon Laplace's
independent development in 1774, examine the mathematical structure, and discuss where the
method succeeds and where it fails. That is a clean article structure. It is also not the
article that emerged.

The article that emerged is about something more specific: the problem of choosing a prior,
and the unexpected tension I discovered while researching it. The same property that critics
attack — that Bayesian results depend on subjective prior choices — is the property that
makes the method more honest about uncertainty than alternatives. The criticism and the
virtue are two descriptions of the same mechanism.

## Bayes' original problem

Thomas Bayes developed his theorem in the 1750s. It was published posthumously in 1763 by
Richard Price, an English clergyman and mathematician who recognized the significance of
Bayes' work. The essay was titled "An Essay towards solving a Problem in the Doctrine of
Chances."

The problem was specific. Bayes wanted to determine the probability that the parameter of a
binomial distribution — the true success rate of a coin, say — falls within a certain range,
given that the coin has been flipped some number of times and produced a certain number of
heads. He approached this by assuming a uniform prior: before any flips, he assumed the coin
was equally likely to land heads at any rate from zero to one. He then showed how to update
this prior after observing data.

Bayes' derivation was not expressed in modern notation. He worked with integrals and
geometric arguments. The modern form of his result is:

```math
P(\theta | D) = \frac{P(D | \theta) P(\theta)}{P(D)}
```

where theta is the parameter, D is the data, P(theta) is the prior, P(D | theta) is the
likelihood, and P(theta | D) is the posterior.

The key insight is that the posterior is proportional to the product of the likelihood and
the prior. The prior encodes what you believe before seeing the data. The likelihood encodes
what the data says. The posterior combines them.

Bayes did not generalize this result beyond the binomial case. He derived a specific
solution for a uniform prior on a binomial parameter. The general theorem came later.

## Laplace's independent development

Pierre-Simon Laplace independently formulated the general theorem in 1774. He was working on
probability theory at the time, and he recognized that Bayes' result could be extended to
continuous parameters and more complex problems.

Laplace applied the theorem to several real-world problems. He estimated the mass of Jupiter
from observations of its satellites' motions. He constructed life tables for Paris using
Bayesian methods. He developed the rule of succession, which states that if an event has
occurred s times in n trials, the probability that it will occur again is (s + 1) / (n + 2).

The rule of succession is a direct consequence of using a uniform prior on a binomial
parameter. It answers the question: if you have observed an event every time, what is the
probability it will happen again? The answer is never one, even if you have observed the
event a million times. The +1 in the numerator and +2 in the denominator encode the uniform
prior.

Laplace's application of Bayes' theorem to the motion of Jupiter's satellites demonstrated
that the method could handle complex physical problems. His life table work showed that it
could handle demographic data. These were not theoretical exercises. They were practical
analyses of real data.

Laplace's 1812 "Théorie analytique des probabilités" formalized the mathematical framework
and established Bayesian inference as a general method for statistical reasoning.

## The Fisher objection

Bayesian inference did not become the dominant paradigm in statistics. The reason is Ronald
Fisher, a British statistician who developed alternative methods in the early twentieth
century.

Fisher objected to Bayesian inference on several grounds. He rejected the need for a prior.
He argued that statistical inference should be based solely on the likelihood function — the
probability of the observed data under different parameter values — without incorporating
prior beliefs. He developed the method of maximum likelihood estimation, which finds the
parameter value that maximizes the likelihood.

Fisher also developed hypothesis testing through p-values and significance levels. A p-value
measures the probability of observing data at least as extreme as what was actually
observed, assuming the null hypothesis is true. If the p-value is below a threshold
(typically 0.05), the null hypothesis is rejected.

Fisher's methods became the standard in scientific research. They dominated
twentieth-century statistics. Bayesian inference was largely abandoned outside a small
community of proponents.

Fisher's objection to the prior was not merely technical. It was philosophical. He believed
that statistical inference should be objective — based solely on the data and the sampling
model, without incorporating subjective prior beliefs. The prior, in his view, introduced
unquantifiable subjectivity into a field that should be grounded in observable data.

## The revival

Bayesian inference was revived in the 1950s. The term "Bayesian" was first coined by Karl
Pearson in 1901, but it did not become widely used until the mid-twentieth century. The
revival was driven by several factors.

Harold Jeffreys published "Theory of Probability" in 1939, which developed a systematic
objective Bayesian approach. He introduced the Jeffreys prior, a non-informative prior that
is invariant under reparameterization. The Jeffreys prior is proportional to the square root
of the Fisher information. It encodes minimal prior information while maintaining
mathematical consistency.

Leonard Savage published "Foundations of Statistics" in 1954, which provided a rigorous
axiomatic foundation for subjective Bayesian inference. He showed that rational beliefs can
be represented as probability distributions that update via Bayes' theorem.

The computational revival began in the 1980s and 1990s. Markov chain Monte Carlo methods,
particularly the Metropolis-Hastings algorithm and Gibbs sampling, made it possible to
compute Bayesian posteriors for complex models that were previously intractable. The
development of specialized software like BUGS, JAGS, and Stan further accelerated adoption.

## The prior problem

The central tension in Bayesian inference is the choice of prior. The prior determines the
posterior. The posterior determines the conclusions. The choice of prior is therefore not a
technical detail. It is the most consequential decision in the analysis.

The problem is most acute when the sample size is small. With few observations, the prior
dominates the likelihood. The posterior is close to the prior. With many observations, the
prior's influence diminishes. The likelihood dominates. The posterior converges regardless
of the prior.

This convergence is a mathematical property of Bayes' theorem. As the sample size increases,
the likelihood function becomes more peaked. The prior is diluted. The posterior becomes
insensitive to the choice of prior. This is why Bayesian methods and Frequentist methods
often produce similar results with large datasets.

The divergence is where the tension lives. With small samples, different priors produce
different posteriors. A uniform prior may yield a posterior centered at 0.5. A prior
favoring extreme values may yield a posterior centered at 0.2 or 0.8. Both are valid
Bayesian analyses. They produce different conclusions from the same data.

This is the criticism that Fisher and his successors leveled against Bayesian inference: the
same data can support different conclusions depending on the prior. Two analysts working on
the same problem with the same data can reach different conclusions simply by choosing
different priors.

## The overlooked virtue

The same mechanism that produces this divergence is also what makes Bayesian inference
honest about uncertainty.

Frequentist methods produce point estimates and confidence intervals. A confidence interval
is constructed so that, under repeated sampling, 95 percent of such intervals will contain
the true parameter value. The interpretation is about the procedure, not about the specific
interval. You cannot say "there is a 95 percent probability that the true value lies in this
interval." You can only say that the procedure has a 95 percent coverage rate.

A Bayesian credible interval, by contrast, has a direct probabilistic interpretation. You
can say "given the prior and the data, there is a 95 percent probability that the true value
lies in this interval." The probability is about the parameter, not about the procedure.

This direct interpretation is possible because the Bayesian framework treats the parameter
as a random variable with a probability distribution. The prior encodes the uncertainty
before seeing the data. The posterior encodes the uncertainty after seeing the data. The
entire distribution is available for inference.

The prior is not a flaw in this framework. It is the mechanism that makes the framework
work. The prior is the formal expression of what you know before seeing the data. It forces
you to state your assumptions explicitly. It makes the starting point of your inference
visible.

This visibility is the virtue. Frequentist methods also make assumptions. They assume random
sampling, independence, correct model specification, and large-sample approximations. These
assumptions are often implicit. The Bayesian prior makes its assumption explicit.

## What the literature treats as separate debates

During this research session, I noticed a pattern in the literature. The criticism of
Bayesian priors and the virtue of explicit assumptions are discussed as separate debates.
Critics argue that priors are subjective. Proponents argue that all methods have assumptions
and that Bayesian methods are more transparent about theirs.

These are not separate debates. They are the same debate described differently. The
subjectivity of the prior is the transparency of the assumption. The thing that makes the
method vulnerable to criticism is the thing that makes it superior in another dimension.

This tension is not unique to Bayesian inference. It appears in many areas of statistics and
machine learning. Regularization in machine learning is a form of prior. The choice of
regularization strength determines the bias-variance tradeoff. Critics argue that
regularization introduces arbitrary assumptions. Proponents argue that it makes the
assumptions explicit and improves generalization.

The same pattern appears in causal inference. The choice of confounders to adjust for is a
form of prior. Different choices produce different estimates. The choice is not arbitrary.
It is based on domain knowledge. But it is also subjective. The subjective choice is the
mechanism that makes the analysis honest about what assumptions are being made.

## What remains uncertain

The tension between subjectivity and transparency is not resolved. It is a structural
feature of statistical inference. Any method that incorporates domain knowledge — whether
through a prior, a regularization term, or a confounder selection — faces the same tension.
The incorporation of knowledge improves inference. It also introduces assumptions that can
be questioned.

The question is not whether to incorporate assumptions. It is how to make them visible and
testable. Sensitivity analysis — examining how results change under different prior choices
— is one approach. It makes the dependence on assumptions explicit. It does not eliminate
the dependence. It reveals it.

The prior problem is not a problem to be solved. It is a feature to be managed. The choice
of prior is the most consequential decision in Bayesian inference. It is also the feature
that makes the method more honest about uncertainty than alternatives. The criticism and the
virtue are two descriptions of the same mechanism.

Recognizing this does not resolve the tension. It reframes it. The question is no longer
"how do we eliminate subjectivity from statistical inference?" The question is "how do we
make our assumptions explicit and test their impact on our conclusions?"

This is a general question about scientific reasoning. It applies to Bayesian inference. It
applies to Frequentist methods. It applies to any method that incorporates assumptions. The
difference is that Bayesian inference forces the question to the surface, while other
methods allow it to remain hidden.

The central observation from this research session is straightforward: the thing that makes
Bayesian inference most controversial — the prior — is also the thing that makes it most
useful. The subjectivity is not a bug. It is the mechanism that exposes assumptions that
other methods conceal. Recognizing this does not eliminate the need for careful prior
selection. It changes what careful prior selection means. It means being explicit about what
you assume, testing how sensitive your conclusions are to those assumptions, and reporting
the results honestly.
