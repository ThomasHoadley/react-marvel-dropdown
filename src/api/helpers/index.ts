import md5 from "md5";
import { privateKey, publicKey } from "../api.config";
import { MarvelQueryArgs } from "../characters/types";

export const serializeQueryParams = (args: Record<string, any>) => {
  return Object.entries(args)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export async function marvelApiRequest(
  endpoint: string,
  args: MarvelQueryArgs
) {
  const timeStamp = new Date().getTime();
  const hashString = `${timeStamp.toString()}${privateKey}${publicKey}`;
  const hash = md5(hashString);
  const urlParams = serializeQueryParams({
    ts: timeStamp,
    apikey: publicKey,
    hash,
    ...(args && args),
  });
  console.log("urlParams", urlParams);

  const url = `https://gateway.marvel.com:443/v1/public/${endpoint}?${
    urlParams && urlParams
  }`;

  return fetch(url, {
    method: "GET",
  });
}
