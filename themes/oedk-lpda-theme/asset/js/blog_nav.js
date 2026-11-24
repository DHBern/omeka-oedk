/**
 * Script for blog navigation. Note the the diffrent blog pages need to be added manually via Omeka.
 * If a new Blog page is added totalPages needs to be modified.
 */
$(document).ready(function() {
    const currentPage = getCurrentPage()
    if (currentPage) {
        const totalPages = 6;
        const prevPage = getPrevPage(currentPage, totalPages);
        const nextPage = getNextPage(currentPage, totalPages);
        const afterNextPage = getNextPage(nextPage, totalPages);
        let links = getNavLinks(currentPage, totalPages)
        let rows = htmlToElements(
                '<a id="previous" href="/s/oedk/page/blog-'+prevPage+'">' +
                '    <svg class="bi bi-chevron-left" fill="currentColor" height="16" viewBox="0 0 16 16" width="16"' +
                '         xmlns="http://www.w3.org/2000/svg">' +
                '        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"' +
                '              fill-rule="evenodd"></path>' +
                '    </svg>' +
                '</a> ' + links+
                '    <a id="next" href="/s/oedk/page/blog-'+nextPage+'">' +
                '        <svg class="bi bi-chevron-right" fill="currentColor" height="16" viewBox="0 0 16 16" width="16"' +
                '             xmlns="http://www.w3.org/2000/svg">' +
                '            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"' +
                '                  fill-rule="evenodd"></path>' +
                '        </svg>' +
                '    </a>'
            );
        let content = document.getElementById("content")
        let div = document.createElement("div");
        for (let i = 0; i < rows.length; i++){
                div.appendChild(rows[i])
            }
        content.appendChild(div)
        setActiveLinks(currentPage)

    }

        });
/**
 * Converts a string of HTML representing any number of sibling elements into a DOM element.
 * @param {String} html - The string of HTML to convert.
 * @return {Element} - The resulting DOM element.
 */
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}
/**
 * Returns the current page number if the URL contains the string "/s/oedk/page/blog-".
 * @return {Number|null} - The current page number, or null if the URL does not contain the string "/s/oedk/page/blog-".
 */
function getCurrentPage() {
    var url = window.location.href;
    if (url.includes("/s/oedk/page/blog-")) {
        return parseInt(url.slice(-1));
    } else {
        return null;
    }
}
/**
 * Returns the URL for the previous page, given the current page number.
 * @param {Number} currentPage - The current page number.
 * @return {String} - The URL for the previous page.
 */
function getPrevPage(currentPage, totalPages) {
    if (currentPage === 1) {
        return totalPages;
    } else {
        return currentPage - 1;
    }
}
/**
 * Returns the URL for the next page, given the current page number and the total number of pages.
 * @param {Number} currentPage - The current page number.
 * @param {Number} totalPages - The total number of pages.
 * @return {String} - The URL for the next page.
 */
function getNextPage(currentPage, totalPages) {
    if (currentPage === totalPages) {
        return 1;
    } else {
        return currentPage + 1;
    }
}
/**
 * Generates a string of HTML anchor tags for navigating between pages.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @returns {string} A string of HTML anchor tags for navigating between pages.
 */
function getNavLinks(currentPage, totalPages){
    let links = ""
    let pages =[]
    if(currentPage === 1){
        pages = [1,2,3]}
    else if(currentPage === totalPages){
        pages = [totalPages-2,totalPages-1,totalPages]}
    else{
        pages = [currentPage-1, currentPage, currentPage+1]
    }
    for(var i = 0; i <pages.length; i++){
        links += '<a class="nr" href="/s/oedk/page/blog-'+pages[i]+'">'+pages[i]+'</a> '
    }
    return links
}

function setActiveLinks(currentPage){
    let numbers = document.getElementsByClassName("nr")
    for(i = 0; i < numbers.length; i++ ){
        if( numbers.item(i).href.slice(-1) === String(currentPage) ){
            numbers.item(i).setAttribute("class", "nr active")
        }
    }

}




