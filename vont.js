function tstmail(email){
    p1 = email.indexOf("@");
    p2 = email.lastIndexOf(".");
    ch1 = email.substring(0, p1);
    ch2 = email.substring(p1 + 1, p2);
    ch3 = email.substring(p2 + 1,);
   tst=true
   if (email != "") {
   if (!(alpha(ch1) || alpha(ch2) || alpha(ch3)) || ch1 == "" || ch2 == "" || ch3 == ""
   || ch3.length<2|| ch3.length>4 ||ch1.length <3 ||ch2.length <3|| p2 < p1 ){
    tst=false
    }
   }
  return tst
}
function alphamin(ch)
{
    ch=ch.toLowerCase()

    i=0;
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"a")||(ch.charAt(i)>"z")){
            tst=false
        }
        i++;

    }
    return tst;
}
function alphamaj(ch)
{
    ch=ch.toUpperCase()
    i=0;
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"A")||(ch.charAt(i)>"Z")){
            tst=false
        }
        i++;

    }
    return tst;
}
function chiff(ch){
    i=0
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"0")||(ch.charAt(i)>"9")){
            tst=false
        }
        i++;

    }
    return tst;

}
function verif1(){
    email=document.getElementById("mail").value;
    pass=document.getElementById("pass").value;
    genre=document.getElementById("genre").selectedIndex;
    oui=document.getElementById("oui").checked;
    non=document.getElementById("non").checked;
    sans=document.getElementById("sans").checked;
    if(tstmail(email)==false){
        alert("votre email est incorrect")
    }
    if(pass.length!=6||chiff(pass)==false||alphamaj(pass)==false||alphamin(pass)==false){
        alert("votre Mot de passe inccorect")
    }
    if(genre==0){
        alert("choix votre genre")
    }
    if(oui==false&&non==false&&sans==false){
        alert("couche une reponse")
    }
}