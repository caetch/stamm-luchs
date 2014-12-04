(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-55233542-1', 'auto');
ga('send', 'pageview');

hs.graphicsDir = 'highslide/graphics / ';
hs.creditsPosition = 'bottom right ';
hs.outlineType = 'custom ';
hs.align = 'center ';
hs.padToMinWidth = true;
hs.captionEval = 'this.a.title ';
hs.registerOverlay({
        html: ' < div class = "closebutton"
onclick = "return hs.close(this)"
title = "Schließen" > < /div>',
        position: 'top right',
        useOnHtml: true,
        fade: 2 / / fading the semi - transparent overlay looks bad in IE
});


 / / gallery config object

        / /
        Add the slideshow controller
        hs.addSlideshow({
            slideshowGroup: 'group1',
            interval: 5000,
            repeat: false,
            useControls: true,
            fixedControls: false,
            overlayOptions: {
                opacity: 0.75,
                position: 'bottom center',
                offsetX: 0,
                offsetY: -10,
                hideOnMouseOut: true
            }
        });

        / / German language strings
        hs.lang = {
            cssDirection: 'ltr',
            loadingText: 'Lade...',
            loadingTitle: 'Klick zum Abbrechen',
            focusTitle: 'Klick um nach vorn zu bringen',
            fullExpandTitle: 'Zur Originalgröße erweitern',
            creditsText: 'Powered by <i>Highslide JS</i>',
            creditsTitle: 'Gehe zur Highslide JS Homepage',
            previousText: 'Voriges',
            nextText: 'Nächstes',
            moveText: 'Verschieben',
            closeText: 'Schließen',
            closeTitle: 'Schließen (Esc)',
            resizeTitle: 'Größe wiederherstellen',
            playText: 'Abspielen',
            playTitle: 'Slideshow abspielen (Leertaste)',
            pauseText: 'Pause',
            pauseTitle: 'Pausiere Slideshow (Leertaste)',
            previousTitle: 'Voriges (Pfeiltaste links)',
            nextTitle: 'Nächstes (Pfeiltaste rechts)',
            moveTitle: 'Verschieben',
            fullExpandText: 'Vollbild',
            number: 'Bild %1 von %2',
            restoreTitle: 'Klick um das Bild zu schließen, klick und ziehe um zu verschieben. Benutze Pfeiltasten für vor und zurück.'
        };