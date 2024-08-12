import axios from 'axios';

const key = '8kz6qX3JDJw2lhxVpc-SBzdhuyqicQUdiHduys9-8sU';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (topic, page = 1) => {
  const res = await axios.get('/search/photos', {
    params: {
      query: topic,
      page: page,
      per_page: "20",
      client_id: key,
    },
  });

  return res.data;
}; 