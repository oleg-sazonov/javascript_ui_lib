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

// $('.wrap').html(`
// 	<div class="dropdown">
// 		<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown Button</button>
// 		<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
// 			<a href="#" class="dropdown-item">Action</a>
// 			<a href="#" class="dropdown-item">Action #2</a>
// 			<a href="#" class="dropdown-item">Action #3</a>
// 		</div>
// 	</div>
// `);

// $('.dropdown-toggle').dropdown();

