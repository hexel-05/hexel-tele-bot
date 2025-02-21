const fs = require('fs');
const path = require('path');

const commandFolder = path.join(__dirname , '../command');

module.exports = (bot) => {
    fs.readdir(commandFolder, (err, files) => {
        if (err) return console.error('Error loading command : ', err);

        files.forEach((file) => {
            if (file.endsWith('.js')) {
                const commandPath = path.join(commandFolder, file);
                delete require.cache[require.resolve(commandPath)];

                try {
                    const command = require(commandPath);
                    command(bot);
                    console.log(`Loaded command : ${file}`);
                } catch (error) {
                    console.error(`Failed to load command ${file}`);
                }
            }
        });
    });
};