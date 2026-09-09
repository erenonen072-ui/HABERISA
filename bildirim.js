"use strict";

document.addEventListener("DOMContentLoaded", async function () {

    // Tarayıcı bildirimleri destekliyor mu?
    if (!("Notification" in window)) {
        console.log("Bu tarayıcı bildirimleri desteklemiyor.");
        return;
    }

    // Daha önce karar verilmişse tekrar sorma
    if (Notification.permission !== "default") {
        return;
    }

    // Service Worker destekleniyor mu?
    if (!("serviceWorker" in navigator)) {
        console.log("Service Worker desteklenmiyor.");
        return;
    }

    try {

        // Service Worker'ı kaydet
        const registration = await navigator.serviceWorker.register("/sw.js");

        console.log("Bildirim sistemi hazır.");

        // Site açıldıktan kısa süre sonra izin iste
        setTimeout(async function () {

            if (Notification.permission === "default") {

                const permission = await Notification.requestPermission();

                if (permission === "granted") {
                    console.log("Bildirim izni verildi.");

                    // Test bildirimi
                    registration.showNotification("Haberİsta", {
                        body: "Bildirimler başarıyla açıldı! 🔔",
                        icon: "/images/logo.jpeg",
                        badge: "/images/logo.jpeg",
                        data: {
                            url: "/"
                        }
                    });
                }

                if (permission === "denied") {
                    console.log("Bildirim izni reddedildi.");
                }
            }

        }, 1500);

    } catch (error) {
        console.error("Bildirim sistemi hatası:", error);
    }
});
