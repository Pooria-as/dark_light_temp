const toggleSwitch = document.querySelector("input[type='checkbox']")



const Swith = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
    }
    else {
        document.documentElement.setAttribute("data-theme", "light")

    }
}


toggleSwitch.addEventListener("change", Swith)