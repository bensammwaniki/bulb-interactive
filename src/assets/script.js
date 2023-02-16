const benslider = document.querySelector(".benslider"),
firstImg = benslider.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".cont i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to benslider scroll left value
    let scrollWidth = benslider.scrollWidth - benslider.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = benslider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = benslider.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the benslider scroll left else add to it
        benslider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(benslider.scrollLeft - (benslider.scrollWidth - benslider.clientWidth) > -1 || benslider.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from benslider left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(benslider.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return benslider.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    benslider.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = benslider.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/benslider to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    benslider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    benslider.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    benslider.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

benslider.addEventListener("mousedown", dragStart);
benslider.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
benslider.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
benslider.addEventListener("touchend", dragStop);