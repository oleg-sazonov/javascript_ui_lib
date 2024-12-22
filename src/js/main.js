'use strict';

import './lib/lib';

$('#first').click(() => {
	$('.w-500px').eq(0).fadeToggle(900);
});

$('[data-count="second"]').click(() => {
	$('.w-500px').eq(1).fadeToggle(900);
});

$('button').eq(2).click(() => {
	$('.w-500px').fadeToggle(900);
});