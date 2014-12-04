		  function getElementsByClass(node,searchClass,tag) {
			var classElements = new Array();
				if ( node == null )
					node = document;
				if ( tag == null )
					tag = '*';
			var els = node.getElementsByTagName(tag); // use "*" for all elements
			var elsLen = els.length;
			var pattern = new RegExp("\\b"+searchClass+"\\b");
			for (i = 0, j = 0; i < elsLen; i++) {
				 if ( pattern.test(els[i].className) ) {
				 classElements[j] = els[i];
				 j++;
				 }
			}
			return classElements;
		  }

		  function changeVisibilityByClass(theClass) {
			var el = getElementsByClass(document,theClass);
			var elLength = el.length;
			for (i = 0; i < elLength; i++ ){
				if( el[i].style.display != 'none' )
					el[i].style.display = 'none';
				else
					el[i].style.display = 'block';
			}
		  }

		  function changeVisibilityById(theId) {
				if( document.getElementById(theId).style.display != 'none' )
				{	document.getElementById(theId).style.display = 'none';  }
				else
				{	document.getElementById(theId).style.display = 'block';  }

		  }

  		  function blendOut(theClass) {
			var el = getElementsByClass(document,theClass);
			var elLength = el.length;
			for (i = 0; i < elLength; i++ ){
					el[i].style.display = 'none';
			}
			document.getElementById(theClass + 'On').style.display = 'inline-block';
			document.getElementById(theClass + 'Off').style.display = 'none';
		  }

  		  function show(theClass) {
			var el = getElementsByClass(document,theClass);
			var elLength = el.length;
			for (i = 0; i < elLength; i++ ){
					el[i].style.display = 'block';
			}
			document.getElementById(theClass + 'On').style.display = 'none';
			document.getElementById(theClass + 'Off').style.display = 'inline-block';
		  }
		  function zoomImg( source )
		  {
				document.getElementById('zoomLink').style.display = 'block';
				document.getElementById('zoomImage').src = source;
		  }

		  function closeZoom()
		  {
				document.getElementById('zoomLink').style.display = 'none';
		  }
