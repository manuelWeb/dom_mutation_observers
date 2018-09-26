var eltToObs = document.getElementById('ctl00_ContentPlaceHolder1_A_VALIDER_CODE_KDO')

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    mutation.addedNodes.forEach(function(addedNode) {
      console.log(addedNode)
    });
  });
});

// observer.observe(document.body, {childList: true, subtree: true});
observer.observe(document.body, {attributes: true, childList: true, subtree: true});
