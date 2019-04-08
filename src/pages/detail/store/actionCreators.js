import { GET_DETAIL_INFO} from './actionTypes';
import axios from 'axios';
const _getDetail_ = (data) => {
  return {
    type: GET_DETAIL_INFO,
    data
  }
}

export const getDetail = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/detail.json').then(res => {
      if (res && res.data.code === 200) {
        res = res.data.data
        dispatch(_getDetail_(res))
      }
    }).catch(err => {
      console.log('获取详情信息异常');
    })
  }
}