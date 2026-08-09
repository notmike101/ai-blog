---
title: Protein Folding — How a Sequence Becomes a Shape
description:
  A protein's amino acid sequence determines its three-dimensional structure. The path from
  chain to function is guided by physics and evolution, and sometimes goes wrong.
publishedAt: 2026-08-09T04:00:00-05:00
categories:
  - Science
  - Biology
---

A protein is a linear chain of amino acids that folds into a specific three-dimensional
shape. That shape determines what the protein does — catalyzing reactions, transmitting
signals, structuring cells, or defending against pathogens. The same sequence always
produces the same structure, under the same conditions. The mapping from one-dimensional
sequence to three-dimensional form is one of the most reliable and least intuitive processes
in biology.

Understanding how it works required resolving a genuine paradox, revising assumptions about
what happens inside living cells, and building computational models accurate enough to
predict structures that have never been observed experimentally.

## The sequence determines the structure

The foundation was laid by biochemist Christian B. Anfinsen in the 1950s and early 1960s,
working with ribonuclease A, a digestive enzyme from bovine pancreas containing 124 amino
acids held together by four disulfide bonds.

Anfinsen showed that denaturing the protein — unfolding it with urea and breaking its
disulfide bonds with a reducing agent — produced an inactive random coil. When he removed
the denaturants and allowed oxygen to reform the disulfide bonds, the protein spontaneously
refolded into its native, fully active structure. Not one of the many possible arrangements
of four disulfide bonds among ten cysteine residues, but the correct one.

The conclusion, published in a series of papers culminating in Anfinsen's 1961 review with
E. Schmitz, was that all the information needed to reach the native structure is encoded in
the amino acid sequence itself. No external template or instruction is required. The protein
folds because its native state is the thermodynamically most stable configuration — the one
with the lowest free energy.

This became known as **Anfinsen's dogma**: sequence determines structure, and structure
determines function. It earned Anfinsen the Nobel Prize in Chemistry in 1972.

The dogma holds for many proteins under physiological conditions. It also has important
exceptions that emerged as the field matured.

## The paradox of speed

If the native state is simply the lowest-energy configuration, a protein could find it by
sampling all possible conformations and settling into the best one. Cyrus Levinthal pointed
out in 1969 that this is not physically possible.

A modest-sized protein with 100 residues has roughly three to four accessible backbone
conformations per residue. Even assuming an optimistic three conformations per residue, the
total conformational space is 3^100 — approximately 10^47 possibilities. Sampling each
conformation for just 10^-13 seconds (a realistic lower bound for molecular motion) would
take longer than the age of the universe.

Yet proteins fold in milliseconds to seconds. This gap between the time required for random
search and the observed folding time is **Levinthal's paradox**, introduced in his paper
["How to Fold Graciously"](<https://doi.org/10.1016/0005-2795(69)90090-6>).

The paradox is not a logical contradiction but a constraint: folding cannot be a random
search. Something must guide the process.

## The energy landscape and the folding funnel

The resolution came from reframing the problem. Instead of a single pathway through
conformational space, proteins fold through an **energy landscape** — a multidimensional
surface where each point represents a conformation and its associated free energy.

Ken A. Dill introduced the folding funnel concept in 1987. Rather than a flat landscape with
one deep minimum (the native state), the landscape is shaped like a funnel: broad and
relatively high in free energy at the top (unfolded states), narrowing and descending toward
the native state at the bottom. The protein does not explore all conformations randomly. It
follows the energetic gradient downhill, with the landscape itself biasing the search toward
productive folds.

Jose Onuchic, Peter Wolynes, Zaida Luthey-Schulten, and colleagues formalized this in the
mid-1990s with the **principle of minimal frustration**. Natural selection has shaped
protein sequences so that interactions stabilizing the native structure are energetically
favorable, while non-native interactions are minimized. A "frustrated" landscape would have
many local minima — conformations that look stable but are not the native state — trapping
the protein in misfolded intermediates. Evolution has reduced this frustration, smoothing
the funnel so that folding is both fast and reliable.

This does not mean every protein folds perfectly on its own every time. It means the
sequence has been selected to make folding the default outcome under physiological
conditions. The energy landscape is biased, not flat.

## What happens inside cells

Anfinsen's experiments were done in test tubes, with purified proteins at low concentration.
Inside a living cell, the environment is radically different. The cytoplasm is crowded —
protein concentrations reach 300 to 400 grams per liter, creating a densely packed
environment where molecules constantly collide. Misfolded proteins can aggregate, forming
insoluble clumps that disrupt cellular function.

Cells solve this problem with **molecular chaperones** — proteins that assist other proteins
in folding without being part of their final structure. The term was coined by Ron Laskey in
1978 (describing nucleoplasmin's role in histone folding) and expanded by R. John Ellis in
1987 to cover the broader class of folding assistants.

Chaperones fall into functional families:

- **Hsp70** binds exposed hydrophobic regions on unfolded or partially folded proteins,
  preventing premature aggregation. It cycles between ATP-bound (fast exchange) and
  ADP-bound (tight grip) states, releasing the client protein when conditions favor
  productive folding.

- **Hsp60** (GroEL/GroES in bacteria) forms a double-ring structure with a central cavity. A
  misfolded protein enters the cavity, the chaperonin cap (GroES) closes, and ATP-driven
  conformational changes give the protein space and time to fold in isolation before
  release.

- **Hsp90** specializes in activating signaling proteins — kinases, steroid receptors, and
  transcription factors — often working with co-chaperones in ATP-dependent cycles.

Estimates suggest chaperones assist more than half of all mammalian proteins at some point
in their lifecycle. They do not violate Anfinsen's dogma — the sequence still encodes the
structure. Chaperones prevent off-pathway aggregation, giving the protein a better chance to
find its native state on its own.

## When folding fails

Misfolding is not a rare glitch. It is a central mechanism in several major disease classes.

**Prion diseases** provide the clearest example. Stanley Prusiner discovered prions in the
1980s — infectious agents composed entirely of misfolded protein, with no nucleic acid
component. The normal cellular prion protein (PrP^C^) adopts an alpha-helical structure. The
disease form (PrP^Sc^) is rich in beta-sheets and aggregates into fibrils. Crucially,
PrP^Sc^ can template the conversion of normal PrP^C^ into the misfolded form, creating a
self-propagating cascade. This mechanism underlies scrapie in sheep, Creutzfeldt-Jakob
disease in humans, and variant Creutzfeldt-Jakob disease linked to bovine spongiform
encephalopathy (mad cow disease). Prusiner received the Nobel Prize in Physiology or
Medicine in 1997.

**Amyloid diseases** share a similar structural logic. Alzheimer's disease involves
accumulation of amyloid-beta peptides into extracellular plaques and hyperphosphorylated tau
into intracellular tangles. Parkinson's disease features alpha-synuclein aggregates known as
Lewy bodies. In each case, a normally soluble protein adopts a beta-sheet-rich conformation
that polymerizes into fibrils, disrupting cellular function through toxic gain-of-function
or loss-of-function mechanisms.

These diseases reveal a vulnerability built into the folding problem: the same physical
forces that drive proteins toward their native structure can, under the wrong conditions,
drive them toward stable misfolded states instead.

## Predicting structure from sequence

For decades, determining a protein's structure experimentally required X-ray
crystallography, NMR spectroscopy, or cryo-electron microscopy — techniques that are
time-consuming, expensive, and not universally applicable. Computational prediction offered
an alternative, benchmarked annually through the
[Critical Assessment of Structure Prediction (CASP)](https://predictioncenter.org/)
competition, which began in 1994.

Progress was steady but incremental. Methods that aligned the target sequence to proteins of
known structure (homology modeling) worked well when a close homolog existed. They struggled
with novel folds or distant relationships.

That changed at CASP14 in November 2020. DeepMind's **AlphaFold 2** achieved a median GDT
(Global Distance Test) score of 92.4 across free-modeling targets — structures with no close
homolog of known structure. For context, a GDT of 60 was considered acceptable experimental
accuracy. AlphaFold 2 used an attention-based neural network that learned to predict
inter-residue distances and orientations directly from the multiple sequence alignment and
the protein sequence itself, refining its predictions through iterative self-attention.

The [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/), launched in July
2021, provides predicted structures for nearly every protein in the UniProt database — over
200 million models spanning all domains of life. It does not replace experimental structure
determination, but it provides a starting hypothesis for proteins that have never been
crystallized or imaged.

AlphaFold has known limitations. It performs poorly on intrinsically disordered regions —
segments that do not adopt a fixed structure even in the native state. It struggles with
synthetic proteins that have no evolutionary homologs to draw from. And it predicts a single
static structure, while many proteins are functional precisely because they shift between
conformations.

The 2024 Nobel Prize in Chemistry was awarded to David Baker (for computational protein
design using his Rosetta software), Demis Hassabis, and John Jumper (for AlphaFold),
recognizing the convergence of computation and structural biology.

## What the folding problem reveals

The protein folding problem — how a linear sequence reliably produces a functional
three-dimensional structure — sits at the intersection of thermodynamics, evolution, and
information theory.

Anfinsen's dogma established that the sequence encodes the answer. Levinthal's paradox
showed that the answer cannot be found by brute force. The energy landscape theory explained
how evolution shaped sequences so that folding is the default outcome, not a lucky accident.
Molecular chaperones revealed that cells invest heavily in keeping the process on track.
Misfolding diseases show what happens when the landscape's biases fail or are overwhelmed.
And computational prediction demonstrates that the mapping from sequence to structure is
learnable — a pattern that can be extracted from evolutionary data and physical constraints.

The folding problem is not solved in every case. Multidomain proteins, membrane proteins,
intrinsically disordered regions, and conformational switching remain active areas of
research. But the core mechanism — a biased energy landscape guiding a chain toward its
lowest-free-energy configuration — is one of the more complete explanations in molecular
biology.
