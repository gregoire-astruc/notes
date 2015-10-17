/*! @license Gregoire Astruc, 2015 - MIT License */
(function(d) {
    "use strict";
    var showComments = d.getElementById('showComments');
    if (showComments) {
        showComments.onclick = function() {
            this.parentElement.innerHTML = '<h3>Comments</h3>';
            var disqus = d.createElement('div');
            disqus.id = 'disqus_thread';
            disqus.innerHTML = '<i class="fa fa-spinner fa-pulse fa-5x"></i>';
            d.getElementById('comments').appendChild(disqus);

            var disqus_shortname = 'notes-struck';
            var dsq = d.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(dsq);
        };
    }
})(document);
