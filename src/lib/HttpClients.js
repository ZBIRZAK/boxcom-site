"use server";

import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

/**
 * OFFICIAL DOCUMENTATION pour WORDPRESS:
 * https://developer.wordpress.org/rest-api/reference/posts/
 */

const clientParams = {
  baseURL: process.env.BACKEND_HOST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30 * 1000,
};

const _backendClient = axios.create(clientParams);

// CECI EST TRES UTILE POUR LE DEBUG:
// _backendClient.interceptors.request.use((request) => {
//   console.log("Starting Request");
//   console.log(JSON.stringify(request, null, 2));
//   return request;
// });
// _backendClient.interceptors.response.use((response) => {
//   console.log("Response returned");
//   console.log(JSON.stringify(Object.keys(response.data), null, 2));
//   console.log(
//     "[_embedded]:",
//     JSON.stringify(response.data[1]?._embedded, null, 2)
//   );
//   return response;
// });

export const backendClient = setupCache(_backendClient, {
  ttl: 1 * 60 * 1000, // 1 minute
});

const _seoClient = axios.create(clientParams);
export const seoClient = setupCache(_seoClient, {
  ttl: 5 * 60 * 1000, // 5 minutes
});
