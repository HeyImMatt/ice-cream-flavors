//webpage that will list flavors
//create javascript loop of flavors
//use JS to insert flavors into HTML from array

$(document).ready(function() {
  const flavors = ['cookies and cream', 'vanilla', 'chocolate', 'rocky road', 'green tea']
  flavors.forEach(function(flavor){
    $('#sentence').append(`<li>${flavor}</li>`);
  });
});