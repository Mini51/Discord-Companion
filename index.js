
/* Info:  

! This tool logs all your friends to a file for later use. 
! Made By: Mini51
! Github-page: https://github.com/Mini51/Discord-FriendLog

*/ 




//Require modules and other tools
const axios = require('axios')
const fs = require('fs');
const prompts = require('prompts');
require('./style.js')();
const url = 'https://discord.com/api/v9/users/@me/relationships';



//Prompt the user for token
(async () => {
  const response = await prompts({
    type: 'password',
    name: 'value',
    message: 'Please input your token',
    validate: value => value ==+ null ? 'you must input your token to continue' : true
  });

  // Define the options for the API call
  const options = {
    method: 'GET',
    headers: { 'Authorization': response.value },
    url,
  };


// calling the function to get our friends list 
getFriends()



// Function to get the users  friends
  async function getFriends() {
    try {
      const response = await axios(options);

      let result = response.data.map(({ user }) => user.username + '#' + user.discriminator);
    
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
