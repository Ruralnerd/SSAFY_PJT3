// home
import client from './client'

const ACCESS_TOKEN = localStorage.getItem('token')
if (ACCESS_TOKEN) {
  client.defaults.headers['Authorization'] = `JWT ${ACCESS_TOKEN}`
}

export const getCarousel = () =>
  client.get(`/api/v1/sales/markets/`, {
    params: { num: 5, option: 'manyorder' },
  })

export const getPopular = () =>
  client.get(`/api/v1/sales/markets/`, {
    params: { num: 3, option: 'popular' },
  })

export const getSeasonal = () =>
  client.get(`/api/v1/sales/markets/`, {
    params: { num: 3, option: 'created_at' },
  })

export const getStorys = () =>
  client.get(`/api/v1/articles/storys/`, {
    params: { num: 100, option: 'popular' },
  })