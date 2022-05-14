import axios from "axios";
import qs from "qs";

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN_PROD;

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

export async function getCurrentTrack() {
  const access_token = await getAuth();
  const api_url = "https://api.spotify.com/v1/me/player/currently-playing";
  try {
    const request = await axios.get(api_url, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    const response = await request["data"];
    return response;
  } catch (error) {
    console.log(error);
  }
}
