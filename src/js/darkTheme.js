let darkThemeBoolean = true;
let text

export const darkTheme = () => {

    document.querySelector(".buttonChangeTheme").addEventListener("click", () => {

        document.documentElement.classList.toggle("darkTheme");
        const span = document.querySelector(".buttonChangeTheme span")

        darkThemeBoolean ? text = "dark" :  text = "light";


        span.innerHTML = `${text} mode ativado!`;
        darkThemeBoolean = !darkThemeBoolean;
    })

}