setInterval(function(){
    var posts = document.getElementsByClassName("_15ko"); 
    for(var i=0;i<posts.length;i++) 
    { 
        if(posts[i].classList.contains("_77la")==false) 
        { 
            posts[i].click(); 
        } 
    }
    window.scrollBy(0, 1920);
}, 3000);