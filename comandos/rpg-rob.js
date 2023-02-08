
import MessageType from '@adiwajshing/baileys'

const cooldown = 10800000

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
    let rauser = groupMetadata.participants.map(v => v.jid)[Math.floor(Math.random() * groupMetadata.participants.map(v => v.jid).length)]
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡Hey! Espera *${msToTime(time - new Date())}* para volver a robar`
    if (!text) return m.reply(`*• Etiquetɑ ɑl usuɑrio que quierɑ sɑqueɑr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix}sɑqueɑr <usuɑrio/@tɑg>\n2.`)
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!_user in global.db.data.users) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    if (global.db.data.users[_user] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply('No puedes saquear a la bot :I')
    let user = global.db.data.users[m.sender]
    let uuser = global.db.data.users[_user]
    let __timers = (new Date - user.lastrob)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    
    let dolares = (Math.floor(Math.random() * 20) + 30)
    let limit = (Math.floor(Math.random() * 5) + 3)

let raid = `*Has saqueado ⚔️ a @${_user.split("@s.whatsapp.net")[0]}*
◦ Dinero: $${dolares}
◦ Diamante: ${limit}`

      if (uuser.limit <= 5) return m.reply('El usuario no tiene suficientes recursos!')
        global.db.data.users[_user].dolares -= dolares * 1
        global.db.data.users[_user].limit -= limit * 1
        
    
        global.db.data.users[m.sender].dolares += dolares * 1
        
        global.db.data.users[m.sender].limit += limit * 1
        
      
        m.reply(raid)
        m.reply(`*@${m.sender.split("@s.whatsapp.net")[0]}* Te acaba de saquear!`, _user)
        global.db.data.users[m.sender].lastrob = new Date * 1
    } 
            


handler.help = ['saquear']
handler.tags = ['rpg']
handler.command = /^(raidear|saquear|rob|robar)$/i

handler.cooldown = cooldown

export default handler 

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Hora(s) " + minutes + " Minuto(s)"
  }




/*
By DIEGO-OFC

/*
