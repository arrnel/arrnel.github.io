function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function isCookieExists(cookieName) {
    const cookiesArray = document.cookie.split(';');
    if (cookiesArray[0] === "") {
        return false;
    }
    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        // Проверяем, начинается ли текущее куки с искомого имени
        if (cookie.indexOf(cookieName + '=') === 0) {
            // Найдено соответствие, возвращаем true
            return true;
        }
    }
    return false;
}

function getCookieValue(cookieName) {
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}

function setCookie(cookieName, cookieValue) {
    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + currentDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function editCookie(cookieName, newCookieValue) {
    deleteCookie(cookieName);
    setCookie(cookieName, newCookieValue);
}

function getPathToJson(lang) {
    return 'languages/' + lang + '.json';
}

function changePageLanguage() {
    let langToSwitch;
    let currentLang = getCookieValue('lang');

    if ((currentLang !== 'ru' && currentLang !== 'en') || currentLang == null) {
        langToSwitch = 'en'
        setCookie('lang', langToSwitch);
        loadTranslationFile(getPathToJson(langToSwitch)).then(json => translatePageTo(json));
        changeCVFileForLang(langToSwitch)
    } else {
        langToSwitch = (currentLang === 'ru') ? 'en' : 'ru'
        editCookie('lang', langToSwitch);
        loadTranslationFile(getPathToJson(langToSwitch)).then(json => translatePageTo(json));
        changeCVFileForLang(langToSwitch)
    }

}


function translateLanguageOnStart() {
    let currentLang = getCookieValue('lang');
    if ((currentLang !== 'ru' && currentLang !== 'en') || currentLang == null) {
        setCookie('lang', 'en')
    } else if (currentLang === 'ru') {
        loadTranslationFile(getPathToJson('ru')).then(json => translatePageTo(json));
        changeCVFileForLang('ru')
    }
}

function loadTranslationFile(file) {
    return fetch(file)
        .then(response => response.json())
        .catch(() => console.error(`Ошибка при загрузке файла перевода: ${file}`));
}

function translatePageTo(json) {
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const path = element.getAttribute('data-translate').split(/[.\[\]]/);

        let text = json;

        path.forEach(key => {
            if (text[key] !== undefined) {
                text = text[key];
            } else if (Array.isArray(text)) {
                const index = parseInt(key);
                if (!isNaN(index) && index < text.length) {
                    text = text[index];
                }
            }
        });

        if (typeof text === 'string') {
            element.innerHTML = text;
        }
    });
}

function changeCVFileForLang(lang) {
    lang = getCookieValue('lang');
    if (lang === 'ru') {
        document.getElementById('cv-btn').onclick = function () {
            window.open('assets/cv_ru.pdf')
        };
    } else {
        document.getElementById('cv-btn').onclick = function () {
            window.open('assets/cv.pdf')
        };
    }
}


window.onload = function () {
    translateLanguageOnStart();
};

