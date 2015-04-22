function aaa() {
        document.write(<ul class='share buttons'>
  <li><a href='https://www.facebook.com/sharer/sharer.php?u=&t=' target='_blank' rel='nofollow' title='Share on Facebook' onclick='window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;'><i class='fa fa-facebook-square fa-2x'></i></a></li>
  <li><a href='https://twitter.com/intent/tweet?source=&text=:%20&via=Indonesia' target='_blank' rel='nofollow' title='Tweet' onclick='window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20' + encodeURIComponent(document.URL)); return false;'><i class='fa fa-twitter-square fa-2x'></i></a></li>
  <li><a href='https://plus.google.com/share?url=' target='_blank' rel='nofollow' title='Share on Google+' onclick='window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false;'><i class='fa fa-google-plus-square fa-2x'></i></a></li>
  <li><a href='http://pinterest.com/pin/create/button/?url=&description=' target='_blank' rel='nofollow' title='Pin it' onclick='window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' +  encodeURIComponent(document.title)); return false;'><i class='fa fa-pinterest-square fa-2x'></i></a></li>
  <li><a href='http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=' target='_blank' rel='nofollow' title='Share on LinkedIn' onclick='window.open('http://www.linkedin.com/sharearticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;'><i class='fa fa-linkedin-square fa-2x'></i></a></li>
</ul>)
}
