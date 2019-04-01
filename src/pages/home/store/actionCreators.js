import {
  GET_WRITERS
} from './actionTypes';
import axios from 'axios';
import {filterNum } from '../../../utils/util';


const _getWriters_ = (writers = []) => {
  return {
    type: GET_WRITERS,
    writers
  }
}


export const getWriters = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/writers.json').then(res => {
      if (res.status === 200 && res.data) { 
        res = res.data.map(item => {
          const { total_wordage, total_likes_count } = item
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