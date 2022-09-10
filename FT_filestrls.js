const translation = {
source: {
 text01: "Click Here.",
  
 }
 ,
 en: {
 text01: "Click Here.",
  
 }
 ,
 de: {
 text01:"Klick hier."
 }
 ,
 ja: {
 text01: "Klick hier.",
 
 }
 ,
 sv: {
 text01: "Det hГ¤r Г¤r INTE en dejtingsajt!",
  
 }
 ,
 ar: {
 text01: "Щ‡Ш°Ш§ Щ„ЩЉШі Щ…Щ€Щ‚Ш№ Щ…Щ€Ш§Ш№ШЇШ©!",
 
 }
 ,
 pt: {
 text01: "Este NГѓO Г© um site de namoro!",
  
 }
 ,
 it: {
 text01: "clicca qui.",
  
 }
 ,
 zh: {
 text01: "иї™дёЌжЇзє¦дјљзЅ‘з«™пјЃ",
  
 }
 ,
 es: {
 text01: "ВЎEste NO es un sitio de citas!",
 
 }
 ,
 fr: {
 text01: "Ce n'est PAS un site de rencontre!",
 
 }
 ,
 nl: {
 text01: "Dit is GEEN datingsite!",
  
 }
 ,
 ru: {
 text01: "Р­С‚Рѕ РќР• СЃР°Р№С‚ Р·РЅР°РєРѕРјСЃС‚РІ!",
  
 }
 ,
 uk: {
 text01: "Р¦Рµ РќР• СЃР°Р№С‚ Р·РЅР°Р№РѕРјСЃС‚РІ!",
  
 }
 ,
};
function detect_language() {
  var userLang =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
  if (userLang == "zh-CN" || userLang == "zh-SG" || userLang == "zh-MY" || userLang == "zh-CHS") {
    userLang = "zh";
  }
  else if (
    userLang == "zh-HK" ||
    userLang == "zh-MO" ||
    userLang == "zh-TW" ||
    userLang == "zh-CHT"
  ) {
    userLang = "zh";
  }
  else if (userLang.length > 2) {
    userLang = userLang[0] + userLang[1];
  }
  return userLang;
}
$(function () {
  let browserLang = detect_language();
  const langTranslation =
        translation[browserLang] && Object.keys(translation[browserLang]).length > 0
  ? translation[browserLang]
  : translation["source"];
  for (const textKey of Object.keys(langTranslation)) {
    const textString = langTranslation[textKey];
    if (textKey === "title") {
      $(textKey).text(textString);
    }
    else {
      $(`.${textKey}
         `).text(textString);
}
}
});