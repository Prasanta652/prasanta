// JavaScript Document

	document.addEventListener("contextmenu", (event)=> event.preventDefault())
	$(document).ready(function(){
		
		var userinput = document.querySelector(".searchUserInput");
		var searchFileds = document.querySelector(".searchFileds");
		if (userinput) {
			userinput.addEventListener("mouseenter", function(){			
				searchFileds.style.display ="block";
			})		
			userinput.addEventListener("mouseleave", function(){
				setTimeout(function(){
					searchFileds.style.display ="none";
				},1000)
			})
		}

		$('input[type=password], input.captcha').bind('copy paste', function (e) {
		   e.preventDefault();
		});
		
		$('.drawermenu').drawermenu( {
			speed: 300,
			position: 'left'
		});
		
		
		if ($(window).outerWidth() < 991) {
			$('#sidebar').slideReveal({
				trigger: $("#trigger"),
				push: false,
				top:0,
				width:225,
				overlay: false
			});
		}
		
		//if ($(window).outerWidth() < 991) {
			$('#sidebar_inner').slideReveal({
				trigger: $("#trigger_inner"),
				push: false,
				top:0,
				width:225,
				overlay: false
			});
		//}
		
	})

if(localStorage.getItem("showregAddress")) {
		var addressTab = document.getElementById("address-tab");
		if (addressTab) {
			addressTab.click();
			addressTab.classList.remove("disable");
		}
		
	}
 
if (localStorage.getItem("keyOfficial")){
		document.getElementById("address-tab").classList.remove("disable");
		document.getElementById("officialDetails-tab").click();
		document.getElementById("officialDetails-tab").classList.remove("disable");
	}

if (localStorage.getItem("cardDetails")){
		document.getElementById("cardDetails-tab").click();
		document.getElementById("address-tab").classList.remove("disable");
		document.getElementById("officialDetails-tab").classList.remove("disable");
		document.getElementById("cardDetails-tab").classList.remove("disable");
		document.getElementById("uploadDocuments-tab").classList.remove("disable");
	}

function showregAddress() {	
	
//	if(localStorage.getItem("showregAddress")) {
//		document.getElementById("address-tab").click();
//		document.getElementById("address-tab").classList.remove("disable");
//	}
//	else {	
			var ret = false;
	
			//console.log(ret);
	
        	if (document.applicationForm.customerType.value == "-1") {
        		document.getElementById("customerType_error").innerHTML="This information is required";
				document.applicationForm.customerType.focus();
        		return ret;
        	} 
        	else {
        		document.getElementById("customerType_error").innerHTML="";
        	}
	
        	if (document.applicationForm.zonalOffice.value == "-1") {
        		document.getElementById("zonalOffice_error").innerHTML="This information is required";
				document.applicationForm.zonalOffice.focus();
        		return ret;
        	}         	
        	else {
        		document.getElementById("zonalOffice_error").innerHTML="";
        	}
	
        	if (document.applicationForm.applicationDate.value == "") {
        		document.getElementById("applicationDate_error").innerHTML="This information is required";
				document.applicationForm.applicationDate.focus();
        		return ret;
        	}         	
        	else {
        		document.getElementById("applicationDate_error").innerHTML="";
        	}
        	
        	if(document.applicationForm.salesArea.value == ""){
        		document.getElementById("salesArea_error").innerHTML="This information is required";
				document.applicationForm.salesArea.focus();
        		return ret;	        		
        	}	
        	else {
        			document.getElementById("salesArea_error").innerHTML="";
        		}
	
	
        	if(document.applicationForm.customerSubType.value == "-1"){
        		document.getElementById("customerSubType_error").innerHTML="This information is required";
				document.applicationForm.customerSubType.focus();
        		return ret;	        		
        	}		
        	else {
        			document.getElementById("customerSubType_error").innerHTML="";
        		}
        	/*else {
        		y = document.applicationForm.mobileno.value;
        		if((y.charAt(0)!="9") && (y.charAt(0)!="8") && (y.charAt(0)!="7") && (y.charAt(0)!="6"))
        		{
        			document.getElementById("phone_error").innerHTML="Mobile Number should start with 6, 7, 8, 9";
        			document.applicationForm.mobileno.focus();
        			return false
        		}
        		else if (y.length<10)
        		{
        			document.getElementById("phone_error").innerHTML="Invalid phone number (e.g.: 9999990000)";
        			document.applicationForm.mobileno.focus();
        			return false;
        		}
        		
        			else {
        				document.getElementById("phone_error").innerHTML="";
        			}
        	}*/
        	
        	 if (document.applicationForm.regionalOffice.value == "-1") {
        		document.getElementById("regionalOffice_error").innerHTML="This information is required";
				 document.applicationForm.regionalOffice.focus();
        		return ret;
        	} 
			else {
					document.getElementById("regionalOffice_error").innerHTML="";
				}
	
	
        	 if (document.applicationForm.individualName.value == "") {
        		document.getElementById("individualName_error").innerHTML="This information is required";
				 document.applicationForm.individualName.focus();
        		return ret;
        	} 
			else {
					document.getElementById("individualName_error").innerHTML="";
				}
	
	
	
        	 if (document.applicationForm.nameOnCard.value == "") {
        		document.getElementById("nameOnCard_error").innerHTML="This information is required";
				 document.applicationForm.nameOnCard.focus();
        		return ret;
        	} 
        	else {
        			document.getElementById("nameOnCard_error").innerHTML="";
        		}
	
	
        	 /*if (document.applicationForm.pincode.value == "") {
        		document.getElementById("picode_error").innerHTML="This information is required";
        		return (false);
        	} 
        	else {
        		var pin = document.applicationForm.pincode.value;
        		 if (pin.length<6)
        		{
        			document.getElementById("picode_error").innerHTML="Invalid Pincode, Must be six digits";
        			document.applicationForm.pincode.focus();
        			return false;
        		}
        		else {
        				document.getElementById("picode_error").innerHTML="";
        			}
        	}*/
        	 if (document.applicationForm.typeOfbusiness.value == "-1") {
        		document.getElementById("typeOfbusiness_error").innerHTML="This information is required";
				 document.applicationForm.typeOfbusiness.focus();
        		return ret;
        	} 
        		else {
        				document.getElementById("typeOfbusiness_error").innerHTML="";
        			}
	
	
        	 if (document.applicationForm.incomeTaxPan.value == "") {
        		document.getElementById("incomeTaxPan_error").innerHTML="This information is required";
				 document.applicationForm.incomeTaxPan.focus();
        		 return ret;			
        	}
        	else {
				document.getElementById("incomeTaxPan_error").innerHTML="";
				ret = true
        	}
        	
        	/*if (!document.applicationForm.tc.checked) {
        		//toast("true");
        		document.getElementById("tc_error").innerHTML="Must Agree to Terms and Conditions";
        		return (false);
        	} 
    		else {
    			// toast("false");
    				document.getElementById("tc_error").innerHTML="";
    			}*/
	
			//document.applicationForm.submit();			
			document.getElementById("address-tab").click();
			document.getElementById("address-tab").classList.remove("disable");
			localStorage.setItem("showregAddress", true)
			return ret;
		//}
	}

function showBasicInfo() {
	document.getElementById("basicInfo-tab").click();
}
function showregAddressInfo() {
	document.getElementById("address-tab").click();
}
function showkeyOfficialInfo() {
	document.getElementById("officialDetails-tab").click();
}
function showCardInfo() {
	document.getElementById("cardDetails-tab").click();
}
function showUploadDocument() {
	document.getElementById("uploadDocuments-tab").click();
}

var sameAscheck = document.getElementById("sameAddressCheck");
var sameas = false;
if(sameAscheck){
 sameAscheck.addEventListener("change", function(){
	 var permanent_add = document.querySelector("#permanent_add");
	 
		if(document.getElementById("sameAddressCheck").checked == true) {	
			
			permanent_add.querySelectorAll("input, select").forEach(function(i){
				 i.setAttribute("disabled" , true);
			})
			sameas = true
					  
	 	}
	 else {
			permanent_add.querySelectorAll("input, select").forEach(function(i){
				 i.removeAttribute("disabled" , true);
			})
		 sameas = false
	 }
	})
}
function showOfficialDetails() {	
		
	//if (localStorage.getItem("keyOfficial")){
//		console.log("ask");
//			document.getElementById("officialDetails-tab").click();
//			document.getElementById("officialDetails-tab").classList.remove("disable");
//	}
//	
//	else {
		console.log("Dont ask")
		if (document.applicationForm.comm_address1.value == "") {
			document.getElementById("comm_address1_error").innerHTML="This information is required";
			document.applicationForm.comm_address1.focus();
			return false;
		} 
		else {
			document.getElementById("comm_address1_error").innerHTML="";
		}
	
		if (document.applicationForm.comm_city.value == "") {
			document.getElementById("comm_city_error").innerHTML="This information is required";
			document.applicationForm.comm_city.focus();
			return false;
		} 
		else {
			document.getElementById("comm_city_error").innerHTML="";
		}
	
	 if (document.applicationForm.comm_pincode.value == "") {
        		document.getElementById("comm_pincode_error").innerHTML="This information is required";
		 		document.applicationForm.comm_pincode.focus()
        		return (false);
        	} 
		else {
			var pin = document.applicationForm.comm_pincode.value;
			 if (pin.length<6)
			{
				document.getElementById("comm_pincode_error").innerHTML="Invalid Pincode, Must be six digits";
				document.applicationForm.comm_pincode.focus();
				return false;
			}
			else {
					document.getElementById("comm_pincode_error").innerHTML="";
				}
		}
	
		if (document.applicationForm.comm_states.value == "-1") {
			document.getElementById("comm_states_error").innerHTML="This information is required";
			document.applicationForm.comm_states.focus();
			return false;
		} 
		else {
			document.getElementById("comm_states_error").innerHTML="";
		}
	
		if (document.applicationForm.comm_district.value == "-1") {
			document.getElementById("comm_district_error").innerHTML="This information is required";
			document.applicationForm.comm_district.focus();
			return false;
		} 
		else {
			document.getElementById("comm_district_error").innerHTML="";
		}
	
	
		if (document.applicationForm.comm_dial_code.value == "") {
			document.getElementById("comm_officePhone_error").innerHTML="Dial Code is required";
			document.applicationForm.comm_dial_code.focus();
			return false;
		} 
		else if(document.applicationForm.comm_officePhone.value == "") {
			document.getElementById("comm_officePhone_error").innerHTML="Phone (Office) is required";
			document.applicationForm.comm_officePhone.focus();
			return false;
		}
		else {
			document.getElementById("comm_officePhone_error").innerHTML="";
		}
	
		if(document.applicationForm.comm_mobileNumber.value == ""){
        		document.getElementById("comm_mobileNumber_error").innerHTML="This information is required";
				document.applicationForm.comm_mobileNumber.focus();
        		return false;	
        		
        	}	
        	else {
        		y = document.applicationForm.comm_mobileNumber.value;
        		if((y.charAt(0)!="9") && (y.charAt(0)!="8") && (y.charAt(0)!="7") && (y.charAt(0)!="6"))
        		{
        			document.getElementById("comm_mobileNumber_error").innerHTML="Mobile Number should start with 6, 7, 8, 9";
        			document.applicationForm.comm_mobileNumber.focus();
        			return false
        		}
        		else if (y.length<10)
        		{
        			document.getElementById("comm_mobileNumber_error").innerHTML="Invalid phone number (e.g.: 9999990000)";
        			document.applicationForm.comm_mobileNumber.focus();
        			return false;
        		}
        		
        			else {
        				document.getElementById("comm_mobileNumber_error").innerHTML="";
        			}
        	}
	
		if (document.applicationForm.comm_email.value == "") {
			document.getElementById("comm_email_error").innerHTML="This information is required";
			document.applicationForm.comm_email.focus();
			return (false);	
		}
		else {
			var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if(document.applicationForm.comm_email.value.match(mailformat)){
				document.getElementById("comm_email_error").innerHTML="";
				//return true
			}
			else {
				document.getElementById("comm_email_error").innerHTML="Invalid email id (e.g.: abc@gmail.com)";
				document.applicationForm.comm_email.focus();
				return (false);	
			}
		}
	
		if (sameas == false) {
			
			if (document.applicationForm.perma_address1.value == "") {
				document.getElementById("perma_address1_error").innerHTML="This information is required";
				document.applicationForm.perma_address1.focus();
				return false;
			} 
			else {
				document.getElementById("perma_address1_error").innerHTML="";
			}
			
			
			if (document.applicationForm.perma_city.value == "") {
				document.getElementById("perma_city_error").innerHTML="This information is required";
				document.applicationForm.perma_city.focus();
				return false;
			} 
			else {
				document.getElementById("perma_city_error").innerHTML="";
			}
			
			
			if (document.applicationForm.perma_pincode.value == "") {
        		document.getElementById("perma_pincode_error").innerHTML="This information is required";
		 		document.applicationForm.perma_pincode.focus()
        		return (false);
        	} 
			else {
				var pin = document.applicationForm.perma_pincode.value;
				 if (pin.length<6)
				{
					document.getElementById("perma_pincode_error").innerHTML="Invalid Pincode, Must be six digits";
					document.applicationForm.perma_pincode.focus();
					return false;
				}
				else {
						document.getElementById("perma_pincode_error").innerHTML="";
					}
			}
			
			
			
			if (document.applicationForm.perma_state.value == "-1") {
				document.getElementById("perma_state_error").innerHTML="This information is required";
				document.applicationForm.perma_state.focus();
				return false;
			} 
			else {
				document.getElementById("perma_state_error").innerHTML="";
			}

			if (document.applicationForm.perma_district.value == "-1") {
				document.getElementById("perma_district_error").innerHTML="This information is required";
				document.applicationForm.perma_district.focus();
				return false;
			} 
			else {
				document.getElementById("perma_district_error").innerHTML="";
			}
			
			
			if (document.applicationForm.perma_dial_code.value == "") {
				document.getElementById("perma_officePhone_error").innerHTML="Dial Code is required";
				document.applicationForm.perma_dial_code.focus();
				return false;
			} 
			else if(document.applicationForm.perma_officePhone.value == "") {
				document.getElementById("perma_officePhone_error").innerHTML="Phone (Home) is required";
				document.applicationForm.perma_officePhone.focus();
				return false;
			}
			else {
				document.getElementById("perma_officePhone_error").innerHTML="";
				//console.log("dfgdf");				
				//document.getElementById("officialDetails-tab").click();
				//document.getElementById("officialDetails-tab").classList.remove("disable");
				return true;
			}
			
			
		}
		else {

			permanent_add.querySelectorAll(".error").forEach(function(i){
				 i.innerHTML='';
			})
			
			
			//$("#officialDetails-tab").click();
		}
	
		document.getElementById("officialDetails-tab").click();
		document.getElementById("officialDetails-tab").classList.remove("disable");
		localStorage.setItem("keyOfficial", true)
		localStorage.removeItem("showregAddress")
		
	//}	
		
}

function showCardDetails() {	
		
	//if (localStorage.getItem("cardDetails")){
		//console.log("ask");
	//	document.getElementById("cardDetails-tab").click();
	//	document.getElementById("cardDetails-tab").classList.remove("disable");
	//}
	
	//else {
		//console.log("Dont ask")
		if (document.applicationForm.officialTitle.value == "-1") {
			document.getElementById("officialTitle_error").innerHTML="This information is required";
			document.applicationForm.officialTitle.focus();
			return false;
		} 
		else {
			document.getElementById("officialTitle_error").innerHTML="";
		}	

		if (document.applicationForm.official_fName.value == "") {
			document.getElementById("official_fName_error").innerHTML="This information is required";
			document.applicationForm.official_fName.focus();
			return false;
		} 
		else {
			document.getElementById("official_fName_error").innerHTML="";
		}

		if (document.applicationForm.official_designation.value == "") {
			document.getElementById("official_designation_error").innerHTML="This information is required";
			document.applicationForm.official_designation.focus();
			return false;
		} 
		else {
			document.getElementById("official_designation_error").innerHTML="";
		}
	
	

		if(document.applicationForm.official_mobile.value == ""){
        		document.getElementById("official_mobile_error").innerHTML="This information is required";
				document.applicationForm.official_mobile.focus();
        		return false;	
        		
        	}	
        	else {
        		y = document.applicationForm.official_mobile.value;
        		if((y.charAt(0)!="9") && (y.charAt(0)!="8") && (y.charAt(0)!="7") && (y.charAt(0)!="6"))
        		{
        			document.getElementById("official_mobile_error").innerHTML="Mobile Number should start with 6, 7, 8, 9";
        			document.applicationForm.official_mobile.focus();
        			return false
        		}
        		else if (y.length<10)
        		{
        			document.getElementById("official_mobile_error").innerHTML="Invalid phone number (e.g.: 9999990000)";
        			document.applicationForm.official_mobile.focus();
        			return false;
        		}
        		
        			else {
        				document.getElementById("official_mobile_error").innerHTML="";
        			}
        	}
	
		
	
	
		document.getElementById("cardDetails-tab").click();
		document.getElementById("cardDetails-tab").classList.remove("disable");
		document.getElementById("uploadDocuments-tab").classList.remove("disable");
		localStorage.setItem("cardDetails", true)
		localStorage.removeItem("keyOfficial")
		
	//}	
	
	
		
}


function submitForm(){
	
	document.applicationForm.submit();
	localStorage.clear();
}

function playVideo(e){
	$('video').trigger('pause');
	$('.play_btn').fadeIn();
	$(e).fadeOut();
	$(e).next('video').trigger('play');
}

 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a:not(a[href='#'])"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
var count = 0;
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	
	
	if(count > 0) {
		$('html, body').stop().animate({ 
			  scrollTop: offsetTop - 180
		  }, 850);
		
	}
	else {
		$('html, body').stop().animate({ 
			  scrollTop: offsetTop - 300
		  }, 850);
	}
	count++;
	
  
  e.preventDefault();
});

$(window).on("scroll", function(){
	if($(window).scrollTop()> 50){
		$("nav").addClass("header_sticky")
	}
	else {
		$("nav").removeClass("header_sticky")
	}		
	
	if($(window).scrollTop()> 350){
		$("#mainNav").addClass("scroll_sticky")
	}
	else {
		$("#mainNav").removeClass("scroll_sticky")
	}		
	
	//console.log(offsetTop);
	//$(".scroll_spy a[href='"+offsetTop+"']").addClass("active");
})

$('.brand-slider').owlCarousel({
		items:5,
		loop:true,
		margin:10,
		merge:true,
		autoplayTimeout:3000,
		autoplaySpeed:700,
		autoplay:true,
		responsive:{
			320:{
				mergeFit:true,
				items:2,
			},
			480:{
				mergeFit:true,
				items:3,
			},
			678:{
				mergeFit:true,
				items:4,
			},
			1000:{
				mergeFit:false
			}
		}
	});
$('.aids-slider').owlCarousel({
		items:3,
		loop:true,
		margin:10,
		merge:true,
		autoplayTimeout:3000,
		autoplaySpeed:700,
		autoplay:true,
		dots:false,
		responsive:{
			320:{
				mergeFit:true,
				items:1,
			},
			480:{
				mergeFit:true,
				items:1,
			},
			678:{
				mergeFit:true,
				items:3,
			},
			1000:{
				mergeFit:false
			}
		}
	});		
$('.brand-slider33').owlCarousel({
		items:6,
		loop:true,
		margin:10,
		merge:true,
		autoplayTimeout:3000,
		autoplaySpeed:700,
		autoplay:true,
		responsive:{
			320:{
				mergeFit:true,
				items:3,
			},
			480:{
				mergeFit:true,
				items:3,
			},
			678:{
				mergeFit:true,
				items:4,
			},
			1000:{
				mergeFit:false
			}
		}
	});
$('.speciality_slider').owlCarousel({
			items:3,
			loop:false,
			margin:10,
			merge:true,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			dots:false,
			nav:true,
			navText: ["<",">"],
			autoplay:true,
			responsive:{
				320:{
					mergeFit:true,
					items:1,
					margin:0,
				},
				480:{
					mergeFit:true,
					items:1,
				},
				678:{
					mergeFit:true,
					items:2,
				},
				1000:{
					mergeFit:false
				}
			}
		});
$('.article_slider').owlCarousel({
			items:3,
			loop:false,
			margin:10,
			merge:true,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			dots:false,
			nav:true,
			navText: ["<",">"],
			autoplay:true,
			responsive:{
				320:{
					mergeFit:true,
					items:1,
					margin:10,
				},
				480:{
					mergeFit:true,
					items:1,
				},
				678:{
					mergeFit:true,
					items:2,
				},
				1000:{
					mergeFit:false
				}
			}
		});
$('.testimonial_slider').owlCarousel({
			items:3,
			loop:false,
			margin:10,
			merge:true,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			dots:false,
			nav:true,
			navText: ["<",">"],
			autoplay:false,
			responsive:{
				320:{
					mergeFit:true,
					items:1,
					margin:0,
				},
				480:{
					mergeFit:true,
					items:1,
				},
				678:{
					mergeFit:true,
					items:2,
				},
				1000:{
					mergeFit:false
				}
			}
		});
$('.condition_slider').owlCarousel({
			items:5,
			loop:false,
			margin:2,
			merge:true,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			dots:false,
			nav:true,
			navText: ["<",">"],
			autoplay:false,
			responsive:{
				320:{
					mergeFit:true,
					items:1,
					margin:0,
				},
				480:{
					mergeFit:true,
					items:3,
				},
				678:{
					mergeFit:true,
					items:4,
				},
				1000:{
					mergeFit:false
				}
			}
		});	
$('.main-slider').owlCarousel({
			items:1,
			loop:true,
			margin:0,
			merge:true,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			autoplay:false,
			dots:true,
			nav:false,
			navText: ["<img src='assets/images/arrow_left.png' class='img-fluid'>","<img src='assets/images/arrow_right.png' class='img-fluid'>"]
	});
$('.analytics-slider').owlCarousel({
			items:1,
			loop:true,
			margin:10,
			merge:true,
			nav:false,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			autoplay:true,
			responsive:{				
				600:{
					items:1,
					margin:10,
				},				
				0:{
					items:1,
					mergeFit:false
				}
			}		
	});
$('.live_on_slider').owlCarousel({
			items:2,
			loop:true,
			margin:10,
			merge:true,
			nav:false,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			autoplay:true,
			responsive:{				
				600:{
					items:2,
					margin:10,
				},				
				0:{
					items:1,
					mergeFit:false
				}
			}		
	});
$('.reviews-slider').owlCarousel({
			items:1,
			loop:true,
			margin:10,
			merge:true,
			nav:false,
			autoplayTimeout:3000,
			autoplaySpeed:700,
			autoplay:true,
			responsive:{				
				0:{
					items:1,
					margin:0,
				},
				540:{
					items:1,
					margin:0,
				},				
				1000:{
					items:1,
					nav:false,
					margin:10,
					mergeFit:false
				}
			}		
	});
				
		$("input[name=prob_faced]").on("change", function(){
			if ($("input[name=prob_faced]:checked").val()=='others'){
				$("#other_problem").fadeIn();
			}
			else {
				$("#other_problem").fadeOut();
			}
		 })

jQuery(document).ready(function($){
		$('.question').on('click', function(){
			if($(this).hasClass('active')){
				$('.question').removeClass('active');
				$('.arrow').removeClass('arrow-active');
				$('.answer').slideUp();
			}
			else{
				$('.question').removeClass('active');
				$('.arrow').removeClass('arrow-active');
				$('.answer').slideUp();
				$(this).addClass('active');
				$(this).children('.arrow').addClass('arrow-active');
				$(this).children('.answer').slideToggle('slow');
			}
		});
	});


$(document).ready(function(){
	


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("search_filter_btn");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
	})	

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//
//$(".top_nav li").on('click', 'a[href^="#"]:not(.primary_btn)', function (event) {
//	$(".top_nav li").removeClass("active");
//	$(this).parent("li").addClass("active")
//	//console.log(event.target.attributes.href);
//    event.preventDefault();
//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top - 80
//    }, 1000);
//	$("#navbar-collapse").collapse('hide');
//});


function Validate(){
	
	 if (document.register_form.username.value == "") {
		document.getElementById("username_error").innerHTML="This information is required";
		 document.register_form.username.focus;
		return (false);
	} 
	else {
		document.getElementById("username_error").innerHTML="";
	}
	
	 if (document.register_form.password.value == "") {
		document.getElementById("pass_error").innerHTML="This information is required";
		 document.register_form.password.focus;
		return (false);
	} 
	else {
		document.getElementById("pass_error").innerHTML="";
	}

	 if (document.register_form.captcha.value == "") {
		document.getElementById("captcha_error").innerHTML="This information is required";
		 document.register_form.captcha.focus;
		return (false);
	} 
	else {
		document.getElementById("captcha_error").innerHTML="";
	}

}

