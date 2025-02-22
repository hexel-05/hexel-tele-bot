const fs = require('fs').promises;
const path = require('path');

module.exports = async (bot) => {
    try {
        const commandFolder = path.join(__dirname, '../command/');
        const files = await fs.readdir(commandFolder);

        const loadedCommands = [];

        for (const file of files) {
            if (file.endsWith('.js')) {
                const commandPath = path.join(commandFolder , file);
                delete require.cache[require.resolve(commandPath)];

                try {
                    const command = require(commandPath);
                    command(bot);
                    loadedCommands.push(file);
                } catch (error) {
                    console.error(`Failed to load command : ${file}`);
                }
            }
        }
        console.log(`✅ Load Command : ${loadedCommands.join(', ')}`);
    } catch(err) {
        console.error("Error loading command : ", err);
    }
};