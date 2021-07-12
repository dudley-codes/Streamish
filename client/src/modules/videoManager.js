const baseUrl = '/api/video';
const getWithComments = baseUrl + '/GetWithComments';

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

//Fetch all videos with all comments attached
export const getAllVideosWithComments = () => {
  return fetch(getWithComments)
    .then((res) => res.json())
};

//fetch videos that match search criteria
export const getSearchResults = (search) => {
  return fetch(`/api/video/search?q=${ search }`)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
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