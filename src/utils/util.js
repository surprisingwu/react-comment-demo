export const filterNum = (num = 0) => {
  const _num_ = num.toString()
  if (_num_.length <= 3) { 
    return _num_
  }

  return (num/1000).toFixed(1)+'k'

}