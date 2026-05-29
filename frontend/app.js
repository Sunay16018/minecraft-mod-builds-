/**
 * Minecraft Mod Creator - Frontend JavaScript
 * Uzay temali, neon efektli, asenkron mod uretim uygulamasi
 */

const API_BASE = window.location.origin;
let currentRequestId = null;
let statusCheckInterval = null;

// ============================================================
// BASLANGIC - Surumleri yukle
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {
    await loadVersions();
    setupEventListeners();
});

async function loadVersions() {
    try {
        const response = await fetch(`${API_BASE}/api/versions`);
        const data = await response.json();

        if (data.success) {
            const select = document.getElementById('mc-version');
            data.versions.forEach(v => {
                const option = document.createElement('option');
                option.value = v.version;
                let label = v.version;
                if (v.is_unobfuscated) label += ' ⭐ YENI (Unobfuscated)';
                else if (v.version === '1.21.11') label += ' (Son obfuscated)';
                option.textContent = label;
                select.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Surumler yuklenemedi:', error);
        logConsole('❌ Surumler yuklenemedi. Sayfayi yenileyin.', 'error');
    }
}

function setupEventListeners() {
    // Enter tusu ile ozellik ekleme
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('feature-field')) {
            addFeature();
            setTimeout(() => {
                const inputs = document.querySelectorAll('.feature-field');
                if (inputs.length > 0) inputs[inputs.length - 1].focus();
            }, 10);
        }
    });
}

// ============================================================
// OZELLIK YONETIMI
// ============================================================

function addFeature() {
    const container = document.getElementById('features-list');
    const div = document.createElement('div');
    div.className = 'feature-input';
    div.innerHTML = `
        <input type="text" class="neon-input feature-field" placeholder="Ozellik girin...">
        <button class="btn-remove" onclick="removeFeature(this)">🗑️</button>
    `;
    container.appendChild(div);

    // Yeni input'a focus
    setTimeout(() => {
        div.querySelector('.feature-field').focus();
    }, 10);
}

function removeFeature(btn) {
    const inputs = document.querySelectorAll('.feature-input');
    if (inputs.length > 1) {
        btn.parentElement.remove();
    } else {
        btn.parentElement.querySelector('.feature-field').value = '';
    }
}

function getFeatures() {
    const inputs = document.querySelectorAll('.feature-field');
    return Array.from(inputs)
        .map(input => input.value.trim())
        .filter(value => value.length > 0);
}

function getSelectedModTypes() {
    const checkboxes = document.querySelectorAll('#mod-types input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// ============================================================
// KONSOL YONETIMI
// ============================================================

function logConsole(message, type = 'info') {
    const consoleOutput = document.getElementById('console-output');
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.textContent = message;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function clearConsole() {
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.innerHTML = '<div class="console-line info">🌌 Konsol temizlendi.</div>';
}

// ============================================================
// MOD URETIMI - Ana Fonksiyon
// ============================================================

async function generateMod() {
    const btn = document.getElementById('btn-generate');
    const btnText = btn.querySelector('.btn-text');

    // Form verilerini al
    const minecraftVersion = document.getElementById('mc-version').value;
    const modloader = document.getElementById('modloader').value;
    const modTypes = getSelectedModTypes();
    const features = getFeatures();
    const modName = document.getElementById('mod-name').value.trim();
    const modDesc = document.getElementById('mod-desc').value.trim();
    const prompt = document.getElementById('prompt').value.trim();

    // Validasyon
    if (!minecraftVersion) {
        logConsole('❌ Lutfen bir Minecraft surumu secin!', 'error');
        document.getElementById('mc-version').focus();
        return;
    }

    if (modTypes.length === 0) {
        logConsole('❌ En az bir mod turu secin!', 'error');
        return;
    }

    // Butonu devre disi birak
    btn.disabled = true;
    btnText.textContent = 'URETILIYOR...';

    // Konsolu temizle ve basla
    clearConsole();
    logConsole('🚀 Mod olusturma baslatildi...', 'info');
    logConsole(`📝 Kullanici istegi: ${prompt || '(Ekstra istek yok)'}`, 'info');
    logConsole(`🎮 Minecraft Surumu: ${minecraftVersion} | Modloader: ${modloader}`, 'info');
    logConsole(`📦 Mod Turleri: ${modTypes.join(', ')}`, 'info');
    if (features.length > 0) {
        logConsole(`✨ Ozellikler: ${features.join(', ')}`, 'info');
    }
    if (modName) logConsole(`🏷️ Mod Adi: ${modName}`, 'info');

    try {
        logConsole('🤖 Yapay zekaya istek gonderiliyor...', 'processing');

        const response = await fetch(`${API_BASE}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: prompt,
                minecraft_version: minecraftVersion,
                modloader: modloader,
                mod_types: modTypes,
                features: features,
                mod_name: modName || null,
                mod_description: modDesc || null
            })
        });

        const data = await response.json();

        if (data.success) {
            currentRequestId = data.requestId;

            logConsole('✅ Kodlar GitHub\'a gonderildi!', 'success');
            logConsole(`📁 ${data.fileCount} adet dosya olusturuldu.`, 'success');
            logConsole(`☁️ Branch: ${data.branch}`, 'info');
            logConsole('🔨 GitHub Actions derlemeye basladi...', 'processing');
            logConsole('⏳ Derleniyor... (2-5 dk surebilir)', 'processing');

            // Sonuc kartini goster
            showResult(data);

            // Otomatik status kontrolu baslat
            startAutoStatusCheck(data.requestId);

        } else {
            logConsole(`❌ HATA: ${data.error}`, 'error');
            btn.disabled = false;
            btnText.textContent = 'MOD URET 🚀';
        }

    } catch (error) {
        logConsole(`❌ HATA: ${error.message}`, 'error');
        btn.disabled = false;
        btnText.textContent = 'MOD URET 🚀';
    }
}

// ============================================================
// SONUC GOSTERME
// ============================================================

function showResult(data) {
    const resultArea = document.getElementById('result-area');

    document.getElementById('result-mod-name').textContent = data.modName;
    document.getElementById('result-version').textContent = data.minecraft_version;
    document.getElementById('result-loader').textContent = data.modloader;
    document.getElementById('result-branch').textContent = data.branch;

    // Butonlari goster/gizle
    document.getElementById('btn-check').style.display = 'inline-flex';
    document.getElementById('btn-download').style.display = 'none';
    document.getElementById('btn-workflow').style.display = 'none';

    resultArea.style.display = 'block';
    resultArea.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// STATUS KONTROLU (Otomatik + Manuel)
// ============================================================

function startAutoStatusCheck(requestId) {
    // Onceki interval'i temizle
    if (statusCheckInterval) {
        clearInterval(statusCheckInterval);
    }

    // Her 15 saniyede bir kontrol et
    statusCheckInterval = setInterval(() => {
        checkStatus(requestId);
    }, 15000);

    // Ilk kontrolu hemen yap
    setTimeout(() => checkStatus(requestId), 3000);
}

async function checkStatus(requestId) {
    const id = requestId || currentRequestId;
    if (!id) {
        logConsole('❌ Once mod uretmelisiniz!', 'error');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/status/${id}`);
        const data = await response.json();

        if (!data.success) {
            logConsole(`❌ Durum sorgulama hatasi: ${data.error}`, 'error');
            return;
        }

        // Loglari guncelle (son 3 log)
        if (data.logs && data.logs.length > 0) {
            const lastLogs = data.logs.slice(-3);
            lastLogs.forEach(log => {
                if (!isLogAlreadyShown(log)) {
                    const type = log.includes('HATA') || log.includes('❌') ? 'error' :
                                 log.includes('BASARILI') || log.includes('✅') ? 'success' :
                                 log.includes('Derleniyor') || log.includes('⏳') ? 'processing' : 'info';
                    logConsole(log, type);
                }
            });
        }

        // Duruma gore islem
        if (data.status === 'success') {
            logConsole('🎉 MOD HAZIR! Indirebilirsiniz!', 'success');

            // Indirme butonunu goster
            const downloadBtn = document.getElementById('btn-download');
            downloadBtn.href = data.downloadUrl;
            downloadBtn.style.display = 'inline-flex';

            // Workflow linkini goster
            if (data.workflowUrl) {
                const workflowBtn = document.getElementById('btn-workflow');
                workflowBtn.href = data.workflowUrl;
                workflowBtn.style.display = 'inline-flex';
            }

            // Butonu aktif et
            const btn = document.getElementById('btn-generate');
            btn.disabled = false;
            btn.querySelector('.btn-text').textContent = 'MOD URET 🚀';

            // Auto-check'i durdur
            if (statusCheckInterval) {
                clearInterval(statusCheckInterval);
                statusCheckInterval = null;
            }

        } else if (data.status === 'failed') {
            logConsole(`❌ DERLEME BASARISIZ!`, 'error');
            logConsole(`🔍 GitHub Actions'ta detaylari kontrol edin.`, 'warning');

            if (data.workflowUrl) {
                const workflowBtn = document.getElementById('btn-workflow');
                workflowBtn.href = data.workflowUrl;
                workflowBtn.style.display = 'inline-flex';
            }

            const btn = document.getElementById('btn-generate');
            btn.disabled = false;
            btn.querySelector('.btn-text').textContent = 'TEKRAR DENE 🔄';

            if (statusCheckInterval) {
                clearInterval(statusCheckInterval);
                statusCheckInterval = null;
            }

        } else if (data.status === 'timeout') {
            logConsole('⏰ Zaman asimi! Manuel kontrol yapin.', 'warning');

            if (data.workflowUrl) {
                const workflowBtn = document.getElementById('btn-workflow');
                workflowBtn.href = data.workflowUrl;
                workflowBtn.style.display = 'inline-flex';
            }

            const btn = document.getElementById('btn-generate');
            btn.disabled = false;
            btn.querySelector('.btn-text').textContent = 'MOD URET 🚀';

            if (statusCheckInterval) {
                clearInterval(statusCheckInterval);
                statusCheckInterval = null;
            }
        }

    } catch (error) {
        logConsole(`❌ Durum sorgulama hatasi: ${error.message}`, 'error');
    }
}

// Ayni logu tekrar gosterme
const shownLogs = new Set();
function isLogAlreadyShown(log) {
    if (shownLogs.has(log)) return true;
    shownLogs.add(log);
    // 100 logdan fazla olursa temizle
    if (shownLogs.size > 100) shownLogs.clear();
    return false;
}

// ============================================================
// INDIRME
// ============================================================

async function downloadMod() {
    if (!currentRequestId) return;

    try {
        const response = await fetch(`${API_BASE}/api/download/${currentRequestId}`);
        const data = await response.json();

        if (data.success && data.downloadUrl) {
            window.open(data.downloadUrl, '_blank');
        } else {
            logConsole('❌ Indirme linki henuz hazir degil!', 'error');
        }
    } catch (error) {
        logConsole(`❌ Indirme hatasi: ${error.message}`, 'error');
    }
}
