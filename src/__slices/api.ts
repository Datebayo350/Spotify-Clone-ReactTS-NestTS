import { RootState } from './../__store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut, SelectUserStateType } from './user';
import { FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

/**
 * Consult fetchBaseQuery typescript documentation for better understanding especially for prepareHeaders
 * There is an example of implementation and a good documentation for the methode signature
 */
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APPLICATION_API_BASE_URL,

  // Attaching and send back the httpOnly cookie received from the backend to every request
  credentials: 'include',

  // Want to send the access token everytime, we can defined it here, instead of each request parameters
  prepareHeaders: (headers, { getState }) => {
    // Assuming that the access token is in state currently, we can access to the redux store from the getState method
    const spotifyAccessToken = (getState() as RootState).user.spotifyAccessToken;

    if (spotifyAccessToken) {
      // attaching the access token everytime with every request
      headers.set('authorization', `Bearer ${spotifyAccessToken}`);
    }

    return headers;
  }
});

/**
 * Wrapper function around baseQuery, will handle automatic refresh token request in case of access token expiration
 *
 */
const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions);

  // If the ressource is unreachable because we didn't provide authentication by token in the headers  -- In this specific case "Forbiden" ( not authentified )
  if (result?.error?.status === 403) {
    // Send refresh token to get new access token
    const refreshTokenResult = await baseQuery('/refresh-token', api, extraOptions);

    const { data } = refreshTokenResult;

    if (data !== null && data !== undefined) {
      const accessToken = data as SelectUserStateType['spotifyAccessToken'];

      // If at this moment the user is are already logged-in, he should be in the state if he attempt to request something
      const user = (api.getState() as RootState)?.user.user;

      // Store the new access token in the store
      api.dispatch(setCredentials({ user, spotifyAccessToken: accessToken }));

      // Retry the original query with new access token set in the prepareHeaders
      const retriedResult = await baseQuery(args, api, extraOptions);

      return retriedResult;
    } else {
      // If another error different from 403 is catched
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'backendApi',
  //If this baseQuery fails, we must re-attempt after sending the refresh token and getting a new access token promise
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
