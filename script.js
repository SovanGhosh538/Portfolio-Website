let activityIndex = 0;

const activityCards = document.querySelectorAll(".activity-card");
const activityDotsContainer = document.querySelector(".activity-dots");

if (activityCards.length > 0 && activityDotsContainer) {

    /* Create dots */
    activityCards.forEach((card, index) => {

        const dot = document.createElement("span");

        dot.classList.add("activity-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            activityIndex = index;
            updateActivities();
        });

        activityDotsContainer.appendChild(dot);

    });


    /* Update slider */
    function updateActivities() {

        const total = activityCards.length;

        activityCards.forEach((card, index) => {

            let position = index - activityIndex;

            if (position > total / 2) {
                position -= total;
            }

            if (position < -total / 2) {
                position += total;
            }


            /* CENTER */
            if (position === 0) {

                card.style.transform =
                    "translateX(0) translateZ(100px) rotateY(0deg) scale(1)";

                card.style.opacity = "1";
                card.style.zIndex = "10";
                card.style.filter = "brightness(1)";
            }


            /* LEFT */
            else if (position === -1) {

                card.style.transform =
                    "translateX(-330px) translateZ(-50px) rotateY(18deg) scale(0.82)";

                card.style.opacity = "0.65";
                card.style.zIndex = "5";
                card.style.filter = "brightness(0.65)";
            }


            /* RIGHT */
            else if (position === 1) {

                card.style.transform =
                    "translateX(330px) translateZ(-50px) rotateY(-18deg) scale(0.82)";

                card.style.opacity = "0.65";
                card.style.zIndex = "5";
                card.style.filter = "brightness(0.65)";
            }


            /* HIDDEN */
            else {

                card.style.transform =
                    "translateX(0) translateZ(-300px) scale(0.5)";

                card.style.opacity = "0";
                card.style.zIndex = "0";
                card.style.filter = "brightness(0.4)";
            }

        });


        /* Update dots */
        const dots =
            document.querySelectorAll(".activity-dot");

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === activityIndex
            );

        });

    }


    /* Move slider */
    window.moveActivity = function(direction) {

        activityIndex += direction;

        if (activityIndex < 0) {
            activityIndex = activityCards.length - 1;
        }

        if (activityIndex >= activityCards.length) {
            activityIndex = 0;
        }

        updateActivities();

    };


    /* Initial position */
    updateActivities();

}