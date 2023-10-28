
document.addEventListener("DOMContentLoaded", function () {

  const api = "https://shortit-pp.onrender.com";
  console.log("Welcome to the URL Shortner Console");

  const longUrlInput = document.getElementById("longUrl");
  const shortUrlInput = document.getElementById("shortUrl");
  const shortenerButton = document.getElementById("Shortner");
  const copyButton = document.getElementById("copy");


  shortenerButton.addEventListener("click", function () {

    const longUrl = longUrlInput.value;
    if (longUrl === "") {
      alert("Please Enter URL");
    }
    else {
      fetch(`${api}/shorten/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      })
        .then((response) => response.json())
        .then((data) => {
          shortUrlInput.value = data.url;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });


  copyButton.addEventListener("click", function () {

    shortUrlInput.select();
    navigator.clipboard.writeText(shortUrlInput.value);
    // document.execCommand("copy");
    if (shortUrlInput.value !== "") {
      alert("Shortened URL copied to clipboard!");
      shortUrlInput.value = "";
    }
  });
});
