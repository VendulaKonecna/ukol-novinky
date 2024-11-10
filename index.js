/*
Novinky
Vytvořte si repozitář ze šablony cviceni-novinky. V repozitáři je připravena webová stránka, která zobrazuje několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly z tohoto cvičení proveďte v JavaScriptovém souboru index.js.
*/

/*
Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
*/
const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

/*
Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
*/
const newsBox = document.querySelector(".news")
newsBox.style.backgroundColor = "white"
newsBox.style.maxWidth = "60rem"

/*
Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
*/
const nadpis = document.querySelector("h1")
nadpis.classList.add("news__title")
nadpis.textContent = "Aktuální novinky"

/*
Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
*/
const prvniZprava = document.querySelector("#zprava1")
prvniZprava.classList.add("post--main")

/*
Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.
*/
const tretiZprava = document.querySelector("#zprava3")
const tretiObr = tretiZprava.querySelector("img")
tretiObr.src = "images/zprava3-novy.jpg"
/* const lastPostImgElm = document.querySelector('#zprava3 img');
lastPostImgElm.src = 'images/zprava3-novy.jpg'; */