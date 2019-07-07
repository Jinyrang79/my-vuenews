import axios from 'axios';

// 1. HTTP request & response 관련된 기본설정
const config = {
    baseurl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList() {
    // return axios.get(config.baseurl + 'news/1.json')
    return axios.get(`${config.baseurl}news/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseurl}jobs/1.json`)
}
function fetchAskList() {
    return axios.get(`${config.baseurl}ask/1.json`)
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList
}