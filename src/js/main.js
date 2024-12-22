'use strict';

import './lib/lib';

$('#first').click(() => {
	$('.w-500px').eq(0).fadeOutDown(900);
});

$('[data-count="second"]').click(() => {
	$('.w-500px').eq(1).fadeOut(900);
});

$('button').eq(2).click(() => {
	$('.w-500px').fadeOut(900);
});