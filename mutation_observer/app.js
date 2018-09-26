var eltToObs = document.getElementById('ctl00_ContentPlaceHolder1_A_VALIDER_CODE_KDO')

var observer = new MutationObserver(function(mutationsList) {

  for(var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      console.log('Un noeud enfant a été ajouté ou supprimé :',mutation);
    }
    else if (mutation.type == 'attributes') {
      console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
    }
  }

});

// observer.observe(document.body, {childList: true, subtree: true});
observer.observe(document.body, {attributes: true, childList: true, subtree: true});
