var pvCzas = 1;
var pvPingAddy = "https://192.168.0.125/";
var pvMp3Addy = "https://bartbart.co/NukeWarning.mp3";


setTimeout(function() 
{
	var ButtonXpath = "/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[3]";
	var addButton = document.evaluate(ButtonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if (addButton != null)
	{
		var li = document.createElement("yt-chip-cloud-chip-renderer");
		li.setAttribute("class", "style-scope ytd-feed-filter-chip-bar-renderer"); // added line
		li.setAttribute("modern", "");
		li.setAttribute("aria-selected","false");
		li.setAttribute("role", "tab");
		li.setAttribute("tabindex","0");
		li.setAttribute("chip-style","STYLE_HOME_FILTER");
		li.setAttribute("id","jebacbiede");
		
		
		var newElem = document.createElement("yt-formatted-string");
		newElem.setAttribute("id","textor");	
		newElem.setAttribute("ellipsis-truncate","");	
		newElem.setAttribute("class", "style-scope yt-chip-cloud-chip-renderer");	
		newElem.setAttribute("ellipsis-truncate-styling","");	
		newElem.setAttribute("title","Startuj");	
		
		
		
		
		
		//addButton.appendChild(li);
		li.appendChild(newElem);	
		addButton.insertBefore(li, addButton.firstChild);	
		var startujButton = document.getElementById("jebacbiede");
		if (startujButton != null)
		{			
			startujButton.innerText = "Startuj!";		
			startujButton.addEventListener("click", (e) => {
				setInterval(outer2, (pvCzas * 60000));
				if (startujButton.innerText == "Startuj!")
				{
					startujButton.innerText = "Dzialam!"
				}
				});
		}
		
	}
	
	
	
}, 5000);		






function outer2()
{		
	
        ping(pvPingAddy).then(function(delta) {
           console.log(String(error));
        }).catch(function(error) 
		{
			alert("Brak odpowiedzi");
			var audio = new Audio(pvMp3Addy);
			audio.play();			
			
        });  

}





(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.ping = factory(); }
}(this, function () {

    /**
     * Creates and loads an image element by url.
     * @param  {String} url
     * @return {Promise} promise that resolves to an image element or
     *                   fails to an Error.
     */
    function request_image(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() { resolve(img); };
            img.onerror = function() { reject(url); };
            img.src = url + '?random-no-cache=' + Math.floor((1 + Math.random()) * 0x10000).toString(16);
        });
    }

    /**
     * Pings a url.
     * @param  {String} url
     * @param  {Number} multiplier - optional, factor to adjust the ping by.  0.3 works well for HTTP servers.
     * @return {Promise} promise that resolves to a ping (ms, float).
     */
    function ping(url, multiplier) {
		return new Promise(function(resolve, reject) {
            var start = (new Date()).getTime();
            var response = function() { 
                var delta = ((new Date()).getTime() - start);
                delta *= (multiplier || 1);
                resolve(delta); 
            };
            request_image(url).then(response).catch(response);
            
            // Set a timeout for max-pings, 5s.
            setTimeout(function() { reject(Error('Timeout')); }, 5000);
        });
    }
    
    return ping;
}));