function greet(language) {
    const greetings = {
        english: "welcome",
        danish: "Velkmost",
        dutch: "Welkom",
        fimish: "Tervetuloa",
        french: "Bienvenue",
        german: "Willkomen",
        irish: "Fáilte",
    };
    if (typepf !== 'string') {
        return greetings.english;

    }
    const normalizedLang = language.trim().toLowerCase();
    return greetings[normalizedLang] || greetings.english;
}