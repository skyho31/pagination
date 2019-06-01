(function (exports) {
  class Pagination {
    constructor () {
      this.$list = $('.pagination__list')
      this.$select = $('.pagination__option')

      this.pageSize = 10
      this.page = 1

      this.init()
    }

    init () {
      this.bindEvent()
      this.readQuery()
    }

    bindEvent () {
      this.$select.onchange = e => this.changePageSize(e)
    }

    render (totalPage) {
      const htmlArr = []
      for (let i = 0; i < totalPage; i++) {
        const link = this.makeQuery(i + 1, this.pageSize)
        htmlArr.push(`
          <a href=${link}>${i + 1}</a>
        `)
      }
      this.$list.innerHTML = htmlArr.join('')
    }

    readQuery () {
      const queryString = window.location.search
      const { page = 1, pageSize = 10} = this.queryParser(queryString)
      this.page = page
      this.pageSize = pageSize
      this.syncPageSize()
    }

    syncPageSize () {
      this.$select.value = this.pageSize
    }

    queryParser (queryString) {
      const queryObj = {}
      queryString.slice(1).split('&').forEach(query => {
        const [key, value] = query.split('=')
        queryObj[key] = value
      })

      return queryObj
    }

    changePageSize ({ target: { value } }) {
      this.pageSize = value
      this.requestPaging()
    }

    requestPaging () {
      window.location = this.makeQuery(1, this.pageSize)
    }

    makeQuery (page, pageSize) {
      const path = window.location.pathname
      return `${path}?page=${page}&pageSize=${pageSize}`
    }
  }

  exports.Pagination = Pagination
})(window)
