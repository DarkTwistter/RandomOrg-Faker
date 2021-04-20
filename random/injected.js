(function () {
    var integers;
	


    chrome.runtime.sendMessage({
        action: 'getStorage'
    }, function (response) {
        integers = response.data.split(',');
    });

    var key = 0;

    document.getElementById('true-random-integer-generator-button').addEventListener('contextmenu', function (event) {
        event.preventDefault();
		
		
	var date = new Date();
	var day = ("0" + date.getDate()).slice(-2);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var year = date.getFullYear();
	
	var hours = date.getUTCHours();
	var minutes = date.getUTCMinutes();
	var seconds = date.getUTCSeconds();
	
	var minimumValue = document.getElementById('true-random-integer-generator-min').value;
	var maximumValue = document.getElementById('true-random-integer-generator-max').value;
	
	
	
        document.getElementById('true-random-integer-generator-result').innerHTML = '<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

        setTimeout(function () {
            document.getElementById('true-random-integer-generator-result').innerHTML = `<span id="true-random-integer-generator-result"><center><span style="font-size:100%;font-weight:bold;">${integers[key]}<br></span><span style="font-size:70%;">Min:&nbsp;${minimumValue}, Max:&nbsp;${maximumValue}<br>${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC</span></center></span>`
			
			
			integers[key];

            if (integers.length == ++key) {
                key = 0;
            }
        }, 1000);
    });
})();