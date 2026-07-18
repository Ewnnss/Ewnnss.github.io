// Dictionnaire de traduction
const translations = {
    fr: {
        betaBadge: "Bêta Privée",
        heroTitle: "La vision totale sur votre serveur.",
        heroDesc: "Un système de logs complet et de modération centralisée. Actuellement disponible en accès anticipé sur liste blanche.",
        ctaText: "Pour obtenir l'accès, contactez le développeur en DM Discord :",
        copyBtn: "Copier l'ID",
        featuresTitle: "Modules Intégrés",
        featSec: "Protection anti-nuke, alertes raid et logs de permissions.",
        featVoice: "Tracking de sessions, états micro/caméra et anti-spam vocal.",
        featMsg: "Messages supprimés/modifiés, alertes mass-mention et spam.",
        featUpd: "Modifications de l'arborescence, salons, rôles et statuts système en temps réel.",
        featMod: "Case ID unifiés, historique des sanctions et gestions vocales forcées.",
        featMem: "Mouvements, changements de profils et suivi des invitations.",
        footerText: "Tous droits réservés."
    },
    en: {
        betaBadge: "Private Beta",
        heroTitle: "Total vision over your server.",
        heroDesc: "A comprehensive logging system and centralized moderation. Currently available in early access via whitelist.",
        ctaText: "To get access, contact the developer in Discord DM:",
        copyBtn: "Copy ID",
        featuresTitle: "Integrated Modules",
        featSec: "Anti-nuke protection, raid alerts, and permission logs.",
        featVoice: "Session tracking, mic/camera states, and vocal anti-spam.",
        featMsg: "Deleted/edited messages, mass-mention, and spam alerts.",
        featUpd: "Real-time updates for server structure, channels, roles, and system status.",
        featMod: "Unified Case IDs, sanction history, and forced vocal management.",
        featMem: "Movements, profile changes, and invitation tracking.",
        footerText: "All rights reserved."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Vérifier si une langue est déjà enregistrée
    const savedLang = localStorage.getItem("ewnnixLang");
    if (savedLang) {
        applyLanguage(savedLang);
        hideSplashScreen();
    }
});

function setLanguage(lang) {
    localStorage.setItem("ewnnixLang", lang);
    applyLanguage(lang);
    
    // Effet de fondu pour faire disparaître le splash screen
    const splash = document.getElementById("splash-screen");
    splash.style.opacity = '0';
    setTimeout(() => {
        hideSplashScreen();
    }, 500);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function hideSplashScreen() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
}

function resetLanguage() {
    // Permet à l'utilisateur de réafficher le menu de langue
    localStorage.removeItem("ewnnixLang");
    document.getElementById("main-content").classList.add("hidden");
    const splash = document.getElementById("splash-screen");
    splash.style.display = "flex";
    setTimeout(() => {
        splash.style.opacity = '1';
    }, 10);
}

function copyDiscordId() {
    const id = "937006462927003728";
    navigator.clipboard.writeText(id).then(() => {
        const btn = document.getElementById("copy-btn");
        const currentLang = localStorage.getItem("ewnnixLang") || 'fr';
        
        btn.textContent = currentLang === 'fr' ? "Copié !" : "Copied!";
        btn.style.backgroundColor = "#23a559"; // Vert de validation
        
        setTimeout(() => {
            btn.textContent = translations[currentLang].copyBtn;
            btn.style.backgroundColor = ""; // Retour à la couleur par défaut
        }, 2000);
    });
}
