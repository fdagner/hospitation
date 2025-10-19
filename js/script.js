// IndexedDB Setup
const DB_NAME = 'HospitationDB';
const DB_VERSION = 1;
const STORE_NAME = 'sessions';

async function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject('Fehler beim Öffnen der IndexedDB: ' + event.target.errorCode);
        };
    });
}


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
                    // Base: Regeln zum Umgang mit Lernmaterialien
                    'Regeln zum Umgang mit Lernmaterialien sind nicht bekannt',
                    'Regeln zum Umgang mit Lernmaterialien sind teilweise bekannt',
                    'Regeln zum Umgang mit Lernmaterialien sind bekannt',
                    // Base: Richtlinien zur Kommunikation
                    'Richtlinien zur Kommunikation sind nicht erkennbar',
                    'Richtlinien zur Kommunikation sind teilweise erkennbar',
                    'Richtlinien zur Kommunikation sind erkannbar',
                    // Base: Lehrkraft-Präsenz
                    'Lehrkraft ist während Lernphasen nicht präsent',
                    'Lehrkraft ist während Lernphasen teilweise präsent',
                    'Lehrkraft ist während Lernphasen präsent',
                    // Base: Störungen handhaben
                    'Störungen werden nicht früh erkannt',
                    'Störungen werden teilweise früh erkannt',
                    'Störungen werden proaktiv und effektiv begegnet',
                    // Base: Lernklima
                    'Positives Lernklima wird nicht gefördert',
                    'Positives Lernklima wird teilweise gefördert',
                    'Vertrauensvolles Lernklima wird gepflegt'
                ]
            },
            'K.2': {
                titel: 'Aufbereitete Materialien & Routinen',
                tags: [
                    // Base: Lernumgebung vorbereiten
                    'Lernumgebung wird nicht vorbereitet',
                    'Lernumgebung wird teilweise vorbereitet',
                    'Lernumgebung wird vorbereitet',
                    // Base: Materialien zugänglich machen
                    'Materialien werden nicht zugänglich gemacht',
                    'Materialien werden teilweise zugänglich gemacht',
                    'Materialien werden zugänglich gemacht',
                    // Base: Routinen etablieren
                    'Routinen sind nicht etabliert',
                    'Routinen sind teilweise etabliert',
                    'Routinen sind etabliert',
                    // Base: Orientierung geben
                    'Orientierung für Schüler wird nicht gegeben',
                    'Orientierung für Schüler wird teilweise gegeben',
                    'Orientierung für Schüler und Lehrkräfte wird gegeben',
                    // Base: Lernhindernisse beseitigen
                    'Lernhindernisse werden nicht beseitigt',
                    'Lernhindernisse werden teilweise beseitigt',
                    'Lernhindernisse werden beseitigt'
                ]
            },
            'K.3': {
                titel: 'Lernhindernisse beseitigen',
                tags: [
                    // Base: Beschäftigung mit Inhalten
                    'Lernende sind nicht mit Inhalten beschäftigt',
                    'Lernende sind teilweise mit Inhalten beschäftigt',
                    'Lernende sind mit Inhalten beschäftigt',
                    // Base: Unterstützung verfügbar
                    'Unterstützung ist nicht verfügbar',
                    'Unterstützung ist teilweise verfügbar',
                    'Unterstützung ist verfügbar',
                    // Base: Arbeitsabläufe
                    'Arbeitsabläufe sind nicht reibungslos',
                    'Arbeitsabläufe sind teilweise reibungslos',
                    'Arbeitsabläufe sind reibungslos',
                    // Base: Störungen minimieren
                    'Störungen treten häufig auf',
                    'Störungen treten teilweise auf',
                    'Störungen werden minimiert',
                    // Base: Lernzeit nutzen
                    'Lernzeit wird nicht effektiv genutzt',
                    'Lernzeit wird teilweise effektiv genutzt',
                    'Lernzeit wird effektiv genutzt'
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
                    // Base: Arbeitsaufträge visualisieren
                    'Arbeitsaufträge werden nicht visualisiert',
                    'Arbeitsaufträge werden teilweise visualisiert',
                    'Arbeitsaufträge werden visualisiert',
                    // Base: Lernziele kommunizieren
                    'Lernziele werden nicht kommuniziert',
                    'Lernziele werden teilweise kommuniziert',
                    'Lernziele werden kommuniziert',
                    // Base: Strukturierung der Inhalte
                    'Unterrichtsinhalte werden nicht strukturiert',
                    'Unterrichtsinhalte werden teilweise strukturiert',
                    'Unterrichtsinhalte werden strukturiert',
                    // Base: Orientierung geben
                    'Orientierung wird nicht gegeben',
                    'Orientierung wird teilweise gegeben',
                    'Orientierung wird gegeben'
                ]
            },
            '1.2': {
                titel: 'Multimediale Unterstützung',
                tags: [
                    // Base: Visuelle Materialien einsetzen
                    'Visuelle Materialien werden nicht eingesetzt',
                    'Visuelle Materialien werden teilweise eingesetzt',
                    'Visuelle Materialien werden eingesetzt',
                    // Base: Abstrakte Konzepte visualisieren
                    'Abstrakte Konzepte werden nicht visualisiert',
                    'Abstrakte Konzepte werden teilweise visualisiert',
                    'Abstrakte Konzepte werden visualisiert',
                    // Base: Medien für Verständnis
                    'Medien fördern Verständnis nicht',
                    'Medien fördern Verständnis teilweise',
                    'Medien fördern Verständnis oft',
                    // Base: Interaktive Elemente
                    'Interaktive Darstellungen werden nicht verwendet',
                    'Interaktive Darstellungen werden teilweise verwendet',
                    'Interaktive Darstellungen werden verwendet'
                ]
            },
            '1.3': {
                titel: 'Veranschaulichung von Lernergebnissen',
                tags: [
                    // Base: Ergebnisse präsentieren
                    'Schülerergebnisse werden nicht präsentiert',
                    'Schülerergebnisse werden teilweise präsentiert',
                    'Schülerergebnisse werden präsentiert',
                    // Base: Lernprodukte sichtbar machen
                    'Lernprodukte werden nicht sichtbar gemacht',
                    'Lernprodukte werden teilweise sichtbar gemacht',
                    'Lernprodukte werden sichtbar gemacht',
                    // Base: Fortschritte dokumentieren
                    'Lernfortschritte werden nicht dokumentiert',
                    'Lernfortschritte werden teilweise dokumentiert',
                    'Lernfortschritte werden dokumentiert',
                    // Base: Kreativität zeigen
                    'Kreativität wird nicht gezeigt',
                    'Kreativität wird teilweise gezeigt',
                    'Kreativität wird gezeigt'
                ]
            },
            '1.4': {
                titel: 'Ergebnissicherung',
                tags: [
                    // Base: Materialien für Nachbereitung
                    'Materialien zur Nachbereitung werden nicht bereitgestellt',
                    'Materialien zur Nachbereitung werden teilweise bereitgestellt',
                    'Materialien zur Nachbereitung werden bereitgestellt',
                    // Base: Inhalte sichern
                    'Unterrichtsinhalte werden nicht gesichert',
                    'Unterrichtsinhalte werden teilweise gesichert',
                    'Unterrichtsinhalte werden gesichert',
                    // Base: Wiederholung unterstützen
                    'Wiederholung wird nicht unterstützt',
                    'Wiederholung wird teilweise unterstützt',
                    'Wiederholung wird unterstützt',
                    // Base: Ablage organisieren
                    'Ablage wird nicht organisiert',
                    'Ablage wird teilweise organisiert',
                    'Ablage wird organisiert'
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
                    // Base: Mediennutzung reflektieren
                    'Mediennutzung wird nicht reflektiert',
                    'Mediennutzung wird teilweise reflektiert',
                    'Mediennutzung wird reflektiert',
                    // Base: Risiken thematisieren
                    'Risiken der Mediennutzung werden nicht thematisiert',
                    'Risiken der Mediennutzung werden teilweise thematisiert',
                    'Risiken und Chancen der Mediennutzung werden aufgezeigt',
                    // Base: Bewusster Umgang lehren
                    'Bewusster Medienumgang wird nicht gelehrt',
                    'Bewusster Medienumgang wird teilweise gelehrt',
                    'Bewusster Medienumgang wird gefördert',
                    // Base: Präventionsarbeit
                    'Präventionsarbeit gegen Medienrisiken wird nicht durchgeführt',
                    'Präventionsarbeit gegen Medienrisiken wird teilweise durchgeführt',
                    'Präventionsarbeit gegen Medienrisiken wird angemessen integriert'
                ]
            },
            '2.2': {
                titel: 'Aktuelle & relevante Themen',
                tags: [
                    // Base: Aktuelle Themen aufgreifen
                    'Aktuelle Themen werden nicht aufgegriffen',
                    'Aktuelle Themen werden teilweise aufgegriffen',
                    'Aktuelle Themen werden aufgegriffen',
                    // Base: Lebensweltbezug herstellen
                    'Lebensweltbezug wird nicht hergestellt',
                    'Lebensweltbezug wird teilweise hergestellt',
                    'Lebensweltbezug wird hergestellt',
                    // Base: Motivation steigern
                    'Lernmotivation wird nicht gesteigert',
                    'Lernmotivation wird teilweise gesteigert',
                    'Lernmotivation wird gesteigert',
                    // Base: Transfer in Alltag
                    'Transfer in den Alltag wird nicht ermöglicht',
                    'Transfer in den Alltag wird teilweise ermöglicht',
                    'Transfer in den Alltag wird ermöglicht'
                ]
            },
            '2.3': {
                titel: 'Authentische Materialien',
                tags: [
                    // Base: Authentische Quellen nutzen
                    'Authentische Materialien werden nicht genutzt',
                    'Authentische Materialien werden teilweise genutzt',
                    'Authentische Materialien werden genutzt',
                    // Base: Recherchemöglichkeiten geben
                    'Recherchemöglichkeiten werden nicht gegeben',
                    'Recherchemöglichkeiten werden teilweise gegeben',
                    'Recherchemöglichkeiten werden genutzt',
                    // Base: Medienvielfalt
                    'Medienvielfalt wird nicht erkennbar',
                    'Medienvielfalt wird teilweise erkennbar',
                    'Medienvielfalt wird erkennbar',
                    // Base: Originalquellen
                    'Originale Quellen werden nicht verwendet',
                    'Originale Quellen werden teilweise verwendet',
                    'Originale Quellen werden verwendet'
                ]
            },
            '2.4': {
                titel: 'Mündige Teilhabe',
                tags: [
                    // Base: Kompetenzen aufbauen
                    'Kompetenzen zur mündigen Teilhabe werden nicht aufgebaut',
                    'Kompetenzen zur mündigen Teilhabe werden teilweise aufgebaut',
                    'Kompetenzen zur mündigen Teilhabe werden aufgebaut',
                    // Base: Kritisches Denken fördern
                    'Kritisches Denken wird nicht gefördert',
                    'Kritisches Denken wird teilweise gefördert',
                    'Kritisches Denken wird gefördert',
                    // Base: Individuelle Interessen berücksichtigen
                    'Individuelle Interessen werden nicht berücksichtigt',
                    'Individuelle Interessen werden teilweise berücksichtigt',
                    'Individuelle Interessen werden berücksichtigt',
                    // Base: Gesellschaftsteilhabe thematisieren
                    'Gesellschaftliche Teilhabe wird nicht thematisiert',
                    'Gesellschaftliche Teilhabe wird teilweise thematisiert',
                    'Gesellschaftliche Teilhabe wird thematisiert'
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
                    // Base: Methodenvielfalt
                    'Verschiedene Methoden werden nicht eingesetzt',
                    'Verschiedene Methoden werden teilweise eingesetzt',
                    'Verschiedene Methoden werden eingesetzt',
                    // Base: Sozialformen variieren
                    'Sozialformen werden nicht variiert',
                    'Sozialformen werden teilweise variiert',
                    'Sozialformen werden variiert',
                    // Base: Interaktive Formate
                    'Interaktive Formate werden nicht genutzt',
                    'Interaktive Formate werden teilweise genutzt',
                    'Interaktive Formate werden genutzt',
                    // Base: Aktive Beteiligung
                    'Aktive Beteiligung wird nicht erreicht',
                    'Aktive Beteiligung wird teilweise erreicht',
                    'Aktive Beteiligung wird erreicht'
                ]
            },
            '3.2': {
                titel: 'Interaktive Formate',
                tags: [
                    // Base: Gamification anwenden
                    'Gamification-Ansätze werden nicht angewendet',
                    'Gamification-Ansätze werden teilweise angewendet',
                    'Gamification-Ansätze werden angewendet',
                    // Base: Interaktive Aufgaben
                    'Interaktive Aufgaben werden nicht gestellt',
                    'Interaktive Aufgaben werden teilweise gestellt',
                    'Interaktive Aufgaben werden gestellt',
                    // Base: Motivation steigert
                    'Motivation wird nicht gesteigert',
                    'Motivation wird teilweise gesteigert',
                    'Motivation wird gesteigert',
                    // Base: Beteiligung hochhalten
                    'Beteiligung ist nicht hoch',
                    'Beteiligung ist teilweise hoch',
                    'Beteiligung ist hoch'
                ]
            },
            '3.3': {
                titel: 'Rhythmisierung',
                tags: [
                    // Base: Wechsel der Aktivitäten
                    'Wechsel der Lernaktivitäten wird nicht geplant',
                    'Wechsel der Lernaktivitäten wird teilweise geplant',
                    'Wechsel der Lernaktivitäten wird geplant',
                    // Base: Konzentration aufrechterhalten
                    'Konzentration wird nicht aufrechterhalten',
                    'Konzentration wird teilweise aufrechterhalten',
                    'Konzentration wird aufrechterhalten',
                    // Base: Monotonie vermeiden
                    'Monotonie wird nicht vermieden',
                    'Monotonie wird teilweise vermieden',
                    'Monotonie wird vermieden',
                    // Base: Aufmerksamkeit steuern
                    'Aufmerksamkeit wird nicht gesteuert',
                    'Aufmerksamkeit wird teilweise gesteuert',
                    'Aufmerksamkeit wird gesteuert'
                ]
            },
            '3.4': {
                titel: 'Analog-digital Verschränkung',
                tags: [
                    // Base: Analoge Settings anreichern
                    'Analoge Settings werden nicht angereichert',
                    'Analoge Settings werden teilweise angereichert',
                    'Analoge Settings werden angereichert',
                    // Base: Kooperation fördern
                    'Kooperation wird nicht gefördert',
                    'Kooperation wird teilweise gefördert',
                    'Kooperation wird gefördert',
                    // Base: Feedback geben
                    'Peer-Feedback wird nicht gegeben',
                    'Peer-Feedback wird teilweise gegeben',
                    'Peer-Feedback wird gegeben',
                    // Base: Ressourcen zugänglich
                    'Zugriff auf Ressourcen wird nicht ermöglicht',
                    'Zugriff auf Ressourcen wird teilweise ermöglicht',
                    'Zugriff auf Ressourcen wird ermöglicht'
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
                    // Base: Tests auswerten
                    'Tests werden nicht automatisch ausgewertet',
                    'Tests werden teilweise automatisch ausgewertet',
                    'Tests werden automatisch ausgewertet',
                    // Base: Fortschritt verfolgen
                    'Lernfortschritt wird nicht verfolgt',
                    'Lernfortschritt wird teilweise verfolgt',
                    'Lernfortschritt wird verfolgt',
                    // Base: Kompetenz erfasst
                    'Kompetenzstand wird nicht erfasst',
                    'Kompetenzstand wird teilweise erfasst',
                    'Kompetenzstand wird erfasst',
                    // Base: Individuelle Entwicklung
                    'Individuelle Entwicklung wird nicht erkennbar',
                    'Individuelle Entwicklung wird teilweise erkennbar',
                    'Individuelle Entwicklung wird erkennbar'
                ]
            },
            '4.2': {
                titel: 'Differenzierte Aufgaben',
                tags: [
                    // Base: Anspruch anpassen
                    'Anspruchsniveau wird nicht angepasst',
                    'Anspruchsniveau wird teilweise angepasst',
                    'Anspruchsniveau wird angepasst',
                    // Base: Lernzugänge anbieten
                    'Verschiedene Lernzugänge werden nicht angeboten',
                    'Verschiedene Lernzugänge werden teilweise angeboten',
                    'Verschiedene Lernzugänge werden angeboten',
                    // Base: Individuelle Voraussetzungen beachten
                    'Individuelle Voraussetzungen werden nicht beachtet',
                    'Individuelle Voraussetzungen werden teilweise beachtet',
                    'Individuelle Voraussetzungen werden beachtet',
                    // Base: Über-/Unterforderung vermeiden
                    'Über- und Unterforderung wird nicht vermieden',
                    'Über- und Unterforderung wird teilweise vermieden',
                    'Über- und Unterforderung wird vermieden'
                ]
            },
            '4.3': {
                titel: 'Feedback & Unterstützung',
                tags: [
                    // Base: Feedback geben
                    'Zeitnahes Feedback wird nicht gegeben',
                    'Zeitnahes Feedback wird teilweise gegeben',
                    'Zeitnahes Feedback wird gegeben',
                    // Base: Unterstützung bereitstellen
                    'Unterstützung bei Aufgaben wird nicht bereitgestellt',
                    'Unterstützung bei Aufgaben wird teilweise bereitgestellt',
                    'Unterstützung bei Aufgaben wird bereitgestellt',
                    // Base: Automatisiertes Feedback
                    'Automatisiertes Feedback wird nicht integriert',
                    'Automatisiertes Feedback wird teilweise integriert',
                    'Automatisiertes Feedback wird integriert',
                    // Base: Begleitung erweitern
                    'Begleitung wird nicht erweitert',
                    'Begleitung wird teilweise erweitert',
                    'Begleitung wird erweitert'
                ]
            },
            '4.4': {
                titel: 'Selbststeuerung',
                tags: [
                    // Base: Autonomie einräumen
                    'Autonomie wird nicht eingeräumt',
                    'Autonomie wird teilweise eingeräumt',
                    'Autonomie wird eingeräumt',
                    // Base: Lernangebot strukturieren
                    'Strukturiertes Lernangebot wird nicht bereitgestellt',
                    'Strukturiertes Lernangebot wird teilweise bereitgestellt',
                    'Strukturiertes Lernangebot wird bereitgestellt',
                    // Base: Selbstgesteuertes Lernen fördern
                    'Selbstgesteuertes Lernen wird nicht gefördert',
                    'Selbstgesteuertes Lernen wird teilweise gefördert',
                    'Selbstgesteuertes Lernen wird gefördert',
                    // Base: Zielverfolgung unterstützen
                    'Individuelle Zielverfolgung wird nicht unterstützt',
                    'Individuelle Zielverfolgung wird teilweise unterstützt',
                    'Individuelle Zielverfolgung wird unterstützt'
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
                    // Base: Kreative Produkte erstellen
                    'Kreative Lernprodukte werden nicht erstellt',
                    'Kreative Lernprodukte werden teilweise erstellt',
                    'Kreative Lernprodukte werden erstellt',
                    // Base: Feedback einarbeiten
                    'Feedback wird nicht eingearbeitet',
                    'Feedback wird teilweise eingearbeitet',
                    'Feedback wird eingearbeitet',
                    // Base: Flexible Erstellung
                    'Flexible Erstellung von Produkten wird nicht ermöglicht',
                    'Flexible Erstellung von Produkten wird teilweise ermöglicht',
                    'Flexible Erstellung von Produkten wird ermöglicht',
                    // Base: Reflexion des Prozesses
                    'Entstehungsprozess wird nicht reflektiert',
                    'Entstehungsprozess wird teilweise reflektiert',
                    'Entstehungsprozess wird reflektiert'
                ]
            },
            '5.2': {
                titel: 'Lernstrategien vermitteln',
                tags: [
                    // Base: Strategien einüben
                    'Lernstrategien werden nicht eingeübt',
                    'Lernstrategien werden teilweise eingeübt',
                    'Lernstrategien werden eingeübt',
                    // Base: Wissenserwerb fördern
                    'Nachhaltiger Wissenserwerb wird nicht gefördert',
                    'Nachhaltiger Wissenserwerb wird teilweise gefördert',
                    'Nachhaltiger Wissenserwerb wird gefördert',
                    // Base: Medien zielgerichtet einsetzen
                    'Medien werden nicht zielgerichtet eingesetzt',
                    'Medien werden teilweise zielgerichtet eingesetzt',
                    'Medien werden zielgerichtet eingesetzt',
                    // Base: Problemlösung aufbauen
                    'Problemlösungsfähigkeiten werden nicht aufgebaut',
                    'Problemlösungsfähigkeiten werden teilweise aufgebaut',
                    'Problemlösungsfähigkeiten werden aufgebaut'
                ]
            },
            '5.3': {
                titel: 'Medienkompetenz aufbauen',
                tags: [
                    // Base: Kompetenzen erwerben
                    'Medienkompetenzen werden nicht erworben',
                    'Medienkompetenzen werden teilweise erworben',
                    'Medienkompetenzen werden erworben',
                    // Base: Reflektierte Nutzung
                    'Reflektierte Nutzung wird nicht gefördert',
                    'Reflektierte Nutzung wird teilweise gefördert',
                    'Reflektierte Nutzung wird gefördert',
                    // Base: Aktive Auseinandersetzung
                    'Aktive Auseinandersetzung wird nicht gefördert',
                    'Aktive Auseinandersetzung wird teilweise gefördert',
                    'Aktive Auseinandersetzung wird gefördert',
                    // Base: Langfristiger Aufbau
                    'Langfristiger Kompetenzaufbau wird nicht ermöglicht',
                    'Langfristiger Kompetenzaufbau wird teilweise ermöglicht',
                    'Langfristiger Kompetenzaufbau wird ermöglicht'
                ]
            },
            '5.4': {
                titel: 'Differenzierte Übungen',
                tags: [
                    // Base: Differenzierte Übungen
                    'Differenzierte Übungsaufgaben werden nicht angeboten',
                    'Differenzierte Übungsaufgaben werden teilweise angeboten',
                    'Differenzierte Übungsaufgaben werden angeboten',
                    // Base: Feedback in Übungen
                    'Direktes Feedback wird nicht gegeben',
                    'Direktes Feedback wird teilweise gegeben',
                    'Direktes Feedback wird gegeben',
                    // Base: Individuelle Gestaltung
                    'Lernprozess wird nicht individuell gestaltet',
                    'Lernprozess wird teilweise individuell gestaltet',
                    'Lernprozess wird individuell gestaltet',
                    // Base: Nachhaltige Verankerung
                    'Nachhaltige Verankerung wird nicht unterstützt',
                    'Nachhaltige Verankerung wird teilweise unterstützt',
                    'Nachhaltige Verankerung wird unterstützt'
                ]
            }
        }
    }
};
const bewertungsSkala = [
    { wert: "nicht beobachtbar", label: 'nicht beobachtbar', farbe: 'bg-gray-300' },
    { wert: 0, label: 'nicht erkennbar', farbe: 'bg-gray-300' },
    { wert: 1, label: 'im Ansatz erkennbar', farbe: 'bg-red-300' },
    { wert: 2, label: 'teilweise erkennbar', farbe: 'bg-orange-300' },
    { wert: 3, label: 'weitgehend erkennbar', farbe: 'bg-yellow-300' },
    { wert: 4, label: 'voll ausgeprägt', farbe: 'bg-green-300' }
];
const sozialformen = ['Plenum', 'Lehrervortrag', 'Einzelarbeit', 'Partnerarbeit', 'Gruppenarbeit', 'Freie Wahl', 'Leerlauf', 'Andere'];

let currentSessionId = null;
let sessions = [];
let formData = { name: '', klasse: '', fach: '', thema: '', datum: '', dauer: 45, photos: [], generalNotes: '', highlight: [], besprechen: [], phasen: [] };
let bewertungen = {};
let quillEditor = null;

// Local Storage Funktionen
async function saveSessionsToStorage() {
    try {
        const db = await openDB();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        // Lösche alle vorhandenen Sessions
        const clearRequest = store.clear();
        await new Promise((resolve, reject) => {
            clearRequest.onsuccess = () => resolve();
            clearRequest.onerror = () => reject('Fehler beim Löschen der Sessions');
        });

        // Speichere alle aktuellen Sessions
        for (const session of sessions) {
            const request = store.put(session);
            await new Promise((resolve, reject) => {
                request.onsuccess = () => resolve();
                request.onerror = () => reject('Fehler beim Speichern der Session');
            });
        }

        db.close();
    } catch (error) {
        console.error('Fehler beim Speichern in IndexedDB:', error);
    }
}

async function loadSessionsFromStorage() {
    try {
        const db = await openDB();
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        const result = await new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject('Fehler beim Laden der Sessions');
        });

        sessions = result || [];
        db.close();
    } catch (error) {
        console.error('Fehler beim Laden aus IndexedDB:', error);
        sessions = [];
    }
}

// Initialisiere Bewertungen
function initBewertungen() {
    bewertungen = {};
    Object.keys(kategorien).forEach(kat => {
        Object.keys(kategorien[kat].unterkategorien).forEach(uk => {
            bewertungen[uk] = { bewertung: null, notizen: '', tags: [] };
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
document.addEventListener('DOMContentLoaded', async function () {
    initBewertungen();
    await initApp();
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

async function initApp() {
    await loadSessionsFromStorage(); // Sessions aus IndexedDB laden

    // Rest des bestehenden Codes bleibt unverändert
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
                ['clean']
            ]
        }
    });
    quillEditor.on('text-change', function () {
        formData.generalNotes = quillEditor.root.innerHTML;
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
            formData[id] = escapeHtml(e.target.value.trim());
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
            const initialWert = bewertungen[ukKey]?.bewertung ?? "nicht beobachtbar";
            const escapedTitel = escapeHtml(ukData.titel);
            return `
                                <div class="uk">
                                    <h3 class="font-bold mb-3">${ukKey}: ${escapedTitel}</h3>
                                    <div class="mb-4">
                                        <div class="mb-2">
                                            <span class="text-sm font-medium block mb-2">Bewertung:</span>
                                            <div class="rating-buttons" data-rating-buttons="${ukKey}">
                                                ${bewertungsSkala.map(skala => {
                                                    const isActive = initialWert === skala.wert;
                                                    return `
                                                        <button type="button" 
                                                            data-uk="${ukKey}" 
                                                            data-wert="${skala.wert}"
                                                            class="rating-button ${isActive ? skala.farbe + ' active' : ''}">
                                                            ${escapeHtml(skala.label)}
                                                        </button>
                                                    `;
                                                }).join('')}
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
        const wertStr = e.target.getAttribute('data-wert');
        
        let wert;
        if (wertStr === 'nicht beobachtbar') {
            wert = null;  // Speziell für "nicht beobachtbar"
        } else {
            wert = Number(wertStr);
        }

        bewertungen[ukKey].bewertung = wert;

        // Update button styles
        const buttonsContainer = e.target.closest('[data-rating-buttons]');
        buttonsContainer.querySelectorAll('.rating-button').forEach(btn => {
            const btnWertStr = btn.getAttribute('data-wert');
            let btnWert;
            if (btnWertStr === 'nicht beobachtbar') {
                btnWert = null;
            } else {
                btnWert = Number(btnWertStr);
            }
            const skala = bewertungsSkala.find(s => s.wert === btnWertStr || s.wert === btnWert);
            if ((wertStr === 'nicht beobachtbar' && btnWertStr === 'nicht beobachtbar') || (btnWert === wert)) {
                btn.className = `rating-button ${skala?.farbe || 'bg-gray-300'} active`;
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
    const maxSize = 50 * 1024 * 1024; // 50MB
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

async function saveSession() {
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
    await saveSessionsToStorage(); // Asynchron speichern
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

async function deleteSession() {
    if (confirm('Session wirklich löschen?')) {
        sessions = sessions.filter(s => s.id !== currentSessionId);
        await saveSessionsToStorage(); // Asynchron speichern
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
                    const val = data.bewertungen[uk].bewertung;
                    bewertungen[uk] = {
                        bewertung: (val === null || val === undefined) ? null : Math.max(0, Math.min(4, val)),
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
        let fehlendeWerte = 0;
        unterkategorienKeys.forEach(uk => {
            let wert = bewertungen[uk]?.bewertung;
            if (wert === null || wert === undefined) {
                fehlendeWerte++;
            } else {
                alleWerte.push(wert);
            }
        });

        const sum = alleWerte.reduce((a, b) => a + b, 0);
        const durchschnitt = alleWerte.length > 0 ? sum / alleWerte.length : 0;
        const prozent = ((durchschnitt / 4) * 100).toFixed(0);

        stats[kat] = {
            prozent: prozent,
            anzahl: unterkategorienKeys.length - fehlendeWerte,
            gesamt: unterkategorienKeys.length,
            nichtBeobachtbar: fehlendeWerte === unterkategorienKeys.length
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
                            <span style="width: 50%;">${phase.zeit} - ${escapeHtml(phase.sozialform || 'Keine')}</span>
                            <span style="width: 50%;">${escapeHtml(phase.notiz || '')}</span>
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
    ? '<span class="text-gray-500 italic">nicht beobachtbar</span>'
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
    if (!bew || bew.bewertung === null) return;  // Überspringe, wenn nicht vorhanden oder nicht beobachtbar
    hasContent = true;
    const ukDiv = document.createElement('div');
    ukDiv.className = 'uk-detail';
    
    let bewertungNum = bew.bewertung ?? 0;
    const prozent = (bew.bewertung === null) ? 'nicht beobachtbar' : ((bewertungNum / 4) * 100).toFixed(0) + '%';
    const skala = (bew.bewertung === null) ? bewertungsSkala[0] : (bewertungsSkala.find(s => s.wert === bew.bewertung) || bewertungsSkala[1]);

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