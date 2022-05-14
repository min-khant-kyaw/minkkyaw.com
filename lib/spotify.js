import axios from "axios";

const token = process.env.SPOTIFY_BEARER_TOKEN

export async function getCurrentTrack() {
    const request = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization:  'Bearer ' + token
        }
    })
    const response = await request["data"];
    console.log(token)
    return response;
}