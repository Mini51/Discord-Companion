// ! THis file is the main file for Friend-Logger project
/* 

Made By: Mini
Github-page: https://github.com/Mini51/Discord-FriendLog

*/ 

//Require modules and other tools


const axios = require('axios')
const fs = require('fs');
const prompts = require('prompts');
require('./style.js')();
const url = 'https://discord.com/api/v9/users/@me/relationships';




(async () => {
  const response = await prompts({
    type: 'password',
    name: 'value',
    message: 'Please input your token',
    validate: value => value ==+ null ? 'you must input your token to continue' : true
  });
  const options = {
    method: 'GET',
    headers: { 'Authorization': response.value },
    url,
  };


getUser()


  async function getUser() {
    try {
      const response = await axios(options);

      console.log(response.length)


      let result = response.data.map(({ user }) => user.username + '#' + user.discriminator);
      console.log(typeof result);
    
      result = JSON.stringify(result);
    
      fs.writeFile('output.json', result, () => { 
        console.logPass('Logged all your friends to ./output.json');
      })

    } catch (error) {
      console.logDanger('there was a error:')
      console.error(error);
    }
  }

})();
