
var app = angular.module("myApp", []);

app.directive("langWelcomeDir", function($window) {
   var lang = $window.navigator.language || $window.navigator.userLanguage;

    if (lang == 'en-US') {            language = "English-US";
    } else if (lang == 'en-GB') {     language = "English-GB";
    } else if (lang == 'bg') {        language = "Bulgarian";
    } else if (lang == 'hr') {        language = "Croatian";
    } else if (lang == 'cs') {        language = "Czech";
    } else if (lang == 'da') {        language = "Danish";
    } else if (lang == 'nl') {        language = "Dutch";
    } else if (lang == 'et') {        language = "Estonian";
    } else if (lang == 'fi') {        language = "Finnish";
    } else if (lang == 'fr') {        language = "French";
    } else if (lang == 'de') {        language = "German";
    } else if (lang == 'el') {        language = "Greek";
    } else if (lang == 'hu') {        language = "Hungarian";
    } else if (lang == 'ga') {        language = "Irish";
    } else if (lang == 'it') {        language = "Italian";
    } else if (lang == 'lv') {        language = "Latvian";
    } else if (lang == 'lt') {        language = "Lithuanian";
    } else if (lang == 'mt') {        language = "Maltese";
    } else if (lang == 'pl') {        language = "Polish";
    } else if (lang == 'pt-PT') {     language = "Portuguese";
    } else if (lang == 'ro') {        language = "Romanian";
    } else if (lang == 'sk') {        language = "Slovak";
    } else if (lang == 'sl') {        language = "Slovenian";
    } else if (lang == 'es') {        language = "Spanish";
    } else if (lang == 'sv') {        language = "Swedish";
    } else {
       language = "NA";
    }
    
    return {
        template : language
    };
});


app.directive("langHowareyouDir", function($window) {
   var lang = $window.navigator.language || $window.navigator.userLanguage;

    if (lang == 'en-US') {            language = "Hi! How are you?";
    } else if (lang == 'en-GB') {     language = "Hi! How are you?";
    } else if (lang == 'bg') {        language = "Здравейте! Как си?";
    } else if (lang == 'hr') {        language = "Bok! Kako si?";
    } else if (lang == 'cs') {        language = "Ahoj! Jak se máš?";
    } else if (lang == 'da') {        language = "Hej! Hvordan har du det?";
    } else if (lang == 'nl') {        language = "Hoi! Hoe gaat het met je?";
    } else if (lang == 'et') {        language = "Tere! Kuidas sul läheb?";
    } else if (lang == 'fi') {        language = "Moi! Kuinka voit?";
    } else if (lang == 'fr') {        language = "Salut! Comment allez-vous?";
    } else if (lang == 'de') {        language = "Hallo! Wie geht es dir?";
    } else if (lang == 'el') {        language = "Γεια! Πώς είσαι;";
    } else if (lang == 'hu') {        language = "Szia! Hogy vagy?";
    } else if (lang == 'ga') {        language = "Haigh! Conas tá tú?";
    } else if (lang == 'it') {        language = "Ciao! Come stai?";
    } else if (lang == 'lv') {        language = "Sveiki! Kā tev iet?";
    } else if (lang == 'lt') {        language = "Sveiki! Kaip laikaisi?";
    } else if (lang == 'mt') {        language = "Bongu! Kif int?";
    } else if (lang == 'pl') {        language = "Cześć! Jak się masz?";
    } else if (lang == 'pt-PT') {     language = "Oi! Como você está?";
    } else if (lang == 'ro') {        language = "Bună! Ce mai faci?";
    } else if (lang == 'sk') {        language = "Ahoj! Ako sa máš?";
    } else if (lang == 'sl') {        language = "Zdravo! Kako si?";
    } else if (lang == 'es') {        language = "¡Hola! ¿Cómo estás?";
    } else if (lang == 'sv') {        language = "Hallå! Hur mår du?";
    } else {
       language = "NA";
    }
    
    return {
        template : language
    };
});
