/* eslint-disable no-param-reassign */
import axios from "axios";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Spotify({
      scope:
        "user-read-email playlist-modify-public playlist-modify-private user-read-private user-read-playback-state user-modify-playback-state playlist-modify-public playlist-modify-private user-top-read",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
        };
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60,
  },
  jwt: {
    maxAge: 1 * 60 * 60,
    secret: process.env.JWT_SCERET,
    encryption: true,
    signingKey:
      '{"kty":"oct","kid":"FHod4bgiUcSEaOhl0OfCzDmik9edi5Xa1sOYifuxlFA","alg":"HS512","k":"KxDOwUWHA6M5WwPqFbkzvtVSokgRMJKGUpt7MgTK304"}',
    encryptionKey:
      '{"kty":"oct","kid":"4OE5sj1o7qw_Bna5GW75RGPfmZXmf2L9D_8lcXMEXMk","alg":"A256GCM","k":"9LV06kvfrbWp4TkVjvhIIV7OqsOgomaL79ZeYsKc0UQ"}',
  },
  callbacks: {
    jwt: async (token, user, account) => {
      if (user) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      await axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        .then((response) => (session.user.profile = response.data))
        .catch(() => {
          return;
        });

      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return Promise.resolve(session);
    },
    redirect: async () => {
      return Promise.resolve("/");
    },
  },
};
export default (req, res) => NextAuth(req, res, options);
