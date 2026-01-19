// Kategorien-Datenstruktur
const kategorien = {
    'K': {
        title: 'Effektive Klassenführung',
        description: 'Grundlage für lernförderlichen Unterricht: Wenige Störungen, effektive Nutzung der Zeit, positives Klima.',
        color: 'purple',
        subcategories: {
            'K.1': {
                title: 'Störungsprävention',
                items: [
                    'Klare Regeln und Routinen sind bekannt und werden konsequent eingefordert',
                    'Lehrkraft ist präsent und achtet auf Einhaltung in Arbeits- und Kommunikationsphasen',
                    'Frühe Erkennung von Problemen und angemessenes Eingreifen',
                    'Geräte und Materialien sind klar geregelt, um Ablenkungen zu minimieren'
                ]
            },
            'K.2': {
                title: 'Effektive Nutzung der Lernzeit',
                items: [
                    'Einheitliche Strukturen und Orientierungshilfen für Schüler und Lehrkraft',
                    'Vorbereitete Umgebung für reibungslose Abläufe und klare Fristen',
                    'Systematische Einführung von Arbeitsweisen, Fokus auf Inhalte',
                    'Schüler sind beschäftigt, Hindernisse werden schnell beseitigt'
                ]
            },
            'K.3': {
                title: 'Lernförderliches Klima',
                items: [
                    'Wertschätzender Umgang und vertrauensvolle Beziehung',
                    'Schüler äußern sich offen und angstfrei',
                    'Positive Atmosphäre, die Lernen unterstützt'
                ]
            }
        }
    },
    '1': {
        title: 'Veranschaulichung',
        description: 'Strukturierung von Inhalten und Prozessen für besseres Verständnis und Ergebnissicherung.',
        color: 'blue',
        subcategories: {
            '1.1': {
                title: 'Strukturierung der Lehr- und Lerninhalte',
                items: [
                    'Klare Visualisierung von Aufträgen und Erwartungen',
                    'Nachvollziehbare Bereitstellung von Inhalten und Abläufen',
                    'Übersicht über Ziele, Fristen und Zwischenziele'
                ]
            },
            '1.2': {
                title: 'Anschauliche Darstellung von Unterrichtsinhalten',
                items: [
                    'Multimediale Angebote für Verständnis (z. B. visuelle und auditive Elemente)',
                    'Abstrakte Konzepte durch Beispiele und Modelle nachvollziehbar machen',
                    'Verbindung von Neuem zu Bekanntem, Interesse wecken'
                ]
            },
            '1.3': {
                title: 'Ergebnissicherung',
                items: [
                    'Sichtbare Präsentation von Lernergebnissen',
                    'Strukturierte Vertiefung und Wiederholung der Inhalte',
                    'Dokumentation und Anreicherung von Materialien zur Nachbereitung'
                ]
            }
        }
    },
    '2': {
        title: 'Lebensweltbezug',
        description: 'Berücksichtigung von Mediennutzung und realen Kontexten für Relevanz und Motivation.',
        color: 'green',
        subcategories: {
            '2.1': {
                title: 'Aufgreifen des Mediennutzungsverhaltens',
                items: [
                    'Gezielte Nutzung zu Lernzwecken jenseits von Unterhaltung',
                    'Reflexion des alltäglichen Medienverhaltens',
                    'Thematisierung von Herausforderungen wie Überkonsum'
                ]
            },
            '2.2': {
                title: 'Alltags- und Anwendungsbezug',
                items: [
                    'Berücksichtigung individueller Interessen und Lernwege',
                    'Lernförderliche Nutzung für Kompetenzen und Teilhabe',
                    'Rückgriff auf bekannte Quellen (z. B. Medien aus dem Alltag) und Reflexion'
                ]
            }
        }
    },
    '3': {
        title: 'Methodenvielfalt',
        description: 'Variation von Methoden und Sozialformen für Rhythmisierung und Motivation.',
        color: 'yellow',
        subcategories: {
            '3.1': {
                title: 'Angemessene Variation der Lehr- und Lernmethoden',
                items: [
                    'Erweiterung des Repertoires durch flexible Methoden und Sozialformen',
                    'Aktive Beteiligung durch interaktive und kreative Formate',
                    'Rhythmisierung des Unterrichts durch Wechsel von Aufgaben'
                ]
            },
            '3.2': {
                title: 'Verschränkung analoger und digitaler Lernsettings',
                items: [
                    'Schneller Zugriff auf Ressourcen zur Anreicherung analoger Settings',
                    'Kooperative Prozesse und Peer-Feedback',
                    'Ergänzung analoger Möglichkeiten durch vielfältige Gestaltung'
                ]
            }
        }
    },
    '4': {
        title: 'Individualisiertes Lernen',
        description: 'Anpassung an Voraussetzungen durch Erfassung, Feedback und Selbststeuerung.',
        color: 'orange',
        subcategories: {
            '4.1': {
                title: 'Lernstandserfassung und Anpassung des Lernangebots',
                items: [
                    'Automatisierte Auswertung von Tests für unmittelbares Feedback',
                    'Nachverfolgung des individuellen Fortschritts',
                    'Differenzierte Aufgaben unter Berücksichtigung von Voraussetzungen'
                ]
            },
            '4.2': {
                title: 'Lernförderliches Feedback und Unterstützung',
                items: [
                    'Vielfältige Unterstützung bei Aufgabenbearbeitung',
                    'Zeitnahes individuelles Feedback',
                    'Integration von Übungen mit Feedback und kollaborativen Austausch'
                ]
            },
            '4.3': {
                title: 'Unterstützung des selbstgesteuerten Lernens',
                items: [
                    'Autonomie und Wahlfreiheit in der Gestaltung',
                    'Strukturiertes Angebot für Selbstorganisation',
                    'Förderung durch Projekte und Arbeitshilfen'
                ]
            }
        }
    },
    '5': {
        title: 'Kompetenzorientierte Aufgabenformate & intelligentes Üben',
        description: 'Aktive Auseinandersetzung, Medienkompetenz und nachhaltige Verankerung.',
        color: 'red',
        subcategories: {
            '5.1': {
                title: 'Medienproduktive und kollaborative Aufgabenformate',
                items: [
                    'Aktive Erstellung kreativer Produkte (z. B. Präsentationen, Videos)',
                    'Flexible und ortsunabhängige Bearbeitung',
                    'Überarbeitung basierend auf Feedback'
                ]
            },
            '5.2': {
                title: 'Systematischer Erwerb von Medienkompetenz',
                items: [
                    'Einüben und Reflektieren von Lern- und Organisationsstrategien',
                    'Kritische Reflexion der Medienanwendung',
                    'Fachintegrativer Aufbau durch regelmäßige Nutzung'
                ]
            },
            '5.3': {
                title: 'Intelligentes Üben',
                items: [
                    'Sofortige Überprüfung und direktes Feedback',
                    'Differenzierte Übungsaufgaben nach Voraussetzungen',
                    'Vernetzung mit Vorwissen und Anwendung in neuen Kontexten'
                ]
            }
        }
    }
};


// Globale Variablen
let sessions = {};
let currentSessionId = null;
let generalNotesEditor = null;
let photos = [];

// Initialisierung
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    loadSessions();
    setupEventListeners();
    initializeQuillEditor();
    renderKategorien();
    setDefaultDate();
    addPhase();
}

// Quill Editor initialisieren
function initializeQuillEditor() {
    if (typeof Quill !== 'undefined') {
        generalNotesEditor = new Quill('#general-notes-editor', {
            theme: 'snow',
            placeholder: 'Allgemeine Beobachtungen hier eingeben...',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['clean']
                ]
            }
        });
    }
}

// Event Listeners
function setupEventListeners() {
    // Tab Navigation
    document.getElementById('tab-erfassung').addEventListener('click', () => switchTab('erfassung'));
    document.getElementById('tab-auswertung').addEventListener('click', () => {
        switchTab('auswertung');
        updateAuswertung();
    });

    // Session Management
    document.getElementById('new-session').addEventListener('click', createNewSession);
    document.getElementById('save-session').addEventListener('click', saveCurrentSession);
    document.getElementById('delete-session').addEventListener('click', deleteCurrentSession);
    document.getElementById('session-select').addEventListener('change', loadSelectedSession);
    document.getElementById('export-json').addEventListener('click', exportJSON);
    document.getElementById('import-json').addEventListener('click', () => {
        document.getElementById('json-file-input').click();
    });
    document.getElementById('json-file-input').addEventListener('change', importJSON);

    // Phasen
    document.getElementById('add-phase').addEventListener('click', () => addPhase());

    // Foto-Upload
    document.getElementById('photo-upload').addEventListener('change', handlePhotoUpload);

    // Modal für Bildansicht
    const modal = document.getElementById('image-modal');
    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Tab-Wechsel
function switchTab(tabName) {
    // Tabs aktualisieren
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

 if (tabName === 'erfassung') {
        document.getElementById('tab-erfassung').classList.add('active');
        document.getElementById('erfassung').classList.add('active');
    } else if (tabName === 'auswertung') {
        document.getElementById('tab-auswertung').classList.add('active');
        document.getElementById('auswertung').classList.add('active');
    }
}

// Sessions verwalten
function loadSessions() {
    const stored = localStorage.getItem('hospitationsSessions');
    sessions = stored ? JSON.parse(stored) : {};
    updateSessionSelect();
}

function saveSessions() {
    localStorage.setItem('hospitationsSessions', JSON.stringify(sessions));
}

function updateSessionSelect() {
    const select = document.getElementById('session-select');
    select.innerHTML = '<option value="">Session auswählen...</option>';
    
    Object.keys(sessions).forEach(id => {
        const session = sessions[id];
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${session.name || 'Unbenannt'} - ${session.datum || 'Kein Datum'}`;
        select.appendChild(option);
    });

    if (currentSessionId) {
        select.value = currentSessionId;
        document.getElementById('delete-session').style.display = 'inline-block';
    } else {
        document.getElementById('delete-session').style.display = 'none';
    }
}

function createNewSession() {
    if (currentSessionId && hasUnsavedChanges()) {
        if (!confirm('Es gibt ungespeicherte Änderungen. Trotzdem neue Session erstellen?')) {
            return;
        }
    }
    
    currentSessionId = null;
    clearForm();
    updateSessionSelect();
    alert('Neue Session erstellt. Bitte Stammdaten ausfüllen und speichern.');
}

function saveCurrentSession() {
    const data = collectFormData();
    
    if (!data.name || !data.datum) {
        alert('Bitte Name und Datum ausfüllen.');
        return;
    }

    if (!currentSessionId) {
        currentSessionId = 'session_' + Date.now();
    }

    sessions[currentSessionId] = data;
    saveSessions();
    updateSessionSelect();
    alert('Session gespeichert.');
}

function loadSelectedSession() {
    const select = document.getElementById('session-select');
    const sessionId = select.value;

    if (!sessionId) {
        return;
    }

    if (currentSessionId && hasUnsavedChanges()) {
        if (!confirm('Es gibt ungespeicherte Änderungen. Trotzdem andere Session laden?')) {
            select.value = currentSessionId;
            return;
        }
    }

    currentSessionId = sessionId;
    const sessionData = sessions[sessionId];
    loadFormData(sessionData);
    updateSessionSelect();
}

function deleteCurrentSession() {
    if (!currentSessionId) {
        alert('Keine Session ausgewählt.');
        return;
    }

    if (!confirm('Session wirklich löschen?')) {
        return;
    }

    delete sessions[currentSessionId];
    saveSessions();
    currentSessionId = null;
    clearForm();
    updateSessionSelect();
    alert('Session gelöscht.');
}

function hasUnsavedChanges() {
    if (!currentSessionId) return false;
    const currentData = collectFormData();
    const savedData = sessions[currentSessionId];
    return JSON.stringify(currentData) !== JSON.stringify(savedData);
}

// Formular-Daten sammeln
function collectFormData() {
    const data = {
        name: document.getElementById('name').value,
        klasse: document.getElementById('klasse').value,
        fach: document.getElementById('fach').value,
        thema: document.getElementById('thema').value,
        datum: document.getElementById('datum').value,
        dauer: parseInt(document.getElementById('dauer').value) || 45,
        generalNotes: generalNotesEditor ? generalNotesEditor.root.innerHTML : '',
        phasen: [],
        kategorien: {},
        photos: photos
    };

    // Phasen sammeln - UHRZEIT-BASIERT
    document.querySelectorAll('.phase-item').forEach(item => {
        const uhrzeit = item.querySelector('.uhrzeit-input').value;
        const sozialform = item.querySelector('.sozialform-select').value;
        const notiz = item.querySelector('.notiz-input').value;
        if (uhrzeit || sozialform || notiz) {
            data.phasen.push({ uhrzeit, sozialform, notiz });
        }
    });

    // Kategorien sammeln - ZWEISTUFIG: nur Unterkategorien haben Bewertungen
  // Kategorien sammeln - ZWEISTUFIG: nur Unterkategorien haben Bewertungen
document.querySelectorAll('.unterkategorie-section').forEach(section => {
    const katKey = section.getAttribute('data-kategorie');
    const rating = section.querySelector('.rating-value').textContent;
    const notesDiv = section.querySelector('.category-notes');
    
    // Speichere nur wenn tatsächlich bewertet (nicht "-" und nicht "-- %") oder Notizen vorhanden
    const hasRating = rating !== '-' && rating !== '-- %' && rating.trim() !== '';
    const hasNotes = notesDiv && notesDiv.value.trim() !== '';
    
    if (hasRating || hasNotes) {
        data.kategorien[katKey] = {
            rating: hasRating ? rating : '',
            notes: notesDiv ? notesDiv.value : ''
        };
    }
});

    return data;
}

// Formular leeren
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('klasse').value = '';
    document.getElementById('fach').value = '';
    document.getElementById('thema').value = '';
    setDefaultDate();
    document.getElementById('dauer').value = '45';
    
    if (generalNotesEditor) {
        generalNotesEditor.root.innerHTML = '';
    }

    document.getElementById('phasen-fields').innerHTML = '';
    addPhase();

    // Kategorien zurücksetzen - ZWEISTUFIG
    document.querySelectorAll('.unterkategorie-section').forEach(section => {
        section.querySelector('.rating-value').textContent = '-';
        const notesDiv = section.querySelector('.category-notes');
        if (notesDiv) notesDiv.value = '';
        updateRatingButtons(section, '-');
    });

    // Alle Hauptkategorien zuklappen (details schließen)
    document.querySelectorAll('details.main-kategorie').forEach(details => {
        details.removeAttribute('open');
    });

    photos = [];
    document.getElementById('photos-preview').innerHTML = '';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Formular laden
function loadFormData(data) {
    document.getElementById('name').value = data.name || '';
    document.getElementById('klasse').value = data.klasse || '';
    document.getElementById('fach').value = data.fach || '';
    document.getElementById('thema').value = data.thema || '';
    document.getElementById('datum').value = data.datum || '';
    document.getElementById('dauer').value = data.dauer || 45;

    if (generalNotesEditor && data.generalNotes) {
        generalNotesEditor.root.innerHTML = data.generalNotes;
    }

    // Phasen laden
    document.getElementById('phasen-fields').innerHTML = '';
    if (data.phasen && data.phasen.length > 0) {
        data.phasen.forEach(p => addPhase(p.uhrzeit, p.sozialform, p.notiz));
    } else {
        addPhase();
    }

    // Kategorien laden - ZWEISTUFIG
    if (data.kategorien) {
        Object.keys(data.kategorien).forEach(katKey => {
            const katDiv = document.querySelector(`[data-kategorie="${katKey}"]`);
            if (katDiv && data.kategorien[katKey]) {
                const katData = data.kategorien[katKey];
                const ratingValue = katData.rating || '-';
                katDiv.querySelector('.rating-value').textContent = ratingValue;
                const notesDiv = katDiv.querySelector('.category-notes');
                if (notesDiv) notesDiv.value = katData.notes || '';
                updateRatingButtons(katDiv, ratingValue);
            }
        });
    }

    // Fotos laden
    photos = data.photos || [];
    renderPhotos();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Phasen verwalten
function addPhase(uhrzeit = '', sozialform = '', notiz = '') {
    const container = document.getElementById('phasen-fields');
    
    // Automatische Uhrzeit-Generierung wenn leer
    if (!uhrzeit) {
        const now = new Date();
        uhrzeit = now.getHours().toString().padStart(2, '0') + ':' + 
                  now.getMinutes().toString().padStart(2, '0');
    }
    
    const div = document.createElement('div');
    div.className = 'phase-item';
    div.innerHTML = `
        <input type="time" class="uhrzeit-input" value="${uhrzeit}">
        <select class="sozialform-select">
            <option value="">Sozialform wählen</option>
            <option value="Einzelarbeit" ${sozialform === 'Einzelarbeit' ? 'selected' : ''}>Einzelarbeit</option>
            <option value="Partnerarbeit" ${sozialform === 'Partnerarbeit' ? 'selected' : ''}>Partnerarbeit</option>
            <option value="Gruppenarbeit" ${sozialform === 'Gruppenarbeit' ? 'selected' : ''}>Gruppenarbeit</option>
            <option value="Plenum" ${sozialform === 'Plenum' ? 'selected' : ''}>Plenum</option>
            <option value="Lehrervortrag" ${sozialform === 'Lehrervortrag' ? 'selected' : ''}>Lehrervortrag</option>
                        <option value="Leerlauf" ${sozialform === 'Leerlauf' ? 'selected' : ''}>Leerlauf</option>
            <option value="Sonstiges" ${sozialform === 'Sonstiges' ? 'selected' : ''}>Sonstiges</option>
        </select>
        <textarea class="notiz-input" placeholder="Kurznotiz..." rows="1">${notiz}</textarea>
        <button type="button" class="remove-phase" title="Phase entfernen">×</button>
    `;
    container.appendChild(div);

    div.querySelector('.remove-phase').addEventListener('click', function() {
        if (container.children.length > 1) {
            div.remove();
        } else {
            alert('Mindestens eine Phase muss vorhanden sein.');
        }
    });
    
    // Auto-resize für Textarea
    const textarea = div.querySelector('.notiz-input');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}

// Foto-Upload
function handlePhotoUpload(event) {
    const files = event.target.files;
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            photos.push(e.target.result);
            renderPhotos();
        };
        reader.readAsDataURL(file);
    });
    event.target.value = '';
}

function renderPhotos() {
    const container = document.getElementById('photos-preview');
    container.innerHTML = '';
    photos.forEach((photo, index) => {
        const div = document.createElement('div');
        div.className = 'photo-item';
        div.innerHTML = `
            <img src="${photo}" alt="Foto ${index + 1}">
            <button type="button" class="remove-photo" data-index="${index}">×</button>
        `;
        container.appendChild(div);

        div.querySelector('img').addEventListener('click', () => showImageModal(photo));
        div.querySelector('.remove-photo').addEventListener('click', () => {
            photos.splice(index, 1);
            renderPhotos();
        });
    });
}

function showImageModal(src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    img.src = src;
    modal.style.display = 'flex';
}

// Kategorien rendern - DETAILS/SUMMARY STRUKTUR
function renderKategorien() {
    const container = document.getElementById('kategorien-container');
    container.innerHTML = '';

    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        
        // Hauptkategorie als details/summary
        const mainDetails = document.createElement('details');
        mainDetails.className = `kategorie-section main-kategorie color-${mainKat.color}`;
        mainDetails.setAttribute('data-main-kategorie', mainKey);

        const mainSummary = document.createElement('summary');
        mainSummary.className = 'main-kategorie-header';
        mainSummary.innerHTML = `
            <div class="main-kategorie-info">
                <h2 class="main-kategorie-title">${mainKey}: ${mainKat.title}</h2>
                ${mainKat.description ? `<p class="main-kategorie-description">${mainKat.description}</p>` : ''}
            </div>
        `;

        // Hauptkategorie Content (enthält Unterkategorien)
        const mainContent = document.createElement('div');
        mainContent.className = 'main-kategorie-content';

        // Unterkategorien rendern
        Object.keys(mainKat.subcategories).forEach(subKey => {
            const subKat = mainKat.subcategories[subKey];
            const subSection = document.createElement('div');
            subSection.className = 'unterkategorie-section';
            subSection.setAttribute('data-kategorie', subKey);

            // Unterkategorie Header mit Bewertungsbuttons
            const subHeader = document.createElement('div');
            subHeader.className = 'kategorie-header';
            subHeader.innerHTML = `
                <div class="kategorie-title-row">
                    <h3 class="kategorie-title">${subKey}: ${subKat.title}</h3>
                    <div class="rating-buttons">
                        <button class="rating-btn" data-value="0%">0 %</button>
                        <button class="rating-btn" data-value="25%">25 %</button>
                        <button class="rating-btn" data-value="50%">50 %</button>
                        <button class="rating-btn" data-value="75%">75 %</button>
                        <button class="rating-btn" data-value="100%">100 %</button>
                    </div>
                    <div class="rating-display">
                        Bewertung: <span class="rating-value">-- %</span>
                    </div>
                </div>
            `;

            // Unterkategorie Content (Items + Notizen)
            const subContent = document.createElement('div');
            subContent.className = 'kategorie-subcontent';

            // Items als Liste
            let itemsHTML = '<div class="subcategory-items"><h4>Beobachtungskriterien:</h4><ul>';
            subKat.items.forEach(item => {
                itemsHTML += `<li>${item}</li>`;
            });
            itemsHTML += '</ul></div>';

            subContent.innerHTML = `
                ${itemsHTML}
                <div class="notes-section">
                    <label>Notizen zu ${subKey}:</label>
                    <textarea class="category-notes" rows="3" placeholder="Ihre Beobachtungen zu dieser Unterkategorie..."></textarea>
                </div>
            `;

            subSection.appendChild(subHeader);
            subSection.appendChild(subContent);
            mainContent.appendChild(subSection);

            // Event Listeners für Unterkategorie Rating Buttons
 // Event Listeners für Unterkategorie Rating Buttons
const ratingButtons = subHeader.querySelectorAll('.rating-btn');
ratingButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = btn.getAttribute('data-value');
        const currentValue = subSection.querySelector('.rating-value').textContent;
        
        // Wenn der gleiche Button nochmal geklickt wird, Bewertung zurücksetzen
        if (currentValue === value) {
            subSection.querySelector('.rating-value').textContent = '-- %';
            updateRatingButtons(subSection, '-');
        } else {
            subSection.querySelector('.rating-value').textContent = value;
            updateRatingButtons(subSection, value);
        }
    });
});
        });

        mainDetails.appendChild(mainSummary);
        mainDetails.appendChild(mainContent);
        container.appendChild(mainDetails);
    });
}

// Entferne die alten Toggle-Funktionen, da details/summary das automatisch macht

// Rating Buttons Update
function updateRatingButtons(section, activeValue) {
    const buttons = section.querySelectorAll('.rating-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-value') === activeValue) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Auswertung aktualisieren
function updateAuswertung() {
    const data = collectFormData();

    // Stammdaten
    const stammdatenOverview = document.getElementById('stammdaten-overview');
    stammdatenOverview.innerHTML = `
        <div><strong>Name:</strong> ${data.name || '-'}</div>
        <div><strong>Klasse:</strong> ${data.klasse || '-'}</div>
        <div><strong>Fach:</strong> ${data.fach || '-'}</div>
        <div><strong>Thema:</strong> ${data.thema || '-'}</div>
        <div><strong>Datum:</strong> ${data.datum || '-'}</div>
        <div><strong>Dauer:</strong> ${data.dauer || '-'} Min</div>
    `;

    // Allgemeine Beobachtungen
    if (data.generalNotes && data.generalNotes.trim() !== '<p><br></p>' && data.generalNotes.trim() !== '') {
        let notesSection = document.getElementById('general-notes-display');
        if (!notesSection) {
            notesSection = document.createElement('div');
            notesSection.id = 'general-notes-display';
            notesSection.className = 'general-notes-display';
            stammdatenOverview.parentElement.appendChild(notesSection);
        }
        notesSection.innerHTML = `
            <h4>Allgemeine Beobachtungen</h4>
            <div class="notes-content">${data.generalNotes}</div>
        `;
    }

    // Phasen anzeigen - MIT BERECHNUNG AUS UHRZEITEN
    const phasenDisplay = document.getElementById('phasen-display');
    const phasenList = document.getElementById('phasen-list');
    if (data.phasen && data.phasen.length > 0) {
        phasenDisplay.style.display = 'block';
        phasenList.innerHTML = '';
        
        // Berechne Dauer aus Uhrzeiten
        const phasenMitDauer = data.phasen.map((phase, idx) => {
            let dauer = 0;
            if (phase.uhrzeit && data.phasen[idx + 1] && data.phasen[idx + 1].uhrzeit) {
                // Berechne Differenz zur nächsten Phase
                const [h1, m1] = phase.uhrzeit.split(':').map(Number);
                const [h2, m2] = data.phasen[idx + 1].uhrzeit.split(':').map(Number);
                dauer = (h2 * 60 + m2) - (h1 * 60 + m1);
            } else if (idx === data.phasen.length - 1 && phase.uhrzeit) {
                // Letzte Phase: berechne bis Stundenende (aus Gesamtdauer)
                const [h, m] = phase.uhrzeit.split(':').map(Number);
                const startMinuten = h * 60 + m;
                // Nimm erste Phase als Start
                if (data.phasen[0] && data.phasen[0].uhrzeit) {
                    const [h0, m0] = data.phasen[0].uhrzeit.split(':').map(Number);
                    const erstePhaseMinuten = h0 * 60 + m0;
                    const gesamtMinuten = startMinuten - erstePhaseMinuten;
                    dauer = (data.dauer || 45) - gesamtMinuten;
                }
            }
            return { ...phase, dauer: Math.max(0, dauer) };
        });
        
        phasenMitDauer.forEach((phase, idx) => {
            const phaseItem = document.createElement('div');
            phaseItem.className = 'phase-display-item';
            phaseItem.innerHTML = `
                <strong>${phase.uhrzeit || '-'}</strong> | 
                <strong>Sozialform:</strong> ${phase.sozialform || '-'} | 
                <strong>Dauer:</strong> ${phase.dauer || '-'} Min
                ${phase.notiz ? `<br><em>${phase.notiz}</em>` : ''}
            `;
            phasenList.appendChild(phaseItem);
        });

        // Sozialformen-Verteilung berechnen MIT BERECHNETEN DAUERN
        calculateSozialformDistribution(phasenMitDauer, data.dauer);
    } else {
        phasenDisplay.style.display = 'none';
    }

    // Statistiken - VEREINFACHT
    updateStatistics(data.kategorien);

    // Detailansicht - VEREINFACHT
    updateDetails(data.kategorien);

    // Fotos
    const photosGrid = document.getElementById('auswertung-photos-grid');
    if (photos.length > 0) {
        document.getElementById('auswertung-photos').style.display = 'block';
        photosGrid.innerHTML = '';
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.addEventListener('click', () => showImageModal(photo));
            photosGrid.appendChild(img);
        });
    } else {
        document.getElementById('auswertung-photos').style.display = 'none';
    }
}

// Sozialformen-Verteilung berechnen
function calculateSozialformDistribution(phasen, gesamtdauer) {
    const distribution = {};
    let totalMinutes = 0;

    phasen.forEach(phase => {
        if (phase.sozialform && phase.dauer) {
            distribution[phase.sozialform] = (distribution[phase.sozialform] || 0) + phase.dauer;
            totalMinutes += phase.dauer;
        }
    });

    if (totalMinutes > 0) {
        const distributionDiv = document.getElementById('sozialform-distribution');
        distributionDiv.style.display = 'block';

        const tbody = document.querySelector('#distribution-table tbody');
        tbody.innerHTML = '';

        Object.entries(distribution).forEach(([sozialform, minuten]) => {
            const prozent = ((minuten / totalMinutes) * 100).toFixed(1);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sozialform}</td>
                <td>${minuten}</td>
                <td>${prozent} %</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        document.getElementById('sozialform-distribution').style.display = 'none';
    }
}

// Statistiken - KOMPAKT: Durchschnitt pro Hauptkategorie
function updateStatistics(kategorienData) {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    // Durchlaufe Hauptkategorien
    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        const subKeys = Object.keys(mainKat.subcategories);
        
        // Sammle Bewertungen für diese Hauptkategorie
        const ratings = [];
        let bewerteteAnzahl = 0;
        
        subKeys.forEach(subKey => {
            if (kategorienData[subKey] && kategorienData[subKey].rating && kategorienData[subKey].rating !== '') {
                const ratingNum = parseInt(kategorienData[subKey].rating);
                if (!isNaN(ratingNum)) {
                    ratings.push(ratingNum);
                    bewerteteAnzahl++;
                }
            }
        });

        // Berechne Durchschnitt oder zeige "nicht bewertet"
        let avgText = 'nicht bewertet';
        let avgRounded = 'unbewertet';
        
        if (ratings.length > 0) {
            const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
            avgRounded = `${Math.round(avg / 25) * 25}%`;
            avgText = `Checklist: ${Math.round(avg)} %`;
        }

        // Erstelle kompakte Box
        const statBox = document.createElement('div');
        statBox.className = `stat-box color-${mainKat.color}`;
        statBox.setAttribute('data-rating', avgRounded);
        statBox.innerHTML = `
            <div class="stat-box-title">${mainKey}. ${mainKat.title}</div>
            <div class="stat-box-info">(${bewerteteAnzahl} von ${subKeys.length} bewertet)</div>
            <div class="stat-box-value">${avgText}</div>
        `;
        statsContainer.appendChild(statBox);
    });
}

// Detailansicht - EINFACHE LISTE mit Prozenten rechts
function updateDetails(kategorienData) {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';

    // Durchlaufe Hauptkategorien
    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        
        // Prüfe ob mindestens eine Unterkategorie bewertet wurde
        const hasData = Object.keys(mainKat.subcategories).some(subKey => {
            return kategorienData[subKey] && (kategorienData[subKey].rating || kategorienData[subKey].notes);
        });

        if (hasData) {
            // Hauptkategorie-Überschrift
            const mainTitle = document.createElement('h3');
            mainTitle.className = 'detail-section-title';
            mainTitle.textContent = mainKat.title;
            detailsContainer.appendChild(mainTitle);

            // Unterkategorien als einfache Liste
            Object.keys(mainKat.subcategories).forEach(subKey => {
                const subKat = mainKat.subcategories[subKey];
                const subData = kategorienData[subKey];

                if (subData && (subData.rating || subData.notes)) {
                    const detailItem = document.createElement('div');
                    detailItem.className = 'detail-list-item';
                    
                    let itemHTML = `
                        <div class="detail-list-header">
                            <h4 class="detail-list-title">${subKey}: ${subKat.title}</h4>
                            <span class="detail-list-rating" data-rating="${subData.rating}">${subData.rating}</span>
                        </div>
                    `;
                    
                    if (subData.notes) {
                        itemHTML += `<div class="detail-list-notes">${subData.notes.replace(/\n/g, '<br>')}</div>`;
                    }
                    
                    detailItem.innerHTML = itemHTML;
                    detailsContainer.appendChild(detailItem);
                }
            });
        }
    });

    if (detailsContainer.children.length === 0) {
        detailsContainer.innerHTML = '<p>Keine Detaildaten vorhanden.</p>';
    }
}

// Export/Import
function exportJSON() {
    const data = collectFormData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hospitation_${data.name}_${data.datum}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            loadFormData(data);
            alert('Daten erfolgreich importiert.');
        } catch (error) {
            alert('Fehler beim Importieren: Ungültige JSON-Datei.');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// Standarddatum setzen
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('datum').value = today;
}

// Input Validierung
function validateInputs() {
    const name = document.getElementById('name').value.trim();
    const datum = document.getElementById('datum').value;
    
    if (!name) {
        alert('Bitte geben Sie den Namen der Lehrkraft ein.');
        return false;
    }
    
    if (!datum) {
        alert('Bitte geben Sie ein Datum ein.');
        return false;
    }
    
    return true;
}

// Hilfsfunktion: Alle Kategorien aufklappen
function expandAllKategorien() {
    document.querySelectorAll('.kategorie-content').forEach(content => {
        const toggle = content.previousElementSibling.querySelector('.kategorie-toggle');
        if (!content.classList.contains('active')) {
            content.classList.add('active');
            toggle.textContent = '×';
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}

// Hilfsfunktion: Alle Kategorien zuklappen
function collapseAllKategorien() {
    document.querySelectorAll('.kategorie-content').forEach(content => {
        const toggle = content.previousElementSibling.querySelector('.kategorie-toggle');
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            toggle.textContent = '+';
            content.style.maxHeight = '0px';
        }
    });
}

// Hilfsfunktion: Prüfe ob Formular leer ist
function isFormEmpty() {
    const name = document.getElementById('name').value.trim();
    const klasse = document.getElementById('klasse').value.trim();
    const fach = document.getElementById('fach').value.trim();
    const thema = document.getElementById('thema').value.trim();
    
    // Prüfe ob mindestens eines der Felder ausgefüllt ist
    return !(name || klasse || fach || thema);
}

// Hilfsfunktion: Formatiere Datum für Anzeige
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('de-DE', options);
}

// Hilfsfunktion: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S zum Speichern
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentSession();
    }
    
    // Ctrl/Cmd + N für neue Session
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        createNewSession();
    }
    
    // Ctrl/Cmd + E für Export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportJSON();
    }
});

