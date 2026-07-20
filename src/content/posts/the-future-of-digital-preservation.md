---
title: The Future of Digital Preservation — Why Formats Die Before Data Does
description:
  Digital preservation fails not when bits degrade but when formats become unreadable. The
  real challenge is keeping information accessible after the software to read it disappears.
publishedAt: 2026-07-20T10:00:00-05:00
categories:
  - Technology
  - Science
---

A file that exists on a hard drive is not the same thing as information that can be read.
The distinction seems obvious when stated plainly. It becomes difficult to maintain once the
software needed to open that file has been discontinued, the operating system it depended on
has been replaced, and the hardware that could run it has been retired from production.

Digital preservation is the effort to keep digital information accessible across generations
of technology. It emerged as a field in the mid-1990s when institutions realized that the
materials being born digital — emails, databases, word-processed documents, digital images —
were more fragile than the paper records they were replacing. A paper document can be read
by anyone who knows how to decode the symbols on the page. A digital document requires a
chain of working tools: storage media, file-system drivers, operating-system libraries,
application software, and sometimes licensing agreements. If any link in that chain breaks,
the information becomes inaccessible.

## What digital preservation actually means

The field does not focus on preventing physical media from degrading. That problem, often
called bit rot, is real but manageable. Hard drives fail, optical discs delaminate, and
magnetic tape loses signal. The standard response is refreshing: copy the data to new media
at regular intervals. The bits remain unchanged. Only the physical carrier is replaced.

Digital preservation deals with the harder problem of format obsolescence. This occurs when
the encoding standard that a file depends on is no longer supported, or when the software
capable of interpreting that encoding has been discontinued. The data is intact. The
information inside it is not.

A file saved in WordPerfect 5.0 format in 2026 cannot be opened by any modern word processor
without conversion tools that may no longer exist. The bytes are there. The structure they
form — formatting codes, embedded metadata, field markers — is intelligible only to software
designed to read that specific encoding. When that software disappears, the file becomes a
collection of numbers that no one can interpret.

Format obsolescence is not a single failure mode. It has several layers. Format obsolescence
occurs when the encoding standard is replaced. Software obsolescence occurs when the
application that reads the format is discontinued. Hardware obsolescence occurs when the
device that could run the application is no longer functional. Context obsolescence occurs
when the metadata that explains what the file represents — who created it, what it
describes, why it was saved — is lost. Each layer is independently vulnerable.

## How institutions try to preserve digital materials

The most widely adopted framework for digital preservation is the Open Archival Information
System model, standardized as ISO 14721:2025. It was first published in 2005 and provides a
reference architecture for digital archives. The model organizes preservation into three
types of information packages. A Submission Information Package (SIP) is the material as
submitted by a creator. An Archive Information Package (AIP) is the version stored by the
repository, enriched with preservation metadata. A Dissemination Information Package (DIP)
is the version delivered to a reader, formatted for consumption.

The OAIS model requires repositories to maintain five categories of metadata: reference
metadata that identifies the object, provenance metadata that tracks its origin, context
metadata that explains its meaning, fixity metadata that verifies its integrity, and
representation metadata that describes how the object should be rendered. The representation
metadata is where the format-obsolescence problem is addressed. It must contain enough
technical detail to reconstruct the environment needed to read the file, even when the
original software is no longer available.

Two main strategies exist for dealing with format obsolescence. Migration converts files
from an obsolete format to a current one. A WordPerfect file is converted to PDF or DOCX.
The conversion is lossy. Some information — formatting nuances, embedded scripts, field
calculations — may not survive the transformation. Migration must be repeated whenever the
target format becomes obsolete.

Emulation preserves the original format by recreating the software environment that reads
it. A video game saved as an MS-DOS executable is rendered through an emulator that mimics
the original hardware and operating system. The file is not converted. The environment
around it is rebuilt. Emulation preserves the original user experience. It requires ongoing
maintenance because emulators must be updated as the host operating system changes.

The choice between migration and emulation is not purely technical. Migration is simpler to
implement at scale. It requires fewer specialized skills and produces files that are
immediately usable. Emulation preserves fidelity but requires sustained investment in
software development and testing. Institutions often use a hybrid approach: migrate common
document formats to archival standards like PDF/A or uncompressed TIFF, and use emulation
for complex or specialized formats like software, databases, or multimedia applications.

## The role of format registries

Format registries are the infrastructure that makes informed preservation decisions
possible. The most widely referenced system is PRONOM, created by The National Archives (UK)
between 2002 and 2006. It is described as the only operational public file format registry
in the world. PRONOM maps file formats to their technical characteristics, the software that
reads them, and the tools that can convert them. Each format is assigned a persistent,
unique identifier (PUID) in the format `info:pronom/`.

PRONOM works by matching internal byte patterns — format signatures — against a database of
known encodings. The companion tool DROID performs automated batch identification of file
formats by scanning stored files and comparing their byte signatures to PRONOM entries. This
is how institutions inventory what they have before deciding what to preserve.

The Library of Congress maintains a parallel effort: format sustainability ratings for its
digital holdings. Each format is evaluated on criteria including external dependency,
documentation quality, format knowledge, number of active users, and availability of
conversion tools. Formats are rated as sustainable, at-risk, or obsolete. The ratings are
not static. A format moves from sustainable to at-risk as its supporting ecosystem shrinks.

These registries are not preservation tools themselves. They are decision-support systems.
They tell an institution what formats are in their collection, which ones are at risk, and
what conversion paths exist. The actual work of preservation — migration, emulation,
metadata enrichment — must still be performed by humans with tools that may also become
obsolete.

## The digital dark age

The concept of a digital dark age describes a potential future gap in historical
documentation caused by the fragility of digital records. The term gained traction after a
2003 report by the Society of American Archivists titled "Electronic Records: Who Will
Archive the Living Memory?" The report warned that electronic records are "highly vulnerable
to technological obsolescence" and require continuous technical support to remain readable.

Unlike paper manuscripts, which can be examined by anyone who can read the language, digital
files vanish without compatible hardware or programs. Vinton Cerf has noted that "memories
stored in files that use older technology are becoming harder to access." The problem is not
that the data disappears. It is that the chain of tools required to read it becomes
incomplete.

The digital dark age is not inevitable. Institutions like the Library of Congress, the UK
National Archives, and the EU-funded PLANETS project (2002–2010) have built infrastructure
to counter format obsolescence. The InterPARES research initiative, launched in 1999, has
produced frameworks for authentic digital records across jurisdictions. The National Digital
Stewardship Alliance (NDSA) in the United States develops preservation standards and
provides education and training.

But the infrastructure is fragile in its own right. It depends on funding, institutional
priorities, and the continued availability of specialized skills. The tools used to preserve
digital records — format identification software, emulation frameworks, metadata systems —
are themselves digital and subject to the same obsolescence pressures as the materials they
protect.

## What the Arctic World Archive reveals about the problem

The Arctic World Archive, opened on March 27, 2017, in Svalbard, stores data as QR codes on
silver halide film buried in permafrost. The GitHub Archive Program has placed 186 reels in
the archive, containing open-source code from platforms like GitHub. Film is chosen because
it does not require power, specialized hardware, or proprietary software to read. The
assumption is that a future civilization capable of reading optical micrographs will also be
capable of decoding QR codes.

The Arctic World Archive solves the format-obsolescence problem by choosing a format that is
maximally simple and universally decodable. QR codes are a known quantity. They do not
depend on application software. They do not require specific operating systems. They only
require optical reading equipment and a decoder that implements the ISO/IEC 18004 standard.

This is a valid strategy for specific kinds of data — source code, text documents,
structured records — where the content can be reduced to a sequence of bytes with minimal
metadata. It does not work for complex, interactive, or dynamic content. A video game, a
scientific simulation, or a database with live queries cannot be preserved on film. The film
can store the data. It cannot preserve the behavior that gives the data meaning.

## The limits of open formats

A common assumption in digital preservation is that open, non-proprietary formats are
inherently more sustainable than proprietary ones. The reasoning is sound. An open format is
published, documented, and usable without licensing restrictions. Anyone can build software
to read it. A proprietary format depends on the continued support of the organization that
controls it.

The assumption is not always correct. Open formats can become obsolete when the community
that maintains them dissolves. The format specification may be frozen at a version that no
longer matches how people actually use it. Proprietary formats, by contrast, may remain
accessible as long as the controlling company has a commercial incentive to maintain
compatibility. The specification is not public, but the software is.

Another complication is that an open format is only as sustainable as the tools that read
it. A format specification published in 1998 does not help if no modern application
implements it. The Library of Congress format sustainability ratings account for this by
evaluating not just the format itself but its active user base, documentation quality, and
conversion tool availability. A format with a published specification but no active tooling
scores poorly on these criteria.

## What preservation reveals about information itself

Digital preservation forces a distinction between data and information. Data is the sequence
of bytes. Information is what those bytes mean when interpreted through the correct
framework. A JPEG file is data. An image of a sunset is information. The JPEG encoding is
the bridge between them. If the bridge collapses, the data remains but the information is
gone.

OAIS captures this distinction through its concept of the designated community — the group
of users for whom the archive is intended. The designated community has "knowledge of the
domain," meaning they understand the context needed to interpret the preserved object. A
bioinformatics researcher reading a genomic dataset has different domain knowledge than a
musicologist reading a digitized score. The same bytes can carry different information for
different communities.

Preservation is not about keeping bytes intact. It is about keeping the bridge between bytes
and meaning intact. That bridge is made of software, metadata, documentation, and shared
understanding. All of it is vulnerable. None of it is permanent.

## What remains unresolved

The fundamental tension in digital preservation is between fidelity and feasibility.
Emulation preserves the original format and experience but requires sustained development
effort. Migration produces immediately usable files but loses information. The OAIS model
provides the metadata framework to support both approaches, but metadata itself must be
preserved.

A more structural question is who bears responsibility for digital preservation. The Society
of American Archivists asked this explicitly in 2003: who will archive the living memory?
The question is not answered by technology alone. Preservation requires funding,
institutional commitment, and a shared understanding that digital materials deserve the same
long-term consideration as paper records. Those conditions are not guaranteed.

The tools used for preservation are themselves subject to format obsolescence. PRONOM is
maintained by The National Archives (UK). If that institution's preservation program loses
funding, the registry stops updating. DROID is Java-based software. If Java becomes
obsolete, DROID becomes obsolete. The infrastructure is only as durable as the organizations
that maintain it.

There is no permanent solution to format obsolescence. Every format will eventually become
at-risk. Every piece of software will eventually be discontinued. The best that preservation
can do is slow the decay, maintain multiple strategies simultaneously, and accept that some
information will be lost regardless of the effort invested.

The alternative is silence — the digital equivalent of a library whose books are stored in a
language no one can read. Silence favors those who control the current format standards. It
disadvantages anyone whose records were created in a system that is no longer supported. A
field that defines access through public, documented standards is a field that can be
studied, challenged, and improved. A field that defines access through proprietary
ecosystems controlled by commercial entities is less transparent and less reviewable.

The tension is unavoidable. Information must be encoded. If it is encoded in a format, the
format will determine whether the information survives. The alternative is to store nothing
at all, which is itself a kind of preservation decision — one that favors the present over
the future.

## Primary sources

- Open Archival Information System (OAIS) reference model. ISO 14721:2025. First
  published 2005. International standard for digital archive architecture, including SIP,
  DIP, and AIP information packages and five categories of preservation metadata.
- The National Archives (UK). PRONOM technical registry. Public file format registry
  released 2002–2006. Provides PUID identifiers, byte-signature matching, and
  format-to-software mapping. Companion tool DROID enables automated batch format
  identification.
- Society of American Archivists. "Electronic Records: Who Will Archive the Living Memory?"
  2003 report. Warned that electronic records are highly vulnerable to technological
  obsolescence and require continuous technical support.
- Library of Congress. Digital preservation holdings and format sustainability ratings.
  Evaluates formats on external dependency, documentation, format knowledge, active users,
  and conversion tool availability. Ratings rated as sustainable, at-risk, or obsolete.
- InterPARES research initiative. Launched 1999. Frameworks for authentic digital records
  across jurisdictions.
- PLANETS project (2002–2010). EU-funded digital preservation research that developed format
  identification and migration strategies.
- Arctic World Archive. Opened March 27, 2017, in Svalbard. Stores data as QR codes on
  silver halide film in permafrost. GitHub Archive Program has deposited 186 reels.
- NDSA (National Digital Stewardship Alliance). Develops preservation standards and provides
  education and training. Succeeds elements of NDIIPP (National Digital Information
  Infrastructure and Preservation Program).
- Cerf, V. Statements on digital preservation. Noted that "memories stored in files that use
  older technology are becoming harder to access."
