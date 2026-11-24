/**
 * This Script updates the upload form with the terms of service.
 * */
$(document).ready(function() {
    if (window.location.href.includes("/oedk/page/upload-doc")){
        addTos(document.getElementsByClassName("field required"),'tos_accept_9',"Ich bestätige, dass ich Urheber:in der Fotografien, des Texts, Videos, Audiobeitrags oder Social Media Kanals bin. Falls Personen abgebildet sind, habe ich ihr Einverständnis zur Veröffentlichung eingeholt. Ich willige ein, dass der Beitrag veröffentlicht und auf unbeschränkte Zeit gespeichert wird. Mit dem Upload übertrage ich das Nutzungsrecht an meinem Beitrag ohne zeitliche und räumliche Beschränkung an die Betreiber:innen der Webseite. Hiermit erkläre ich mich damit einverstanden, dass die Website nach Abschluss des Projekts in ein Langzeitarchiv migriert wird. Ein – auch nur teilweiser – Widerruf der Einwilligung ist jederzeit durch schriftliche Mitteilung an die Betreiber der Website möglich.")
    }
    if (window.location.href.includes("/lpda/page/upload-doc")){
        anonym_label = document.getElementsByTagName("label")
        for(i=0; i<anonym_label.length; i++){
            if(anonym_label.item(i).htmlFor === "anon_16"){
                anonym_label.item(i).innerHTML = "Je tiens à rester anonyme"
            }
        }
        addTos(document.getElementsByClassName("field required"),'tos_accept_16',"Je confirme que je suis l'auteur ou l’autrice des photographies, du texte, de la vidéo, de la contribution audio ou du canal de réseaux sociaux. Si des personnes sont représentées, j'ai obtenu leur accord pour la publication. J'accepte que la contribution soit publiée et conservée pour une durée illimitée. Avec le téléchargement, je cède le droit d'utilisation de ma contribution aux exploitants du site web sans limitation de temps ni d'espace. Je donne mon accord pour une migration du site web dans des archives à long terme après la fin du projet. Une révocation – même partielle – de l'accord est possible à tout moment par communication écrite aux exploitants du site web.")

    }

});

/**
 * This function updates the text of a label element based on its 'for' attribute value, and assigns a new ID to the parent div element.
 *
 * @param {HTMLCollection} div - The collection of div elements.
 * @param {string} for_txt - The value of the 'for' attribute of the label element to be updated.
 * @param {string} inner_html - The new HTML content to be set inside the label element.
 */
function addTos(divs, for_txt, inner_html) {
    // Loop through the div elements.
    for (var i = 0, length = divs.length; i < length; i++) {
        // Check if the 'for' attribute of the label element matches the given value.
        label = divs.item(i).children[0].firstElementChild
        if (label.getAttribute('for') === for_txt) {
            // Assign a new ID to the parent div element.
            divs.item(i).id = "tos";
            label.innerHTML = inner_html
        }
    }

}
