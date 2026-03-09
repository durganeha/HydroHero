// select all start challenge buttons
const challengeButtons = document.querySelectorAll(".start-challenge");

challengeButtons.forEach(button => {

    button.addEventListener("click", function () {

        // get challenge from parent link
        const link = this.closest("a");

        if(link){

            const url = new URL(link.href);
            const challengeType = url.searchParams.get("challenge");

            // store selected challenge in localStorage
            if(challengeType){
                localStorage.setItem("currentChallenge", challengeType);
            }

        }

        // navigation will continue normally via the <a> tag

    });

});