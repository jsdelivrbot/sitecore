var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js";
document.head.appendChild(script);

var nodeToCheck = null;

jQuery('a.scContentTreeNodeNormal').click(function(){
    console.log("Clearing old loade");
    clearInterval(waitForLoad);
    nodeToCheck = this;
    setInterval(waitForLoad, 300);
    console.log("Waiting for Node");
});

function waitForLoad() {
    console.log("Still waiting for Node");
    if (!jQuery(nodeToCheck).hasClass('scContentTreeNodeActive')) return;
    onLoad();
}

function onLoad(){
    clearInterval(waitForLoad);
    console.log("Node is active");
    jQuery('textarea').each(function(){
        var label = jQuery(this).parent().parent().find(".scEditorFieldLabel");
        if (label.find('.scEditorFieldLabel').length > 0) console.log(label.find('.scEditorFieldLabel').text());
        else console.log(label.text());
    });
}
console.log('SiteCore BetterEditor has loaded');