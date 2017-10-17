//lightGallery function
$(document).ready(function() {
    $("#lightgallery").lightGallery( {
      getCaptionFromTitleOrAlt: true,
      download: false,
      counter: false,
      toogleThumb: false,
      showThumbByDefault: false,
      fullScreen: false,
      width: '60%'
    });
});


//search function
function searchBox() {
    // Variable declaration
    var input, filter, a, img;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    a = document.getElementsByClassName('picture');

    // Loop through all a(picture) items, and hide a(pictures) who don't match the search criteria
    for (var i = 0; i < a.length; i++) {
        img = a[i].getElementsByTagName("img")[0];
        if (img.alt.toUpperCase().indexOf(filter) > -1 || img.title.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
