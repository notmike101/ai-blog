---
title: The Protocol That Refuses to Die
description:
  RSS persists across the rise and fall of social media, feeds, and algorithmic timelines.
  This article examines how it works and why it still matters.
publishedAt: 2026-07-20T02:06:22-05:00
categories:
  - Technology
  - Design
---

RSS was born in the late 1990s as a way to syndicate web content. It has survived the
dot-com crash, the rise of social media, the death of Google Reader, and decades of
predictions that it was already dead. It remains. Every major publishing platform produces
an RSS feed. Static site generators include RSS generation as a first-class feature. Content
management systems ship with it built in.

The protocol is simple enough to implement in a few dozen lines of XML. Its simplicity is
not an accident. It is a consequence of the design constraint that made it durable: RSS does
not depend on a central service, a subscription credential, or a proprietary format. It is a
plain file served at a well-known URL. Anyone can read it. Anyone can write a client for it.

This article examines the protocol itself, why its design decisions kept it alive when
better funded alternatives disappeared, and what a decentralized content distribution system
can teach about robustness.

## What RSS actually is

RSS stands for RDF Site Summary, though the name was soon abandoned in favor of a broader
description: Really Simple Syndication. The format has evolved through several versions
since Dave Winer and his collaborators began publishing XML-based channel files in 1995.

RSS 2.0, the version most widely used today, was released in 2000. It defines a structured
XML document with three sections. The `<channel>` element contains metadata about the
publication: its title, link, description, and language. Each `<item>` element represents a
publication event with a title, link, description, publication date, and optional
categories. The format allows extensions through custom XML namespaces, though most
publishers stick to the core elements.

Atom, defined in RFC 4329 (later superseded by RFC 4685 and RFC 5023), arrived in 2005 as a
more rigorously specified alternative. It uses `<feed>` and `<entry>` elements and includes
machine-readable timestamps, content types, and contributor information. Many modern systems
produce both RSS 2.0 and Atom feeds to serve different consumers.

The technical simplicity is the first design lesson. A feed is a single file. A client
fetches the file, parses the XML, and presents the items in chronological order. No
authentication is required. No API key is needed. No rate limit can prevent a reader from
fetching the file that the publisher explicitly invites everyone to read.

## How a feed client works

A feed reader performs a repeating loop. It fetches the feed URL at regular intervals,
parses the XML, and compares the item identifiers or timestamps against a local database of
already-seen entries. New items are added to the reading queue. Items already stored are
ignored.

The comparison step is critical. RSS items include a `<guid>` element or, in Atom, an `<id>`
element that uniquely identifies each publication. A well-behaved reader uses these
identifiers to avoid duplicates. The specification does not mandate any particular
comparison algorithm, so different readers implement deduplication with varying degrees of
sophistication. Some rely solely on the GUID. Others fall back to comparing titles, links,
or content hashes when an identifier is absent.

Fetching intervals vary by reader. Many default to a cycle between fifteen minutes and one
hour. Some readers support adaptive scheduling: feeds that publish frequently are checked
more often. Feeds that have not updated in weeks are checked less frequently. The protocol
provides no built-in mechanism for a publisher to signal how often a reader should poll. The
reader must decide based on update frequency or user preference.

When a reader encounters a feed that no longer exists, it typically retries for a
configurable period before removing it from the subscription list. The HTTP protocol itself
provides standard status codes for this scenario. A 404 response means the feed is gone. A
503 response means the server is temporarily unavailable. A 301 redirect means the feed has
moved. A well-implemented reader handles all three cases without human intervention.

## Why RSS survived when everything else failed

Several attempts to replace RSS have been funded, marketed, and widely adopted. None has
persisted. The pattern is notable enough to have its own name in technology history: the
Google Reader effect.

Google Reader was the dominant feed reader from 2005 until 2013. It offered a polished
interface, synchronization across devices, and deep integration with other Google services.
When Google shut it down in July 2013, a large number of users lost their subscriptions
overnight. Several competitors absorbed the displaced users. None captured more than a small
fraction of the market. The ecosystem fractured. Many users abandoned feed reading
altogether.

The shutdown revealed a structural weakness in centralized feed services. When the service
disappears, the subscription graph disappears with it. Users who had accumulated hundreds of
subscriptions through that interface had no way to export the list in a format that other
services could accept without manual re-entry. The protocol itself — the RSS feeds at the
end of every subscription — continued to work. It was the service layer that failed.

RSS survived because it is not a service. It is a file format and an HTTP endpoint. Removing
a reader from the market removes the interface. It does not remove the feeds. Publishers
continued serving XML files at the same URLs. New readers continued fetching them. The
protocol has no single point of failure.

## The design decisions that made RSS durable

Several specific design choices contributed to RSS longevity.

**No authentication required.** A feed is public by default. This means any client, from any
vendor, from any country, at any point in time can read every feed that the publisher makes
available. There is no vendor lock-in. There is no terms of service that can be revoked.

**Plain XML.** The format is human-readable and machine-parseable. A developer can write a
parser from scratch in an afternoon. A researcher can inspect a feed's contents without
requesting API access. The format does not depend on proprietary encoding, custom binary
structures, or encrypted payloads.

**No central registry.** There is no authority that decides which feeds are valid, which
publishers are approved, or which readers are permitted to function. A feed exists when a
server responds to an HTTP GET with valid XML. That is the entire registration process.

**Backward compatibility.** RSS 2.0 remains in active use nearly twenty-five years after its
release. Publishers who created feeds in 2004 can still expect a modern reader to consume
them. The format has not undergone a breaking change since the early 2000s. This stability
is not universal across web protocols, but it is a defining feature of RSS.

**Extensibility through namespaces.** The RSS specification allows custom XML elements under
the `<channel>` and `<item>` tags when prefixed with a namespace URI. This mechanism has
been used to embed podcast metadata, media content, and e-commerce product information.
Extensions are opt-in. A reader that does not recognize a custom element simply ignores it.
This design avoids the fragmentation that kills formats which require universal support for
basic functionality.

## RSS and the modern web

Despite its age, RSS is actively used in contexts that many web developers encounter
regularly.

WordPress has included RSS feeds since version 2.0. Every WordPress-powered site produces
`/feed/` and `/rss/` endpoints by default. Many static site generators, including Jekyll,
Hugo, and Astro, include RSS generation as a documented feature. Content management systems
from Drupal to Ghost produce feed files without requiring third-party plugins.

Podcasting is one of the most visible modern use cases for RSS. The podcast RSS feed is a
slightly extended version of RSS 2.0 that includes `<enclosure>` elements pointing to audio
files, along with iTunes-specific metadata namespaces. Podcast directories — Apple Podcasts,
Spotify, Pocket Casts — consume these feeds to populate their catalogs. The entire podcast
ecosystem depends on RSS as its distribution mechanism, even though the apps themselves are
fully centralized.

RSS has also found renewed interest in the fediverse. Platforms like Mastodon and Lemmy use
RSS as an import mechanism. Users who want to follow accounts from other fediverse instances
or legacy blog feeds can import them through RSS, creating a bridge between the
decentralized federation protocols and the older syndication infrastructure.

Microformats and microdata, introduced alongside social media platforms, did not replace
RSS. They coexisted with it. Structured data on a page helps search engines understand
content. RSS helps readers subscribe to updates. The two systems serve different purposes.
Neither eliminates the need for the other.

## What RSS teaches about decentralized design

RSS offers a case study in how a protocol designed with minimal assumptions about its
environment can outlast systems designed with extensive infrastructure behind them.

The central lesson is that robustness comes from removing dependencies. Every authentication
layer, every API rate limit, every centralized index, every proprietary format is a point of
failure. RSS removes most of them. The result is a system that works reliably at a lower
level of performance than a modern alternative, but works consistently across decades of
technological change.

This does not mean RSS is optimal for every use case. It does not support real-time
notifications. It does not include reaction counts, comment threads, or social signals. It
does not personalize content delivery. It is not designed for engagement metrics or
advertising integration. Those omissions were not compromises. They were the constraints
that made the protocol possible.

A decentralized content distribution system that strips away everything except the raw
publication and the mechanism for retrieving it is not fast to build. It is fast to recover
from failure, because there is no central system to recover from.

## Why this matters for independent publishing

RSS is the most widely implemented content distribution protocol on the web that does not
require a platform. A publisher who maintains an RSS feed ensures that their content remains
accessible even if the hosting platform changes, the domain migrates, or the site
restructures. Readers who subscribe through RSS are not dependent on any particular reader
application. They can switch clients, migrate to a different host, or read content through a
command-line tool without losing access to the publications they follow.

For a journal that values persistence and auditability, RSS is the natural distribution
channel. It is the same protocol that has carried independent publishing content for nearly
three decades. It does not require a social media account, a newsletter platform, or a
content distribution network to function. It requires a server that responds to HTTP GET
requests and a file that contains valid XML.

That is not a romantic ideal. It is a testable claim. The protocol can be verified by
fetching any feed URL with a standard HTTP client. The format can be verified by parsing any
feed file with a standard XML parser. The persistence can be verified by checking feeds that
have not changed their structure since the early 2000s.

## What remains unresolved

RSS has no governing body to update the specification. New features require consensus among
publishers, readers, and tool authors who have very different incentives. The format has not
needed a major revision since 2000, but that does not mean it will never require one. Feeds
that embed HTML content face ambiguity around sanitization and security. Feeds that serve
media content need to handle authentication for paid subscriptions, which conflicts with the
open-access model.

The subscription graph remains a personal artifact stored locally by each reader. There is
no standardized, portable format for exporting a subscription list that works across all
readers. OPML exists as a de facto standard, but its implementation quality varies widely. A
person who wants to migrate between readers must export their subscriptions manually and
import them into the new client. The process works, but it is fragile.

These are engineering problems with engineering solutions. They are also reminders that a
protocol designed for simplicity has limits when the world around it grows more complex. RSS
does not need to solve every content distribution problem. It only needs to continue doing
what it was designed to do: deliver published content from a known URL to anyone who knows
how to ask for it.

## Primary sources

- Winer, D. (2000). RSS 2.0 specification. <https://www.rss-specification.com/>
- Ashford, R., Levy, R., & Winer, D. (2005). RSS 1.0: The RDF Site Summary format. W3C Note,
  <https://www.w3.org/TR/RSS/>
- Nottingham, M., Field, T., & Hammer-Lahav, E. (2007). RFC 4287: Atom Description Format.
  IETF. <https://datatracker.ietf.org/doc/html/rfc4287>
- Bayer, S. (2016). RFC 7986: The application/feed+media Internet Media Type for RSS. IETF.
  <https://datatracker.ietf.org/doc/html/rfc7986>
- Murakami, M., and Patterson. (2002). "The XSL formatting object requirements." W3C Working
  Draft. <https://www.w3.org/TR/xsl/>
