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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY3VzdG9tU2VsZWN0KCk7XG4gICAgc2Nyb2xsVE8oKTtcbn0pO1xuXG5mdW5jdGlvbiBjdXN0b21TZWxlY3QoKSB7XG4gICAgdmFyIHgsIGksIGosIHNlbEVsbW50LCBhLCBiLCBjO1xuICAgIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tfX2Zvcm1fY3VzdG9tLXNlbGVjdFwiKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxFbG1udCA9IHhbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XG4gICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXNlbGVjdGVkXCIpO1xuICAgICAgICBhLmlubmVySFRNTCA9IHNlbEVsbW50Lm9wdGlvbnNbc2VsRWxtbnQuc2VsZWN0ZWRJbmRleF0uaW5uZXJIVE1MO1xuICAgICAgICB4W2ldLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC1pdGVtcyBzZWxlY3QtaGlkZVwiKTtcbiAgICAgICAgZm9yIChqID0gMTsgaiA8IHNlbEVsbW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICAgICAgICAgIGMuaW5uZXJIVE1MID0gc2VsRWxtbnQub3B0aW9uc1tqXS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHksIGksIGssIHMsIGg7XG4gICAgICAgICAgICAgICAgcyA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpWzBdO1xuICAgICAgICAgICAgICAgIGggPSB0aGlzLnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLm9wdGlvbnNbaV0uaW5uZXJIVE1MID09IHRoaXMuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNhbWUtYXMtc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlba10ucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2FtZS1hcy1zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGguY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYi5hcHBlbmRDaGlsZChjKTtcbiAgICAgICAgfVxuICAgICAgICB4W2ldLmFwcGVuZENoaWxkKGIpO1xuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY2xvc2VBbGxTZWxlY3QodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3QtaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdC1hcnJvdy1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFNlbGVjdChlbG1udCkge1xuICAgICAgICB2YXIgeCwgeSwgaSwgYXJyTm8gPSBbXTtcbiAgICAgICAgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3QtaXRlbXNcIik7XG4gICAgICAgIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0LXNlbGVjdGVkXCIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsbW50ID09IHlbaV0pIHtcbiAgICAgICAgICAgICAgICBhcnJOby5wdXNoKGkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHlbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdC1hcnJvdy1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJOby5pbmRleE9mKGkpKSB7XG4gICAgICAgICAgICAgICAgeFtpXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWhpZGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQWxsU2VsZWN0KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVE8oKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19idG4nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlua3NbaV0ub25jbGljayA9IHNjcm9sbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGFuaW1hdGVTY3JvbGwodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKHRhcmdldEhlaWdodCkge1xuICAgICAgICB0YXJnZXRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCA+IHRhcmdldEhlaWdodCArIHNjcm9sbFkgP1xuICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBpbml0aWFsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgdmFyIFNDUk9MTF9EVVJBVElPTiA9IDQwO1xuICAgICAgICB2YXIgc3RlcF94ID0gTWF0aC5QSSAvIFNDUk9MTF9EVVJBVElPTjtcbiAgICAgICAgdmFyIHN0ZXBfY291bnQgPSAwO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgICAgICAgICBpZiAoc3RlcF9jb3VudCA8IFNDUk9MTF9EVVJBVElPTikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICAgICAgICBzdGVwX2NvdW50Kys7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGluaXRpYWxQb3NpdGlvbiArIHRhcmdldEhlaWdodCAqIDAuMjUgKiBNYXRoLnBvdygoMSAtIE1hdGguY29zKHN0ZXBfeCAqIHN0ZXBfY291bnQpKSwgMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbENoZWNrKCkge1xuICAgIHZhciB3cmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxvY2tfX2Zvcm1fZ3JvdXAnKTtcblxufSJdfQ==
