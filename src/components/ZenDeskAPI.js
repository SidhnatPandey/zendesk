// src/components/ZenDeskAPI.js
import axios from 'axios';

const zendeskApi = axios.create({
  baseURL: 'https://yourcompany.zendesk.com/api/v2',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
  },
});

export const getTickets = () => {
  return zendeskApi.get('/tickets.json');
};

export const createTicket = (data) => {
  return zendeskApi.post('/tickets.json', data);
};
