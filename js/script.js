// Kategorien-Datenstruktur
const kategorien = {
    '1': {
        title: 'Kognitive Aktivierung',
        description: 'Fokus auf zentrale Inhalte, Ermittlung des Verständnisses, herausfordernde Fragen und Aufgaben, engagierte Beteiligung.',
        color: 'blue',
        subcategories: {
            '1.1': {
                title: 'Verständnisorientierung',
                items: [
                    'Der Unterricht hat einen klaren Fokus auf die zentralen Inhalte, die von den Schülerinnen und Schülern verstanden werden sollen',
                    'Die Lehrkraft fokussiert ihren Unterricht auf die zentralen zu erwerbenden Inhalte',
                    'Der Bezug zu den zentralen Inhalten wird im Verlauf der Stunde immer wieder hergestellt',
                    'Unterrichtsinhalte werden mit Blick auf das Unterrichtsziel zusammengefasst'
                ]
            },
            '1.2': {
                title: 'Ermittlung von Denkweisen und Vorstellungen',
                items: [
                    'Die Lehrkraft ermittelt das aktuelle Verständnis der Schülerinnen und Schüler',
                    'Die Lehrkraft sammelt unterschiedliche Schülerbeiträge und hält sich dabei selbst zurück',
                    'Die Lehrkraft befragt die Schülerinnen und Schüler nach ihren Ideen und Vorstellungen zu einem Thema',
                    'Die Lernenden werden aufgefordert, ihre Antworten zu begründen'
                ]
            },
            '1.3': {
                title: 'Herausfordernde Aufgaben und Fragen',
                items: [
                    'Im Unterricht wird mit Fragen und Aufgaben gearbeitet, die die Schülerinnen und Schüler zur vertieften Auseinandersetzung mit den Inhalten herausfordern',
                    'Die von der Lehrkraft gestellten Fragen und Aufgaben gehen über die reine Reproduktion von auswendig gelerntem Wissen hinaus',
                    'Die Schülerinnen und Schüler werden aufgefordert, eigene Lösungsideen zu entwickeln',
                    'Unterschiedliche Meinungen, Lösungen oder Fälle werden einander kontrastierend gegenübergestellt'
                ]
            },
            '1.4': {
                title: 'Engagement der Schülerinnen und Schüler',
                items: [
                    'Die Schülerinnen und Schüler sind engagiert am Unterrichtsgeschehen beteiligt',
                    'Der Aufmerksamkeitsfokus der Schülerinnen und Schüler liegt auf dem Unterrichtsgeschehen',
                    'Die Schülerinnen und Schüler beteiligen sich aktiv am Unterricht und stellen Fragen',
                    'Die Lernenden zeigen Interesse und Freude am Unterricht'
                ]
            }
        }
    },
    '2': {
        title: 'Konstruktive Unterstützung',
        description: 'Lernförderliches Feedback, individuelle Unterstützung, wertschätzender Umgang zwischen Lehrkraft und Schülern.',
        color: 'green',
        subcategories: {
            '2.1': {
                title: 'Qualität des Feedbacks',
                items: [
                    'Das Feedback, das die Lehrkraft den Schülerinnen und Schülern gibt, ist zum Weiterlernen hilfreich',
                    'Die Rückmeldungen und Kommentare der Lehrkraft helfen dabei, Fehler zu erkennen und das weitere Vorgehen zu verbessern',
                    'Es wird erarbeitet, warum eine Antwort oder eine Lösung richtig oder falsch war',
                    'Die Lehrkraft nutzt Fehler, um auf unzutreffendes Verständnis der Schülerinnen und Schüler einzugehen'
                ]
            },
            '2.2': {
                title: 'Individuelle Unterstützung im Lernprozess',
                items: [
                    'Die Lehrkraft unterstützt die Schülerinnen und Schüler individuell in ihrem Lernprozess',
                    'Die Lehrkraft nimmt sich bei Verständnisproblemen gezielt Zeit für einzelne Schülerinnen und Schüler',
                    'Unterstützende Maßnahmen und Hilfestellungen sind individuell an den Lernstand angepasst',
                    'Die Lehrkraft ermöglicht eine Differenzierung des Anspruchsniveaus, des Lerntempos und/oder der Inhalte'
                ]
            },
            '2.3': {
                title: 'Wertschätzung und Respekt',
                items: [
                    'Die Lehrkraft begegnet den Schülerinnen und Schülern mit Wertschätzung und Respekt',
                    'Die Lehrkraft geht freundlich und respektvoll mit ihren Schülerinnen und Schülern um',
                    'Die Lehrkraft zeigt Interesse für die Perspektiven und Meinungen der Schülerinnen und Schüler',
                    'Die Lehrkraft geht in angemessenem Rahmen auch auf persönliche Berichte oder Probleme ein'
                ]
            },
            '2.4': {
                title: 'Klassenklima',
                items: [
                    'Die Schülerinnen und Schüler begegnen einander und der Lehrkraft mit Wertschätzung und Respekt',
                    'Die Schülerinnen und Schüler hören einander zu und lassen sich gegenseitig ausreden',
                    'Die Schülerinnen und Schüler helfen und unterstützen sich gegenseitig',
                    'Das Klassenklima ist durch Zusammenhalt und Kameradschaftlichkeit geprägt'
                ]
            }
        }
    },
    '3': {
        title: 'Strukturierte Klassenführung',
        description: 'Störungsfreier Unterricht, guter Überblick der Lehrkraft, effektive Nutzung der Unterrichtszeit.',
        color: 'yellow',
        subcategories: {
            '3.1': {
                title: 'Störungen durch Schülerinnen und Schüler',
                items: [
                    'Der Unterricht verläuft weitgehend störungsfrei',
                    'Der Unterricht verläuft ruhig und geordnet',
                    'Die Lautstärke während der Unterrichtsstunde ist der jeweiligen Unterrichtsphase angemessen',
                    'Die Schülerinnen und Schüler halten sich an Regeln und bestehende Rituale'
                ]
            },
            '3.2': {
                title: 'Monitoring',
                items: [
                    'Die Lehrkraft hat einen guten Überblick über das Geschehen im Unterricht',
                    'Die Lehrkraft hat alle Schülerinnen und Schüler im Blick',
                    'Die Lehrkraft ist im ganzen Klassenzimmer präsent (z. B. durch Blicke oder Bewegungen)',
                    'Aufkeimende Störungen behebt die Lehrkraft frühzeitig und beiläufig'
                ]
            },
            '3.3': {
                title: 'Zeitnutzung',
                items: [
                    'Die zur Verfügung stehende Unterrichtszeit wird für die Auseinandersetzung mit den Lerninhalten genutzt',
                    'Die Unterrichtsstunde beginnt und endet pünktlich',
                    'Die Unterrichtszeit wird für fachliche Themen genutzt',
                    'Zwischen einzelnen Unterrichtsphasen kommt es nicht zu unnötigen Warte- oder Leerzeiten'
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
    initTheme();
}

function initTheme() {
    const stored = localStorage.getItem('hospitationsTheme');
    const isLight = stored === 'light';
    applyTheme(isLight);
}

function applyTheme(light) {
    document.documentElement.classList.toggle('light', light);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = light ? 'Licht aus' : 'Licht an';
    localStorage.setItem('hospitationsTheme', light ? 'light' : 'dark');
}

// Quill Editor
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
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light');
        applyTheme(!isLight);
    });

    // Tab Navigation – drei Tabs
    document.getElementById('tab-stammdaten').addEventListener('click', () => switchTab('stammdaten'));
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
    document.getElementById('export-markdown').addEventListener('click', exportMarkdown);
    document.getElementById('import-json').addEventListener('click', () => {
        document.getElementById('json-file-input').click();
    });
    document.getElementById('json-file-input').addEventListener('change', importJSON);

    // Phasen
    document.getElementById('add-phase').addEventListener('click', () => addPhase());

    // Foto-Upload
    document.getElementById('photo-upload').addEventListener('change', handlePhotoUpload);

    // Modal
    const modal = document.getElementById('image-modal');
    modal.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}

// Tab-Wechsel
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById(tabName).classList.add('active');
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
    select.innerHTML = '<option value="">Session auswählen…</option>';

    Object.keys(sessions).forEach(id => {
        const session = sessions[id];
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${session.name || 'Unbenannt'} – ${session.datum || 'Kein Datum'}`;
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
    if (currentSessionId) {
        if (confirm('Aktuelle Session vor dem Fortfahren speichern?')) {
            saveCurrentSession();
        }
    } else if (hasUnsavedChanges()) {
        if (confirm('Aktuelle Daten speichern?')) {
            saveCurrentSession();
            if (!currentSessionId) return;
        }
    }

    currentSessionId = null;
    clearForm();
    updateSessionSelect();
    switchTab('stammdaten');
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
    if (!sessionId) return;

    if (currentSessionId && hasUnsavedChanges()) {
        if (!confirm('Ungespeicherte Änderungen verwerfen und andere Session laden?')) {
            select.value = currentSessionId;
            return;
        }
    }

    currentSessionId = sessionId;
    loadFormData(sessions[sessionId]);
    updateSessionSelect();
    switchTab('stammdaten');
}

function deleteCurrentSession() {
    if (!currentSessionId) return;
    if (!confirm('Session wirklich löschen?')) return;

    delete sessions[currentSessionId];
    saveSessions();
    currentSessionId = null;
    clearForm();
    updateSessionSelect();
}

function hasUnsavedChanges() {
    if (!currentSessionId) return false;
    return JSON.stringify(collectFormData()) !== JSON.stringify(sessions[currentSessionId]);
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

    // Phasen
    document.querySelectorAll('.phase-item').forEach(item => {
        const uhrzeit = item.querySelector('.uhrzeit-input').value;
        const sozialform = item.querySelector('.sozialform-select').value;
        const notiz = item.querySelector('.notiz-input').value;
        if (uhrzeit || sozialform || notiz) {
            data.phasen.push({ uhrzeit, sozialform, notiz });
        }
    });

    // Kategorien
    document.querySelectorAll('.unterkategorie-section').forEach(section => {
        const katKey = section.getAttribute('data-kategorie');
        const rating = section.querySelector('.rating-value').textContent;
        const notesDiv = section.querySelector('.category-notes');
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

    if (generalNotesEditor) generalNotesEditor.root.innerHTML = '';

    document.getElementById('phasen-fields').innerHTML = '';
    addPhase();

    document.querySelectorAll('.unterkategorie-section').forEach(section => {
        section.querySelector('.rating-value').textContent = '-- %';
        const notesDiv = section.querySelector('.category-notes');
        if (notesDiv) notesDiv.value = '';
        updateRatingButtons(section, '-');
    });

    document.querySelectorAll('details.main-kategorie').forEach(d => d.removeAttribute('open'));

    photos = [];
    document.getElementById('photos-preview').innerHTML = '';
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

    document.getElementById('phasen-fields').innerHTML = '';
    if (data.phasen && data.phasen.length > 0) {
        data.phasen.forEach(p => addPhase(p.uhrzeit, p.sozialform, p.notiz));
    } else {
        addPhase();
    }

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

    photos = data.photos || [];
    renderPhotos();
    window.scrollTo(0, 0);
}

// Phasen verwalten
function addPhase(uhrzeit = '', sozialform = '', notiz = '') {
    const container = document.getElementById('phasen-fields');

    if (!uhrzeit) {
        const now = new Date();
        uhrzeit = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
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
            <option value="Instruktion" ${sozialform === 'Instruktion' ? 'selected' : ''}>Instruktion</option>
            <option value="Leerlauf" ${sozialform === 'Leerlauf' ? 'selected' : ''}>Leerlauf</option>
            <option value="Sonstiges" ${sozialform === 'Sonstiges' ? 'selected' : ''}>Sonstiges</option>
        </select>
        <textarea class="notiz-input" placeholder="Kurznotiz…" rows="1">${notiz}</textarea>
        <button type="button" class="remove-phase" title="Entfernen">×</button>
    `;
    container.appendChild(div);

    div.querySelector('.remove-phase').addEventListener('click', () => {
        if (container.children.length > 1) {
            div.remove();
        } else {
            alert('Mindestens eine Phase muss vorhanden sein.');
        }
    });

    const textarea = div.querySelector('.notiz-input');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}

// Foto-Upload
function handlePhotoUpload(event) {
    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => { photos.push(e.target.result); renderPhotos(); };
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
        div.querySelector('.remove-photo').addEventListener('click', () => { photos.splice(index, 1); renderPhotos(); });
    });
}

function showImageModal(src) {
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-image').src = src;
    modal.style.display = 'flex';
}

// Kategorien rendern
function renderKategorien() {
    const container = document.getElementById('kategorien-container');
    container.innerHTML = '';

    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];

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

        const mainContent = document.createElement('div');
        mainContent.className = 'main-kategorie-content';

        Object.keys(mainKat.subcategories).forEach(subKey => {
            const subKat = mainKat.subcategories[subKey];
            const subSection = document.createElement('div');
            subSection.className = 'unterkategorie-section';
            subSection.setAttribute('data-kategorie', subKey);

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

            const subContent = document.createElement('div');
            subContent.className = 'kategorie-subcontent';
            let itemsHTML = '<div class="subcategory-items"><h4>Beobachtungskriterien:</h4><ul>';
            subKat.items.forEach(item => { itemsHTML += `<li>${item}</li>`; });
            itemsHTML += '</ul></div>';
            subContent.innerHTML = `
                ${itemsHTML}
                <div class="notes-section">
                    <label>Notizen zu ${subKey}:</label>
                    <textarea class="category-notes" rows="3" placeholder="Ihre Beobachtungen zu dieser Unterkategorie…"></textarea>
                </div>
            `;

            subSection.appendChild(subHeader);
            subSection.appendChild(subContent);
            mainContent.appendChild(subSection);

            subHeader.querySelectorAll('.rating-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const value = btn.getAttribute('data-value');
                    const currentValue = subSection.querySelector('.rating-value').textContent;
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

function updateRatingButtons(section, activeValue) {
    section.querySelectorAll('.rating-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-value') === activeValue);
    });
}

// Auswertung
function updateAuswertung() {
    const data = collectFormData();

    // Stammdaten
    document.getElementById('stammdaten-overview').innerHTML = `
        <div><strong>Lehrkraft:</strong> ${data.name || '–'}</div>
        <div><strong>Klasse:</strong> ${data.klasse || '–'}</div>
        <div><strong>Fach:</strong> ${data.fach || '–'}</div>
        <div><strong>Thema:</strong> ${data.thema || '–'}</div>
        <div><strong>Datum:</strong> ${data.datum || '–'}</div>
        <div><strong>Dauer:</strong> ${data.dauer || '–'} Min</div>
    `;

    // Phasen
    const phasenDisplay = document.getElementById('phasen-display');
    const phasenList = document.getElementById('phasen-list');
    if (data.phasen && data.phasen.length > 0) {
        phasenDisplay.style.display = 'block';
        phasenList.innerHTML = '';

        const phasenMitDauer = data.phasen.map((phase, idx) => {
            let dauer = 0;
            if (phase.uhrzeit && data.phasen[idx + 1]?.uhrzeit) {
                const [h1, m1] = phase.uhrzeit.split(':').map(Number);
                const [h2, m2] = data.phasen[idx + 1].uhrzeit.split(':').map(Number);
                dauer = (h2 * 60 + m2) - (h1 * 60 + m1);
            } else if (idx === data.phasen.length - 1 && phase.uhrzeit && data.phasen[0]?.uhrzeit) {
                const [h, m] = phase.uhrzeit.split(':').map(Number);
                const [h0, m0] = data.phasen[0].uhrzeit.split(':').map(Number);
                dauer = (data.dauer || 45) - ((h * 60 + m) - (h0 * 60 + m0));
            }
            return { ...phase, dauer: Math.max(0, dauer) };
        });

        // Zeitstrahl
        const totalDauer = phasenMitDauer.reduce((s, p) => s + (p.dauer || 0), 0) || 1;
        const sfColors = {
            'Einzelarbeit': '#3b82f6',
            'Partnerarbeit': '#8b5cf6',
            'Gruppenarbeit': '#10b981',
            'Plenum':        '#f59e0b',
            'Lehrervortrag': '#ef4444',
            'Instruktion': '#ef44c4',
            'Leerlauf':      '#94a3b8',
            'Sonstiges':     '#06b6d4'
        };

        const segments = phasenMitDauer.map((phase, i) => {
            const pct = ((phase.dauer || 0) / totalDauer * 100).toFixed(2);
            const color = sfColors[phase.sozialform] || '#64748b';
            const label = phase.sozialform || '–';
            return `<div class="tz-segment" style="flex:${pct} 0 0%; background:${color};" title="${label}: ${phase.dauer} Min">
                <span class="tz-seg-label">${label}</span>
            </div>`;
        }).join('');

        const ticks = phasenMitDauer.map((phase, i) => {
            const leftPct = phasenMitDauer.slice(0, i).reduce((s, p) => s + (p.dauer || 0), 0) / totalDauer * 100;
            return `<div class="tz-tick" style="left:${leftPct.toFixed(2)}%">
                <span class="tz-tick-label">${phase.uhrzeit || ''}</span>
            </div>`;
        }).join('');

        // Last tick at end
        const lastTick = (() => {
            const last = phasenMitDauer[phasenMitDauer.length - 1];
            if (last?.uhrzeit && last?.dauer) {
                const [h, m] = last.uhrzeit.split(':').map(Number);
                const endMin = h * 60 + m + (last.dauer || 0);
                const endH = Math.floor(endMin / 60).toString().padStart(2,'0');
                const endM = (endMin % 60).toString().padStart(2,'0');
                return `<div class="tz-tick" style="left:100%"><span class="tz-tick-label">${endH}:${endM}</span></div>`;
            }
            return '';
        })();

        const notizen = phasenMitDauer.filter(p => p.notiz).map(p =>
            `<div class="tz-notiz"><span class="tz-notiz-meta">${p.uhrzeit}${p.sozialform ? ' · ' + p.sozialform : ''}</span><span class="tz-notiz-text"><em>${p.notiz.replace(/\n/g, '<br>')}</em></span></div>`
        ).join('');

        phasenList.innerHTML = `
            <div class="tz-wrap">
                <div class="tz-bar">${segments}</div>
                <div class="tz-ticks">${ticks}${lastTick}</div>
            </div>
            <div class="tz-legend">
                ${Object.entries(
                    phasenMitDauer.filter(p => p.dauer > 0 && p.sozialform).reduce((acc, p) => {
                        acc[p.sozialform] = (acc[p.sozialform] || 0) + p.dauer;
                        return acc;
                    }, {})
                ).sort((a,b) => b[1]-a[1]).map(([sf, min]) => {
                    const color = sfColors[sf] || '#64748b';
                    return `<span class="tz-legend-item"><span class="pie-dot" style="background:${color}"></span>${sf} <small>${min} Min</small></span>`;
                }).join('')}
            </div>
            ${notizen ? `<div class="tz-notizen">${notizen}</div>` : ''}
        `;

        calculateSozialformDistribution(phasenMitDauer, data.dauer);
    } else {
        phasenDisplay.style.display = 'none';
        document.getElementById('sozialform-distribution').style.display = 'none';
    }

    // Allgemeine Beobachtungen (nach Phasen)
    const notesValid = data.generalNotes && data.generalNotes.trim() !== '<p><br></p>' && data.generalNotes.trim() !== '';
    let notesSection = document.getElementById('general-notes-display');
    if (notesValid) {
        if (!notesSection) {
            notesSection = document.createElement('div');
            notesSection.id = 'general-notes-display';
            notesSection.className = 'card';
            document.getElementById('sozialform-distribution').after(notesSection);
        }
        notesSection.innerHTML = `<h4>Allgemeine Beobachtungen</h4><div class="notes-content">${data.generalNotes}</div>`;
    } else if (notesSection) {
        notesSection.remove();
    }

    updateStatistics(data.kategorien);
    updateDetails(data.kategorien);

    // Fotos
    const photosGrid = document.getElementById('auswertung-photos-grid');
    const photosSection = document.getElementById('auswertung-photos');
    if (photos.length > 0) {
        photosSection.style.display = 'block';
        photosGrid.innerHTML = '';
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.addEventListener('click', () => showImageModal(photo));
            photosGrid.appendChild(img);
        });
    } else {
        photosSection.style.display = 'none';
    }
}

function calculateSozialformDistribution(phasen, gesamtdauer) {
    const distribution = {};
    let totalMinutes = 0;
    phasen.forEach(phase => {
        if (phase.sozialform && phase.dauer) {
            distribution[phase.sozialform] = (distribution[phase.sozialform] || 0) + phase.dauer;
            totalMinutes += phase.dauer;
        }
    });

    const div = document.getElementById('sozialform-distribution');
    if (totalMinutes === 0) { div.style.display = 'none'; return; }

    div.style.display = 'block';

    const sfColors = {
        'Einzelarbeit': '#3b82f6', 'Partnerarbeit': '#8b5cf6', 'Gruppenarbeit': '#10b981',
        'Plenum': '#f59e0b', 'Lehrervortrag': '#ef4444', 'Leerlauf': '#94a3b8', 'Sonstiges': '#06b6d4'
    };
    const fallback = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#f97316'];
    const entries = Object.entries(distribution).sort((a, b) => b[1] - a[1]);

    const r = 80, cx = 100, cy = 100;
    const circumference = 2 * Math.PI * r;
    let offset = 0;

    const slices = entries.map(([sf, min], i) => {
        const pct = min / totalMinutes;
        const dash = pct * circumference;
        const gap  = circumference - dash;
        const slice = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
            stroke="${sfColors[sf] || fallback[i % fallback.length]}" stroke-width="36"
            stroke-dasharray="${dash} ${gap}"
            stroke-dashoffset="${-offset}"
            transform="rotate(-90 ${cx} ${cy})"/>`;
        offset += dash;
        return slice;
    });

    const legend = entries.map(([sf, min], i) => {
        const pct = ((min / totalMinutes) * 100).toFixed(1);
        return `<div class="pie-legend-item">
            <span class="pie-dot" style="background:${sfColors[sf] || fallback[i % fallback.length]}"></span>
            <span class="pie-legend-label">${sf}</span>
            <span class="pie-legend-value">${min} Min &nbsp;<strong>${pct} %</strong></span>
        </div>`;
    }).join('');

    div.innerHTML = `
        <h4>Sozialformen-Verteilung</h4>
        <div class="pie-wrap">
            <svg viewBox="0 0 200 200" class="pie-svg">
                ${slices.join('')}
                <text x="${cx}" y="${cy - 6}" text-anchor="middle" class="pie-center-top">${totalMinutes}</text>
                <text x="${cx}" y="${cy + 14}" text-anchor="middle" class="pie-center-bot">Min</text>
            </svg>
            <div class="pie-legend">${legend}</div>
        </div>`;
}

function updateStatistics(kategorienData) {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    const catColors = { blue: '#3b82f6', green: '#10b981', yellow: '#f59e0b', orange: '#f97316', purple: '#8b5cf6', red: '#ef4444' };

    // Collect data for all categories
    const catData = Object.keys(kategorien).map(mainKey => {
        const mainKat = kategorien[mainKey];
        const subKeys = Object.keys(mainKat.subcategories);
        const ratings = subKeys
            .map(sk => kategorienData[sk]?.rating ? parseInt(kategorienData[sk].rating) : null)
            .filter(n => n !== null && !isNaN(n));
        const avg = ratings.length > 0 ? Math.round(ratings.reduce((a, b) => a + b, 0) / ratings.length) : null;
        return { mainKey, mainKat, subKeys, ratings, avg };
    });

    // SVG bar chart
    const svgW = 600, svgH = 280;
    const padL = 28, padR = 20, padT = 24, padB = 56;
    const chartW = svgW - padL - padR;
    const chartH = svgH - padT - padB;
    const barCount = catData.length;
    const barW = Math.floor(chartW / barCount * 0.55);
    const gap   = Math.floor(chartW / barCount);

    // Gridlines at 0,25,50,75,100
    const gridLines = [0,25,50,75,100].map(v => {
        const y = padT + chartH - (v / 100 * chartH);
        return `<line x1="${padL}" y1="${y}" x2="${svgW - padR}" y2="${y}" stroke="var(--border)" stroke-width="1"/>
                 <text x="${padL - 4}" y="${y + 4}" text-anchor="end" font-size="12" fill="var(--text-muted)">${v}</text>`;
    }).join('');

    const bars = catData.map(({ mainKey, mainKat, subKeys, ratings, avg }, i) => {
        const x = padL + i * gap + (gap - barW) / 2;
        const color = catColors[mainKat.color] || '#3b82f6';
        if (avg === null) {
            // Empty bar placeholder
            return `<rect x="${x}" y="${padT}" width="${barW}" height="${chartH}" fill="var(--border)" rx="4" opacity="0.4"/>
                     <text x="${x + barW/2}" y="${svgH - padB + 16}" text-anchor="middle" font-size="14" fill="var(--text-muted)">${mainKey}.</text>
                     <text x="${x + barW/2}" y="${svgH - padB + 30}" text-anchor="middle" font-size="12" fill="var(--text-muted)">–</text>`;
        }
        const barH = avg / 100 * chartH;
        const y = padT + chartH - barH;
        return `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" fill="${color}" rx="4"/>
                 <text x="${x + barW/2}" y="${y - 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="${color}">${avg} %</text>
                 <text x="${x + barW/2}" y="${svgH - padB + 16}" text-anchor="middle" font-size="14" fill="var(--text)">${mainKey}.</text>
                 <text x="${x + barW/2}" y="${svgH - padB + 34}" text-anchor="middle" font-size="12" fill="var(--text-muted)">${ratings.length}/${subKeys.length}</text>`;
    }).join('');

    const svg = `<svg viewBox="0 0 ${svgW} ${svgH}" class="col-chart-svg" preserveAspectRatio="xMidYMid meet">
        ${gridLines}
        ${bars}
    </svg>`;

    // Legend
    const legend = catData.map(({ mainKey, mainKat, avg, ratings, subKeys }) => {
        const color = catColors[mainKat.color] || '#3b82f6';
        const avgRounded = avg !== null ? `${Math.round(avg / 25) * 25}%` : 'unbewertet';
        return `<div class="col-legend-item" data-rating="${avgRounded}">
            <span class="pie-dot" style="background:${avg !== null ? color : 'var(--border)'}"></span>
            <span class="col-legend-label">${mainKey}. ${mainKat.title}</span>
            <span class="col-legend-value">${avg !== null ? `Ø ${avg} %` : '–'} &nbsp;<small>${ratings.length}/${subKeys.length}</small></span>
        </div>`;
    }).join('');

    statsContainer.innerHTML = `
        <div class="col-chart-wrap">
            ${svg}
            <div class="col-legend">${legend}</div>
        </div>`;
}

function updateDetails(kategorienData) {
    const container = document.getElementById('details-container');
    container.innerHTML = '';

    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        const hasData = Object.keys(mainKat.subcategories).some(
            subKey => kategorienData[subKey] && (kategorienData[subKey].rating || kategorienData[subKey].notes)
        );

        if (hasData) {
            const title = document.createElement('h3');
            title.className = 'detail-section-title';
            title.textContent = mainKat.title;
            container.appendChild(title);

            Object.keys(mainKat.subcategories).forEach(subKey => {
                const subKat = mainKat.subcategories[subKey];
                const subData = kategorienData[subKey];
                if (subData && (subData.rating || subData.notes)) {
                    const item = document.createElement('div');
                    item.className = 'detail-list-item';
                    item.innerHTML = `
                        <div class="detail-list-header">
                            <h4 class="detail-list-title">${subKey}: ${subKat.title}</h4>
                            <span class="detail-list-rating" data-rating="${subData.rating}">${subData.rating}</span>
                        </div>
                        ${subData.notes ? `<div class="detail-list-notes">${subData.notes.replace(/\n/g, '<br>')}</div>` : ''}
                    `;
                    container.appendChild(item);
                }
            });
        }
    });

    if (container.children.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted)">Keine Detaildaten vorhanden.</p>';
    }
}

// Export / Import
function exportJSON() {
    const data = collectFormData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hospitation_${data.name}_${data.datum}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportMarkdown() {
    const data = collectFormData();

    function htmlToText(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    }

    let md = `# Hospitationsbogen\n\n`;
    md += `## Stammdaten\n\n`;
    md += `- **Lehrkraft:** ${data.name || '–'}\n`;
    md += `- **Klasse:** ${data.klasse || '–'}\n`;
    md += `- **Fach:** ${data.fach || '–'}\n`;
    md += `- **Thema:** ${data.thema || '–'}\n`;
    md += `- **Datum:** ${data.datum || '–'}\n`;
    md += `- **Dauer:** ${data.dauer || '–'} Min\n\n`;

    if (data.generalNotes && data.generalNotes.trim() !== '<p><br></p>') {
        md += `### Allgemeine Beobachtungen\n\n${htmlToText(data.generalNotes)}\n\n`;
    }

    if (data.phasen && data.phasen.length > 0) {
        md += `## Verlauf der Stunde\n\n`;
        const phasenMitDauer = data.phasen.map((phase, idx) => {
            let dauer = 0;
            if (phase.uhrzeit && data.phasen[idx + 1]?.uhrzeit) {
                const [h1, m1] = phase.uhrzeit.split(':').map(Number);
                const [h2, m2] = data.phasen[idx + 1].uhrzeit.split(':').map(Number);
                dauer = (h2 * 60 + m2) - (h1 * 60 + m1);
            }
            return { ...phase, dauer: Math.max(0, dauer) };
        });

        phasenMitDauer.forEach(p => {
            md += `**${p.uhrzeit || '–'}** | ${p.sozialform || '–'} | ${p.dauer || '–'} Min`;
            if (p.notiz) md += `  \n*${p.notiz.replace(/\n/g, "  \n")}*`;
            md += `\n\n`;
        });

        const dist = {};
        let total = 0;
        phasenMitDauer.forEach(p => {
            if (p.sozialform && p.dauer) { dist[p.sozialform] = (dist[p.sozialform] || 0) + p.dauer; total += p.dauer; }
        });
        if (total > 0) {
            md += `### Sozialformen-Verteilung\n\n| Sozialform | Minuten | Prozent |\n|---|---|---|\n`;
            Object.entries(dist).forEach(([sf, min]) => { md += `| ${sf} | ${min} | ${((min / total) * 100).toFixed(1)} % |\n`; });
            md += `\n`;
        }
    }

    md += `## Durchschnittsbeobachtungen\n\n`;
    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        const ratings = Object.keys(mainKat.subcategories)
            .map(sk => data.kategorien[sk]?.rating ? parseInt(data.kategorien[sk].rating) : null)
            .filter(n => n !== null && !isNaN(n));
        const avg = ratings.length ? Math.round(ratings.reduce((a, b) => a + b, 0) / ratings.length) : null;
        md += `### ${mainKey}. ${mainKat.title}\n${ratings.length} von ${Object.keys(mainKat.subcategories).length} bewertet — ${avg !== null ? `Ø ${avg} %` : 'nicht bewertet'}\n\n`;
    });

    md += `## Detailansicht\n\n`;
    Object.keys(kategorien).forEach(mainKey => {
        const mainKat = kategorien[mainKey];
        const hasData = Object.keys(mainKat.subcategories).some(sk => data.kategorien[sk]?.rating || data.kategorien[sk]?.notes);
        if (hasData) {
            md += `### ${mainKat.title}\n\n`;
            Object.keys(mainKat.subcategories).forEach(sk => {
                const subData = data.kategorien[sk];
                if (subData?.rating || subData?.notes) {
                    md += `#### ${sk}: ${kategorien[mainKey].subcategories[sk].title}\n`;
                    if (subData.rating) md += `**Bewertung:** ${subData.rating}\n\n`;
                    if (subData.notes) md += `${subData.notes}\n\n`;
                }
            });
        }
    });

    if (photos.length > 0) md += `## Fotos\n\n${photos.length} Foto(s) vorhanden (nicht exportierbar).\n\n`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hospitation_${data.name}_${data.datum}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            // Always create a new session, never overwrite the current one
            currentSessionId = 'session_' + Date.now();
            sessions[currentSessionId] = data;
            saveSessions();
            loadFormData(data);
            updateSessionSelect();
            switchTab('stammdaten');
            alert('Import erfolgreich – neue Session angelegt.');
        } catch {
            alert('Fehler beim Importieren: Ungültige JSON-Datei.');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function setDefaultDate() {
    document.getElementById('datum').value = new Date().toISOString().split('T')[0];
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveCurrentSession(); }
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') { e.preventDefault(); createNewSession(); }
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') { e.preventDefault(); exportJSON(); }
});