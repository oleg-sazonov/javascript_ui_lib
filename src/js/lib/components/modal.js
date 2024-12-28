'use strict';

import $ from '../core';

$.prototype.modal = function() {
	for (let i = 0; i < this.length; i++) {
		const target = this[i].getAttribute('data-target');
		$(this[i]).click((e) => {
			e.preventDefault();
			$(target).fadeIn(500);
			document.body.style.overflow = 'hidden';
		});
	}

	const closeElements = document.querySelectorAll('[data-close]');
	closeElements.forEach(elem => {
		$(elem).click(() => {
			$('.modal').fadeOut(500);	
			document.body.style.overflow = '';
		});
	});

	$('.modal').click(e => {
		if (e.target.classList.contains('modal')) {
			$('.modal').fadeOut(500);	
			document.body.style.overflow = '';
		}
	});
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal	= function({text, btns} = {}) {
	const { count, settings } = btns;

	for (let i = 0; i < this.length; i++) {
		let modal = document.createElement('div');
		modal.classList.add('modal');
		// get 'id'-value from current card
		modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); 

		// btns = {count: num, settings: [[text, classNames=[], close, cb]]}
		const buttons = [];
		for (let j = 0; j < count; j++) {
			let btn = document.createElement('button');
			btn.classList.add('btn', ...settings[j][1]); 
			btn.textContent = settings[j][0];
			if (settings[j][2]) {
				btn.setAttribute('data-close', 'true');
			}
			if (settings[j][3] && typeof(settings[j][3]) === 'function') {
				btn.addEventListener('click', settings[j][3]);
			}

			buttons.push(btn);
		}

		modal.innerHTML = `
			<div class="modal-dialog">
				<div class="modal-content">
					<button class="close" data-close>
						<span>&times;</span>
					</button>
					<div class="modal-header">
						<h4 class="modal-title">
							${text.title}
						</h4>
					</div>
					<div class="modal-body">
						${text.body}
					</div>
					<div class="modal-footer">

					</div>
				</div>
			</div>
		`;

		modal.querySelector('.modal-footer').append(...buttons);
		document.body.append(modal);
		$(this[i]).modal();
		$(this[0].getAttribute('data-target')).fadeIn(500);
	}
};