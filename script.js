const menuIcon = document.getElementById('menuIcon');
const menuCloseIcon = document.getElementById('menuContainerCloseIcon');
const menuContainer = document.getElementById('menuContainer');

/* Variables for products page */
let productCounter;
let counterIncrementor;
let counterDecrementer;
let productsFlag = false;

menuIcon.onclick = ()=>menuContainer.style.display = "block";
$('#cartIcon').click(()=>
    getBodyContent("checkout.html")
)

menuCloseIcon.onclick =()=> menuContainer.style.display = "none";

/* //Same with jquery
$('#menuIcon').click(()=>    $('#menuContainer').show()    );
$('#menuContainerCloseIcon').click(()=>    $('#menuContainer').hide()    ); */

// Change Body
const body = document.getElementsByClassName('body')[0];
const home = document.getElementsByClassName('menuOptions')[0];
const ourOtherService = document.getElementsByClassName('menuOptions')[3];

home.onclick = ()=>{
    getBodyContent("home.html");
    menuContainer.style.display = "none";
};
ourOtherService.onclick =()=>{
    if(productsFlag === true)    removeScript();
    getBodyContent("products.html");
    menuContainer.style.display = "none";
    productsFlag = true;
};


function getBodyContent(pageFileName){
    const req = new XMLHttpRequest();
    req.onload = function(){
        body.innerHTML = this.responseText; 
        includeScript("jsProducts.js");
    };
    req.open("GET", pageFileName);
    req.send();
}

/* Insert secondary page's script */
function includeScript(jsFileName){
    var script = document.createElement('script');
/*  script.type = 'text/javascript';
    script.src = jsFileName;  */
    script.setAttribute('src', jsFileName);
    script.setAttribute('id', 'jsProducts');
    document.getElementsByTagName('body')[0].appendChild(script);
}


function removeScript(){
    const scriptNode = document.getElementById('jsProducts');
    scriptNode.parentNode.removeChild(scriptNode);
}


/* Glow My detail */
setInterval(()=>
    $('#myName').animate({fontSize: '18px'}, "slow"), 1000
)
setInterval(()=>
    $('#myName').animate({fontSize: '20px'}, "slow"), 1000
)