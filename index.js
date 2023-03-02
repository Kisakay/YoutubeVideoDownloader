DEV_MODE = true
const fs = require('fs');
const ytdl = require('ytdl-core');
const colors = require("colors")
const process = require("process")
var setTitle = require('console-title');
const delay = require('delay');

async function main() {

setTitle('YoutubeVideoDownload by PeacefulTrees !');

/*
* <-V -A -P> <url> <extensions>
*/
var args = process.argv.slice(2);

const format = args[2]
const type = args[0]
const URL = args[1]

if(!args[0]){
    console.log("  X  ".red+` > You don't send any arguments !

Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (.mp4, .mka, .mp3...)`.gray)
console.log("Exiting this window in 15 seconds...".green)
await delay(15000);
process.exit(1)
}
if(!args[1]){
    console.log("  X  ".red+` > You don't send any arguments !

Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (.mp4, .mka, .mp3...)`.gray)
console.log("Exiting this window in 15 seconds...".green)
await delay(15000);
process.exit(1)
}
if(!args[2]){
    console.log("  X  ".red+` > You don't send any arguments !

Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (mp4, mka, mp3...)`.gray)
console.log("Exiting this window in 15 seconds...".green)
await delay(15000);
process.exit(1)
}

    try{
        switch(type){
            case '-V':
                break;
            case '-A':
                break;
            case '-P':
                break;
            default:
                console.log("  X  ".red+` > You don't send any good arguments!

Arguments Error: ${type}
Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (mp4, mka, mp3...)`.gray)
                console.log("Exiting this window in 15 seconds...".green)
                await delay(15000);
                return  process.exit(1);
        }

        switch(format){
            case 'mp4':
                break;
            case 'webm':
                break;
            case 'm4a':
                break;
            case 'mp3':
                break;
            case 'ogg':
                break;
            case 'mov':
                break;
            case 'avi':
                break;
            case 'wmv':
                break;
            default:
                console.log("  X  ".red+` > You don't send any good arguments !

Arguments Error: ${format}
Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (mp4, mka, mp3...)
Note for extension files available:
MP4, WEBM, M4A, MP3, OGG, MOV, AVI, WMV`.gray)
                console.log("Exiting this window in 15 seconds...".green)
                await delay(15000);
                return process.exit(1);
        }

        let status = await ytdl.getBasicInfo(URL).catch(async err => {
            console.log("  X  ".red+` > Video Unavailable !

Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (mp4, mka, mp3...)
Note for extension files available:
MP4, WEBM, M4A, MP3, OGG, MOV, AVI, WMV`.gray)
console.log("Exiting this window in 15 seconds...".green)
await delay(15000);
process.exit(1);
        })
        console.log(`[ ${status.player_response.playabilityStatus.status} ]`.cyan+` (${status.videoDetails.videoId})`.red+` - ${status.videoDetails.title}`.cyan+ ` | (${status.player_response.videoDetails.author})`.cyan+
        `\n[ DOWNLOADING ]`.green+` ...`)
        var DIR = `./output/${status.player_response.videoDetails.author}`;
        
        if (!fs.existsSync(DIR)){
            fs.mkdirSync(DIR, { recursive: true });
        }
        
        if(status.player_response.playabilityStatus.status !== "OK"){
            console.log("  X  ".red+` > URL Invalid !
    
Tip: file.exe <-V -A -P> <url> <extensions>
(Video, Audio, Playlist) (URL of target) (mp4, mka, mp3...)
Note for extension files available:
MP4, WEBM, M4A, MP3, OGG, MOV, AVI, WMV`.gray)
console.log("Exiting this window in 15 seconds...".green)
await delay(15000);
process.exit(1);
        }
        ytdl(URL).pipe(fs.createWriteStream(`${DIR}/${status.videoDetails.videoId}_${status.player_response.videoDetails.channelId}.${format}`))
        console.log(`[ DOWNLOADED ]`.green+` The video is now succeffuly downloaded ! Exiting this window in 15 seconds...`);
await delay(15000);
    } catch(e) {
        if(DEV_MODE) console.log(e);
    }
    
    
}
main()


