// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
// only for instagram
function instagramAutomation() {
  setInterval(async function unfollow() {
    const unfollowbuttons = document.getElementsByClassName(
      "_acan _acap _acat _aj1- _ap30"
    );
    let index = 0;
    if (unfollowbuttons.length <= index) return;
    unfollowbuttons[index].click();

    new Promise((resolve, _reject) => setInterval(resolve, 1000));

    const btn = document.getElementsByClassName("_a9-- _ap36 _a9-_")[0];
    if (btn) {
      btn.click();
    }
    index++;
  }, 500);
}
// TODO: create another automation function for tiktok
function tiktokAutomation() {
  alert("in progress");
}

function scriptFunc(command) {
  switch (command) {
    case "instagram":
      setInterval(async function unfollow() {
        const unfollowbuttons = document.getElementsByClassName(
          "_acan _acap _acat _aj1- _ap30"
        );
        let index = 0;
        if (unfollowbuttons.length <= index) return;
        unfollowbuttons[index].click();

        new Promise((resolve, _reject) => setInterval(resolve, 1000));

        const btn = document.getElementsByClassName("_a9-- _ap36 _a9-_")[0];
        if (btn) {
          btn.click();
        }
        index++;
      }, 500);
      break;
    case "tiktok":
      tiktokAutomation();
      break;
    default:
      console.log("not match");
      break;
  }
}

async function getTabId() {
  const tab = await chrome.tabs.query({ currentWindow: true, active: true });
  return tab[0].id;
}

chrome.commands.onCommand.addListener(async (command) => {
  const tabId = await getTabId();
  chrome.scripting.executeScript({
    target: { tabId },
    func: scriptFunc,
    args: [command],
  });
});
