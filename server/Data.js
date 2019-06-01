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
    return {
      contents: this.data.slice((parsedPage - 1) * parsedPageSize, parsedPage * parsedPageSize),
      totalPage: Math.ceil(this.length / parsedPageSize)
    }
  }
}

module.exports = Data
