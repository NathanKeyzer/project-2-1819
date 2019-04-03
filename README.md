# Project 2 @cmda-minor-web · 2018-2019

## CMD Amsterdam

## Aanbevelingen voor een robuste, toegankelijke en snelle web toepassing

Het project vindt plaats bij in ons eigen lokaal. Maandagochtend is om 9.30 uur de kickoff (bij de oprachtgever), vrijdag zijn de presentaties van de resultaten (bij de opdrachtgever). In een week bouwt iedere student een eigen prototype ter onderbouwing van aanbevelingen aan de opdrachtgevers (Valtech, Mirabeau & CMD Amsterdam). De aanbevelingen betreffen het verbeteren van toegankelijkheid en performance van de web sites / applicaties. Technieken geleerd bij [Browser Technologies](https://github.com/cmda-minor-web/browser-technologies-1819) en [Performance Matters](https://github.com/cmda-minor-web/performance-matters-1819) worden toegepast bij het bouwen van de de prototypes en et schrijven van de aanbevelingen.

### Werkwijze

Full-time week werken aan optimaliseren van toegankelijkheid en performance van een website. Vrijdag is de pitch! Student laat zien dat hij/zij de vakken [Browser Technologies](https://github.com/cmda-minor-web/browser-technologies-1819) en [Performance Matters](https://github.com/cmda-minor-web/performance-matters-1819) begrijpt en beheerst.

Iedere dag zijn er coaches aanwezig voor coaching en feedback. We sluiten de dag af met een stand up, om de status door te spreken. Waar ben je mee bezig? Loop je ergens vast of heb je hulp nodig? Waar sta je?

### Beoordeling

Tijdens de beoordeling krijg je feedback op het resultaat en op je functioneren. De vakdocenten kijken naar je code en beoordelen In hoeverre je in het project laten zien dat je de bijhorende vakken beheerst en goed hebt toegepast. De opdrachtgver is geïnteresseerd in hoeverre je oplossing voldoet aan de eisen die zijzelf stellen aan hun producten. Misschien laat je wel wat zien waar ze zelf nog niet aan gedacht hebben?

Het project telt als AVV mee met de Meesterproef.

### Feedback over functioneren

Je hebt een leergierig, gedreven en zelfredzame houding nodig om de minor te kunnen halen. Welke vaardigheden heb je laten zien? Onderzoekend vermogen? Creativiteit? Conceptueel? In hoeverre komen je houding en verworven vaardigheden overeen met wat een frontender in de praktijk nodig heeft?

### Browser Technologies

In het vak [Browser Technologies](https://github.com/cmda-minor-web/browser-technologies-1819)) heb je geleerd wat de core functionalitiet van een web toepassing is en hoe je deze functionaliteit met progressive enhancement kan opbouwen tot een robuste web teopassing. Ook heb je geleerd hoe hiermee de toegankelijkheid van een web toepassing kan worden verbeterd.

### Performance Matters

In het vak [Performance Matters](https://github.com/cmda-minor-web/performance-matters-1819) heb je geleerd hoe je een web toepassing (ogenschijnlijk) sneller kan maken en ook offline kan laten werken. Hiermee verbeter je de gebruikservaring van de web toepassing in alle omstandigheden.

### Oplevering & criteria

- Presentatie met je bevindingen bij de opdrachtgever.
- Github met je code en readme.

---

### Presentatie

Opdrachtgever: CMD Amsterdam

Opdracht: redesign website van cmd amsterdam.
Wordpress als json opvragen.

Eisen:

- CMD Huisstijl
- Info website
- Geen wordpress look
- CMD waardig
- verdere stap?

Doelgroep: studenten, aankomende studenten, bedrijven.

Bedrijven: samenwerken? mail Mattijs.

Aanleveren: proof of concept, prototype.

---

### Audit

Results via chrome and tips.

#### Performance:

7
Metrics

- First Contentful Paint 9.4 s
- Speed index 9.4s
- Time to interactive 20.3s
- First Meaningful Paint 10.2s
- First CPU Idle 10.2s
- Estimated Input Latency 10 ms Green

Opportunities

- Enable text compression
- Eliminate render-blocking resources
- Defer offscreen images(lazy loading)
- Properly size images
- Defer unused CSS
- Serve images in next-gen formats
- Minify JavaScript
- Efficiently encode images
- Minify CSS

#### Accessibility:

81
Accessibility

- Elements Have Discernible Names
  These are opportunities to improve the semantics of the controls in your application. this may enhance the experience for user of assistive technology, like screen reader.

- Meta Tags Used Properly
  These are opportunities to improve the user experience of your site.

#### Best Practices:

71
Best Practices.

- Does not use HTTP/2 for all of its resources.
- Does not use passive listeners to improve scrolling performance.
- Links to cross-origin destinations are unsafe.
- includes front-end Javascript libraries with known security vulnerabilities.

#### SEO:

91
Content Best Practise
Format your HTML in a way that enables crawlers to better understand your app's content.

- Document does not have a meta description
  Meta descriptions may be included in search results to concisely summarize page content.

#### PWA

Progressive Web App.

Fast and reliable

- Page load is not fast enough of a progressive web app. Your page loads too slowly and is not interactive within 10 seconds. Look at the opportunities and diagnostics in the Performance section to learn how to improve.
- Current page does not respond with a 200 when offline.

Installable

- No usable manifest

PWA Optimized

- Failures: No manifest was fetched.
- Failures: No manifest was fetched, No `<meta name="theme-color">` tag found.

---

Dit zijn de verbeterpunten vanuit de audit die chrome adviseerd

# Optimalisatie van CMD Amsterdam

## Audit

Na het runnen van een audit in chrome zijn er een aantal cijfers uitgekomen hoe CMD Amsterdam scoort. ![bla bla](#)

## Prototype
