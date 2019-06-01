(function (exports) {
  const $ = selector => document.querySelector(selector)
  const $All = (selector, $scope = document) => $scope.querySelectorAll(selector)
  
  exports.$ = $
  exports.$All = $All
})(window)
