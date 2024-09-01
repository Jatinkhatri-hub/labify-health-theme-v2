$(document).ready(function() {
   
  setInterval(function(){ 
  console.log("asdasd"); 
  $(".sls-option-container:nth-child(3) .seal-row .sls-selling-plan-group-first-line .sls-selling-plan-group-name").html("Quarterly");
  $(".sls-option-container:nth-child(4) .seal-row .sls-selling-plan-group-first-line .sls-selling-plan-group-name").html("Semi Annual");
     }, 1000); 
setTimeout(function() {
$('.related-products-slider').slick({
slidesToShow: 2,
slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

});
}, 1000); // Change the delay time (in milliseconds) as needed

    setTimeout(function() {
   jQuery('.twitter-feed #eapps-twitter-feed-1 a').last().removeAttr('style').css('display', 'none');
  }, 1000);
 setTimeout(function() {

  }, 3000);
    $(".js-example-placeholder-single").select2({
    placeholder: "Select a state"
  });
  
// });
// $(document).ready(function () {
//   $(".accordion-li").click(function () {
//     $(this).toggleClass("active").next(".answer").slideToggle().parent().siblings().find(".answer").slideUp().prev().removeClass("active");
//   });
// });

});

function getPlateFormName(){
  let OSName;
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
  return OSName;
}

function getBrowserName(){
  let browserName;
  let platFormName = getPlateFormName();
  if ((navigator.userAgent.indexOf("OPR")) != -1) {
    browserName = "Opera";
  }else if(navigator.userAgent.indexOf("Edg") != -1){
    browserName = "MicrosoftEdge";
  }
  else if(navigator.userAgent.indexOf("MSIE") != -1){
    browserName = "MicrosoftInternetExplorer";
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1){
    browserName = "Chrome";
  }
  else if(navigator.userAgent.indexOf("Safari") != -1){
    browserName = "Safari";
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1){
    browserName = "Firefox";
  }
  return `${platFormName}-${browserName}`;
}


jQuery(document).ready(function(){
  let browserName = getBrowserName();
  jQuery("body").addClass(browserName);
});
$(document).ready(function() {
  var $slider = $(".testimonials-slider");

  $slider.slick({
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  $('body').on('click', '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {
  if ($('#agree').is(':checked')) {
    $(this).submit();
  }
  else {
    alert("You must agree with the terms and conditions of sales to check out.");
    return false;
  }
   });
});

jQuery(document).ready(function () {
 
  setTimeout(() => {
   // jQuery(".sls-option-container:first .seal-row .sls-label-container.seal-col .sls-selling-plan-group-first-line label").html("One Time"); 
    setMaxHeight(jQuery('.how-it-work-column .multicolumn-card .multicolumn-card__info'));
  }, 300);

  jQuery('.offers-content  variant-radios fieldset:first-child').find('input[type="radio"]').on('change', function(){
    setTimeout(function(){
      	location.reload();
    }, 100)
  });
  
});

function setMaxHeight(boxElements){
  var maxHeightArray = [];
  
  boxElements.each(function( index, ele ) {
    maxHeightArray.push(ele.clientHeight);
  });

  let maxHeight = Math.max(...maxHeightArray);
  boxElements.each(function( index, ele ) {
    ele.style.height = `${maxHeight}px`;
  });
}
    function validateDate() {
        var dobInput = document.getElementById('dateofbirth');
        var dobError = document.getElementById('dateofbirth-error');
        
        // Get today's date
        var today = new Date();
        var selectedDate = new Date(dobInput.value);

        // Check if the input is empty or not a valid date
        if (!dobInput.value || isNaN(selectedDate.getTime())) {
            dobError.textContent = 'Please enter a valid date.';
            dobInput.setCustomValidity('Invalid date');
        } else if (selectedDate > today) {
            dobError.textContent = 'Please select a date in the past.';
            dobInput.setCustomValidity('Future date not allowed');
        } else {
            dobError.textContent = '';
            dobInput.setCustomValidity('');
        }
    }

    // Attach the validation function to the input's onchange event
    document.getElementById('dateofbirth').addEventListener('change', validateDate);

