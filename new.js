

        function getQueryParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Get the image URL from the query parameter
        const imageUrl = getQueryParameter("image");

        // Get the image element on the display page
        const displayImage = document.getElementById("mainImage");

        if (imageUrl) {
            // Set the source URL of the image element
            displayImage.src = decodeURIComponent(imageUrl);
        } else {
            // Handle the case where no image URL is provided
            console.log("No image URL provided.");
        }