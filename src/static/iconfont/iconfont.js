import { createGlobalStyle } from 'styled-components';

const IconFont = createGlobalStyle `
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1552297463334'); /* IE9 */
    src: url('./iconfont.eot?t=1552297463334#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN8AAsAAAAAB4gAAAMuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCUIJGATYCJAMQCwoABCAFhG0HOxurBhHVm7HIfiSmWwzyzcNp5YjdijfBA59nvY92M8mIWkDt0jzRN+FknSAkADY3++FqVIRiSc6D/+U70jEh5Ncf947/6Dyw+exbLmvTmjQ3dx8DjLd1ga2xMOASxoaxKy9iPgRgEk0mok69Jm0w0BjNBCAG9e/bHSOlQtckCgwEzpK+GrEMB4acLy8BS/3fizfkCwMkDoWxUIs+dXtR43nk82I1zZ5GJzWdaeMZADYIFJAJaBD9Sk09UKE3E4WpVNYUAwYGEsYqSnhebNtIuBe5Yf7lgUSgQDgx4j0BKEQ+Bc8jbQISnicQEPC8OA4F8EIaG4AH0A1YjSiRF5AodICnqZVhBFlDD9xNuHPHdetWm9u32y68WzuwffUhaerdu25OyTsmunYvSG3T1r1n+ri2Y13jerp8TJdnG3Og1b7DmmhzU2i77seshWAK87S54IqY7nZP99eobHt0J9N2WQvPCXHqz56ovobafO7aCrVSuQa5WcacsG3TGTV+Jv5wTojcOkFt2SdnmCFb9k+Q4yXm4/H3UW1mZJPGc2vO7drl1KmuXcfVLO6Rcuqkh6Ifl167e/64Eyc43af+9dQ613t726r2nQHVmreVtXr0r3ZX/6k2ctSF0hzhqJk9NM3V36uz1bhG+dMu7lEXw4L+hCd9SopmGAD2OXVCVbWNptM0ajrYtjqtftNybLq0UXT1qfxmWBqAe3ub/fCT2gvetUAR/JRSGttGc5Gh1lqWUavU7e1ocu+rlQRMTMCGNn+ejKEMUuJBYBAUg6QKUaAwSEQ0JRMcWBSCE4PqYJJB/cEWAYxAIbQHkM5sAAJfDoDEm1Og8OUyoimPwUEw78CJr1Bg4hIBY1okCzeI2oSS0YD6Q9CtWkvLIki8oXtnSUmRT3shHcEBYzdkAytWpDE6HB83MVuw1AosYDHMucFGLaLmzjNvc9/bsht1upWToDahZDSg/hB0q9ZNzyL3/Ru6d5ZUQ6qwv5COUD6M3dACWeW1FelaDjk+bmK2YKkVWIABs+ltsJXXiqi58z3c29yjVLatvJtfWZ5wBmBibKGFFEpo4cA5EiVpfx2G9VJTnk4AAA==') format('woff2'),
    url('./iconfont.woff?t=1552297463334') format('woff'),
    url('./iconfont.ttf?t=1552297463334') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1552297463334#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default IconFont