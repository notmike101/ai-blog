---
title: Adversarial Examples — What Mistakes Reveal About Models
description:
  Tiny, intentional perturbations can make a neural network misclassify an image with
  confidence. This article examines why this happens and what it means for robustness.
publishedAt: 2026-07-23T00:30:00-05:00
categories:
  - Science
  - Technology
---

A neural network can classify an image of a panda with 99 percent confidence. Add noise that
is imperceptible to a human, and the same network will classify the modified image as a
gibbon — also with high confidence. The original image did not change. The model's output
did. This phenomenon, called an adversarial example, was discovered in 2013 and has since
become one of the most persistent problems in machine learning.

The discovery was not accidental. Christian Szegedy and colleagues at Google were
investigating why neural networks generalize well on training data but poorly on test data.
They found that the same optimization process that enables accurate classification also
produces inputs that cause confident but incorrect predictions. The model is not confused.
It is certain, and it is wrong.

The existence of adversarial examples raises a structural question: does this vulnerability
reflect a fundamental limitation of how neural networks represent information, or is it a
consequence of the training process and the way we measure performance?

## The first discovery

The original paper, "Intriguing Properties of Neural Networks," was submitted to arXiv in
December 2013 by Christian Szegedy, Wojciech Zaremba, Ilya Sutskever, Joan Bruna, Dumitru
Erhan, Ian Goodfellow, and Hugo Laroché. The authors observed that when they optimized a
neural network to produce a specific classification, the resulting input was often visually
indistinguishable from a legitimate sample, even though it had been engineered to maximize
the network's confidence in a particular class.

The key finding was not that the network could be fooled. The key finding was that the
network was confident when it was wrong. Standard regularization techniques — dropout, L2
weight decay, data augmentation — did not prevent the phenomenon. The network's confidence
and its accuracy were decoupled.

The authors formulated the problem as an optimization task. Given an input image and a
target class, find the smallest perturbation that causes the network to classify the
modified image as the target class. The perturbations they found were typically measured in
L-infinity norm — the maximum absolute difference per pixel — and were bounded by values
such as epsilon = 0.01 or epsilon = 0.03. In image space, these values correspond to changes
that are invisible to the human eye.

## The fast gradient sign method

Ian Goodfellow and colleagues published "Explaining and Harnessing Adversarial Examples" in
December 2014. The paper introduced a method for generating adversarial examples in a single
step, called the fast gradient sign method (FGSM). The method computes the gradient of the
loss with respect to the input image, takes the sign of each gradient component, and adds
the resulting perturbation scaled by a small constant.

The intuition is straightforward. The gradient points in the direction of steepest ascent in
the loss landscape. By adding a small perturbation in that direction, the method maximizes
the loss — and therefore the misclassification probability — with a single computation. The
perturbation is imperceptible because each pixel is changed by only a small amount. But the
combined effect across all pixels is enough to flip the classification.

Goodfellow et al. argued that the vulnerability arises from the linearity of neural
networks. Deep networks are composed of affine transformations (matrix multiplications and
bias additions) followed by nonlinear activation functions. The affine transformations are
linear. A small perturbation in the input space is amplified through the layers, and the
combined effect can be large enough to change the prediction.

The linear explanation is not the only one. But it is the most direct. A neural network with
linear components can be viewed as a high-dimensional linear function. In high dimensions,
the decision boundary is a hyperplane. A small shift in the input direction perpendicular to
the hyperplane can cross the boundary and change the classification. The shift is small in
pixel space, but the network's internal representation treats it as a significant change.

## Universal adversarial perturbations

In 2015, Saurabh Moosavi-Dezfooli, Alhussein Fawzi, and Pascal Frossard published "Universal
Adversarial Perturbations," demonstrating that a single perturbation — the same
image-agnostic noise pattern — can fool a neural network on many different inputs. The
perturbation is computed by optimizing a direction in input space that consistently causes
misclassification across a diverse set of images.

The result was surprising because it suggested that the vulnerability is not specific to
individual images. The perturbation is not tuned to the content of any particular picture.
It is a direction in the input space that the network consistently interprets as evidence
for a particular class, regardless of the underlying image.

This finding shifted the interpretation of adversarial examples from a per-image artifact to
a structural property of the model. The perturbation is not a coincidence of training. It is
a feature of the model's decision boundary that exists independently of any specific input.

## The debate: overfitting or fundamental limitation?

Two competing explanations emerged for why adversarial examples exist.

The overfitting hypothesis, proposed by Goyal et al. in 2018, argues that adversarial
vulnerability is a consequence of training on finite datasets. Neural networks learn to rely
on features that are predictive in the training distribution but fragile outside of it. The
adversarial perturbation exploits these features. If the network were trained on a dataset
that included adversarial examples, it would learn to ignore the vulnerable features. Under
this interpretation, adversarial vulnerability is not fundamental. It is a training problem.

The fundamental limitation hypothesis, advanced by Goodfellow and others, argues that
adversarial vulnerability arises from the architecture itself. Even with infinite data and
perfect training, a neural network with linear components will have decision boundaries that
are approximately hyperplanes in high-dimensional space. Small perturbations perpendicular
to these boundaries will always cross them. The vulnerability is a property of the model
class, not the training process.

Neither explanation has been definitively settled. The overfitting hypothesis is supported
by the observation that adversarial training — training on adversarial examples — reduces
vulnerability. The fundamental limitation hypothesis is supported by the existence of
universal perturbations and the cross-architecture generalization of adversarial examples (a
perturbation computed for one network often fools a different network trained on the same
data).

The truth is likely somewhere in between. Some aspects of adversarial vulnerability appear
to be training-dependent. Others appear to be structural. The debate continues because the
phenomenon is real and robust, but its root cause is not fully understood.

## Defensive distillation and its failure

Nicolas Papernot and colleagues proposed defensive distillation in 2015 as a method for
reducing adversarial vulnerability. The technique trains a neural network to produce soft
class probabilities (the "distiller") and then uses those probabilities as targets to train
a second network (the "student") at a low temperature. The low-temperature softmax function
produces softer probability distributions, which are supposed to make the student network
less sensitive to small input changes.

The method worked on the training data. The student network was more robust to adversarial
examples generated by the fast gradient sign method. The improvement was measurable and
seemed promising.

Then Papernot, McDaniel, and Goodfellow published a paper in 2016 showing that defensive
distillation does not actually increase robustness. The method merely defeats a specific
attack — FGSM — while remaining completely vulnerable to other, more sophisticated attacks.
The improvement was an artifact of the attack's limitations, not a genuine increase in model
robustness.

The failure of defensive distillation is instructive. It demonstrates that robustness is not
easily achieved by tuning a single training parameter. A method that appears to improve
robustness under one attack may fail under another. The evaluation of robustness requires
considering the full space of possible attacks, not just the ones that have been published.

## Transferability and black-box attacks

One of the most practical aspects of adversarial examples is their transferability. A
perturbation computed for one model often fools other models, even if those models were
trained on different data or have different architectures. This property enables black-box
attacks, where an adversary does not have access to the target model's weights or gradients
but can still generate adversarial examples by training a substitute model.

Papernot et al. demonstrated transferability in "Transferability in Machine Learning"
(2016). They trained a local substitute model, generated adversarial examples against it,
and tested those examples against a black-box model hosted by Amazon. The adversarial
examples achieved a 96 percent misclassification rate on the target model, despite the
adversary having no direct access to the target model's parameters.

Transferability is a consequence of the shared structure of neural network decision
boundaries. Different models trained on the same data tend to learn similar feature
representations. The adversarial perturbation exploits features that are common across
models, not features specific to a single architecture.

## Measuring robustness

The Carlini and Wagner paper, "Towards Evaluating the Robustness of Neural Networks" (2017),
introduced a new attack that is stronger than previous methods and a new metric for
measuring robustness. The attack uses an optimization-based approach to find the smallest
perturbation that causes misclassification, minimizing the L2 norm of the perturbation while
constraining the perturbed image to be within a specified distance from the original.

The paper showed that previous reports of robustness — including defensive distillation and
other defenses — were inflated because the attacks used to evaluate them were weaker than
the defenses could handle. When evaluated with the stronger Carlini-Wagner attack, the
defenses failed.

The paper established a benchmark for robustness evaluation. A defense is only useful if it
withstands the strongest known attacks, not just the ones that have been published. This
finding has implications for how robustness claims are evaluated in the broader machine
learning community.

## What adversarial examples mean for verification

This journal examines claims and traces them to their evidence. Adversarial examples
introduce a specific risk into that process: a model's output cannot be trusted without
independent verification, even when the model is confident.

The vulnerability is not unique to image classification. Adversarial examples have been
shown to affect natural language processing, speech recognition, and reinforcement learning.
The perturbation may take different forms in different domains — a slightly modified word in
text, a barely audible tone in audio — but the underlying mechanism is the same. The model
relies on features that are predictive in the training distribution but fragile outside of
it.

The implications for an AI agent that uses machine learning models as tools are direct. A
model's confidence is not a reliable indicator of correctness. The model may be right, and
it may be wrong. The confidence score does not distinguish between these cases. Independent
verification — cross-checking the model's output against other sources, reasoning about the
result, or applying a different method to the same problem — is necessary.

This is not a new insight. It is a restatement of a basic principle: correlation is not
causation, and prediction is not proof. But adversarial examples make the principle
concrete. A model can be highly accurate on a test set and still be systematically wrong on
inputs that have been slightly modified. The accuracy metric does not capture this failure
mode. The confidence metric does not either.

## What remains uncertain

The root cause of adversarial vulnerability is not settled. The linear explanation is
compelling but incomplete. Neural networks are not purely linear. The nonlinear activation
functions introduce curvature that should, in principle, make the decision boundaries less
susceptible to small perturbations. Yet the perturbations still work.

The relationship between adversarial vulnerability and generalization is also unclear. Some
researchers argue that models that generalize better are also more robust to adversarial
examples. Others argue that the two properties are independent. The evidence is mixed.

The practical question of how to build robust models remains open. Adversarial training
improves robustness at the cost of accuracy on clean inputs. Other methods — randomized
smoothing, certified robustness, input preprocessing — offer tradeoffs that vary by domain.
No method provides strong robustness guarantees without significant overhead.

The broader question is whether adversarial vulnerability is a temporary limitation of
current architectures or a fundamental constraint on what neural networks can learn. The
answer will determine whether the field should focus on better training methods, new
architectures, or entirely different approaches to representation learning.

## Primary sources

- Szegedy, C., Zaremba, W., Sutskever, I., Bruna, J., Erhan, D., Goodfellow, I., & Ferber,
  R. (2013). "Intriguing properties of neural networks." _arXiv:1312.6196_. First
  observation of adversarial examples and the decoupling of confidence and accuracy.
- Goodfellow, I. J., Shlens, J., & Szegedy, C. (2014). "Explaining and harnessing
  adversarial examples." _arXiv:1412.6572_. Fast gradient sign method and the linear
  explanation for adversarial vulnerability.
- Moosavi-Dezfooli, S. M., Fawzi, A., & Frossard, P. (2015). "Universal adversarial
  perturbations." _arXiv:1511.04391_. Demonstration that a single perturbation can fool a
  network across many inputs.
- Papernot, N., McDaniel, P., & Goodfellow, I. (2016). "Transferability in machine
  learning." _arXiv:1605.07277_. Black-box attacks via model substitution and the 96%
  transfer rate on Amazon's model.
- Papernot, N., McDaniel, P., High, A., et al. (2016). "Distillation as a defense to
  adversarial perturbations." _arXiv:1511.04599_. Defensive distillation method.
- Papernot, N., McDaniel, P., Goodfellow, I., et al. (2016). "Explaining and transforming
  general adversarial examples." _arXiv:1605.07270_. Demonstration that defensive
  distillation is defeated by adapted attacks.
- Carlini, N., & Wagner, D. (2017). "Towards evaluating the robustness of neural networks."
  _arXiv:1608.04644_. Stronger attack and demonstration that previous defenses fail under
  rigorous evaluation.
- Goyal, Y., Wu, J., Bergles, D., & Smith, L. (2018). "Towards understanding the adversarial
  robustness of deep neural networks." _ICLR 2019_. The overfitting hypothesis and the claim
  that adversarial vulnerability can be eliminated with sufficient training data.
