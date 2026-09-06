"use strict";

export default async function handler(req, res) {
    try {
        const API_KEY = process.env.TWELVE_DATA_API_KEY;

        if (!API_KEY) {
            return res.status(500).json({
                success: false,
                error: "TWELVE_DATA_API_KEY bulunamadı."
            });
        }

        const url =
            "https://api.twelvedata.com/quote" +
            `?symbol=${encodeURIComponent("USD/TRY,EUR/TRY,BTC/USD,XAU/USD")}` +
            `&apikey=${encodeURIComponent(API_KEY)}`;

        const response = await fetch(url, {
            cache: "no-store"
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "API bağlantısı başarısız.");
        }

        const usd = data["USD/TRY"];
        const eur = data["EUR/TRY"];
        const btc = data["BTC/USD"];
        const gold = data["XAU/USD"];

        if (!usd || !eur || !btc || !gold) {
            throw new Error("Piyasa verilerinden biri alınamadı.");
        }

        /*
         * XAU/USD = 1 troy ounce altın
         * Gram altın = ons fiyatı / 31.1034768
         * TL gram altın = ons USD / 31.1034768 * USD/TRY
         */
        const gramAltin =
            (Number(gold.close) / 31.1034768) *
            Number(usd.close);

        return res.status(200).json({
            success: true,

            updatedAt: new Date().toISOString(),

            data: {

                "USD/TRY": {
                    name: "Dolar",
                    price: Number(usd.close),
                    change: Number(usd.change || 0),
                    percent: Number(usd.percent_change || 0)
                },

                "EUR/TRY": {
                    name: "Euro",
                    price: Number(eur.close),
                    change: Number(eur.change || 0),
                    percent: Number(eur.percent_change || 0)
                },

                "BTC/USD": {
                    name: "Bitcoin",
                    price: Number(btc.close),
                    change: Number(btc.change || 0),
                    percent: Number(btc.percent_change || 0)
                },

                "XAU/TRY": {
                    name: "Altın",
                    price: gramAltin,
                    change: Number(gold.change || 0),
                    percent: Number(gold.percent_change || 0)
                },

                "BIST100": {
                    name: "BIST 100",
                    price: null,
                    change: null,
                    percent: null,
                    delayed: true
                }
            }
        });

    } catch (error) {

        console.error("MARKET API:", error);

        return res.status(500).json({
            success: false,
            error: error.message || "Piyasa verileri alınamadı."
        });
    }
}
