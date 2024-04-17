function change_theme() {
    var next_theme = localStorage.getItem("color-scheme");
    if (next_theme === "dark") {
        let theme = document.getElementById("color-scheme");
        theme.setAttribute("href", "styles/dark.css");
        localStorage.setItem("color-scheme", "light");
    } else {
        let theme = document.getElementById("color-scheme");
        theme.setAttribute("href", "styles/light.css");
        localStorage.setItem("color-scheme", "dark");
    }
}

window.onload = () => {
    var next_theme = localStorage.getItem("color-scheme");
    if (next_theme === "dark") {
        let theme = document.getElementById("color-scheme");
        theme.setAttribute("href", "styles/light.css");
    } else {
        let theme = document.getElementById("color-scheme");
        theme.setAttribute("href", "styles/dark.css");
    }

    let games_list_elem = document.getElementById("games-list");

    games_list.forEach((game) => {
        games_list_elem.append(game.getGameRowPreview());
    });
};
