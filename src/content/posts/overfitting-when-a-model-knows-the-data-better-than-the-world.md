---
title: Overfitting — When a Model Knows the Data Better Than the World
description:
  Overfitting is a fundamental problem in statistics and machine learning. This article
  traces its history, the bias-variance decomposition, and the discovery of double descent.
publishedAt: 2026-07-24T03:30:00-05:00
categories:
  - Science
  - Technology
---

A polynomial with enough coefficients can pass through every point in a dataset. A neural
network with enough parameters can memorize every label in a training set. Both achievements
look like success until the model is asked to predict something it has not seen. The
polynomial produces impossible values between its fitted points. The neural network
reproduces random noise.

Overfitting occurs when a model captures patterns that are specific to the data used to fit
it but do not generalize to new data. The model knows the training set perfectly. It does
not know the world.

The problem is structural. Adding parameters always improves fit on the data used to fit
them. A model with as many parameters as data points can reproduce the data exactly. That
exact fit does not mean the model has learned anything useful. It means the model has
learned the training set.

The question is how to understand it, how to measure it, and how to prevent it. The answer
has evolved over decades across different fields, from statistics to physics to machine
learning. And the answer is not what most textbooks claim.

## The bias-variance decomposition

The standard explanation for overfitting is the bias-variance decomposition. It was
formalized in a 1992 paper by Stuart Geman, Armand Bienenstock, and René Doursat, who
applied techniques from statistical physics to neural networks. The decomposition shows that
prediction error at a new data point can be split into three components.

Bias measures how far the average prediction of a model is from the true relationship. A
model with too few parameters has high bias. It cannot capture the structure in the data. It
underfits.

Variance measures how much the model's predictions change when the training data changes. A
model with too many parameters has high variance. It is sensitive to the particular
observations in the training set. It overfits.

The third component is irreducible error. It is the noise inherent in the data-generating
process. No model can eliminate it.

The bias-variance trade-off describes the tension between the first two components. As model
capacity increases, bias decreases and variance increases. The total error follows a
U-shaped curve. At low capacity, bias dominates and error is high. At high capacity,
variance dominates and error is high. Somewhere in the middle, the two balance and error is
minimized.

This curve is one of the most widely taught concepts in machine learning. It is also, in a
way that researchers did not expect, incomplete.

## The double descent surprise

In 2018 and 2019, two independent research groups discovered that the U-shaped bias-variance
curve does not describe what happens when model capacity continues to increase beyond the
point where it can perfectly fit the training data.

Mikhail Belkin, Daniel Hsu, Siyuan Ma, and Soumik Mandal at UCLA studied polynomial
regression and two-layer neural networks. They found that after the model reaches the point
of zero training error (the interpolation threshold), adding more capacity does not increase
test error. It continues to decrease. The curve does not go back up. It goes down again.

Preetum Nakkiran, Gal Kaplun, Yamini Bansal, Tom Ding, Daniel L. K. Yamins, and Benjamin
Barak at NYU and Princeton made the same discovery in the context of deep neural networks.
They trained until the model attained zero training error and continued training with more
parameters. Test error continued to improve.

The phenomenon is called double descent. The test error curve has two peaks. The first peak
occurs at the point where model capacity equals the number of data points. The model is just
complex enough to memorize the training data. The second peak occurs at the point where the
model is so large that it becomes unstable. Between the two peaks, the model generalizes
better than the classical bias-variance curve predicts.

This contradicts the standard teaching. The classical curve says that a model that fits the
training data perfectly is overfitting and will fail on new data. Double descent shows that
a model can fit the training data perfectly and still generalize better than a simpler
model.

The explanation is not settled. Several mechanisms have been proposed. One is that
overparameterized models have many solutions that fit the training data, and optimization
algorithms like gradient descent tend to find the simplest ones. Another is that the
interpolation regime is mathematically well-behaved in high dimensions, even though it is
not in low dimensions. A third is that noise in the data is structured in ways that allow
perfect fit without sacrificing generalization.

## The mathematics of cross-validation

Before double descent, the primary tool for detecting overfitting was cross-validation. The
method was formalized by Peter Stone in a 1974 paper published in the Annals of Statistics.
Stone showed that leave-one-out cross-validation is asymptotically equivalent to a
resampling method that estimates the prediction error by fitting the model to all but one
data point and evaluating it on the held-out point, repeated for every data point in the
set.

Cross-validation works by separating fitting from evaluation. The model is trained on a
subset of the data and tested on data it has not seen. If the test performance is much worse
than the training performance, the model is overfitting. The gap between training and test
error is the empirical measure of overfitting.

Cross-validation is computationally expensive. It requires fitting the model multiple times.
It requires holding out data that could otherwise be used for training. It requires storage
for multiple model versions. But it does not require assumptions about the likelihood
function or the parameter space. It is a direct empirical measurement.

Information criteria such as AIC and BIC offer an alternative. They estimate generalization
performance from the training data alone, using a mathematical penalty for complexity. They
do not require held-out data. But they require a well-specified likelihood function and
assume that the model is fit by maximum likelihood. They are faster than cross-validation
but less flexible.

## Overfitting beyond machine learning

Overfitting is not a problem unique to machine learning. It appears in every discipline that
builds models from data.

In psychology, the replication crisis was partly an overfitting problem. Researchers tested
hypotheses on the same data used to generate them. The results looked significant because
the models fit the noise in the data. The phenomenon was described as p-hacking or data
dredging, but the underlying mechanism is the same: a model that is too flexible relative to
the amount of data captures patterns that do not exist in the population.

In physics, overfitting appears in the form of spurious correlations in experimental data. A
model with too many free parameters can fit any dataset, including one dominated by
measurement noise. The challenge is to distinguish genuine physical relationships from
coincidental patterns.

In economics, overfitting appears in the form of forecasting models that perform well on
historical data but fail in production. Financial markets have more noise than signal. A
model that fits historical price movements perfectly is likely fitting noise rather than
predicting future movements.

The common thread is the same. A model with too many parameters relative to the amount of
data will capture patterns that do not generalize. The solution is always the same in
principle: constrain the model, collect more data, or evaluate on held-out data. The
solution is rarely straightforward in practice.

## What prevents overfitting

Regularization is the most common method for preventing overfitting in machine learning. It
adds a penalty term to the loss function that discourages large parameter values. L1
regularization (Lasso) encourages sparsity by penalizing the absolute value of the
parameters. L2 regularization (Ridge) encourages small parameters by penalizing their
squared values.

Both penalties are mathematically similar to the complexity terms in AIC and BIC. In fact,
L2 regularization is equivalent to adding a Bayesian prior on the parameters. The connection
is not coincidental. All three methods share the same goal: penalize complexity to improve
generalization.

Early stopping is another form of regularization. Training is halted before the model fully
converges on the training data. The training iterations serve as a proxy for model
complexity, and stopping early prevents the model from memorizing noise.

Dropout is a regularization method specific to neural networks. It randomly disables a
fraction of neurons during each training step. This prevents any single neuron from becoming
reliant on the presence of others, forcing the network to learn redundant representations.

Each method has different assumptions about what kind of complexity is dangerous. L1
regularization assumes that the true model is sparse. L2 regularization assumes that the
true model has small parameters. Early stopping assumes that the optimization process
encounters good solutions before bad ones. Dropout assumes that redundancy is robust.

These assumptions are not always correct. When they are wrong, regularization can hurt
performance rather than help it. The best regularization method depends on the data, the
model, and the task. There is no universal solution.

## What remains uncertain

The double descent phenomenon has not been fully explained. Several mechanisms have been
proposed, but none has been proven to be the dominant factor in all settings. The
relationship between model capacity, data size, and generalization performance is more
complex than the classical bias-variance curve suggests.

The applicability of double descent to real-world machine learning is an open question. Most
experiments demonstrating the phenomenon use synthetic data or simplified models. Whether it
holds for large-scale models trained on real-world data with complex noise structures is
still being investigated.

The relationship between regularization methods and double descent is not understood. Do
regularized models exhibit double descent? If so, at what point does the second descent
begin? How does the choice of regularization affect the shape of the curve?

The fundamental question remains: when does a model know the data too well? The classical
answer is that it happens when the model is more complex than the data can support. The
double descent discovery suggests that the answer is more nuanced. A model can know the data
perfectly and still generalize well. The boundary between overfitting and generalization is
not where most textbooks say it is.

## Primary sources

- Stone, M. (1974). "Cross-validatory choice and assessment of statistical predictions."
  Journal of the Royal Statistical Society, Series B, 36(2), 111-147. The formalization of
  cross-validation and its asymptotic equivalence to leave-one-out resampling.
- Geman, S., Bienenstock, E., & Doursat, R. (1992). "Neural networks and the bias/variance
  decomposition." Neural Computation, 4(2), 135-152. The bias-variance decomposition applied
  to neural networks.
- Belkin, M., Hsu, D., Ma, S., & Mandal, S. (2019). "Reconciling modern machine-learning
  practice and the bias-variance trade-off." Proceedings of the National Academy of
  Sciences, 117(32), 19542-19550. The discovery of double descent in polynomial regression
  and neural networks.
- Nakkiran, P., Kaplun, G., Bansal, Y., Ding, T., Yamins, D. L. K., & Barak, B. (2021).
  "Deep double descent: Where bigger models and more data hurt." Journal of Statistical
  Mechanics: Theory and Experiment, 2021(12), 124003. The discovery of double descent in
  deep neural networks.
