function asciidoc2Html(a){return loadAsciidoctor(),asciidoctor.convert(a)}function markdown2Html(a){return loadKramed(),kramed(a,{gfm:!0,breaks:!0,sanitize:!0})}function loadAsciidoctor(){asciidoctor||(importScripts("./dependencies/asciidoctor.1354.js"),Asciidoctor({runtime:{platform:"browser"}}),asciidoctor=Asciidoctor())}function loadKramed(){kramed||importScripts("./dependencies/kramed.min.1354.js")}onmessage=function(e){switch(e.data.cmd){case"testWorker":postMessage("OK");break;case"convertMarkup":switch(e.data.type){case"asciidoc":postMessage({html:asciidoc2Html(e.data.markup)});break;case"markdown":postMessage({html:markdown2Html(e.data.markup)})}break;case"runFunction":var f=eval("("+e.data["function"]+")");postMessage({response:f.apply(f,e.data.params||[])})}};var asciidoctor,kramed;