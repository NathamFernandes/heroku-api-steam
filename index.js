const sslRedirect = require('heroku-ssl-redirect').default
const SteamAPI = require('steamapi');
const steam = new SteamAPI('E9FCC1C5E3BA8368FDABE96C4027CA8D');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(cors());

// GAMBIARRA INSANA: AMBOS SÃO STRINGS, MAS O ID DA STEAM SEMPRE TEM 17 CARACTERES 

app.get('/funcaoteste/:teste', (req, res) => {
    console.log('Testagem.')
    steam.getUserSummary('76561198248619940').thenthen(summary => { res.json(summary) })
})

app.get('/usuarios/:idusuario', (req, res) => {
        console.log('teste2')
        steam.getUserStats(req.params.idusuario.toString(), 730).then(
                lol => { 
            res.json(lol) }
        )
})

app.listen(port, () => {
    console.log('Servidor operacional...')
})


/*if (req.params.idusuario.length != 17) {
    console.log('teste1')
    let id = await steam.resolve(`https://steamcommunity.com/id/${req.params.idusuario}`)
    res.json(await steam.getUserStats(id, 730))
} else { }

    if (req.params.idusuario.length != 17) {
        console.log('teste1')
        steam.resolve(`https://steamcommunity.com/id/${req.params.idusuario}`).then(id => { console.log(id)})
        steam.getUserStats(id, 730).then(lol2 => { res.json(lol2)})
    } 
    */ 