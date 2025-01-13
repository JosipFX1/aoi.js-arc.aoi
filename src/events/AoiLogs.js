const AoiError = require("../classes/AoiError.js");

module.exports = async () => {
    try {
        AoiError.createConsoleMessage(
            [
                {
                    text: `Installed on V1.0.2`,
                    textColor: "green"
                },
                {
                    text: "https://discord.gg/MmJ3PQWVSS",
                    textColor: "blue"
                }
            ],
            "white",
            {
                text: "arc.aoi",
                textColor: "cyan"
            }
        );
    } catch (err) {
        console.error(`ArcLogs: Error during initialization: ${err}`);
    }
};
