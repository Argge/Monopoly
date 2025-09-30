const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    const usernameInp = document.getElementById("usernameInp").value.trim();
    if (!usernameInp) {
        alert("Set the nickname!");
        return;
    }
    else {
        localStorage.setItem("username", usernameInp);
        document.location.replace("http://localhost:3200/monopoly.html");
    }
});