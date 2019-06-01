class Data {
  constructor () {
    this.data = []
    this.length = 100

    this.init()
  }

  init() {
    this.createMockData()
  }

  createMockData () {
    for (let i = 0; i < this.length; i++) {
      this.data.push({
        order: i,
        value: Math.floor(Math.random() * 100) + 1,
      })
    }
  }

  getData (page, pageSize) {
    const parsedPage = Number(page)
    const parsedPageSize = Number(pageSize)
    const totalPage = this.length / parsedPageSize
    return {
      contents: this.data.slice((parsedPage - 1) * parsedPageSize, parsedPage * parsedPageSize),
      totalPage: this.length % parsedPageSize === 0 ? totalPage : totalPage + 1
    }
  }
}

module.exports = Data
