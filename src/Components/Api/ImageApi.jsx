import axios from 'axios';

function GetImagesApi(q, page = 1) {
  return axios.get(
    `https://pixabay.com/api/?key=22398165-fb0cc592f6e3d650fc4eef6c6&q=${q}&page=${page}&per_page=12&image_type=photo`,
  );
}

export { GetImagesApi };
