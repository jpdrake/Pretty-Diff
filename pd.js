var exports="",addthis_config={"data_track_clickback":true},$=function(){"use strict";if(typeof(document.getElementById)===undefined){return;}var i,element,elements=[];for(i=0;i<arguments.length;i+=1){element=arguments[i];if(typeof(element)==='string'){element=document.getElementById(element);}if(arguments.length===1){return element;}elements.push(element);}return elements;},o={au:$('ctype-auto'),ba:$('beau-tab').checked,bb:$('modebeautify').checked,bc:$('beau-char'),bd:$('Beautify'),bi:$('beautyinput'),bl:$('baselabel').value,bn:$('beau-line').checked,bo:$('baseText'),bq:$('beau-quan').value,bs:$('beau-space').checked,bt:$('diffBase'),bx:$('beautyoutput'),bw:$('beau-other'),bz:$('bo'),ch:$('csvchar').value,cn:4,cv:$('ctype-csv'),cz:" ",da:$('diff-tab'),db:$('diffbeautify'),dc:$('diff-char'),dd:$('modediff').checked,dn:$('diffscolonn').checked,dq:$('diff-quan').value,ds:$('diff-space').checked,dt:$('difftall'),dw:$('diff-other'),dv:$('diffoutput'),dy:$('diffquoten').checked,dz:$('diff-line').checked,hd:$('htmld-yes').checked,hm:$('htmlm-yes').checked,ht:$('htmlspecific'),hy:$('html-yes').checked,id:$('inscriptd-yes').checked,is:$('inscript-yes').checked,iz:$('incomment-no').checked,jd:$('jsindentd-all').checked,js:$('jsindent-all').checked,md:$('Minify'),mi:$('minifyinput'),ml:$('minifyinputlines'),mm:$('modeminify').checked,mn:$('minifywindiff'),mo:$('minifyoutputsize'),mr:$('minifywinratiosize'),ms:$('minifyinputsize'),mt:$('minifyratiosize'),mu:$('minifyunixdiff'),mw:$('minifywinsize'),mx:$('minifyoutput'),nl:$('newlabel').value,nt:$('diffNew'),nx:$('newText'),nz:$('no'),ps:$('diff-save').checked,pt:$('ctype-text'),dqp:$('diffquanp'),dqt:$('difftypep'),htd:$('htmlspecificd'),ind:$('scriptindentd'),ins:$('scriptindent'),bops:$('beauops'),csvp:$('csvcharp'),dops:$('diffops'),mops:$('miniops'),context:$('contextSize').value,inline:$('inline').checked},recycle=function(x){"use strict";var lang="auto",comment="noindent",style="indent",html=false,quote=false,semicolon=false,diffview="sidebyside",mode="beautify",publish="webtool",js="",output,source,diffsource="";o.bb=$('modebeautify').checked;o.jd=$('jsindentd-all').checked;o.js=$('jsindent-all').checked;o.ch=$('csvchar').value;o.cv=$('ctype-csv');o.dd=$('modediff').checked;o.mm=$('modeminify').checked;o.pt=$('ctype-text');if(o.cv.checked===true){lang="csv";}else if(o.pt.checked===true){lang="text";}else{lang="auto";}if(o.bb===true){o.hy=$('html-yes').checked;o.ba=$('beau-tab').checked;o.bn=$('beau-line').checked;o.bw=$('beau-other');o.bc=$('beau-char');o.bi=$('beautyinput');o.bq=$('beau-quan').value;o.bs=$('beau-space').checked;o.is=$('inscript-yes').checked;o.iz=$('incomment-no').checked;if(o.ba===true){o.cz="\t";}else if(o.bn===true){o.cz="\n";}else if(o.bw.checked===true){o.cz=o.bc.value;}else{o.cz=" ";}if(!isNaN(o.bq)){o.cn=Number(o.bq);}if(o.is!==true){style="noindent";}if(o.hy===true){html=true;}if(o.iz!==true){comment="indent";}if(o.js===true){js="allman";}source=o.bi.value;mode="beautify";}else if(o.dd===true){o.context=$('contextSize').value;o.inline=$('inline').checked;o.bl=$('baselabel').value;o.nl=$('newlabel').value;o.hd=$('htmld-yes').checked;o.bo=$('baseText');o.nx=$('newText');o.dn=$('diffscolonn').checked;o.dy=$('diffquoten').checked;o.da=$('diff-tab');o.dw=$('diff-other');o.dz=$('diff-line').checked;o.dc=$('diff-char');o.dq=$('diff-quan').value;o.ds=$('diff-space').checked;o.id=$('inscriptd-yes').checked;o.ps=$('diff-save').checked;if(o.da===true){o.cz="\t";}else if(o.dz===true){o.cz="\n";}else if(o.dw.checked===true){o.cz=o.dc.value;}else{o.cz=" ";}if(!isNaN(o.dq)){o.cn=Number(o.dq);}if(o.is!==true){style="noindent";}if(o.hd===true){html=true;}if(o.dy===true){quote=true;}if(o.dn===true){semicolon=true;}if(o.inline===true){diffview="inline";}if(isNaN(o.context)){o.context="";}if(o.ps===true){publish="webdownload";}if(o.jd===true){js="allman";}source=o.bo.value;diffsource=o.nx.value;mode="diff";}else if(o.mm===true){o.hm=$('htmlm-yes').checked;o.mi=$('minifyinput');if(o.hm===true){html=true;}source=o.mi.value;mode="minify";}output=prettydiff(source,diffsource,mode,lang,o.ch,publish,o.cn,o.cz,comment,js,style,html,o.context,quote,semicolon,diffview,o.bl,o.nl,x);if(o.bb===true){o.bx.value=output[0];o.dv.innerHTML=output[1];}else if(o.dd===true){if(o.ps===true){output[2]=output[1]+'<p>This is the generated diff output. Please copy the text output, paste into a text file, and save as a \'.html\' file.</p><textarea rows="40" cols="80" id="textreport">';output[0]='<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><title>Pretty Diff - The difference tool</title><meta name="robots" content="index, follow"/> <meta name="DC.title" content="Pretty Diff - The difference tool"/> <link rel="canonical" href="http://prettydiff.com/" type="application/xhtml+xml" /><meta http-equiv="Content-Type" content="application/xhtml+xml;charset=UTF-8"/><meta http-equiv="Content-Style-Type" content="text/css"/><style type="text/css">body{background-color:#a8b8c8;color:#000;font-family:"Arial";font-size:10px;}button{display:block;font-size:2em;font-weight:bold;margin:1em auto;padding:1em 2em;}button:hover{background:#ccf;}button:active{background:#c00;}h1{font-size:2em;}h1 span{color:#c00;font-size:.5em;}p{clear:both;font-size:1.2em;margin-top:.2em;}#diffoutput{width:100%;}p em{color:#c00;font-weight:bold;}table.diff{border-collapse:collapse;border:.1em solid darkgray;font-size:1em;white-space:pre;}table.diff tbody{font-family:"Courier New",Courier,"Lucida Console",monospace;font-size:1.1em;}table.diff tbody th{font-family:verdana,arial,"Bitstream Vera Sans",helvetica,sans-serif;background:#eed;font-weight:normal;border:.1em solid #bbc;color:#886;padding:.5em .6em 0em 2.4em;text-align:right;vertical-align:top;}table.diff thead{border-bottom:.1em solid #bbc;background:#efefef;font-family:Verdana;}table.diff thead th.texttitle{text-align:left;}table.diff tbody td{letter-spacing:.1em;padding:.5em .5em 0em .5em;vertical-align:top;}table.diff tbody td em{font-style:normal;padding:.05em 0em;margin:0-.09em;}table.diff .empty{background-color:#ddd;}table.diff .replace{background-color:#fd8;}table.diff .replace em{background-color:#ffc;border:.1em solid #cc3;}table.diff .delete{background-color:#e99;}table.diff .delete em{background-color:#fcf;border:.1em solid #900;}table.diff .equal{background-color:#fff;}table.diff .skip{background-color:#efefef;border:.1em solid #aaa;border-right:.1em solid #bbc;}table.diff .insert{background-color:#9e9;}table.diff .insert em{background-color:#ef9;border:1px solid #090;}table.diff th.author{text-align:right;border-top:.1em solid #bbc;background:#efefef;}@media print{html{font-size:.8em;}html table.diff{font-size:.8em;white-space:normal;}}</style></head><body><h1><a href="http://prettydiff.com/">Pretty Diff - The difference tool</a></h1><p>Accessibility note.  &amp;lt;em&amp;gt; tags in the output represent character differences per lines compared.</p>'+output[1]+output[0]+'</body></html>';o.dv.innerHTML=output[2]+output[0].replace(/>/g,"&gt;").replace(/</g,"&lt;")+'</textarea>';}else{o.dv.innerHTML=output[1]+output[0];}}else if(o.mm===true){o.mx.value=output[0];o.dv.innerHTML=output[1];}},pd={prettyvis:function(a){"use strict";var b=a.getAttribute('id'),optioncheck=function(){o.au.disabled=false;if(o.pt.checked){o.au.checked=true;}o.cv.disabled=false;o.pt.disabled=true;o.pt.checked=false;};switch(b){case"modebeautify":optioncheck();o.bx.setAttribute("name","paste_code");o.mx.removeAttribute("name");if(o.bi.value===""&&o.mi.value!==""){o.bi.value=o.mi.value;}else if(o.bi.value===""&&o.bo.value!==""){o.bi.value=o.bo.value;}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="block";o.md.style.display="none";o.dops.style.display="none";o.mops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}break;case"modeminify":optioncheck();o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");if(o.mi.value===""&&o.bi.value!==""){o.mi.value=o.bi.value;}else if(o.mi.value===""&&o.bo.value!==""){o.mi.value=o.bo.value;}if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="none";o.md.style.display="block";o.dops.style.display="none";o.bops.style.display="none";break;case"modediff":o.au.disabled=false;o.cv.disabled=false;o.pt.disabled=false;if(o.bo.value===""&&o.bi.value!==""){o.bo.value=o.bi.value;}else if(o.bo.value===""&&o.mi.value!==""){o.bo.value=o.mi.value;}o.bt.style.display="block";o.nt.style.display="block";o.bd.style.display="none";o.md.style.display="none";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}break;case"diffwide":o.bt.className="diffwide";o.nt.className="diffwide";o.bd.className="wide";o.md.className="wide";break;case"difftall":o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";break;}},codeOps:function(x){"use strict";o.bb=$('modebeautify').checked;o.dd=$('modediff').checked;o.mm=$('modeminify').checked;o.au=$('ctype-auto');if(o.dd===true){o.mops.style.display="none";o.bops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}}else if(o.bb===true){o.mops.style.display="none";o.dops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}}else if(o.mm===true){o.bops.style.display="none";o.dops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}if(o.cv.checked){o.csvp.style.display="block";}else{o.csvp.style.display="none";}if(x===false){o.db.style.display="block";}else{o.db.style.display="none";}},indentchar:function(x){"use strict";if(o.bb===true&&x==="beau-char"){o.bw.checked=true;}else if(o.dd===true&&x==="diff-char"){o.dw.checked=true;}if(o.bw.checked){o.bc.style.background="#eef8ff";}else{o.bc.style.background="#eee";}if(o.dw.checked){o.dc.style.background="#eef8ff";}else{o.dc.style.background="#eee";}},reload:function(){"use strict";o.bb=$('modebeautify').checked;o.dd=$('modediff').checked;o.mm=$('modeminify').checked;o.au=$('ctype-auto');if(o.cv.checked){o.csvp.style.display="block";}if(o.mm===true){o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");o.bd.style.display="none";o.md.style.display="block";o.bops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}else if(o.dd===true){o.bd.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.pt.checked||o.cv.checked){o.db.style.display="none";}else{o.db.style.display="block";}if(o.au.checked){o.ind.style.display="block";o.htd.style.display="block";}else{o.ind.style.display="none";o.htd.style.display="none";}}else if(o.bb===true){o.dops.style.display="none";o.mops.style.display="none";if(o.au.checked){o.ins.style.display="block";o.ht.style.display="block";}else{o.ins.style.display="none";o.ht.style.display="none";}}if(o.dt.checked){o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}if(o.bw.checked){o.bc.style.background="#eef8ff";}if(o.dw.checked){o.dc.style.background="#eef8ff";}}};