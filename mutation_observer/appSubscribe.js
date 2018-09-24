// https://codeburst.io/observe-changes-in-dom-using-mutationobserver-9c2705222751
// target element that we will observe
const target = document.body;

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