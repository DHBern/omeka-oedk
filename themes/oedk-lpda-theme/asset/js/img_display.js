/**
 * Fetches a list of URLs and appends images to a container
 */
if (window.location.href.includes("/page/welcome")) {
let URL_list = []

// Fetch the API data
const apiUrl = 'https://omeka.unibe.ch/api/items?per_page=999999&item_set_id=6457';
fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Loop through each object and extract the URL
        data.forEach((object) => {
            let obj_values = Object.values(object)
            let URL = Object.values(obj_values[10])[2]

            // If the URL is not null and does not contain "Sound", add it to the list
            if (!URL_list.includes(URL) && !Object.values(obj_values[2])[1].includes("Sound") && URL !== null) {
                URL_list.push(URL)
            }
        })

        // Create a row for the images and determine the number of columns based on the screen width
        let row = document.createElement("div")
        row.setAttribute("class", "row")

        let j
        if ($(window).width() > 2500) {
            j = 10
        } else if ($(window).width() > 1700) {
            j = 8
        } else if ($(window).width() > 1400) {
            j = 6
        } else if ($(window).width() > 1000 ) {
            j = 5
        } else {
            j = 1
        }

        // Loop through the desired number of columns and add an image to each column
        for (let i = 0; i < j; i++) {
            let r = getRandomInt(URL_list.length)
            let col = document.createElement("div")
            col.setAttribute("class", "column")
            col.setAttribute("style", "width:" + String(100 / j) + "%")

            if (j !== 1) {
                // Alternate the text alignment for every other column
                if (i % 2 == 0) {
                    col.setAttribute("style", "text-align: left;")
                    if (i == 0) {
                        col.setAttribute("style", "text-align: left; padding-left: 0;")
                    }
                } else {
                    col.setAttribute("style", "text-align: right;")
                    if (i == j - 1) {
                        col.setAttribute("style", "text-align: right;padding-right: 0;")
                    }
                }
            } else {
                col.setAttribute("style", "width:100%padding: 5px;text-align: center;")
            }

            // Create an image element and append it to the column
            let img = document.createElement("img");
            img.setAttribute("src", URL_list[r])
            URL_list.splice(r, 1)
            img.setAttribute("style", "max-height:250px;")
            col.appendChild(img)
            row.appendChild(col)
        }

        // Append the row of images to the container
        let img_container = document.getElementById("img_container")
        img_container.appendChild(row)
    })
    .catch(err => {
        console.error(err)
    });}


/**
 * Returns a random integer between 0 and max
 * @param {Number} max - the maximum value (exclusive)
 * @returns {Number} - a random integer between 0 and max
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
