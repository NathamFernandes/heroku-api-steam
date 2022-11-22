/* const axios = require('axios')
  
// Make request
axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=E9FCC1C5E3BA8368FDABE96C4027CA8D&steamid=76561198248619940')
  
  // Show response data
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
*/

const SteamAPI = require('steamapi');
const steam = new SteamAPI('E9FCC1C5E3BA8368FDABE96C4027CA8D');
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors());

// GAMBIARRA INSANA: AMBOS SÃO STRINGS, MAS O ID DA STEAM SEMPRE TEM 17 CARACTERES 

app.get('/usuarios/:idusuario', async (req, res) => {
    if (req.params.idusuario.length != 17) {
        console.log('teste1')
        let id = await steam.resolve(`https://steamcommunity.com/id/${req.params.idusuario}`)
        res.json(await steam.getUserStats(id, 730))
    } else {
        console.log('teste2')
        res.json(await steam.getUserStats(req.params.idusuario, 730))
    }
})

app.listen(port, () => {
    console.log('Servidor operacional...')
})


