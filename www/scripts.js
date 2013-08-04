// minimize header
$(document).ready(function() {
	$('#header').slideUp();
	
	var slides = ['recent', 'factions', 'background', 'notes'],
		l = slides.length;
	console.log(slides, l);
	for (var i = 0; i < l; i++) {
		console.log(slides[i]);
		$('#'+slides[i]+' h2').click(function() {
			$('#'+slides[i]+' p').toggle('slow');
		});
	}
});