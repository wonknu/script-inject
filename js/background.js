/**
 * WHAT TO USE HERE :
 * http://developer.chrome.com/extensions/api_index.html
 * 
 */

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    var url = tab.url;
    if(url.indexOf("#") === url.length - 1){
        return;
    }
    if (url !== undefined && changeInfo.status == 'complete') {
        chrome.tabs.executeScript({
            code: 'ScriptLoader.loadTogetherJS();'
        });
    }
});