import {
  fromJS
} from 'immutable';
import { GET_WRITERS} from './actionTypes';

const defaultData = fromJS({
  articleList:[
    {
      title: '夫妻分居，女人如何处理“夫妻生活”？这6个女人说出了心里话',
      desc: '两个人结婚了，就有了相应的责任，都会为家奔波着，忙碌着，有的在一起工作，而有的却是两地分居的工作，同样的目的不同样的生活。两地分居的情况一般更影...',
    },
    {
      title: '在家自制烤鱼，有平底锅就能做！不比卖的差！',
      desc: '“烤鱼”是很多网红餐厅的招牌菜式，和朋友们围坐在一盘烤鱼旁，看着鱼肉滋滋冒油，光闻味道就能吃下一碗饭！ 用筷子夹开，鱼皮烤得有些焦脆，鱼肉却保持...',
      pic: '//upload-images.jianshu.io/upload_images/13178601-46016dbefc4baece?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title: '中国移动5G套餐曝光：下月开始，1元1GB，果然良心了不少',
      desc: '随着5G时代的日益接近，各项相关事务也渐渐开始逐步开展，除了旧网络的关闭，5G网络的新套餐也是大家重点关注的对象。最近，中国移动关于5G套餐就有...',
      pic: '//upload-images.jianshu.io/upload_images/16027370-f3f9dbc0695453ce.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    {
      pic: 'http://localhost:3000/images/recommend-1.png',
      id: 1
    },
    {
      pic: 'http://localhost:3000/images/recommend-2.png',
      id: 2
    },
    {
      pic: 'http://localhost:3000/images/recommend-3.png',
      id: 3
    },
    {
      pic: 'http://localhost:3000/images/recommend-4.png',
      id: 4
    },
    {
      pic: 'http://localhost:3000/images/recommend-5.png',
      id: 5
    },
    {
      pic: 'http://localhost:3000/images/recommend-6.png',
      id: 6
    },
  ],
  writers: []
})

export default (state = defaultData, action) => {
  switch (action.type) { 
    case GET_WRITERS:
      return state.set('writers', action.writers);
    default:
      return state
  }
}