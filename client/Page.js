(function (exports) {
  class Page {
    constructor () {
      this.grid = new Grid()
      this.pagination = new Pagination()
    }

    async requestGridData () {
      const queryString = window.location.search
      const { data: { contents, totalPage } }= await axios.get(`/data${queryString}`)
      this.grid.render(contents)
      this.pagination.render(totalPage)
    }
  }
  
  exports.Page = Page
})(window)
