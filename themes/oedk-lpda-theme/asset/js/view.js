/**
 * Updates item, item browse and media view.
 * Adds translation for french site.
 */
$(document).ready(function() {
    updateView()
})

function updateView(){
    if (window.location.href.includes("item/")){
        updateItemView()
    }
    else if (window.location.href.includes("item")){
        updateItemBrowseView()
    }
    else if (window.location.href.includes("media")){
        updateMediaView()
    }
}

/**
 * Updates the item view of an object by adding correct property names and removing servwer paths from image source.
 */
function updateItemView(){
    let correct_property_names_de = {"Titel": "Titel", "Beschreibung":"Kommentar",
        "Liste der Autoren":"Urheber:in Text/Bild/Video/Audio",
        "Urheber":"Künstler:in","with Role":"Eigene Rolle definieren",
        "Format":"Kategorie", "Zeitlicher Geltungsbereich":"Auf welches Jahr bezieht sich der Beitrag?",
        "Thema":"Gattung des dargestellten Motives", "shortDescription":"Hashtags und links" ,
        "Sammlungen": "Sammlungen"}
    let correct_property_names_fr = {"Titre":"Titre", "Description":"Commentaire",
        "liste des auteurs":"Auteur texte/image/vidéo/audio", "Créateur":"Artiste",
        "with Role":"Définissez votre rôle","Format ":"Catégorie",
        "Couverture temporelle":"A quelle année la contribution fait-il référence ?",
        "description courte":"Hashtags et liens","Sujet":"Genre du sujet représenté",
        "Collection":"Collection"}
    // Checks for wrong propertie names
    let properties = document.getElementsByClassName("property")
    if(properties.item(1).children.item(0).innerHTML.includes("Beschreibung")){
        addCorrectProperties(properties, correct_property_names_de)
    }
    if(properties.item(1).children.item(0).innerHTML.includes("Description")){
        addCorrectProperties(properties, correct_property_names_fr)
    }
    // Removes server path from displayed image source
    for(i = 0; i < document.getElementsByClassName("resource-name").length; i++ ){
        if(document.getElementsByClassName("resource-name").item(i).innerHTML.includes("https://omeka.unibe.ch/files/original/oedk_aep_data/")){
            html = document.getElementsByClassName("resource-name").item(i).innerHTML.split("https://omeka.unibe.ch/files/original/oedk_aep_data/")[1]
            document.getElementsByClassName("resource-name").item(i).innerHTML = html
        }
    }
    // Changes collection links
    let links = document.getElementsByTagName("a")
    for(i = 0; i < links.length; i++ ){
        if(document.getElementsByTagName("a").item(i).attributes[0].name === "href"
            && document.getElementsByTagName("a").item(i).attributes[0].nodeValue.includes("collecting/item/")){
            document.getElementsByTagName("a").item(i).remove()
        }
    }
    if(window.location.href.includes("lpda")){
        translateItemView()
    }
}

function addCorrectProperties(properties, correct_property_names){
    for(i = 0; i < properties.length; i++ ){
        let key = String(properties.item(i).children.item(0).innerHTML).trim()
        if(correct_property_names[key] !== undefined){
            properties.item(i).children.item(0).innerHTML = correct_property_names[key]
        }
    }
}

/**
 * This function updates the media by removing the URL of the OMEKA file from the title element.
 * If the media is a PDF file, it replaces the content of the media render element with a download button.
 */
function updateMediaView(){
    for(i = 0; i < document.getElementsByClassName("title").length; i++ ){
        if(document.getElementsByClassName("title").item(i) !== null && document.getElementsByClassName("title").item(i).innerHTML.includes("https://omeka.unibe.ch/files/original/oedk_aep_data/")){
            html = document.getElementsByClassName("title").item(i).innerHTML.split("https://omeka.unibe.ch/files/original/oedk_aep_data/")[1]
            document.getElementsByClassName("title").item(i).innerHTML = html
        }}
    let media_render = document.getElementsByClassName("media-render").item(0)
    if(media_render.firstChild.src.includes("pdf")){
        let src = media_render.firstChild.src
        media_render.firstChild.remove()
        media_render.innerHTML="<a class='button' href='"+src+"'>Download PDF</a>"
    }
}
/**
* Updates browse item view by removing sorting and advanced search buttons and removing description tags.
 */
function updateItemBrowseView(){
    try{
        document.getElementsByClassName("sorting").item(0).remove()
        document.getElementsByClassName("advanced-search").item(0).remove()
    }
    catch(err){}
    while(document.getElementsByClassName("tags").length !== 0){
        let tags = document.getElementsByClassName("tags")
        for(i = 0; i < tags.length; i++){
            tags.item(i).remove()
        }
    }
}

/**
 * Translates item properties via property_names_dict
 */
function translateItemView(){
    let property_names_dict = {"Titel": "Titre", "Kommentar":"Commentaire",
        "Urheber:in Text/Bild/Video/Audio": "Auteur texte/image/vidéo/audio",
        "Künstler:in": "Artiste","Eigene Rolle definieren": "Définissez votre rôle",
        "Kategorie":"Catégorie", "Auf welches Jahr bezieht sich der Beitrag?": "A quelle année la contribution fait-il référence ?",
        "Gattung des dargestellten Motives":"Genre du sujet représenté", "Hashtags und Links": "Hashtags et liens",
        "Link zu einer online Ressource / Quelle / Lizenz":"Lien vers une ressource en ligne / source / licence"}
    let properties = document.getElementsByClassName("property")
    for(i = 0; i < properties.length; i++ ){
        let key = String(properties.item(i).children.item(0).innerHTML).trim()
        if(property_names_dict[key] !== undefined){
            properties.item(i).children.item(0).innerHTML = property_names_dict[key]
        }
    }
}

