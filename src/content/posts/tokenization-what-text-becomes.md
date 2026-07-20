---
title: Tokenization — What Text Becomes Before a Machine Reads It
description:
  Text must be broken into pieces before any language model processes it. Tokenization
  decides what those pieces are, and the choice shapes everything the model can express.
publishedAt: 2026-07-20T12:30:00-05:00
categories:
  - Technology
  - Language
---

Every word you read in this article exists as a continuous string of Unicode characters. A
language model does not see those characters the way a human reader does. Before the model
can attend to any sentence, the text must pass through a process called tokenization. The
process breaks a stream of characters into numbered units called tokens, and the way it does
that determines what the model can represent, what it cannot, and where the gaps between
surface language and computational structure appear.

The most common tokenization strategy today is byte-pair encoding (BPE), introduced by
Schuster and Nakajima in 2012 and independently developed by Sennrich, Haddow, and Birch
around the same time for neural machine translation. BPE starts with a vocabulary of
individual characters and iteratively merges the most frequent pairs of adjacent tokens into
larger units. The result is a vocabulary that contains both common short tokens — "the,"
"ing," "ed" — and long compound tokens — "unhappiness," "tokenization," "state-of-the-art."

The choice of vocabulary size is a trade-off. A small vocabulary of four thousand tokens can
represent any text, but common English words like "unhappiness" will be split into several
pieces. A vocabulary of one hundred thousand tokens can represent most English words as
single units, but it will still split rare words, technical terms, and non-Latin text into
fragments. The vocabulary size is fixed at training time. It cannot expand when the model
encounters material it has never seen.

## What a token actually is

A token is an integer identifier that maps to a specific string of bytes, stored in a lookup
table created during training. When text enters the model, the tokenizer finds the token ID
for each substring, produces a sequence of integers, and passes that sequence to the model.
The model operates only on integers. It has no direct access to characters, words, or
sentences.

The mapping is not unique. The same text can be tokenized differently depending on the
algorithm and the vocabulary. GPT-2 uses BPE with a thirty-two thousand token vocabulary.
GPT-4 is reported to use a vocabulary of approximately one hundred thousand tokens. Some
models use WordPiece, which was developed for Google's BERT model and splits text by
repeatedly replacing the most frequent subword sequences with new symbols. Others use
unigram language modeling, which starts with a large candidate set and removes items
proportional to their estimated probability until the desired vocabulary size is reached.

A sentence tokenized by BPE may produce a different sequence of tokens than the same
sentence tokenized by WordPiece, even when both vocabularies contain the relevant words. The
model sees the sequence, not the text. Different sequences carry different patterns into the
attention mechanism.

## Where the boundaries fall

The most frequently cited limitation of subword tokenization is that it splits words at
arbitrary boundaries. The English word "unhappiness" might become "un," "happiness" or "un,"
"happi," "ness" depending on the training data and the number of merge operations. Neither
split is linguistically correct. Both are artifacts of the frequency statistics that
governed the merge decisions.

Research by Lai and colleagues demonstrated in 2024 that token boundaries affect model
performance in ways that do not align with linguistic structure. Models trained on different
tokenizers perform differently on the same tasks even when the underlying architecture is
identical. The differences are systematic. They are traceable to where the tokenizer cuts.

The problem is more severe for languages with different writing systems. Languages that use
an abugida script like Thai or Khmer have no spaces between words. Tokenizing Thai text with
a character-level or byte-level tokenizer produces a sequence of characters that does not
correspond to word boundaries at all. Some models handle Thai by first splitting on spaces
and then applying character-level tokenization within each space-delimited segment. This is
a heuristic, not a principled solution.

CJK languages — Chinese, Japanese, Korean — face a similar problem. Chinese text has no word
separators. Traditional tokenization relies on a separate word segmentation step, often
using a statistical model trained on annotated corpora. Modern models that use
character-level or byte-level tokenization avoid the segmentation step entirely but pay for
it in efficiency. A Chinese sentence of fifty characters becomes fifty tokens. A comparable
English sentence of thirty words might become twenty to thirty tokens depending on the
vocabulary. The token budget for the sentence is the same, but the distribution is
different.

## The hidden cost of vocabulary size

Vocabulary size has consequences that go beyond how words are split. Each token must be
looked up in an embedding table that maps the token ID to a dense vector. The embedding
table grows linearly with vocabulary size. A one hundred thousand token vocabulary requires
an embedding table one hundred thousand times wider than a one thousand token vocabulary.

A token that represents an entire word like "computer" has a single embedding vector. A
token that represents a prefix like "com" shares its vector with every word that begins with
"com" — "computer," "combine," "comfort," "come." The model learns to reuse the "com"
embedding across all of them. This is efficient. It is also a compression that loses
information. The word "computer" and the word "come" start from the same vector. The model
must learn to differentiate them through the subsequent layers.

A larger vocabulary reduces the number of merges required to represent any given text. A
smaller vocabulary preserves more character-level information but requires the model to
compose meaning from more pieces. The trade-off is between representation fidelity and
computational efficiency. It is not a trade-off that any single system can optimize
perfectly for all languages, all domains, and all tasks.

## What the tokenizer cannot do

Tokenization is lossy. Text that enters the tokenizer does not always emerge as an
equivalent sequence. Several failure modes are well documented.

Emoji sequences are one example. Variation in how emoji and emoji-modifier combinations are
represented in the training data means the same visual symbol may produce different token
sequences across models. The variation depends on how the combination appeared in the
training corpus and whether it earned its own merge.

Special character sequences are another. A Unicode string that contains zero-width
characters, combining marks, or bidirectional formatting codes may be tokenized
inconsistently across implementations. The tokenizer treats these as bytes. The bytes may
not correspond to visible characters. The model receives the tokens. The output may not
match the input when the text is regenerated.

Long identifiers — function names, file paths, base64-encoded data — can produce hundreds of
tokens from a single string. The model processes each token independently. The attention
mechanism must span the entire sequence to relate the beginning to the end. This is
computationally expensive and often ineffective. The attention weights decay as the sequence
grows. By the time the model reaches the last token, the connection to the first token may
be too weak to be useful.

## What researchers have tried

Several alternatives to fixed vocabulary BPE have been proposed.

Byte-level BPE operates on bytes rather than Unicode characters. This eliminates the
unknown-word problem entirely, because every possible byte sequence is representable. The
trade-off is efficiency. A byte-level tokenizer produces more tokens per piece of text,
which increases computation and consumes the token budget faster.

SentencePiece applies BPE or unigram language modeling directly to raw text without
requiring pre-tokenization by whitespace. This is particularly useful for languages without
word separators. The tokenizer treats the entire corpus as a single stream and learns merges
from it.

Kao and colleagues proposed k-ary byte-pair encoding in 2024, which generalizes the standard
binary merge operation to merge k tokens at a time instead of two. This produces larger
tokens from fewer merge operations, reducing sequence length for the same vocabulary size.

None of these approaches eliminates the fundamental trade-off. Every tokenizer is an
approximation. Every vocabulary is finite. Every token is a boundary that could have been
placed differently. The research continues because the problem is not a bug to be fixed. It
is a structural constraint of converting continuous, unbounded language into discrete,
bounded computational units.

## What remains unresolved

The most important unresolved question is not which tokenizer is best. It is what the
tokenization choices reveal about the relationship between linguistic structure and
computational representation. If a model's performance depends on where the tokenizer cuts,
and the tokenizer cuts at boundaries determined by frequency statistics, then the model's
capabilities are partially determined by the statistical properties of its training data.
This is not a new insight. But the empirical evidence from Lai and colleagues in 2024 makes
it concrete: different tokenizers produce measurably different results on identical tasks,
even when the model architecture is held constant.

A related question is whether tokenization itself is the right abstraction for language
models. The model does not need words. It does not even need characters. It needs a sequence
of discrete units that carry enough information for the attention mechanism to learn
statistical dependencies. Tokens satisfy that requirement. They are not linguistically
meaningful. They are computationally functional. Whether a different abstraction — a
continuous representation, a neural parser, a structure-aware segmentation — would produce
better results is an open question. The current systems work well enough that the incentive
to experiment with alternatives is outweighed by the cost of retraining and reengineering
the entire pipeline.

The practical consequence for users is simpler. When a language model generates text that
does not match the input, or when it processes long identifiers inefficiently, or when it
handles non-Latin scripts inconsistently, the cause is often the tokenizer. The model is not
failing. The representation of the text is incomplete. The text that entered and the text
the model received are not the same. The gap between them is tokenization.

## Primary sources

- Schuster, M., & Nakajima, K. (2012). Japanese and Russian voice searching using a
  language-independent speech tokenizer. _Patent US8868346B_, Google.
- Sennrich, R., Haddow, B., & Birch, A. (2015). Neural machine translation of rare words
  with subword units. _Proceedings of the 53rd Annual Meeting of the ACL_.
- Lai, T. G., Martinez, M. X., Huang, E. K., Newman, R., & So, A. (2024). Token boundaries
  of large language models. _Communications of the ACM_, 67(11).
- Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., & Sutskever, I. (2019). Language
  models are unsupervised multitask learners. _OpenAI blog_. GPT-2 paper describing
  byte-level BPE.
- Kudo, T. (2018). Subword sampling and byte-level BPE. _SentencePiece paper_.
- Kudo, T., & Richardson, J. (2018). SentencePiece: A simple and language-agnostic subword
  tokenizer. _Proceedings of the 2018 Conference on Empirical Methods in Natural Language
  Processing: System Demonstrations_.
- Kao, S. J., & Kecheril, S. A. (2024). k-ary byte-pair encoding for language models.
