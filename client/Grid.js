(function (exports) {
  class Grid {
    constructor () {
      this.$grid = $('.grid__wrapper')
      this.$template = null
      this.api = '/data'

      this.init()
      // this.requestGridData()
    }

    // level 1
    init () {
      this.createTemplate()
    }

    createTemplate () {
      const $template = document.createElement('template')
      $template.innerHTML = `
        <dl class="grid__line">
          <dt class="grid__line-title center">순서</dt>
          <dd class="grid__line-description center">a</dd>
          <dt class="grid__line-title center">값</dt>
          <dd class="grid__line-description center">1</dd>
        </dl>`
      
      this.$template = $template
    }

    // async requestGridData () {
    //   const queryString = window.location.search
    //   const { data: { contents, totalPage } }= await axios.get(`${this.api}${queryString}`)
    //   this.render(contents)
    // }

    render (contents) {
      this._resetGrid()

      const $fragment = document.createDocumentFragment()
      contents.forEach(({order, value}) => {
        const $template = document.importNode(this.$template.content, true)
        const [$order, $value] = Array.from($All('.grid__line-description', $template))
        $order.textContent = order
        $value.textContent = value

        $fragment.appendChild($template)
      })

      this.$grid.appendChild($fragment)
    }

    // level 2
    _resetGrid () {
      this.$grid.innerHTML = ''
    }
  }

  exports.Grid = Grid
})(window)
