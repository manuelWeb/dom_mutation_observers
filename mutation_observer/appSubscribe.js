// https://codeburst.io/observe-changes-in-dom-using-mutationobserver-9c2705222751
// target element that we will observe

// const target = document.body;
// const target = document.getElementById('codeCadeau');
const target = document.getElementById('ctl00_ContentPlaceHolder1_A_VALIDER_CODE_KDO');

// config object
const config = {
  attributes: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true,
  childList: true,
  subtree: true
};

// subscriber function
function subscriber(mutations) {
  mutations.forEach((mutation) => {
    // handle mutations here
    console.log(mutation);
  });
}

// instantiating observer
const observer = new MutationObserver(subscriber);

// observing target
observer.observe(target, config);

document.getElementById('ctl00_ContentPlaceHolder1_A_VALIDER_CODE_KDO').setAttribute("onclick", "observer.observe(document.getElementById('codeCadeau'), config)")
