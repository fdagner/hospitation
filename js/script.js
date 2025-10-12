// XSS-Prävention: HTML escapen
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Kategorien-Daten mit Tags aus dem PDF
const kategorien = {
    K: {
        titel: 'Effektive Klassenführung',
        farbe: 'purple',
        beschreibung: 'Grundlage lernwirksamen Unterrichts',
        unterkategorien: {
            'K.1': {
                titel: 'Präventive Maßnahmen & Regeln',
                tags: [
                    'Regeln zum Umgang mit Endgeräten werden bekannt gemacht',
                    'Regeln zum Umgang mit Endgeräten sind im Alltag sichtbar',
                    'Regeln zum Umgang mit Endgeräten werden konsequent eingefordert',
                    'Richtlinien zur digitalen Kommunikation werden klar festgelegt',
                    'Richtlinien zur digitalen Kommunikation werden konsequent umgesetzt',
                    'Erreichbarkeit wird durch Richtlinien geregelt',
                    'Lehrkraft ist während digitaler Arbeitsphasen präsent',
                    'Lehrkraft klärt offene Fragen in digitalen Phasen',
                    'Lehrkraft achtet auf Sichtbarkeit der Bildschirme',
                    'Aktivitäten der Schülerinnen und Schüler werden im digitalen Raum begleitet',
                    'Probleme werden frühzeitig erkannt',
                    'Maßnahmen bei Störungen werden ergriffen',
                    'Ablenkungspotenzial wird durch Regelungen minimiert',
                    'Regelung für Geräteverwahrung wird in Phasen ohne Nutzung klar gemacht',
                    'Klare Phasen ohne Nutzung digitaler Geräte werden etabliert',
                    'School-wide Regeln zum Umgang mit Geräten werden etabliert',
                    'Rituale für digitale Kommunikation werden eingeführt',
                    'Absprachen werden konsequent umgesetzt',
                    'Wertschätzende Beziehung zwischen Lehrkraft und Schülerinnen und Schüler wird gepflegt',
                    'Vertrauensvolles Lernklima wird geschaffen',
                    'Positive Lernatmosphäre wird gefördert',
                    'Störungen treten selten auf',
                    'Unterrichtszeit wird effektiv genutzt',
                    'Klassen- und schulübergreifende Regeln werden bekannt gemacht'
                ]
            },
            'K.2': {
                titel: 'Aufbereitete Materialien & Routinen',
                tags: [
                    'Einheitliche Strukturen werden für den Unterricht festgelegt',
                    'Systematik zur Dateiablage wird etabliert',
                    'Einheitliche Benennung von Dokumenten wird eingeführt',
                    'Verwendete Software wird schulweit festgelegt',
                    'Digitale Lernumgebung wird vorbereitet',
                    'Materialien werden leicht zugänglich gemacht',
                    'Materialien werden sorgfältig aufbereitet',
                    'Verteilen von Materialien läuft reibungslos über Plattformen',
                    'Einsammeln von Aufgaben funktioniert über Lernplattform',
                    'Bearbeitungsfristen werden klar kommuniziert',
                    'Aufgaben werden strukturiert verteilt',
                    'Digitale Arbeitsweisen werden schrittweise eingeführt',
                    'Routinen werden etabliert',
                    'Bedienkompetenzen werden eingeübt',
                    'Systematische Einführung digitaler Tools erfolgt',
                    'Fokus bleibt auf Lerninhalten',
                    'Orientierung wird für Schülerinnen und Schüler gegeben',
                    'Orientierung wird für Lehrkräfte gegeben',
                    'Jahrgangsstufenübergreifende Standards werden vereinbart',
                    'Schulweite Vereinbarungen werden erkennbar gemacht',
                    'Vorbereitete Lernumgebung unterstützt Arbeitsabläufe',
                    'Lernende sind erkennbar mit Inhalten beschäftigt',
                    'Lernhindernisse werden schnell beseitigt'
                ]
            },
            'K.3': {
                titel: 'Lernhindernisse beseitigen',
                tags: [
                    'Lernende sind mit Lerninhalten beschäftigt',
                    'Konzentrierte Auseinandersetzung wird erkennbar',
                    'Lernhindernisse werden schnell beseitigt',
                    'Unterrichtszeit wird effektiv genutzt',
                    'Reibungslose Arbeitsabläufe werden gewährleistet',
                    'Wenige Störungen treten auf',
                    'Störungen werden angemessen begegnet',
                    'Positives Lernklima wird geschaffen',
                    'Lernzeit wird nicht verschwendet',
                    'Technische Probleme werden zügig gelöst',
                    'Fragen werden zeitnah beantwortet',
                    'Unterstützung ist verfügbar',
                    'Selbstständiges Arbeiten wird ermöglicht',
                    'Klare Arbeitsanweisungen werden gegeben',
                    'Struktur gibt Sicherheit',
                    'Übergänge sind fließend',
                    'Wartezeiten werden vermieden',
                    'Material ist griffbereit',
                    'Technische Ausstattung funktioniert zuverlässig',
                    'Fokussierung auf Lernprozess wird gehalten',
                    'Effektive Nutzung der Lernzeit wird erreicht',
                    'Lernende werden mit Inhalten beschäftigt gehalten',
                    'Hindernisse werden proaktiv beseitigt'
                ]
            }
        }
    },
    1: {
        titel: 'Veranschaulichung',
        farbe: 'blue',
        beschreibung: 'Strukturierung und multimediale Darstellung',
        unterkategorien: {
            '1.1': {
                titel: 'Strukturierung & Bereitstellung',
                tags: [
                    'Arbeitsaufträge werden klar visualisiert',
                    'Unterrichtsinhalte werden strukturiert bereitgestellt',
                    'Bereitstellung ist nachvollziehbar',
                    'Erwartungen werden transparent kommuniziert',
                    'Anforderungen werden klar gemacht',
                    'Kursabläufe werden übersichtlich dargestellt',
                    'Zwischenziele werden definiert',
                    'Abgabetermine werden sichtbar gemacht',
                    'Lernziele werden kommuniziert',
                    'Orientierung wird gegeben',
                    'Roter Faden wird erkennbar',
                    'Phasen werden strukturiert',
                    'Übergänge werden markiert',
                    'Zeitplan wird transparent',
                    'Materialien werden geordnet',
                    'Aufgaben werden klar formuliert',
                    'Schrittweise Anleitung wird gegeben',
                    'Visuelle Unterstützung wird bereitgestellt',
                    'Digitale Organisation wird erkennbar',
                    'Lernplattform wird genutzt',
                    'Strukturierung der Lehr- und Lerninhalte wird unterstützt',
                    'Klare Visualisierung von Arbeitsaufträgen erfolgt',
                    'Nachvollziehbare Strukturierung wird gewährleistet'
                ]
            },
            '1.2': {
                titel: 'Multimediale Unterstützung',
                tags: [
                    'Visuelle Materialien werden eingesetzt',
                    'Auditive Materialien werden genutzt',
                    'Kombination visuell-auditiv wird angewendet',
                    'Abstrakte Konzepte werden visualisiert',
                    'Visualisierungen unterstützen Verständnis',
                    'Simulationen werden gezeigt',
                    'Interaktive Modelle werden im Einsatz',
                    'Theoretische Konzepte werden nachvollziehbar gemacht',
                    'Komplexe Inhalte werden anschaulich dargestellt',
                    'Multimediale Angebote werden bereitgestellt',
                    'Videos unterstützen Lernprozess',
                    'Bilder veranschaulichen Inhalte',
                    'Grafiken erleichtern Verständnis',
                    'Animationen werden genutzt',
                    'Interaktive Darstellungen werden verwendet',
                    'Digitale Medien fördern Verstehen',
                    'Aufmerksamkeit wird gelenkt',
                    'Interesse wird geweckt',
                    'Anschaulichkeit wird gegeben',
                    'Informationsverarbeitung wird unterstützt',
                    'Multimediale Angebote fördern Lernprozess',
                    'Abstrakte Konzepte werden durch Simulationen erklärt',
                    'Interaktive Modelle machen Inhalte greifbar'
                ]
            },
            '1.3': {
                titel: 'Veranschaulichung von Lernergebnissen',
                tags: [
                    'Schülerergebnisse werden präsentiert',
                    'Videos zeigen Lernergebnisse',
                    'Bilder dokumentieren Ergebnisse',
                    'eBooks werden als Ergebnisformat genutzt',
                    'Digitale Produkte werden sichtbar gemacht',
                    'Lernprodukte werden veranschaulicht',
                    'Präsentationen der Ergebnisse werden gehalten',
                    'Sichtbare Dokumentation wird erstellt',
                    'Ergebnisse werden gewürdigt',
                    'Digitale Galerie wird eingerichtet',
                    'Portfolio wird genutzt',
                    'Lernfortschritte werden sichtbar gemacht',
                    'Produkte werden geteilt',
                    'Öffentliche Präsentation wird ermöglicht',
                    'Peer-Viewing wird ermöglicht',
                    'Ergebnisvielfalt wird erkennbar',
                    'Kreativität wird gezeigt',
                    'Leistungen werden wertgeschätzt',
                    'Multimediale Ergebnisformen werden verwendet',
                    'Verschiedene Präsentationsformate werden angeboten',
                    'Sichtbare Präsentation von Schülerergebnissen erfolgt',
                    'Strukturierte Sicherung von Ergebnissen wird unterstützt',
                    'Vertiefung von Unterrichtsinhalten wird ermöglicht'
                ]
            },
            '1.4': {
                titel: 'Ergebnissicherung',
                tags: [
                    'Materialien zur Vor- und Nachbereitung werden bereitgestellt',
                    'Unterrichtsinhalte werden gesichert',
                    'Strukturierte Sicherung wird durchgeführt',
                    'Vertiefung wird ermöglicht',
                    'Unterrichtsdokumentation wird erstellt',
                    'Dateiablage wird organisiert',
                    'Lernplattform wird genutzt',
                    'Hefteinträge werden mit Hyperlinks ergänzt',
                    'Ergänzende Materialien werden verlinkt',
                    'Wiederholung wird unterstützt',
                    'Lernen wird gefördert',
                    'Nachbereitung wird möglich gemacht',
                    'Vorbereitung wird erleichtert',
                    'Materialzugriff wird jederzeit ermöglicht',
                    'Digitale Ablage wird strukturiert',
                    'Inhalte werden abrufbar gemacht',
                    'Sicherung wird nachhaltig gestaltet',
                    'Übersichtliche Organisation wird gewährleistet',
                    'Materialien werden verfügbar gehalten',
                    'Langfristige Nutzung wird ermöglicht',
                    'Strukturierte Sicherung und Vertiefung von Inhalten erfolgt',
                    'Materialbereitstellung zur Vor- und Nachbereitung wird genutzt',
                    'Unterstützende Wiederholung der Inhalte wird angeboten'
                ]
            }
        }
    },
    2: {
        titel: 'Lebensweltbezug',
        farbe: 'green',
        beschreibung: 'Schülerorientierung und Medienreflexion',
        unterkategorien: {
            '2.1': {
                titel: 'Mediennutzung & Reflexion',
                tags: [
                    'Mediennutzung wird zu gezielten Lernzwecken gefördert',
                    'Mediennutzung geht über private Unterhaltungszwecke hinaus',
                    'Alltägliches Medienhandeln wird reflektiert',
                    'Gezielte Reflexion des Mediennutzungsverhaltens erfolgt',
                    'Mediennutzungsverhalten wird thematisiert',
                    'Präventionsarbeit wird erkennbar durchgeführt',
                    'Übermäßiger Medienkonsum wird als Thema aufgegriffen',
                    'Problematische Inhalte werden aufgegriffen',
                    'Herausforderungen der digitalen Welt werden thematisiert',
                    'Kritische Auseinandersetzung mit Medien wird gefördert',
                    'Bewusster Medienumgang wird gelehrt',
                    'Reflexion der eigenen Nutzung wird angeregt',
                    'Medienerfahrungen werden berücksichtigt',
                    'Nutzungsgewohnheiten werden angesprochen',
                    'Risiken der Mediennutzung werden thematisiert',
                    'Chancen der Mediennutzung werden aufgezeigt',
                    'Verantwortungsvoller Umgang wird vermittelt',
                    'Selbstreflexion wird gefördert',
                    'Medienbildung wird integriert',
                    'Sensibilisierung für Medienrisiken erfolgt',
                    'Gezielte Präventionsarbeit gegen problematische Inhalte wird betrieben',
                    'Alltägliches Verhalten wird reflektiert',
                    'Medienkonsum wird überprüft'
                ]
            },
            '2.2': {
                titel: 'Aktuelle & relevante Themen',
                tags: [
                    'Aktuelle Themen werden aufgegriffen',
                    'Relevante Inhalte für Schülerinnen und Schüler werden ausgewählt',
                    'Realitätsnahe Kontexte werden genutzt',
                    'Lebensweltbezug wird hergestellt',
                    'Interesse wird geweckt',
                    'Lernmotivation wird gesteigert',
                    'Praxisnahe Beispiele werden eingesetzt',
                    'Lebenswirklichkeit wird berücksichtigt',
                    'Authentische Situationen werden behandelt',
                    'Bezug zur Gegenwart wird hergestellt',
                    'Gesellschaftliche Relevanz wird thematisiert',
                    'Alltagsbezug wird vorhanden gehalten',
                    'Schülerorientierung wird erkennbar',
                    'Themen werden aus Schülerperspektive behandelt',
                    'Bedeutsamkeit wird klar gemacht',
                    'Anwendungsbezug wird gegeben',
                    'Transfer in Alltag wird möglich gemacht',
                    'Sinnhaftigkeit wird erkennbar',
                    'Zukunftsorientierung wird integriert',
                    'Aktualität wird gegeben',
                    'Aktuelle und relevante Themen werden aufgegriffen',
                    'Lernen wird an realitätsnahen Kontexten ausgerichtet',
                    'Interesse der Lernenden wird geweckt'
                ]
            },
            '2.3': {
                titel: 'Authentische Materialien',
                tags: [
                    'Zeitungsartikel werden genutzt',
                    'Fernsehsendungen werden eingebunden',
                    'Podcasts werden im Unterricht verwendet',
                    'Videokanäle werden integriert',
                    'Wikis werden als Quelle genutzt',
                    'Websites werden bewusst integriert',
                    'Aus dem Alltag bekannte Quellen werden verwendet',
                    'Bewusste Integration von Quellen erfolgt',
                    'Reflektierte Nutzung von Medien wird gefördert',
                    'Recherchemöglichkeiten werden gegeben',
                    'Verschiedene Informationsquellen werden zugänglich gemacht',
                    'Zugang zu Lernangeboten wird ermöglicht',
                    'Authentisches Material wird eingesetzt',
                    'Originale Quellen werden genutzt',
                    'Reale Medien werden integriert',
                    'Vielfältige Formate werden angeboten',
                    'Digitale Ressourcen werden bereitgestellt',
                    'Medienvielfalt wird erkennbar',
                    'Verschiedene Medientypen werden verwendet',
                    'Quellenvielfalt wird gegeben',
                    'Recherchemöglichkeiten und Wissensquellen werden integriert',
                    'Bekannte Alltagsquellen werden reflektiert genutzt',
                    'Zeitungsartikel und Podcasts werden als authentische Materialien eingebunden'
                ]
            },
            '2.4': {
                titel: 'Mündige Teilhabe',
                tags: [
                    'Gesellschaftliche Teilhabe wird thematisiert',
                    'Wichtige Kompetenzen werden aufgebaut',
                    'Mündige Teilhabe wird gefördert',
                    'Lernförderliche Mediennutzung wird ermöglicht',
                    'Individuelle Interessen werden berücksichtigt',
                    'Verschiedene Lernwege werden möglich gemacht',
                    'Informationsquellen werden zugänglich gemacht',
                    'Lernangebote werden vielfältig angeboten',
                    'Recherchemöglichkeiten werden vorhanden gehalten',
                    'Wissensquellen werden bekannt gemacht',
                    'Kindern und Jugendlichen vertraute Quellen werden integriert',
                    'Demokratische Teilhabe wird unterstützt',
                    'Kritisches Denken wird gefördert',
                    'Meinungsbildung wird unterstützt',
                    'Medienmündigkeit wird entwickelt',
                    'Verantwortung wird übernommen gelehrt',
                    'Partizipation wird ermöglicht',
                    'Selbstbestimmung wird gefördert',
                    'Urteilsfähigkeit wird gestärkt',
                    'Emanzipation wird unterstützt',
                    'Aufbau wichtiger Kompetenzen zur mündigen Teilhabe erfolgt',
                    'Individuelle Interessen und Lernwege werden berücksichtigt',
                    'Lernförderliche Mediennutzung ermöglicht mündige Gesellschaftsteilhabe'
                ]
            }
        }
    },
    3: {
        titel: 'Methodenvielfalt',
        farbe: 'yellow',
        beschreibung: 'Variation der Lehr- und Lernmethoden',
        unterkategorien: {
            '3.1': {
                titel: 'Methodisches Repertoire',
                tags: [
                    'Verschiedene Methoden werden eingesetzt',
                    'Sozialformen werden variiert',
                    'Didaktisch-methodisches Repertoire wird erkennbar',
                    'Flexibler Einsatz von Methoden erfolgt',
                    'Methodenvielfalt wird gegeben',
                    'Lehrerzentrierte Phasen werden integriert',
                    'Selbstorganisation wird gefördert',
                    'Kooperation wird ermöglicht',
                    'Unterschiedliche Zugänge zu Inhalten werden angeboten',
                    'Verschiedene Aufgabenformate werden verwendet',
                    'Interaktive Formate werden eingesetzt',
                    'Kollaborative Szenarien werden genutzt',
                    'Kreative Aufgaben werden gestellt',
                    'Vertiefte Auseinandersetzung wird ermöglicht',
                    'Erstellung von Ergebnissen wird gefördert',
                    'Aktive Beteiligung wird erreicht',
                    'Vielfältiges Angebot an Lernszenarien wird präsentiert',
                    'Lernszenarien werden abwechslungsreich gestaltet',
                    'Methodenwechsel wird erkennbar',
                    'Angemessene Variation der Methoden erfolgt',
                    'Erweiterung des didaktisch-methodischen Repertoires wird durch digitale Medien erreicht',
                    'Aktive Beteiligung durch interaktive Formate wird gefördert',
                    'Einbindung der Schülerinnen und Schüler in vertiefte Auseinandersetzung erfolgt'
                ]
            },
            '3.2': {
                titel: 'Interaktive Formate',
                tags: [
                    'Interaktive Elemente werden vorhanden gehalten',
                    'Gamification-Ansätze werden angewendet',
                    'Motivierende Auseinandersetzung wird ermöglicht',
                    'Spielerische Elemente werden integriert',
                    'Interaktive Aufgaben werden gestellt',
                    'Kollaborative Formate werden genutzt',
                    'Kreative Aufgabenstellungen werden angeboten',
                    'Engagement wird gefördert',
                    'Aktivierende Methoden werden eingesetzt',
                    'Teilnahme wird gestärkt',
                    'Beteiligung ist hoch',
                    'Interesse wird aufrechterhalten',
                    'Konzentration bleibt erhalten',
                    'Motivation wird erkennbar',
                    'Spaß am Lernen wird geschaffen',
                    'Herausforderung wird angemessen gestaltet',
                    'Erfolgserlebnisse werden möglich gemacht',
                    'Feedback wird integriert',
                    'Fortschritt wird sichtbar gemacht',
                    'Belohnung wird vorhanden gehalten',
                    'Motivierende Auseinandersetzung durch interaktive Elemente und Gamification erfolgt',
                    'Variation der Lernaktivitäten steigert Motivation',
                    'Abwechslungsreicher Medieneinsatz wird genutzt'
                ]
            },
            '3.3': {
                titel: 'Rhythmisierung',
                tags: [
                    'Wechsel der Lernaktivitäten wird geplannt',
                    'Abwechslungsreiches Angebot wird geschaffen',
                    'Rhythmisierung wird erkennbar',
                    'Konzentration wird aufrechterhalten',
                    'Verschiedene Aufgabenformate werden gewechselt',
                    'Phasenwechsel wird strukturiert',
                    'Tempovariation wird vorhanden',
                    'Aktivitätswechsel wird geplant',
                    'Methodenwechsel wird sinnvoll eingesetzt',
                    'Sozialformenwechsel wird durchgeführt',
                    'Abwechslung wird gegeben',
                    'Monotonie wird vermieden',
                    'Dynamik im Unterricht wird geschaffen',
                    'Spannung wird aufrechterhalten',
                    'Ermüdung wird vermieden',
                    'Aufmerksamkeit wird gesteuert',
                    'Pausen werden eingeplant',
                    'Intensitätswechsel wird genutzt',
                    'Balance wird vorhanden gehalten',
                    'Timing wird angemessen',
                    'Rhythmisierung des Unterrichts durch Wechsel zwischen Aufgabenformaten erfolgt',
                    'Abwechslungsreiches Angebot an Lernszenarien wird geschaffen',
                    'Variation der Methoden hält Konzentration aufrecht'
                ]
            },
            '3.4': {
                titel: 'Analog-digital Verschränkung',
                tags: [
                    'Analoge Settings werden angereichert',
                    'Digitale und analoge Verschränkung wird realisiert',
                    'Diskussionsrunden werden mit digitaler Unterstützung ergänzt',
                    'Kooperative Arbeitsprozesse werden ermöglicht',
                    'Kooperation wird auch über Unterricht hinaus gefördert',
                    'Zusätzliche Gestaltungsmöglichkeiten werden genutzt',
                    'Über analoge Möglichkeiten hinausgehende Ansätze werden eingesetzt',
                    'Ergänzung analoger Methoden erfolgt',
                    'Peer-Feedback wird digital und analog gegeben',
                    'Digitale Werkzeuge werden für Feedback genutzt',
                    'Persönliches Gespräch wird mit analogen Hilfsmitteln geführt',
                    'Präsentation von Lernprodukten wird ermöglicht',
                    'Asynchrones Feedback wird als Teil des Prozesses integriert',
                    'Zugriff auf Lernressourcen wird schnellen ermöglicht',
                    'Materialvielfalt wird genutzt',
                    'Kombinierte Ansätze werden angewendet',
                    'Hybride Lernformen werden gestaltet',
                    'Medienintegration wird gelungen',
                    'Sinnvolle Verknüpfung analoger und digitaler Settings erfolgt',
                    'Kooperative Prozesse werden über den Unterricht hinaus unterstützt',
                    'Schneller Zugriff auf Lernmaterialien reichert analoge Settings an',
                    'Peer-Feedback wird durch kollaborative Werkzeuge ermöglicht',
                    'Gegenseitige Präsentation von Produkten wird gefördert'
                ]
            }
        }
    },
    4: {
        titel: 'Individualisiertes Lernen',
        farbe: 'orange',
        beschreibung: 'Differenzierung und Unterstützung',
        unterkategorien: {
            '4.1': {
                titel: 'Lernstandserfassung',
                tags: [
                    'Tests werden mit automatischer Auswertung durchgeführt',
                    'Unmittelbares Feedback wird ermöglicht',
                    'Lernfortschritt wird verfolgt',
                    'Aufgaben werden eingereicht',
                    'Zwischenergebnisse werden sichtbar gemacht',
                    'Kompetenzstand wird erfasst',
                    'Systematische Erfassung wird durchgeführt',
                    'Wiederholte Messungen werden zu verschiedenen Zeitpunkten vorgenommen',
                    'Lernfortschritt wird sichtbar gemacht',
                    'Individuelle Entwicklung wird erkennbar',
                    'Diagnostik wird vorhanden gehalten',
                    'Lernstand wird bekannt gemacht',
                    'Datenbasierte Entscheidungen werden getroffen',
                    'Regelmäßige Überprüfung wird durchgeführt',
                    'Dokumentation des Fortschritts wird erstellt',
                    'Transparenz über Leistung wird gegeben',
                    'Selbsteinschätzung wird möglich gemacht',
                    'Vergleich über Zeit wird ermöglicht',
                    'Entwicklung wird nachvollziehbar',
                    'Effektive Nachverfolgung des individuellen Fortschritts erfolgt',
                    'Systematische Erfassung des Kompetenzstandes wird wiederholt durchgeführt',
                    'Automatische Auswertung von Tests ermöglicht unmittelbares Feedback',
                    'Einreichung von Aufgaben und Ergebnissen wird genutzt'
                ]
            },
            '4.2': {
                titel: 'Differenzierte Aufgaben',
                tags: [
                    'Anspruchsniveau wird angepasst',
                    'Interessen werden berücksichtigt',
                    'Verschiedene Lernzugänge werden angeboten',
                    'Bearbeitungsweisen werden variiert',
                    'Individuelle Lernvoraussetzungen werden beachtet',
                    'Kooperative Lernformen werden gefördert',
                    'Differenzierte Aufgabengestaltung wird durchgeführt',
                    'Unterschiedliche Schwierigkeitsgrade werden angeboten',
                    'Wahlmöglichkeiten werden gegeben',
                    'Verschiedene Wege zum Ziel werden ermöglicht',
                    'Individuelle Förderung wird realisiert',
                    'Herausforderung wird angemessen gestaltet',
                    'Überforderung wird vermieden',
                    'Unterforderung wird vermieden',
                    'Passende Aufgaben werden gestellt',
                    'Lernniveau wird berücksichtigt',
                    'Heterogenität wird beachtet',
                    'Individuelle Stärken werden genutzt',
                    'Persönliche Zugänge werden ermöglicht',
                    'Vielfalt der Ansätze wird gegeben',
                    'Differenzierte Aufgabengestaltung berücksichtigt Voraussetzungen',
                    'Anpassung des Anspruchsniveaus erfolgt individuell',
                    'Kooperative Formen werden gezielt gefördert'
                ]
            },
            '4.3': {
                titel: 'Feedback & Unterstützung',
                tags: [
                    'Vielfältige Unterstützung wird vorhanden gehalten',
                    'Unterstützung bei Aufgaben wird bereitgestellt',
                    'Unkomplizierte Abgabe wird möglich gemacht',
                    'Zwischenstände werden eingereicht',
                    'Zeitnahes Feedback wird gegeben',
                    'Individuelles Feedback wird erteilt',
                    'Lernprozess wird begleitet',
                    'Effektive Begleitung wird gewährleistet',
                    'Automatisiertes Feedback wird integriert',
                    'Übungen mit Rückmeldung werden angeboten',
                    'Individuelle Förderung wird durchgeführt',
                    'Kollaborative Werkzeuge werden genutzt',
                    'Direkter Austausch wird ermöglicht',
                    'Gegenseitige Kommentare werden gegeben',
                    'Bewertungen untereinander werden ermöglicht',
                    'Neue Kommunikationswege werden geschaffen',
                    'Begleitung wird über Unterricht hinaus erweitert',
                    'Erreichbarkeit wird gegeben',
                    'Hilfe wird verfügbar gehalten',
                    'Unterstützung wird angenommen',
                    'Vielfältige Unterstützungsmöglichkeiten werden bei der Bearbeitung bereitgestellt',
                    'Unkomplizierte Abgabe von Zwischenständen ermöglicht zeitnahes Feedback',
                    'Individuelle Förderung durch Übungen mit automatisiertem Feedback erfolgt'
                ]
            },
            '4.4': {
                titel: 'Selbststeuerung',
                tags: [
                    'Individuelle Lernvoraussetzungen werden berücksichtigt',
                    'Wahlfreiheit wird gegeben',
                    'Autonomie wird eingeräumt',
                    'Selbstbestimmung wird möglich gemacht',
                    'Klar strukturiertes Lernangebot wird bereitgestellt',
                    'Didaktisch aufbereitetes Angebot wird genutzt',
                    'Selbstgesteuertes Lernen wird gefördert',
                    'Projekte ermöglichen Autonomie',
                    'Podcasts werden erstellt',
                    'Blogs werden geschrieben',
                    'Erklärvideos werden produziert',
                    'Digitale Arbeitshilfen werden zugänglich gemacht',
                    'Einfacher Zugang zu Tools wird gegeben',
                    'Eigenverantwortliches Lernen wird gefördert',
                    'Individuelle Zielverfolgung wird unterstützt',
                    'Selbstorganisation wird gefördert',
                    'Eigene Lernwege werden ermöglicht',
                    'Tempo wird selbst bestimmt',
                    'Entscheidungen werden getroffen',
                    'Verantwortung wird übernommen',
                    'Unterrichtsgestaltung berücksichtigt individuelle Voraussetzungen',
                    'Wahlfreiheit und Autonomie werden bis zu einem gewissen Maß eingeräumt',
                    'Selbstgesteuertes Lernen in Projekten wird durch digitale Formate gefördert'
                ]
            }
        }
    },
    5: {
        titel: 'Kompetenzorientierte Aufgaben',
        farbe: 'red',
        beschreibung: 'Medienproduktive Formate & intelligentes Üben',
        unterkategorien: {
            '5.1': {
                titel: 'Lernprodukte erstellen',
                tags: [
                    'Aktive Auseinandersetzung mit Lerninhalten wird durch kollaborative Erstellung gefördert',
                    'Kreative Lernprodukte wie Präsentationen werden erstellt',
                    'Comics werden als Lernprodukt genutzt',
                    'Erklärvideos werden produziert',
                    'Podcasts werden kollaborativ erstellt',
                    'Flexible Erstellung von Medienprodukten wird zeit- und ortsunabhängig ermöglicht',
                    'Zeitunabhängige Bearbeitung von Produkten erfolgt',
                    'Ortsunabhängige Erstellung wird genutzt',
                    'Einfache Überarbeitung der Lernprodukte wird ermöglicht',
                    'Erhaltenes Feedback wird eingearbeitet',
                    'Feedback wird als Teil des Lernprozesses verstanden',
                    'Medienproduktive Aufgabenformate werden eingesetzt',
                    'Kollaborative Erstellung kreativer Produkte wird gefördert',
                    'Produktorientierte Lernszenarien werden genutzt',
                    'Aktive Arbeit mit digitalen Medien wird ermöglicht',
                    'Kreative Auseinandersetzung mit Lerngegenstand erfolgt',
                    'Langefristiger Kompetenzaufbau wird unterstützt',
                    'Eigene Lösungswege werden gefunden',
                    'Eigene Lernprodukte werden erstellt',
                    'Entstehungsprozess von Produkten wird reflektiert',
                    'Präsentationen werden kollaborativ erstellt',
                    'Comics fördern kreative Auseinandersetzung',
                    'Erklärvideos ermöglichen aktive Beteiligung'
                ]
            },
            '5.2': {
                titel: 'Lernstrategien vermitteln',
                tags: [
                    'Strategien zur Arbeitsorganisation werden einübt',
                    'Lernorganisation wird reflektiert',
                    'Strategien werden einübt',
                    'Nachhaltiger Wissenserwerb wird gefördert',
                    'Reflexion von Strategien erfolgt',
                    'Eigene Medienanwendung wird kritisch reflektiert',
                    'Medien werden zielgerichtet eingesetzt',
                    'Sozial verantwortlicher Einsatz von Medien wird gelehrt',
                    'Gewinnbringender Medieneinsatz wird vermittelt',
                    'Fachintegrativer systematischer Medienkompetenzaufbau wird durchgeführt',
                    'Regelmäßige Nutzung von Medien erfolgt',
                    'Reflektierte Nutzung wird gefördert',
                    'Lernstrategien werden als Inhalt und Methode vermittelt',
                    'Problemlösungsfähigkeiten werden aufgebaut',
                    'Tief verarbeitetes Wissen wird vorausgesetzt',
                    'Neue Inhalte werden in Wissensstrukturen eingebaut',
                    'Wissen wird vielfältig vernetzt',
                    'Anwendung in unterschiedlichen Situationen wird geübt',
                    'Lernwege werden durch medienproduktive Formate eröffnet',
                    'Kreative Auseinandersetzung wird ermöglicht',
                    'Strategien zur Arbeitsorganisation werden reflektiert',
                    'Nachhaltiger Wissenserwerb wird durch Einüben strategischer Ansätze gefördert',
                    'Kritische Reflexion der Medienanwendung erfolgt regelmäßig',
                    'Aufgaben fordern Denken heraus',
                    'Vorwissen wird aktiviert und mit Neuem verknüpft.'
                ]
            },
            '5.3': {
                titel: 'Medienkompetenz aufbauen',
                tags: [
                    'Einüben von Strategien zur Lernorganisation erfolgt',
                    'Reflektieren von Strategien wird gefördert',
                    'Nachhaltiger Wissenserwerb wird unterstützt',
                    'Eigene Medienanwendung wird kritisch reflektiert',
                    'Medien werden zielgerichtet eingesetzt',
                    'Sozial verantwortlich wird mit Medien umgegangen',
                    'Gewinnbringend werden Medien genutzt',
                    'Fachintegrativer Medienkompetenzaufbau wird systematisch durchgeführt',
                    'Regelmäßige und reflektierte Nutzung erfolgt',
                    'Medienkompetenzen werden neben fachlichen Kenntnissen erworben',
                    'Aktive und kreative Auseinandersetzung wird gefördert',
                    'Produktorientierte Szenarien werden genutzt',
                    'Medienproduktive Formate zielen auf Kompetenzen ab',
                    'Grundlegende Kompetenzen werden erworben',
                    'Fachliche Kompetenzen werden aufgebaut',
                    'Überfachliche Kompetenzen werden entwickelt',
                    'Langfristiger Kompetenzaufbau wird ermöglicht',
                    'Systematischer Erwerb von Medienkompetenz erfolgt',
                    'Strategien werden reflektiert und eingeübt',
                    'Zielgerichteter, sozial verantwortlicher Medieneinsatz wird gelehrt',
                    'Fachintegrativer Aufbau durch regelmäßige Nutzung wird realisiert',
                    'Kritische Reflexion der Medienanwendung wird integriert',
                    'Gewinnbringender Einsatz aller Medienarten wird vermittelt'
                ]
            },
            '5.4': {
                titel: 'Differenzierte Übungen',
                tags: [
                    'Sofortige Überprüfung von Antworten wird ermöglicht',
                    'Direktes Feedback wird gegeben',
                    'Zugang zu differenzierten Übungsaufgaben wird bereitgestellt',
                    'KI-generierte Aufgaben werden genutzt',
                    'Lernprozess wird nach individuellen Voraussetzungen gestaltet',
                    'Eigenes Tempo wird ermöglicht',
                    'Entsprechende Wiederholungen werden angeboten',
                    'Gelernte wird mit vorhandenem Wissen vernetzt',
                    'Anwendung in neuen Kontexten wird geübt',
                    'Vielfältige Übungsmöglichkeiten werden eröffnet',
                    'Erlernte wird gezielt wiederholt',
                    'Nachhaltige Verankerung wird unterstützt',
                    'Intelligentes Üben wird durch digitale Möglichkeiten gefördert',
                    'Differenzierte Übungsaufgaben werden angeboten',
                    'Individuelles Tempo wird respektiert',
                    'Wiederholungen werden bedarfsgerecht eingesetzt',
                    'Wissenserwerb wird nachhaltig verankert',
                    'Anwendungsfähigkeit wird in Übungsphasen geübt',
                    'Digitale Formate fördern aktive Auseinandersetzung',
                    'Kreative Mediennutzung wird in Übungen integriert',
                    'Direktes Feedback durch sofortige Überprüfung wird genutzt',
                    'Vielzahl differenzierter Übungsaufgaben ermöglicht individuelle Gestaltung',
                    'Vernetzung des Gelernten mit neuem Wissen erfolgt in Kontexten'
                ]
            }
        }
    }
};
const bewertungsSkala = [
    { wert: 0, label: 'nicht beobachtbar/beobachtet', farbe: 'bg-gray-300' },
    { wert: 1, label: 'trifft nicht zu', farbe: 'bg-red-300' },
    { wert: 2, label: 'trifft eher nicht zu', farbe: 'bg-orange-300' },
    { wert: 3, label: 'trifft eher zu', farbe: 'bg-yellow-300' },
    { wert: 4, label: 'trifft zu', farbe: 'bg-green-300' }
];
const sozialformen = ['Plenum', 'Lehrervortrag', 'Einzelarbeit', 'Partnerarbeit', 'Gruppenarbeit', 'Freie Wahl', 'Leerlauf', 'Andere'];

let currentSessionId = null;
let sessions = [];
let formData = { name: '', klasse: '', fach: '', thema: '', datum: '', dauer: 45, photos: [], generalNotes: '', highlight: [], besprechen: [], phasen: [] };
let bewertungen = {};
let quillEditor = null;

// Local Storage Funktionen
function saveSessionsToStorage() {
    localStorage.setItem('hospitationSessions', JSON.stringify(sessions));
}

function loadSessionsFromStorage() {
    const stored = localStorage.getItem('hospitationSessions');
    if (stored) {
        try {
            sessions = JSON.parse(stored);
        } catch (e) {
            console.error('Fehler beim Laden der Sessions:', e);
            sessions = [];
        }
    }
}

// Initialisiere Bewertungen
function initBewertungen() {
    bewertungen = {};
    Object.keys(kategorien).forEach(kat => {
        Object.keys(kategorien[kat].unterkategorien).forEach(uk => {
            bewertungen[uk] = { bewertung: 0, notizen: '', tags: [] };
        });
    });
}

// Validierung für Save
function validateForm() {
    if (!formData.name.trim()) {
        alert('Bitte Name eingeben!');
        return false;
    }
    if (!formData.datum) {
        alert('Bitte Datum eingeben!');
        return false;
    }
    return true;
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function () {
    initBewertungen();
    initApp();
    initImageModal();
});

function initImageModal() {
    const modal = document.getElementById('image-modal');
    const spanClose = document.querySelector('#image-modal .close');

    spanClose.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Event delegation for photos-preview
    document.getElementById('photos-preview').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            document.getElementById('modal-image').src = e.target.src;
            modal.style.display = 'block';
        }
    });

    // Event delegation for auswertung-photos-grid
    document.getElementById('auswertung-photos-grid').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            document.getElementById('modal-image').src = e.target.src;
            modal.style.display = 'block';
        }
    });
}

function initApp() {
    loadSessionsFromStorage(); // Sessions aus Local Storage laden

    // Quill Editor initialisieren (mit Sanitization)
    quillEditor = new Quill('#general-notes-editor', {
        theme: 'snow',
        placeholder: 'Allgemeine Beobachtungen notieren...',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline'],
                ['link', 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'header': [1, 2, 3, false] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean'] // Baut gefährliche HTML auf
            ]
        }
    });
    quillEditor.on('text-change', function () {
        formData.generalNotes = quillEditor.root.innerHTML; // Quill saniert intern
    });
    if (formData.generalNotes) {
        quillEditor.root.innerHTML = formData.generalNotes;
    }

    document.getElementById('add-highlight').addEventListener('click', () => {
        formData.highlight.push('');
        renderHighlight();
    });

    document.getElementById('add-besprechen').addEventListener('click', () => {
        formData.besprechen.push('');
        renderBesprechen();
    });

    document.getElementById('add-phase').addEventListener('click', () => {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        formData.phasen.push({ zeit: currentTime, sozialform: '', notiz: '' });
        renderPhasen();
    });

    document.getElementById('tab-erfassung').addEventListener('click', () => switchTab('erfassung'));
    document.getElementById('tab-auswertung').addEventListener('click', () => switchTab('auswertung'));
    document.getElementById('tab-sessions').addEventListener('click', () => switchTab('sessions'));

    document.getElementById('new-session').addEventListener('click', newSession);
    document.getElementById('save-session').addEventListener('click', saveSession);
    document.getElementById('import-json').addEventListener('click', () => {
        document.getElementById('json-file-input').click();
    });
    document.getElementById('json-file-input').addEventListener('change', importJSON);
    document.getElementById('export-json').addEventListener('click', exportJSON);
    document.getElementById('delete-session').addEventListener('click', deleteSession);

    document.getElementById('session-select').addEventListener('change', (e) => {
        if (e.target.value) loadSession(Number(e.target.value));
        renderAuswertung();
    });

    document.getElementById('photo-upload').addEventListener('change', handlePhotoUpload);

    ['name', 'klasse', 'fach', 'thema', 'datum'].forEach(id => {
        document.getElementById(id).addEventListener('input', (e) => {
            formData[id] = escapeHtml(e.target.value.trim()); // Escapen für Sicherheit
        });
    });

    document.getElementById('dauer').addEventListener('input', (e) => {
        formData.dauer = parseInt(e.target.value) || 45;
    });

    renderKategorien();
    renderSessions();
    renderHighlight();
    renderBesprechen();
    renderPhasen();
    switchTab('erfassung');
}

function renderPhasen() {
    const container = document.getElementById('phasen-fields');
    if (!container) return;
    container.innerHTML = formData.phasen.map((phase, idx) => {
        const escapedNotiz = escapeHtml(phase.notiz || '');
        return `
                    <div class="phasen-field">
                        <input type="time" value="${phase.zeit || ''}" data-idx="${idx}" data-field="zeit" step="300" title="Startzeit der Phase (in 5-Minuten-Schritten).">
                        <select data-idx="${idx}" data-field="sozialform">
                            <option value="">Sozialform wählen</option>
                            ${sozialformen.map(sf => `<option value="${sf}" ${phase.sozialform === sf ? 'selected' : ''}>${sf}</option>`).join('')}
                        </select>
                        <textarea placeholder="Kurznotiz..." data-idx="${idx}" data-field="notiz" maxlength="200" title="Max. 200 Zeichen für Notiz." rows="2">${escapedNotiz}</textarea>
                        <button type="button" onclick="removePhase(${idx})">×</button>
                    </div>
                `;
    }).join('');

    // Event delegation for changes
    container.addEventListener('change', (e) => {
        if (e.target.dataset && e.target.dataset.idx !== undefined && e.target.dataset.field) {
            const idx = Number(e.target.dataset.idx);
            const field = e.target.dataset.field;
            formData.phasen[idx][field] = escapeHtml(e.target.value.trim());
        }
    });
    container.addEventListener('input', (e) => {
        if (e.target.dataset && e.target.dataset.idx !== undefined && e.target.dataset.field === 'notiz') {
            const idx = Number(e.target.dataset.idx);
            formData.phasen[idx].notiz = escapeHtml(e.target.value.trim());
        }
    });
}

window.removePhase = function (idx) {
    formData.phasen.splice(idx, 1);
    renderPhasen();
};

function renderHighlight() {
    const container = document.getElementById('highlight-fields');
    if (!container) return;
    container.innerHTML = formData.highlight.map((item, idx) => {
        const escapedItem = escapeHtml(item || '');
        return `
                    <div class="highlight-field">
                        <input type="text" value="${escapedItem}" placeholder="Highlight hinzufügen..." data-idx="${idx}" maxlength="200" title="Max. 200 Zeichen (Buchstaben, Zahlen, gängige Satzzeichen).">
                        <button type="button" onclick="removeHighlight(${idx})">×</button>
                    </div>
                `;
    }).join('');

    // Event delegation for inputs
    container.addEventListener('input', (e) => {
        if (e.target.dataset && e.target.dataset.idx !== undefined) {
            const idx = Number(e.target.dataset.idx);
            formData.highlight[idx] = escapeHtml(e.target.value.trim());
        }
    });
}

window.removeHighlight = function (idx) {
    formData.highlight.splice(idx, 1);
    renderHighlight();
};

function renderBesprechen() {
    const container = document.getElementById('besprechen-fields');
    if (!container) return;
    container.innerHTML = formData.besprechen.map((item, idx) => {
        const escapedItem = escapeHtml(item || '');
        return `
                    <div class="besprechen-field">
                        <input type="text" value="${escapedItem}" placeholder="Punkt hinzufügen..." data-idx="${idx}" maxlength="200" title="Max. 200 Zeichen (Buchstaben, Zahlen, gängige Satzzeichen).">
                        <button type="button" onclick="removeBesprechen(${idx})">×</button>
                    </div>
                `;
    }).join('');

    // Event delegation for inputs
    container.addEventListener('input', (e) => {
        if (e.target.dataset && e.target.dataset.idx !== undefined) {
            const idx = Number(e.target.dataset.idx);
            formData.besprechen[idx] = escapeHtml(e.target.value.trim());
        }
    });
}

window.removeBesprechen = function (idx) {
    formData.besprechen.splice(idx, 1);
    renderBesprechen();
};

function newSession() {
    if (confirm('Möchten Sie eine neue Session beginnen? Ungespeicherte Änderungen gehen verloren.')) {
        currentSessionId = null;
        renderSessions();
        document.getElementById('session-select').value = '';
        document.getElementById('delete-session').style.display = 'none';
        initBewertungen();
        formData = { name: '', klasse: '', fach: '', thema: '', datum: '', dauer: 45, photos: [], generalNotes: '', highlight: [], besprechen: [], phasen: [] };
        document.getElementById('name').value = '';
        document.getElementById('klasse').value = '';
        document.getElementById('fach').value = '';
        document.getElementById('thema').value = '';
        document.getElementById('datum').value = '';
        document.getElementById('dauer').value = 45;
        quillEditor.setText('');
        formData.highlight = [];
        formData.besprechen = [];
        formData.phasen = [];
        renderHighlight();
        renderBesprechen();
        renderPhasen();
        renderPhotosPreview();
        renderKategorien();
    }
}

function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(tab).classList.add('active');

    const erfTab = document.getElementById('tab-erfassung');
    const ausTab = document.getElementById('tab-auswertung');
    const sesTab = document.getElementById('tab-sessions');
    [erfTab, ausTab, sesTab].forEach(btn => btn.classList.remove('active'));
    if (tab === 'erfassung') {
        erfTab.classList.add('active');
    } else if (tab === 'auswertung') {
        ausTab.classList.add('active');
        renderAuswertung();
    } else if (tab === 'sessions') {
        sesTab.classList.add('active');
    }
}

function toggleKategorie(katKey) {
    const kategorie = document.querySelector(`[data-kat="${katKey}"]`);
    kategorie.classList.toggle('open');
}

function addTag(ukKey, tagText) {
    const sanitizedTag = escapeHtml(tagText.trim());
    if (sanitizedTag && !bewertungen[ukKey].tags.includes(sanitizedTag) && sanitizedTag.length <= 100) {
        bewertungen[ukKey].tags.push(sanitizedTag);
        renderTagsForUK(ukKey);
        renderAvailableTags(ukKey);
    }
}

function removeTag(ukKey, tagText) {
    bewertungen[ukKey].tags = bewertungen[ukKey].tags.filter(t => t !== tagText);
    renderTagsForUK(ukKey);
    renderAvailableTags(ukKey);
}

function renderAvailableTags(ukKey) {
    const container = document.querySelector(`[data-available-tags="${ukKey}"]`);
    if (!container) return;

    const allTags = kategorien[Object.keys(kategorien).find(k => Object.keys(kategorien[k].unterkategorien).includes(ukKey))]?.unterkategorien[ukKey]?.tags || [];
    const selectedTags = bewertungen[ukKey].tags || [];
    const availableTags = allTags.filter(tag => !selectedTags.includes(tag));

    container.innerHTML = availableTags.map(tag => {
        const escapedTag = escapeHtml(tag);
        return `
                    <button type="button" onclick="addTag('${ukKey}', '${escapedTag.replace(/'/g, "\\'")}')" 
                        class="tag-btn">
                        + ${escapedTag}
                    </button>
                `;
    }).join('');
}

function renderTagsForUK(ukKey) {
    const container = document.querySelector(`[data-tags-container="${ukKey}"]`);
    if (!container) return;

    const selectedTags = bewertungen[ukKey].tags || [];
    container.innerHTML = selectedTags.map(tag => {
        const escapedTag = escapeHtml(tag);
        return `
                    <span class="tag">
                        ${escapedTag}
                        <button onclick="removeTag('${ukKey}', '${escapedTag.replace(/'/g, "\\'")}')">
                            ×
                        </button>
                    </span>
                `;
    }).join('');
}

window.addTag = addTag;
window.removeTag = removeTag;

function renderKategorien() {
    const container = document.getElementById('kategorien-container');
    if (!container) return;
    container.innerHTML = '';

    Object.entries(kategorien).forEach(([katKey, kat]) => {
        const katDiv = document.createElement('div');
        katDiv.className = `kategorie ${kat.farbe}`;
        katDiv.setAttribute('data-kat', katKey);
        katDiv.innerHTML = `
                    <div class="kategorie-header-wrapper" onclick="toggleKategorie('${katKey}')">
                        <h2 class="kategorie-header">${katKey === 'K' ? 'K' : katKey}. ${escapeHtml(kat.titel)}</h2>
                        <p class="beschreibung">${escapeHtml(kat.beschreibung)}</p>
                    </div>
                    <div class="unterkategorien">
                        ${Object.entries(kat.unterkategorien).map(([ukKey, ukData]) => {
            const initialWert = bewertungen[ukKey]?.bewertung || 0;
            const initialLabel = bewertungsSkala[initialWert];
            const escapedTitel = escapeHtml(ukData.titel);
            return `
                                <div class="uk">
                                    <h3 class="font-bold mb-3">${ukKey}: ${escapedTitel}</h3>
                                    <div class="mb-4">
                                        <div class="mb-2">
                                            <span class="text-sm font-medium block mb-2">Bewertung:</span>
                                            <div class="rating-buttons" data-rating-buttons="${ukKey}">
                                                ${bewertungsSkala.map(skala => `
                                                    <button type="button" 
                                                        data-uk="${ukKey}" 
                                                        data-wert="${skala.wert}"
                                                        class="rating-button ${initialWert === skala.wert ? skala.farbe + ' active' : ''}">
                                                        ${escapeHtml(skala.label)}
                                                    </button>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Tags Section -->
                                    <div class="mb-4">
                                        <label class="text-sm font-medium block mb-2">Tags:</label>
                                        <div class="tags-container" data-tags-container="${ukKey}"></div>
                                        <div class="tag-btns" data-available-tags="${ukKey}">
                                            ${ukData.tags.map(tag => {
                const escapedTag = escapeHtml(tag);
                return `
                                                    <button type="button" onclick="addTag('${ukKey}', '${escapedTag.replace(/'/g, "\\'")}')" 
                                                        class="tag-btn">
                                                        + ${escapedTag}
                                                    </button>
                                                `;
            }).join('')}
                                        </div>
                                        <div class="custom-tag">
                                            <input type="text" data-custom-tag="${ukKey}" placeholder="Eigenes Tag hinzufügen..." 
                                                maxlength="100" title="Max. 100 Zeichen für Tags.">
                                            <button type="button" onclick="addCustomTag('${ukKey}')" 
                                                class="">Hinzufügen</button>
                                        </div>
                                    </div>
                                    
                                    <div class="notizen">
                                        <label class="text-sm font-medium block mb-2">Notizen:</label>
                                        <textarea data-uk="${ukKey}" class="notizen-input w-full" rows="4" placeholder="Beobachtungen notieren..." maxlength="1000" title="Max. 1000 Zeichen für Notizen.">${escapeHtml(bewertungen[ukKey]?.notizen || '')}</textarea>
                                    </div>
                                </div>
                            `;
        }).join('')}
                    </div>
                `;
        container.appendChild(katDiv);

        // Render initial tags
        Object.keys(kat.unterkategorien).forEach(uk => {
            setTimeout(() => {
                renderTagsForUK(uk);
                renderAvailableTags(uk);
            }, 0);
        });
    });

    // Event Delegation für Rating Buttons
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('rating-button')) {
            const ukKey = e.target.getAttribute('data-uk');
            const wert = Number(e.target.getAttribute('data-wert'));

            bewertungen[ukKey].bewertung = wert;

            // Update button styles
            const buttonsContainer = e.target.closest('[data-rating-buttons]');
            buttonsContainer.querySelectorAll('.rating-button').forEach(btn => {
                const btnWert = Number(btn.getAttribute('data-wert'));
                const skala = bewertungsSkala[btnWert];
                if (btnWert === wert) {
                    btn.className = `rating-button ${skala.farbe} active`;
                } else {
                    btn.className = 'rating-button';
                }
            });
        }
    });

    // Event Delegation für Notizen
    container.addEventListener('input', (e) => {
        if (e.target.classList.contains('notizen-input')) {
            const ukKey = e.target.getAttribute('data-uk');
            bewertungen[ukKey].notizen = escapeHtml(e.target.value.trim());
        }
    });
}

window.addCustomTag = function (ukKey) {
    const input = document.querySelector(`[data-custom-tag="${ukKey}"]`);
    const tagText = input.value.trim();
    if (tagText) {
        addTag(ukKey, tagText);
        input.value = '';
    }
};

function handlePhotoUpload(e) {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    files.forEach(file => {
        if (!file.type.startsWith('image/')) {
            alert('Nur Bilddateien erlaubt!');
            return;
        }
        if (file.size > maxSize) {
            alert('Datei zu groß! Max. 5MB.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            formData.photos.push({ url: event.target.result, name: escapeHtml(file.name) });
            renderPhotosPreview();
        };
        reader.readAsDataURL(file);
    });
}

function renderPhotosPreview() {
    const preview = document.getElementById('photos-preview');
    if (!preview) return;
    preview.innerHTML = '';
    formData.photos.forEach((photo, idx) => {
        const div = document.createElement('div');
        div.className = 'relative';
        div.innerHTML = `
                    <img src="${photo.url}" alt="${escapeHtml(photo.name)}" class="w-full h-32 object-cover rounded">
                    <button type="button" onclick="removePhoto(${idx})" class="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 flex items-center">
                        🗑️
                    </button>
                `;
        preview.appendChild(div);
    });
}

window.removePhoto = function (index) {
    formData.photos = formData.photos.filter((_, i) => i !== index);
    renderPhotosPreview();
};

function saveSession() {
    if (!validateForm()) return;

    const session = {
        id: currentSessionId || Date.now(),
        ...formData,
        bewertungen: JSON.parse(JSON.stringify(bewertungen)),
        gespeichertAm: new Date().toISOString()
    };

    const existingIndex = sessions.findIndex(s => s.id === session.id);
    if (existingIndex >= 0) {
        sessions[existingIndex] = session;
    } else {
        sessions.push(session);
    }

    currentSessionId = session.id;
    saveSessionsToStorage(); // In Local Storage speichern
    renderSessions();
    document.getElementById('session-select').value = currentSessionId;
    document.getElementById('delete-session').style.display = 'flex';
    alert('Session gespeichert!');
}

function renderSessions() {
    const select = document.getElementById('session-select');
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = '<option value="">Session auswählen...</option>';

    sessions.forEach(s => {
        const escapedName = escapeHtml(s.name || 'Unnamed');
        const escapedKlasse = escapeHtml(s.klasse || '');
        const option = document.createElement('option');
        option.value = s.id;
        option.textContent = `${escapedName} - ${escapedKlasse} - ${s.datum}`;
        select.appendChild(option);
    });

    if (currentValue) {
        select.value = currentValue;
    }
}

function loadSession(sessionId) {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
        formData = { ...session };
        bewertungen = JSON.parse(JSON.stringify(session.bewertungen || {}));
        currentSessionId = sessionId;

        document.getElementById('name').value = escapeHtml(formData.name || '');
        document.getElementById('klasse').value = escapeHtml(formData.klasse || '');
        document.getElementById('fach').value = escapeHtml(formData.fach || '');
        document.getElementById('thema').value = escapeHtml(formData.thema || '');
        document.getElementById('datum').value = formData.datum || '';
        document.getElementById('dauer').value = formData.dauer || 45;
        formData.highlight = session.highlight || [];
        formData.besprechen = session.besprechen || [];
        formData.phasen = session.phasen || [];
        formData.photos = session.photos || [];
        formData.generalNotes = session.generalNotes || '';
        quillEditor.root.innerHTML = formData.generalNotes;
        renderHighlight();
        renderBesprechen();
        renderPhasen();
        renderPhotosPreview();
        renderKategorien();

        document.getElementById('delete-session').style.display = 'flex';
    }
}

function deleteSession() {
    if (confirm('Session wirklich löschen?')) {
        sessions = sessions.filter(s => s.id !== currentSessionId);
        saveSessionsToStorage(); // In Local Storage speichern
        currentSessionId = null;
        renderSessions();
        document.getElementById('session-select').value = '';
        document.getElementById('delete-session').style.display = 'none';
        initBewertungen();
        formData = { name: '', klasse: '', fach: '', thema: '', datum: '', dauer: 45, photos: [], generalNotes: '', highlight: [], besprechen: [], phasen: [] };
        document.getElementById('name').value = '';
        document.getElementById('klasse').value = '';
        document.getElementById('fach').value = '';
        document.getElementById('thema').value = '';
        document.getElementById('datum').value = '';
        document.getElementById('dauer').value = 45;
        quillEditor.setText('');
        renderHighlight();
        renderBesprechen();
        renderPhasen();
        renderPhotosPreview();
        renderKategorien();
    }
}

function exportJSON() {
    const data = {
        datum: new Date().toISOString(),
        formData,
        bewertungen
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hospitation_${escapeHtml(formData.name || 'unnamed')}_${formData.datum}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importJSON(event) {
    const file = event.target.files[0];
    if (!file || !file.name.endsWith('.json')) {
        alert('Nur gültige JSON-Dateien erlaubt!');
        return;
    }
    if (file.size > 1024 * 1024) { // 1MB Limit
        alert('Datei zu groß! Max. 1MB.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            // Validiere die Datenstruktur
            if (!data.formData || !data.bewertungen) {
                alert('Ungültiges JSON-Format! Die Datei muss formData und bewertungen enthalten.');
                return;
            }

            // Sanitize geladene Daten
            formData = {
                name: escapeHtml(data.formData.name || ''),
                klasse: escapeHtml(data.formData.klasse || ''),
                fach: escapeHtml(data.formData.fach || ''),
                thema: escapeHtml(data.formData.thema || ''),
                datum: data.formData.datum || '',
                dauer: parseInt(data.formData.dauer) || 45,
                photos: data.formData.photos || [],
                generalNotes: data.formData.generalNotes || '',
                highlight: (data.formData.highlight || []).map(h => escapeHtml(h)),
                besprechen: (data.formData.besprechen || []).map(b => escapeHtml(b)),
                phasen: (data.formData.phasen || []).map(p => ({
                    zeit: p.zeit || '',
                    sozialform: escapeHtml(p.sozialform || ''),
                    notiz: escapeHtml(p.notiz || '')
                }))
            };

            // Stelle sicher, dass alle Unterkategorien vorhanden sind
            initBewertungen();
            Object.keys(data.bewertungen).forEach(uk => {
                if (bewertungen[uk]) {
                    bewertungen[uk] = {
                        bewertung: Math.max(0, Math.min(4, data.bewertungen[uk].bewertung || 0)),
                        notizen: escapeHtml(data.bewertungen[uk].notizen || ''),
                        tags: (data.bewertungen[uk].tags || []).map(t => escapeHtml(t))
                    };
                }
            });

            // Aktualisiere UI
            document.getElementById('name').value = formData.name;
            document.getElementById('klasse').value = formData.klasse;
            document.getElementById('fach').value = formData.fach;
            document.getElementById('thema').value = formData.thema;
            document.getElementById('datum').value = formData.datum;
            document.getElementById('dauer').value = formData.dauer;
            quillEditor.root.innerHTML = formData.generalNotes;

            renderHighlight();
            renderBesprechen();
            renderPhasen();
            renderPhotosPreview();
            renderKategorien();

            // Reset Session-Auswahl
            currentSessionId = null;
            document.getElementById('session-select').value = '';
            document.getElementById('delete-session').style.display = 'none';

            alert('JSON erfolgreich importiert!');
        } catch (error) {
            alert('Fehler beim Importieren: ' + error.message);
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);

    // Reset file input
    event.target.value = '';
}

function calculateStats() {
    const stats = {};
    Object.keys(kategorien).forEach(kat => {
        const unterkategorienKeys = Object.keys(kategorien[kat].unterkategorien);

        const alleWerte = [];
        unterkategorienKeys.forEach(uk => {
            const wert = bewertungen[uk]?.bewertung;
            if (wert !== undefined && wert !== null) {
                alleWerte.push(wert);
            }
        });

        const bewerteteWerte = alleWerte.filter(w => w > 0);

        const sum = bewerteteWerte.reduce((a, b) => a + b, 0);
        const durchschnitt = bewerteteWerte.length > 0 ? sum / bewerteteWerte.length : 0;

        stats[kat] = {
            prozent: bewerteteWerte.length > 0 ? ((durchschnitt / 4) * 100).toFixed(1) : null,
            anzahl: bewerteteWerte.length,
            gesamt: unterkategorienKeys.length,
            nichtBeobachtbar: bewerteteWerte.length === 0
        };
    });
    return stats;
}

function calculateSozialformDistribution() {
    if (formData.phasen.length === 0) return null;

    // Parse times to minutes since midnight
    const times = formData.phasen.map(phase => {
        const [h, m] = phase.zeit.split(':');
        return parseInt(h) * 60 + parseInt(m);
    });

    // Sort phases by time
    const sortedIndices = times.map((time, idx) => idx).sort((a, b) => times[a] - times[b]);
    const sortedPhasen = sortedIndices.map(idx => formData.phasen[idx]);
    const sortedTimes = sortedIndices.map(idx => times[idx]);

    const startTime = sortedTimes[0];
    const endTime = startTime + formData.dauer;
    const durations = [];

    // Calculate durations
    for (let i = 0; i < sortedTimes.length - 1; i++) {
        durations[i] = sortedTimes[i + 1] - sortedTimes[i];
    }
    // Last phase duration
    durations[sortedPhasen.length - 1] = endTime - sortedTimes[sortedTimes.length - 1];

    // Group by sozialform
    const distribution = {};
    sortedPhasen.forEach((phase, i) => {
        const sf = phase.sozialform;
        if (sf) {
            distribution[sf] = (distribution[sf] || 0) + (durations[i] || 0);
        }
    });

    // Calculate percentages
    Object.keys(distribution).forEach(sf => {
        distribution[sf] = {
            minuten: distribution[sf],
            prozent: ((distribution[sf] / formData.dauer) * 100).toFixed(1)
        };
    });

    return { phasen: sortedPhasen, distribution };
}

function renderAuswertung() {
    const overview = document.getElementById('stammdaten-overview');
    if (overview) {
        let html = '';
        if (formData.name) {
            html += `<h1 class="text-3xl font-bold text-gray-800 mb-4">${escapeHtml(formData.name)}</h1>`;
        } else {
            html += `<h1 class="text-3xl font-bold text-gray-800 mb-4">-</h1>`;
        }
        html += `
                    <div class="grid grid-cols-1 gap-4">
                        <div><span class="font-medium">Klasse:</span> ${escapeHtml(formData.klasse || '-')}</div>
                        <div><span class="font-medium">Fach:</span> ${escapeHtml(formData.fach || '-')}</div>
                        <div><span class="font-medium">Thema:</span> ${escapeHtml(formData.thema || '-')}</div>
                        <div><span class="font-medium">Datum:</span> ${escapeHtml(formData.datum || '-')}</div>
                        <div><span class="font-medium">Dauer:</span> ${formData.dauer} Min.</div>
                    </div>
                `;
        if (formData.generalNotes) {
            html += `<div class="general-notes-display"><h4 class="font-medium mb-2">Allgemeine Beobachtungen:</h4><div class="general-notes-content">${formData.generalNotes}</div></div>`;
        }
        if (formData.highlight && formData.highlight.length > 0) {
            html += `<div class="highlight-display"><h4 class="font-medium mb-2">Highlights der Stunde:</h4><ul class="general-notes-content">${formData.highlight.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>`;
        }
        if (formData.besprechen && formData.besprechen.length > 0) {
            html += `<div class="besprechen-display"><h4 class="font-medium mb-2">Dinge zum Besprechen:</h4><ul class="general-notes-content">${formData.besprechen.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>`;
        }
        overview.innerHTML = html;
    }

    // Phasen display
    const phasenDisplay = document.getElementById('phasen-display');
    const phasenList = document.getElementById('phasen-list');
    if (phasenDisplay && phasenList && formData.phasen.length > 0) {
        const dist = calculateSozialformDistribution();
        if (dist) {
            phasenList.innerHTML = dist.phasen.map(phase => `
                        <div class="phasen-item">
                            <span>${phase.zeit} - ${escapeHtml(phase.sozialform || 'Keine')}</span>
                            <span>${escapeHtml(phase.notiz || '')}</span>
                        </div>
                    `).join('');
            phasenDisplay.style.display = 'block';
        }
    } else if (phasenDisplay) {
        phasenDisplay.style.display = 'none';
    }

    // Sozialform distribution
    const distSection = document.getElementById('sozialform-distribution');
    const tableBody = document.querySelector('#distribution-table tbody');
    if (distSection && tableBody) {
        const dist = calculateSozialformDistribution();
        if (dist && Object.keys(dist.distribution).length > 0) {
            tableBody.innerHTML = Object.entries(dist.distribution).map(([sf, data]) => `
                        <tr>
                            <td>${escapeHtml(sf)}</td>
                            <td>${data.minuten}</td>
                            <td>${data.prozent}%</td>
                        </tr>
                    `).join('');
            distSection.style.display = 'block';
        } else {
            distSection.style.display = 'none';
        }
    }

    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = '';
        const stats = calculateStats();
        Object.entries(stats).forEach(([katKey, stat]) => {
            const div = document.createElement('div');
            div.className = `stat-item ${kategorien[katKey].farbe}`;

            const prozentAnzeige = stat.nichtBeobachtbar
                ? '<span class="text-gray-500 italic">nicht beobachtbar/beobachtet</span>'
                : `<div class="text-2xl font-bold">${stat.prozent}%</div>`;

            div.innerHTML = `
                        <div class="stat-header">
                            <div>
                                <span class="font-bold text-lg">${katKey === 'K' ? 'K' : katKey}. ${escapeHtml(kategorien[katKey].titel)}</span>
                                <span class="text-sm text-gray-600 ml-2">(${stat.anzahl} von ${stat.gesamt} bewertet)</span>
                            </div>
                            ${prozentAnzeige}
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${stat.nichtBeobachtbar ? 0 : stat.prozent}%"></div>
                        </div>
                    `;
            statsContainer.appendChild(div);
        });
    }

    const detailsContainer = document.getElementById('details-container');
    if (detailsContainer) {
        detailsContainer.innerHTML = '';
        Object.entries(kategorien).forEach(([katKey, kat]) => {
            let hasContent = false;
            const katDiv = document.createElement('div');
            katDiv.className = 'kat-detail';
            katDiv.innerHTML = `<h4 class="font-bold text-lg mb-3">${escapeHtml(kat.titel)}</h4>`;

            Object.entries(kat.unterkategorien).forEach(([ukKey, ukData]) => {
                const bew = bewertungen[ukKey];
                if (!bew || bew.bewertung === 0) return;
                hasContent = true;
                const ukDiv = document.createElement('div');
                ukDiv.className = 'uk-detail';
                const prozent = ((bew.bewertung / 4) * 100).toFixed(0) + '%';
                const skala = bewertungsSkala[bew.bewertung];

                const tagsHTML = bew.tags && bew.tags.length > 0
                    ? `<div class="uk-tags">
                                ${bew.tags.map(tag => `<span class="uk-tag">${escapeHtml(tag)}</span>`).join('')}
                               </div>`
                    : '';

                ukDiv.innerHTML = `
                            <div class="uk-header mb-2">
                                <span class="font-medium">${ukKey}: ${escapeHtml(ukData.titel)}</span>
                                <span class="percent ${skala.farbe}">${prozent}</span>
                            </div>
                            ${tagsHTML}
                            ${bew.notizen ? `<p class="text-gray-700 text-sm mt-2">${escapeHtml(bew.notizen)}</p>` : ''}
                        `;
                katDiv.appendChild(ukDiv);
            });
            if (hasContent) {
                detailsContainer.appendChild(katDiv);
            }
        });
    }

    const photosSection = document.getElementById('auswertung-photos');
    const photosGrid = document.getElementById('auswertung-photos-grid');
    if (photosGrid && photosSection) {
        if (formData.photos.length > 0) {
            photosSection.classList.add('active');
            photosGrid.innerHTML = formData.photos.map(photo =>
                `<img src="${photo.url}" alt="${escapeHtml(photo.name)}" class="w-full h-48 object-cover rounded-lg shadow-md">`
            ).join('');
        } else {
            photosSection.classList.remove('active');
        }
    }
}
