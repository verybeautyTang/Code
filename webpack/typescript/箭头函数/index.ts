mybooks.forEach((item) => {
  console.log('reading')
})

function Book() {
  this.publishDate = 2016;
  setInterval(() => {
    console.log(this.publishDate);
  }, 1000);
}

