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
    1: {
        titel: 'Effektive Klassenführung',
        farbe: 'purple',
        beschreibung: 'Grundlage lernwirksamen Unterrichts durch wenige Störungen, effektive Zeitnutzung und positives Lernklima',
        unterkategorien: {
            '1.1': {
                titel: 'Störungsprävention',
                tags: [
                    'Lehrkraft achtet nicht auf die Einhaltung von Regeln',
                    'Lehrkraft achtet teilweise auf die Einhaltung von Regeln',
                    'Lehrkraft achtet auf die Einhaltung von Regeln',
                    'Lehrkraft etabliert klare Regeln und Konsequenzen'
                ]
            },
            '1.2': {
                titel: 'Effektive Nutzung der Lernzeit',
                tags: [
                    'Lernende sind nicht mit Inhalten beschäftigt',
                    'Lernende sind teilweise mit Inhalten beschäftigt',
                    'Lernende sind durchgängig mit Inhalten beschäftigt',
                    'Zeitabläufe sind optimal'
                ]
            },
            '1.3': {
                titel: 'Lernförderliches Unterrichtsklima',
                tags: [
                    'Die Lehrkraft achtet nicht auf einen wertschätzenden Umgang',
                    'Die Lehrkraft achtet teilweise auf einen wertschätzenden Umgang',
                    'Die Lehrkraft achtet auf einen wertschätzenden Umgang'
                ]
            }
        }
    },
    2: {
        titel: 'Nachvollziehbarkeit des Lernangebots',
        farbe: 'blue',
        beschreibung: 'Klarheit und Struktur im Lernangebot durch definierte Ziele, Kompetenzen und anschauliche Inhaltsdarstellung.',
        unterkategorien: {
            '2.1': {
                titel: 'Ziele und Kompetenzen',
                tags: [
                    // Base: Kompetenzorientierung
                    'Lernangebot ist nicht kompetenzorientiert',
                    'Lernangebot ist teilweise kompetenzorientiert',
                    'Lernangebot ist kompetenzorientiert',
                    // Base: Lernziele kommunizieren
                    'Lernziele werden nicht kommuniziert',
                    'Lernziele werden teilweise kommuniziert',
                    'Lernziele werden kommuniziert',
                    // Base: Erwartungen
                    'Bezug zu den Lernzielen wird im Unterricht nicht erkennbar',
                    'Bezug zu den Lernzielen wird im Unterricht teilweise erkennbar',
                    'Bezug zu den Lernzielen wird im Unterricht deutlich erkennbar',
                    // Base: Erwartungen
                    'Erwartungen werden nicht kommuniziert',
                    'Erwartungen werden teilweise kommuniziert',
                    'Erwartungen werden klar kommuniziert',
                ]
            },
            '2.2': {
                titel: 'Anschauliche Darstellung von Unterrichtsinhalten',
                tags: [
                     // Base: Strukturierung der Inhalte
                    'Unterrichtsinhalte werden nicht strukturiert',
                    'Unterrichtsinhalte werden teilweise strukturiert',
                    'Unterrichtsinhalte werden strukturiert',
                    // Base: Visuelle Materialien einsetzen
                    'Visuelle/auditive Materialien helfen nicht beim Lernen',
                    'Visuelle/auditive Materialien helfen teilweise beim Lernen',
                    'Visuelle/auditive Materialien helfen beim Lernen',
                    // Base: Interesse wekcen
                    'Lehrkaft nutzt keine verständliche, altersgerechte Sprache',
                    'Lehrkaft nutzt teilweise eine verständliche, altersgerechte Sprache',
                    'Lehrkaft nutzt eine verständliche, altersgerechte Sprache',
                ]
            },
        }
    },
    4: {
        titel: 'Schülerorientierung',
        farbe: 'green',
        beschreibung: 'Fokussierung auf Schülerbedürfnisse durch aktive Einbindung, lebensweltliche Bezüge und Kompetenzerleben.',
        unterkategorien: {
            '4.1': {
                titel: 'Beiträge der Schüler',
                tags: [
                    // Base: Bewusster Umgang lehren
                    'Lehrkraft sorgt nicht für eine aktive Rolle der Schüler',
                    'Lehrkraft sorgt teilweise für eine aktive Rolle der Schüler',
                    'Lehrkraft sorgt für eine aktive Rolle der Schüler',
                    // Base: Mediennutzung reflektieren
                    'Lehrkraft geht wertschätzend mit Schülerbeiträgen um',
                    'Lehrkraft geht teiwleise wertschätzend mit Schülerbeiträgen um',
                    'Lehrkraft geht wertschätzend mit Schülerbeiträgen um',
                    // Base: Präventionsarbeit
                    'Lehrkraft reagiert nicht auf Anregungen und Bedürfnisse der Schüler',
                    'Lehrkraft reagiert teilweise auf Anregungen und Bedürfnisse der Schüler',
                    'Lehrkraft reagiert flexibel auf Anregungen und Bedürfnisse der Schüler',
                ]
            },
            '4.2': {
                titel: 'Alltags- und Anwendungsbezug',
                tags: [
                    // Base: Recherchemöglichkeiten geben
                    'Lehrkraft thematisiert die Relevanz der Unterrichtsinhalte nicht',
                    'Lehrkraft thematisiert teilweise die Relevanz der Unterrichtsinhalte',
                    'Lehrkraft thematisiert die Relevanz der Unterrichtsinhalte',
                    // Base: Aktuelle Themen aufgreifen
                    'Aktuelle Themen werden nicht aufgegriffen',
                    'Aktuelle Themen werden teilweise aufgegriffen',
                    'Aktuelle Themen werden aufgegriffen',
                    // Base: Lebensweltbezug herstellen
                    'Lebensweltbezug wird nicht hergestellt',
                    'Lebensweltbezug wird teilweise hergestellt',
                    'Lebensweltbezug wird hergestellt',

                ]
            },
                '4.3': {
                titel: 'Erleben eigener Kompetenz',
                tags: [
                    // Base: Ermutigung
                    'Lehrkraft ermutigen nicht Schüler zum Überwinden von Schwerigkeiten',
                    'Lehrkraft ermutigen teilweise Schüler zum Überwinden von Schwerigkeiten',
                    'Lehrkraft ermutigen Schüler zum Überwinden von Schwerigkeiten',
                    // Base: Ausbau von Stärken
                    'Lehrkraft ermutigen nicht Schüler zum Ausbau ihrer Stärken',
                    'Lehrkraft ermutigen teilweise Schüler zum Ausbau ihrer Stärken',
                    'Lehrkraft ermutigen Schüler zum zum Ausbau ihrer Stärken',
                    // Base: Aktuelle Themen aufgreifen
                    'Fehler werden nicht als Lerngelegenheit behandelt',
                    'Fehler werden teilweise als Lerngelegenheit behandelt',
                    'Fehler werden als Lerngelegenheit behandelt',
                    // Base: Selbsteinschätzung
                    'Lehrkaft bietet Schülern  nicht die Möglichkeit sich selbst einzuschätzen',
                    'Lehrkaft bietet Schülern teilweise die Möglichkeit sich selbst einzuschätzen',
                    'Lehrkaft bietet Schülern die Möglichkeit sich selbst einzuschätzen',
                ]
            },
        }
    },
    3: {
        titel: 'Variation der Lehr- und Lernmethoden',
        farbe: 'yellow',
        beschreibung: 'Vielfalt in Methoden und Ansätzen zur Förderung aktiver Teilnahme und individueller Lernprozesse.',
        unterkategorien: {
            '3.1': {
                titel: 'Variation',
                tags: [
                    // Base: Methodenvielfalt
                    'Verschiedene Methoden werden nicht eingesetzt',
                    'Verschiedene Methoden werden teilweise eingesetzt',
                    'Verschiedene Methoden werden eingesetzt',
                    // Base: Sozialformen variieren
                    'Sozialformen werden nicht variiert',
                    'Sozialformen werden teilweise variiert',
                    'Sozialformen werden variiert',
                    // Base: Aufgabenformate variieren
                    'Aufgabenformate werden nicht variiert',
                    'Aufgabenformate werden teilweise variiert',
                    'Aufgabenformate werden variiert',
                ]
            },
            '3.2': {
                titel: 'Motivation und Förderung aktiver Teilnahme',
                tags: [
                    // Base: Motivation steigert
                    'Motivation wird nicht gesteigert',
                    'Motivation wird teilweise gesteigert',
                    'Motivation wird gesteigert',
                    // Base: Kooperation fördern
                    'Kooperation wird nicht gefördert',
                    'Kooperation wird teilweise gefördert',
                    'Kooperation wird gefördert',
                    // Base: Peer-Feedback
                    'Peer-Feedback wird nicht eingesetzt',
                    'Peer-Feedback wird teilweise eingesetzt',
                    'Peer-Feedback wird eingesetzt',
                    // Base: Aktive Beteiligung
                    'Aktive Beteiligung wird nicht erreicht',
                    'Aktive Beteiligung wird teilweise erreicht',
                    'Aktive Beteiligung wird erreicht',
                ]
            },
        }
    },
    5: {
        titel: 'Berücksichtigung verschiedener Lernvoraussetzungen',
        farbe: 'orange',
        beschreibung: 'Individuelle Förderung durch Lernstandserfassung, differenzierte Unterstützung und Selbststeuerung.',
        unterkategorien: {
            '5.1': {
                titel: 'Lernstandserfassung und Anpassung des Lernangebots',
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
                    // Base: Individuelle Voraussetzungen beachten
                    'Individuelle Voraussetzungen werden nicht beachtet',
                    'Individuelle Voraussetzungen werden teilweise beachtet',
                    'Individuelle Voraussetzungen werden beachtet',
                ]
            },
            '5.2': {
                titel: 'Lernförderliches Feedback und Unterstützung',
                tags: [
                    // Base: Unterstützung bereitstellen
                    'Unterstützung bei Aufgaben wird nicht bereitgestellt',
                    'Unterstützung bei Aufgaben wird teilweise bereitgestellt',
                    'Unterstützung bei Aufgaben wird bereitgestellt',
                    // Base: Feedback geben
                    'Direktes Feedback wird nicht gegeben',
                    'Direktes Feedback wird teilweise gegeben',
                    'Direktes Feedback wird gegeben',
                    // Base: Kollaborative Werkzeuge
                    'Kollaborative Werkzeuge werden nicht genutzt',
                    'Kollaborative Werkzeuge werden teilweise genutzt',
                    'Kollaborative Werkzeuge werden genutzt',
                ]
            },
            '5.3': {
                titel: 'Selbststeuerung',
                tags: [
                    // Base: Autonomie einräumen
                    'Autonomie wird nicht eingeräumt',
                    'Autonomie wird teilweise eingeräumt',
                    'Autonomie wird eingeräumt',
                    // Base: Selbstgesteuertes Lernen fördern
                    'Selbstgesteuertes Lernen wird nicht gefördert',
                    'Selbstgesteuertes Lernen wird teilweise gefördert',
                    'Selbstgesteuertes Lernen wird gefördert',
                    // Base: Formatives Feedback
                    'Formatives Feedback wird nicht ermöglicht',
                    'Formatives Feedback wird teilweise ermöglicht',
                    'Formatives Feedback wird ermöglicht',
                ]
            }
        }
    },
    6: {
        titel: 'Nachhaltiges Lernen',
        farbe: 'red',
        beschreibung: 'Tiefgehender Wissenserwerb durch Vernetzung, herausfordernde Aufgaben und gezielte Übungsphasen.',
        unterkategorien: {
            '6.1': {
                titel: 'Vernetzung des Wissens',
                tags: [
                    // Base: Fachliche Zusammenhänge
                    'Lehrkraft macht fachliche Zusammenhänge nicht deutlich',
                    'Lehrkraft macht fachliche Zusammenhänge teilweise deutlich',
                    'Lehrkraft macht fachliche Zusammenhänge deutlich',
                    // Base: Überfachliche Zusammenhänge
                    'Lehrkraft macht überfachliche Zusammenhänge nicht deutlich',
                    'Lehrkraft macht überfachliche Zusammenhänge teilweise deutlich',
                    'Lehrkraft macht überfachliche Zusammenhänge deutlich',
                    // Base: Neue Kenntnisse
                    'Schüler bekommen keine Gelegenheit, sich über neu gewonnene Erkentnisse zu äußern.',
                    'Schüler bekommen teilweise Gelegenheit, sich über neu gewonnene Erkentnisse zu äußern.',
                    'Schüler bekommen Gelegenheit, sich über neu gewonnene Erkentnisse zu äußern.',
                ]
            },
            '6.2': {
                titel: 'Qualitätsvolle Aufgaben',
                tags: [
                    // Base: Problemlösung aufbauen
                    'Problemlösungsfähigkeiten werden nicht aufgebaut',
                    'Problemlösungsfähigkeiten werden teilweise aufgebaut',
                    'Problemlösungsfähigkeiten werden aufgebaut',
                     // Base: Herausfordernde Aufgaben
                    'Herausfordernde Aufgaben werden nicht gestellt',
                    'Herausfordernde Aufgaben werden teilweise gestellt',
                    'Herausfordernde Aufgaben werden gestellt',
                    // Base: Strategien einüben
                    'Lernstrategien werden nicht eingeübt',
                    'Lernstrategien werden teilweise eingeübt',
                    'Lernstrategien werden eingeübt',
                    // Base: Wissenserwerb fördern
                    'Nachhaltiger Wissenserwerb wird nicht gefördert',
                    'Nachhaltiger Wissenserwerb wird teilweise gefördert',
                    'Nachhaltiger Wissenserwerb wird gefördert',
                ]
            },
            '6.3': {
                titel: 'Übungsphase und Ergebnissicherung ',
                tags: [
                    // Base: Differenzierte Übungen
                    'Differenzierte Übungsaufgaben werden nicht angeboten',
                    'Differenzierte Übungsaufgaben werden teilweise angeboten',
                    'Differenzierte Übungsaufgaben werden angeboten',
                    // Base: Sicheurng
                    'Das Gelernte wird nicht gesichert',
                    'Das Gelernte wird teilweise gesichert',
                    'Das Gelernte wird gesichert',
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

    container.innerHTML = allTags.map(tag => {
        const escapedTag = escapeHtml(tag);
        const isSelected = selectedTags.includes(tag);
        const buttonClass = isSelected ? 'tag-btn disabled' : 'tag-btn';
        const buttonText = isSelected ? `✓ ${escapedTag}` : `+ ${escapedTag}`;
        const onclick = isSelected ? '' : `onclick="addTag('${ukKey}', '${escapedTag.replace(/'/g, "\\'")}')"` ;
        const disabledAttr = isSelected ? 'disabled' : '';
        return `
                    <button type="button" ${onclick} ${disabledAttr} class="${buttonClass}">
                        ${buttonText}
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
    a.download = `${formData.datum}_hospitation_${escapeHtml(formData.name || 'unnamed')}.json`;
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