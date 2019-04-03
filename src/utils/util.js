export const filterNum = (num = 0) => {
  const _num_ = num.toString()
  if (_num_.length <= 3) { 
    return _num_
  }

  return (num/1000).toFixed(1)+'k'

}

export const  scrollAnimation = (targetY, currentY) => {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    const dist = Math.ceil(needScrollTop / 10)
    _currentY += dist
    window.scrollTo(0, _currentY)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop >= 10 || needScrollTop <= -10) {
      scrollAnimation(targetY, _currentY)
    } else {
      window.scrollTo(0, targetY)
    }
  }, 1)
}