# Rapport SEO Boxcom - Mai 2026

Periode principale : 29 mars 2026 au 31 mai 2026  
Baseline analysee : 1 septembre 2025 au 28 mars 2026  
Exports disponibles : Google Search Console performance, GA4 acquisition overview, Ahrefs referring domains/disavow  
Exports manquants : indexation GSC detaillee, erreurs 404, mapping de migration, crawl technique, PageSpeed/Core Web Vitals

## 1. Synthese executive

Le rapport peut etre partiellement finalise avec les exports fournis. Les donnees GSC couvrent bien la baseline demandee de septembre 2025 a mai 2026. La performance organique montre un signal contraste :

- Les impressions moyennes par jour augmentent legerement apres le 29 mars : 71,9/jour contre 68,9/jour sur la baseline.
- Les clics moyens par jour baissent fortement : 1,31/jour contre 2,66/jour sur la baseline.
- Le CTR chute de 3,86% a 1,83%, ce qui indique que Boxcom apparait encore dans Google mais attire moins de clics.
- La position moyenne reste globalement stable/amelioree : 10,52 sur la periode principale contre 11,04 sur la baseline.
- La page `/digital-marketing` est une opportunite prioritaire : 1 920 impressions, position 7,56, mais seulement 5 clics et 0,26% de CTR.

Conclusion principale : le probleme prioritaire n'est pas uniquement l'indexation ou le ranking moyen. Le signal le plus critique est la baisse du CTR, combinee a des pages/requetes visibles mais peu cliquables. La migration reste un risque non cloture car les exports fournis ne contiennent pas les erreurs 404, les redirections 301 ni le mapping anciennes URLs -> nouvelles URLs.

## 2. KPIs principaux

### 2.1 Baseline vs periode principale

| Periode | Jours | Clics GSC | Impressions GSC | CTR | Position moyenne |
| --- | ---: | ---: | ---: | ---: | ---: |
| Baseline 01/09/2025-28/03/2026 | 209 | 556 | 14 408 | 3,86% | 11,04 |
| Periode 29/03/2026-31/05/2026 | 64 | 84 | 4 599 | 1,83% | 10,52 |

Lecture :

- Clics/jour : 2,66 sur la baseline contre 1,31 apres le 29 mars, soit environ -50,6%.
- Impressions/jour : 68,9 sur la baseline contre 71,9 apres le 29 mars, soit environ +4,3%.
- CTR : baisse de 3,86% a 1,83%, soit environ -52,7%.
- Position moyenne : legere amelioration de 11,04 a 10,52, mais insuffisante pour compenser le CTR faible.

### 2.2 Evolution mensuelle GSC

| Mois | Clics | Impressions | CTR | Position moyenne | Commentaire |
| --- | ---: | ---: | ---: | ---: | --- |
| Septembre 2025 | 85 | 2 636 | 3,22% | 18,92 | Baseline ancien historique |
| Octobre 2025 | 57 | 1 573 | 3,62% | 11,57 | Volume plus faible |
| Novembre 2025 | 80 | 1 580 | 5,06% | 9,60 | CTR fort |
| Decembre 2025 | 59 | 1 586 | 3,72% | 13,08 | Stabilisation |
| Janvier 2026 | 78 | 2 482 | 3,14% | 9,67 | Reprise impressions |
| Fevrier 2026 | 96 | 2 563 | 3,75% | 6,47 | Meilleure position moyenne |
| Mars 2026 | 106 | 2 197 | 4,82% | 7,43 | Clics en hausse, impressions en baisse |
| Avril 2026 | 45 | 2 036 | 2,21% | 9,82 | Debut de baisse CTR |
| Mai 2026 | 34 | 2 354 | 1,44% | 11,27 | CTR tres faible malgre impressions |

### 2.3 GA4 disponible

L'export GA4 fourni est un export "Vue d'ensemble de l'acquisition", pas un rapport SEO complet par landing page et conversion.

| Indicateur GA4 | Periode exportee | Valeur |
| --- | --- | ---: |
| Sessions Organic Search | 01/09/2025-31/05/2026 | 391 |
| Nouveaux utilisateurs Organic Search | 01/09/2025-31/05/2026 | 275 |
| Source manuelle `google` | 01/09/2025-31/05/2026 | 367 sessions |

Limite : il manque les conversions, l'engagement par landing page organique et une segmentation propre de la periode 29 mars-31 mai par canal organique.

## 3. Reponses aux questions sur le rapport de mars

### 3.1 Baisse des impressions de 29% entre fevrier et mars

Avec l'export GSC fourni, la baisse fevrier -> mars est de 14,3% sur les impressions : 2 563 impressions en fevrier contre 2 197 en mars. Les clics augmentent toutefois de 96 a 106, et le CTR passe de 3,75% a 4,82%.

Il y a donc un ecart entre le chiffre annonce dans le rapport de mars (-29%) et l'export fourni. Les causes possibles sont :

- Le rapport de mars utilisait une autre periode de comparaison.
- Le rapport etait filtre par pays, type de page, requetes hors marque ou appareil.
- L'export actuel couvre toute la propriete web sans le meme filtre.

Analyse actuelle : la baisse d'impressions de mars n'est pas forcement negative a elle seule, car les clics et le CTR ont progresse. La vraie degradation apparait surtout en avril et mai, ou les impressions restent presentes mais le CTR chute fortement.

### 3.2 Migration, redirections 301 et anciennes URLs

Ce qui est visible dans le code :

- `vercel.json` contient seulement deux redirections 301 : `/index.php` et `/index.php/` vers `/`.
- `next.config.mjs` contient une redirection permanente de `/admin` vers le backend WordPress.
- Le sitemap expose les pages principales : accueil, digital marketing, creative content, web development, lead generation, projects, about, blog, privacy policy.

Ce qui ressort des exports GSC :

- Plusieurs variantes de domaine apparaissent : `https://www.box-com.com/`, `https://box-com.com/`, `http://box-com.com/`, `https://en.box-com.com/`.
- Des URLs de demo ou backend apparaissent dans GSC, par exemple `venizia.demo.box-com.com` et `backend-boxcom-site.box-com.com`.

Conclusion : l'analyse de migration n'est pas encore complete. Les signaux GSC montrent qu'il faut verifier la canonicalisation, les sous-domaines de demo/backend indexables et les redirections de l'ancien site. Sans export 404 et mapping d'URLs, on ne peut pas confirmer que les 301 sont correctement couvertes.

### 3.3 Backlinks

Donnees disponibles :

- Captures Ahrefs "Referring domains" fournies le 03/06/2026.
- Ahrefs affiche 215 domaines referents sur le profil `box-com.com/`.
- Fichier de disavow fourni : `exports/backlinks/disavow-box-com-updated-ahrefs.txt`.
- Le fichier contient 193 domaines uniques, sans doublon, au format `domain:`.

Analyse :

- Les domaines spam identifies dans Ahrefs ont ete ajoutes au fichier de disavow et soumis dans Google Search Console.
- L'objectif est de demander a Google d'ignorer ces liens artificiels ou toxiques dans l'evaluation du profil de backlinks de Boxcom.
- Ces domaines spam sont principalement des domaines marques `SPAM` par Ahrefs ou des domaines avec motifs artificiels lies au SEO, backlinks, PBN, guest posts ou rank boosting.
- Le disavow ne supprime pas physiquement les liens : il indique a Google de ne pas les prendre en compte.
- L'effet peut prendre du temps, car Google traite le fichier progressivement lors du recrawl des liens.

Domaines de qualite ou a conserver :

- `glassdoor.com`
- `example3.com`
- `medias24.com`
- `oraston.ma`
- `digitaloutloud.com`
- `marathiladies.com`
- `nexusnext.agency`
- `wimpact.ma`
- `stag.ma`
- `find.co.in`

Point d'attention : `example3.com` apparait actuellement dans le fichier de disavow archive. S'il est confirme comme domaine de qualite, il faut le retirer du fichier de disavow avant tout nouvel envoi.

Recommandation :

- Conserver le disavow deja soumis uniquement pour les domaines clairement spam.
- Surveiller Ahrefs et GSC dans les 4 a 8 semaines suivant l'envoi du disavow.
- Retirer du disavow tout domaine confirme comme legitime ou utile.
- Exporter la liste complete des backlinks Ahrefs pour identifier les liens pointant vers d'anciennes URLs et les recuperer avec des redirections 301.

Evidence archivee :

- `exports/backlinks/disavow-box-com-updated-ahrefs.txt`
- `assets/backlinks/ahrefs-referring-domains-page-1.jpeg`
- `assets/backlinks/ahrefs-referring-domains-page-2.jpeg`
- `assets/backlinks/ahrefs-referring-domains-page-3.jpeg`

### 3.4 Recommandations concretes

Les recommandations doivent cibler en priorite les pages deja visibles mais sous-performantes en CTR :

| Priorite | Page / sujet | Donnee GSC | Action concrete |
| --- | --- | --- | --- |
| P1 | `/digital-marketing` | 1 920 impressions, position 7,56, CTR 0,26% | Recrire title/meta, renforcer H1, ajouter sections SEO ciblees |
| P1 | Accueil | Plus gros volume de clics et impressions | Consolider canonical `www`, clarifier title oriente agence digitale Casablanca/Maroc |
| P1 | `https://en.box-com.com/` | 2 423 impressions, CTR 1,98% | Verifier pertinence de l'indexation EN et hreflang/canonical |
| P2 | `/projects` | 202 impressions, 0 clic, position 10,36 | Ajouter title oriente portfolio/case studies agence digitale |
| P2 | Requetes "boite de communication" | 156 impressions, 0 clic, position 66 | Creer ou enrichir une page ciblee communication/branding |
| P2 | Requete "agence de communication casablanca" | 61 impressions, 4 clics, position 33,43 | Creer une page dediee ou renforcer la page accueil/service |

Titres proposes :

- Accueil : `Boxcom - Agence de communication digitale a Casablanca`
- Digital marketing : `Agence marketing digital a Casablanca - SEO, Ads & Social Media | Boxcom`
- Web development : `Agence web a Casablanca - Sites performants et SEO | Boxcom`
- Creative content : `Agence de contenu creatif au Maroc - Video, design et storytelling | Boxcom`
- Lead generation : `Agence lead generation au Maroc - Prospects qualifies | Boxcom`
- Projects : `Realisations Boxcom - Projets digitaux, branding et campagnes`

Pages a creer en priorite :

- `agence-communication-casablanca`
- `agence-marketing-digital-casablanca`
- `agence-web-casablanca`
- `seo-casablanca` ou une section SEO plus forte dans `/web-development`
- `creation-contenu-maroc`

## 4. Analyse des requetes

### 4.1 Requetes principales

| Requete | Clics | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| boxcom | 367 | 5 782 | 6,35% | 5,57 |
| box com | 11 | 127 | 8,66% | 9,63 |
| boxcom casablanca | 7 | 72 | 9,72% | 1,47 |
| agence de communication casablanca | 4 | 61 | 6,56% | 33,43 |
| box.com | 3 | 3 610 | 0,08% | 17,55 |

Lecture :

- La visibilite est tres dependante de la marque `boxcom`.
- Les requetes business non-marque restent faibles en clics.
- `box.com` genere beaucoup d'impressions peu qualifiees et dilue le CTR global.

### 4.2 Opportunites CTR / contenu

| Requete | Clics | Impressions | CTR | Position | Action |
| --- | ---: | ---: | ---: | ---: | --- |
| boite de communication | 0 | 156 | 0% | 66,07 | Creer contenu cible "agence/boite de communication" |
| boite de communication casablanca | 0 | 136 | 0% | 78,16 | Page locale Casablanca |
| agence de com | 0 | 71 | 0% | 74,56 | Enrichir champ lexical communication |
| boite communication | 0 | 66 | 0% | 71,79 | Meme cluster que ci-dessus |
| agence rp maroc | 0 | 53 | 0% | 9,17 | Verifier si service RP pertinent avant ciblage |

## 5. Analyse des pages

| Page | Clics | Impressions | CTR | Position | Analyse |
| --- | ---: | ---: | ---: | ---: | --- |
| `https://www.box-com.com/` | 262 | 8 118 | 3,23% | 8,48 | Page principale, bonne base |
| `https://box-com.com/` | 248 | 6 817 | 3,64% | 14,91 | Variante non-www a consolider |
| `http://box-com.com/` | 89 | 2 816 | 3,16% | 9,59 | Variante HTTP a rediriger/canonicaliser |
| `https://en.box-com.com/` | 48 | 2 423 | 1,98% | 8,23 | Verifier hreflang/canonical/strategie EN |
| `https://www.box-com.com/digital-marketing` | 5 | 1 920 | 0,26% | 7,56 | Priorite title/meta/contenu |
| `https://www.box-com.com/projects` | 0 | 202 | 0% | 10,36 | Opportunite CTR et contenu |

Point technique important : les variantes `www`, non-`www` et `http` apparaissent toutes dans GSC. Il faut confirmer que la version canonique est bien `https://www.box-com.com/` et que les autres variantes redirigent en 301.

## 6. Appareils et pays

### 6.1 Appareils

| Appareil | Clics | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| Ordinateur | 420 | 12 402 | 3,39% | 12,35 |
| Mobile | 217 | 6 281 | 3,45% | 8,34 |
| Tablette | 3 | 324 | 0,93% | 5,87 |

Lecture : le mobile n'est pas le canal le plus faible en CTR dans GSC. Il reste toutefois indispensable de mesurer PageSpeed/Core Web Vitals, car la performance mobile n'a pas ete fournie dans les exports.

### 6.2 Pays

| Pays | Clics | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| Maroc | 464 | 4 557 | 10,18% | 14,05 |
| France | 45 | 2 464 | 1,83% | 7,61 |
| Canada | 15 | 646 | 2,32% | 8,79 |
| Allemagne | 10 | 1 217 | 0,82% | 7,53 |
| Emirats Arabes Unis | 8 | 70 | 11,43% | 6,80 |

Lecture : le Maroc genere la majorite des clics et un CTR fort. La France et l'Allemagne ont des impressions avec CTR faible, a analyser selon la strategie internationale.

## 7. Concurrence

Analyse SERP indicative effectuee sur les requetes "agence de communication Casablanca", "agence marketing digital Casablanca" et "agence web Casablanca".

Concurrents directs observes :

- MaxMind : agence communication digitale et marketing a Casablanca.
- BrandUI : agence communication digitale, marketing digital, branding, SEO et agence web a Casablanca.
- Hooked Digital : agence marketing digital a Casablanca, SEO, Ads et leads.
- Radium Digital : agence digitale a Casablanca, SEO, social media, contenu et web.
- Eleven Media : agence web et communication digitale a Casablanca.
- PerfOne : agence performance marketing a Casablanca.

Lecture concurrentielle :

- Les concurrents ont souvent des pages explicitement ciblees sur "agence marketing digital Casablanca" ou "agence digitale Casablanca".
- Boxcom a des pages services existantes, mais les titles et contenus doivent mieux cibler les requetes business locales.
- La priorite est de transformer les pages services en pages d'atterrissage SEO plus explicites, sans attendre de creer trop de nouvelles pages.

Sources SERP consultees :

- https://maxmind.ma/
- https://www.brandui.ma/
- https://hookeddigital.net/
- https://radiumdigital.ma/
- https://elevenmedia.ma/
- https://www.perf-one.com/

## 8. Core Web Vitals et performance mobile

Non disponible dans les exports fournis.

Actions a faire pour finaliser cette section :

- Exporter PageSpeed Insights mobile et desktop pour l'accueil.
- Exporter PageSpeed Insights pour `/digital-marketing`, `/web-development`, `/creative-content`, `/lead-generation`.
- Recuperer les donnees GSC Core Web Vitals mobile/desktop.
- Mesurer LCP, INP, CLS, TTFB et poids JS/images.

Pages prioritaires a auditer :

- `https://www.box-com.com/`
- `https://www.box-com.com/digital-marketing`
- `https://www.box-com.com/web-development`
- `https://www.box-com.com/creative-content`
- `https://www.box-com.com/lead-generation`

## 9. Suivi des recommandations de mars

| Recommandation | Statut observe | Commentaire |
| --- | --- | --- |
| Creer des pages de service | Partiellement implemente | Les pages principales existent : digital marketing, web development, creative content, lead generation |
| Ameliorer les titres | Partiellement implemente | Des metadata/canonicals existent, mais les titles doivent etre plus precis et orientes requetes locales |
| Analyse backlinks | Partiellement disponible | Ahrefs indique 215 domaines referents; disavow de 193 domaines uniques fourni et archive |
| Analyse concurrence | Ajoutee partiellement | Analyse SERP indicative, positions exactes a confirmer avec rank tracker |
| Core Web Vitals mobile | Non disponible | Export PSI/GSC CWV manquant |
| Migration/redirections | Partiellement verifiee | Redirections visibles limitees a `/index.php` et `/admin`; mapping complet manquant |

## 10. Plan d'action juin 2026

| Priorite | Action | Impact attendu | Responsable |
| --- | --- | --- | --- |
| P1 | Corriger/canonicaliser les variantes `http`, non-`www`, `www` | Consolider les signaux SEO | Technique |
| P1 | Verifier et bloquer/indexer correctement `venizia.demo.box-com.com` et `backend-boxcom-site.box-com.com` | Eviter pollution index et impressions non qualifiees | Technique |
| P1 | Optimiser le title/meta/H1 de `/digital-marketing` | Ameliorer CTR sur 1 920 impressions | SEO + contenu |
| P1 | Exporter les erreurs 404 GSC et mapper anciennes URLs -> nouvelles URLs | Cloturer le risque migration | SEO + technique |
| P1 | Recuperer backlinks vers anciennes URLs avec redirections 301 | Recuperer autorite perdue | SEO + technique |
| P2 | Creer ou renforcer une page "agence communication Casablanca" | Cibler requetes business non-marque | SEO + contenu |
| P2 | Optimiser `/projects` pour le CTR | Transformer position ~10 en clics | SEO + contenu |
| P2 | Auditer Core Web Vitals mobile | Identifier blocages performance | Technique |

## 11. Donnees encore necessaires

Pour finaliser une version complete et defensive du rapport, il faut ajouter :

- Export GSC "Pages indexees / non indexees".
- Export GSC erreurs 404.
- Mapping anciennes URLs -> nouvelles URLs.
- Liste des redirections 301 deployees.
- Export backlinks complet avec URLs sources, URLs cibles, ancres, statut dofollow/nofollow et liens perdus.
- Export PageSpeed Insights/Core Web Vitals.
- GA4 acquisition organique par landing page, conversions et engagement.
- Positions concurrentielles exactes par mot-cle cible.
