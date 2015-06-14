## Warning: You probably want to use [this version](https://github.com/rejas/imagelightbox) instead. It's better and is actively maintained. See [this discussion](https://github.com/mrchimp/imagelightbox/issues/3) for more details. ##

imagelightbox
=============

Simple lightbox for images

Based on `ImageLightbox.js` by Osvaldas Valutis - http://osvaldas.info/image-lightbox-responsive-touch-friendly

MIT License

Requires
========

  * jQuery

Usage
=====

	<link rel="stylesheet" type="text/css" href="imagelightbox.min.css">
	
    <a href="big_image_1.jpg" class="lightbox"><img src="thumbnail_image_1.jpg"></a>
    <a href="big_image_2.jpg" class="lightbox"><img src="thumbnail_image_2.jpg"></a>

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="imagelightbox.min.js"></script>

    $('.lightbox').imagelightbox();
