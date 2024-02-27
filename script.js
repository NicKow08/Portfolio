
window.addEventListener("scroll", function scrollFunction() {
    if(this.window.scrollY <= 50) {
        var top_btn = document.getElementById('back-to-top-btn');
        top_btn.style.transition = "all 0.5s ease";
        top_btn.style.display = "none";
        top_btn.style.visibility = "hidden";
        top_btn.style.opacity = "0";
    } 
    else {
        var top_btn = document.getElementById('back-to-top-btn');
        top_btn.style.transition = "all 0.5s ease";
        top_btn.style.display = "block";
        top_btn.style.visibility = "visible";
        for(let i = 0;i<10;i++){
            this.setTimeout(function(){
                top_btn.style.opacity = i/10;
            }, 100);
        };

        
    }
});

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};