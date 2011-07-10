$ = jQuery

$.fn.glitterGallery = (fadeMilliseconds = 1000, waitMilliseconds = 2000, intervalMilliseconds = 1000) ->
	images = this
	imageCount = images.length

	doFade = () ->
		posToFade = parseInt(Math.random() * imageCount)
		imgToFade = $(images[posToFade])
		if imgToFade.data('inProgress') == true
			setTimeout doFade, 1
		else
			imgToFade.data 'inProgress', true

			imgToFade.animate { opacity: 0 }, fadeMilliseconds, () ->
				fadeIn = () ->
					imgToFade.animate { opacity: 1 }, fadeMilliseconds, () ->
						imgToFade.data 'inProgress', false
				setTimeout fadeIn, waitMilliseconds
			setTimeout doFade, intervalMilliseconds
	
	doFade()