const template = document.createElement("template");
template.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../public/style.css">
        <title>Review Card</title>
    </head>
    <body>
        <div class="review-card">
            <div class="top">
                <img class="profile-picture" src="" alt="pp.png">
                <div class="identifiers">
                    <div class="username"><slot name="poster"/></div>
                    <div class="restaurant"><slot name="resto"/></div>
                </div>
                <svg class="rating" width="115" height="22" viewBox="0 0 115 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g class="flag-1" fill="#595959">
                        <path d="M19.079 0.483624C18.5288 1.02695 18.1172 1.31786 17.4909 1.62161C16.6365 2.03231 15.7999 2.22911 14.5652 2.31039C13.6884 2.36601 12.8072 2.32323 10.7404 2.13071C9.12101 1.9767 7.48371 1.92536 6.70532 2.00237C5.11275 2.16066 3.86018 2.67404 2.86259 3.57673C2.59865 3.81202 2.55839 3.86764 2.59418 3.93609C2.62102 3.97887 3.34572 6.42597 4.20463 9.37361C5.06802 12.3213 5.7793 14.7598 5.79273 14.7897C5.81062 14.8325 5.91351 14.7684 6.11929 14.5972C7.53739 13.3993 9.13443 12.9416 11.5859 13.0186C12.0646 13.0357 12.7624 13.0742 13.1293 13.1084C13.5006 13.1427 14.2432 13.2154 14.7845 13.2667C16.1847 13.3993 18.0456 13.3993 18.7882 13.2667C19.5621 13.1298 20.0498 12.9844 20.6447 12.7063C21.2889 12.4025 21.8123 12.0475 22.3133 11.5555C22.6846 11.1918 22.8233 10.995 22.8725 10.7512C22.9307 10.4645 22.886 10.4218 22.1434 10.0282C20.9758 9.40784 19.8663 8.66772 18.9045 7.86771C18.6943 7.6923 18.5019 7.49551 18.4796 7.43561C18.4482 7.35005 18.493 7.11047 18.6764 6.40886C19.1193 4.70616 19.4727 2.93928 19.7321 1.16813C19.844 0.410896 19.8619 0.184155 19.8261 0.10287C19.7321 -0.0939245 19.6024 -0.0297527 19.079 0.483624Z"/>
                        <path d="M0.626289 3.77349C0.299724 3.87189 0 4.28687 0 4.63768C0 4.80452 4.81796 21.2839 4.93427 21.515C5.05058 21.7417 5.30557 21.9 5.56503 21.9C5.65897 21.9 5.87817 21.8615 6.04369 21.8144C6.52683 21.6775 6.75498 21.438 6.75498 21.0786C6.75498 20.9674 5.8066 17.6475 4.33929 12.6335C3.01514 8.09014 1.90571 4.32537 1.88334 4.26975C1.81624 4.09007 1.60151 3.88044 1.40915 3.79916C1.20784 3.70932 0.867858 3.70076 0.626289 3.77349Z"/>
                    </g>
                    <g class="flag-2" fill="#595959">
                        <path d="M42.079 0.483624C41.5288 1.02695 41.1172 1.31786 40.4909 1.62161C39.6365 2.03231 38.7999 2.22911 37.5652 2.31039C36.6884 2.36601 35.8072 2.32323 33.7404 2.13071C32.121 1.9767 30.4837 1.92536 29.7053 2.00237C28.1128 2.16066 26.8602 2.67404 25.8626 3.57673C25.5986 3.81202 25.5584 3.86764 25.5942 3.93609C25.621 3.97887 26.3457 6.42597 27.2046 9.37361C28.068 12.3213 28.7793 14.7598 28.7927 14.7897C28.8106 14.8325 28.9135 14.7684 29.1193 14.5972C30.5374 13.3993 32.1344 12.9416 34.5859 13.0186C35.0646 13.0357 35.7624 13.0742 36.1293 13.1084C36.5006 13.1427 37.2432 13.2154 37.7845 13.2667C39.1847 13.3993 41.0456 13.3993 41.7882 13.2667C42.5621 13.1298 43.0498 12.9844 43.6447 12.7063C44.2889 12.4025 44.8123 12.0475 45.3133 11.5555C45.6846 11.1918 45.8233 10.995 45.8725 10.7512C45.9307 10.4645 45.886 10.4218 45.1434 10.0282C43.9758 9.40784 42.8663 8.66772 41.9045 7.86771C41.6943 7.6923 41.5019 7.49551 41.4796 7.43561C41.4482 7.35005 41.493 7.11047 41.6764 6.40886C42.1193 4.70616 42.4727 2.93928 42.7321 1.16813C42.844 0.410896 42.8619 0.184155 42.8261 0.10287C42.7321 -0.0939245 42.6024 -0.0297527 42.079 0.483624Z" />
                        <path d="M23.6263 3.77349C23.2997 3.87189 23 4.28687 23 4.63768C23 4.80452 27.818 21.2839 27.9343 21.515C28.0506 21.7417 28.3056 21.9 28.565 21.9C28.659 21.9 28.8782 21.8615 29.0437 21.8144C29.5268 21.6775 29.755 21.438 29.755 21.0786C29.755 20.9674 28.8066 17.6475 27.3393 12.6335C26.0151 8.09014 24.9057 4.32537 24.8833 4.26975C24.8162 4.09007 24.6015 3.88044 24.4092 3.79916C24.2078 3.70932 23.8679 3.70076 23.6263 3.77349Z" />
                    </g>
                    <g class="flag-3" fill="#595959">
                        <path d="M65.079 0.483624C64.5288 1.02695 64.1172 1.31786 63.4909 1.62161C62.6365 2.03231 61.7999 2.22911 60.5652 2.31039C59.6884 2.36601 58.8072 2.32323 56.7404 2.13071C55.121 1.9767 53.4837 1.92536 52.7053 2.00237C51.1128 2.16066 49.8602 2.67404 48.8626 3.57673C48.5986 3.81202 48.5584 3.86764 48.5942 3.93609C48.621 3.97887 49.3457 6.42597 50.2046 9.37361C51.068 12.3213 51.7793 14.7598 51.7927 14.7897C51.8106 14.8325 51.9135 14.7684 52.1193 14.5972C53.5374 13.3993 55.1344 12.9416 57.5859 13.0186C58.0646 13.0357 58.7624 13.0742 59.1293 13.1084C59.5006 13.1427 60.2432 13.2154 60.7845 13.2667C62.1847 13.3993 64.0456 13.3993 64.7882 13.2667C65.5621 13.1298 66.0498 12.9844 66.6447 12.7063C67.2889 12.4025 67.8123 12.0475 68.3133 11.5555C68.6846 11.1918 68.8233 10.995 68.8725 10.7512C68.9307 10.4645 68.886 10.4218 68.1434 10.0282C66.9758 9.40784 65.8663 8.66772 64.9045 7.86771C64.6943 7.6923 64.5019 7.49551 64.4796 7.43561C64.4482 7.35005 64.493 7.11047 64.6764 6.40886C65.1193 4.70616 65.4727 2.93928 65.7321 1.16813C65.844 0.410896 65.8619 0.184155 65.8261 0.10287C65.7321 -0.0939245 65.6024 -0.0297527 65.079 0.483624Z" />
                        <path d="M46.6263 3.77349C46.2997 3.87189 46 4.28687 46 4.63768C46 4.80452 50.818 21.2839 50.9343 21.515C51.0506 21.7417 51.3056 21.9 51.565 21.9C51.659 21.9 51.8782 21.8615 52.0437 21.8144C52.5268 21.6775 52.755 21.438 52.755 21.0786C52.755 20.9674 51.8066 17.6475 50.3393 12.6335C49.0151 8.09014 47.9057 4.32537 47.8833 4.26975C47.8162 4.09007 47.6015 3.88044 47.4092 3.79916C47.2078 3.70932 46.8679 3.70076 46.6263 3.77349Z" />
                    </g>
                    <g class="flag-4" fill="#595959">
                        <path d="M88.079 0.483624C87.5288 1.02695 87.1172 1.31786 86.4909 1.62161C85.6365 2.03231 84.7999 2.22911 83.5652 2.31039C82.6884 2.36601 81.8072 2.32323 79.7404 2.13071C78.121 1.9767 76.4837 1.92536 75.7053 2.00237C74.1128 2.16066 72.8602 2.67404 71.8626 3.57673C71.5986 3.81202 71.5584 3.86764 71.5942 3.93609C71.621 3.97887 72.3457 6.42597 73.2046 9.37361C74.068 12.3213 74.7793 14.7598 74.7927 14.7897C74.8106 14.8325 74.9135 14.7684 75.1193 14.5972C76.5374 13.3993 78.1344 12.9416 80.5859 13.0186C81.0646 13.0357 81.7624 13.0742 82.1293 13.1084C82.5006 13.1427 83.2432 13.2154 83.7845 13.2667C85.1847 13.3993 87.0456 13.3993 87.7882 13.2667C88.5621 13.1298 89.0498 12.9844 89.6447 12.7063C90.2889 12.4025 90.8123 12.0475 91.3133 11.5555C91.6846 11.1918 91.8233 10.995 91.8725 10.7512C91.9307 10.4645 91.886 10.4218 91.1434 10.0282C89.9758 9.40784 88.8663 8.66772 87.9045 7.86771C87.6943 7.6923 87.5019 7.49551 87.4796 7.43561C87.4482 7.35005 87.493 7.11047 87.6764 6.40886C88.1193 4.70616 88.4727 2.93928 88.7321 1.16813C88.844 0.410896 88.8619 0.184155 88.8261 0.10287C88.7321 -0.0939245 88.6024 -0.0297527 88.079 0.483624Z"/>
                        <path d="M69.6263 3.77349C69.2997 3.87189 69 4.28687 69 4.63768C69 4.80452 73.818 21.2839 73.9343 21.515C74.0506 21.7417 74.3056 21.9 74.565 21.9C74.659 21.9 74.8782 21.8615 75.0437 21.8144C75.5268 21.6775 75.755 21.438 75.755 21.0786C75.755 20.9674 74.8066 17.6475 73.3393 12.6335C72.0151 8.09014 70.9057 4.32537 70.8833 4.26975C70.8162 4.09007 70.6015 3.88044 70.4092 3.79916C70.2078 3.70932 69.8679 3.70076 69.6263 3.77349Z"/>
                    </g>
                    <g class="flag-5" fill="#595959">
                        <path d="M111.079 0.483624C110.529 1.02695 110.117 1.31786 109.491 1.62161C108.636 2.03231 107.8 2.22911 106.565 2.31039C105.688 2.36601 104.807 2.32323 102.74 2.13071C101.121 1.9767 99.4837 1.92536 98.7053 2.00237C97.1128 2.16066 95.8602 2.67404 94.8626 3.57673C94.5986 3.81202 94.5584 3.86764 94.5942 3.93609C94.621 3.97887 95.3457 6.42597 96.2046 9.37361C97.068 12.3213 97.7793 14.7598 97.7927 14.7897C97.8106 14.8325 97.9135 14.7684 98.1193 14.5972C99.5374 13.3993 101.134 12.9416 103.586 13.0186C104.065 13.0357 104.762 13.0742 105.129 13.1084C105.501 13.1427 106.243 13.2154 106.784 13.2667C108.185 13.3993 110.046 13.3993 110.788 13.2667C111.562 13.1298 112.05 12.9844 112.645 12.7063C113.289 12.4025 113.812 12.0475 114.313 11.5555C114.685 11.1918 114.823 10.995 114.873 10.7512C114.931 10.4645 114.886 10.4218 114.143 10.0282C112.976 9.40784 111.866 8.66772 110.905 7.86771C110.694 7.6923 110.502 7.49551 110.48 7.43561C110.448 7.35005 110.493 7.11047 110.676 6.40886C111.119 4.70616 111.473 2.93928 111.732 1.16813C111.844 0.410896 111.862 0.184155 111.826 0.10287C111.732 -0.0939245 111.602 -0.0297527 111.079 0.483624Z" />
                        <path d="M92.6263 3.77349C92.2997 3.87189 92 4.28687 92 4.63768C92 4.80452 96.818 21.2839 96.9343 21.515C97.0506 21.7417 97.3056 21.9 97.565 21.9C97.659 21.9 97.8782 21.8615 98.0437 21.8144C98.5268 21.6775 98.755 21.438 98.755 21.0786C98.755 20.9674 97.8066 17.6475 96.3393 12.6335C95.0151 8.09014 93.9057 4.32537 93.8833 4.26975C93.8162 4.09007 93.6015 3.88044 93.4092 3.79916C93.2078 3.70932 92.8679 3.70076 92.6263 3.77349Z" />
                    </g>
                </svg>
            </div>
            <div class="title"><slot name="post-title"/></div>
            <div class="body">
                <span class="main-text">
                    <slot name="post-text"/>
                </span>
                
                <span class="read-more clickable">Read more</span>
            </div>

            <div class="buttons">
                <div class="like-dislike">
                    <svg class="like clickable" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g class="fill">
                            <path d="M19.5549 23.2208H3.77759C2.24357 23.2208 1 21.9772 1 20.4432V9.33278H6.45746C7.38616 9.33278 8.25341 8.86865 8.76856 8.09592L12.2623 2.85529C13.035 1.6962 14.3359 1 15.729 1H16.0262C16.8843 1 17.5371 1.7706 17.3961 2.61712L16.2767 9.33278H21.2214C22.9742 9.33278 24.2889 10.9364 23.9451 12.6551L22.2786 20.9879C22.0189 22.2862 20.8789 23.2208 19.5549 23.2208Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55566 9.33279V23.2208V9.33279Z"/>
                        </g>
                        <path d="M6.55566 9.33279V23.2208" stroke="white" stroke-width="2"/>
                    </svg>
                    <span class="like-count">100</span>
                    <span>|</span>
                    <svg class="dislike clickable" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g class="fill">
                            <path d="M19.5549 1.00001H3.77759C2.24357 1.00001 1 2.24353 1 3.7776V14.888H6.45746C7.38616 14.888 8.25341 15.3521 8.76856 16.1248L12.2623 21.3655C13.035 22.5246 14.3359 23.2208 15.729 23.2208H16.0262C16.8843 23.2208 17.5371 22.4502 17.3961 21.6036L16.2767 14.888H21.2214C22.9742 14.888 24.2889 13.2843 23.9451 11.5657L22.2786 3.23291C22.0189 1.93453 20.8789 1.00001 19.5549 1.00001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55566 14.888V1.00003V14.888Z"/>
                        </g>
                        <path d="M6.55566 14.888V1.00003" stroke="white" stroke-width="2"/>
                    </svg>
                    <span class="dislike-count">100</span>                
                </div>
                <div class="edit_delete">
                    <img class="edit clickable" src="assets/svg/pen-comment.svg" alt="edit">
                    <img class="delete clickable" src="assets/svg/trash-can.svg" alt="delete">
                </div>
            </div>

            <div class="images">
                <!-- CAROUSEL BULLETS -->
                <svg class="bullets" width="100%" height="7" viewBox="0 0 36 7" xmlns="http://www.w3.org/2000/svg">
                    <circle class="bullet-1" cx="3" cy="3.36317" r="3" fill="#7FBF8D"/>
                    <circle class="bullet-2" cx="13" cy="3.36317" r="3" fill="#EEF6D9"/>
                    <circle class="bullet-3" cx="23" cy="3.36317" r="3" fill="#EEF6D9"/>
                    <circle class="bullet-4" cx="33" cy="3.36317" r="3" fill="#EEF6D9"/>
                </svg>
                <!-- CAROUSEL EFFECT -->
                <button class="left clickable">
                    <img  src="assets/svg/left-arrow-btn.svg" alt="left">
                </button>
                <div class="img-container">
                    <ul class="tracker">
                        <li class="slide current-slide">
                            <img src="assets/jpg/preview1.jpg" alt="review-pic-1">
                        </li>
                        <li class="slide">
                            <img src="assets/jpg/preview2.jpg" alt="review-pic-2">
                        </li>
                        <li class="slide">
                            <img src="assets/jpg/preview3.jpg" alt="review-pic-3">
                        </li>
                        <li class="slide">
                            <img src="assets/jpg/preview4.jpg" alt="review-pic-4">
                        </li>
                    </ul>
                </div>
                <button class="right clickable">
                    <img src="assets/svg/right-arrow-btn.svg" alt="right">
                </button>
            </div>

            <!-- <div class="reply">
                <textarea class="add-reply" name="owners-reply" placeholder="Add a reply..." rows ="1"></textarea>
                <input class="post-reply" name="post-reply" type="button" value="Post">
            </div> -->
        </div>

        <script type="module" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                var tracker = $('.images .img-container .tracker');
                var slides = $('.images .img-container .tracker .slide');
                var prev = $('.images .left');
                var next = $('.images .right');
                var bullets = $('.images .bullets');
                var slideWidth = slides[0].clientWidth;
                var currentBullet = 1;
                var moveToSlide = (tracker, currentSlide, targetSlide) => {
                    tracker.css('transform', 'translateX(-' + targetSlide[0].style.left + ')');
                    currentSlide.removeClass('current-slide');
                    targetSlide.addClass('current-slide');
                }
                var updateBullets = (change) => {
                    $('.images .bullets circle').css('fill', '#EEF6D9');
                    currentBullet += change;
                    $('.images .bullets .bullet-' + currentBullet).css('fill', '#7FBF8D');
                }

                prev.css('display', 'none');

                for (let index = 0; index < slides.length; index++) {
                    slides[index].style.left = index * slideWidth + 'px';                
                }

                prev.on('click', function(e){
                    let currentSlide = tracker.find('.current-slide');
                    let prevSlide = currentSlide.prev();

                    if (currentBullet == 1+1){                
                        prev.css('display', 'none');
                        moveToSlide(tracker, currentSlide, prevSlide);
                        updateBullets(-1);
                    } else {
                        next.css('display', 'initial');
                        moveToSlide(tracker, currentSlide, prevSlide);
                        updateBullets(-1);
                    }
                });

                next.on('click', function(e){
                    let currentSlide = tracker.find('.current-slide');
                    let nextSlide = currentSlide.next();

                    currentSlide.css('animation', 'moveLeft 0.5s ease-in-out');
                    if (currentBullet == 4-1){                
                        next.css('display', 'none');
                        moveToSlide(tracker, currentSlide, nextSlide);
                        updateBullets(1);
                    } else {
                        prev.css('display', 'initial');
                        moveToSlide(tracker, currentSlide, nextSlide);
                        updateBullets(1);
                    }
                });

                var textarea = $('.reply .add-reply');
                textarea.on('keyup', function(e){
                    textarea[0].style.height = "auto";
                    let scHeight = e.target.scrollHeight;
                    textarea[0].style.height = scHeight + "px";
                });
            });

        </script>
    </body>
    </html>
`;

class ReviewCardSelf extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes(){
        return ['profpic', 'rating', 'post-text', 'image1', 'image2', 'image3', 'image4']
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.shadowRoot.querySelector('.top .profile-picture').src = this.getAttribute('profpic'); 
        this.updateFlag(this.getAttribute('rating'))
        this.readMore(this.getAttribute('post-text'));
        this.likeDislike();
        var imageList = [this.getAttribute('image1'), this.getAttribute('image2'), this.getAttribute('image3'), this.getAttribute('image4')]
        this.updateImage(imageList);
    }

    // FLAG FUNCTIONALITY
    updateFlag(rating){
        var greenFlag = "#41C45E";
        var grayFlag = "#595959";
        var redFlag = "#ED352F";

        for (let index = 1; index < 6; index++) {
            let flag = $(this.shadowRoot).find('.review-card .top .rating .flag-' + index);
            if (index <= rating) {
                if (rating <= 2)
                    flag.css('fill', redFlag);
                else
                    flag.css('fill', greenFlag);
            } else {
                flag.css('fill', grayFlag);
            }
        }
    }

    // READ MORE FUNCTIONALITY
    readMore(fullText){
        // var fullText = $(this.shadowRoot).find(".body .main-text").text();
        var document = $(this.shadowRoot);
        if (fullText.length > 280){
            var prevText = fullText.slice(0,260)+"...";
            document.find(".body .main-text").text(prevText);
            document.find(".body .read-more").click(function(){
                document.find(".body .main-text").text(fullText);
                document.find(".body .read-more").css('display', 'none');
            });
        } else {
            document.find(".body .read-more").css('display', 'none');
        }
    }

    // LIKE/DISLIKE FUNCTIONALITY
    likeDislike(){
        var document = $(this.shadowRoot);
        var likeColor = "#40A062";
        var dislikeColor = "#FF6665";
        var like_dislike = document.find('.buttons .like-dislike svg');

        like_dislike.on('click', function(e){
            let className = e.currentTarget.classList[0];
            let pressedButton = document.find('.buttons .like-dislike .' + className);
            let unpressedButton = document.find('.buttons .like-dislike .' + (className == 'like' ? 'dislike' : 'like'));
            
            if (pressedButton.css('fill') != 'none')
                pressedButton.css('fill', 'none');
            else {
                pressedButton.css('fill', className == 'like' ? likeColor : dislikeColor);
                pressedButton.css('fill', className == 'like' ? likeColor : dislikeColor);
                unpressedButton.css('fill', 'none');
            }
        });
    }

    // IMAGE CAROUSEL FUNCTIONALITY
    updateImage(imageList){
        var document = $(this.shadowRoot);
        var tracker = document.find('.images .img-container .tracker');
        var slides = document.find('.images .img-container .tracker .slide');
        var prev = document.find('.images .left');
        var next = document.find('.images .right');
        var bullets = document.find('.images .bullets');
        var slideWidth = slides.clientWidth;
        var currentBullet = 1;
        console.log(slides[0]);
        
        var moveToSlide = (tracker, currentSlide, targetSlide) => {
            tracker.css('transform', 'translateX(-' + targetSlide[0].style.left + ')');
            currentSlide.removeClass('current-slide');
            targetSlide.addClass('current-slide');
            console.log(targetSlide[0]);
        }

        var updateBullets = (change) => {
            document.find('.images .bullets circle').css('fill', '#EEF6D9');
            currentBullet += change;
            document.find('.images .bullets .bullet-' + currentBullet).css('fill', '#7FBF8D');
        }

        prev.css('display', 'none');

        for (let index = 0; index < slides.length; index++) {
            slides[index].style.left = index * slideWidth + 'px';      
            // console.log(slides[index]);          
        }

        prev.on('click', function(e){
            let currentSlide = tracker.find('.current-slide');
            let prevSlide = currentSlide.prev();
            
            if (currentBullet == 1+1){                
                prev.css('display', 'none');
                moveToSlide(tracker, currentSlide, prevSlide);
                updateBullets(-1);
            } else {
                next.css('display', 'initial');
                moveToSlide(tracker, currentSlide, prevSlide);
                updateBullets(-1);
            }
        });

        next.on('click', function(e){
            let currentSlide = tracker.find('.current-slide');
            let nextSlide = currentSlide.next();
            if (currentBullet == 4-1){                
                next.css('display', 'none');
                moveToSlide(tracker, currentSlide, nextSlide);
                updateBullets(1);
            } else {
                prev.css('display', 'initial');
                moveToSlide(tracker, currentSlide, nextSlide);
                updateBullets(1);
            }
        });
    }
}

export default ReviewCardSelf;