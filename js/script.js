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

// Kategorien-Daten (aus PDF, unverändert)
const kategorien = {
    'K': {
        titel: 'Effektive Klassenführung',
        farbe: 'purple',
        beschreibung: 'Grundlage für lernförderlichen Unterricht: Wenige Störungen, effektive Nutzung der Zeit, positives Klima.',
        unterkategorien: {
            'K.1': {
                titel: 'Störungsprävention',
                checklist: [
                    'Klare Regeln und Routinen sind bekannt und werden konsequent eingefordert',
                    'Lehrkraft ist präsent und achtet auf Einhaltung in Arbeits- und Kommunikationsphasen',
                    'Frühe Erkennung von Problemen und angemessenes Eingreifen',
                    'Geräte und Materialien sind klar geregelt, um Ablenkungen zu minimieren'
                ]
            },
            'K.2': {
                titel: 'Effektive Nutzung der Lernzeit',
                checklist: [
                    'Einheitliche Strukturen und Orientierungshilfen für Schüler und Lehrkraft',
                    'Vorbereitete Umgebung für reibungslose Abläufe und klare Fristen',
                    'Systematische Einführung von Arbeitsweisen, Fokus auf Inhalte',
                    'Schüler sind beschäftigt, Hindernisse werden schnell beseitigt'
                ]
            },
            'K.3': {
                titel: 'Lernförderliches Klima',
                checklist: [
                    'Wertschätzender Umgang und vertrauensvolle Beziehung',
                    'Schüler äußern sich offen und angstfrei',
                    'Positive Atmosphäre, die Lernen unterstützt'
                ]
            }
        }
    },
    1: {
        titel: 'Veranschaulichung',
        farbe: 'blue',
        beschreibung: 'Strukturierung von Inhalten und Prozessen für besseres Verständnis und Ergebnissicherung.',
        unterkategorien: {
            '1.1': {
                titel: 'Strukturierung der Lehr- und Lerninhalte',
                checklist: [
                    'Klare Visualisierung von Aufträgen und Erwartungen',
                    'Nachvollziehbare Bereitstellung von Inhalten und Abläufen',
                    'Übersicht über Ziele, Fristen und Zwischenziele'
                ]
            },
            '1.2': {
                titel: 'Anschauliche Darstellung von Unterrichtsinhalten',
                checklist: [
                    'Multimediale Angebote für Verständnis (z. B. visuelle und auditive Elemente)',
                    'Abstrakte Konzepte durch Beispiele und Modelle nachvollziehbar machen',
                    'Verbindung von Neuem zu Bekanntem, Interesse wecken'
                ]
            },
            '1.3': {
                titel: 'Ergebnissicherung',
                checklist: [
                    'Sichtbare Präsentation von Lernergebnissen',
                    'Strukturierte Vertiefung und Wiederholung der Inhalte',
                    'Dokumentation und Anreicherung von Materialien zur Nachbereitung'
                ]
            }
        }
    },
    2: {
        titel: 'Lebensweltbezug',
        farbe: 'green',
        beschreibung: 'Berücksichtigung von Mediennutzung und realen Kontexten für Relevanz und Motivation.',
        unterkategorien: {
            '2.1': {
                titel: 'Aufgreifen des Mediennutzungsverhaltens',
                checklist: [
                    'Gezielte Nutzung zu Lernzwecken jenseits von Unterhaltung',
                    'Reflexion des alltäglichen Medienverhaltens',
                    'Thematisierung von Herausforderungen wie Überkonsum'
                ]
            },
            '2.2': {
                titel: 'Alltags- und Anwendungsbezug',
                checklist: [
                    'Berücksichtigung individueller Interessen und Lernwege',
                    'Lernförderliche Nutzung für Kompetenzen und Teilhabe',
                    'Rückgriff auf bekannte Quellen (z. B. Medien aus dem Alltag) und Reflexion'
                ]
            }
        }
    },
    3: {
        titel: 'Methodenvielfalt',
        farbe: 'yellow',
        beschreibung: 'Variation von Methoden und Sozialformen für Rhythmisierung und Motivation.',
        unterkategorien: {
            '3.1': {
                titel: 'Angemessene Variation der Lehr- und Lernmethoden',
                checklist: [
                    'Erweiterung des Repertoires durch flexible Methoden und Sozialformen',
                    'Aktive Beteiligung durch interaktive und kreative Formate',
                    'Rhythmisierung des Unterrichts durch Wechsel von Aufgaben'
                ]
            },
            '3.2': {
                titel: 'Verschränkung analoger und digitaler Lernsettings',
                checklist: [
                    'Schneller Zugriff auf Ressourcen zur Anreicherung analoger Settings',
                    'Kooperative Prozesse und Peer-Feedback',
                    'Ergänzung analoger Möglichkeiten durch vielfältige Gestaltung'
                ]
            }
        }
    },
    4: {
        titel: 'Individualisiertes Lernen',
        farbe: 'orange',
        beschreibung: 'Anpassung an Voraussetzungen durch Erfassung, Feedback und Selbststeuerung.',
        unterkategorien: {
            '4.1': {
                titel: 'Lernstandserfassung und Anpassung des Lernangebots',
                checklist: [
                    'Automatisierte Auswertung von Tests für unmittelbares Feedback',
                    'Nachverfolgung des individuellen Fortschritts',
                    'Differenzierte Aufgaben unter Berücksichtigung von Voraussetzungen'
                ]
            },
            '4.2': {
                titel: 'Lernförderliches Feedback und Unterstützung',
                checklist: [
                    'Vielfältige Unterstützung bei Aufgabenbearbeitung',
                    'Zeitnahes individuelles Feedback',
                    'Integration von Übungen mit Feedback und kollaborativen Austausch'
                ]
            },
            '4.3': {
                titel: 'Unterstützung des selbstgesteuerten Lernens',
                checklist: [
                    'Autonomie und Wahlfreiheit in der Gestaltung',
                    'Strukturiertes Angebot für Selbstorganisation',
                    'Förderung durch Projekte und Arbeitshilfen'
                ]
            }
        }
    },
    5: {
        titel: 'Kompetenzorientierte Aufgabenformate & intelligentes Üben',
        farbe: 'red',
        beschreibung: 'Aktive Auseinandersetzung, Medienkompetenz und nachhaltige Verankerung.',
        unterkategorien: {
            '5.1': {
                titel: 'Medienproduktive und kollaborative Aufgabenformate',
                checklist: [
                    'Aktive Erstellung kreativer Produkte (z. B. Präsentationen, Videos)',
                    'Flexible und ortsunabhängige Bearbeitung',
                    'Überarbeitung basierend auf Feedback'
                ]
            },
            '5.2': {
                titel: 'Systematischer Erwerb von Medienkompetenz',
                checklist: [
                    'Einüben und Reflektieren von Lern- und Organisationsstrategien',
                    'Kritische Reflexion der Medienanwendung',
                    'Fachintegrativer Aufbau durch regelmäßige Nutzung'
                ]
            },
            '5.3': {
                titel: 'Intelligentes Üben',
                checklist: [
                    'Sofortige Überprüfung und direktes Feedback',
                    'Differenzierte Übungsaufgaben nach Voraussetzungen',
                    'Vernetzung mit Vorwissen und Anwendung in neuen Kontexten'
                ]
            }
        }
    }
};

const bewertungsSkala = [
    { wert: "nicht beobachtbar", label: 'nicht beobachtbar', farbe: 'bg-gray-300' },
    { wert: 0, label: 'nicht erkennbar', farbe: 'bg-gray-300' },
    { wert: 1, label: 'teilweise erkennbar', farbe: 'bg-red-300' },
    { wert: 2, label: 'erkennbar', farbe: 'bg-orange-300' },
    { wert: 3, label: 'weitgehend erkennbar', farbe: 'bg-yellow-300' },
    { wert: 4, label: 'voll ausgeprägt', farbe: 'bg-green-300' }
];
const sozialformen = ['Plenum', 'Lehrervortrag', 'Einzelarbeit', 'Partnerarbeit', 'Gruppenarbeit', 'Freie Wahl', 'Leerlauf', 'Andere'];

let currentSessionId = null;
let sessions = [];
let formData = { name: '', klasse: '', fach: '', thema: '', datum: '', dauer: 45, photos: [], generalNotes: '', highlight: [], besprechen: [], phasen: [] };
let bewertungen = {};
let quillEditor = null;

// Local Storage Funktionen (unverändert)
async function saveSessionsToStorage() {
    try {
        const db = await openDB();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const clearRequest = store.clear();
        await new Promise((resolve, reject) => {
            clearRequest.onsuccess = () => resolve();
            clearRequest.onerror = () => reject('Fehler beim Löschen der Sessions');
        });

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
    Object.keys(kategorien).forEach(katKey => {
        Object.keys(kategorien[katKey].unterkategorien).forEach(ukKey => {
            const checklist = kategorien[katKey].unterkategorien[ukKey].checklist || [];
            const itemStates = {};
            checklist.forEach(item => {
                itemStates[escapeHtml(item)] = 0; // Default: 0 (grau, keine Wertung)
            });
            bewertungen[ukKey] = { notizen: '', itemStates };
        });
    });
}

// Checklist-Funktionen
function toggleChecklistItem(ukKey, itemText) {
    const sanitizedItem = escapeHtml(itemText.trim());
    const itemStates = bewertungen[ukKey].itemStates;
    if (!itemStates[sanitizedItem]) itemStates[sanitizedItem] = 0;
    itemStates[sanitizedItem] = (itemStates[sanitizedItem] + 1) % 6; // Zyklus: 0 (grau) -> 1 (rot 0%) -> 2 (orange 25%) -> 3 (gelb 50%) -> 4 (blau 75%) -> 5 (grün 100%) -> 0
    renderChecklistForUK(ukKey);
    if (document.getElementById('tab-auswertung').classList.contains('active')) {
        renderAuswertung();
    }
}

function renderChecklistForUK(ukKey) {
    const container = document.querySelector(`[data-checklist-container="${ukKey}"]`);
    if (!container) return;

    const checklist = kategorien[Object.keys(kategorien).find(k => Object.keys(kategorien[k].unterkategorien).includes(ukKey))]?.unterkategorien[ukKey]?.checklist || [];
    const itemStates = bewertungen[ukKey].itemStates || {};

    container.innerHTML = checklist.map(item => {
        const escapedItem = escapeHtml(item);
        const state = itemStates[escapedItem] || 0;
        const prozente = [null, 0, 25, 50, 75, 100]; // 0: grau (keine Wertung), 1: rot (0%), 2: orange (25%), etc.
        const prozent = prozente[state];
        const labels = ['–', '0%', '25%', '50%', '75%', '100%']; // Grau: '–'
        const label = labels[state];
        const farben = ['bg-gray-300', 'bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-blue-300', 'bg-green-300'];
        const farbe = farben[state];
        const buttonClass = `checklist-btn ${farbe} hover:opacity-80`;
        const title = state === 0 ? 'Keine Wertung → Nächster Status' : `Klick zum Zyklus: ${label} → Nächster Status`;
        return `
            <button type="button" onclick="toggleChecklistItem('${ukKey}', '${escapedItem.replace(/'/g, "\\'")}')" 
                    class="${buttonClass} w-full text-left p-2 mb-1 rounded border text-sm" 
                    title="${title}">
                ${escapedItem}<br><span class="float-right font-bold">${label}</span>
            </button>
        `;
    }).join('');
}

// Validierung für Save (unverändert)
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

// Initialisierung (unverändert, aber mit Checklist-Global)
document.addEventListener('DOMContentLoaded', async function () {
    initBewertungen();
    await initApp();
    initImageModal();
    window.toggleChecklistItem = toggleChecklistItem; // Global für onclick
});

// initImageModal (unverändert)
function initImageModal() {
    const modal = document.getElementById('image-modal');
    const spanClose = document.querySelector('#image-modal .close');

    spanClose.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('photos-preview').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            document.getElementById('modal-image').src = e.target.src;
            modal.style.display = 'block';
        }
    });

    document.getElementById('auswertung-photos-grid').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            document.getElementById('modal-image').src = e.target.src;
            modal.style.display = 'block';
        }
    });
}

async function initApp() {
    await loadSessionsFromStorage();

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

// renderPhasen, renderHighlight, renderBesprechen, newSession, switchTab, toggleKategorie (unverändert)
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

// Bereinigte renderKategorien: Nur Checklist, kein Tag-Code
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
                    const escapedTitel = escapeHtml(ukData.titel);
                    return `
                        <div class="uk">
                            <h3 class="font-bold mb-3">${ukKey}: ${escapedTitel}</h3>
                            
                            <!-- Checkliste Section (ersetzt Bewertung) -->
                            <div class="mb-4">
                                <label class="text-sm font-medium block mb-2">Checkliste (Bewertung):</label>
                                <div class="checklist-container grid" data-checklist-container="${ukKey}"></div>
                            </div>
                            
                            <div class="notizen">
                                <label class="text-sm font-medium block mb-2">Notizen:</label>
                                <textarea data-uk="${ukKey}" class="notizen-input w-full" rows="4" placeholder="Beobachtungen notieren..." maxlength="1000">${escapeHtml(bewertungen[ukKey]?.notizen || '')}</textarea>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        container.appendChild(katDiv);

        Object.keys(kat.unterkategorien).forEach(uk => {
            setTimeout(() => {
                renderChecklistForUK(uk);
            }, 0);
        });
    });

    // Event Delegation nur für Checklist (keine Rating mehr)
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('checklist-btn')) {
            const ukKey = e.target.closest('.uk').querySelector('.checklist-container').getAttribute('data-checklist-container');
            const itemText = e.target.textContent.replace(/\s+\d+%$/, '').trim(); // Extrahiere Item-Text ohne %
            toggleChecklistItem(ukKey, itemText);
        }
    });

    // Event Delegation für Notizen (unverändert)
    container.addEventListener('input', (e) => {
        if (e.target.classList.contains('notizen-input')) {
            const ukKey = e.target.getAttribute('data-uk');
            bewertungen[ukKey].notizen = escapeHtml(e.target.value.trim());
        }
    });
}

// handlePhotoUpload, renderPhotosPreview, removePhoto (unverändert)
function handlePhotoUpload(e) {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // Fix: 5MB, nicht 50MB
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

// saveSession (unverändert, JSON handhabt checkedItems)
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
    await saveSessionsToStorage();
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

// loadSession: Mit checkedItems
function loadSession(sessionId) {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
        formData = { ...session };
        initBewertungen(); // Reset mit itemStates
        const loadedBew = JSON.parse(JSON.stringify(session.bewertungen || {}));
        Object.keys(loadedBew).forEach(uk => {
            if (bewertungen[uk]) {
                bewertungen[uk].bewertung = loadedBew[uk].bewertung;
                bewertungen[uk].notizen = escapeHtml(loadedBew[uk].notizen || '');
                // Fallback: Alte 'checkedItems' oder 'tags' -> state 1 (grün/100%)
                const oldItems = loadedBew[uk].checkedItems || loadedBew[uk].tags || [];
                const checklist = kategorien[Object.keys(kategorien).find(k => Object.keys(kategorien[k].unterkategorien).includes(uk))]?.unterkategorien[uk]?.checklist || [];
                checklist.forEach(item => {
                    const escapedItem = escapeHtml(item);
                    if (oldItems.includes(item)) {
                        bewertungen[uk].itemStates[escapedItem] = 1;
                    }
                });
                // Wenn itemStates vorhanden, übernehmen
                if (loadedBew[uk].itemStates) {
                    bewertungen[uk].itemStates = { ...loadedBew[uk].itemStates };
                }
            }
        });
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
        await saveSessionsToStorage();
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

// importJSON: Angepasst für checkedItems
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

            if (!data.formData || !data.bewertungen) {
                alert('Ungültiges JSON-Format! Die Datei muss formData und bewertungen enthalten.');
                return;
            }

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

            initBewertungen();
            Object.keys(data.bewertungen).forEach(uk => {
                if (bewertungen[uk]) {
                    const val = data.bewertungen[uk].bewertung;
                    bewertungen[uk] = {
                        bewertung: (val === null || val === undefined) ? null : Math.max(0, Math.min(4, val)),
                        notizen: escapeHtml(data.bewertungen[uk].notizen || ''),
                        itemStates: data.bewertungen[uk].itemStates || {}
                    };
                    // Fallback-Konvertierung, falls alte Daten
                    const oldItems = data.bewertungen[uk].checkedItems || data.bewertungen[uk].tags || [];
                    const checklist = kategorien[Object.keys(kategorien).find(k => Object.keys(kategorien[k].unterkategorien).includes(uk))]?.unterkategorien[uk]?.checklist || [];
                    checklist.forEach(item => {
                        const escapedItem = escapeHtml(item);
                        if (!bewertungen[uk].itemStates[escapedItem] && oldItems.includes(item)) {
                            bewertungen[uk].itemStates[escapedItem] = 1; // 100%
                        }
                    });
                }
            });

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
    event.target.value = '';
}

// calculateStats: Mit checklistProzent
function calculateStats() {
    const stats = {};
    Object.keys(kategorien).forEach(katKey => {
        const unterkategorienKeys = Object.keys(kategorien[katKey].unterkategorien);
        let totalItemProzente = 0;
        let totalGewerteteItems = 0;
        let anzahlBewerteteUK = 0; // Neu: Zähle nur UK mit ≥1 gewertetem Item
        unterkategorienKeys.forEach(ukKey => {
            const bew = bewertungen[ukKey];
            if (!bew) return;

            const itemStates = bew.itemStates || {};
            const checklist = kategorien[katKey].unterkategorien[ukKey]?.checklist || [];
            let ukGewerteteItems = 0;
            checklist.forEach(item => {
                const state = itemStates[escapeHtml(item)] || 0;
                if (state > 0) { // Grau (0) ignorieren
                    const prozente = [null, 0, 25, 50, 75, 100];
                    totalItemProzente += prozente[state];
                    totalGewerteteItems++;
                    ukGewerteteItems++;
                }
            });

            if (ukGewerteteItems > 0) {
                anzahlBewerteteUK++; // Nur wenn UK hat gewertete Items
            }
        });

        const checklistProzent = totalGewerteteItems > 0 ? (totalItemProzente / totalGewerteteItems).toFixed(0) : 0;
        const nichtBewertet = anzahlBewerteteUK === 0;

        stats[katKey] = {
            prozent: checklistProzent,
            checklistProzent: checklistProzent,
            anzahl: anzahlBewerteteUK, // Neu: Nur bewertete UK
            gesamt: unterkategorienKeys.length,
            nichtBeobachtbar: nichtBewertet
        };
    });
    return stats;
}
// calculateSozialformDistribution (unverändert)
function calculateSozialformDistribution() {
    if (formData.phasen.length === 0) return null;

    const times = formData.phasen.map(phase => {
        const [h, m] = phase.zeit.split(':');
        return parseInt(h) * 60 + parseInt(m);
    });

    const sortedIndices = times.map((time, idx) => idx).sort((a, b) => times[a] - times[b]);
    const sortedPhasen = sortedIndices.map(idx => formData.phasen[idx]);
    const sortedTimes = sortedIndices.map(idx => times[idx]);

    const startTime = sortedTimes[0];
    const endTime = startTime + formData.dauer;
    const durations = [];

    for (let i = 0; i < sortedTimes.length - 1; i++) {
        durations[i] = sortedTimes[i + 1] - sortedTimes[i];
    }
    durations[sortedPhasen.length - 1] = endTime - sortedTimes[sortedTimes.length - 1];

    const distribution = {};
    sortedPhasen.forEach((phase, i) => {
        const sf = phase.sozialform;
        if (sf) {
            distribution[sf] = (distribution[sf] || 0) + (durations[i] || 0);
        }
    });

    Object.keys(distribution).forEach(sf => {
        distribution[sf] = {
            minuten: distribution[sf],
            prozent: ((distribution[sf] / formData.dauer) * 100).toFixed(1)
        };
    });

    return { phasen: sortedPhasen, distribution };
}

// renderAuswertung: Mit checklistProzent in Stats anzeigen
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

            // HIER: Anzeige für "nicht bewertet" bei allen grau
            const prozentAnzeige = stat.nichtBeobachtbar
                ? '<span class="text-gray-500 italic">nicht bewertet</span>'
                : `<div class="text-2xl font-bold">${stat.prozent}%</div>`;

            div.innerHTML = `
                <div class="stat-header">
                    <div>
                        <span class="font-bold text-lg">${katKey === 'K' ? 'K' : katKey}. ${escapeHtml(kategorien[katKey].titel)}</span>
                        <span class="text-sm text-gray-800 ml-2">(${stat.anzahl} von ${stat.gesamt} bewertet)</span>
                    </div>
                    ${prozentAnzeige}
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${stat.nichtBeobachtbar ? 0 : stat.prozent}%"></div>
                </div>
                <div class="text-sm text-gray-600 mt-1">Checkliste: ${stat.checklistProzent}%</div>
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
        katDiv.innerHTML = `<h4 class="font-bold text-lg mb-4">${escapeHtml(kat.titel)}</h4>`;

        Object.entries(kat.unterkategorien).forEach(([ukKey, ukData]) => {
            const bew = bewertungen[ukKey];
            if (!bew) return;
            hasContent = true;
            const ukDiv = document.createElement('div');
            ukDiv.className = 'uk-detail mb-4 p-2 border rounded';
            
            const itemStates = bew.itemStates || {};
            const checklist = kat.unterkategorien[ukKey].checklist || [];
            const checkedHTML = checklist.length > 0 ? `
                <div class="uk-checklist mt-2">
                    <strong>Checkliste:</strong>
                    <ul>
                        ${checklist.map(item => {
                            const escapedItem = escapeHtml(item);
                            const state = itemStates[escapedItem] || 0;
                            const prozente = [null, 0, 25, 50, 75, 100];
                            const itemProzent = prozente[state];
                            const labels = ['–', '0%', '25%', '50%', '75%', '100%'];
                            const label = labels[state];
                            const farben = ['bg-gray-300', 'bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-blue-300', 'bg-green-300'];
                            return `<li class="flex justify-between"><span>${escapedItem}</span><span class="${farben[state]} px-2 rounded text-xs">${label}</span></li>`;
                        }).join('')}
                    </ul>
                </div>
            ` : '<div class="text-sm text-gray-500 mt-2">Keine Checklist-Items</div>';

            ukDiv.innerHTML = `
                <div class="uk-header mb-2">
                    <span class="font-medium">${ukKey}: ${escapeHtml(ukData.titel)}</span>
                </div>
                ${checkedHTML}
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