function Tv() {
    var myTable = document.getElementById('tv');
    if (myTable.style.display.match('table')) {
        alert("Are you sure you want to turn off the TV set?");
        myTable.style.display = 'none';
    }
    else {
        myTable.style.display = 'table';
    }
}
window.onload = function () {

	notification();
	
	tagLinkCreation();
	document.getElementById("medias").addEventListener('change', mediaChange);

	//checkbox
		(function() {
		var checkbox = $('[type=checkbox]');

		for (var i = 0; i < checkbox.length; i++) {
			checkbox[i].indeterminate = true;
		}
		})();


	//wheel	 	
		(function (){
			var acronyms = $('acronym');
			for(var i = 0; i < acronyms.length; i++){
				acronyms[i].addEventListener('wheel', doHref);
			}
		})();

		function doHref() {
		    open(this.attr('moniker-href'), '_blank');
		};

	//template
		(function() {
	    var selects = $('select[name^=JSLibs]');
		//console.log(selects);
		for (var i = 0; i < selects.length; i++) {
		    selects[i].innerHTML = TEMPLATE;
		}
	})();

	//titles
		(function () {
		var options = $('option');
		//console.log(options);
		for (var i = 0; i < options.length; i++) {
			var option = options[i];
			var val = option.innerText;
			console.log(val);
			option.title = val;
		}
		})();

		(function () {
		var optgroups = $('optgroup');
		//console.log(optgroups);
		for (var i = 0; i < optgroups.length; i++) {
			var optgroup = optgroups[i];	
			var val = optgroup.attr('label');
			console.log(val);
			optgroup.attr('title', val);
		}
		})();

}

	window.editData = function(element, entity, href){
		if(null == href || confirm(MESSAGES.CONFIRM + 'edit the following data?')){
					var
						newData = prompt(MESSAGES.ENTER + entity, element.innerText),
						isDataEmpty = (null == newData)
										|| (String.DELIMITERS.EMPTY == newData)
										|| (String.DELIMITERS.EMPTY == newData.replace(RegExp.PATTERNS.WHITESPACE, String.DELIMITERS.EMPTY));
					if(!isDataEmpty){
						var isOk = confirm(MESSAGES.CONFIRM + 'rewrite your' + entity);
						if(isOk){
							element.innerText = newData;
						}
					}
			}else if(null != href){
				location = href;
		};
	}

	//tv-on-off
/*		var remote_controller = $("#remote_controller");
		remote_controller.onclick = function () {
			var table = $("#tv_on_off");
			table.opacity = 0;
		}

		var remote_controller = $("#remote_controller"),
				table = $("#tv_on_off"),
				caption = $("caption")[0],
				click = false;
		remote_controller.onclick = function () {
			if(click == false) {
				table.style.opacity = 0;
				caption.style.opacity = 0;
				click = true;
			}
			else {
				table.style.opacity = 1;
				caption.style.opacity = 1;
				click = false;
			}
		}*/

function notification() {

	    var options = {
	        dir: 'ltr',
	        icon: 'content/imgs/person-icon.png',
	       /*body: 'test'*/
	    }
	    var myNotification = new Notification('My First CV', options);

	    return myNotification;
		}


		$('surname').on('click', editData);


	function tagLinkCreation() {

    var mySelected = document.getElementById("medias");

    for (var i = 0; i < mySelected.length; i++) {

        var tagLink = document.createElement("link");
        tagLink.className = "tagLink";
        tagLink.type = "text/css";
        tagLink.rel = "stylesheet";
        tagLink.href = "content/styles/" + mySelected.options[i].value + ".css";

            if (mySelected.options[i].value.indexOf("print") > -1) {
                tagLink.media = "print";
            }
            else {
                tagLink.media = mySelected.options[i].value;
            }
        document.getElementsByTagName("head")[0].appendChild(tagLink);
    }
}
	function mediaToDefault() {

	    var myLinkTags = document.getElementsByClassName("tagLink");
	    var mySelected = document.getElementById("medias");

	    for (var i = 0; i < myLinkTags.length; i++) {
	        myLinkTag = myLinkTags[i];
	        myLinkTag.setAttribute("media", "default");
	        mySelected.className = "default";
	    }
	}
	function mediaChange() {

	    mediaToDefault();
	    var myLinkTags = document.getElementsByClassName("tagLink");
	    var mySelected = document.getElementById("medias");
	    var mySelectedOpt = document.getElementById("medias").value;
	    var myLink = document.getElementById('link');
	    var myAudio = document.getElementById('sound');
       

	    for (var i = 0; i < myLinkTags.length; i++) {
	        var myLinkTag = myLinkTags[i];

	        if (myLinkTag.getAttribute("href").indexOf(mySelectedOpt)>-1) {
	            myLinkTag.setAttribute("media", "screen");
	            mySelected.className = mySelectedOpt;
	            myLink.setAttribute('href', 'content/imgs/icon/' + mySelectedOpt + '.ico');
	            if (mySelected.options[i].value.indexOf('screen') > -1) {
	                myAudio.play();
	            }
	        }
	    }
	}