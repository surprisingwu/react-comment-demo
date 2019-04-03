import {
  GET_WRITERS,
  LOAD_MORE_DATA
} from './actionTypes';
import axios from 'axios';
import {
  filterNum
} from '../../../utils/util';


const _getWriters_ = (writers = []) => {
  return {
    type: GET_WRITERS,
    writers
  }
}
const _loadMore_ = (list = []) => {
  return {
    type: LOAD_MORE_DATA,
    list
  }
}

export const getWriters = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/writers.json').then(res => {
      if (res.status === 200 && res.data.code === 200) {
        res = res.data.data.map(item => {
          const {
            total_wordage,
            total_likes_count
          } = item
          return {
            ...item,
            total_likes_count: filterNum(total_likes_count),
            total_wordage: filterNum(total_wordage)
          }
        })
        dispatch(_getWriters_(res))
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export const getLoadMore = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/loadMore.json').then(res => {
      if (res.status === 200 && res.data && res.data.code === 200) {
        const ret = res.data.data
        dispatch(_loadMore_(ret))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}