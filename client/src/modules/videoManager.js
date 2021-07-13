import { getToken } from "./authManager";

const baseUrl = '/api/video';
const getWithComments = baseUrl + '/GetWithComments';

export const getAllVideos = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An unknown error occurred while trying to get videos.");
      }
    });
  });
};

//Fetch all videos with all comments attached
export const getAllVideosWithComments = () => {
  return getToken().then((token) => {
    return fetch(getWithComments, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An unknown error occurred while trying to get quotes.");
      }
    });
  });
};

//fetch videos that match search criteria
export const getSearchResults = (search) => {
  return getToken().then((token) => {
    return fetch(`/api/video/search?q=${ search }`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
      }
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("An unknown error occurred while trying to get your search results.");
        }
      });
  });
};

export const addVideo = (video) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ token }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("An unknown error occurred while trying to save a new video.");
      }
    });
  });
};

//fetch single video by ID
export const getVideo = (id) => {
  return fetch(`${ baseUrl }/GetVideoByIdWithComments/${ id }`).then((res) => res.json());
};

// fetch all videos by user
export const getUserVideos = (id) => {
  return fetch(`/api/UserProfile/GetUserVideos/${ id }`)
    .then((res) => res.json());
};