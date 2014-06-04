var ScriptLoader = {
    
    loadTogetherJS : function (){
        var togetherJSScript  = document.createElement("script");
        togetherJSScript.src  = "http://pgs.flabbe.dev/www/togetherjs/build/togetherjs.js";
        togetherJSScript.type = "text/javascript";
        document.body.appendChild(togetherJSScript);
        
        togetherJSScript.onload = function (){
            var elt = document.createElement("script");
            elt.innerHTML = "TogetherJS();";
            document.head.appendChild(elt);
        };
    },
    
    loadPlayground : function (){
        var togetherJSScript  = document.createElement("script");
        togetherJSScript.src  = "http://pgs.flabbe.dev/www/togetherjs/build/togetherjs.js";
        togetherJSScript.type = "text/javascript";
        document.body.appendChild(togetherJSScript);
        
        togetherJSScript.onload = function (){
            
        };
    }
    
};

