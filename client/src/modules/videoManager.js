const baseUrl = '/api/video';
const getWithComments = '/api/video/GetWithComments';

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

//Fetch all videos with all comments attached
export const getAllVideosWithComments = () => {
  return fetch(getWithComments)
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
