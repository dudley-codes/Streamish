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
export const getSearchResults = (search, bool) => {
  return fetch(`/api/video/search?q=${ search }&sortDesc=${ bool }`)
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
