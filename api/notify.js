export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            success: false,
            message: "Sadece POST kullanılabilir."
        });

    }


    try {

        const {
            baslik,
            spot
        } = req.body;


        if (!baslik) {

            return res.status(400).json({
                success: false,
                message: "Haber başlığı gerekli."
            });

        }


        const secret =
            req.headers["x-haberista-secret"];


        if (
            !secret ||
            secret !== process.env.HABERISTA_NOTIFY_SECRET
        ) {

            return res.status(401).json({
                success: false,
                message: "Yetkisiz istek."
            });

        }


        const response = await fetch(
            "https://api.onesignal.com/notifications",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    "Authorization":
                        `Key ${process.env.ONESIGNAL_REST_API_KEY}`
                },

                body: JSON.stringify({

                    app_id:
                        "7d85b114-8807-4eea-8a34-3518fc2d76e3",

                    included_segments: [
                        "Subscribed Users"
                    ],

                    headings: {
                        en: "Haberİsta"
                    },

                    contents: {
                        en: baslik
                    },

                    url:
                        "https://haberisa.vercel.app/"

                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            return res.status(response.status).json({

                success: false,

                message:
                    "OneSignal bildirimi gönderilemedi.",

                error: data

            });

        }


        return res.status(200).json({

            success: true,

            message:
                "Bildirim başarıyla gönderildi.",

            data

        });


    } catch (error) {

        console.error(error);


        return res.status(500).json({

            success: false,

            message:
                "Sunucu hatası.",

            error:
                error.message

        });

    }

}
