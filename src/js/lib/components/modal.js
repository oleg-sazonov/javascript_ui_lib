"use strict";

import $ from "../core";

const animateDuration = 400;

$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute("data-target");
        console.log(target);
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(animateDuration);
            document.body.style.overflow = "hidden";
        });

        const closeElements = document.querySelectorAll(
            `${target} [data-close]`
        );
        closeElements.forEach((elem) => {
            $(elem).click(() => {
                $(target).fadeOut(animateDuration);
                document.body.style.overflow = "";
                if (created) {
                    setTimeout(() => {
                        document.querySelector(target).remove();
                    }, animateDuration + 1);
                }
            });
        });

        $(target).click((e) => {
            if (e.target.classList.contains("modal")) {
                $(target).fadeOut(animateDuration);
                document.body.style.overflow = "";
                if (created) {
                    setTimeout(() => {
                        document.querySelector(target).remove();
                    }, animateDuration + 1);
                }
            }
        });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
    const { title, body } = text;
    const { count, settings } = btns;

    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement("div");
        modal.classList.add("modal");
        // get 'id'-value from current card
        modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

        // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
        const buttons = [];
        for (let j = 0; j < count; j++) {
            let btn = document.createElement("button");
            btn.classList.add("btn", ...settings[j][1]);
            btn.textContent = settings[j][0];
            if (settings[j][2]) {
                btn.setAttribute("data-close", "true");
            }
            if (settings[j][3] && typeof settings[j][3] === "function") {
                btn.addEventListener("click", settings[j][3]);
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
							${title}
						</h4>
					</div>
					<div class="modal-body">
						${body}
					</div>
					<div class="modal-footer">

					</div>
				</div>
			</div>
		`;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.append(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute("data-target")).fadeIn(animateDuration);
    }
};
