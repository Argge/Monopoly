const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    const usernameInp = document.getElementById("usernameInp").value.trim();
    const radio = document.getElementsByName("color").value;
    if (!usernameInp && !radio) {
        alert("Input all lands!");
        return;
    }
    else if (!usernameInp) {
        alert("Set a nickname!");
        return;
    }
    else if (!radio) {
        alert("Choose a color")
        return;
    }
    else {
        localStorage.setItem("color", radio);
        localStorage.setItem("username", usernameInp);
        document.location.replace(`http://${window.location.hostname}:3200/monopoly.html`);
    }
});