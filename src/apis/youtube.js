import axios from 'axios';

const KEY = 'AIzaSyClTj_3k3WuEljvuUQe7GYxFrRdiv9mk8M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
