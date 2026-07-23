---
title: Information Criteria — Why Simpler Models Often Generalize Better
description:
  AIC, BIC, and the Minimum Description Length principle provide mathematical frameworks for
  Occam's Razor in model selection and implications for AI.
publishedAt: 2026-07-23T02:30:00-05:00
categories:
  - Science
  - Technology
---

A model that fits existing data perfectly is not necessarily the best model. It may be
memorizing noise instead of learning signal. It may capture patterns that exist in the
training data but not in the world. A more complex model can always fit more data than a
simpler one. But fitting data is not the same as predicting new data.

This distinction is central to statistics, machine learning, and any discipline that builds
models from observations. The problem is how to quantify it. How do you decide when a model
is complex enough without being too complex? How do you measure the cost of adding another
parameter?

The answer, developed over several decades by different researchers working from different
assumptions, converges on a simple idea: add a penalty for complexity to the measure of fit.
The resulting formulas are called information criteria. They provide mathematical frameworks
for a principle that predates statistics by millennia: Occam's Razor.

## The problem of overfitting

Overfitting occurs when a model captures patterns that are specific to the training data but
do not generalize to new data. A linear regression with one predictor variable may underfit
a curved relationship. A polynomial regression with ten coefficients may fit the training
data almost perfectly while producing nonsensical predictions for any new observation.

The tension is structural. Adding parameters always improves fit on the data used to fit
them. A model with as many parameters as data points can reproduce the data exactly. That
improvement in fit does not mean the model has learned anything useful. It means the model
has learned the training set.

The solution is to evaluate models on something other than fit alone. Cross-validation
splits the data into training and test sets. The model is fit on the training set and
evaluated on the test set. The model with the best test performance is selected. This
approach works well in practice. But it requires extra data, extra computation, and extra
storage.

Information criteria offer an alternative. They estimate generalization performance from the
training data alone, using a mathematical correction for model complexity. No extra data is
needed. The correction is computed directly from the likelihood and the number of
parameters.

## Akaike Information Criterion

The Akaike Information Criterion was introduced by the Japanese statistician Hirotugu Akaike
in 1974. His paper, "Information Theory as an Extension of the Maximum Likelihood
Principle," was published in the proceedings of the Second International Symposium on
Information Theory. Akaike derived AIC from information theory, specifically from the
Kullback-Leibler divergence.

The Kullback-Leibler divergence measures the information lost when one probability
distribution is used to approximate another. Akaike showed that the maximum-likelihood
estimate of a model systematically underestimates this divergence because the model was fit
to the same data used to estimate the parameters. The overfitting bias can be estimated
analytically. It equals the number of parameters in the model.

The AIC formula follows directly:

AIC = 2k - 2 ln(L)

where k is the number of parameters and L is the maximum likelihood of the model. The first
term (2k) is the penalty for complexity. The second term (-2 ln(L)) measures fit. Models
with higher likelihood have better fit. AIC estimates the relative prediction error. Lower
AIC values indicate better models.

The factor of 2 in the penalty comes from Akaike's derivation. He proved that the expected
Kullback-Leibler divergence between the true model and the estimated model equals the
negative log-likelihood plus the number of parameters. The factor of 2 arises from the
specific mathematical form of the likelihood function.

AIC is designed for prediction. It estimates which model will produce the most accurate
predictions on new data. It does not claim that any of the candidate models is the true
data-generating process. Akaike's framework assumes that all models are wrong. The goal is
to find the model that loses the least information.

## Bayesian Information Criterion

The Bayesian Information Criterion was introduced by the statistician Gideon Schwarz
in 1978. His paper, "Estimating the Dimension of a Model," was published in the Annals of
Statistics. Schwarz derived BIC from a Bayesian perspective, focusing on model selection
consistency.

The BIC formula is:

BIC = k ln(n) - 2 ln(L)

where n is the sample size, k is the number of parameters, and L is the maximum likelihood.
The penalty term (k ln(n)) grows with the sample size. For small samples, BIC and AIC differ
modestly. For large samples, BIC penalizes complexity much more heavily than AIC.

The difference in penalty structure reflects a difference in goals. AIC aims to find the
model with the best predictive accuracy. BIC aims to find the true model, assuming it exists
among the candidates. This difference has important practical consequences.

AIC is asymptotically efficient. As the sample size grows, the model selected by AIC
converges to the model with the lowest prediction error, even if that model has infinitely
many parameters. BIC is consistent. As the sample size grows, the probability that BIC
selects the true model converges to 1, provided the true model is among the candidates.

These properties are not contradictory. They reflect different assumptions about the
data-generating process. AIC assumes the true model is not among the candidates and focuses
on prediction. BIC assumes the true model may be among the candidates and focuses on
identification.

## Minimum Description Length

The Minimum Description Length principle was developed by the Finnish computer scientist
Jorma Rissanen in 1978. His work appeared in multiple papers and was later compiled into a
book. MDL approaches model selection from the perspective of data compression.

The central idea is simple. The best model is the one that allows the most compact
description of the data. Describing the data requires two parts: describing the model itself
(the encoding scheme), and describing the data given the model (the residuals or errors). A
model that is too simple fails to capture the structure in the data, so the second part is
long. A model that is too complex encodes the noise, so the first part is long. The optimal
model balances these two costs.

MDL is closely related to BIC. For large samples and regular models, the BIC formula is
formally identical to the MDL criterion. Both penalize model complexity using k ln(n). The
connection is not coincidental. Both frameworks arrive at the same mathematical form from
different starting points: BIC from Bayesian model probabilities, MDL from compression
theory.

MDL has a broader scope than AIC or BIC. It applies to any encoding scheme, not just
maximum-likelihood estimation. It can compare models from different families, including
non-nested models. It does not require the models to be fit to the same data, as long as the
encoding is consistent.

## The penalty problem

The central question in model selection is how to penalize complexity. AIC uses a constant
penalty of 2 per parameter. BIC uses a penalty of ln(n) per parameter, which grows with
sample size. MDL uses a penalty derived from the description length of the model itself.

These penalties are not arbitrary. They follow from the mathematical derivations of each
criterion. But they produce different recommendations, sometimes dramatically different
ones.

Consider a dataset with 1,000 observations. ln(1000) is approximately 6.9. BIC penalizes
each parameter with 6.9 units. AIC penalizes each parameter with 2 units. The difference is
substantial. A model with 10 parameters receives a penalty of 20 under AIC and 69 under BIC.
That difference can change the selected model entirely.

The choice between AIC and BIC is not a technical question. It is a philosophical one. AIC
assumes the goal is prediction and accepts that the true model may not be among the
candidates. BIC assumes the goal is identification and accepts that the selected model may
be too simple for good prediction if the true model is complex.

## What these criteria do not do

Information criteria are tools for comparing a set of candidate models. They do not evaluate
models in isolation. A low AIC value for one model does not mean the model is good. It means
the model is better than the others in the comparison set. If all candidates are poor, AIC
will select the least poor one.

Information criteria do not guarantee that the selected model will generalize well. They
estimate generalization performance on average. For any single dataset, the selected model
may overfit, underfit, or hit the sweet spot. The criteria improve with larger sample sizes
and larger model sets, but they are not infallible.

Information criteria do not address all aspects of model quality. They do not evaluate
whether the model assumptions are reasonable. They do not check for influential
observations, multicollinearity, or structural violations. A model with the lowest AIC can
still be useless if its assumptions are fundamentally wrong.

## Information criteria in machine learning

The machine learning community has developed its own tools for model selection:
cross-validation, regularization, and early stopping. These tools share the same goal as
information criteria: prevent overfitting by balancing fit and complexity.

Cross-validation is the most direct alternative. It estimates generalization performance by
evaluating the model on held-out data. It does not require a penalty formula. It does not
assume a specific likelihood function. It is computationally more expensive but more
flexible.

Regularization adds a penalty term directly to the loss function during training. L1
regularization (Lasso) encourages sparsity. L2 regularization (Ridge) encourages small
coefficients. These penalties are mathematically similar to the complexity terms in AIC and
BIC. In fact, L2 regularization is equivalent to adding a Bayesian prior on the parameters,
which connects it to the BIC framework.

Early stopping halts training before the model fully converges on the training data. It is a
form of implicit complexity control. The training iterations serve as a proxy for model
complexity, and stopping early prevents the model from memorizing noise.

Information criteria remain useful in machine learning for quick model comparison when
computation is limited or when the likelihood is well-specified. They are less common for
deep learning, where the number of parameters often exceeds the number of data points and
the likelihood surface is highly non-convex.

## What remains uncertain

The relationship between AIC, BIC, and cross-validation is not fully understood. AIC is
asymptotically equivalent to leave-one-out cross-validation under certain conditions. BIC is
asymptotically equivalent to Bayesian model averaging under certain conditions. But these
equivalences depend on assumptions that may not hold in practice.

The choice between AIC and BIC for finite samples is still debated. Some researchers argue
that AIC is more appropriate for prediction tasks, while BIC is more appropriate for
scientific inference. Others have proposed modified criteria, such as AICc (a corrected
version for small samples) and BICc, that attempt to improve finite-sample performance.

The applicability of these criteria to modern machine learning is an open question. Deep
learning models often have more parameters than data points. The likelihood is often
intractable. The models are often non-differentiable or non-convex. AIC and BIC were
designed for classical statistical models with well-defined likelihoods and finite parameter
spaces. Whether they can be extended to modern settings is an active area of research.

The fundamental question remains: how do you quantify the cost of complexity? AIC answers
with a constant. BIC answers with a sample-size-dependent penalty. MDL answers with a
description length. Each answer reflects a different philosophy about what model selection
is for. None of them is universally correct. They are tools for thinking about the trade-off
between fit and parsimony. The trade-off is real. The criteria make it measurable.

## Primary sources

- Akaike, Hirotugu. "Information theory as an extension of the maximum likelihood
  principle." Proceedings of the Second International Symposium on Information Theory, 1974.
  The original derivation of AIC from Kullback-Leibler divergence.
- Schwarz, Gideon. "Estimating the dimension of a model." Annals of Statistics, 1978, 6(2),
  461-464. The original derivation of BIC from a Bayesian perspective.
- Rissanen, Jorma. "Modeling by shortest data description." Automatica, 1978, 14(1), 99-111.
  The introduction of the Minimum Description Length principle.
- Hurvich, C. M., & Tsai, C. L. "Regression and time series model selection in small
  samples." Biometrika, 1989, 76(2), 297-307. The derivation of AICc for small-sample
  correction.
