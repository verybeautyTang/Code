const imgData = [
  { id: 1, name: '11' },
  { id: 2, name: '22' },
  { id: 3, name: '33' },
  { id: 4, name: '44' },
  { id: 5, name: '55' },
  { id: 6, name: '66' },
  { id: 7, name: '77' },
  { id: 8, name: '88' },
  { id: 9, name: '99' }
]
function start(count, id, callback) {
  let _this = this // this指向_this
  let arr = [1,2,3,6,9,8,7,4,] //执行顺序
  var i = 0
  var timeout = 200 // 走一格花费的时间，时间越长走得就越慢
  for (var m =0; m<arr.length;m++) {
    if(imgData[arr[m]-1].id == id) {
      break
    }
  }
  console.log('3333')//我也可以了！我可真是个小机灵鬼~
  var middle = arr.length * count + m + 1 //计算需要走几格

  function  rotate() {
    if(i>arr.length * count && imgData[arr[m]-1].id == id) {
      clearInterval(time)
      that.time = null;
      callback();
      return;
    }
    // 控制加，减速度。
    if (i < middle / count) {
      timeout = timeout - 160 / middle * count;
    }

    if (i > (count - 1) * middle / count) {
      timeout = timeout + 500 / middle * count;
    }
    if (i == middle - 2) {
      timeout = 600;
    }
    if (i == middle - 1) {
      timeout = 1000;
    }
  }
}