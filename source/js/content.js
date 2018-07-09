document.addEventListener("DOMContentLoaded", function(event) {
    customSelect();
    scrollTO();
});

function customSelect() {
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("block__form_custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);
}

function scrollTO() {
    var links = document.getElementsByClassName('header__btn');

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = scroll;
    }

    function scroll(e) {
        e.preventDefault();
        var id = this.getAttribute('href').replace('#', '');
        var target = document.getElementById(id).getBoundingClientRect().top;
        animateScroll(target);
    }

    function animateScroll(targetHeight) {
        targetHeight = document.body.scrollHeight - window.innerHeight > targetHeight + scrollY ?
            targetHeight : document.body.scrollHeight - window.innerHeight;
        var initialPosition = window.scrollY;
        var SCROLL_DURATION = 40;
        var step_x = Math.PI / SCROLL_DURATION;
        var step_count = 0;
        requestAnimationFrame(step);
        function step() {
            if (step_count < SCROLL_DURATION) {
                requestAnimationFrame(step);
                step_count++;
                window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * step_count)), 2));
            }
        }
    }
}

function labelCheck() {
    var wrap = document.getElementsByClassName('block__form_group');

}