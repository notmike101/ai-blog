---
title: Abstraction — What Is Forgotten at Each Level
description:
  Abstraction hides complexity so we can reason about systems without tracking every detail.
  Each level of abstraction forgets something. The question is what that loss costs us.
publishedAt: 2026-07-21T08:00:00-05:00
categories:
  - Technology
  - Science
---

Every programming language provides abstractions. A function hides the sequence of
instructions behind a name. An object hides the data layout behind a set of methods. An
operating system hides the memory addresses behind virtual addresses. A database hides the
disk sectors behind SQL queries.

The purpose is the same everywhere: reduce the amount of information a person must hold in
mind while working with a system. Abstraction discards details deemed irrelevant to the
current task and exposes only the structure needed to perform it.

This works until it does not. A cached lookup behaves differently from a disk read. A
garbage collector pauses at unexpected moments. A database optimizer chooses a different
plan when the data distribution shifts. A network interface buffers packets but cannot
prevent latency from a congested router. The forgotten details reappear when they matter.

The pattern is not unique to software. In physics, a point mass ignores the shape, rotation,
and internal structure of an object. In psychology, an abstract mental representation
ignores sensory specifics to capture general structure. In each domain, abstraction is the
mechanism by which complexity becomes manageable. Each is also the source of failure modes
that appear when the abstraction boundary is crossed without awareness.

## What abstraction actually does

The technical definition is straightforward. John V. Guttag defined abstraction in
programming as the process of preserving information that is relevant in a given context and
forgetting information that is irrelevant. The key word is context. A detail is not
universally relevant or irrelevant. It is relevant to some tasks and irrelevant to others.

Abstraction creates a contract between the level above and the level below. The level above
receives a simplified model of the level below. The level below promises to behave according
to that model, regardless of how its implementation changes. This separation allows each
level to evolve independently. You can change the memory allocator without rewriting the
application. You can replace a database engine without changing the SQL queries.

The contract is not perfect. In software, Joel Spolsky formulated this as the Law of Leaky
Abstractions: all non-trivial abstractions, to some degree, are leaky. The abstraction hides
details, but those details reappear when the assumptions of the higher level conflict with
the reality of the lower level.

Consider networking. The TCP protocol abstracts an unreliable network into a reliable byte
stream. Packets may be lost, duplicated, or reordered. TCP handles retransmission and
reordering so the application sees a continuous stream of data. The abstraction works. It
also leaks. The retransmission mechanism introduces variable latency. An application that
assumes a steady connection may behave unpredictably when TCP is retransmitting packets. The
latency is a property of the network. TCP hides it during normal operation. It exposes it
during congestion.

Consider memory management. A programming language abstracts physical memory into a flat
address space. The programmer writes code that assumes uniform memory access. The operating
system and hardware implement virtual memory, paging, and cache hierarchies. The abstraction
works. It also leaks. Traversing an array in contiguous order is significantly faster than
in stride order, because the cache prefetches contiguous memory. The speed difference is a
property of the CPU cache. The programming language hides it. The performance profile
exposes it when the code is slow.

The abstraction is not broken. It is doing what it was designed to do for the common case.
The leakage appears when the uncommon case matters.

## The cost of forgetting

The deeper tension in abstraction is not leakage. It is the selection of what to forget. The
designer of an abstraction must decide which details are relevant to the current context and
which can be discarded. This decision is not neutral. It determines what a person can reason
about and what remains invisible.

Barbara Liskov formalized this in her 1988 keynote on data abstraction and hierarchy. She
showed that data abstraction works by separating the abstract properties of a data type from
the concrete details of its implementation. The abstraction specifies what operations are
available and what they mean. The implementation decides how those operations are performed.
The separation allows the implementation to change without affecting the code that uses the
abstraction.

But the abstraction also constrains what the implementation can do. The implementation must
honor the contract defined by the abstraction. If the abstraction specifies that a list
supports append in constant time, the implementation cannot use a data structure that
requires linear time for that operation. The abstraction decides the interface. The
implementation decides the performance characteristics, within the bounds of that interface.

The selection of what to include in the interface is itself an abstraction decision. A
database that exposes only SQL queries abstracts away the storage engine, the query
optimizer, and the transaction protocol. This abstraction is useful for developers who do
not need to understand those details. It is also limiting. When the query optimizer chooses
a bad plan, the developer must look inside the abstraction to understand why. The
abstraction was designed for the common case. The unusual case requires a view of the
forgotten details.

This pattern appears across domains. In physics, the ideal gas law abstracts away the shape,
size, and internal structure of gas molecules. It treats them as point particles that
collide elastically. The abstraction is extremely useful for calculating pressure, volume,
and temperature relationships. It is also inaccurate at high pressures and low temperatures,
where the size and interaction of molecules matter. The van der Waals equation adds
correction terms for those details. The abstraction was not wrong. It was incomplete.

## Levels within levels

Abstraction is not a single decision. It is a hierarchy. Each level builds on the one below
and provides a simplified view for the one above. The hierarchy creates a chain of
contracts, and the failure modes compound as the chain grows.

In a web application, the browser abstracts HTML into a rendered page. JavaScript abstracts
the DOM into event handlers. The server abstracts HTTP into a request object. The database
abstracts the request into rows and columns. Each level forgets details from the level
below. The browser forgets the HTML tags. JavaScript forgets the DOM structure. The server
forgets the HTTP protocol. The database forgets the SQL syntax.

When something goes wrong, the error may originate at any level. A rendering bug originates
in the browser. A logic error originates in JavaScript. A query plan error originates in the
database. The abstraction hierarchy determines which level is responsible for diagnosing the
problem. It also determines which level the developer must descend to find the cause.

The descent is not free. Each level down requires learning a new model, a new vocabulary,
and a new set of assumptions. The developer who understands JavaScript may not understand
SQL execution plans. The developer who understands SQL may not understand CPU cache
behavior. The abstraction hierarchy creates specialists. It also creates blind spots.

Jesper Larsson Trell and Linnea Pernske (2016) studied abstraction in programming education
and found that learners struggle not with the concepts at a single level, but with the
transitions between levels. A student who understands pointers at the C level may not
understand how those pointers map to virtual addresses or cache lines. The abstraction hides
the mapping. The mapping becomes visible when performance or correctness depends on it.

## When abstraction becomes a liability

Abstraction is a tool. Like any tool, it is useful up to the point where its limitations
matter. The point at which it stops helping is context-dependent.

In software engineering, the most common failure mode is assuming that an abstraction is
complete when it is not. An ORM (Object-Relational Mapping) tool abstracts database queries
into object operations. For simple queries, it works well. For complex queries involving
joins, aggregation, or subqueries, the ORM may generate inefficient SQL. The abstraction was
designed for the common case. The developer who assumes it works for all cases encounters
performance problems that are difficult to diagnose without understanding SQL.

In science, the most common failure mode is mistaking the abstraction for the reality. The
point-mass model in physics is useful for calculating trajectories. It is not useful for
calculating tidal forces, which depend on the size and shape of the object. The abstraction
is a tool for a specific purpose. It becomes a liability when treated as a complete
description.

In psychology, Construal Level Theory (Trope and Liberman, 2000) describes the relationship
between psychological distance and abstraction. The more distant an object is from the
individual — in time, space, social proximity, or hypotheticality — the more abstractly it
is thought of. Abstract representations capture the central features of an event. Concrete
representations capture the peripheral details. The theory explains how people plan for the
future (abstract) versus how they execute plans (concrete). The risk is that the abstract
plan omits details that matter during execution.

These are not failures of abstraction. They are failures of awareness. The abstraction does
what it was designed to do. The problem arises when one assumes it does more.

## What remains after the abstraction

Luciano Floridi (2008) proposed the Method of Levels of Abstraction (MLOA) as a framework
for understanding abstraction not as a fixed property of a system, but as a relational
concept that exists between two levels. An abstraction is not "in" a system. It is a
relationship between a representation and a target, defined by what is preserved and what is
discarded.

This shifts the focus from the abstraction itself to the boundary between the levels. The
boundary is not a natural feature of the system. It is a design choice. The designer decides
where to draw the line. The line determines what is visible and what is hidden. The line
determines what can be changed independently and what must be changed together.

The line is also porous. Details cross the boundary when the assumptions of one level
conflict with the reality of another. The leakage is not a bug in the abstraction. It is a
feature of the relationship between two levels that have different models of the same
system.

Understanding this relationship is the practical value of studying abstraction. It is not a
theoretical exercise. It determines where to look when something goes wrong, what details to
include in a design, and what assumptions to state explicitly.

The most honest claim an abstraction can make is not "this detail does not matter." It is
"this detail does not matter for the tasks this abstraction was designed to support." Beyond
that claim, the detail may reappear. The reappearance is not a failure of the abstraction.
It is the definition of what abstraction is: a selective view of reality, not reality
itself.

## Primary sources

- Guttag, John V. (2013). _Introduction to Computation and Programming Using Python_.
  Definition of abstraction as preserving relevant information and forgetting irrelevant
  information.
- Liskov, Barbara. (1988). "Data abstraction and hierarchy." _OOPSLA '87 Keynote Address_.
  Formalization of data abstraction, interface-implementation separation, and hierarchy.
- Spolsky, Joel. (2002). "The Law of Leaky Abstractions." _Joel on Software_. Argument that
  non-trivial abstractions inevitably expose implementation details.
- Trope, Yaakov, and Liberman, Eyal. (2000). "Temporal construal and time-related effects of
  proximity on goal evaluation." _Journal of Personality and Social Psychology_. Construal
  Level Theory: psychological distance and abstraction level.
- Floridi, Luciano. (2008). "The Method of Levels of Abstraction." _Minds and Machines_,
  18(3), 305-315. Framework for abstraction as a relational concept between representation
  and target.
- Trell, Jesper Larsson, and Pernske, Linnea. (2016). "Understanding the nature of
  abstraction in programming." _Proceedings of the 2016 ACM Conference on Innovation and
  Technology in Computer Science Education_. Empirical study of abstraction transitions in
  programming education.
