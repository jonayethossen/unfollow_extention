const domains = ["instagram.com", "tiktok.com"];

function main() {
  const currentUrl = window.location.hostname;
  if (!currentUrl) return alert("fail to get current url");

  if (checkHostname(domains)) {
    const prompt = confirm("You want to unfollow?");

    if (!prompt) {
      setInterval(() => {
        const followButtons = document.getElementsByClassName(
          " _acan _acap _acas _aj1- _ap30"
        );

        let index = 0;
        if (followButtons.length <= index) return;
        if (followButtons[index]) followButtons[index].click();
        // wait 1s
        new Promise((resolve, _reject) =>
          setInterval(resolve, randomInteger(300, 1500))
        );
        index++;
      }, 500);
    } else {
      // unfollow
      setInterval(async function unfollow() {
        const unfollowbuttons = document.getElementsByClassName(
          "_acan _acap _acat _aj1- _ap30"
        );

        let index = 0;
        if (unfollowbuttons.length <= index) return;
        unfollowbuttons[index].click();

        new Promise((resolve, _reject) =>
          setInterval(resolve, randomInteger(300, 1500))
        );

        const btn = document.getElementsByClassName("_a9-- _ap36 _a9-_")[0];
        if (btn) {
          btn.click();
        }
        index++;
      }, 500);
    }
  }
}
main();

/**
 * @param {string} domains
 * @returns {boolean}
 */
function checkHostname(domains) {
  const hostname = window.location.hostname;

  // Create a regex pattern that matches any of the domains in the array
  const regexPattern = domains
    .map((domain) => domain.replace(".", "\\."))
    .join("|");
  const regex = new RegExp(`(${regexPattern})`, "i"); // 'i' makes it case-insensitive

  // Test the hostname against the regex
  return regex.test(hostname);
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
