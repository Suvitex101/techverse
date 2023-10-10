function toggleFaq(element) {
	var faqContent = element.parentNode.querySelector('.faq_p');

	if (faqContent.style.display === 'block') {
		 faqContent.style.display = 'none';
	} else {
		 faqContent.style.display = 'block';
	}
}