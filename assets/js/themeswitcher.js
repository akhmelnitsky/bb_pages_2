var styleSwitchCollection=
['https://bootswatch.com/cyborg/bootstrap.min.css',
'https://bootswatch.com/cerulean/bootstrap.min.css',
'https://bootswatch.com/cosmo/bootstrap.min.css']

function doc_keyUp(e) {

    // this would test for whichever key is 40 and the ctrl key at the same time
    //if (e.altKey && e.keyCode ==) {
    	if (e.altKey) {
        // call your function to do the thing
        var newStyle=styleSwitchCollection[e.keyCode-49];
        document.getElementById("bscss").href = newStyle;
    }
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);
