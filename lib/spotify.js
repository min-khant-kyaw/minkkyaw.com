import axios from "axios";
import qs from "qs";

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const getAuth = async () => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientID,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };
  try {
    const request = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    const response = await request["data"];
    return response.access_token;
  } catch (error) {
    console.log(error);
  }
};

export async function getLastPlayed() {
  const access_token = await getAuth();
  const api_url = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
  try {
    const request = await axios.get(api_url, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    const response = await request["data"];
    const spotify = response.items[0];
    const artist = spotify.track.artists
      .map((item) => `${item.name}`)
      .join(", ");
    const lastPlayed = {
      album: spotify.track.album.name,
      albumImageUrl: spotify.track.album.images[0].url,
      artists: artist,
      trackId: spotify.track.id,
      songUrl: spotify.track.external_urls.spotify,
      trackName: spotify.track.name,
    };

    console.log(lastPlayed);
    return lastPlayed;
  } catch (error) {
    console.log(error)
  }
}

export async function getCurrentTrack() {
  const access_token = await getAuth();
  const api_url = "https://api.spotify.com/v1/me/player/currently-playing";
  try {
    const request = await axios.get(api_url, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    const spotify = await request["data"];
    const artist = spotify.item.artists
      .map((item) => `${item.name}`)
      .join(", ");
    const nowPlaying = {
      album: spotify.item.album.name,
      albumImageUrl: spotify.item.album.images[0].url,
      artists: artist,
      isPlaying: spotify.is_playing,
      trackId: spotify.item.id,
      songUrl: spotify.item.external_urls.spotify,
      trackName: spotify.item.name,
    };
    return nowPlaying;
  } catch (error) {
    console.log(error);
  }
}
