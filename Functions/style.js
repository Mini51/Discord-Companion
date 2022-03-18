// This file is here so we can log to the console in color easier 

const colors = {
    Pass : "\x1b[32m", 
    Warn : "\x1b[33m", 
    Danger : "\x1b[31m"
};

module.exports = () => {
    Object.keys(colors).forEach(key => {
        console['log' + key] = (strg) => {
            if(typeof strg === 'object') strg = JSON.stringify(strg, null, 4);
            return console.log(colors[key]+strg+'\x1b[0m');
        }
    });
}