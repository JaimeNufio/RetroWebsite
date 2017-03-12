
function mouseOver() {
    document.getElementById("logotext").innerHTML ="\
            ,:/+/-\n \
            /M/              .,-=;//;-\n \
       .:/= ;MH/,    ,=/+%$XH@MM#@:\n \
      -$##@+$###@H@MMM#######H:.    -/H#\n \
 .,H@H@ X######@ -H#####@+-     -+H###@X\n \
  .,@##H;      +XM##M/,     =%@###@X;-\n \
X%-  :M##########$.    .:%M###@%:\n \
M##H,   +H@@@$/-.  ,;$M###@%,          -\n \
M####M=,,---,.-%%H####M$:          ,+@##\n \
@##################@/.         :%H##@$-\n \
M###############H,         ;HM##M$=\n \
#################.    .=$M##M$=\n \
################H..;XM##M$=          .:+\n \
M###################@%=           =+@MH%\n \
@#################M/.         =+H#X%=\n \
=+M###############M,      ,/X#H+:,\n \
  .;XM###########H=   ,/X#H+:;\n \
     .=+HM#######M+/+HM@+=.\n \
         ,:/%XM####H/.\n \
              ,.:=-.";
}

function mouseOut() {
    document.getElementById("logotext").innerHTML ="\
             .,-:;//;:=,\n \
         . :H@@@MM@M#H/.,+%;,\n \
      ,/X+ +M@@M@MM%=,-%HMMM@X/,\n \
     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-\n \
    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.\n \
  ,%MM@@MH ,@%=            .---=-=:=,.\n \
  -@#@@@MX .,              -%HX$$%%%+;\n \
 =-./@M@M$                  .;@MMMM@MM:\n \
 X@/ -$MM/                    .+MM@@@M$\n \
,@M@H: :@:                    . -X#@@@@-\n \
,@@@MMX, .                    /H- ;@M@M=\n \
.H@@@@M@+,                    %MM+..%#$.\n \
 /MMMM@MMH/.                  XM@MH; -;\n \
  /%+%$XHH@$=              , .H@@@@MX,\n \
   .=--------.           -%H.,@@@@@MX,\n \
   .%MM@@@HHHXX$$$%+- .:$MMX -M@@MM%.\n \
     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=\n \
       =%@M@M#@$-.=$@MM@@@M; %M%=\n \
         ,:+$+-,/H#MMMMMMM@- -,\n \
               =++%%%%+/:-.";
}

var classname = document.getElementsByClassName("link");

var addUnder = function() {
	var oldname = this.innerHTML;    
	this.innerHTML = oldname+"_";
};

var removeUnder = function() {    
	var oldname = this.innerHTML;  
	this.innerHTML = oldname.replace('_','');
};

for (var i = 0; i < classname.length; i++) {
	classname[i].addEventListener("mouseover", addUnder, false);
	classname[i].addEventListener("mouseout", removeUnder, false);
}
document.getElementById("logotext").addEventListener("mouseover", mouseOver);
document.getElementById("logotext").addEventListener("mouseout", mouseOut);

