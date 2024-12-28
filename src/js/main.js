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

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a temporibus perspiciatis quos vero, labore sed aspernatur aut est eaque blanditiis officia repudiandae culpa vel, nemo quis quisquam soluta nesciunt?'
	},
	btns: {
		count: 2,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Data has saved');	
				}
			]
		]
	}
}));

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

