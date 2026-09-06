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

        const symbols = [
            "USD/TRY",
            "EUR/TRY",
            "BTC/USD"
        ];

        const url =
            "https://api.twelvedata.com/quote" +
            `?symbol=${encodeURIComponent(symbols.join(","))}` +
            `&apikey=${encodeURIComponent(API_KEY)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Twelve Data bağlantısı başarısız.");
        }

        const data = await response.json();

        if (data.status === "error") {
            throw new Error(data.message || "API hatası.");
        }

        const result = {};

        symbols.forEach((symbol) => {
            const item = data[symbol];

            if (!item || item.status === "error") {
                result[symbol] = null;
                return;
            }

            result[symbol] = {
                symbol,
                name: symbol === "USD/TRY"
                    ? "Dolar"
                    : symbol === "EUR/TRY"
                        ? "Euro"
                        : "Bitcoin",
                price: Number(item.close),
                change: Number(item.change),
                percent: Number(item.percent_change),
                timestamp: item.timestamp
            };
        });

        return res.status(200).json({
            success: true,
            updatedAt: new Date().toISOString(),
            data: result
        });

    } catch (error) {
        console.error("MARKET API:", error);

        return res.status(500).json({
            success: false,
            error: "Piyasa verileri alınamadı."
        });
    }
}
