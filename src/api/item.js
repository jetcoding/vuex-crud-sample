import request from '@/utils/request'

export function getAll () {
  return request({
    url: '/items',
    method: 'get'
  })
}

export function getOne (id) {
  return request({
    url: `/items/${id}`,
    method: 'get'
  })
}

export function createOne (data) {
  return request({
    url: `/items/`,
    method: 'post',
    data: data
  })
}

export function updateOne (data) {
  return request({
    url: `/items/${data._id}`,
    method: 'patch',
    data: data
  })
}

export function deleteOne (id) {
  return request({
    url: `/items/${id}`,
    method: 'delete'
  })
}
