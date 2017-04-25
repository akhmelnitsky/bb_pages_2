var styleSwitchCollection=
['https://bootswatch.com/cyborg/bootstrap.min.css',
'https://bootswatch.com/cerulean/bootstrap.min.css',
'https://bootswatch.com/cosmo/bootstrap.min.css',
'https://bootswatch.com/yeti/bootstrap.min.css',
'https://bootswatch.com/superhero/bootstrap.min.css',
'https://bootswatch.com/sandstone/bootstrap.min.css',
'https://bootswatch.com/simplex/bootstrap.min.css',
'https://bootswatch.com/readable/bootstrap.min.css',
'https://bootswatch.com/darkly/bootstrap.min.css']

function doc_keyUp(e) {
console.log(e.keyCode);
    // this would test for whichever key is 40 and the ctrl key at the same time
    //if (e.altKey && e.keyCode ==) {
    	if (e.altKey && (e.keyCode>=49) && (e.keyCode<=58)) {
        // call your function to do the thing
        var newStyle=styleSwitchCollection[e.keyCode-49];
        document.getElementById("bscss").href = newStyle;
    }
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".form-group { margin-bottom: 5px !important}";
document.body.appendChild(css);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "a[data-href='welcome.html'] { margin-top: 45px !important}";
document.body.appendChild(css);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "input.form-control { height: 32px !important}";
document.body.appendChild(css);


var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".inline-button { height: 32px !important; padding-top: 4px !important}";
document.body.appendChild(css);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".tooltip-inner { text-align:left;  !important}";
document.body.appendChild(css);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".tab-content > .row { margin-top: 0px  !important} ";
document.body.appendChild(css);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".header {  padding-bottom: 0px !important} ";
document.body.appendChild(css);
