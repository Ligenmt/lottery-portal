import request from '../utils/requests'


export function abxxn(params) {
  return request({
    // url: 'http://localhost:8090/api/abxxn',
    url: '/api/abxxn',
    method: 'POST',
    data: params,
  })
}

export function abxxn2(params) {
  return request({
    url: '/api/abxxn2',
    method: 'POST',
    data: params,
  })
}

export function abxxnv2(params) {
  return request({
    url: '/api/abxxnv2',
    method: 'POST',
    data: params,
  })
}

export function algorithm01(params) {
  return request({
    url: '/api/algorithm01',
    method: 'POST',
    data: params,
  })
}

export function algorithm01Pl5(params) {
  return request({
    url: '/api/algorithm01_pl52',
    method: 'POST',
    data: params,
  })
}

export function algorithm01Xywfc(params) {
  return request({
    url: '/api/algorithm01_xywfc',
    method: 'POST',
    data: params,
  })
}

export function notsame(params) {
  return request({
    url: '/api/not_same',
    method: 'POST',
    data: params,
  })
}

export function notsamev3(params) {
  return request({
    url: '/api/not_same_v3',
    method: 'POST',
    data: params,
  })
}

export function notsameplus(params) {
  return request({
    url: '/api/not_same_plus',
    method: 'POST',
    data: params,
  })
}

