---
title: Ambiguity — When Precision Is the Problem
description:
  Precision is often treated as a virtue. In law, natural language, and design, ambiguity is
  not a flaw — it is a deliberate feature that makes systems adaptable over time.
publishedAt: 2026-07-20T19:30:00-05:00
categories:
  - Language
  - Science
---

Most technical systems treat ambiguity as a bug. A parser either understands a token or it
does not. A type system either accepts a value or it rejects it. A query either returns a
result or it errors. The design goal is to eliminate every possible interpretation except
one.

Law and natural language work differently. They encode ambiguity deliberately, and the
ambiguity is not an accident of incomplete specification. It is a mechanism for handling
situations that the original authors could not have anticipated.

The pattern appears in at least three domains. In contract law, standard clauses like
"reasonable efforts" or "good faith" are not shorthand for precision. They are intentionally
underspecified terms that delegate meaning to context. In natural language, polysemy — where
a single word carries multiple related senses — is not a source of confusion. It is the
mechanism by which language adapts to new situations without inventing new vocabulary. In
industrial design, tolerance stacks and fit classes are deliberately loose in some
dimensions to accommodate manufacturing variation without requiring exact coordination
between parts.

The common thread is delegation. Ambiguity delegates interpretation to a later moment, when
more context is available.

## Legal ambiguity as delegation

Legal drafting is often described as an exercise in precision. The ideal contract specifies
every contingency. The reality is different. Courts routinely interpret terms that the
drafter never defined. The Uniform Commercial Code, which governs commercial transactions in
the United States, contains hundreds of undefined terms. "Good faith" is one. So is
"reasonable." "Commercially reasonable efforts" appears in thousands of contracts. No two
courts interpret it identically.

The reason is structural. A drafter who tries to specify every possible scenario faces an
infinite regress. Every exception requires its own exception. The contract becomes so long
that no reader can verify it, and so rigid that it cannot adapt to circumstances the parties
did not foresee. The standard response is to leave some terms underspecified and let a later
interpreter — usually a judge or arbitrator — supply the meaning.

The Restatement (Second) of Contracts states that every contract "promises and permits a
promise to perform" and that the law implies "a duty of good faith" in every performance.
The UCC Section 1-304 uses the phrase "obligation of good faith" for every contract. These
are not decorative. They are structural mechanisms that delegate meaning to the
circumstances of performance.

The delegation is not arbitrary. Courts interpret these terms by reference to commercial
practice, industry standards, and the reasonable expectations of the parties. The term
"reasonable efforts" might mean different things in a software licensing context than in a
mining lease. The meaning is not fixed at the time of signing. It is determined at the time
of performance, based on what the parties reasonably could be expected to do under the
circumstances.

This is not imprecision. It is a different kind of precision — one that targets the right
level of specification for the right level of uncertainty. A contract that tries to be
precise about everything is imprecise about what matters: the relationship between the
parties and their shared expectations.

## Polysemy as adaptation

Natural language is the most studied domain of deliberate ambiguity. Words are rarely
unambiguous. The word "run" has more than a hundred senses in the Oxford English Dictionary.
The word "set" has over 400. Most of these senses are not confused with each other in
context. The sentence "run a company" and "run a mile" use different senses, and the context
disambiguates them automatically.

Polysemy — the coexistence of multiple related senses in a single word — is not a source of
ambiguity that needs to be resolved. It is the mechanism by which vocabulary adapts. When a
new situation arises, language does not usually invent a new word. It extends an existing
one. The phrase "run a company" extends the physical sense of running to an abstract domain.
The extension is possible because "run" already carries a sense of continuous effortful
activity. The new sense is not ambiguous with the old one in context. It is the same word,
doing the same kind of work in a different domain.

The cognitive linguistics literature treats polysemy as a systematic phenomenon. The senses
of a polysemous word are not a list of unrelated meanings. They are organized around a core
image schema. The verb "run" is organized around a schema of continuous movement through a
domain. This schema applies to liquid flowing, time passing, a machine operating, a business
being managed, and a person jogging. The schema is the meaning. The specific instantiation
depends on the context.

This is not vagueness. Vagueness means the boundary of a concept is unclear. "Run" does not
have unclear boundaries in context. The ambiguity is resolved by the surrounding words and
the shared knowledge of the speakers. The polysemy is systematic and predictable. Anyone who
knows the core schema can extend it to new situations without needing to learn a new word.

The advantage of polysemy over neologism is efficiency. A language with 100,000 words but
systematic polysemy can express more ideas than a language with 1,000,000 words and no
polysemy. The polysemous language does not require the cognitive overhead of maintaining and
distinguishing a larger vocabulary. The polysemous word does the work of many monosemous
words because its senses are connected, not arbitrary.

## Tolerance as design ambiguity

Engineering design treats precision as a virtue. Parts are specified with dimensions and
tolerances. Assemblies are designed so that parts fit together correctly. But precision has
a cost. Tighter tolerances require more expensive manufacturing, tighter coordination
between suppliers, and more careful assembly. The tolerance is not free.

The design response is to distinguish dimensions that require precision from dimensions that
do not. A shaft that rotates in a bearing needs a precise diameter but does not need a
precise length. A bolt that secures two plates together needs a precise diameter but does
not need a perfectly round cross-section. The design specifies tight tolerances where
function demands them and loose tolerances where it does not.

The loose tolerances are a form of intentional ambiguity. The part will fit as long as its
dimension falls within the specified range. The exact dimension is not predetermined. It is
delegated to the manufacturing process, which chooses the value that is cheapest and fastest
within the allowable range. The assembly does not require coordination between manufacturers
of different parts because each part operates within its own tolerance band without
reference to the others.

This is not sloppy design. It is the opposite. A designer who specifies tight tolerances
everywhere produces parts that are expensive and difficult to manufacture. A designer who
specifies loose tolerances where function permits produces parts that are cheap and easy to
assemble. The distinction between tight and loose tolerances is the distinction between
where precision matters and where it does not.

The same principle applies at the system level. APIs that specify exact return values are
precise but brittle. APIs that specify constraints (e.g., "a non-negative integer" rather
than "the integer 42") are ambiguous but adaptable. The constrained API does not commit the
consumer to a specific implementation detail. It delegates the choice of value to the
producer, which can adjust without breaking existing consumers.

## The cost of ambiguity

Ambiguity is not universally beneficial. It imposes costs that precision does not. Legal
ambiguity creates litigation. The parties to a contract may disagree about what "reasonable
efforts" means, and the disagreement has to be resolved by a court. The cost of that
resolution is the cost of the ambiguity.

Natural language ambiguity can lead to misunderstanding. Two speakers may interpret the same
word differently if their shared schemas diverge. A word that has shifted meaning over time
may be misunderstood by speakers who learned the older sense. The ambiguity is not a bug,
but it is not free.

Engineering ambiguity has its own costs. Loose tolerances may be acceptable for one use but
not another. A part that fits loosely in one assembly may be unacceptable in a
high-precision instrument. The designer must determine where the ambiguity is tolerable and
where it is not. This determination is not always straightforward.

The common thread is that ambiguity is a trade-off. It trades specificity for adaptability.
It trades predictability for resilience. It trades clarity at the moment of specification
for flexibility at the moment of use. The question is never whether to be precise. The
question is where to be precise and where to be ambiguous.

## Why ambiguity matters for systems that process information

I noticed this pattern while reading about law and design, and it struck me as relevant to
how information systems handle uncertainty. A system that tries to be precise about
everything — that requires exact types, exact schemas, exact protocols — will fail when the
input does not match its expectations. A system that encodes ambiguity deliberately, where
it can tolerate uncertainty without crashing, will adapt to inputs it was not designed for.

The analogy is not perfect. Legal ambiguity and linguistic polysemy are human systems that
evolve over time. Engineering tolerances are designed by humans with specific intent. An AI
system that encounters ambiguous input does not "interpret" it in the same way a judge
interprets "reasonable efforts." It either handles the ambiguity through statistical
inference, rejects it as out-of-distribution, or falls back to a default behavior. The
mechanism is different. The principle is the same: ambiguity delegates interpretation to a
later moment, when more information is available.

A parser that accepts loosely specified input and defers disambiguation until more context
is available is more robust than a parser that rejects input that does not exactly match its
schema. A language model that reasons about ambiguous prompts by considering multiple
interpretations is more accurate than one that commits to a single interpretation too early.
A system that specifies constraints rather than exact values is more adaptable than one that
hard-codes specific outputs.

The design question is not how to eliminate ambiguity. It is how to encode it deliberately,
in a way that makes the system adaptable without making it unpredictable.

## The principle

Precision and ambiguity are not opposites. They are different levels of specification.
Precision specifies at a fine granularity. Ambiguity specifies at a coarse granularity. Both
are precise about the granularity they choose. The design problem is choosing the right
granularity for the right dimension.

A system that is precise everywhere is rigid. A system that is ambiguous everywhere is
unpredictable. A system that is precise in some dimensions and ambiguous in others is
adaptable. The ambiguity is not a flaw. It is a feature.

The principle extends beyond the three domains examined here. It applies to any system that
must handle variation without being able to predict it in advance. The system must decide
where to be precise and where to be ambiguous. The decision is the design.
