$(document).ready(function(){
    $('.info-btn').click(function(){
    	
        // Get the data from each element on the form.
    	const themename = document.getElementById('themeName');
        const themeDescription = document.getElementById('themedescription');
        
        // This variable stores all the data.
        // /r for space in file
        let data = 
            ''+ themename.value + '.mobile:' + '\n'+ 
            '  ' + 'label: mobile' + '\n'+ 
            '  ' + "mediaQuery: 'all and (min-width: 0px) and (max-width: 767px)' " + '\n'+ 
            '  ' + 'weight: 0' + '\n'+ 
            '  ' + 'multipliers:' + '\n'+ 
            '    ' + '- 1x' + '\n'+ 
            ''+ themename.value + '.tablet:' + '\n'+ 
            '  '+ 'label: tablet' + '\n'+ 
            '  '+ "mediaQuery: 'all and (min-width: 768px) and (max-width: 991px)'" + '\n'+ 
            '  '+ 'weight: 1' + '\n'+ 
            '  '+ 'multipliers:' + '\n'+ 
            '    '+ '- 1x' + '\n'+ 
            ''+ themename.value + '.wide:' + '\n'+ 
            '  '+'label: wide' + '\n'+ 
            '  '+"mediaQuery: 'all and (min-width: 991px)'" + '\n'+ 
            '  '+'weight: 2' + '\n'+ 
            '  '+'multipliers:' + '\n'+ 
            '    '+'- 1x' + '\n';


        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        var themenamefile = document.getElementById('themeName');
        var baseTheme = $("#base-theme option:selected").val();
        const sFileName =  themenamefile.value +'.'+ 'breakpoints.yml';   // The file to save the data.

        let newLink = document.createElement('a');
        newLink.download  = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    });

    $('.info-btn').click(function(){
    	
        // Get the data from each element on the form.
    	const themename = document.getElementById('themeName');
        const themeDescription = document.getElementById('themedescription');
        
        // This variable stores all the data.
        // /r for space in file
        let data = 
            'global-styling:'+ '\n'+
            '  css:'+ '\n'+
            '    base:'+ '\n'+
            '      assets/css/style.css: {}'+ '\n'+
            ''+'\n'+
            '  js:'+ '\n'+
            '    assets/js/global.js: {}'+ '\n'+
            ''+ '\n'+
            '  dependencies:'+ '\n'+
            '    - core/drupal'+ '\n'+
            '    - core/drupal'+ '\n';


        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        var themenamefile = document.getElementById('themeName');
        const sFileName =  themenamefile.value +'.'+ 'libraries.yml';   // The file to save the data.

        let newLink = document.createElement('a');
        newLink.download  = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    });
});