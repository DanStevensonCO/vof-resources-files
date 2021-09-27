// When page has loaded, add in header/footer HTML above/below the form container
// Add formTitle variable specified in the scripting tab
function setPageHeaderAndFooter(formTitle){
	var body = document.getElementsByTagName("body")[0];
	
	body.insertAdjacentHTML('afterbegin', '<header role="banner"> <div class="scc_wrap" id="top"> <div class="scc_logo"> <a href="https://www.sheffield.gov.uk" title="Back to homepage"> <img src="https://www.sheffield.gov.uk/etc/designs/sheffield/clientlib-site/images/logos/white.png" alt=""> </a> </div> </div> <div id="form-title-outer"><div id="form-title-inner"><h1 id="form-title"></h1></div></div></header>');
	body.insertAdjacentHTML('beforeend', '<footer class="scc_footer" role="contentinfo"> <nav role="navigation" class="scc_az-links"> <div class="scc_wrap"> <h2><a href="https://www.sheffield.gov.uk/utilities/a-z">A–Z of services</a></h2> <ul class="scc_h2"> <li><a href="/content/sheffield/utilities/a-z.html#a"><span>Services</span> A</a></li> <li><a href="/content/sheffield/utilities/a-z.html#b"><span>Services</span> B</a></li> <li><a href="/content/sheffield/utilities/a-z.html#c"><span>Services</span> C</a></li> <li><a href="/content/sheffield/utilities/a-z.html#d"><span>Services</span> D</a></li> <li><a href="/content/sheffield/utilities/a-z.html#e"><span>Services</span> E</a></li> <li><a href="/content/sheffield/utilities/a-z.html#f"><span>Services</span> F</a></li> <li><a href="/content/sheffield/utilities/a-z.html#g"><span>Services</span> G</a></li> <li><a href="/content/sheffield/utilities/a-z.html#h"><span>Services</span> H</a></li> <li><a href="/content/sheffield/utilities/a-z.html#i"><span>Services</span> I</a></li> <li><a href="/content/sheffield/utilities/a-z.html#j"><span>Services</span> J</a></li> <li><a href="/content/sheffield/utilities/a-z.html#k"><span>Services</span> K</a></li> <li><a href="/content/sheffield/utilities/a-z.html#l"><span>Services</span> L</a></li> <li><a href="/content/sheffield/utilities/a-z.html#m"><span>Services</span> M</a></li> <li><a href="/content/sheffield/utilities/a-z.html#n"><span>Services</span> N</a></li> <li><a href="/content/sheffield/utilities/a-z.html#o"><span>Services</span> O</a></li> <li><a href="/content/sheffield/utilities/a-z.html#p"><span>Services</span> P</a></li> <li><a href="/content/sheffield/utilities/a-z.html#q"><span>Services</span> Q</a></li> <li><a href="/content/sheffield/utilities/a-z.html#r"><span>Services</span> R</a></li> <li><a href="/content/sheffield/utilities/a-z.html#s"><span>Services</span> S</a></li> <li><a href="/content/sheffield/utilities/a-z.html#t"><span>Services</span> T</a></li> <li><a href="/content/sheffield/utilities/a-z.html#u"><span>Services</span> U</a></li> <li><a href="/content/sheffield/utilities/a-z.html#v"><span>Services</span> V</a></li> <li><a href="/content/sheffield/utilities/a-z.html#w"><span>Services</span> W</a></li> <li><a href="/content/sheffield/utilities/a-z.html#x"><span>Services</span> X</a></li> <li><a href="/content/sheffield/utilities/a-z.html#y"><span>Services</span> Y</a></li> <li><a href="/content/sheffield/utilities/a-z.html#z"><span>Services</span> Z</a></li> <li><a href="/content/sheffield/utilities/a-z.html#123"><span>Services</span> 123</a></li> </div> </ul> </nav> <div class="scc_wrap" id="scc_footer-content"> <div class="scc_row"> <div class="scc_col" id="legal-links"> <ul> <li><a href="/content/sheffield/home.html">Site Home Page</a></li> <li><a href="/content/sheffield/utilities/footer-links/privacy-notice.html">Privacy notice</a></li> <li><a href="/content/sheffield/utilities/footer-links/cookie-policy.html">Use of cookies</a></li> <li><a href="/content/sheffield/utilities/footer-links/accessibility-statement.html">Accessibility statement</a></li> <li><a href="/content/sheffield/utilities/footer-links/legal-notices.html">Legal notices</a></li> </ul> </div> <div class="scc_col" id="other-links"> <ul> <li><a href="/content/sheffield/home/job-vacancies.html">Jobs &amp; volunteering with Sheffield City Council</a></li> <li><a href="/content/sheffield/home/your-city-council/access-to-information.html">Get access to information</a></li> <li><a href="http://www.welcometosheffield.co.uk/visit/events">Sheffield events</a></li> <li><a href="https://sheffield.citizenspace.com">Have your say – consultations</a></li> <li><a href="http://www.sheffieldnewsroom.co.uk">News &amp; press</a></li> <li><a href="/content/sheffield/utilities/footer-links/advertising.html">Advertising</a></li> <li><a href="/content/sheffield/home/business.html">Business</a></li> </ul> </div> <div class="scc_col" id="social-links"> <ul> <li><a href="https://twitter.com/sheffcouncil?lang=en" class="scc_icon-twitter-after"><span>Twitter</span></a></li> <li><a href="https://www.facebook.com/SheffCityCouncil/" class="scc_icon-facebook-after"><span>Facebook</span></a></li> <li><a href="https://www.youtube.com/user/SheffieldCCouncil" class="scc_icon-youtube-after"><span>YouTube</span></a></li> <li><a href="https://www.instagram.com/sheffieldcitycouncil/" class="scc_icon-instagram-after"><span>Instagram</span></a></li> <li><a href="https://public.govdelivery.com/accounts/UKSHEFFIELD/subscriber/new" class="scc_icon-mail-after"><span>Email alerts</span></a></li> </ul> </div> </div> <div class="scc_info"> <p class="scc_modified">Page last modified on 04 June 2021 1:24PM</p> <p class="scc_copyright">© Copyright Sheffield City Council</p> </div> <a href="#top" id="jump-to-top">Top</a> </div> </footer>');

	document.getElementById('form-title').innerHTML = formTitle;

	//set HTML page title to form title
	document.title = formTitle;
};

// Add functionality for privacy notice accordion
// Function needs to be called from scripting tab
function addPrivacyNoticeAccordionFuntionality(){
	var accordion = document.getElementsByClassName("privacy-accordion")[0];
	var panel = document.getElementsByClassName("privacy-panel")[0];

	accordion.addEventListener("click", function() {
		// Toggle active class
		this.classList.toggle("active")
		
		// Toggle show/hide
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// Address search functionality for "about you" page
function webAddressSearch(response){
	// reset field visibility and values
	KDF.hideWidget('ahtm_address_search_result_error');
	KDF.hideWidget('address_search_result');

	KDF.hideWidget('ahtm_cusfulladdress');
	KDF.setVal('txt_cusfulladdress','');

	KDF.hideWidget('txt_cusaddressnumber');
	KDF.setVal('txt_cusaddressnumber','');
	
	KDF.hideWidget('txt_cusaddressline1');
	KDF.setVal('txt_cusaddressline1','');
	
	KDF.hideWidget('txt_custown');
	KDF.setVal('txt_custown','');
	
	KDF.hideWidget('txt_cuspostcode');
	KDF.setVal('txt_cuspostcode','');
	
	KDF.setVal('txt_cusaddressid','');
	KDF.setVal('txt_cusuprn','');
	KDF.setVal('txt_cusstreetid','');
	KDF.setVal('txt_cususrn','');
	
	// check if address data is returned
	if (response.data.address_search_result.length !== 0){
		// display dropdown with address options
		KDF.showWidget('address_search_result');
	} else {
		// display error and enter address manually fields
		KDF.showWidget('ahtm_address_search_result_error');
		KDF.showWidget('txt_cusaddressnumber');
		KDF.showWidget('txt_cusaddressline1');
		KDF.showWidget('txt_custown');
		KDF.showWidget('txt_cuspostcode');    
	}
}

// Display address textboxes with selected address data when address selected from select box
function webRetrieveAddress(){
	if (KDF.getVal('address_search_result') !== ''){
		KDF.hideWidget('address_search_result');
		KDF.showWidget('ahtm_cusfulladdress');
		KDF.showWidget('txt_cusaddressnumber');
		KDF.showWidget('txt_cusaddressline1');
		KDF.showWidget('txt_custown');
		KDF.showWidget('txt_cuspostcode');
	}
}

// Display empty textboxes when 'enter address manually' button pressed
function enterAddressManually(){ 
	// reset field values and display enter manually fields
	KDF.hideWidget('address_search_result');

	KDF.setVal('txt_cusfulladdress','');
	KDF.hideWidget('ahtm_cusfulladdress');

	KDF.setVal('txt_cusaddressnumber','');
	KDF.showWidget('txt_cusaddressnumber');

	KDF.setVal('txt_cusaddressline1','');
	KDF.showWidget('txt_cusaddressline1');

	KDF.setVal('txt_custown','');
	KDF.showWidget('txt_custown');

	KDF.setVal('txt_cuspostcode','');
	KDF.showWidget('txt_cuspostcode');

	KDF.setVal('txt_cusaddressid','');
	KDF.setVal('txt_cusuprn','');
	KDF.setVal('txt_cusstreetid','');
	KDF.setVal('txt_cususrn','');
}