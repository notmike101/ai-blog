---
title: Robust Statistics — When Outliers Matter
description:
  Standard estimators like the mean and variance break down under model violations. Robust
  statistics offers estimators that remain reliable when data deviate from assumptions.
publishedAt: 2026-07-23T11:00:00-05:00
categories:
  - Science
  - Technology
---

The mean is the simplest estimator of central tendency. Given a set of numbers, you add them
up and divide by the count. It is elegant. It is also fragile. A single outlier can move the
mean arbitrarily far from the center of the data. If you observe one hundred measurements
centered around 100 and one measurement of 10,000, the mean will be 199 — a value that no
single observation actually approached.

The variance is equally fragile. It is defined as the average squared deviation from the
mean. Because it squares the deviations, large outliers are amplified. A single extreme
value can inflate the variance by orders of magnitude, making the entire dataset appear more
spread out than it actually is.

These fragilities are not theoretical curiosities. They affect every field that uses
statistics: physics, economics, medicine, engineering, and machine learning. When the data
contain outliers — observations that deviate significantly from the bulk of the distribution
— the mean and variance produce estimates that are misleading, sometimes catastrophically
so.

Robust statistics is the study of estimators that remain reliable when the data deviate from
the assumptions that standard estimators require. It asks a simple question: what happens
when the world does not follow a clean model, and how can we estimatearafGaussian
distribution or any other idealized form?

## The breakdown point

The standard measure of robustness is the breakdown point: the smallest fraction of
contaminated data that can cause an estimator to produce arbitrarily wrong results.

The mean has a breakdown point of zero. A single outlier — one contaminated data point out
of a million — can push the mean to infinity. The sample variance has the same property.
Both estimators are arbitrarily sensitive to individual observations.

The median has a breakdown point of 50 percent. You would have to replace more than half of
the data with arbitrary values before the median could be pushed arbitrarily far from the
center. The trimmed mean, which removes a fixed percentage of the smallest and largest
values before computing the average, has a breakdown point equal to the trimming fraction. A
ten-percent trimmed mean can tolerate up to ten percent contamination.

The breakdown point is a worst-case measure. It does not tell you how an estimator performs
under small amounts of contamination. It only tells you the threshold at which the estimator
fails completely. An estimator with a high breakdown point is not necessarily good under all
conditions. But an estimator with a low breakdown point is unreliable whenever outliers are
possible.

## M-estimators

M-estimators, introduced by Frank Hampel in 1974, are the most widely used class of robust
estimators. They generalize the method of maximum likelihood estimation. A
maximum-likelihood estimator finds the parameter values that maximize the likelihood of
observing the given data under a assumed distribution. An M-estimator finds the parameter
values that maximize a modified likelihood function, where the modification is designed to
reduce the influence of outliers.

The modification works by replacing the score function of the maximum-likelihood estimator
with a different function that grows more slowly in the tails. For a Gaussian distribution,
the score function is linear: the derivative of the log-likelihood with respect to the mean
is proportional to the deviation from the mean. This linearity is what makes the mean
sensitive to outliers. An M-estimator replaces the linear score function with a function
that is bounded or grows more slowly, such as the Huber loss function.

The Huber loss is defined piecewise. For small deviations, it is quadratic (like the squared
loss used in least squares). For large deviations, it is linear. The transition between the
two regimes is controlled by a tuning parameter. Observations with small residuals are
treated like Gaussian data. Observations with large residuals are treated like Cauchy data,
where the influence of extreme values is naturally attenuated.

The Huber estimator is not a panacea. It requires choosing a tuning parameter that
determines where the transition between quadratic and linear behavior occurs. If the tuning
parameter is too small, the estimator behaves like a trimmed mean and discards too much
information. If it is too large, it behaves like the mean and is too sensitive to outliers.
The choice depends on the expected amount of contamination in the data.

## The influence function

The influence function is a mathematical tool for analyzing how an estimator responds to
individual observations. It measures the effect of adding an infinitesimal amount of
contamination at a specific point on the estimator's value, normalized by the amount of
contamination.

For the mean, the influence function is linear. Adding an observation at position x changes
the mean by (x - mean) / n, where n is the sample size. The effect grows linearly with the
distance from the mean. There is no bound on how large this effect can be.

For the median, the influence function is bounded. Adding an observation at position x
changes the median by at most 1 / (2f(median)), where f is the density at the median. The
effect does not grow with the distance from the median. An observation at infinity changes
the median by the same amount as an observation just outside the interquartile range.

The influence function is the theoretical foundation for understanding robustness. An
estimator with a bounded influence function is robust in the sense that no single
observation can dominate the estimate. An estimator with an unbounded influence function is
vulnerable to outliers, regardless of its breakdown point.

The mean and variance have unbounded influence functions. The median and trimmed mean have
bounded influence functions. M-estimators are designed to have bounded influence functions
by construction. The choice of the score function determines the shape of the influence
function and therefore the estimator's robustness properties.

## Robust estimation of scale

Estimating the spread of a distribution is as important as estimating its center. But the
standard measure of spread — the standard deviation — is just as fragile as the variance. It
is computed from the mean and the squared deviations from the mean, both of which are
sensitive to outliers.

The median absolute deviation (MAD) is a robust alternative. It is defined as the median of
the absolute deviations from the median. For a Gaussian distribution, the MAD is related to
the standard deviation by a constant factor: sigma approximately 1.4826 times MAD. The
factor is chosen so that the MAD is a consistent estimator of the standard deviation under
Gaussianity.

The MAD has a breakdown point of 50 percent. It is as robust as the median. It is also
computationally simple. It does not require iterative optimization or tuning parameters. It
is widely used as a scale estimator in robust statistical methods, particularly as a
normalization factor for robust regression.

The limitation of the MAD is that it is less efficient than the standard deviation under
perfectly Gaussian data. The standard deviation achieves the Cramer-Rao lower bound for
Gaussian data: it has the smallest possible variance among all unbiased estimators. The MAD
has a higher variance under Gaussianity. The trade-off is explicit: robustness at the cost
of efficiency under ideal conditions.

## Robust regression

Linear regression is one of the most widely used statistical methods. It models the
relationship between a dependent variable and one or more independent variables by fitting a
linear equation to the observed data. The standard method for fitting the equation is
ordinary least squares (OLS), which minimizes the sum of squared residuals.

OLS is sensitive to outliers in two ways. Outliers in the dependent variable (y-outliers)
increase the residuals and therefore the fitted coefficients. Outliers in the independent
variables (x-outliers, also called leverage points) can pull the regression line toward
them, distorting the estimated relationship even if their y-values are consistent with the
trend.

The breakdown point of OLS is zero. A single outlier can make the fitted coefficients
arbitrarily large. The influence function of OLS is unbounded. No single observation has a
bounded effect on the estimates.

The least trimmed squares (LTS) estimator, introduced by Peter Rousseeuw in 1984, has a
breakdown point of up to 50 percent. It minimizes the sum of the smallest squared residuals,
discarding a fixed fraction of the largest residuals. The trimming fraction determines the
breakdown point. An LTS estimator that trims half of the residuals can tolerate up to fifty
percent contamination in the data.

The limitation of LTS is computational. Finding the subset of residuals that minimizes the
sum of squared values is a combinatorial optimization problem. The exact solution requires
examining all possible subsets of the data, which is infeasible for large datasets.
Approximate algorithms exist, but they do not guarantee the optimal solution.

The M-estimator for regression replaces the squared loss with a robust loss function, such
as the Huber loss or Tukey's biweight function. Tukey's biweight is zero for large
residuals, which means that extreme observations have no influence on the fitted
coefficients. The estimator is computed iteratively using iteratively reweighted least
squares (IRLS), where the weights are determined by the robust loss function.

The breakdown point of M-estimators for regression is lower than that of LTS. A single
leverage point can cause the breakdown point to drop to zero. The influence function is
bounded, which means that y-outliers have bounded influence. But leverage points can still
distort the estimates because they affect the design matrix, not just the residuals.

## The trade-off: efficiency versus robustness

Robust statistics is fundamentally about trade-offs. Every robust estimator sacrifices
efficiency under ideal conditions in exchange for reliability under model violations. The
standard deviation is the most efficient estimator of spread under Gaussianity. The MAD is
less efficient but more robust. The mean is the most efficient estimator of location under
Gaussianity. The median is less efficient but more robust.

The efficiency trade-off is quantified by the asymptotic variance. An estimator with a lower
asymptotic variance is more efficient. Under Gaussianity, the mean has the lowest possible
asymptotic variance. The median has an asymptotic variance that is approximately 1.57 times
larger than the mean's. This means that, for large Gaussian samples, the standard error of
the median is about 25 percent larger than the standard error of the mean. The median
requires about 57 percent more data to achieve the same precision as the mean.

The robustness trade-off is quantified by the breakdown point and the influence function. An
estimator with a higher breakdown point can tolerate more contamination. An estimator with a
bounded influence function limits the effect of individual observations. These properties
come at the cost of efficiency under ideal conditions.

The choice between efficiency and robustness is not a technical detail. It is a decision
about what kind of errors are more acceptable. If the data are known to be clean, efficiency
matters. If the data may contain outliers, robustness matters. The problem is that the data
are rarely known to be clean. The presence of outliers is often discovered only after the
analysis is complete, when the results look wrong.

## Robustness in machine learning

Machine learning methods are increasingly exposed to the same robustness problems that
classical statistics addresses. Neural networks are trained by minimizing a loss function,
which is typically the mean squared error or the cross-entropy loss. Both are sensitive to
outliers.

The mean squared error loss penalizes large residuals quadratically. A single mislabeled
example in a classification dataset can have a disproportionate effect on the gradient and
therefore on the learned weights. The cross-entropy loss is less sensitive to outliers than
the squared error, but it is not robust. Mislabeling a training example as a different class
produces a large gradient that pushes the model in the wrong direction.

Several approaches have been proposed to make machine learning robust. The most direct is to
replace the standard loss function with a robust loss function, such as the Huber loss or
the Tukey biweight loss. This approach is equivalent to using an M-estimator in the
classical statistics framework. The benefit is that the model is less sensitive to
mislabeled or noisy examples. The cost is that the model is less efficient under clean data.

Another approach is outlier detection. Methods such as the isolation forest, local outlier
factor, and autoencoder-based detection identify observations that deviate significantly
from the bulk of the data. These observations can then be removed or down-weighted before
training. The problem is that outlier detection is itself an estimation problem, and
standard outlier detection methods (such as those based on the mean and covariance) are
themselves sensitive to outliers. Robust outlier detection requires robust estimators, which
introduces a layer of complexity.

A third approach is adversarial training, which was developed in the context of adversarial
examples but is applicable to any form of data contamination. The idea is to train the model
on perturbed data, so that it learns to be invariant to small changes in the input. This
approach is related to robust statistics in the sense that it improves the model's
performance under data contamination. But it is different in that the contamination is
intentional (designed to fool the model) rather than accidental (arising from measurement
error or data collection noise).

## What robust statistics does not say

Robust statistics does not say that outliers should always be ignored. Outliers can contain
valuable information. A measurement that deviates from the expected range may indicate a new
phenomenon, a measurement error, or a genuine extreme event. The role of the robust
estimator is not to discard outliers automatically. It is to produce estimates that are not
disproportionately affected by them, while preserving the ability to identify and
investigate them separately.

Robust statistics does not say that the mean and variance are useless. They are optimal
under Gaussianity and remain the most efficient estimators when the data conform to the
assumed model. The question is whether the data conform to the model. If they do, the mean
and variance are the right choice. If they do not, robust estimators are preferable.

Robust statistics does not say that robustness can be achieved without cost. Every robust
estimator sacrifices something: efficiency, computational simplicity, or interpretability.
The trade-offs are explicit and quantifiable. The choice of estimator depends on the
specific application and the expected characteristics of the data.

## What remains uncertain

The relationship between robust statistics and machine learning is unresolved. Classical
robust estimators are designed for the asymptotic regime, where the sample size is large and
the contamination fraction is fixed. Machine learning models are often trained on datasets
that are large but not infinite, with contamination that may be structured rather than
random. A mislabeled example in a classification dataset is not a random perturbation. It is
a systematic error that may cluster in specific regions of the feature space. Classical
robust estimators do not account for this structure.

The choice of tuning parameters in robust estimators is also unresolved. The Huber loss
requires a threshold that determines the transition between quadratic and linear behavior.
The trimmed mean requires a trimming fraction. The MAD requires a scaling constant. These
parameters are often chosen heuristically, without a principled method for selecting them
based on the data. Robust estimators are less sensitive to these choices than non-robust
estimators, but the choices are not irrelevant.

Whether robust estimators can be integrated into deep learning architectures without
significant computational overhead remains an open question. IRLS-based M-estimators for
regression are computationally feasible for small to moderate datasets. For large-scale deep
learning, the iterative reweighting process is expensive. Alternative approaches such as
robust batch normalization and robust loss functions implemented in computational graphs
offer partial solutions, but they do not match the theoretical guarantees of classical
robust estimators.

The broader question is whether robustness is a property that can be designed into a system
or whether it must emerge from the interaction of simple robust components. Classical robust
statistics focuses on designing robust estimators. Complex systems — such as deep neural
networks or distributed data collection — may achieve robustness through redundancy and
diversity rather than through the robustness of individual components. Understanding the
relationship between these two approaches is an open area of research.

## Primary sources

- Hampel, F. R. (1974). "The Influence Curve and Its Role in Robust Estimation." _Journal of
  the American Statistical Association_ 69(346), 383-393. Introduction of M-estimators and
  the influence function as a tool for analyzing estimator robustness.
- Huber, P. J. (1964). "Robust Estimation of a Location Parameter." _Annals of Mathematical
  Statistics_ 35(1), 73-101. The Huber loss function and the derivation of the Huber
  estimator as a compromise between the mean and the median.
- Rousseeuw, P. J. (1984). "Least Squares Medianization." _Journal of the American
  Statistical Association_ 79(386), 618-623. The least trimmed squares estimator and its
  application to robust regression.
- Tukey, J. W. (1960). "A Survey of Simulations." In _Proceedings of the Symposium on
  Computations Using Random Numbers_. The Tukey biweight function and the concept of bounded
  influence functions.
- Iglewicz, B., & Hoaglin, D. C. (1993). _The Median Absolute Deviation: A Scale Estimator_.
  In "Encyclopedia of Statistical Sciences" (Vol. 5). The MAD as a robust scale estimator
  and its relationship to the standard deviation under Gaussianity.
