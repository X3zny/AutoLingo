document.getElementById("autofill").addEventListener("click", () => {
  const selectedLanguage = document.getElementById("languageSelect").value;
  const jsonFile = `lang/${selectedLanguage}.json`;

  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: "autofill",
            words: data,
          });
        }
      });
    })
    .catch((error) => {});
});

document.getElementById("newWord").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "newWord" });
    }
  });
});

document.getElementById("discordButton").addEventListener("click", () => {
  const discordInviteLink = "https://discord.gg/h6FWqZP8da";
  chrome.tabs.create({ url: discordInviteLink });
});
