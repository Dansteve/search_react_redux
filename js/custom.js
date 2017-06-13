     var changeIcon = function () {
         var searchTxt = document.getElementById("searchTxt").value;
         if (searchTxt) {
             document.getElementById("icons").classList.add('fa-close');
             document.getElementById("icons").classList.remove('fa-search');
             document.getElementById("searchBox").classList.remove('before-search');
             document.getElementById("searchBox").classList.add('after-search');
             console.log('change');
         } else {
             document.getElementById("icons").classList.remove('fa-close');
             document.getElementById("icons").classList.add('fa-search');
             document.getElementById("searchBox").classList.remove('after-search');
             document.getElementById("searchBox").classList.add('before-search');
         }
     }

     var resetSearch = function () {
         document.getElementById("searchTxt").value = '';
         document.getElementById("icons").classList.remove('fa-close');
         document.getElementById("icons").classList.add('fa-search');
         document.getElementById("icons").classList.add('fa-search');
         document.getElementById("searchBox").classList.remove('after-search');
         document.getElementById("searchBox").classList.add('before-search');
     };


$(document).ready(function(){
    var name = $("#searchTxt").val();
                      
});