// function page$Redi$ectionUrl(){
//     var getPage$URl=location.href;
//     var getCountry=window.location.href.indexOf('/us/en');
//     if(((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('ur-lp') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('students-and-graduates') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('universityinternship') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('exploremicrosoftprogram') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('phdandresearch') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('machprogram') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('highschoolprogram') > -1)) || ((getPage$URl.indexOf('/i/') > -1) && (getPage$URl.indexOf('scholarshipprogram') > -1))){
//         var Redirect$mainUrl=phApp.baseUrl;
//         location.href=Redirect$mainUrl + "404";
//     }
//     if(getPage$URl.indexOf('/i/') > -1 && getCountry > -1){
//         // var createLi=document.createElement("LI");
//         // var craeteTextNode='<a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Labor Condition Application Postings" key-href="footer-careersLCANCLinkUrl" target="_blank" href="https://aka.ms/LCANotices" key-target="footer-careersLCANCTargetValue" aria-label="Labor Condition Application Postings opens in a new tab" key-aria-label="footer-careersLCANCLinkLabelText"><span><ppc-content key="footer-careersLCANCLinkText" >Labor Condition Application Postings</ppc-content> </span><i class="icon icon-arrow-right" aria-hidden="true"></i></a>';
//         // createLi.innerHTML=craeteTextNode;
//         // var getparentUl=document.querySelector('.footer-top ul');
//         // getparentUl.appendChild(createLi);
//         var getLi=document.getElementById('internalVisible');
//         if(getLi.classList.contains('hide') == true){
//             getLi.classList.remove('hide');
//         }
//     }
// }
// page$Redi$ectionUrl();
// down time banner

// down time banner
function page$Redi$ectionUrl(){
    var getPage$URl=location.href;
    var getCountry=window.location.href.indexOf('/us/en');
    if(getPage$URl.indexOf('/i/') > -1 && getCountry > -1){
        var getLi=document.getElementById('internalVisible');
        if(getLi.classList.contains('hide') == true){
            getLi.classList.remove('hide');
            getLi.children[0].children[0].setAttribute('aria-hidden','true');
        }
    }
}
page$Redi$ectionUrl();
var ph$Msft$Custom = ph$Msft$Custom || {};
(function(oGlobal){
    oGlobal.oMenuOptions = {};
    oGlobal.handleMultiLanguageCookieBanner = function(){
        var getUser="";
        var getCookies=document.cookie.split(';');
        for (i=0;i<getCookies.length;i++){
            if(getCookies[i].indexOf('phM$ftl$ngu$ge') != -1 ){
                getUser=getCookies[i].split('=')[1];
                break;
            }
        }
        if(getUser == ""){
            var data = {
                menu: [{
                    ref_no:1,
                    dis_name: "Austria",
                    language_name:"German",
                    local_code:"GER",
                    lang_attr:'de',
                    learn_more: "Erfahren Sie mehr",
                    close_text: "Schließen",
                    value_en: "I agree that this page uses cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ich stimme zu, dass diese Seite Cookies für Analysen, personalisierten Inhalt und Werbung verwendet. <a href='http://www.microsoft.com/privacystatement/de-at/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Erfahren Sie mehr' role='link'>Erfahren Sie mehr</a>."
                },{
                    ref_no:2,
                    dis_name: "Belgium",
                    language_name:"Dutch",
                    local_code:"DUT",
                    lang_attr:'nl',
                    learn_more: "Lees meer",
                    close_text: "Sluiten",
                    value_en: "By visiting and using this site, you consent to the placing of cookies by Microsoft and its partners. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Door het bezoek en gebruik van deze site geeft u toestemming voor het plaatsen van cookies door Microsoft en haar partners. <a href='http://www.microsoft.com/privacystatement/nl-be/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Lees meer' role='link'>Lees meer</a>."
                },{
                    ref_no:3,
                    dis_name: "Belgium",
                    language_name:"French",
                    lang_attr:'fr',
                    learn_more: "En savoir plus",
                    close_text: "Fermer",
                    local_code:"FRE",
                    value_en: "By using this site, you allow cookies for purposes of analysis, relevance and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"En utilisant ce site, vous autorisez les cookies à des fins d'analyse, de pertinence et de publicité. <a href='http://www.microsoft.com/privacystatement/fr-be/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='En savoir plus' role='link'>En savoir plus</a>."
                    },{
                    ref_no:4,
                    dis_name: "Bulgaria",
                    language_name:"Bulgarian",
                    learn_more: "Научете повече",
                    lang_attr:'bg',
                    close_text: "Изход",
                    local_code:"BUL",
                    value_en: "I agree this site uses cookies for the Analytics, customized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Съгласен съм този сайт да използва „бисквитките” за анализ, персонализирано съдържание и реклама. <a href='http://www.microsoft.com/privacystatement/bg-bg/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Научете повече' role='link'>Научете повече</a>."
                },{
                    ref_no:5,
                    dis_name: "Croatia",
                    language_name:"Croatian",
                    local_code:"CRO",
                    lang_attr:'hr',
                    learn_more: "Saznajte više",
                    close_text: "Zatvori",
                    value_en: "I agree this site uses cookies for the Analytics, customized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Slažem se da ovo web-mjesto upotrebljava kolačiće za analizu, personalizirane sadržaje i oglase. <a href='http://www.microsoft.com/privacystatement/hr-hr/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Saznajte više' role='link'>Saznajte više</a>."
                },{
                    ref_no:6,
                    dis_name: "Cyprus",
                    language_name:"English",
                    lang_attr:'en',
                    learn_more: "Learn more",
                    close_text: "close",
                    local_code:"ENG",
                    value_en: "This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>."
                },{
                    ref_no:7,
                    dis_name: "Cyprus",
                    language_name:"Greek",
                    learn_more: "Μάθετε περισσότερα",
                    close_text: "Κλείσιμο",
                    local_code:"GRE",
                    lang_attr:'el',
                    value_en: "With your visit to the site, you consent to the use of cookies for content, stats and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Με την πλoήγηση στο site, συναινείτε στη χρήση cookies για περιεχόμενο, στατιστικά και διαφημίσεις. <a href='http://www.microsoft.com/privacystatement/en-ie/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Μάθετε περισσότερα' role='link'>Μάθετε περισσότερα</a>."
                },{
                    ref_no:8,
                    dis_name: "Czech Republic",
                    language_name:"Czech",
                    learn_more: "Další informace",
                    close_text: "Zavřít",
                    local_code:"CZ",
                    lang_attr:'cs',
                    value_en: "By using this site you agree to the use of cookies for analytics, customized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Používáním tohoto webu souhlasíte s použitím cookies pro analýzy, přizpůsobený obsah a reklamy. <a href='http://www.microsoft.com/privacystatement/cs-cz/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Další informace' role='link'>Další informace</a>."
                },{
                    ref_no:9,
                    dis_name: "Denmark",
                    language_name:"Danish",
                    learn_more: "Lær mere",
                    close_text: "Luk",
                    lang_attr:'da',
                    local_code:"DAN",
                    value_en: "By use of this site you approve of using cookies for analysis, personalization of content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ved brug af dette site godkendes brug af cookies til analyse, personalisering af indhold og annoncer. <a href='http://www.microsoft.com/privacystatement/da-dk/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Lær mere' role='link'>Lær mere</a>."
                },{
                    ref_no:10,
                    lang_attr:'et',
                    dis_name: "Estonia",
                    language_name:"Estonian",
                    learn_more: "Loe lisaks",
                    close_text: "Sulge",
                    local_code:"EST",
                    value_en: "You agree to the pages using cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Lehekülge kasutades nõustute küpsistega analüüsi, isikustatud sisu ja reklaami näitamise tarveks. <a href='http://www.microsoft.com/privacystatement/et-ee/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Loe lisaks' role='link'>Loe lisaks</a>."
                },{
                    ref_no:11,
                    lang_attr:'fi',
                    dis_name: "Finland",
                    language_name:"Finnish",
                    learn_more: "Lisätietoja",
                    close_text: "Sulje",
                    local_code:"FIN",
                    value_en: "By using the site, you consent to our use of cookies for analytics, custom content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Käyttämällä sivustoa hyväksyt evästeiden käytön analytiikkaan, muokattuun sisältöön ja mainoksiin. <a href='http://www.microsoft.com/privacystatement/FI-FI/EUCookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Lisätietoja' role='link'>Lisätietoja</a>."
                },{
                    ref_no:12,
                    lang_attr:'fr',
                    dis_name: "France",
                    language_name:"French",
                    learn_more: "En savoir plus",
                    close_text: "Fermer",
                    local_code:"FRE",
                    value_en: "By using this site, you allow cookies for purposes of analysis, relevance and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"En utilisant ce site, vous autorisez les cookies à des fins d'analyse, de pertinence et de publicité. <a href='http://www.microsoft.com/privacystatement/fr-fr/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='En savoir plus' role='link'>En savoir plus</a>."
                },{
                    ref_no:13,
                    lang_attr:'de',
                    dis_name: "Germany",
                    language_name:"German",
                    learn_more: "Erfahren Sie mehr",
                    close_text: "Schließen",
                    local_code:"GER",
                    value_en: "This page uses cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Diese Seite verwendet Cookies für die Analyse, personenbezogene Inhalte und Werbung. <a href='http://www.microsoft.com/privacystatement/de-de/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Erfahren Sie mehr' role='link'>Erfahren Sie mehr</a>."
                },{
                    ref_no:14,
                    lang_attr:'el',
                    dis_name: "Greece",
                    language_name:"Greek",
                    learn_more: "Μάθετε περισσότερα",
                    close_text: "Κλείσιμο",
                    local_code:"GRE",
                    value_en: "With your visit to the site, you consent to the use of cookies for content, stats and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Με την πλoήγηση στο site, συναινείτε στη χρήση cookies για περιεχόμενο, στατιστικά και διαφημίσεις. <a href='http://www.microsoft.com/privacystatement/el-gr/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Μάθετε περισσότερα' role='link'>Μάθετε περισσότερα</a>."
                },{
                    ref_no:15,
                    lang_attr:'hu',
                    dis_name: "Hungary",
                    language_name:"Hungarian",
                    learn_more: "Tudjon meg többet",
                    close_text: "Bezár",
                    local_code:"HUN",
                    value_en: "You accept the use of cookies for analytics, personalized content and advertisements. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Elfogadja a sütik analízis, személyes tartalom és reklámok érdekében való használatát. <a href='http://www.microsoft.com/privacystatement/hu-hu/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Tudjon meg többet' role='link'>Tudjon meg többet</a>."
                },{
                    ref_no:16,
                    lang_attr:'is',
                    dis_name: "Iceland",
                    language_name:"Icelandic",
                    learn_more: "Frekari upplýsingar",
                    close_text: "Loka",
                    local_code:"ICE",
                    value_en: "By using the website you agree to the use of cookies for analytics and personalization and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Með því að nota vefsvæðið samþykkir þú notkun á kökum við greiningu og sérsnið og fyrir auglýsingar. <a href='http://www.microsoft.com/privacystatement/is-is/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Frekari upplýsingar' role='link'>Frekari upplýsingar</a>."
                },{
                    ref_no:17,
                    lang_attr:'en',
                    dis_name: "Ireland",
                    language_name:"English",
                    learn_more: "Learn More",
                    close_text: "close",
                    local_code:"ENG",
                    value_en: "This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>."
                },{
                    ref_no:18,
                    lang_attr:'ga',
                    dis_name: "Ireland",
                    language_name:"Gaelic",
                    learn_more: "Foghlaim Tuilleadh",
                    close_text: "Dún",
                    local_code:"GAE",
                    value_en: "By using this site, you agree to use cookies for analytics, relevance and advertisements. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Tríd an suíomh seo a úsáid, aontaíonn tú le húsáid chuach d’anailísíocht, ábharthacht agus fógraí. <a href='http://www.microsoft.com/privacystatement/ga-ie/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Foghlaim Tuilleadh' role='link'>Foghlaim Tuilleadh</a>."
                },{
                    ref_no:19,
                    lang_attr:'it',
                    dis_name: "Italy",
                    language_name:"Italian",
                    learn_more: "Ulteriori informazioni",
                    close_text: "Chiudi",
                    local_code:"IT",
                    value_en: "By using the site you accept the use of cookies for personalized results, analysis and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Utilizzando il sito si accetta l’uso di cookies per analisi, risultati personalizzati e pubblicità. <a href='http://www.microsoft.com/privacystatement/it-it/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Ulteriori informazioni' role='link'>Ulteriori informazioni</a>."
                },{
                    ref_no:20,
                    lang_attr:'lv',
                    dis_name: "Latvia",
                    language_name:"Latvian",
                    learn_more: "Uzzināt vairāk",
                    close_text: "Aizvērt",
                    local_code:"LV",
                    value_en: "By using this site, you agree to the use of cookies for analytics, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Izmantojot šo vietni, jūs piekrītat sīkfailu izmantošanai analītikai, pers. saturam un reklāmai. <a href='http://www.microsoft.com/privacystatement/lv-lv/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Uzzināt vairāk' role='link'>Uzzināt vairāk</a>."
                },{
                    ref_no:21,
                    lang_attr:'de',
                    dis_name: "Liechtenstein",
                    language_name:"German",
                    learn_more: "Erfahren Sie mehr",
                    close_text: "Schließen",
                    local_code:"GER",
                    value_en: "I agree that this page uses cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ich stimme zu, dass diese Seite Cookies für Analysen, personalisierten Inhalt und Werbung verwendet. <a href='http://www.microsoft.com/privacystatement/de-de/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Erfahren Sie mehr' role='link'>Erfahren Sie mehr</a>."
                },{
                    ref_no:22,
                    lang_attr:'lt',
                    dis_name: "Lithuania",
                    language_name:"Lithuanian",
                    learn_more: "Sužinokite daugiau",
                    close_text: "Uždaryti",
                    local_code:"LT",
                    value_en: "By opening up the site, you agree to accept cookies for analysis, customized content and advertising purposes. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Atverdami svetainę, sutinkate priimti slapukus analizės, pritaikyto turinio ir reklamos tikslais. <a href='http://www.microsoft.com/privacystatement/lt-lt/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Sužinokite daugiau' role='link'>Sužinokite daugiau</a>."
                },{
                    ref_no:23,
                    lang_attr:'fr',
                    dis_name: "Luxembourg",
                    language_name:"French",
                    learn_more: "En savoir plus",
                    close_text: "Fermer",
                    local_code:"FRE",
                    value_en: "By using this site, you allow cookies for purposes of analysis, relevance and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"En utilisant ce site, vous autorisez les cookies à des fins d'analyse, de pertinence et de publicité. <a href='http://www.microsoft.com/privacystatement/fr-lu/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='En savoir plus' role='link'>En savoir plus</a>."
                },{
                    ref_no:24,
                    lang_attr:'de',
                    dis_name: "Luxembourg",
                    language_name:"German",
                    learn_more: "Erfahren Sie mehr",
                    close_text: "Schließen",
                    local_code:"GER",
                    value_en: "I agree that this page uses cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ich stimme zu, dass diese Seite Cookies für Analysen, personalisierten Inhalt und Werbung verwendet. <a href='http://www.microsoft.com/privacystatement/de-de/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Erfahren Sie mehr' role='link'>Erfahren Sie mehr</a>."
                },{
                    ref_no:25,
                    lang_attr:'mt',
                    dis_name: "Malta",
                    language_name:"Maltese",
                    learn_more: "Tgħallem iżjed",
                    close_text: "Għalaq",
                    local_code:"MT",
                    value_en: "By using this site, you agree to the use of cookies for analytics, personal content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Bl-użu tas-sit, inti taqbel ma’ l-użu ta' cookies għall-analytics, kontenut personali u riklamar. <a href='http://www.microsoft.com/privacystatement/mt-mt/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Tgħallem iżjed' role='link'>Tgħallem iżjed</a>."
                },{
                    ref_no:26,
                    lang_attr:'nl',
                    dis_name: "Netherlands",
                    language_name:"Dutch",
                    learn_more: "Lees meer",
                    close_text: "Sluiten",
                    local_code:"NL",
                    value_en: "By visiting and using this site, you consent to the placing of cookies by Microsoft and its partners. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Door het bezoek en gebruik van deze site geeft u toestemming voor het plaatsen van cookies door Microsoft en haar partners. <a href='http://www.microsoft.com/privacystatement/nl-nl/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Lees meer' role='link'>Lees meer</a>."
                },{
                    ref_no:27,
                    lang_attr:'no',
                    dis_name: "Norway",
                    language_name:"Norwegian",
                    learn_more: "Lær mer",
                    close_text: "Lukk",
                    local_code:"NB",
                    value_en: "By using this site you agree to the use of cookies for analytics, custom content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ved å bruke dette nettstedet godtar du at cookies brukes til analyse, tilpasset innhold og annonser. <a href='http://www.microsoft.com/privacystatement/nb-no/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Lær mer' role='link'>Lær mer</a>."
                },{
                    ref_no:28,
                    lang_attr:'pl',
                    dis_name: "Poland",
                    language_name:"Polish",
                    learn_more: "Więcej tutaj",
                    close_text: "Zamknij",
                    local_code:"PL",
                    value_en: "This website uses cookies. It is possible to block them. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ta strona używa plików cookie. Istnieje możliwość zablokowania ich instalowania. <a href='http://www.microsoft.com/privacystatement/pl-pl/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Więcej tutaj' role='link'>Więcej tutaj</a>."
                },{
                    ref_no:29,
                    lang_attr:'pt',
                    dis_name: "Portugal",
                    language_name:"Portuguese",
                    learn_more: "Saber mais",
                    close_text: "Fechar",
                    local_code:"PT",
                    value_en: "By using this site you accept the use of cookies for analysis, custom content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ao usar este site aceita a utilização de cookies para análise, conteúdo personalizado e anúncios. <a href='http://www.microsoft.com/privacystatement/pt-pt/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Saber mais' role='link'>Saber mais</a>."
                },{
                    ref_no:30,
                    lang_attr:'ro',
                    dis_name: "Romania",
                    language_name:"Romanian",
                    learn_more: "Detalii",
                    close_text: "Închidere",
                    local_code:"RO",
                    value_en: "I accept the fact that this site uses cookies for statistics, content and personalized ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Accept faptul că acest site foloseşte cookies pentru statistici, conţinut şi reclame personalizate. <a href='http://www.microsoft.com/privacystatement/ro-ro/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Detalii' role='link'>Detalii</a>."
                },{
                    ref_no:31,
                    lang_attr:'sk',
                    dis_name: "Slovakia",
                    language_name:"Slovak",
                    learn_more: "Viac informácií",
                    close_text: "Zavrieť",
                    local_code:"SK",
                    value_en: "By using the site, you agree to the use of cookies, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Použitím stránky súhlasíte s využitím cookies na analýzu, prispôsobený obsah a reklamy. <a href='http://www.microsoft.com/privacystatement/sk-sk/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Viac informácií' role='link'>Viac informácií</a>."
                },{
                    ref_no:32,
                    lang_attr:'sl',
                    dis_name: "Slovenia",
                    language_name:"Slovenian",
                    learn_more: "Spoznaj več",
                    close_text: "Zapri",
                    local_code:"SL",
                    value_en: "If you are using this site, you agree to the use of cookies for analysis, personalized content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Če uporabljate to stran se strinjate z uporabo piškotkov za analize, prilagoditev vsebine in oglasov. <a href='http://www.microsoft.com/privacystatement/sl-si/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Spoznaj več' role='link'>Spoznaj več</a>."
                },{
                    ref_no:33,
                    lang_attr:'es',
                    dis_name: "Spain",
                    language_name:"Spanish",
                    learn_more: "Saber más",
                    close_text: "Cerrar",
                    local_code:"ES",
                    value_en: "By using this site you accept the use of cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Al usar este sitio acepta el uso de cookies para análisis, contenido personalizado y publicidad. <a href='http://www.microsoft.com/privacystatement/es-es/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Saber más' role='link'>Saber más</a>."
                },{
                    ref_no:34,
                    lang_attr:'sv',
                    dis_name: "Sweden",
                    language_name:"Swedish",
                    learn_more: "Läs mer",
                    close_text: "Stäng",
                    local_code:"SE",
                    value_en: "This site uses cookies for statistics, customized content and ads. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Denna webbplatsen använder cookies för statistik, anpassat innehåll och annonser. <a href='http://www.microsoft.com/privacystatement/sv-se/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Läs mer' role='link'>Läs mer</a>."
                },{
                    ref_no:35,
                    lang_attr:'fr',
                    dis_name: "Switzerland",
                    language_name:"French",
                    learn_more: "En savoir plus",
                    close_text: "Fermer",
                    local_code:"FRE",
                    value_en: "By using this site, you allow cookies for purposes of analysis, relevance and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"En utilisant ce site, vous autorisez les cookies à des fins d'analyse, de pertinence et de publicité. <a href='http://www.microsoft.com/privacystatement/fr-ch/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='En savoir plus' role='link'>En savoir plus</a>."
                },{
                    ref_no:36,
                    lang_attr:'de',
                    dis_name: "Switzerland",
                    language_name:"German",
                    learn_more: "Erfahren Sie mehr",
                    close_text: "Schließen",
                    local_code:"GER",
                    value_en: "I agree that this page uses cookies for analysis, personalized content and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Ich stimme zu, dass diese Seite Cookies für Analysen, personalisierten Inhalt und Werbung verwendet. <a href='http://www.microsoft.com/privacystatement/de-ch/EUCookiecompliance/Default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Erfahren Sie mehr' role='link'>Erfahren Sie mehr</a>."
                },{
                    ref_no:37,
                    lang_attr:'it',
                    dis_name: "Switzerland",
                    language_name:"Italian",
                    learn_more: "Ulteriori informazioni",
                    close_text: "Chiudi",
                    local_code:"IT",
                    value_en: "By using the site you accept the use of cookies for personalized results, analysis and advertising. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"Utilizzando il sito si accetta l’uso di cookies per analisi, risultati personalizzati e pubblicità. <a href='http://www.microsoft.com/privacystatement/it-it/eucookiecompliance/default.aspx' target='_blank' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Ulteriori informazioni' role='link'>Ulteriori informazioni</a>."
                },{
                    ref_no:38,
                    lang_attr:'en',
                    dis_name: "United Kingdom",
                    language_name:"English",
                    learn_more: "Learn More",
                    close_text: "Close",
                    local_code:"ENG",
                    value_en: "This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>.",
                    value_multy:"This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='javascript:void(0);' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='def-multy-lang-en' ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more.</a>"
                }]
            };
            var str="";
            for(var ik=0; ik<data.menu.length;ik++){
                var menuItem=data.menu[ik];
                // refObj[menuItem.ref_no]=menuItem;

                str += "<option value=" + menuItem.dis_name + '' + menuItem.local_code +">" + menuItem.dis_name + "-" +menuItem.local_code +"</option>";
                str1="<option value='' slected>Language</option>";
            }
            // oGlobal.oMenuOptions = data.menu;
            // refObj = 
            oGlobal.oMenuOptions = data.menu;
            document.getElementById("multy-lang-combo").innerHTML = str1.concat(str);
            var getParentNode=document.getElementById('multy-para-list');
            var getCountryList=document.getElementById('multy-para-list-country');
        }
    };
    oGlobal.student_location_dropdown = function(){
        var getUrl=location.href.indexOf('/students');
        if(getUrl != -1){
            var data = {
                menu: [{
                    ref_no:1,
                    location_name:"Australia & New Zealand",
                    location_url:"ur-lp-australia"
                },{
                    ref_no:2,
                    location_name:"Brazil",
                    location_url:"ur-lp-brazil"
                },{
                    ref_no:3,
                    location_name:"Canada",
                    location_url:"ur-lp-canada"
                },{
                    ref_no:4,
                    location_name:"Central & Eastern Europe",
                    location_url:"ur-lp-central"
                },{
                    ref_no:5,
                    location_name:"Great China Region (Mainland China, Hong Kong SAR, Taiwan)",
                    location_url:"ur-lp-china"
                },{
                    ref_no:6,
                    location_name:"France",
                    location_url:"ur-lp-france"
                },{
                    ref_no:7,
                    location_name:"Germany",
                    location_url:"ur-lp-germany"
                },{
                    ref_no:8,
                    location_name:"India",
                    location_url:"ur-lp-india"
                },{
                    ref_no:9,
                    location_name:"Israel",
                    location_url:"ur-lp-israel"
                },
                {
                    ref_no:10,
                    location_name:"Japan",
                    location_url:"ur-lp-japan"
                },{
                    ref_no:11,
                    location_name:"Korea",
                    location_url:"ur-lp-korea"
                },{
                    ref_no:12,
                    location_name:"Latin America",
                    location_url:"ur-lp-latin-america"
                },{
                    ref_no:13,
                    location_name:"Mexico",
                    location_url:"ur-lp-mexico"
                },{
                    ref_no:14,
                    location_name:"Middle East & Africa",
                    location_url:"ur-lp-middle-east"
                },{
                    ref_no:15,
                    location_name:"Southeast Asia",
                    location_url:"ur-lp-southeast-asia"
                },{
                    ref_no:16,
                    location_name:"United Kingdom",
                    location_url:"ur-lp-united-kingdom"
                },{
                    ref_no:17,
                    location_name:"United States",
                    location_url:"ur-lp-united-states"
                },{
                    ref_no:18,
                    location_name:"Western Europe",
                    location_url:"ur-lp-western-europe"
                }]
            };
            var location_str="";
            var localeList=["us/en","ca/fr"]
            for(i=0;i<localeList.length;i++){
                if(window.location.pathname.indexOf(localeList[i] != -1)){
                    var getLocale=localeList[i];
                    break;
                }
            }
            for(var ik=0; ik<data.menu.length;ik++){
               var menuItem=data.menu[ik];
                // refObj[menuItem.ref_no]=menuItem;
                // location_str += '<option value='+'"' + menuItem.location_url +'"'+' ph-tevent="location_selector" data-ph-tevent-attr-trait144='+'"' + menuItem.location_name +'"'+'>' + menuItem.location_name +'</option>';
                location_str +="<li><a href='/students/"+getLocale+"/"+ menuItem.location_url +"' aria-label='"+menuItem.location_name+"' class='list-item-link' onkeydown='custom$Comboboxclose(this,event)'>"+ menuItem.location_name +"</a></li>"
            }
            // oGlobal.oMenuOptions = data.menu;
            // refObj = 
            oGlobal.oLocations = data.menu;
            var getGetdropdown=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .dropdown-list');
            if(getGetdropdown){
                var getcustomDropdown=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .custom-selectbox');
                getcustomDropdown.setAttribute('onclick','custom$Combobox(this)');
                getcustomDropdown.setAttribute('onkeydown','custom$Comboboxclose(this,event)');
                getcustomDropdown.setAttribute('aria-expanded','false');
                getGetdropdown.innerHTML = location_str;
            }
            
        }
    };
    oGlobal.comboBoxMultyLocal = function(){
        document.getElementById('multy-lang-combo').addEventListener('change',function(e){
            var ptagsContainer=document.getElementById('multy-para-list'); 
            ptagsContainer.innerHTML="";
            var seletedValue = e.target.selectedIndex -1;
            var getCountryList=document.getElementById('multy-para-list-country');
            getCountryList.innerHTML="";
            var getBetabannerEng=document.querySelector('.ref-class');
            var getSelectEng=document.querySelector('.new-p-group');
            if(phApp){
                var geturl=phApp.baseDomain;
            }
            // var geturl=location.href;
            // var getSplitArray=geturl.split('/us/en');
            // var getArrayUrl=getSplitArray[0];
            // var setVal="/us/en/privacyandcookies";
            var concatinatedUrl="http://go.microsoft.com/fwlink/?LinkId=518021";
            if(oGlobal.oMenuOptions && seletedValue>=0){
                var selectedItem = oGlobal.oMenuOptions[seletedValue];
                if(selectedItem.local_code == "ENG"){
                    var creat_para_en=document.createElement("p");
                    creat_para_en.setAttribute('lang',selectedItem.lang_attr);
                    creat_para_en.setAttribute('id','multy-lang-en');
                    ptagsContainer.appendChild(creat_para_en);
                    var multyLangPara=document.getElementById("multy-lang-en")
                    document.getElementById("multy-lang-en").innerHTML = selectedItem.value_en;
                    var getAnchorTagMultyLangdefault=document.getElementById('def-multy-lang-en');
                    getAnchorTagMultyLangdefault.setAttribute('href',concatinatedUrl);
                    getAnchorTagMultyLangdefault.setAttribute('target','_blank');
                    if(getSelectEng.classList.contains('adding-bottom') == false){
                        getSelectEng.classList.add('adding-bottom');
                    } 
                    
                }else{
                    var creat_para_en=document.createElement("p");
                    creat_para_en.setAttribute('lang','en');
                    creat_para_en.setAttribute('id','multy-lang-en');
                    var creat_para_multy=document.createElement("p");
                    creat_para_multy.setAttribute('lang',selectedItem.lang_attr);
                    creat_para_multy.setAttribute('id','multy-lang-Other');
                    ptagsContainer.appendChild(creat_para_en);
                    getCountryList.appendChild(creat_para_multy);                   
                    document.getElementById("multy-lang-en").innerHTML = selectedItem.value_en;
                    var getAnchorTagMultyLangdefault=document.getElementById('def-multy-lang-en');
                    getAnchorTagMultyLangdefault.setAttribute('href',concatinatedUrl);
                    getAnchorTagMultyLangdefault.setAttribute('target','_blank');
                    document.getElementById("multy-lang-Other").classList.add('gap-top');
                    document.getElementById("multy-lang-Other").innerHTML = selectedItem.value_multy;
                    if(getSelectEng.classList.contains('adding-bottom') == true){
                        getSelectEng.classList.remove('adding-bottom');
                    }
                }        
            }else if(seletedValue == -1){
                var creat_para_def=document.createElement("p");
                creat_para_def.innerHTML="This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href='http://go.microsoft.com/fwlink/?LinkId=518021' target='_blank' aria-label='Learn more about cookies and Microsoft Privacy policy opens in a new tab' id='default-link'  ph-tevent='goto_click' data-ph-tevent-attr-trait256='Learn more' role='link'>Learn more</a>."
                creat_para_def.setAttribute('id','multy-lang-def');
                creat_para_def.setAttribute('lang','en');
                ptagsContainer.appendChild(creat_para_def);
                var getAnchorTagdefault=document.getElementById('default-link');                     
                getAnchorTagdefault.setAttribute('href',concatinatedUrl);
                if(getSelectEng.classList.contains('adding-bottom') == true){
                    getSelectEng.classList.remove('adding-bottom');
                }
            }
        });
    };
    oGlobal.redirect_Fun_travelpolacy_page = function(){
        if(document.getElementById('travelPolicy')){
            document.getElementById('travelPolicy').addEventListener('click',function(){
                if(document.referrer.endsWith('actravelrequest')==true){
                    var getPath=location.href;
                    var setPath=getPath.replace('actravelpolicy','actravelrequest');
                    this.setAttribute('href',setPath);
                }else{
                    var getPath=location.href;
                    var setPath=getPath.replace('actravelpolicy','acexpensereimbursement');
                    this.setAttribute('href',setPath);
                }
            });
        }
    };
    oGlobal.setHIdeClass=function(setTimer){
        setTimeout(function(){
            var getArrow=document.querySelector('header .nav-arrow-right');
            if(getArrow){
                if(window.innerWidth > 1550){
                    getArrow.classList.add('hide');
                }else{
                   if(getArrow.classList.contains('hide') == true){
                        getArrow.classList.remove('hide');
                   }
                }
            }else{
                oGlobal.setHIdeClass(100);
            }
        },setTimer);
    }
    // code for search result page facets check box
    // oGlobal.checkBox_Onchange_Announce = function(){
        //     if (window.navigator.userAgent < -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./) == false){
        //         var getAnnounceEle=document.getElementById('jobsview');      
        //         var setValue;
        //         if (navigator.userAgent.search("Chrome") != -1) {
        //             var setValue=3000;
        //         }else if (navigator.userAgent.search("Firefox") != -1) {
        //             var setValue=3000;
        //         }else if (navigator.userAgent.search("Safari") != -1) {
        //             var setValue=3000;
        //         }else{
        //             var setValue=3000;
        //         }
        //         setTimeout(function(){          
        //             var getElementList=document.getElementById('announce-text');
        //             var getInnerHtml=getElementList.innerHTML;              
        //             getAnnounceEle.innerHTML=getInnerHtml;   
        //         },setValue);
        //         getAnnounceEle.innerHTML="";
        //     }        
    // };
    // code for header navbar top
    oGlobal.top_Header_Mainnav = function(getCurrentval){
        var getCount=document.getElementById('top-navbar').childElementCount;
        var gettonavUl=getCurrentval.nextElementSibling;
            for (var i = 0; i < getCount; i++) {
                var topmenuLi=getCurrentval.parentElement.parentElement.children[i];
        
                if(topmenuLi.children[0].nodeName=="BUTTON"){
                    var subchild=topmenuLi.children[1].childElementCount;
                    for (var j = 0; j < subchild; j++) {
                    if(topmenuLi.children[1].children[j].children[0].nodeName=="BUTTON"){
                                topmenuLi.children[1].children[j].children[1].classList.remove('show');
                                topmenuLi.children[1].style.height="auto";
                                topmenuLi.children[1].children[j].children[0].classList.remove('active');
                    }
                    }
                    if(topmenuLi.children[1].nodeName=="UL"){
                        if(gettonavUl.classList.contains('show')==false){                        
                            if(topmenuLi.children[1].classList.contains('show')==true){
                                topmenuLi.children[0].setAttribute("aria-expanded", "false");
                                topmenuLi.children[1].setAttribute("aria-hidden", "true");
                                topmenuLi.children[1].classList.remove('show');                            
                                topmenuLi.children[0].classList.remove('active');                            
                            }
                        }
                    }
                }
            }
            var topNavulclass=gettonavUl.classList;
            if(topNavulclass.contains('show')==false){
                getCurrentval.setAttribute("aria-expanded","true");
                gettonavUl.setAttribute("aria-hidden", "false");
                topNavulclass.add('show');
                getCurrentval.classList.add("active");
            }else{
                getCurrentval.setAttribute("aria-expanded", "false");
                gettonavUl.setAttribute("aria-hidden", "true");
                topNavulclass.remove('show');
                getCurrentval.classList.remove("active");
            }
    };
    // code for main header sub nav
    oGlobal.top_Header_Subnav = function(getBtn){
        var parentUl= getBtn.parentElement.parentElement;
        var liCount = parentUl.childElementCount;
        if(getBtn.parentElement.children[1].classList.contains('show')==false){
            for (i = 0; i < liCount; i++) {
                var toSubnavLi=parentUl.children[i];
                if(toSubnavLi.children[1]==undefined){
                }else{
                    toSubnavLi.children[1].classList.remove('show');
                    toSubnavLi.children[0].classList.remove('active');
                    toSubnavLi.children[0].setAttribute('aria-expanded','false');
                    toSubnavLi.children[1].setAttribute('aria-hidden','true');
                    toSubnavLi.children[1].style.height="auto";                       
                }
            }
        }
        var getsubUl=getBtn.parentElement.children[1];
        if(getsubUl.classList.contains('show')==true){
            getsubUl.classList.remove('show');
            getsubUl.setAttribute('aria-hidden','true');
            getBtn.classList.remove('active');
            // getBtn.parentElement.parentElement.style.height="auto"
            getBtn.parentElement.children[0].setAttribute('aria-expanded','false');
        }else{            
            getBtn.parentElement.children[0].setAttribute('aria-expanded','true');
            getBtn.classList.add('active');
            getsubUl.classList.add('show');
            getsubUl.setAttribute('aria-hidden','false');
        }
        if(innerWidth>=899){
            var getSubbtn=getsubUl.offsetHeight;
            var getMainBtn=parentUl.offsetHeight;
            if(getsubUl.classList.contains('show')==true){
                if(getMainBtn>=getSubbtn){
                    getsubUl.style.height=getMainBtn+"px";
                }
                if(getMainBtn<=getSubbtn){
                    parentUl.style.height=getSubbtn+"px";
                }
            }else{
                getBtn.parentElement.parentElement.style.height="auto";
            }
        }
    };
    // code for header navbar second
    oGlobal.second_Header_Mainnav = function(getCurrentval){
        var getCount=document.getElementById('mobiletab').childElementCount;
        var getUls=getCurrentval.nextElementSibling;
        for (var i = 0; i < getCount; i++) {
            var secondNavLi=getCurrentval.parentElement.parentElement.children[i];
            if(secondNavLi.children[0].nodeName=="BUTTON"){
                if(secondNavLi.children[1].nodeName=="UL"){
                    if(getUls.classList.contains('show')==false){
                        if(secondNavLi.children[1].classList.contains('show')==true){
                            secondNavLi.children[0].setAttribute("aria-expanded", false);
                            secondNavLi.children[1].setAttribute("aria-hidden", true);
                            secondNavLi.children[1].classList.remove('show');
                            secondNavLi.children[0].classList.remove('active');
                        }
                    }
                }
            }
        }
        if(getUls.classList.contains('show')==false){
            getCurrentval.setAttribute("aria-expanded","true");
            getUls.setAttribute("aria-hidden", false);
            getUls.classList.add('show');
            getCurrentval.classList.add("active");
        }else{
            getCurrentval.setAttribute("aria-expanded", false);
            getUls.setAttribute("aria-hidden", true);
            getUls.classList.remove('show');
            getCurrentval.classList.remove("active");
        }
    };
    // top header mobile nav code goes here
    oGlobal.top_Header_Mobile_Nav = function(getBtnval){
        var navClslist=document.querySelector('.main-header-nav').classList;
        if (navClslist.contains('hidden-tab') == true) {
            navClslist.add('show-tab');
            getBtnval.setAttribute('aria-expanded',"true");
            navClslist.remove('hidden-tab');
        } else {
            navClslist.add('hidden-tab');
            getBtnval.setAttribute('aria-expanded',"false");
            navClslist.remove('show-tab');

        }
    };
    // second header mobile nav code goes here
    oGlobal.second_Header_Mobile_Nav = function(getVal){
        var getMenu=document.getElementById("mobiletab");
        if(getMenu.classList.contains('click-show')==false){
                getMenu.classList.add('click-show');
                getVal.setAttribute('aria-expanded',"true");
        
        }else{
                getMenu.classList.remove('click-show');
                getVal.setAttribute('aria-expanded',"false");
        }
    };
    // after login user details button code goes here
    oGlobal.login_User_Details_Menu = function(getDetails){
        if(getDetails.nextElementSibling.classList.contains('show')){
            getDetails.nextElementSibling.classList.remove('show');
            getDetails.setAttribute('aria-expanded','false');         
            
        }else{
            getDetails.nextElementSibling.classList.add('show');
            getDetails.setAttribute('aria-expanded','true'); 
        }
    };
    //on focus function for top header sub nav goes here 
    oGlobal.top_Header_Subnav_onfocus = function(getCloseval){
        var element=getCloseval.parentElement.parentElement;
        var liCount=element.childElementCount;
        for (var i = 0; i < liCount; i++) {
            if(getCloseval.nextElementSibling.classList.contains('show')){
                getCloseval.nextElementSibling.classList.add('show');
            }else{
                if(element.children[i].children[0].nodeName=="BUTTON"){
                    if(element.children[i].children[1].classList.contains('show')){
                        element.children[i].children[1].classList.remove('show');
                        element.children[i].children[0].setAttribute('aria-expanded','false');
                        element.children[i].children[0].classList.remove('active');
                        element.style.height="auto";
                    }
                }
            }
        }
    };
    // header menu buttons focus code goes here
    oGlobal.header_mainButtons_onFocus = function(getCloseTopheaderval){
        var getTopnav=document.getElementById('top-navbar');
        var getSecnav=document.getElementById('mobiletab');
        if(getCloseTopheaderval.nextElementSibling.classList.contains('show')){
            getCloseTopheaderval.nextElementSibling.classList.add('show');
        }else{
            if(getTopnav){
                for (var i = 0; i < getTopnav.childElementCount; i++) {
                    var getBtnval=getTopnav.children[i].children[0];
                    var getUlval=getTopnav.children[i].children[1];    
                    if(getBtnval.nodeName=="BUTTON"){
                        if(getUlval.classList.contains('show')==true){
                            getUlval.classList.remove('show');
                            getBtnval.classList.remove('active');
                            getUlval.setAttribute('aria-hidden','true');
                            getBtnval.setAttribute('aria-expanded','false');               
                        }
                    }
                }
            }
            if(getSecnav){
                for (var i = 0; i < getSecnav.childElementCount; i++) {
                    if(getSecnav.children[i].children[0].nodeName=="BUTTON"){
                        if(getSecnav.children[i].children[1].classList.contains('show')==true){
                            getSecnav.children[i].children[1].classList.remove('show');
                            getSecnav.children[i].children[0].classList.remove('active');
                            getSecnav.children[i].children[1].setAttribute('aria-hidden','true');
                            getSecnav.children[i].children[0].setAttribute('aria-expanded','false');              
                        }
                    }
                }
            }
        } 
    };
    // mobile header menu buttons focus code goes here
    oGlobal.header_mobileButtons_onFocus = function(currentbtnValue){
        var getmobileTopnav=document.getElementById('top-navbar');
        var getmobileSecnav=document.getElementById('mobiletab');
        if(getmobileTopnav){
                if(getmobileTopnav.classList.contains('show-tab')==true){

                }else{
                    var getTopmobileNav=document.getElementById('mobiletab').classList;
                    if(getTopmobileNav.contains('click-show')==true && currentbtnValue.classList.contains('icon-menu') == true){
                        getTopmobileNav.remove('click-show');
                        var getBtn=document.querySelector('.mobile-btn');
                            getBtn.setAttribute('aria-expanded','false');
                    }
                }
        }
        if(getmobileSecnav){
            if(getmobileSecnav.classList.contains('click-show')==true){

                }else{
                    var getSecmobileNav=document.getElementById('top-navbar').classList;
                    if(getSecmobileNav.contains('show-tab')==true && currentbtnValue.classList.contains('mobile-btn') == true){
                        getSecmobileNav.remove('show-tab');
                        getSecmobileNav.add('hidden-tab');
                        var getBtn=document.querySelector('.icon-menu');
                            getBtn.setAttribute('aria-expanded','false');
                    }
                }
        }
    };
    // header menu anchor focus code goes here
    oGlobal.header_mainAnchors_onFocus = function(){
        var getTopnav=document.getElementById('top-navbar');
        var getSecnav=document.getElementById('mobiletab');
        var getCandidate=document.getElementById('candidate-details');
        if(getTopnav){
            for (var i = 0; i < getTopnav.childElementCount; i++) {
                var getBtnval=getTopnav.children[i].children[0];
                var getUlval=getTopnav.children[i].children[1];    
                if(getBtnval.nodeName=="BUTTON"){
                    if(getUlval.classList.contains('show')==true){
                        getUlval.classList.remove('show');
                        getBtnval.classList.remove('active');
                        getUlval.setAttribute('aria-hidden','true');
                        getBtnval.setAttribute('aria-expanded','false');               
                    }
                }
            }
        }
        if(getSecnav){
            for (var i = 0; i < getSecnav.childElementCount; i++) {
                if(getSecnav.children[i].children[0].nodeName=="BUTTON"){
                    if(getSecnav.children[i].children[1].classList.contains('show')==true){
                        getSecnav.children[i].children[1].classList.remove('show');
                        getSecnav.children[i].children[0].classList.remove('active');
                        getSecnav.children[i].children[1].setAttribute('aria-hidden','true');
                        getSecnav.children[i].children[0].setAttribute('aria-expanded','false');              
                    }
                }
            }
        }
        if(getCandidate){
            if(getCandidate.classList.contains('show')==true){
                getCandidate.classList.remove('show');
                getCandidate.previousElementSibling.setAttribute('aria-expanded','false');
            }
        }
    };
    // on focus function for sign in anchor code goes here
    oGlobal.header_signinAnchor_onFocus = function(){
        if(innerWidth <= 899){
            if(document.getElementById("mobiletab").classList.contains('click-show')==true){
                document.getElementById("mobiletab").classList.remove('click-show');
                document.getElementById("main-navigation").setAttribute('aria-expanded','false');
            }
        }
    };
    // user details on focus fun for mobile code goes here
    oGlobal.header_userDetails_Menu_onFocus = function(){
        if(innerWidth >= 900){
            var getLisList=document.getElementById('mobiletab');
            var lisCount=getLisList.childElementCount;
            for (var i = 0; i < lisCount; i++) {
                var element=getLisList.children[i];
                if(element.children[0].nodeName == "BUTTON"){
                    if(element.children[1].classList.contains('show') == true){
                        element.children[1].classList.remove('show');
                        element.children[0].setAttribute('aria-expanded','false');
                        element.children[0].classList.remove('active');
                        element.children[1].setAttribute('aria-hidden','true');
                    }
                }
            }
        }else if(innerWidth <= 899){
            if(document.getElementById("mobiletab").classList.contains('click-show')==true){
                document.getElementById("mobiletab").classList.remove('click-show');
                document.getElementById("main-navigation").setAttribute('aria-expanded','false');
            }
        } 
    };
    // footer menu button function code goe here
    oGlobal.footer_Menu_open = function(getFooterval){
        var getCount=document.getElementById('footer-nav');
        for (var i = 0; i < getCount.childElementCount; i++) {
            if(getFooterval.nextElementSibling.classList.contains('show')==false){
                getCount.children[i].children[2].setAttribute('aria-hidden',true);
                getCount.children[i].children[1].setAttribute('aria-expanded',false);
                if(getCount.children[i].children[2].classList.contains('show')==true){
                    getCount.children[i].children[2].classList.remove('show');            
                }
            }
        }
        if(getFooterval.nextElementSibling.classList.contains('show')==false){
                getFooterval.setAttribute('aria-expanded',true);
                getFooterval.nextElementSibling.classList.add("show");
                getFooterval.nextElementSibling.setAttribute('aria-hidden',false);
        }else{
                getFooterval.setAttribute('aria-expanded',false);
                getFooterval.nextElementSibling.classList.remove("show");
                getFooterval.nextElementSibling.setAttribute('aria-hidden',true);
        }
    };
    // on focus code for footer menu goes here
    oGlobal.footer_Menu_onFocus = function(getHoverval){
        var getCount=document.getElementById('footer-nav');
        if(getHoverval.nextElementSibling.classList.contains('show')==false){
            for (var i = 0; i < getCount.childElementCount; i++) {        
                    getCount.children[i].children[2].setAttribute('aria-hidden',true);
                    getCount.children[i].children[1].setAttribute('aria-expanded',false);            
                        if(getCount.children[i].children[2].classList.contains('show')==true){
                            getCount.children[i].children[2].classList.remove('show');            
                        }
            }
        }
    };
    // menu overflow right code goes here
    oGlobal.header_overFlow_menu_right = function(){
        var leftArrow = document.getElementsByClassName('nav-arrow-left');
        var rightArrow = document.getElementsByClassName('nav-arrow-right');
        // var middleContent = document.getElementById("mobiletab");
        if(leftArrow[0].classList.contains('hide')==true){
            if(window.innerWidth <= 1550){
                leftArrow[0].classList.remove('hide')
                leftArrow[0].classList.add('show-arrow');
            }
            var getScrollPLI=document.querySelector('#right-scroll');
            if(getScrollPLI){
                getScrollPLI.parentElement.classList.remove('hide');
            }
        }
        if(rightArrow[0].classList.contains('show-arrow')==true){
            rightArrow[0].classList.remove('show-arrow');
            rightArrow[0].classList.add('hide');
        }
        if(window.innerWidth <= 1550){
            rightArrow[0].classList.add('hide');
            var a = document.getElementsByClassName("main-nav-links-block")[0].offsetWidth;
            var b = document.getElementsByClassName("nav-container")[0].offsetWidth;
            var c = 240;
            if(window.innerWidth < 1100){
                c=400
            }
            var e = document.getElementsByClassName("main-nav-links-block")[0];
            e.style.marginLeft = -c + 'px';
            var getFirstelement=document.getElementById('linkedin-link-id');
            if(e.children.length){
                // var spanele=document.createElement('SPAN');
                // spanele.setAttribute('aria-live','polite');
                // spanele.setAttribute('aria-atomic','true');
                // spanele.setAttribute('id','alertNavitem');
                // document.getElementById('prof-navigation').appendChild(spanele);
                // document.getElementById('alertNavitem').innerHTML="<span>professionals button collapsed</span>"
                e.children[e.childElementCount-1].children[0].focus();
            }
        }
    };
    // menu overflow left code goes here
    oGlobal.header_overFlow_menu_left = function(){
        var leftArrow = document.getElementsByClassName('nav-arrow-left');
        var rightArrow = document.getElementsByClassName('nav-arrow-right');
        // var middleContent = document.getElementById("mobiletab");
        if(leftArrow[0].classList.contains('show-arrow')==true){
            leftArrow[0].classList.remove('show-arrow');
            leftArrow[0].classList.add('hide');
        }
        if(rightArrow[0].classList.contains('hide')==true){
            if(window.innerWidth <= 1550){
                rightArrow[0].classList.remove('hide');
                rightArrow[0].classList.add('show-arrow');
            }
            var getScrollPLI=document.querySelector('#right-scroll');
            if(getScrollPLI){
                getScrollPLI.parentElement.classList.add('hide');
            }
        }
        if(window.innerWidth <= 1550){
            var e = document.getElementsByClassName("main-nav-links-block")[0];
            if(window.innerWidth < 1100){
                e.style.marginLeft="-400px";
            }
            e.style.marginLeft = '0px';
            if(document.querySelector('.desktop-btn')){
                document.querySelector('.desktop-btn').focus();
            }
        }
    };
    // verifying cookie  code goes here
    // oGlobal.check_Multy_Lang_Cookie = function(){
    //     var getUser="";
    //     var getCookies=document.cookie.split(';');
    //     for (i=0;i<getCookies.length;i++){
    //         if(getCookies[i].indexOf('phM$ftl$ngu$ge') != -1 ){
    //             getUser=getCookies[i].split('=')[1];
    //             break;
    //         }
    //     }
    //     var betanotifier = document.getElementById("multy-lang-betanotifier");
    //     if(betanotifier){
    //         if (getUser == "msftjobs") { 
    //             if(betanotifier.classList.contains('hide') == false){
    //                 betanotifier.classList.add('hide');
    //             }  
    //         } else {
    //             betanotifier.classList.remove('hide');
    //             betanotifier.classList.add('show');
    //         }
    //     }
    // };
    // set muty language cookie code goes here
    oGlobal.set_Multy_Lang_Cookie = function(){
        var date = new Date();
        var days = 183;
        var oneDay = 1000 * 3600 * 24;
        date.setTime(date.getTime() + (days * oneDay)); //24 * 60 * 60 * 1000 
        document.cookie = "phM$ftl$ngu$ge=msftjobs;expires="+date.toUTCString()+";path=/";
        var getBetaCookie=document.getElementById("multy-lang-betanotifier");
        getBetaCookie.classList.add('hide');
        getBetaCookie.classList.remove('show');
        var skipContent=document.querySelector('.skip-content');
        skipContent.focus();
    };
    //check cookie for feedback
    // oGlobal.check_Cookie_For_FeedBack = function(){
        //     var getUser="";
        //     var getCookies=document.cookie.split(';');
        //     for (i=0;i<getCookies.length;i++){
        //         if(getCookies[i].indexOf('headercookie') != -1 ){
        //             getUser=getCookies[i].split('=')[1];
        //             break;
        //         }
        //     }
        //     var betanotifier = document.getElementById("betaNotifier");
        //     if(betanotifier){
        //         if (getUser == "notifier") {
        //             if(betanotifier.classList.contains('hide') == false){
        //                 betanotifier.classList.add('hide');
        //             }  
        //         } else {
        //             betanotifier.classList.remove('hide');
        //             betanotifier.classList.add('show');
        //         }
        //     }
    // };
    // set cookie for feedback
    // oGlobal.set_Cookie_For_FeedBack = function(){
        //     document.cookie = "headercookie" + "=" + "notifier";
        //     var getBetabanner=document.getElementById("betaNotifier");
        //     getBetabanner.classList.add('hide');
        //     getBetabanner.classList.remove('show');
        //     var skipContent=document.querySelector('.skip-content');
        //     var getUser="";
        //     var getCookies=document.cookie.split(';');
        //     for (i=0;i<getCookies.length;i++){
        //         if(getCookies[i].indexOf('phM$ftl$ngu$ge') != -1 ){
        //             getUser=getCookies[i].split('=')[1];
        //             break;
        //         }
        //     }
        //     if(getUser == "msftjobs"){
        //         skipContent.focus();
        //     }else{
        //         var langDeafault = document.getElementById('multy-lang-def');
        //         var langMulty = document.getElementById('multy-lang-Other');
        //         var langMultyEng = document.getElementById('multy-lang-en');
        //         if(langDeafault && langMulty){  
        //             if(langDeafault.children[0].nodeName == "A" && langMulty.children[0].nodeName == "A"){
        //                 var getAnchor = langDeafault.children[0];
        //                 getAnchor.focus();
        //             }
        //         }else if(langMultyEng && langMulty){
        //             if(langMultyEng.children[0].nodeName == "A" && langMulty.children[0].nodeName == "A"){
        //                 var getAnchorEng = langMultyEng.children[0];
        //                 getAnchorEng.focus();
        //             }
        //         }else if(langDeafault || langMultyEng){
        //             if(langDeafault){
        //                 var getAnchor1=langDeafault.children[0];
        //                 getAnchor1.focus();
        //             }else{
        //                 var getMultyAnchor = langMultyEng.children[0]
        //                 getMultyAnchor.focus();
        //             }
        //         }
        //     }
    // };
    // smooth scroll
    oGlobal.smooth_Scrool_Ur_Page= function(currentEleBtn){
        var getPage=document.body.classList.contains('university-lp');
        for(j=0;j<currentEleBtn.parentElement.childElementCount;j++){
            currentEleBtn.parentElement.children[j].setAttribute('aria-selected',false);
            currentEleBtn.parentElement.children[j].classList.remove('active');
        }
        currentEleBtn.setAttribute('aria-selected','true');
        currentEleBtn.classList.add('active');
        if(getPage){
            var removeHeight=0;
            var getSections=document.querySelectorAll('section');
            for(j=0;j<getSections.length;j++){
                if(getSections[j].classList.contains('fixed-text') == true){
                    getSections[j].classList.remove('fixed-text');
                }
            }
            var getText=currentEleBtn.innerText.trim();
            if( getText == "Internships"){
                var getSection=document.querySelector('[original-view="media-card"]').parentElement;
                getSection.classList.add('fixed-text');                
                if(window.innerWidth < 580){
                    removeHeight = 950;
                }else{
                    removeHeight = 650;
                }
            }else if(getText == "Programs"){
                var getSection=document.querySelector('[original-view="media-large-img-right"]').parentElement;
                var getChildCount=document.querySelector('.ph-html-v1-media-large-img-right-default .ph-card-container').childElementCount
                getSection.classList.add('fixed-text');
                if(getChildCount > 1){                    
                    if(window.innerWidth > 1600){
                        removeHeight = 1530;
                    }else{
                        removeHeight = 1330;
                    }
                }else{
                    removeHeight = 880;
                }
                if(window.innerWidth < 580){
                    removeHeight = 1000;
                }
                
            }else if(getText == "Full-time"){
                var getSection=document.querySelector('.ph-html-v1-nav-scroll-tab-default').parentElement;
                getSection.classList.add('fixed-text');
                removeHeight = 650;                
            }
            
            var getHeight=0;
            for(i=0;i<getSections.length;i++){
                getHeight +=getSections[i].offsetHeight;
                if(getSections[i].classList.contains('fixed-text') == true){
                    window.scrollTo('0', getHeight - 150 - removeHeight);
                    break;

                }
            }
            
        }
    };

    oGlobal.students_Onchange_Local= function(){
        var page_check=document.body.className.indexOf('static-templ-page');
        
        if(page_check != -1){
            var getEle = document.getElementById('list-dropdown-pages');
            if(getEle){
                getEle.addEventListener('change',function(e){
                    var seletedValue = e.target.selectedIndex -1;
                    if(seletedValue == -1){

                    }else if(seletedValue>=0){
                        var getSiteUrl=phApp.baseUrl;
                        var getPageUrl=oGlobal.oLocations[seletedValue].location_url;
                        var pageUrl=getSiteUrl.concat(getPageUrl);
                        window.location.href=pageUrl;
                    }
                });        
            } 
        }
    };
    // oGlobal.redirectPage$students=function(current,e){
    //     var seletedValue = e.target.selectedIndex -1;
    //     var getkeyCodeNum=e.keyCode;
    //     if(seletedValue == -1){
    
    //     }else if(seletedValue>=0 && getkeyCodeNum == 13){
    //         var getSiteUrl=phApp.baseUrl;
    //         var getPageUrl=oGlobal.oLocations[seletedValue].location_url;
    //         var pageUrl=getSiteUrl.concat(getPageUrl);
    //         window.location.href=pageUrl;
    //     }
    // }
    oGlobal.currentElementAcc=function(){
        if(window.navigator.userAgent.indexOf("Edge") > -1 ){

        }
    }
    oGlobal.serviceBanner = function(e){
        window.removeEventListener('ON_SERVICES_DOWN', ph$Msft$Custom.serviceBanner);
        if(e.detail === true){
            var getUrl=window.location.href;
            var createEle=document.createElement('div');
            createEle.setAttribute('class','downtime-banner');
            var frContent="<p lang=\"fr\"><b>Important:</b> Nous travaillons actuellement sur l'amélioration du site et certaines fonctionnalités ne sont pas encore disponibles. Vous pouvez toujours parcourir le site, rechercher et enregistrer des emplois. Toutefois, l'application à des emplois, la création ou l'édition de votre profil et centre d'action ne sont pas disponibles en ce moment. S'il vous plaît revenez sous peu.</p>";
            var engContent="<p lang=\"en\"><b>Important:</b> We’re currently working on improving the site and some functionality is unavailable. You can still browse the site, search for and save jobs. However, applying to jobs, creating or editing your profile and Action Center are unavailable. Please check back shortly.</p>"
            if(getUrl.indexOf('/ca/fr') >= 0){
            createEle.innerHTML=frContent;
            }else{
                createEle.innerHTML=engContent;
            }
            var getBannerContainer=document.querySelector('.beta-container');
            var getDownTimeBnr=document.querySelector('.downtime-banner');
            var setHeight=""
            var isCookieenabled=document.querySelector('.phs-cookie-popup-area.ph-sticky-header')
            if(getBannerContainer && !getDownTimeBnr){
                getBannerContainer.appendChild(createEle);
                var getDownAfteappend=document.querySelector('.downtime-banner');
                if(isCookieenabled){
                    getDownAfteappend.style.top=isCookieenabled.offsetHeight+"px"
                }
                setHeight=getDownAfteappend.offsetHeight
                document.body.style.marginTop=setHeight+"px";
            }
            oGlobal.getPrfofilemenu(2000);
            if(getUrl.indexOf('/profile') >= 0){
                oGlobal.getProfBtns(2000);
            }
            if(getUrl.indexOf('/job/') >= 0){
            oGlobal.getJdBtns(2000);
            }
            if(getUrl.indexOf('/actioncenter') >= 0){
            oGlobal.getAcBtns(2000);
            }
            if(getUrl.indexOf('/applyprofile') >= 0){
            oGlobal.getAppBtns(2000);
            }
            if(getUrl.indexOf('/savedjobs') >= 0){
            oGlobal.getSjBtns(2000);
            }
            if(getUrl.indexOf('/managejobalerts') >= 0){
            oGlobal.getMjaBtns(2000);
            }
            if(getUrl.indexOf('/referrals') >= 0){
            oGlobal.getRefBtns(2000);
            }
            if(getUrl.indexOf('/acreferencelist') >= 0){
            oGlobal.getAcRefBtns(2000);
            }
            if(getUrl.indexOf('/acreferences') >= 0){
            oGlobal.getAcRefLBtns(2000);
            }
            if(getUrl.indexOf('/createprofile') >= 0){
            oGlobal.getCPBtns(2000);
            }
        }
    };
    oGlobal.getPrfofilemenu = function(timerCount){
        setTimeout(function(){
            var getMenuItems=document.getElementById('candidate-details');
                 if(getMenuItems){
                     var DisabledEle=[0,2];
                     for(i =0; DisabledEle.length > i; i++){
                        getMenuItems.children[DisabledEle[i]].children[0].href="javascript:void()";
                        getMenuItems.children[DisabledEle[i]].children[0].setAttribute('aria-disabled','true');
                        getMenuItems.children[DisabledEle[i]].children[0].style.pointerEvents="none";
                        getMenuItems.children[DisabledEle[i]].children[0].style.color="#a7a7a7";
                        getMenuItems.children[DisabledEle[i]].style.cursor="no-drop";
                     }
                 }else{
                    oGlobal.getPrfofilemenu(1000)
                 }
        },timerCount);
    }
    oGlobal.getProfBtns = function (timerCount){
        if(phApp){
            window.location.href=phApp.baseUrl;
        }
        setTimeout(function(){
            var getlinkBtns=document.querySelectorAll('.creat-form-section a');
            if(getlinkBtns.length >= 1){
                for(i=0;i<getlinkBtns.length;i++){
                    getlinkBtns[i].style.pointerEvents="none";
                    getlinkBtns[i].style.cursor="no-drop";
                    getlinkBtns[i].setAttribute('aria-disabled','true');
                }
            }else{
                oGlobal.getProfBtns(1000);
            }
        },timerCount)
    }
    oGlobal.getCPBtns = function (timerCount){
        if(phApp){
            window.location.href=phApp.baseUrl;
        }
        setTimeout(function(){
            var getCrpBtns=document.querySelector('.action-btns button');
            if(getCrpBtns){
                getCrpBtns.style.pointerEvents="none";
                getCrpBtns.style.border="none";
                getCrpBtns.style.background="#555555";
                getCrpBtns.setAttribute('aria-disabled','true');
                document.querySelector('.action-btns').style.cursor="no-drop";
            }else{
                oGlobal.getCPBtns(1000);
            }
        },timerCount)
    }
    oGlobal.getJdBtns = function (timerCount){
        setTimeout(function(){
            var getJdlinkBtns=document.querySelectorAll('.job-header-actions .job-header-actions-left a');
            if(getJdlinkBtns.length >= 1){
                for(i=0;i<getJdlinkBtns.length;i++){
                    getJdlinkBtns[i].classList.add('applied');
                    getJdlinkBtns[i].style.pointerEvents="none";
                    getJdlinkBtns[i].style.cursor="no-drop";
                }
            }else{
                oGlobal.getJdBtns(1000);
            }
        },timerCount)
    }
    oGlobal.getAcBtns = function (timerCount){
        if(phApp){
            window.location.href=phApp.baseUrl;
        }
            
        setTimeout(function(){
            var getAclinkBtns=document.querySelectorAll('.sub-list-icon');
            if(getAclinkBtns.length >= 1){
                for(i=0;i<getAclinkBtns.length;i++){
                    getAclinkBtns[i].children[0].style.pointerEvents="none";
                    getAclinkBtns[i].children[0].style.cursor="no-drop";
                }
            }else{
                oGlobal.getAcBtns(1000);
            }
        },timerCount)
    }
    oGlobal.getAppBtns = function (timerCount){
        if(phApp){
            window.location.href=phApp.baseUrl;
        }
            
        setTimeout(function(){
            var getApplinkBtns=document.querySelectorAll('form button.primary-button');
            var uploadRes=document.querySelectorAll('.create-option-holder a');
            var upLoadDoc=document.querySelectorAll('a#idUploadDocument')
            if(getApplinkBtns.length >= 1 && upLoadDoc.length >= 1 && uploadRes.length >=1){
                for(i=0;i<getApplinkBtns.length;i++){
                    getApplinkBtns[i].style.pointerEvents="none";
                    getApplinkBtns[i].style.background="#555555";
                    getApplinkBtns[i].style.color="#fff";
                    getApplinkBtns[i].style.cursor="no-drop";
                }
                uploadRes[0].style.pointerEvents="none";
                uploadRes[0].style.cursor="no-drop";
                upLoadDoc[0].style.pointerEvents="none";
                upLoadDoc[0].style.cursor="no-drop";

            }else{
                oGlobal.getAppBtns(1000);
            }
        },timerCount)
    }
    oGlobal.getSjBtns = function (timerCount){
        oGlobal.disableBtns$links();
    }
    oGlobal.getAcRefLBtns = function (timerCount){
        if(phApp){
            window.location.href=phApp.baseUrl;
        }
            
    }
    oGlobal.getMjaBtns = function (timerCount){
        oGlobal.disableBtns$links()
    }
    oGlobal.getRefBtns = function (timerCount){
        oGlobal.disableBtns$links()
        // setTimeout(function(){
        //     var getApplinkBtns=document.querySelectorAll('form button.primary-button');
        //     var uploadRes=document.querySelectorAll('.create-option-holder a');
        //     var upLoadDoc=document.querySelectorAll('a#idUploadDocument')
        //     if(getApplinkBtns.length >= 1 && upLoadDoc.length >= 1 && uploadRes.length >=1){
        //         for(i=0;i<getApplinkBtns.length;i++){
        //             getApplinkBtns[i].style.pointerEvents="none";
        //             getApplinkBtns[i].style.background="#555555";
        //             getApplinkBtns[i].style.color="#fff";
        //             getApplinkBtns[i].style.cursor="no-drop";
        //         }
        //         uploadRes[0].style.pointerEvents="none";
        //         uploadRes[0].style.cursor="no-drop";
        //         upLoadDoc[0].style.pointerEvents="none";
        //         upLoadDoc[0].style.cursor="no-drop";

        //     }else{
        //         oGlobal.getRefBtns(1000);
        //     }
        // },timerCount)
    }
    oGlobal.getAcRefBtns = function (timerCount){
        setTimeout(function(){
            var getAddExpBtns=document.querySelector('.add-expense-btn')
            if(getAddExpBtns){
                    getAddExpBtns.children[0].style.pointerEvents="none";
                    getAddExpBtns.children[0].style.background="#555555";
                    getAddExpBtns.children[0].style.color="#fff";
                    getAddExpBtns.style.cursor="no-drop";

            }else{
                oGlobal.getAcRefBtns(1000);
            }
        },timerCount)
    }
    // repeat function
    oGlobal.disableBtns$links=function (){
        var getNav=document.getElementById('profile-nav');
        var setDisVal=[0,3]
        if(getNav.children.length >= 4){
            for(i=0;i<setDisVal.length;i++){
                getNav.children[setDisVal[i]].style.cursor="no-drop";
                getNav.children[setDisVal[i]].children[0].style.pointerEvents="none";
                getNav.children[setDisVal[i]].children[0].style.color="#a7a7a7";
                getNav.children[setDisVal[i]].children[0].setAttribute('aria-disabled','true');
                getNav.children[setDisVal[i]].children[0].href="javascript:void()";
            }
        }
    }

    // oGlobal.redirectToClose=function(){
        //     var getAllElements=document.body.getElementsByTagName("*");
        //     for(i=0;i<getAllElements.length;i++){
        //         if(getAllElements[i].getAttribute('aria-hidden') == null && getAllElements[i].getAttribute('acc-attr-ref') == null){
        //             getAllElements[i].setAttribute('aria-hidden','true');
        //             getAllElements[i].setAttribute('acc-attr-ref','true');
        //         }else if(getAllElements[i].getAttribute('aria-hidden') == "true" && getAllElements[i].getAttribute('acc-attr-ref') == "true"){
        //             getAllElements[i].removeAttribute('aria-hidden');
        //             getAllElements[i].removeAttribute('acc-attr-ref');
        //         }
        //     }
    // }
}(ph$Msft$Custom));

//adding multy language content in header goe here

ph$Msft$Custom.handleMultiLanguageCookieBanner();

// get multy language content when onchagne goes here 
ph$Msft$Custom.comboBoxMultyLocal();

// redirection for travel policy pages
ph$Msft$Custom.redirect_Fun_travelpolacy_page();

// cookie verifying function
// ph$Msft$Custom.check_Multy_Lang_Cookie();
// ph$Msft$Custom.check_Cookie_For_FeedBack();

// set loctions into a dropdown in ur landing page
ph$Msft$Custom.student_location_dropdown();

// for students and grads section drop down

ph$Msft$Custom.students_Onchange_Local();
window.addEventListener('ON_SERVICES_DOWN', ph$Msft$Custom.serviceBanner)

// window onload code goes here
document.addEventListener('DOMContentLoaded',function(){
    if(phApp){
        var getUrl=phApp.baseUrl.indexOf('/i/');
    }
    var getSkiptContent=document.getElementById('skip-content');
    var getSignInBlock=document.querySelector('.ph-oauthsignin-v1-my-profile-default');
    var getPersonaurl=window.location.href;
    var getBrowserName=window.navigator.userAgent;
    var my$Profregex=/i?professionals/g;
    var my$Studentregex=/i?students/g;
    var getPersonaprof=getPersonaurl.match(my$Profregex);
    var getTopheader=document.querySelector('#top-navbar');
    var getGfooter=document.querySelectorAll('.shell-footer-menugroups .sfm-group .footer-menupanel');
    var getPersonastudent=getPersonaurl.match(my$Studentregex);
    if(phApp){
        var getSiteType=phApp.siteType;
    }    
    var getPhpageEle=document.querySelector('.ph-page');
    var removeFooterEnElement=document.querySelector('[key-href="footer-careersFeedbackLinkUrl"]');
    var removeFooterFrElement=document.querySelector('[key-href="footer-careersFrFeedbackLinkUrl"]');
    var removeFooterElement;
    if(removeFooterEnElement){
        removeFooterElement =removeFooterEnElement
    }else if(removeFooterFrElement){
        removeFooterElement =removeFooterFrElement
    }
    if(getPersonaurl.indexOf('/savedjobs')){
        var getHblock=document.querySelector('.panel-heading');
        var getSubHead=document.querySelector('.sub-title');
        if(getHblock){
            var getHeading=getHblock.innerHTML.replaceAll('<h1','<h2').replaceAll('h1>','h2>');
            getHblock.innerHTML=getHeading
            getSubHead.setAttribute('aria-level','3');
            getSubHead.setAttribute('role','heading');
        }
        
    }
    // As per MSFT request we are adding this script tag and noscript tag to the site
    // script tag
    // var createSTag=document.createElement('script');
    // createSTag.setAttribute("type","text/javascript");
    // createSTag.innerHTML='_linkedin_partner_id = "7850"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();'
    // document.body.appendChild(createSTag);
    // noscript tag
    // var createNSTag=document.createElement('noscript');
    // createNSTag.innerHTML='<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7850&fmt=gif" />'
    // document.body.appendChild(createNSTag);

    // adding menu item in careers header
    reorderCookieForAlly();
        var menuHeader = document.querySelector('#mobiletab');
        var menuitemli = document.createElement('li');
        var getOrigin=window.location.origin;
        if(menuHeader){
            if(getPersonaurl.indexOf('/i/us/en') != -1){
                var createUrl=getOrigin.concat('/i/us/en/how-we-hire')
                menuitemli.innerHTML= '<a href="'+createUrl+'"'+ 'aria-label="how we hire" role="link" class="menubtn" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Referrals">How we hire</a>'
                menuHeader.children[3].parentNode.insertBefore(menuitemli, menuHeader.children[3].nextSibling);
            }else if(getPersonaurl.indexOf('/i/ca/fr') != -1){
                var createUrl=getOrigin.concat('/i/ca/fr/how-we-hire')
                menuitemli.innerHTML= '<a href="'+createUrl+'"'+ 'aria-label="comment nous embauchons" role="link" class="menubtn" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Referrals">Comment nous embauchons</a>'
                menuHeader.children[3].parentNode.insertBefore(menuitemli, menuHeader.children[3].nextSibling);
            }
        }
    // handling accessibility issue via script
    // adding land marks in french
    if(getPersonaurl.indexOf('/ca/fr') != -1){
        var getHeaderLm=document.querySelector('#multy-lang-betanotifier');
        if(getHeaderLm){
            getHeaderLm.setAttribute('aria-label','Message important de Microsoft');
        }
        var getSliderBlock=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"] [role="region"]');
        if(getSliderBlock.length){
            for(i=0;i<getSliderBlock.length;i++){
                var getALValue=getSliderBlock[i].getAttribute('aria-label').replace("Carousel, You're currently viewing slide","Carrousel, vous regardez actuellement la diapositive");                
                getSliderBlock[i].setAttribute('aria-label', getALValue)
            }
        }
    }
    setTimeout(function(){
        var getFooterAddBlk=document.querySelector('.footer-top');
        var getFooterFollowBlk=document.querySelector('.footer-social-media-icons');
        var getFooterNavBlk=document.querySelector('.shell-footer-menugroups');
        var getFooterMsftCorpBlk=document.querySelector('.shell-footer-copyright');
        var addAlVal,addSocialAlval,addMainfooter,addCopyright;
        if(getPersonaurl.indexOf('/ca/fr') != -1){
            addAlVal="Navigation d'assistance supplémentaire";
            addSocialAlval="Suivez-nous sur les réseaux sociaux";
            addMainfooter="Navigation en pied de page";
            addCopyright="Navigation dans les liens d'entreprise Microsoft";
        }else{
            addAlVal="Additional support navigation";
            addSocialAlval="Follow us on social media";
            addMainfooter="Footer navigation";
            addCopyright="Microsoft corporate links navigation";
        }
        getFooterAddBlk.setAttribute('role','region');
        getFooterAddBlk.setAttribute('aria-label',addAlVal)
        getFooterFollowBlk.setAttribute('role','region');
        getFooterFollowBlk.setAttribute('aria-label',addSocialAlval);
        getFooterNavBlk.setAttribute('role','region');
        getFooterNavBlk.setAttribute('aria-label',addMainfooter);
        getFooterMsftCorpBlk.setAttribute('role','region');
        getFooterMsftCorpBlk.setAttribute('aria-label',addCopyright);

    },1000)
    if(getBrowserName.indexOf('Edge') != -1){
        var getBreadcomd=document.querySelector('.tab-navlists');
        if(getBreadcomd){            
            for(i=0;i<getBreadcomd.childElementCount;i++){
                if(getBreadcomd.children[i].classList.contains('active') == true){
                    getBreadcomd.children[i].querySelector('a > ppc-content').setAttribute('aria-hidden',true);
                    getBreadcomd.children[i].querySelector('a .sr-only').setAttribute('aria-hidden',true);
                }
            }
        }
    }
    // closeResults(1000)
    // adding header elements
    if(getTopheader){
        var engGlobal_Header='<li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Microsoft 365" href="https://www.microsoft.com/microsoft-365" class="menu-item topheader-nav" target="_blank" aria-label="Microsoft 365 opens in a new tab">Microsoft 365</a></li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Office" class="menu-item topheader-nav" href="https://www.microsoft.com/en-us/microsoft-365/microsoft-office" target="_blank" aria-label="Office opens in a new tab">Office</a></li><li><a role="link" ph-tevent="header_menu_click" ddata-ph-tevent-attr-trait62="Windows" class="menu-item topheader-nav" href="https://www.microsoft.com/en-us/windows/" aria-label="Windows opens in a new tab" target="_blank">Windows</a></li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Microsoft Surface deals" class="menu-item topheader-nav" href="https://www.microsoft.com/en-us/surface"  target="_blank" aria-label="Surface deals opens in a new tab">Surface</a></li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Xbox" class="menu-item topheader-nav" href="https://www.xbox.com/" target="_blank"  aria-label="Xbox opens in a new tab">Xbox</a></li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Deals" class="menu-item topheader-nav" href="https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage" target="_blank" aria-label="Deals opens in a new tab">Deals</a</li><li><a role="link" ph-tevent="header_menu_click" onfocus="ph$Msft$Custom.header_mainAnchors_onFocus(this)" data-ph-tevent-attr-trait62="Support" href="https://support.microsoft.com/en-us" target="_blank" aria-label="Microsoft support opens in a new tab">Support</a></li>';

        var frGlobal_Header='<li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Microsoft 365" href="https://www.microsoft.com/microsoft-365" class="menu-item topheader-nav" target="_blank" aria-label="Microsoft 365 s’ouvre dans un nouvel onglet">Microsoft 365</a></li><li> <a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Office" class="menu-item topheader-nav" href="https://www.microsoft.com/microsoft-365/microsoft-office" target="_blank" aria-label="Office s’ouvre dans un nouvel onglet">Office</a></li><li> <a role="link" ph-tevent="header_menu_click" ddata-ph-tevent-attr-trait62="Windows" class="menu-item topheader-nav" href="https://www.microsoft.com/fr-ca/windows/" aria-label="Windows s’ouvre dans un nouvel onglet" target="_blank">Windows</a> </li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Microsoft Surface deals" class="menu-item topheader-nav" href="https://www.microsoft.com/fr-ca/surface" target="_blank" aria-label="Surface s’ouvre dans un nouvel onglet">Surface</a> </li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Xbox" class="menu-item topheader-nav" href="https://www.xbox.com/" target="_blank" aria-label="Xbox s’ouvre dans un nouvel onglet">Xbox</a></li><li><a role="link" ph-tevent="header_menu_click" data-ph-tevent-attr-trait62="Deals" class="menu-item topheader-nav" href="https://www.microsoft.com/fr-ca/store/b/sale?icid=salepage_Cnav_mscom" target="_blank" aria-label="Aubaines s’ouvre dans un nouvel onglet">Aubaines</a> </li><li> <a role="link" ph-tevent="header_menu_click" onfocus="ph$Msft$Custom.header_mainAnchors_onFocus(this)" data-ph-tevent-attr-trait62="Support" href="https://support.microsoft.com/fr-ca" target="_blank" aria-label="Microsoft Assistance s’ouvre dans un nouvel onglet">Assistance</a></li>';
        if(getPersonaurl.indexOf('/us/en') >= 0){
            getTopheader.innerHTML = engGlobal_Header;
        }else{
            getTopheader.innerHTML = frGlobal_Header
        }

    }
    if(getGfooter.length){
        var frGlobal_Footer=['<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Go 2" aria-label="Surface Go 2 s’ouvre dans un nouvel onglet" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/fr-ca/p/surface-go-2/8PT3S2VJMDR6">Surface Go 2</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Book 3" aria-label="Surface Book 3 s’ouvre dans un nouvel onglet" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/fr-ca/p/surface-book-3/8XBW9G3Z71F1">Surface Book 3</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft 365" aria-label="Microsoft 365 s’ouvre dans un nouvel onglet" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/microsoft-365">Microsoft 365</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Pro X" aria-label="Surface Pro X s’ouvre dans un nouvel onglet" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/fr-ca/p/surface-pro-x/8vdnrp2m6hhc">Surface Pro X</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Applications Windows 10" aria-label="Applications Windows 10 s’ouvre dans un nouvel onglet" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/fr-ca/windows/windows-10-apps">Applications Windows 10</a></li>', 
        '<li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Profil du compte" class="footer-click" href="https://account.microsoft.com/" target="_blank" aria-label="Profil du compte s’ouvre dans un nouvel onglet" role="link">Profil du compte</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Centre de téléchargement" class="footer-click" href="https://www.microsoft.com/fr-ca/download" target="_blank" aria-label="Centre de téléchargement s’ouvre dans un nouvel onglet" role="link">Centre de téléchargement</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Soutien Microsoft Store" class="footer-click" href="https://go.microsoft.com/fwlink/p/?LinkID=824761&clcid=0xC0C" target="_blank" aria-label="Soutien Microsoft Store s’ouvre dans un nouvel onglet" role="link">Soutien Microsoft Store</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Retours" class="footer-click" href="https://go.microsoft.com/fwlink/p/?LinkID=824764&clcid=0xC0C" target="_blank" aria-label="Retours s’ouvre dans un nouvel onglet" role="link">Retours</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Suivi des commandes" class="footer-click" href="https://account.microsoft.com/orders" target="_blank" aria-label="Suivi des commandes s’ouvre dans un nouvel onglet" role="link">Suivi des commandes</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Boutiques" class="footer-click" href="https://www.microsoft.com/fr-ca/store/locations/find-a-store?icid=fr-ca_UF_FAS" target="_blank" aria-label="Boutiques s’ouvre dans un nouvel onglet" role="link">Boutiques</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Formations et ateliers virtuels" class="footer-click" href="https://www.microsoft.com/fr-ca/store/workshops-training-and-events?icid=bm_uhf_footer_virtual-learning-azure_6182020" target="_blank" aria-label="Formations et ateliers virtuels s’ouvre dans un nouvel onglet" role="link">Formations et ateliers virtuels</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="La promesse du Microsoft Store" class="footer-click" href="https://www.microsoft.com/fr-ca/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020" target="_blank" aria-label="La promesse du Microsoft Store s’ouvre dans un nouvel onglet" role="link">La promesse du Microsoft Store</a> </li>', 
        '<li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft et l’éducation" class="footer-click" href="https://www.microsoft.com/fr-ca/education" target="_blank" aria-label="Microsoft et l’éducation s’ouvre dans un nouvel onglet" role="link" >Microsoft et l’éducation</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Office pour les étudiants" class="footer-click" href="https://www.microsoft.com/fr-ca/education/products/office/default.aspx" target="_blank" aria-label="Office pour les étudiants s’ouvre dans un nouvel onglet" role="link" >Office pour les étudiants</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Office 365 pour les écoles" class="footer-click" href="https://products.office.com/fr-ca/academic/compare-office-365-education-plans" target="_blank" aria-label="Office 365 pour les écoles s’ouvre dans un nouvel onglet" role="link" >Office 365 pour les écoles</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Offres pour étudiants et parents" class="footer-click" href="https://www.microsoft.com/fr-ca/store/b/student?icid=CNavfooter_Studentsandeducation" target="_blank" aria-label="Offres pour étudiants et parents s’ouvre dans un nouvel onglet" role="link" >Offres pour étudiants et parents</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Azure et l’éducation " class="footer-click" href="https://azure.microsoft.com/fr-ca/community/education/" target="_blank" aria-label="Microsoft Azure et l’éducation  s’ouvre dans un nouvel onglet" role="link" >Microsoft Azure et l’éducation </a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Azure" class="footer-click" href="https://azure.microsoft.com/" target="_blank" aria-label="Azure s’ouvre dans un nouvel onglet" role="link">Azure</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="AppSource" class="footer-click" href="https://go.microsoft.com/fwlink/?LinkID=808093" target="_blank" aria-label="AppSource s’ouvre dans un nouvel onglet" role="link">AppSource</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Automobile" class="footer-click" href="https://www.microsoft.com/enterprise/automotive" target="_blank" aria-label="Automobile s’ouvre dans un nouvel onglet" role="link">  Automobile</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Gouvernement" class="footer-click" href="https://www.microsoft.com/enterprise/government" target="_blank" aria-label="Gouvernement s’ouvre dans un nouvel onglet" role="link">Gouvernement</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Soins de santé" class="footer-click" href="https://www.microsoft.com/fr-ca/enterprise/health" target="_blank" aria-label="Soins de santé s’ouvre dans un nouvel onglet" role="link">  Soins de santé</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Fabrication" class="footer-click" href="https://www.microsoft.com/enterprise/manufacturing" target="_blank" aria-label="Fabrication s’ouvre dans un nouvel onglet" role="link">Fabrication</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Services financiers" class="footer-click" href="https://www.microsoft.com/fr-ca/enterprise/finance/banking-capital-markets" target="_blank" aria-label="Services financiers s’ouvre dans un nouvel onglet" role="link">Services financiers</a> </li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Vente au détail" class="footer-click" href="https://www.microsoft.com/enterprise/retail-consumer-goods" target="_blank" aria-label="Vente au détail s’ouvre dans un nouvel onglet" role="link">Vente au détail</a> </li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Visual Studio" class="footer-click" href="https://visualstudio.microsoft.com/" target="_blank" aria-label="Microsoft Visual Studio s’ouvre dans un nouvel onglet" role="link">Microsoft Visual Studio</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Developer Network" class="footer-click" href="https://msdn.microsoft.com/fr-ca" target="_blank" aria-label="Developer Network s’ouvre dans un nouvel onglet" role="link">Developer Network</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="TechNet" class="footer-click" href="https://technet.microsoft.com/fr-ca" target="_blank" aria-label="TechNet s’ouvre dans un nouvel onglet" role="link">TechNet</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Channel 9" class="footer-click" href="https://channel9.msdn.com/" target="_blank" aria-label="Channel 9 s’ouvre dans un nouvel onglet" role="link">Channel 9</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Centre des développeurs Office" class="footer-click" href="https://developer.microsoft.com/fr-fr/office" target="_blank" aria-label="Centre des développeurs Office s’ouvre dans un nouvel onglet" role="link">Centre des développeurs Office</a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Carrières" target="_self" aria-label="Carrières" role="link" href="/">Carrières</a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="À propos de Microsoft" href="https://www.microsoft.com/fr-ca/about" target="_blank" aria-label="À propos de Microsoft s’ouvre dans un nouvel onglet" role="link"> À propos de Microsoft </a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="La confidentialité chez Microsoft" class="footer-click" href="https://privacy.microsoft.com/fr-ca" target="_blank" aria-label="La confidentialité chez Microsoft s’ouvre dans un nouvel onglet" role="link"> La confidentialité chez Microsoft </a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Investisseurs" class="footer-click" href="https://www.microsoft.com/investor/default.aspx" target="_blank" aria-label="Investisseurs s’ouvre dans un nouvel onglet" role="link"> Investisseurs </a> </li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Sécurité" class="footer-click" href="https://www.microsoft.com/fr-ca/security/default.aspx" target="_blank" aria-label="Sécurité s’ouvre dans un nouvel onglet" role="link"> Sécurité </a> </li>'];

        // global english

        var engGlobal_Footer=['<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Go 2" aria-label="Surface Go 2 opens in a new tab" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/en-us/p/surface-go-2/8PT3S2VJMDR6">Surface Go 2</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Book 3" aria-label="Surface Book 3 opens in a new tab" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/en-us/p/surface-book-3/8XBW9G3Z71F1">Surface Book 3</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft 365" aria-label="Microsoft 365 opens in a new tab" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/microsoft-365">Microsoft 365</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Surface Pro X" aria-label="Surface Pro X opens in a new tab" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/en-us/p/surface-pro-x/8vdnrp2m6hhc">Surface Pro X</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Windows 10 apps" aria-label="Windows 10 apps opens in a new tab" target="_blank" role="link" class="footer-click" href="https://www.microsoft.com/en-us/windows/windows-10-apps">Windows 10 apps</a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Account profile" class="footer-click" href="https://account.microsoft.com/" target="_blank" aria-label="Account profile opens in a new tab" role="link">Account profile</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Download Center" class="footer-click" href="https://www.microsoft.com/en-us/download" target="_blank" aria-label="Download Center opens in a new tab" role="link">Download Center</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Store support" class="footer-click" href="https://go.microsoft.com/fwlink/p/?LinkID=824761&amp;clcid=0x409" target="_blank" aria-label="Microsoft Store support opens in a new tab" role="link"> Microsoft Store support</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Returns" class="footer-click" href="https://go.microsoft.com/fwlink/p/?LinkID=824764&amp;clcid=0x409" target="_blank" aria-label="Returns opens in a new tab" role="link">Returns</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Order tracking" class="footer-click" href="https://account.microsoft.com/orders" target="_blank" aria-label="Order tracking opens in a new tab" role="link">Order tracking</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Store locations" class="footer-click" href="https://www.microsoft.com/en-us/store/locations/find-a-store?icid=en-us_UF_FAS" target="_blank" aria-label="Store locations opens in a new tab" role="link">Store locations</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Virtual workshops and training" class="footer-click" href="https://www.microsoft.com/en-us/store/workshops-training-and-events?icid=bm_uhf_footer_virtual-learning-azure_692020" target="_blank" aria-label="Virtual workshops and training opens in a new tab" role="link">Virtual workshops and training</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Store Promise" class="footer-click" href="https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020" target="_blank" aria-label="Microsoft Store Promise opens in a new tab" role="link">Microsoft Store Promise</a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft in education" class="footer-click" href="https://www.microsoft.com/en-us/education" target="_blank" aria-label="Microsoft in education opens in a new tab" role="link">Microsoft in education</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Office for students" class="footer-click" href="https://www.microsoft.com/en-us/education/products/office/default.aspx" target="_blank" aria-label="Office for students opens in a new tab" role="link">Office for students</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Office 365 for schools" class="footer-click" href="https://products.office.com/en-us/academic/compare-office-365-education-plans" target="_blank" aria-label="Office 365 for schools opens in a new tab" role="link">Office 365 for schools</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Deals for students & parents" class="footer-click" href="https://www.microsoft.com/en-us/store/b/education?icid=CNavfooter_Studentsandeducation" target="_blank" aria-label="Deals for students & parents opens in a new tab" role="link">Deals for students & parents</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Azure in education" class="footer-click" href="https://azure.microsoft.com/en-us/community/education/" target="_blank" aria-label="Microsoft Azure in education opens in a new tab" role="link">Microsoft Azure in education</a></li>',
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Azure" class="footer-click" href="https://azure.microsoft.com/" target="_blank" aria-label="Azure opens in a new tab" role="link">Azure</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="AppSource" class="footer-click" href="https://go.microsoft.com/fwlink/?LinkID=808093" target="_blank" aria-label="AppSource opens in a new tab" role="link">AppSource</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Automotive" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/automotive" target="_blank" aria-label="Automotive opens in a new tab" role="link">Automotive</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Government" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/government" target="_blank" aria-label="Government opens in a new tab" role="link">Government</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Healthcare" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/health" target="_blank" aria-label="Healthcare opens in a new tab" role="link">Healthcare</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Manufacturing" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/manufacturing" target="_blank" aria-label="Manufacturing opens in a new tab" role="link">Manufacturing</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Financial services" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/finance/banking-capital-markets" target="_blank" aria-label="Financial services opens in a new tab" role="link">Financial services</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Retail" class="footer-click" href="https://www.microsoft.com/en-us/enterprise/retail-consumer-goods" target="_blank" aria-label="Retail opens in a new tab" role="link">Retail</a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Visual Studio" class="footer-click" href="https://visualstudio.microsoft.com/" target="_blank" aria-label="Microsoft Visual Studio opens in a new tab" role="link">Microsoft Visual Studio</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Windows Dev Center" class="footer-click" href="https://developer.microsoft.com/en-us/windows" target="_blank" aria-label="Windows Dev Center opens in a new tab" role="link">Windows Dev Center</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Developer Network" class="footer-click" href="https://msdn.microsoft.com/en-us" target="_blank" aria-label="Developer Network opens in a new tab" role="link">Developer Network</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="TechNet" class="footer-click" href="https://technet.microsoft.com/en-us" target="_blank" aria-label="TechNet opens in a new tab" role="link">TechNet</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft developer program" class="footer-click" href="https://developer.microsoft.com/en-us/store/register" target="_blank" aria-label="Microsoft developer program opens in a new tab" role="link">Microsoft developer program</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Channel 9" class="footer-click" href="https://channel9.msdn.com/" target="_blank" aria-label="Channel 9 opens in a new tab" role="link">Channel 9</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Office Dev Center" class="footer-click" href="https://developer.microsoft.com/en-us/office" target="_blank" aria-label="Office Dev Center opens in a new tab" role="link">Office Dev Center</a></li><li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Microsoft Garage" class="footer-click" href="https://www.microsoft.com/en-us/garage/" target="_blank" aria-label="Microsoft Garage opens in a new tab" role="link">Microsoft Garage</a></li>', 
        '<li><a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Careers" target="_self" aria-label="Careers" href="/" data-ph-href="/" role="link">Careers</a></li> <li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="About Microsoft" href="https://www.microsoft.com/en-us/about" target="_blank" aria-label="About Microsoft opens in a new tab" role="link">About Microsoft</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Company news" class="footer-click" href="https://news.microsoft.com/" target="_blank" aria-label="Company news opens in a new tab" role="link">Company news</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Privacy at Microsoft" class="footer-click" href="https://privacy.microsoft.com/en-us" target="_blank" aria-label="Privacy at Microsoft opens in a new tab" role="link">Privacy at Microsoft</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Investors" class="footer-click" href="https://www.microsoft.com/investor/default.aspx" target="_blank" aria-label="Investors opens in a new tab" role="link">Investors</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Diversity and inclusion" class="footer-click" href="https://www.microsoft.com/en-us/diversity/" target="_blank" aria-label="Diversity and inclusion opens in a new tab" role="link">Diversity and inclusion</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Accessibility" class="footer-click" href="https://www.microsoft.com/en-us/accessibility" target="_blank" aria-label="Accessibility opens in a new tab"  role="link">Accessibility</a></li><li> <a ph-tevent="footer_menu_click" data-ph-tevent-attr-trait62="Security" class="footer-click" href="https://www.microsoft.com/en-us/security/default.aspx" target="_blank" aria-label="Security opens in a new tab"  role="link">Security</a></li>'];

        if(getPersonaurl.indexOf('/us/en') >= 0){
            dynamicHeaderBuilding(engGlobal_Footer);
        }else{
            dynamicHeaderBuilding(frGlobal_Footer);
        }
    }
    // adding urgent message in actioncente
    if(getPersonaurl.indexOf('/actioncenter') > -1){
        function lazyLoading(){
            var getBannerContainer=document.querySelector('.candidate-portal-content-right');
                if(getBannerContainer){
                    var createCvidEle=document.createElement('div');
                    createCvidEle.setAttribute('class','cvid-banner');
                    if(getPersonaurl.indexOf("/us/en") > -1){
                        createCvidEle.innerHTML="<p><b>Important information regarding COVID-19:</b> Your health and well-being are a top priority at Microsoft. We understand that there may be concerns about traveling or in-person interviews. Microsoft is moving to virtual interviews. If you have questions, please contact your interview scheduler.</p>";
                    }else{
                        createCvidEle.innerHTML="<p><b>Information importante concernant la situation avec COVID-19:</b> Votre santé et votre bien-être sont une priorité absolue chez Microsoft. Nous comprenons qu’il peut y avoir des préoccupations au sujet des voyages ou des entrevues en personne. Microsoft passe à des interviews virtuelles. Si vous avez des questions, veuillez communiquer avec votre planificateur d’entrevue.</p>"
                    }
                    var getBannerContainer=document.querySelector('.candidate-portal-content-right');
                    getBannerContainer.appendChild(createCvidEle);
                    getBannerContainer.insertBefore(createCvidEle,getBannerContainer.firstChild);
                }else{                    
                    setTimeout(lazyLoading,100);
                }
        }
        lazyLoading();
    }
    // adding error message to the dom object
    var lazyCount=0;
    function set_Error_To_Domobj(){
        lazyCount++
        if(lazyCount <= 100){
            if(phApp){
                var getPage_error_obj=phApp.messages;
            }
            if(getPage_error_obj){
                // var getErr_obj_keys=Object.keys(getPage_error_obj);
                // var comp_en_string="Sorry, we ran into a problem while uploading your file. Please try again later. If the issue persists, contact support."
                // var set_Err_en_string="Sorry, we ran into a problem while uploading your file. Please try again later. If the issue persists, <a href='/us/en/support' aria-label='contact support opens in a new tab' target='_blank'>contact support</a>."

                // var comp_fr_string="Désolé, nous avons rencontré un problème lors du téléchargement de votre fichier. S’il vous plaît essayer à nouveau plus tard. Si le problème persiste, contactez le support."
                // var set_Err_fr_string="Désolé, nous avons rencontré un problème lors du téléchargement de votre fichier. S’il vous plaît essayer à nouveau plus tard. Si le problème persiste, <a href='/ca/fr/support' aria-label='contactez le support s’ouvre dans un nouvel onglet' target='_blank'>contactez le support</a>."
                if(phApp.messages["MSG_E201"] && phApp.messages["MSG_E202"]){
                    if(getPersonaurl.indexOf("/us/en") > -1){
                        phApp.messages["MSG_E201"]="We are facing issues while trying to update your profile. Please copy any updated texts you want to keep, then refresh the page and try again. If the issue persists, <a href='/us/en/support' aria-label='contact support opens in a new tab' target='_blank'>contact support</a>."
                        phApp.messages["MSG_E202"]="Sorry, we ran into a problem while uploading your file. Please try again later. If the issue persists, <a href='/us/en/support' aria-label='contact support opens in a new tab' target='_blank'>contact support</a>."
                    }else{
                        phApp.messages["MSG_E201"]="Nous sommes confrontés à des problèmes tout en essayant de mettre à jour votre profil. Veuillez copier tous les textes mis à jour que vous souhaitez conserver, puis actualisez la page et réessayez. Si le problème persiste, <a href='/ca/fr/support' aria-label='contactez le support technique s’ouvre dans un nouvel onglet' target='_blank'>contactez le support technique</a>."
                        phApp.messages["MSG_E202"]="Désolé, nous avons rencontré un problème lors du téléchargement de votre fichier. S’il vous plaît essayer à nouveau plus tard. Si le problème persiste, <a href='/ca/fr/support' aria-label='contactez le support s’ouvre dans un nouvel onglet' target='_blank'>contactez le support</a>."
                    }
                }
                // for(var i=0;getErr_obj_keys.length > i; i++){
                //     if(getPersonaurl.indexOf("/us/en") > -1){
                //         if(phApp){
                //             if(comp_en_string == phApp.messages[getErr_obj_keys[i]]){
                //                 phApp.messages[getErr_obj_keys[i]]=set_Err_en_string;
                //             }
                //         }
                //     }else{
                //         if(phApp){
                //             if(comp_fr_string == phApp.messages[getErr_obj_keys[i]]){
                //                 phApp.messages[getErr_obj_keys[i]]=set_Err_fr_string;
                //             }
                //         }
                //     }
                // }

            }else{
                setTimeout(set_Error_To_Domobj,100);
            }
        }
    }
    set_Error_To_Domobj()
    // Add hide class to the sign in button
    if(getPersonaurl.indexOf('/createprofile') > -1 || getPersonaurl.indexOf('/login') > -1){
        getSignInBlock.classList.add('hide');
    }

    // add hide class for LI scroll button
    var getScrollPLI=document.querySelector('#right-scroll');
    if(getScrollPLI){
        getScrollPLI.parentElement.classList.add('hide');
    }
    // Code for military search 
    if(getPersonaurl.indexOf('ms=true') != -1 && getPersonaurl.indexOf('moscode') != -1){
        var getGSWidget=document.querySelector('.ph-global-search-v3-default-default');
        if(getGSWidget){
            getGSWidget.setAttribute('ph-mos-search',true);
            getGSWidget.setAttribute('mos-visible-categories.bind',true);
        }
    }
    if(removeFooterElement){
        removeFooterElement.parentElement.remove()
    }

    // Remove duplicate id's for this widget
    var getDuplicateId=document.querySelectorAll('.ph-media-link-cc-view3-option1-theme1 .ph-component-cntr');
    if(getDuplicateId.length >=2){
        var getDuplicateHead=document.querySelectorAll('.ph-media-link-cc-view3-option1-theme1 .ph-component-cntr .heading-two');
        for(i=1;i<getDuplicateId.length;i++){
            setVal =getDuplicateHead[i].getAttribute('id')
            getDuplicateId[i].setAttribute('aria-labelledby',setVal+'_'+i)
            getDuplicateHead[i].setAttribute('id',setVal+'_'+i)
        }
    }
    // Header Active nav link functionality
    if(getPersonaprof != null && (getSiteType == "professionals")){
        var getProfEle=document.getElementById('prof-navigation');
        setActive$Tab(getProfEle)
    }else if(getPersonastudent != null && (getSiteType == "students")){
        var getStudEle=document.getElementById('students-navigation');  
        setActive$Tab(getStudEle)      
    }else if((getPersonaurl.indexOf('/professionals') > -1 || getPersonaurl.indexOf('/professions') > -1 || getPersonaurl.indexOf('/locations') > -1) && getPersonaurl.indexOf('/students') == -1){
        var getProfEle=document.getElementById('int-prof-navigation');
        setActive$Tab(getProfEle)
    }else if(getSiteType == "internal" && getPersonaurl.indexOf('/students') > -1){
        var getStudEle=document.getElementById('int-students-navigation');
        setActive$Tab(getStudEle)
    }
    // header active tab repeat code
    function setActive$Tab(activeTab){
        if(activeTab){
            if(activeTab.classList.contains('current-persona') == false){
                activeTab.classList.add('current-persona');
            }
        }
    }

    //code for Persona header menus hide/show
    // if(getSiteType == "professionals" || getPersonaprof != null){
    //     var getAllprofElems=document.querySelectorAll("[is-prof='true']");
    //     if(getAllprofElems.length >= 1){
    //         for(i=0; i< getAllprofElems.length; i++){
    //             if(getAllprofElems[i].classList.contains('hide') == true){
    //                 getAllprofElems[i].classList.remove('hide');
    //             }
    //         }
    //     }
    //     // inside professional elemts handling
    //     var getInsideProfElems=document.querySelectorAll("[is-inside-prof='false']");
    //     if(page$Name != "home" || window.location.pathname != "/professionals/us/en"){
    //         if(getInsideProfElems.length >= 0){
    //             for(j=0; j< getInsideProfElems.length; j++){
    //                 if(getInsideProfElems[j].classList.contains('hide') == true){
    //                     getInsideProfElems[j].classList.remove('hide');
    //                 }
    //             }
    //         }
    //     }
    // }else if(getSiteType == "students" || getPersonastudent != null){
    //     var getAllStudentElems=document.querySelectorAll("[is-prof='false']");
    //     if(getAllStudentElems.length >= 1){
    //         for(i=0; i< getAllStudentElems.length; i++){
    //             if(getAllStudentElems[i].classList.contains('hide') == true){
    //                 getAllStudentElems[i].classList.remove('hide');
    //             }
    //         }
    //     }
    // }
    if(getUrl <= -1){
        // var getElement=document.getElementById('students-navigation');
        // if(getElement){
        //     getElement.classList.add('show');
        // }               
    }else{
        var getReferalEle=document.getElementById('referal-link-tab');
        if(getReferalEle){
            getReferalEle.classList.add('show');
        } 
    }
    var getURLocationPage_Name=document.body.classList.contains('university-lp');
    var getLocationPage_Name=document.body.classList.contains('location-page');
    var getProfessionPage_Name=document.body.classList.contains('category-lp');
    // partial fix for drag and drop widgets start here
    //location pages and profession pages
    var getMediaLargecard=document.querySelector('.ph-html-v1-media-large-testimonial-default .content .header');
    var getMediaLinkcards=document.querySelectorAll('.ph-html-v1-media-link-default .content .header');
    var getMediaLinkOldcards=document.querySelectorAll('.media-link-default .content .header');
    // benefits page
    var getMediaTitleLinkcards=document.querySelectorAll('.media-card-benefits-default .content .header');
    //Culture page
    var getMediLinkcardsculture=document.querySelectorAll('.media-link-card-default .content .header');
    var getMediacardculture=document.querySelectorAll('.media-card-culture-default .content .header');
    // D AND I page
    var getMediacarddndi=document.querySelectorAll('.media-card-d-and-i-default .content .header');
    var getMediaLinkcarddndi=document.querySelectorAll('.media-link-card-d-and-i-default .content .header');
    // Milatary page
    var getMediacardmilatary=document.querySelectorAll('.media-card-milatary-default .content .header');
    var getMediaLinkcardmilataryht=document.querySelectorAll('.ph-media-link-cc-view3-option1-theme1 .content h3');
    var getMediaLinkcardmilataryhf=document.querySelectorAll('.ph-media-link-cc-view3-option1-theme1 .content h4');
    // mach program pages
    var getMediacradmack=document.querySelectorAll('.media-card-default .content .header');
    // interview tips
    var getMediacardtips=document.querySelectorAll('.media-link-card-interview-default .content .header');

    // new widget for students
    var getStudentWidget=document.querySelectorAll('[original-view="ph-content-cc-view4-option2msft"] .content .header span');
    


    if(getMediaLargecard){
        getMediaLargecard.setAttribute('role','heading');
        getMediaLargecard.setAttribute('aria-level','2');
    }
    if(getMediaLinkcards.length >= 1){
        for(var s=0; s < getMediaLinkcards.length; s++){
            getMediaLinkcards[s].setAttribute('role','heading');
            getMediaLinkcards[s].setAttribute('aria-level','3');
        }
    }
    if(getMediaTitleLinkcards.length >= 1){
        for(var p = 0; p < getMediaTitleLinkcards.length; p++){
            getMediaTitleLinkcards[p].setAttribute('role','heading');
            getMediaTitleLinkcards[p].setAttribute('aria-level','3');
        }
    }
    if(getMediLinkcardsculture.length >= 1){
        for(var r = 0; r < getMediLinkcardsculture.length; r++){
            getMediLinkcardsculture[r].setAttribute('role','heading');
            getMediLinkcardsculture[r].setAttribute('aria-level','3');
        }
    }
    if(getMediacardculture.length >= 1){
        for(var t = 0; t < getMediacardculture.length; t++){
            getMediacardculture[t].setAttribute('role','heading');
            getMediacardculture[t].setAttribute('aria-level','3');
        }
    }
    if(getMediacarddndi.length >= 1){
        for(var u = 0; u < getMediacarddndi.length; u++){
            getMediacarddndi[u].setAttribute('role','heading');
            getMediacarddndi[u].setAttribute('aria-level','3');
        }
    }
    if(getMediaLinkcarddndi.length >= 1){
        for(var v = 0; v < getMediaLinkcarddndi.length; v++){
            getMediaLinkcarddndi[v].setAttribute('role','heading');
            getMediaLinkcarddndi[v].setAttribute('aria-level','3');
        }
    }
    if(getMediacardmilatary.length >= 1){
        for(var w = 0; w < getMediacardmilatary.length; w++){
            getMediacardmilatary[w].setAttribute('role','heading');
            getMediacardmilatary[w].setAttribute('aria-level','3');
        }
    }
    if((getMediaLinkcardmilataryht.length >= 1 && getMediaLinkcardmilataryhf.length >=1) || (getMediaLinkcardmilataryht.length == 0 && getMediaLinkcardmilataryhf.length >=1)){
        if(getMediaLinkcardmilataryht.length == 0){
            for(var x=0; x < getMediaLinkcardmilataryhf.length; x++){
                getMediaLinkcardmilataryhf[x].setAttribute('role','heading');
                getMediaLinkcardmilataryhf[x].setAttribute('aria-level','3');
            }
        }else{
            for(var y=0;y < getMediaLinkcardmilataryht.length; y++){
                if(getMediaLinkcardmilataryht[y].parentElement.classList.contains('hide') == true){
                    getMediaLinkcardmilataryhf[y].setAttribute('role','heading');
                    getMediaLinkcardmilataryhf[y].setAttribute('aria-level','3');
                }
            }
        }
    }
    if(getMediacradmack.length >= 1){
        for(var z = 0; z < getMediacradmack.length; z++){
            getMediacradmack[z].setAttribute('role','heading');
            getMediacradmack[z].setAttribute('aria-level','3');
        }
    }
    if(getMediacardtips.length >= 1){
        for(var a = 0; a < getMediacardtips.length; a++){
            getMediacardtips[a].setAttribute('role','heading');
            getMediacardtips[a].setAttribute('aria-level','3');
        }
    }
    if(getMediaLinkOldcards.length >= 1){
        for(var b = 0; b < getMediaLinkOldcards.length; b++){
            getMediaLinkOldcards[b].setAttribute('role','heading');
            getMediaLinkOldcards[b].setAttribute('aria-level','3');
        }
    }
    if(getStudentWidget.length >= 1){
        for(var c = 0; c < getStudentWidget.length; c++){
            getStudentWidget[c].setAttribute('aria-level','3');
        }
    }
    
    // end here
    if(getURLocationPage_Name){
        var getPageUrl=window.location.href;        
        if(getPageUrl.indexOf('/ur-lp-united-states') < 0){
            var getEle=document.querySelector('.ph-nav-scroll-tab-default');
            if(getEle){
                getEle.children[1].classList.add('add-bg');
            }

        }
    }
    if(window.innerWidth >= 900){
        var getMediaCrad=document.querySelector('.ph-html-v1-media-card-default .ph-card-container');
        if(getMediaCrad != null){
            if(getMediaCrad.childElementCount <= 3){
                getMediaCrad.classList.add('txt-center');
                for(i=0;i<getMediaCrad.childElementCount;i++){
                    getMediaCrad.children[i].classList.add('no-float');
                }
            }

        }
    }
    var get_All_Anchors=document.querySelectorAll('.ph-html-v1-media-link-default .ph-card a');
    var get_All_AnchorsNewWidget=document.querySelectorAll('.media-link-default .ph-card a')
    var get_new_widget_anchor=document.querySelectorAll('[original-view="ph-media-link-cc-view3-option1"] .ph-card a');
    var add_Text;
    var engText=" opens in a new tab";
    var frText=" s'ouvre dans un nouvel onglet";
    if(getPersonaurl.indexOf('/ca/fr') !=-1){
        add_Text = frText;
    }else{
        add_Text=engText
    }
    if(get_All_Anchors.length > 0 || get_All_AnchorsNewWidget.length > 0 || get_new_widget_anchor.length > 0){
        if(get_All_Anchors.length > 0){
            var totalLinks=get_All_Anchors.length;
            var GetOld=true
        }
        if(get_All_AnchorsNewWidget.length > 0){
            var totalLinks=get_All_AnchorsNewWidget.length;
            var GetNew=true
        }
        if(get_new_widget_anchor.length > 0){
            var totalLinks=get_new_widget_anchor.length;
            var GetNewWLinks=true
        }
        var get_Title_text;
        for(i=0;i < totalLinks;i++){
            if(GetOld){
                var get_T_text=get_All_Anchors[i].title;
                var get_AL_Text=get_All_Anchors[i].getAttribute('aria-label');
                if(get_AL_Text != undefined && get_AL_Text != "null" && get_AL_Text !=""){
                    get_Title_text = get_AL_Text
                }else if(get_T_text != undefined && get_T_text != "null" && get_T_text !=""){
                    get_Title_text = get_T_text
                }
                var getPhrefValue=get_All_Anchors[i].getAttribute('ph-href');
                var getHrefVlaue=get_All_Anchors[i].getAttribute('href');
            }
            if(GetNew){
                var get_T_text=get_All_AnchorsNewWidget[i].title;
                var get_AL_Text=get_All_AnchorsNewWidget[i].getAttribute('aria-label');
                if(get_AL_Text != undefined && get_AL_Text != "null" && get_AL_Text !=""){
                    get_Title_text = get_AL_Text
                }else if(get_T_text != undefined && get_T_text != "null" && get_T_text !=""){
                    get_Title_text = get_T_text
                }
                var getPhrefValue=get_All_AnchorsNewWidget[i].getAttribute('ph-href');
                var getHrefVlaue=get_All_AnchorsNewWidget[i].getAttribute('href');
            }
            if(GetNewWLinks){
                var get_T_text=get_new_widget_anchor[i].title;
                var get_AL_Text=get_new_widget_anchor[i].getAttribute('aria-label');
                if(get_AL_Text != undefined && get_AL_Text != "null" && get_AL_Text !=""){
                    get_Title_text = get_AL_Text
                }else if(get_T_text != undefined && get_T_text != "null" && get_T_text !=""){
                    get_Title_text = get_T_text
                }
                var getPhrefValue=get_new_widget_anchor[i].getAttribute('ph-href');
                var getHrefVlaue=get_new_widget_anchor[i].getAttribute('href');
            }
            if(getPhrefValue){
                var validatePhrefVal=(getPhrefValue.indexOf('javascript:void(0)') > -1) ? true : false;
            }
            if(getHrefVlaue){
                var validateHrefVlaue=(getHrefVlaue.indexOf('javascript:void(0)') > -1) ? true : false;
            }                
            if(validatePhrefVal == false || validateHrefVlaue == false){
                if(get_Title_text != undefined && get_Title_text != "null" && get_Title_text !=""){
                    if(get_Title_text.indexOf('opens in a new tab') != -1 || get_Title_text.indexOf("s'ouvre dans un nouvel onglet") != -1 || get_Title_text.indexOf("ouvre dans un nouvel onglet") != -1){
                        var aria_Text=get_Title_text;
                    }else{
                        aria_Text=get_Title_text.concat(add_Text);
                    }
                    if(GetOld){
                        get_All_Anchors[i].setAttribute('title',aria_Text);
                        get_All_Anchors[i].removeAttribute('aria-label');
                        get_All_Anchors[i].removeAttribute('arialabel');
                        get_All_Anchors[i].removeAttribute('key-aria-label');
                    }
                    if(GetNew){
                        get_All_AnchorsNewWidget[i].setAttribute('title',aria_Text);
                        get_All_AnchorsNewWidget[i].removeAttribute('aria-label');
                        get_All_AnchorsNewWidget[i].removeAttribute('arialabel');
                        get_All_AnchorsNewWidget[i].removeAttribute('key-aria-label');
                    }
                    if(GetNewWLinks){
                        get_new_widget_anchor[i].setAttribute('title',aria_Text);
                        get_new_widget_anchor[i].removeAttribute('aria-label');
                        get_new_widget_anchor[i].removeAttribute('arialabel');
                        get_new_widget_anchor[i].removeAttribute('key-aria-label');
                    }
                }
                
            }else if(validatePhrefVal == true || validateHrefVlaue == true){
                if(GetOld){
                    get_All_Anchors[i].removeAttribute('target');
                }
                if(GetNew){
                    get_All_AnchorsNewWidget[i].removeAttribute('target');
                }
                if(GetNewWLinks){
                    get_new_widget_anchor[i].removeAttribute('target');
                }
            }             
        }
    }
    
    if(getLocationPage_Name){
        var get_All_Video_Anchors=document.querySelectorAll('.ph-html-v1-media-large-default .content .link a');
        var add_Text=" opens in a new tab";
        if(get_All_Video_Anchors.length > 0){
            for(i=0;i < get_All_Video_Anchors.length;i++){
                var get_Title_text=get_All_Video_Anchors[i].title;
                var aria_Text=get_Title_text.concat(add_Text);
                var get_keyTitle=get_All_Video_Anchors[i].getAttribute('key-title');
                get_All_Video_Anchors[i].setAttribute('title',aria_Text);
                get_All_Video_Anchors[i].setAttribute('key-title',get_keyTitle);
                get_All_Video_Anchors[i].removeAttribute('aria-label');
                get_All_Video_Anchors[i].removeAttribute('key-aria-label');
            }
        } 
    }
    if(getSkiptContent){
        document.getElementById('skip-content').addEventListener('focus',function(){
            document.querySelector('.skip-nav-para').style.height="40px";
            });
        document.getElementById("skip-content").addEventListener("focusout", function(){
            document.querySelector('.skip-nav-para').style.height="auto";
        });
    }
    if(getPhpageEle){
        // if(getPhpageEle.getAttribute('id') == null){  
        //     getPhpageEle.setAttribute('id','content');
        // }
        // if(getPhpageEle.getAttribute('tabIndex') == null){
        //     getPhpageEle.setAttribute('tabIndex','-1');
        // }
        // if(getPhpageEle.getAttribute('role') == null){
        //     getPhpageEle.setAttribute('role','main');
        // }
        setTimeout(function(){
            var createNewEle=document.createElement("DIV");
            var createH1Ele=document.createElement('h1');
            createH1Ele.setAttribute('class','sr-only');
            var cheksearhClassList=document.body.classList.toString().indexOf('results');
            var chekCatClassList=document.body.classList.toString().indexOf('category');
            if(cheksearhClassList > -1 || chekCatClassList > -1){
                getTitle=document.title.split('|')[0].replace('jobs','').trim();
                createH1Ele.innerHTML=getTitle;
                getPhpageEle.appendChild(createH1Ele);
                getPhpageEle.insertBefore(createH1Ele,getPhpageEle.firstChild);
            }
            var getSkipBlock=document.querySelector('.skiptarget');
            if(getSkipBlock){
                getSkipBlock.remove();
            }
            var nodeText_El = ("<a id='acc-skip-content' aria-hidden='true'>-</a>");

            createNewEle.innerHTML=nodeText_El;
            createNewEle.setAttribute('class','skiptarget')
            // if(getPhpageEle.parentElement.nodeName != 'BODY'){
            //     document.body.insertBefore(createNewEle,getPhpageEle.parentElement);
            // }else{
            //     document.body.insertBefore(createNewEle,getPhpageEle);
            // }
            getPhpageEle.appendChild(createNewEle);
            getPhpageEle.insertBefore(createNewEle,getPhpageEle.firstChild);

            var getListAnchors=document.getElementsByTagName('A');
            if(getListAnchors.length > 0){
                for(i=0;i<getListAnchors.length;i++){
                    if((getListAnchors[i].getAttribute('role') !='button') && (getListAnchors[i].getAttribute('role') !='BUTTON')){
                        getListAnchors[i].setAttribute('role','link')
                    }
                }
            }
            
        },500);
    }
    var getFooterCopyblck=document.querySelector('.shell-footer-copyright ul');
    if(getFooterCopyblck){
        var getFooterENCopyblck="<li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Sitemap' class='ctl_footerNavLink' href='https://www.microsoft.com/en-us/sitemap1.aspx' target='_blank' aria-label='Sitemap opens in a new tab' role='link'>Sitemap</a></li><li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Contact Microsoft' class='ctl_footerNavLink' href='https://support.microsoft.com/en-us/contactus/' target='_blank' aria-label='Contact Microsoft opens in a new tab' role='link'>Contact Microsoft</a></li><li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Privacy' class='ctl_footerNavLink' href='https://go.microsoft.com/fwlink/?LinkId=521839' target='_blank' aria-label='Privacy opens in a new tab' role='link'>Privacy</a> </li><li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Manage cookies' class='ctl_footerNavLink' href='/us/en/cookiesettings' target='_blank' aria-label='Manage cookies opens in a new tab' role='link'>Manage cookies</a></li><li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Terms of use' class='ctl_footerNavLink' href='https://go.microsoft.com/fwlink/?LinkID=206977' target='_blank' aria-label='Terms of use opens in a new tab' role='link'>Terms of use</a></li><li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Trademarks' class='ctl_footerNavLink' href='https://www.microsoft.com/trademarks' target='_blank' aria-label='Trademarks opens in a new tab' role='link'>Trademarks</a> </li><li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Safety &amp; eco' class='ctl_footerNavLink' href='https://www.microsoft.com/en-us/devices/safety-and-eco' target='_blank' aria-label='Safety &amp; eco opens in a new tab' role='link'>Safety &amp; eco</a> </li><li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='About our ads' class='ctl_footerNavLink' href='https://choice.microsoft.com' target='_blank' aria-label='About our ads opens in a new tab' role='link'>About our ads</a></li><li role='presentation' language-overriden='true'>© Microsoft 2021</li>";

        var getFooterFrCopyblck="<li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Communiquer avec Microsoft' class='ctl_footerNavLink' href='https://support.microsoft.com/fr-ca/contactus' target='_blank' aria-label='Communiquer avec Microsoft s’ouvre dans un nouvel onglet' role='link'>Communiquer avec Microsoft</a> </li><li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Énoncé de confidentialité' class='ctl_footerNavLink' href='https://go.microsoft.com/fwlink/?LinkId=521839' target='_blank' aria-label='Énoncé de confidentialité  s’ouvre dans un nouvel onglet' role='link'>Énoncé de confidentialité</a> </li><li><a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Gérer les cookies' class='ctl_footerNavLink' href='/ca/fr/cookiesettings' target='_blank' aria-label='Gérer les cookies s’ouvre dans un nouvel onglet' role='link'>Gérer les fichiers témoins</a></li> <li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Conditions d‘utilisation' class='ctl_footerNavLink' href='https://go.microsoft.com/fwlink/?LinkID=206977' target='_blank' aria-label='Conditions d‘utilisation s’ouvre dans un nouvel onglet' role='link'>Conditions d'utilisation</a> </li> <li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='Marques' class='ctl_footerNavLink' href='https://www.microsoft.com/trademarks' target='_blank' aria-label='Marques s’ouvre dans un nouvel onglet' role='link'>Marques</a> </li> <li> <a ph-tevent='footer_menu_click' data-ph-tevent-attr-trait62='À propos de nos annonces' class='ctl_footerNavLink' href='https://choice.microsoft.com' target='_blank' aria-label='À propos de nos annonces s’ouvre dans un nouvel onglet' role='link'>À propos de nos annonces</a> </li><li role='presentation' language-overriden='true'>© Microsoft 2021</li>";
        if(getPersonaurl.indexOf('/us/en') > -1){
            getFooterCopyblck.innerHTML=getFooterENCopyblck;
        }else{
            getFooterCopyblck.innerHTML=getFooterFrCopyblck;
        }
    }
    // Aware Message for Users 
    if(location.origin == "https://careersdev.microsoft.com" || location.origin == "https://careersppe.microsoft.com" || location.origin == "http://microsoft-editor.phenompeople.com"){
            var createAwareMesEle=document.createElement('DIV');
            var awareMesTexNode="<p>Please be aware that you are in the Careers Dev / PPE environment which is used for testing purpose only. Please use <a href='https://careers.microsoft.com' aria-label='Microsoft Careers opens in a new tab' target='_blank'>https://careers.microsoft.com</a> to access the production environment.</p>";
            createAwareMesEle.innerHTML=awareMesTexNode;
            createAwareMesEle.setAttribute('id','aware-message');
            var getInsertContainer=document.querySelector('.beta-container');
            if(getInsertContainer){
                // firstChild.
                getInsertContainer.insertBefore(createAwareMesEle,getInsertContainer.childNodes[0]);
            }
    }
    var getCareersTab=document.querySelector('header #mobiletab');
    if(getCareersTab){
        if(document.querySelector('header #mobiletab').childElementCount <= 5){
            ph$Msft$Custom.setHIdeClass(500)
        }
    }
    document.addEventListener('click',function(e){
        if((e.target.nodeName == "BUTTON" && e.target.getAttribute('aria-expanded') == "true") ||  (e.target.nodeName == "BUTTON" && e.target.getAttribute('aria-expanded') == "false")){
            e.target.focus();
        }
        if(e.target.getAttribute('data-ph-at-id') == 'cookie-close-link' || e.target.getAttribute('data-ph-at-id') == 'cookie-settings-link'){
            var getErrorBanner=document.querySelector('.downtime-banner')
            if(getErrorBanner){
                document.body.style.paddingTop=getErrorBanner.offsetHeight+"px";
                getErrorBanner.style.top=0;
            }
        }
        
        // added functionality for out side click
        var searchContainerBlock = document.querySelector('.phs-global-search-area');   
        if(searchContainerBlock){
            if ((searchContainerBlock == event.target || searchContainerBlock.contains(event.target) == true) && !event.target.classList.contains('phs-search-submit')) {
                this.showDropDown=true;
            }else{
                var getResultsBlock=document.querySelector('#searchSuggest').classList;
                if(getResultsBlock.contains('show')){
                    getResultsBlock.remove('show')
                    getResultsBlock.add('hide')
                }
            }
        } 
         
    })
    // for keros accessibility fix
    var getRolesMain=document.querySelectorAll('.ph-page[role="main"]');
    var getPageRole=document.querySelector('.ph-page').getAttribute('role');
    if((getRolesMain.length <= 0 && getPageRole == null) || getRolesMain.length <= 0 && getPageRole == ""){
        let getMainpage=document.querySelector('.ph-page');
        getMainpage.setAttribute('role','main');
        getMainpage.removeAttribute('tabindex');
        

    }
    var getMainpageele=document.querySelector('.ph-page');
    if(getMainpageele){
        getMainpageele.removeAttribute('tabindex');
    }
    // Remove multiple main roles from every page
    var getRolesList=document.querySelectorAll('[role=main]');
    if(getRolesList.length >= 2){
        for(i=1; i < getRolesList.length; i++){
            getRolesList[i].removeAttribute('role');
        }
    }
    var getViewPort=document.querySelector('[name="viewport"]');
    if(getViewPort){
        getViewPort.setAttribute("content","width=device-width, initial-scale=1, shrink-to-fit=no");
    }
    // for keros accessibility fix
    var getCurrentFrUrl=window.location.href.indexOf('/ca/fr');
    if(getCurrentFrUrl != -1){
        document.querySelector('html').setAttribute('lang','fr');
    }
    
    var elCount=0;
    function correctingIds(setTime){
        elCount++;
        var getELtagv4=document.querySelectorAll('section[original-view="ph-media-link-cc-view4-option1"]');
        var getELtagv3=document.querySelectorAll('section[original-view="ph-media-link-cc-view3-option1"]');
        setTimeout(()=>{
            if((getELtagv4.length>=2 || getELtagv3.length>=2) || (getELtagv4.length == 1 && getELtagv3.length==1)){
                if(getELtagv4.length>=2 || getELtagv3.length>=2){
                    if(getELtagv4.length>=2){
                        for(i=1;i<getELtagv4.length;i++){
                            getELtagv4[i].querySelector('[aria-labelledby="ph-widgetHeadingView3"]').setAttribute('aria-labelledby',"ph-widgetHeadingView31")
                            getELtagv4[i].querySelector('[id="ph-widgetHeadingView3"]').setAttribute('id',"ph-widgetHeadingView31")
                        }
                    }

                    if(getELtagv3.length>=2){
                        for(i=1;i<getELtagv3.length;i++){
                            getELtagv3[i].querySelector('[aria-labelledby="ph-widgetHeadingView3"]').setAttribute('aria-labelledby',"ph-widgetHeadingView31")
                            getELtagv3[i].querySelector('[id="ph-widgetHeadingView3"]').setAttribute('id',"ph-widgetHeadingView31")
                        }
                    }

                }else if(getELtagv4.length == 1 && getELtagv3.length==1){
                    getELtagv3[0].querySelector('[aria-labelledby="ph-widgetHeadingView3"]').setAttribute('aria-labelledby',"ph-widgetHeadingView31")
                    getELtagv3[0].querySelector('[id="ph-widgetHeadingView3"]').setAttribute('id',"ph-widgetHeadingView31")
                }
            }else if(elCount < 200){
                correctingIds(100);
            }
        },setTime)
    }
    correctingIds(500)
})
var setCookieCount=0;
function addContentCookie(timer){
      //  var getcookieBtn=document.querySelector('.cookie-button-area a');
      //  var getAcceptBtn=document.querySelector('.cookie-button-area .primary-button');
      //  var getRejectBtn=document.querySelector('.cookie-button-area .secondary-button');
       // var cookieInfo=document.querySelector('.cookie-text-area');
     //   var getRedirectionUrl=window.location.origin.concat('/')
        // var getLanguage=phApp.locale.replace('_','/')
        setCookieCount++;
        // setTimeout(function(){
            
        //     if(cookieInfo){
        //         if(window.location.href.indexOf('/us/en') > -1){
        //              // cookieInfo.innerHTML="We use optional cookies to improve your experience on our websites, such as through social media connections, and to display personalized advertising based on your online activity. If you reject optional cookies, only cookies necessary to provide you the services will be used. You may change your selection by clicking “Manage Cookies” at the bottom of the page. <a href='https://privacy.microsoft.com/en-us/privacystatement' target='_blank' aria-label='Privacy Statement opens in a new tab' role='link'>Privacy Statement</a>. <a href='https://support.microsoft.com/en-us/topic/third-party-cookie-inventory-81ca0c3d-c122-415c-874c-55610e017a6a' target='_blank' aria-label='Third-Party Cookies opens in a new tab' role='link'>Third-Party Cookies</a>.";
        //             //  getAcceptBtn.innerHTML="Accept";
        //             // getRejectBtn.innerHTML="Reject"
        //             // getcookieBtn.innerHTML="Manage cookies";
        //             // we commented on 21-feb-2022 for Reject all button issue
        //             var getEnRurl=getRedirectionUrl;
        //             if(window.location.href.indexOf('/i/') > -1){
        //                 getcookieBtn.setAttribute('href',getEnRurl.concat('i/us/en/cookiesettings'));
        //             }else{
        //                 getcookieBtn.setAttribute('href',getEnRurl.concat('us/en/cookiesettings'));
        //             }
        //         }else{
        //             //cookieInfo.innerHTML="Nous utilisons des cookies pour améliorer votre expérience sur nos sites Web et pour la publicité. <a href='https://go.microsoft.com/fwlink/?linkid=845480' target='_blank' aria-label='Déclaration de confidentialité s’ouvre dans un nouvel onglet'>Déclaration de confidentialité</a>";
        //        //     getcookieBtn.innerHTML="Gérer les cookies";
        //             // we commented on 21-feb-2022 for Reject all button issue
        //            // getAcceptBtn.innerHTML="Accepter tout";
        //          //   getcookieBtn.setAttribute('aria-label','Cliquez ici pour modifier vos paramètres de cookies');
        //             var getFrRurl=getRedirectionUrl;
        //             if(window.location.href.indexOf('/i/') > -1){
        //                 getcookieBtn.setAttribute('href',getFrRurl.concat('i/ca/fr/cookiesettings'));
        //             }else{
        //                 getcookieBtn.setAttribute('href',getFrRurl.concat('ca/fr/cookiesettings'));
        //             }
        //         }
        //     }else if(setCookieCount < 1000){
        //         addContentCookie(100)
        //     }
        // },timer)
}
addContentCookie(500)
function dynamicHeaderBuilding(data){
    var getGfooter=document.querySelectorAll('.shell-footer-menugroups .sfm-group .footer-menupanel');
    for(i=0;i<getGfooter.length;i++){
        getGfooter[i].innerHTML = data[i]
    }
}

if(document.body.classList.contains('university-lp') || document.body.classList.contains('military') || document.body.classList.contains('location-page')){
    document.addEventListener('focus',function(e){
        if(document.body.classList.contains('university-lp') || document.body.classList.contains('military') || document.body.classList.contains('location-page')){
            if(e.target.nodeName == "BUTTON" || e.target.nodeName == "A"){
                var getPopoverbodyEle=document.querySelector('.popover-body');
                var getPopoverbodyEleLen=document.querySelectorAll('.popover-body');
                if(getPopoverbodyEle){
                    if(getPopoverbodyEle.classList.contains('ph-hide') == false){
                        document.querySelector('.close').focus();
                    }
                }
                if(getPopoverbodyEleLen.length >= 1){
                    if(document.querySelectorAll('.popover-body').length >= 2){
                        if(document.querySelectorAll('.popover-body')[1].classList.contains('ph-hide') == false){
                            document.querySelectorAll('.popover-body .popup-header .close')[1].focus();
                        }
                    }
                }
            }
        }    
    }, true);
    document.addEventListener('keydown',function(e){
        if(document.body.classList.contains('university-lp') || document.body.classList.contains('military') || document.body.classList.contains('location-page')){
            if(e.key == "ArrowDown" || e.key == "ArrowUp"){
                if(e.target.nodeName == "BUTTON" || e.target.nodeName == "A"){
                    if(document.querySelector('.popover-body').classList.contains('ph-hide') == false){
                        document.querySelector('.close').focus();
                    }
                    if(document.querySelectorAll('.popover-body').length >= 2){
                        if(document.querySelectorAll('.popover-body')[1].classList.contains('ph-hide') == false){
                            document.querySelectorAll('.popover-body .popup-header .close')[1].focus();
                        }
                    }
                }
            }        
        }    
    }, true);
}

//window click code goes here   
document.addEventListener("click",function(event) {
    // top navbar collapsed here
    // var e = event || null;
    if(!event){
        return;
    }
    if(!document.body.classList.contains('logout-page')){
        if(!event.target.classList.contains('topheader-nav')){
            var getParentval=document.querySelector('#top-navbar');
            var childCount=getParentval.childElementCount;
            for (var i = 0; i < childCount; i++) {
                var getBtns=getParentval.children[i].children[0];
                var getUls=getParentval.children[i].children[1];
                if(getBtns.nodeName=="BUTTON"){
                    if(getUls.nodeName=="UL"){
                        var chilElcount=getUls.childElementCount;
                            for (var j = 0; j < chilElcount; j++) {
                                if(getUls.children[j].children[0].nodeName=="BUTTON"){
                                    if(getUls.children[j].children[0].classList.contains('active')){
                                        getUls.children[j].children[0].classList.remove('active');
                                        getUls.children[j].children[0].setAttribute('aria-expanded','false');
                                    }
                                }
                            }
                        if(getUls.classList.contains('show')==true){
                            getUls.classList.remove('show');
                            getBtns.classList.remove('active');
                            getUls.setAttribute("aria-hidden", true);
                            getBtns.setAttribute("aria-expanded", false);
                        }
                    }
                }
            }
        }
        // second navbar collapsed here
        if(!event.target.classList.contains("secondheader-nav")){
            var getParentval=document.querySelector('#mobiletab');
            var childCount=getParentval.childElementCount;
            for (var i = 0; i < childCount; i++) {
                var getsecBtns=getParentval.children[i].children[0];
                var getsecUls=getParentval.children[i].children[1];
                if(getsecBtns.nodeName=="BUTTON"){
                    if(getsecUls.nodeName=="UL"){
                        if(getsecUls.classList.contains('show')==true){
                            getsecUls.classList.remove('show');
                            getsecBtns.classList.remove('active');
                            getsecUls.setAttribute("aria-hidden", true);
                            getsecBtns.setAttribute("aria-expanded", false);
                        }
                    }
                }
            }
        }
        // footer navbar collapsed here
        if(!event.target.classList.contains('footer-menubtn') && !event.target.classList.contains('icon-down-arrow') && !event.target.classList.contains('footer-click')){
            var getFotterHead=document.querySelector('.shell-footer-menugroups');
            var getCount=getFotterHead.childElementCount;
            for (var i = 0; i < getCount; i++) {
                var getClasslist=getFotterHead.children[i].children[2].classList;
                getFotterHead.children[i].children[1].setAttribute("aria-expanded", false);
                if(getClasslist.contains('show')==true){
                    getFotterHead.children[i].children[2].classList.remove('show');
                }
            }
        }
        // mobile second header
        if(!event.target.classList.contains('mobile-btn') && !event.target.classList.contains('menubtn') && !event.target.classList.contains('menu-item')){
            var getMenu=document.getElementById("mobiletab");
            var getParentmenu=document.getElementById("main-navigation");
            getMenu.classList.remove('click-show');
            getParentmenu.setAttribute('aria-expanded',false);
        }
        // 
        if(!event.target.classList.contains('icon-menu') && !event.target.classList.contains('topheader-nav')){
            var getUllist=document.getElementById('top-navbar');
            var getbtn=document.getElementById('btn-menu');
            if(getUllist.classList.contains('show-tab')==true){
                getUllist.classList.remove('show-tab');
                getUllist.classList.add('hidden-tab');
                getbtn.setAttribute('aria-expanded',false);
            }
        }
        if(!event.target.classList.contains('profile-title')){
            var profDetails=document.querySelector('.profile-title');
            if(profDetails){
                if(profDetails.nextElementSibling.classList.contains('show')){
                    profDetails.nextElementSibling.classList.remove('show');
                    profDetails.setAttribute('aria-expanded','false');
                }
            }
        }
        if(!event.target.classList.contains('archived-dropdown') && !event.target.classList.contains('candidate-sub-section') && !event.target.classList.contains('candidate-sub-content') && !event.target.classList.contains('candidate-job-title-bar')){
            if(document.getElementById('archived-applications')){
                var getVal=document.getElementById('archived-applications');
                if(getVal.classList.contains('hide')==false){
                    getVal.classList.add('hide');
                    getVal.classList.remove('show');
                    document.getElementById('archived-dropdown').setAttribute('aria-expanded','false');
                    var getDwnarrow=document.getElementById('archiev-down').classList;
                        getDwnarrow.add('show-icon');
                        getDwnarrow.remove('hide');
                    var getUparrow=document.getElementById('archiev-up').classList;            
                        getUparrow.add('hide');
                        getUparrow.remove('show-icon');
                }
            }
        }
        if(!event.target.classList.contains('btn-options') && !event.target.classList.contains('options')){
            if(document.getElementById('profile-nav')){
                var getVal=document.getElementById('profile-nav');
                if (getVal.classList.contains('show')==true) {
                    getVal.classList.remove('show');
                    var getBtn=document.querySelector('.btn-options');
                        getBtn.setAttribute('aria-expanded','false');
                }
            }
        }
        if(!event.target.classList.contains('learn-more-info-btn') && !event.target.classList.contains('learn-more-info') && !event.target.classList.contains('close-keyword-info')){
            var getPopUpEle=document.querySelector('.learn-more-info');
            var getTextNode=document.getElementById('lear_more_info');
            var getTextNodeInt=document.getElementById('lear_more_info_int');
            if(getPopUpEle && getTextNode){
                if(getPopUpEle.classList.contains('hide') == false){
                    getPopUpEle.classList.add('hide');
                    if(getTextNodeInt.classList.contains('hide')==false){
                        getTextNodeInt.classList.add('hide');
                    }
                    if(getTextNode.classList.contains('hide')==false){
                        getTextNode.classList.add('hide');
                    }
                }
            }
        }
        // custom drop down close function for window click
        if(!event.target.classList.contains('custom-selectbox') == true){
            custom$dropListclose();
        }
    }

})
// escap key code goes here
document.addEventListener("keyup", function(evt){
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        var topheader=document.getElementById("top-navbar");
        var secondheader=document.getElementById("mobiletab");
        var mobileTopnav=document.getElementById("top-navbar");
        var footerNav=document.getElementById('footer-nav');
        var profDetails=document.querySelector('.profile-title');
        var globalSearch=document.querySelector('#searchSuggest');
        var getProfDetails=document.querySelector('#profile-nav');
        var getPopUpEle=document.querySelector('.learn-more-info');
        var getTextNode=document.getElementById('lear_more_info');
        var getTextNodeInt=document.getElementById('lear_more_info_int');
        if(secondheader){
            var getCount=secondheader.childElementCount;
            for (var i = 0; i < getCount; i++) {
                var topnavUl=secondheader.children[i];
                if(topnavUl.children[0].nodeName=="BUTTON"){                
                    if(topnavUl.children[1].classList.contains('show')==true){
                        topnavUl.children[1].classList.remove('show');
                        topnavUl.children[0].classList.remove('active');
                        topnavUl.children[1].setAttribute('aria-hidden',true);
                        topnavUl.children[0].setAttribute('aria-expanded',false);
                        topnavUl.children[0].focus();
                    }
                }
            }
            if(secondheader.classList.contains('click-show')){
                secondheader.classList.remove('click-show');
                var getMunu=document.getElementById('main-navigation');
                if(getMunu){
                    getMunu.setAttribute('aria-expanded',"false");
                    getMunu.focus();
                }
            }
        }
        if(topheader){
            var getTopCount=topheader.childElementCount;
            var hasRemoved = false;
            for (var i = 0; i < getTopCount; i++) {
                var lesAttr=topheader.children[i];
                if(lesAttr.children[0].nodeName=="BUTTON"){
                    var subElcount=lesAttr.children[1].childElementCount;
                    for (var j = 0; j < subElcount; j++) {
                        var menupanel = lesAttr.children[1].children[j];
                        if(menupanel.children[0].nodeName=="BUTTON"){
                            if(lesAttr.children[1].classList.contains('show')==true){
                                if(menupanel.children[1].classList.contains('show') == true){
                                    menupanel.children[1].classList.remove('show');
                                    menupanel.children[0].classList.remove('active');
                                    menupanel.children[1].setAttribute('aria-hidden',true);
                                    menupanel.children[0].setAttribute('aria-expanded',false);
                                    menupanel.parentElement.style.height="auto";
                                    menupanel.children[0].focus();
                                    hasRemoved = true;
                                    break;
                                }else if(hasRemoved || j == subElcount - 1){
                                        lesAttr.children[1].classList.remove('show');
                                        lesAttr.children[1].setAttribute('aria-hidden',true);
                                        lesAttr.children[0].setAttribute('aria-expanded',false);                                    
                                        lesAttr.children[0].classList.remove('active');
                                        lesAttr.children[0].focus();
                                        lesAttr.children[1].style.height="auto";                                
                                }
                            }   
                        }
                        if( hasRemoved ){
                            break;
                        }
                    }               
                }
                if( hasRemoved ){
                    break;
                }
            }
        }
        if(mobileTopnav){
            if(mobileTopnav.classList.contains('show-tab')){
                mobileTopnav.classList.remove('show-tab');
                mobileTopnav.classList.add('hidden-tab');
                var navbtn=document.getElementById('btn-menu');
                if(navbtn){
                    navbtn.setAttribute('aria-expanded',"false");
                    navbtn.focus();
                }
            }
        }
        if(footerNav){
            var btnCount=footerNav.childElementCount;
            for (var i = 0; i < btnCount; i++) {            
                if(footerNav.children[i].children[2].classList.contains('show')){
                    footerNav.children[i].children[1].setAttribute('aria-expanded',"false");
                    footerNav.children[i].children[1].classList.remove('active');
                    footerNav.children[i].children[2].classList.remove('show');
                    footerNav.children[i].children[2].setAttribute('aria-hidden',"true");
                }
            }
        }
        if(profDetails){
            if(profDetails.nextElementSibling.classList.contains('show')){
                profDetails.nextElementSibling.classList.remove('show');
                profDetails.setAttribute('aria-expanded','false');
                profDetails.focus();
            }
        }
        if(getProfDetails){
            if(document.getElementById('profile-nav')){
                var getVal=document.getElementById('profile-nav');
                if (getVal.classList.contains('show')==true) {
                    getVal.classList.remove('show');
                    var getBtn=document.querySelector('.btn-options');
                        getBtn.setAttribute('aria-expanded','false');
                        getBtn.focus();
                }
            }
        }
        // if(globalSearch){
        //     var getInputval=document.querySelector("input[ref='phGSearchInput']");
        //         getInputval.focus();
        // }
        if(getPopUpEle && getTextNode){
            if(getPopUpEle.classList.contains('hide') == false){
                getPopUpEle.classList.add('hide');
                if(getTextNodeInt.classList.contains('hide')==false){
                    getTextNodeInt.classList.add('hide');
                }
                if(getTextNode.classList.contains('hide')==false){
                    getTextNode.classList.add('hide');
                }
                document.querySelector('.learn-more-info-btn').focus();
            }
        }
        
    }
});
// remove over flow arows from header in desk top
window.addEventListener('resize',function(){
    if(!document.body.classList.contains('logout-page')){
        if(window.innerWidth >= 1340){
            var navList = document.getElementsByClassName("main-nav-links-block")[0];
            navList.style.marginLeft="0px";
        }else if(window.innerWidth <= 900){
            var navList = document.getElementsByClassName("main-nav-links-block")[0];
            navList.style.marginLeft="0px";
        }
        var getHeaderResize=document.getElementsByClassName("main-nav-links-block")[0];
        var getRarow=document.querySelector('.nav-arrow-right');
        var getLarow=document.querySelector('.nav-arrow-left');
        if(getRarow && getLarow){
            if((getRarow.classList.contains('hide') &&  getLarow.classList.contains('hide')) && (parseInt(getHeaderResize.style.marginLeft) == 0 || parseInt(getHeaderResize.style.marginLeft) == NaN)){
                getRarow.classList.remove('hide');
            }        
            
            if(parseInt(getHeaderResize.style.marginLeft) == 0){
                document.querySelector('.nav-arrow-left').classList.add('hide');
            }else if(parseInt(getHeaderResize.style.marginLeft) > 0){
                document.querySelector('.nav-arrow-right').classList.add('hide')
            }
        }
        
    }
    if(window.innerWidth <= 899){
        var getMediaCrad=document.querySelector('.ph-html-v1-media-card-default .ph-card-container');
        if(getMediaCrad != null){
            if(getMediaCrad.childElementCount <= 3){
                if(getMediaCrad.classList.contains('txt-center') == true){
                    getMediaCrad.classList.remove('txt-center');
                }                
                for(i=0;i<getMediaCrad.childElementCount;i++){
                    if(getMediaCrad.children[i].classList.contains('no-float') == true){
                        getMediaCrad.children[i].classList.remove('no-float');
                    }                    
                }
            }
            
        }
    }else if(window.innerWidth >= 900){
        var getMediaCrad=document.querySelector('.ph-html-v1-media-card-default .ph-card-container');
        if(getMediaCrad != null){
            if(getMediaCrad.childElementCount <= 3){
                if(getMediaCrad.classList.contains('txt-center') == false){
                    getMediaCrad.classList.add('txt-center');
                }                
                for(i=0;i<getMediaCrad.childElementCount;i++){
                    if(getMediaCrad.children[i].classList.contains('no-float') == false){
                        getMediaCrad.children[i].classList.add('no-float');
                    }                    
                }
            }
            
        }
    }
    
    if(window.innerWidth <= 1550){
        // ph$Msft$Custom.setHIdeClass(500);
    }else{
        ph$Msft$Custom.setHIdeClass(500);
        var leftArrow = document.querySelector('.nav-arrow-left');
        if(leftArrow.classList.contains('show-arrow') == true){
            leftArrow.classList.remove('show-arrow');
            leftArrow.classList.add('hide');
        }
    }
    var getDownTimeBnr=document.querySelector('.downtime-banner');
    var setSrHeight=""
    if(getDownTimeBnr){
        setSrHeight=getDownTimeBnr.offsetHeight;
        document.body.style.marginTop=setSrHeight+"px";
    }
})
// windwo onscroll function
document.addEventListener('scroll',function(){
    if(document.body.classList.contains('university-lp') == true){
        var getHeader=document.querySelector('.ph-header').offsetHeight;
        var getBanner=document.querySelector('.ph-html-v1-hero-content-theme1-default');
        if(getBanner){
            var getSlider=document.querySelector('.ph-html-v1-media-large-default').offsetHeight;
            var getTabs=document.querySelector('.ph-navbar');
            var getHeight=getHeader + getBanner.offsetHeight + getSlider;
            if(document.documentElement.scrollTop > getHeight || window.scrollY > getHeight){
                if(getTabs.classList.contains('fixed-tab') == false){
                    getTabs.classList.add('fixed-tab');
                }
            }else{
                if(getTabs.classList.contains('fixed-tab') == true){
                    getTabs.classList.remove('fixed-tab');
                }
            }
        }
    }
})

// window srcoll event
// window.onscroll=function(){
    //     var getPage=document.body.classList.contains('university-lp');
    //     if(getPage == true){
    //         var getSections=document.querySelectorAll('section');
    //         for(i=0;i<getSections.length;i++){
    //             if(getSections[i].classList.contains('fixed-text') == true){
    //                 getSections[i].classList.remove('fixed-text')
    //             }
    //         }
    //     }
// }
// custom drop down open function
function custom$Combobox(current){
    var getList=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .dropdown-list');
    var getcustomDropdown=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .custom-selectbox');
    if(getList){
        if(getList.classList.contains('hide') == true){
            getList.classList.remove('hide');
            getcustomDropdown.setAttribute('aria-expanded','true');
        }else{
            getList.classList.add('hide');
            getcustomDropdown.setAttribute('aria-expanded','false');
        }
    }
}
// for access list with arrow keys in global search
function arrowacce$$List(e,area){
    var getLinks=document.querySelectorAll('.phs-search-suggestions li a');
    if(e.keyCode == 40 || e.key == "ArrowDown"){
        var getSugBlock=document.querySelectorAll('#searchSuggest h3');
        var getClearBtn=document.querySelector('.phs-keysearch-clear');
        if(getSugBlock.length >= 1){
            // getSugBlock[0].setAttribute('tabindex','-1');
            // getSugBlock[0].addEventListener("keydown", function(){
            //     if(getLinks.length >= 1){
            //         getLinks[0].focus();
            //         event.preventDefault();
            //     }
            // });
            anchorli$tAccess$();
            if(getClearBtn.classList.contains('aurelia-hide') == true || area == "clsBtn"){
                getLinks[0].focus();
                e.preventDefault();
            }else{
                getClearBtn.focus();
            }
        }
    }
}
function setFocu$$toanchor(){
    anchorli$tAccess$()
}
function anchorli$tAccess$(){
    var getLinks=document.querySelectorAll('.phs-search-suggestions li a');
    for(i=0;i<getLinks.length;i++){
        getLinks[i].setAttribute('ac-id',i);
        getLinks[i].addEventListener("keydown", function(){
            var getId=parseInt(this.getAttribute('ac-id'));
            var getNextA=document.querySelector('[ac-id="'+(parseInt(this.getAttribute('ac-id')) + 1) +'"]');
            var getPrevA=document.querySelector('[ac-id="'+(parseInt(this.getAttribute('ac-id')) - 1) +'"]');
            if(getNextA && (event.keyCode == 40 || event.key == "ArrowDown") && getNextA!=null){
                getNextA.focus();
                event.preventDefault();
            }else if((getLinks.length-1) == getId && (event.keyCode == 40 || event.key == "ArrowDown")){
                getLinks[0].focus();
                event.preventDefault();
            }else if(getPrevA && (event.keyCode == 38 || event.key == "ArrowUp") && getPrevA!=null){
                getPrevA.focus();
                event.preventDefault();
            }else if(getId == 0 && (event.keyCode == 38 || event.key == "ArrowUp")){
                getLinks[getLinks.length-1].focus();
                event.preventDefault();
            }
        })
    }
}
// End access list with arrow keys in global search

// close global search results
    var glSrchcount=0;
    function closeResults(getItemtime){
        var getSearchblk=document.getElementById('searchSuggest')
        setTimeout(()=>{
            glSrchcount++;
            if(getSearchblk){
                if(getSearchblk.classList.contains('show') == true){           
                        getSearchblk.classList.remove('show');
                        getSearchblk.classList.add('hide');
                }else if(getSearchblk.classList.contains('hide') == false){
                    getSearchblk.classList.add('hide');
                }
            }else if(glSrchcount <= 1000){
                closeResults(100);
            }
        },getItemtime)
    }
// custom drop down close function esc
function custom$Comboboxclose(current,e){
    if(e.keyCode == 27){
        custom$dropListclose();
    }
}
// custom drop down close function for esc and window click
function custom$dropListclose(){
    var getList=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .dropdown-list');
    var getcustomDropdown=document.querySelector('.ph-media-lagge-video-popup-cc-view1-msft-option2-theme1 .custom-selectbox');
    if(getList){
        if(getList.classList.contains('hide') == false){
            getList.classList.add('hide');
            getcustomDropdown.setAttribute('aria-expanded','false');
            getcustomDropdown.focus();
        }
    }
}
function stopAriaBusyState(){
    var loaderState = document.querySelector("#loader-_-_-state");
    var pageMain = document.querySelector("#page-_-_-main");

    if(pageMain){
        pageMain.classList.remove("hide");
        loaderState.classList.remove("hide");
        loaderState.classList.add("hide");
        loaderState.removeAttribute('role');
        setTimeout(function(){
            window.focus();
            if (document.activeElement) {
                document.activeElement.blur();
            }
        },10);
    }
    // var msgBlock = document.querySelector("#phPageLoaderMessage");
    // if(msgBlock){
    //     msgBlock.innerHTML = "";
    // }
}
// Action center
function archivedDropdown(getBtn){
    var getVal=document.getElementById('archived-applications');
    if(getVal.classList.contains('hide')==true){
        getVal.classList.remove('hide');
        getVal.classList.add('show');        
        getBtn.setAttribute('aria-expanded','true');
        var getDwnarrow=document.getElementById('archiev-down').classList;
            getDwnarrow.remove('show-icon');
            getDwnarrow.add('hide');
        var getUparrow=document.getElementById('archiev-up').classList;            
            getUparrow.remove('hide');
            getUparrow.add('show-icon');
    
    }else{
        getVal.classList.add('hide');
        getVal.classList.remove('show');
        getBtn.setAttribute('aria-expanded','false');
        var getDwnarrow=document.getElementById('archiev-down').classList;
            getDwnarrow.add('show-icon');
            getDwnarrow.remove('hide');
        var getUparrow=document.getElementById('archiev-up').classList;            
            getUparrow.add('hide');
            getUparrow.remove('show-icon');
    }
}
// accessibility fixes
var setCountBleVal=0;
var setSaveCount=0;
var setSliderVal=0;
var getGSInputVal=0;
var getModelVal=0;
var removeTabcount=0;
var removeTabcountone=0;
var removeTabcountSlider=0;
var getPersonaurl=window.location.href;
function S$et_Label(setTime){
    setTimeout(function(){
        setCountBleVal++;
        var getViewmoreBtn=document.querySelector('.learn-more-info-btn');
        var getVCloseBtn=document.querySelector('.close-keyword-info');
        if(getViewmoreBtn){
            setCountBleVal=0;
            if(getPersonaurl.indexOf('/ca/fr') != -1){
                    getViewmoreBtn.setAttribute('aria-label','Apprendre encore plus info');
                    getVCloseBtn.setAttribute('aria-label','fermer en savoir plus popup');

            }else{
                    getViewmoreBtn.setAttribute('aria-label','Learn more info');
            }
        }else if(setCountBleVal < 1000){
            S$et_Label(500);
        }
    },setTime)    
}
S$et_Label(2000);

function set$aveFrText(setTime){
    setTimeout(function(){
        setSaveCount++;
        var getSaveBtn=document.querySelector('.phs-job-cart-area');
        if(getSaveBtn){
            setSaveCount=0;
            if(getPersonaurl.indexOf('/ca/fr') != -1){
                //getSaveBtn.getAttribute('aria-label'),getSaveBtn.innerText).trim()
                //changed on 7-27-22 to fix accessibility issue on 898 screen
                var replaceText=getSaveBtn.getAttribute('aria-label').replace(getSaveBtn.getAttribute('aria-label'),getSaveBtn.children[1].innerText).trim();
                getSaveBtn.setAttribute('aria-label',replaceText);
            }
        }else if(setSaveCount < 1000){
            set$aveFrText(500);
        }
    },setTime);

}
set$aveFrText(2000)

function setSliderLabel(setTime){
    setTimeout(function(){
        setSliderVal++;
        var getSliders=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
        if(getSliders.length){
            setSliderVal=0;
            if(getPersonaurl.indexOf('/ca/fr') != -1){
                for(var i=0;i<getSliders.length;i++){
                    if(getSliders[i].querySelector('.slick-custom-nav-area .slick-prev')){
                        getSliders[i].querySelector('.slick-custom-nav-area .slick-prev').setAttribute('aria-label','Afficher la diapositive précédente sur la même page');
                        getSliders[i].querySelector('.slick-custom-nav-area .slick-next').setAttribute('aria-label','Afficher la diapositive suivante sur la même page');
                        var getSliderDots=getSliders[i].querySelectorAll('.slick-dots-area .slick-dots button');
                        for(j=0;j<getSliderDots.length;j++){
                            var labelText=getSliderDots[j].getAttribute('aria-label').replaceAll('slide', 'faire glisser').replaceAll('of','de');
                            getSliderDots[j].setAttribute('aria-label',labelText);
                        }
                    }else{
                        setSliderLabel(500);
                    }
                }
            }
        }else if(setSliderVal < 1000){
            setSliderLabel(500);
        }
    },setTime);
}
setSliderLabel(2000)

function setGSRegion(setTime){
    setTimeout(function(){
        getGSInputVal++;
        var getGSInput=document.querySelector('.job-filter')
        if(getGSInput){
            getGSInputVal=0;
            getGSInput.setAttribute('role','region');
            if(getPersonaurl.indexOf('/ca/fr') != -1){        
                getGSInput.setAttribute('aria-label',"Recherche d'emploi");       
            }else{
                getGSInput.setAttribute('aria-label','Search job'); 
            }
        }else if(setSliderVal < 1000){
            setGSRegion(500);
        }
    },setTime);
}
setGSRegion(2000);

function removeTabindex(setTime){
    setTimeout(function(){
        removeTabcount++;
        var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view3-option1"]')
        if(getSliderViews.length){
            for(i=0;i<getSliderViews.length;i++){
                var getSLickBtns=getSliderViews[i].querySelector('.slick-dots');
                if(getSLickBtns){
                    var isAvail=true;
                    for(var j=0;j<getSLickBtns.childElementCount;j++){
                        getSLickBtns.children[j].addEventListener('click',function(){
                            setTimeout(function(){
                                var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view3-option1"]')
                                for(k=0;k<getSliderViews.length;k++){
                                    for(var s=0;s<getSliderViews[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViews[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },500)
                        })
                        getSLickBtns.children[j].addEventListener('keydown',function(){
                            setTimeout(function(){
                                var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view3-option1"]')
                                for(k=0;k<getSliderViews.length;k++){
                                    for(var s=0;s<getSliderViews[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViews[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },1000)
                        })
                    }
                }else{
                    removeTabindex(500);
                }
            }
            if(isAvail){
                if(getSliderViews[0].querySelector('.slick-track').children[0].getAttribute('tabindex') == "0"){
                    getSliderViews[0].querySelector('.slick-track').children[0].setAttribute('tabindex',"-1")
                }
            }
        }else if(setSliderVal < 1000){
            removeTabindex(500);
        }
    },setTime);
}
removeTabindex(2000);

function removeTabindexSlider(setTime){
    setTimeout(function(){
        removeTabcountSlider++;
        var getSliderViewsone=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
        if(getSliderViewsone.length){
            for(i=0;i<getSliderViewsone.length;i++){
                var getSLickBtns=getSliderViewsone[i].querySelector('.slick-dots');
                var getPrevBtn=getSliderViewsone[i].querySelector('.slick-prev');
                var getNextBtn=getSliderViewsone[i].querySelector('.slick-next');
                if(getSLickBtns && getPrevBtn && getNextBtn){
                    var isSliderAvail=true;
                    for(var j=0;j<getSLickBtns.childElementCount;j++){
                        getSLickBtns.children[j].addEventListener('click',function(){
                            setTimeout(function(){
                                var getSliderViewsone=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
                                for(k=0;k<getSliderViewsone.length;k++){
                                    for(var s=0;s<getSliderViewsone[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViewsone[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },500)
                        })
                        getSLickBtns.children[j].addEventListener('keydown',function(){
                            setTimeout(function(){
                                var getSliderViewsone=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
                                for(k=0;k<getSliderViewsone.length;k++){
                                    for(var s=0;s<getSliderViewsone[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViewsone[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },1000)   
                        })
                        getSliderViewsone[i].querySelector('.slick-track').children[j].querySelector('.figcaption-block').removeAttribute('aria-hidden');
                        getSliderViewsone[i].querySelector('.slick-track').children[j].querySelector('.author-designation').removeAttribute('aria-label');
                    }
                    
                    getPrevBtn.addEventListener('click',function(){
                        setTimeout(function(){
                            var getSliderViewsone=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
                            for(var v=0;v<getSliderViewsone.length;v++){
                                for(var w=0;w<getSliderViewsone[v].querySelector('.slick-track').childElementCount;w++){
                                    getSliderViewsone[v].querySelector('.slick-track').children[w].setAttribute('tabindex','-1')
                                }
                            }
                        },500)
                    })
                    getNextBtn.addEventListener('click',function(){
                        setTimeout(function(){
                            var getSliderViewsone=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view2-option1"]')
                            for(var v=0;v<getSliderViewsone.length;v++){
                                for(var w=0;w<getSliderViewsone[v].querySelector('.slick-track').childElementCount;w++){
                                    getSliderViewsone[v].querySelector('.slick-track').children[w].setAttribute('tabindex','-1')
                                }
                            }
                        },500)
                    })

                }else if(removeTabcountSlider < 1000){
                    removeTabindexSlider(500);
                }
               
            }
            if(isSliderAvail){
                if(getSliderViewsone[0].querySelector('.slick-track').children[0].getAttribute('tabindex') == "0"){
                    getSliderViewsone[0].querySelector('.slick-track').children[0].setAttribute('tabindex',"-1")
                }
            }
        }else if(removeTabcountSlider < 1000){
            removeTabindexSlider(500);
        }
    },setTime);
}
removeTabindexSlider(2000);

function removeTabindexone(setTime){
    setTimeout(function(){
        removeTabcountone++;
        var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view1-option1"]')
        if(getSliderViews.length){
            for(i=0;i<getSliderViews.length;i++){
                var getSLickBtns=getSliderViews[i].querySelector('.slick-dots');
                if(getSLickBtns){
                    var isAvail=true;
                    for(var j=0;j<getSLickBtns.childElementCount;j++){
                        getSLickBtns.children[j].addEventListener('click',function(){
                            setTimeout(function(){
                                var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view1-option1"]')
                                for(k=0;k<getSliderViews.length;k++){
                                    for(var s=0;s<getSliderViews[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViews[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },500)
                        })
                        getSLickBtns.children[j].addEventListener('keydown',function(){
                            setTimeout(function(){
                                var getSliderViews=document.querySelectorAll('section[original-view="ph-employees-testimonial-cc-slider-view1-option1"]')
                                for(k=0;k<getSliderViews.length;k++){
                                    for(var s=0;s<getSliderViews[k].querySelector('.slick-track').childElementCount;s++){
                                        getSliderViews[k].querySelector('.slick-track').children[s].setAttribute('tabindex','-1')
                                    }
                                }
                            },1000)   
                        })
                    }
                }else if(setSliderVal < 1000){
                    removeTabindexone(500);
                }
            }
            if(isAvail){
                if(getSliderViews[0].querySelector('.slick-track').children[0].getAttribute('tabindex') == "0"){
                    getSliderViews[0].querySelector('.slick-track').children[0].setAttribute('tabindex',"-1")
                }
            }
        }else if(setSliderVal < 1000){
            removeTabindexone(500);
        }
    },setTime);
}
removeTabindexone(2000);
function setRoleforModel(setTime){
    setTimeout(function(){
        getModelVal++;
        var getModelViews=document.querySelectorAll('section[original-view="ph-media-lagge-video-popup-cc-view2-msft-option3"]')
        if(getModelViews.length){
            getModelVal=0;
            for(i=0;i<getModelViews.length;i++){
                getModelViews[i].querySelector('a.action-link.ph-gallery-item-link').addEventListener('click',function(element){
                    var getModelInnerViews=document.querySelectorAll('section[original-view="ph-media-lagge-video-popup-cc-view2-msft-option3"]')
                    for(i=0;i<getModelInnerViews.length;i++){
                        getModelInnerViews[i].querySelector('[component-content-key="popup-container"]').setAttribute('role',"dialog")
                        getModelInnerViews[i].querySelector('[component-content-key="popup-container"]').setAttribute('aria-label',element.target.innerText);
                        var setLabel="";
                        if(window.location.href.indexOf('/ca/fr') != -1){
                            setLabel="proche " +element.target.innerText+ " popup"
                        }else{
                            setLabel="close " +element.target.innerText+ " popup"
                        }
                        getModelInnerViews[i].querySelector('.modal-dialog button.ph-gallery-close').setAttribute('aria-label',setLabel);
                    }
                })
            }
        }else if(setSliderVal < 1000){
            setRoleforModel(500);
        }
    },setTime);
}
setRoleforModel(2000);
// profile options
function openProfile(getArrow) {
    var prfoValue=getArrow.nextElementSibling;
    if(prfoValue.classList.contains('show')==false){
        prfoValue.classList.add('show');        
        var getDownarrow=document.querySelector('#down-arrow');
        getDownarrow.classList.add('hide');
        getDownarrow.classList.remove('show');
        var getUparrow=document.querySelector('#up-arrow');
        getUparrow.classList.remove('hide');
        getUparrow.classList.add('show');
        getArrow.setAttribute('aria-expanded','true');
    }
    else{
        prfoValue.classList.remove('show');
        var getDownarrow=document.querySelector('#down-arrow');
        getDownarrow.classList.add('show');
        getDownarrow.classList.remove('hide');
        var getUparrow=document.querySelector('#up-arrow');
        getUparrow.classList.add('hide');
        getUparrow.classList.remove('show');
        getArrow.setAttribute('aria-expanded','false')
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
// function showErrorMes(currentEle){
    //    var getContainerErrorblock=document.getElementById('interneal-error-container');
    //    if(getContainerErrorblock){
    //     getContainerErrorblock.innerHTML="";
    //     setTimeout(
    //         function() {
    //             if(currentEle== "msft-internal"){
    //                 var create_p_ele=document.createElement("p");
    //                 create_p_ele.innerHTML="Please select from one of the four personal options to log in to the Microsoft careers site."
    //                 create_p_ele.setAttribute('id','erro-text-block');
    //                 getContainerErrorblock.appendChild(create_p_ele);
    //             }else if(currentEle== "linked-in"){
    //                 var create_p_ele=document.createElement("p");
    //                 create_p_ele.innerHTML="Please select from one of the four personal options to log in to the Microsoft careers site."
    //                 create_p_ele.setAttribute('id','erro-text-block');
    //                 getContainerErrorblock.appendChild(create_p_ele);
    //             }
    //         }, 100); 
    //     if(getContainerErrorblock.classList.contains('hide') ==true){
    //         getContainerErrorblock.classList.remove('hide');
    //     }
    //    } 
// }
function phvAddFromValidation(v1, v2, v3, v4, v5) {
    var d1 = null,
        d2 = null;
    var _date = new Date();
    var _dateParse = Date.parse(_date);
    if (v1.year && v1.month && v1.day) {
        d1 = Date.parse(v1.year + '-' + v1.month + '-' + v1.day);
        var d = new Date(v1.year, v1.month, 0).getDate();
        if (v1.day > d) {
            // v5[v4].day = d + "";
            return false;
        }
        if (d1 < _dateParse) {
            // v5[v4].year = ((+v1.year) + 1) + "";
            return false;
        }
    }
    if (v2.year && v2.month && v2.day) {
        d2 = Date.parse(v2.year + '-' + v2.month + '-' + v2.day);
        var d = new Date(v2.year, v2.month, 0).getDate();
        if (v2.day > d) {
            //v5[v3.attribute].day = d + "";
            return false;
        }


    }
    if ((d1 && d2 === null) || d1 >= d2) {
        if (d1) {
            // v5[v3.attribute].day = v1.day;
            // v5[v3.attribute].month = v1.month;
            // v5[v3.attribute].year = v1.year;
            return true;
        }
    } else {

    }
    if (d1 && d2) {
        return d1 <= d2;
    } else {
        return !!d1;
    }
}
function phvToValidation(v1, v2, v3, v4, v5) {
    var d1 = null,
        d2 = null;
    var _date = new Date();
    var _dateParse = Date.parse(_date);
    if (v1.year && v1.month && v1.day) {
        d1 = Date.parse(v1.year + '-' + v1.month + '-' + v1.day);
        var d = new Date(v1.year, v1.month, 0).getDate();
        if (v1.day > d) {
            // v5[v4].day = d + "";
            return false;
        }

        if (d1 < _dateParse) {
            // v5[v4].year = ((+v1.year) + 1) + "";
            return false;
        }
    }
    if (v2.year && v2.month && v2.day) {
        d2 = Date.parse(v2.year + '-' + v2.month + '-' + v2.day);
        var d = new Date(v2.year, v2.month, 0).getDate();
        if (v2.day > d) {
            //v5[v3.attribute].day = d + "";
            return false;
        }


    }
    if ((d1 && d2 === null) || d1 <= d2) {
        if (d1) {
            //v5[v3.attribute].day = v1.day;
            //v5[v3.attribute].month = v1.month;
            // v5[v3.attribute].year = v1.year;
            return true;
        }
    } else {

    }



    if (d1 && d2) {
        return d1 >= d2;
    } else {
        return !!d1;

    }
}
function phvDateOfBirth(v1, v2, v3, v4, v5) {
    if (v1.year && v1.month && v1.day) {
        return true;
    }else{
        return false;
    }
}
function hideTab(){
    var tabHide = document.getElementById('profileTabNav');
    tabHide.style.display = 'none';
}
function showTab(){
    var tabShow = document.getElementById('profileTabNav');
    tabShow.style.display = 'block';    
}
function setPointerEvnt(i){
    if(i != 'remove'){
        getAllDisableList=document.querySelectorAll('.'+i);
        if(getAllDisableList.length){
            for(var i=0;i<getAllDisableList.length; i++){
                getAllDisableList[i].style.pointerEvents="none"
            }
        }
    }else{
        setTimeout(function(){
            getAllDisableList=document.querySelectorAll('.event-disable');
            if(getAllDisableList.length){
                for(var i=0;i<getAllDisableList.length; i++){
                    getAllDisableList[i].style.pointerEvents="all"
                }
            }
        },2000)
    }
}
function modal$$toggleDisplay(show, selector){
    var selector = selector || document.querySelector(".ph-widget-modal-content");
    var dialogBody = selector.querySelector('.popover-body');
    if(dialogBody){
        if(show == true){
            dialogBody.classList.remove("popup-hide");
            dialogBody.classList.add("popup-show");
        }else if(show == false){
            dialogBody.classList.remove("popup-show");
            dialogBody.classList.add("popup-hide");
        }
    }
}
function modal$$AddFocusToFirstItem(selector){
        var selector = selector || document.querySelector(".ph-widget-modal-content");
        if(selector){
            var elem = selector.querySelector(".popover-main.active .ref-modal-tab-item");
            if(elem){
                elem.focus();
            }
        }
}
// function redirectPage$students(current,e){
//     var seletedValue = e.target.selectedIndex -1;
//     var getkeyCodeNum=e.keyCode;
//     if(seletedValue == -1){

//     }else if(seletedValue>=0 && getkeyCodeNum == 13){
//         var getSiteUrl=phApp.baseUrl;
//         var getPageUrl=oGlobal.oLocations[seletedValue].location_url;
//         var pageUrl=getSiteUrl.concat(getPageUrl);
//         window.location.href=pageUrl;
//     }
// }
function modal$$KeyDownPopupHandler(event){
    var selector = document.querySelector(".ph-widget-modal-content");
        switch(event.keyCode){
            case 27:
                modal$$toggleDisplay(false);
            break;
            case 9:
                if(!selector.contains(document.activeElement)){
                    modal$$AddFocusToFirstItem(selector);
                    event.preventDefault();
                }
            break;
            case 33:
            case 34:
            case 38:
            case 40:
                // if(selector.contains(document.activeElement)){
                //     event.preventDefault();
                // }
            break;
        }
    return true;    
}
function handleModalAriaContent(open, aQuery){
    try{
        var isAriaHidden  = !!open;
        var hasQuery = aQuery || [".ph-header", ".ph-inline-nav-bar", ".ph-footer", ".ph-widget-main-content"];
        if(!hasQuery.length){
            return false;
        }
        hasQuery.forEach(function (itemCls) {
            if(itemCls){
                var selectors = document.querySelectorAll(itemCls);
                var len = selectors && selectors.length;
                if( len ){
                    for(var k = 0; k< len; k++ )
                        var selector = selectors[k];
                        if(selector){
                            selector.setAttribute("aria-hidden", isAriaHidden + '');
                        }
                }
            }
        }); 
        var selector = document.querySelector(".ph-widget-modal-content");
        selector.setAttribute("aria-hidden", !isAriaHidden + '');
        if(open){
            phApp = phApp || {};
            phApp.get$$ActiveElement = document.activeElement;
            modal$$toggleDisplay(true, selector);
            document.body.style.overflow = "hidden";
            document.addEventListener('keydown', modal$$KeyDownPopupHandler);
            selector.querySelector("div.tabGaurdStartSrOnly").addEventListener("focus", function (event) {
                event.stopImmediatePropagation();
                if (selector) {
                    var elem = selector.querySelectorAll(".popover-main.active .ref-modal-tab-item");
                    var last = elem.length - 1;
                    elem[last].focus();
                }
            }, true);  
            selector.querySelector("div.tabGaurdEndSrOnly").addEventListener("focus", function (event) {
                event.stopImmediatePropagation();
                modal$$AddFocusToFirstItem(selector);
            }, true); 
            setTimeout(function(){
                modal$$AddFocusToFirstItem(selector);
            },40)
            
        }else{
            document.removeEventListener('keydown', modal$$KeyDownPopupHandler);
            document.body.style.overflow = "auto";
            modal$$toggleDisplay(false, selector);
            phApp.get$$ActiveElement && phApp.get$$ActiveElement.focus();
        }
        
    }catch(e){
         console.info(e);
    }
}
function validations$GetPattern(type){
    switch(type){
        case 1:
            // Accept these characters First/Middle/Last/prefered first name as per the new rules
            return /^$|[a-zA-Z0-9\s,''"&.\-`()\/|:®\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\uF900-\uFDCF\uFDF0-\uFFEF\u017A\u1E83\u1E82\u015B\u015A\u1E54\u1E55\u0160\u0161\u0078+\u0301\u0178]+/;
            // return /^$|[a-zA-Z0-9\s,''"&.\-`()\/|:®\uF900-\uFDCF\uFDF0-\uFFEF]+/;
            //return /^$|[a-zA-Z0-9\s,''"&.\-`()\/|:®\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/;

        case 2:
        // Accept these characters
        return /^$|[a-zA-Z0-9\s,'’"&.\-`()\/|:®\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/;

        // validation for phone as per the new rules
        case 25:
            return /^$|[0-9\s,.*\-():#+@\/\[\]\\]+/;

        case 3:
            // job titile, company name, firstname, middle name and last name as per the new rules
            // return /^$|[a-zA-Z0-9\s,''"&.\-`()\/|:®\uF900-\uFDCF\uFDF0-\uFFEF]+/;
            return /^$|[a-zA-Z0-9\s,''"&.\-`()\/|:®\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\uF900-\uFDCF\uFDF0-\uFFEF\u017A\u1E83\u1E82\u015B\u015A\u1E54\u1E55\u0160\u0161\u0078+\u0301\u0178]+/;

        case 4:
            // (Do not accept these characters!) for MSR school field
            return /^$\s*|[^\$%\^+=_\]\[\;\/\\<>"]+/;

        case 5:
            // (Aaccept these characters!) Company Name 
            return /^$|[a-zA-Z0-9,&.'’\-\"`()\/|:®\s\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/;

        case 6:
            // (Accept these characters!) Address line 1 and 2, city, zipcode, county as per the new rules
            return /^$|[a-zA-Z0-9,.'’\s\-"`()\\\/|:#+!\&;[\]\½°\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/;
       
        case 7:
            /** Accept emails */
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        case 8:
            /** Accept microsoft emails */
            return /^\w+([\.-]?\w+)*@microsoft\.com$/;

        case 9:
            return /(<\s*.*[^>]*>?(.*?))|(((ftp|http)(s)?:\/\/.?(www\.)*?)*?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*))/gi;
        
        case 91:
        // url regex for social url as per new rules
            return /$|((http(s)?:\/\/.'^\s*)?(www\.)*?)[-a-zA-Z0-9-_.~!*'();:@&=+$,/?%#[\]\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._&?\+~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF//=]*)+/
            // /^$\s*|\s*((http)(s)?:\/\/.?(www\.)*?)[-a-zA-Z0-9@:%._\+~#=\/]+/
        case 10:
            // (Do not accept these characters!) other school
            return /^$\s*|[^\$%\^\&+=_\]\[()\;\\<>"]+/;
        case 11:
            return /$|[^<>]+/;
            // /^$|[a-zA-Z0-9,.'’\s*\-"`()\\\/|:#+!\&;\[\]\½°\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/;
        // For Only Accepting english and other given below symbols (Only accept these characters!) job summary
        
        default:
        
    }
}
// Old code
// function validate$profile$Year(v1, v2, v3, v4){
//     if(!v2){
//         let isInt = (Number(v1) === v1 && v1%1 === 0)
//         if(isInt && v1 >= 1900 && v1 <= 2100){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         return true;
//     }
// }
// new code
function validate$profile$Year(v1, v2, v3, v4){
    if(!v2){
        // let isNaN = parseInt(v1) === NaN;
        var strigValue = typeof(v1) === "string" ? v1 : String(v1);
        let isNaN = parseInt(v1);
        let isInt = (Number(v1) == isNaN && isNaN%1 == 0)
        if(isInt && isNaN >= 1900 && isNaN <= 2100 && strigValue.length <= 4){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
 }
function validate$profile$Month(v1, v2, v3, v4){
        if(!v2){
            if(v1 === "" || v1=== undefined){
                return false;
            }else{
                return true;
            }
        }else{
            return true;
        }
}
// for internal redirection
function check$$Internal$$Redirect(){
    var boolVal=window.location.href.indexOf('type=internal');
    if(boolVal != -1){
        var createEle=document.createElement("div");
        createEle.setAttribute('aria-live','assertive');
        createEle.setAttribute('aria-atomic','true');
        var createPTag="<p>Looks like you were previously on a page that is for external users. We've therefore taken you to the homepage for you to continue exploring.</p>"
        createEle.innerHTML=createPTag;
        document.body.appendChild(createEle);
        document.body.insertBefore(createEle,document.body.children[0]);
    }
}
function keyword$SearchInfo$(current,boolVal){
    var getTextInfo;
    var getPopUpEle=document.querySelector('.learn-more-info');
    var getmsftSiteType=window.location.href.indexOf('/i/');
        if(getmsftSiteType != -1){
            getTextInfo=document.getElementById('lear_more_info_int');
            if(getTextInfo.classList.contains('hide') == true){
                getTextInfo.classList.remove('hide');
            }else{
                getTextInfo.classList.add('hide');
            }
        }else{
            getTextInfo=document.getElementById('lear_more_info');
            if(getTextInfo.classList.contains('hide') == true){
                getTextInfo.classList.remove('hide');
            }else{
                getTextInfo.classList.add('hide');
            }
        }
    var getcurrentText=getTextInfo.innerHTML;
    if(current && boolVal == true && getPopUpEle){
        getTextInfo.innerHTML="";
        if(getPopUpEle.classList.contains('hide') == true){
            getPopUpEle.classList.remove('hide');
            getTextInfo.innerHTML=getcurrentText;
            document.querySelector('.close-keyword-info').focus();
            event.preventDefault();
        }else{
            getPopUpEle.classList.add('hide');
            getTextInfo.innerHTML=getcurrentText;
        }
    }else if(current && boolVal == false && getPopUpEle){
        if(getPopUpEle.classList.contains('hide') == false){
            getPopUpEle.classList.add('hide');
            getTextInfo.innerHTML=getcurrentText;
            document.querySelector('.learn-more-info-btn').focus();
            event.preventDefault();

        }
    }
}
function closeLmpopUp(ce,e){
    if(e.keyCode == 9 || e.keyCode == 40 || e.keyCode == 39){
        var getLearnBlock=document.querySelector('.learn-more-info');
        if(getLearnBlock){
            if(getLearnBlock.classList.contains('hide') != true){
                getTextIntInfo=document.getElementById('lear_more_info_int');
                getTextInfo=document.getElementById('lear_more_info');
                if(getTextIntInfo.classList.contains('hide') != true){
                    getTextIntInfo.classList.add('hide');
                }
                if(getTextInfo.classList.contains('hide') != true){
                    getTextInfo.classList.add('hide');
                }
                getLearnBlock.classList.add('hide');
            }
        }
    }
}
function reorderCookieForAlly() {
    var gdprSec = document.querySelector('section[ph-module="gdpr"]');
    var isCookieWidget = gdprSec && gdprSec.querySelector('[data-widget="ph-cookie-popup-v2"]');
    if (gdprSec && isCookieWidget) {
        var skipContentElem = document.querySelector('#aware-message');
        var headerSec = document.querySelector('.ph-header');

        skipContentElem = skipContentElem && skipContentElem.parentElement;
        var parentElem = skipContentElem ? skipContentElem.parentElement : headerSec.parentElement;
        var insertBeforeElem = skipContentElem || headerSec;
        insertBeforeElem && insertBeforeElem.parentElement.insertBefore(gdprSec, insertBeforeElem);
        reorderCovidForAlly(gdprSec);        
    } else {
        reorderCovidForAlly(false);
    }
}

function reorderCovidForAlly(gdprSec) {
    var isCvdWidget = document.querySelector('[data-widget="ph-cvd-v1"]');
    if (gdprSec && isCvdWidget) {
        gdprSec.parentElement.insertBefore(isCvdWidget, gdprSec);
    } else {
        if (isCvdWidget) {
            var skipContentElem = document.querySelector('#aware-message');
            var headerSec = document.querySelector('.ph-header');

            skipContentElem = skipContentElem && skipContentElem.parentElement;
            var parentElem = skipContentElem ? skipContentElem.parentElement : headerSec.parentElement;
            var insertBeforeElem = skipContentElem || headerSec;
            insertBeforeElem && insertBeforeElem.parentElement.insertBefore(isCvdWidget, insertBeforeElem);
        }
    }
}
//Location page nav tab functionality for accessibility