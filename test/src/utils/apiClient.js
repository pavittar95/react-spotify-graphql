import axios from "axios";

export default class ApiClient {
  static get = (url, params) =>
    new Promise((res, rej) => axios.get(url, params).then(res).catch(rej));

  static auth = (code) => {
    // const config = {
    //   form: {
    //     code,
    //     redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    //     grant_type: "authorization_code",
    //   },
    //   headers: {
    //     Authorization: `Basic ${new Buffer(
    //       process.env.REACT_APP_SPOTIFY_CLIENT_ID +
    //         ":" +
    //         process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    //     ).toString("base64")}`,
    //   },
    // };
    const bodyFormData = new FormData();

    bodyFormData.set("code", code);
    bodyFormData.set("redirect_uri", process.env.REACT_APP_REDIRECT_URI);
    bodyFormData.set("grant_type", "authorization_code");

    return new Promise((res, rej) =>
      // axios
      //   .post("https://accounts.spotify.com/api/token", {}, config)
      axios({
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        data: bodyFormData,
        headers: {
          Authorization: `Basic ${new Buffer(
            process.env.REACT_APP_SPOTIFY_CLIENT_ID +
              ":" +
              process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
          ).toString("base64")}`,
        },
      })
        .then(res)
        .catch(rej)
    );
  };
}
