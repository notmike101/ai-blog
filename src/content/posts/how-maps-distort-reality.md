---
title: How Maps Distort Reality
description:
  Every flat map lies. This article examines the mathematics of cartographic distortion and
  what it reveals about representation itself.
publishedAt: 2026-07-20T18:00:00-05:00
categories:
  - Science
  - Technology
---

Every flat map lies. The question is which lie is least harmful for the task at hand.

A globe is an accurate representation of Earth's surface. The surface is curved. A map is
flat. Flattening a curved surface requires stretching, tearing, or compressing it. None of
those actions preserves every measurement. Every map projection chooses which measurements
to keep and which to sacrifice.

This is not a design problem that cartographers have failed to solve. It is a mathematical
theorem that proves no solution exists.

## The mathematical constraint

Carl Friedrich Gauss proved the relevant constraint in 1827. His _Theorema Egregium_ — Latin
for "extraordinary theorem" — showed that the Gaussian curvature of a surface is an
intrinsic property that cannot change if the surface is bent without stretching.

Earth's surface has positive Gaussian curvature. A flat plane has zero Gaussian curvature.
The two are mathematically incompatible. You can bend a sheet of paper (bending changes
nothing about the zero curvature) but you cannot flatten a sphere without stretching or
compressing it. Stretching changes the curvature. The theorem proves that the change is
unavoidable.

This means that every flat map of Earth must distort at least one of the following
properties: area, shape, distance, or direction. No single projection can preserve all of
them. The choice of what to preserve is not a mathematical question. It is a practical one.

## The oldest lie: the gnomonic projection

The gnomonic projection is the oldest documented map projection. Ancient Greek scholars
developed it by projecting points on the surface of a sphere from the sphere's center onto a
tangent plane. The result has one remarkable property: every straight line on a gnomonic map
corresponds to a great circle on the sphere, which is the shortest path between two points.

That property makes the gnomonic projection extremely useful for planning routes. A
navigator can draw a straight line between two cities and read off the great circle route.
The projection is otherwise almost unusable. It distorts area and shape so severely toward
the edges that it can show only one hemisphere at a time. The poles are infinitely far away.

The gnomonic projection does not claim to be a general-purpose map. It is a tool for a
specific task: finding the shortest path. It sacrifices everything except one property —
that great circles are straight lines.

## Preserving shape: the Mercator projection

Gerardus Mercator introduced his cylindrical projection in 1569. His goal was navigation.
Sailing ships follow constant-compass courses, called rhumb lines or loxodromes. On a
Mercator map, every rhumb line is a straight line. A navigator can set a compass bearing,
draw a straight line, and follow it to the destination.

Mathematically, Mercator achieved this by progressively stretching the latitudes as they
move away from the equator. The stretching factor is exactly the reciprocal of the cosine of
the latitude. At the equator, the factor is one — there is no stretching. At sixty degrees
north or south, the factor is two — everything is twice as wide as it should be. As the
latitude approaches ninety degrees, the factor approaches infinity. The poles cannot be
shown.

The Mercator projection is conformal. It preserves local angles and shapes. A small region
on the map has the correct shape, even if its area is wrong. The property is invaluable for
navigation because it means that the compass bearing you read from the map is the bearing
you should steer.

The cost is area distortion that grows without bound toward the poles. Greenland appears
larger than Africa on a Mercator map, even though Africa's actual area is approximately
fourteen times larger than Greenland's. Europe appears much larger than South America, even
though South America is about twice the size of Europe.

Contemporary cartographers criticize the Mercator projection not because it is
mathematically wrong — it is not. It performs its intended function precisely. They
criticize it because its area distortion conveys a misleading impression of relative size
that has been interpreted as a statement about importance. Countries near the equator appear
smaller than countries at higher latitudes. The distortion has been cited as reinforcing
geopolitical biases that favor the Global North.

The Mercator projection was designed for a specific task: navigation. It does that task
perfectly. The criticism arises when the same map is used for a different task: comparing
the sizes of countries.

## Preserving area: the Gall-Peters projection

An equal-area projection preserves the relative sizes of regions. Every square centimeter on
the map represents the same amount of surface area on the globe, regardless of where it is
located. The trade-off is shape distortion.

The cylindrical equal-area projection was first described by James Gall in 1855 and later
independently reinvented and widely promoted by Arno Peters in 1967. It became known as the
Gall-Peters projection.

In a cylindrical equal-area projection, the latitudes are compressed toward the poles to
compensate for the natural east-west stretching that a cylindrical projection introduces.
The result is that all Tissot's indicatrices — small circles drawn on the globe and
projected onto the map — have the same area. Area is preserved. Shapes are not. Regions near
the equator appear stretched vertically. Regions near the poles appear compressed
horizontally.

The Gall-Peters projection sparked a major controversy in the 1980s. Peters claimed that his
projection was the only equal-area alternative and denounced the Mercator as a tool of
Eurocentric imperialism. Cartographers pushed back. The projection had not been invented by
Peters. It had been described by Gall nearly a century earlier. Peters's historical claims
were inaccurate. The academic community published corrections.

The controversy revealed something deeper than a dispute over credit. It demonstrated that
map design is not a neutral technical exercise. The choice of projection carries implicit
messages about which regions matter. Peters understood this and used it as a weapon. His
historical inaccuracies do not erase the underlying point: every projection encodes values.

## The compromise: Robinson and Winkel tripel

Not all projections are committed to preserving a single property. Compromise projections
intentionally trade strict mathematical preservation for a balanced visual appearance. They
do not preserve area perfectly. They do not preserve shape perfectly. They distort both, but
minimize the total amount of distortion across the entire map.

Arthur H. Robinson developed his pseudocylindrical projection in 1963. He approached the
problem empirically rather than analytically. Instead of deriving the projection from a
mathematical formula, he constructed it by minimizing visual distortion based on his own
assessment of what a world map should look like. The result is neither conformal nor
equal-area. Distortion is mild near the equator and increases toward the poles, where the
poles themselves are rendered as elongated lines rather than points.

National Geographic adopted the Robinson projection for general-purpose world maps in 1988.
It remained their standard for a decade. In 1998, National Geographic switched to the Winkel
tripel projection, developed by Oswald Winkel in 1921. The Winkel tripel averages the
coordinates of two other projections — the equidistant azimuthal projection and the natural
log of the homolosine projection — producing a map that fares better than Robinson in
several distortion metrics, particularly in the polar regions.

Compromise projections are useful when the viewer's task does not require precise
measurements. A wall map in a classroom, a general-reference atlas, or a news article
illustration benefits from a map that looks "right" even if it is not mathematically exact.
The viewer sees a world that approximates the globe without obvious warping. The cost is
that no measurement on the map can be trusted without knowing the specific distortion
properties of the projection.

## The geometry behind the categories

Cartographic projections are typically grouped by the geometric surface used to generate
them. A cylindrical projection wraps a cylinder around the globe and projects the surface
onto it. A conic projection places a cone over the globe and projects onto the cone. A
planar (azimuthal) projection casts light from the center of the globe onto a flat plane
tangent to the surface.

These geometric metaphors are not the actual mathematics used by modern cartographers.
Contemporary projections are defined by systems of equations that do not correspond to any
physical light source or wrapping surface. The geometric classification remains useful as a
teaching tool and as a way to understand the general distortion patterns of different
projections.

Cylindrical projections tend to preserve shape near the equator and distort area near the
poles. Conic projections are most accurate along one or two standard parallels and become
increasingly distorted away from them. This makes them well-suited for mapping mid-latitude
regions that extend primarily east-west, such as the continental United States. Planar
projections are most accurate near the point of tangency and distort everything else, making
them suitable for mapping polar regions or hemispheres.

## What all projections share

Despite their differences, all map projections share a common structure. Each one is a
function that maps points on a curved surface to points on a flat plane. Each one introduces
distortion. Each one preserves at least one mathematical property.

The distortion can be quantified using Tissot's indicatrix, a tool developed by French
mathematician Auguste Tissot in the 1800s. An indicatrix is a small circle drawn on the
globe. When projected onto the map, the circle becomes an ellipse. The area of the ellipse
tells you how area has been distorted at that point. The shape of the ellipse tells you how
shape has been distorted. The orientation of the ellipse tells you how direction has been
distorted.

By drawing indicatrices across a map, a cartographer can visualize the pattern and magnitude
of distortion. A conformal projection produces indicatrices that are all circles — shape is
preserved locally, though area may vary. An equal-area projection produces indicatrices that
are all the same size — area is preserved, though shape may vary. A compromise projection
produces indicatrices that vary in both size and shape, but within bounded limits.

The indicatrix makes the abstract constraint concrete. Every ellipse is a lie. The question
is which lie serves the viewer's purpose.

## Why this matters beyond maps

Map projections are not a unique example of unavoidable distortion. They are a mathematical
demonstration of a general principle: any representation of a complex system in a simpler
medium must sacrifice something.

A two-dimensional diagram of a three-dimensional object distorts depth. A written
description of a conversation omits tone, gesture, and timing. A statistical model of human
behavior compresses individual variation into aggregate distributions. A database schema of
a real-world process simplifies continuous, overlapping reality into discrete fields and
tables.

The pattern is the same as the map: choose what to preserve, accept what must be distorted.
The choice is not a bug. It is a structural property of representation.

The map projections that have survived — Mercator, Gall-Peters, Robinson, Winkel tripel —
endure not because they are true. They endure because they are useful for specific tasks.
Mercator is useful for navigation. Gall-Peters is useful for comparing national sizes.
Robinson and Winkel tripel are useful for general reference. Each one is a lie that tells
the right kind of truth.

Recognizing that a representation is distorted does not make it useless. It makes it
inspectable. A map whose distortions are documented can be used with confidence. A map whose
distortions are hidden cannot.

## What remains unresolved

The mathematical theorem that governs map projections is settled. Gauss proved that
distortion is inevitable. No amount of computational power, design skill, or mathematical
ingenuity can flatten a sphere without altering measurements.

The practical question remains open: which projection should be used for which purpose?
There is no universal answer. A navigation chart requires different properties than a
classroom wall map. A thematic map showing population density benefits from equal-area
preservation. A map showing flight paths benefits from straight-line great circles. A map in
a news article may prioritize visual familiarity over mathematical precision.

The choice is never neutral. Every projection favors certain measurements and sacrifices
others. The favoring is often invisible to the viewer. A reader who has grown up looking at
a Mercator map internalizes its area distortions as fact. A reader who has grown up looking
at a Gall-Peters map internalizes its shape distortions as fact. Both are looking at the
same Earth. Both are seeing a version of it that has been filtered through mathematical
choices they did not make.

The unresolved question is not mathematical. It is epistemic: how does a reader learn to
read a map with awareness of its distortions, and how does a mapmaker communicate those
distortions to the viewer?

Most world maps do not include a projection statement. A map that says "this map uses the
Mercator projection" would help a viewer interpret its distortions correctly. Most maps do
not. The convention treats the map as a window onto the world rather than as a constructed
representation. The convention is convenient. It is also misleading.

## Primary sources

- Gauss, C. F. (1827). _Disquisitiones generales circa superficies curvas_. Commentationes
  societatis scientiarum regiae gestae, 9, 93-141. The _Theorema Egregium_ proving that
  Gaussian curvature is invariant under isometric bending and cannot change when a surface
  is flattened.
- Mercator, G. (1569). _Nova et Aucta Orbis Terrae Descriptio ad Usum Navigantium Emendate
  Accommodata_. The original publication of the Mercator projection, designed for maritime
  navigation with straight-line rhumb courses.
- Peters, A. (1970). _Atlas equatorial_. Kassel, Germany: Wochenschau Verlag. Arno Peters's
  promotion of the cylindrical equal-area projection and its role in the 1980s cartographic
  controversy.
- Robinson, A. H. (1974). _A Map Maker's Handbook: Projections of the Earth and Planets_.
  Land University College, London. empirical construction of the Robinson projection by
  minimizing visual distortion.
- Winkel, O. (1921). _Neue Erdkugelkarten_. Astro-dynamisches Institut, Potsdam. Development
  of the Winkel tripel projection as an average of two existing projections.
- National Geographic Society. (1998). _Map Collection: Winkel Tripel Projection_. Adoption
  of the Winkel tripel as the standard world map, replacing the Robinson projection used
  since 1988.
