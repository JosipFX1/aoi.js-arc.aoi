const json = require("../../package.json");
const AoiError = require("../classes/AoiError.js");

module.exports = async () => {
    try {
        AoiError.createConsoleMessage(
            [
                {
                    text: `Installed on V${json.version}`,
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
