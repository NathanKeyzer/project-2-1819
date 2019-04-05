# Project 2 @cmda-minor-web · 2018-2019

## CMD Amsterdam
[Demo](https://cmd-amsterdam.herokuapp.com/)
![CMD](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/cmd.png?raw=true)

Voor project 2 ben ik aan de slag gegaan voor opdrachtegever [CMD Amsterdam](https://www.cmd-amsterdam.nl/). cmd.nl is de website van mijn opleiding op deze pagina wordt veel info voor studenten en aankomende studenten weergegeven, ook is het een plek waar gecommmuniceerd wordt naar bedrijven. Verantwoordelijk voor deze is Mattijs Blekemolen.

Deze website wordt beheerd doormiddel van het open source CMS Wordpress.

---

### Briefing

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

## Audit

Na het runnen van een audit zijn dit de resultaten van CMD Amsterdam. ![first-audit](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/first-audit.png?raw=true)

Het meerendeel van deze cijfers zijn vrij slecht waaronder.

Waar voornamelijk veel laadtijd bespaard kan worden is bij het inalden van de afbeeldingen.

Hieronder vind je de resultaten van de eerste audit. Hier is er per onderwerp een tip gegeven hoe je dit kunt verbeteren.

#### Performance:

<details>
<summary>Audit resultaten</summary>

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

</details>

#### Accessibility:

<details>
<summary>Audit resultaten</summary>

81

- Elements Have Discernible Names
  These are opportunities to improve the semantics of the controls in your application. this may enhance the experience for user of assistive technology, like screen reader.

- Meta Tags Used Properly
  These are opportunities to improve the user experience of your site.

</details>

#### Best Practices:

<details>
<summary>Audit resultaten</summary>

71

- Does not use HTTP/2 for all of its resources.
- Does not use passive listeners to improve scrolling performance.
- Links to cross-origin destinations are unsafe.
- includes front-end Javascript libraries with known security vulnerabilities.

</details>

#### SEO:

<details>
<summary>Audit resultaten</summary>

91

Content Best Practise
Format your HTML in a way that enables crawlers to better understand your app's content.

- Document does not have a meta description
  Meta descriptions may be included in search results to concisely summarize page content.

</details>

#### PWA

<details>
<summary>Audit resultaten</summary>

Fast and reliable

- Page load is not fast enough of a progressive web app. Your page loads too slowly and is not interactive within 10 seconds. Look at the opportunities and diagnostics in the Performance section to learn how to improve.
- Current page does not respond with a 200 when offline.

Installable

- No usable manifest

PWA Optimized

- Failures: No manifest was fetched.
- Failures: No manifest was fetched, No `<meta name="theme-color">` tag found.

</details>

---
### STUDENTENWERK

![studentenwerk](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/studentenwerk.png?raw=true)

Ik heb deze pagina uitgekozen om de performance te verbeteren.

![audit_results](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/studentenwerk_audit.png?raw=true)

### Mijn versie

Mijn versie van de pagina.

![remake_studentenwerk](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/studentenwerk_performance.png?raw=true)

Resultaten van deze pagina.
![last_audit](https://github.com/NathanKeyzer/project-2-1819/blob/master/public/images/last_audit.png?raw=true)



---
