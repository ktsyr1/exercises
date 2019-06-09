var Cfull    =   ( 7.47+10.12+6.3+16.47+10.56+13.45+14.20+7.45+7.08+15.42+8.10); 
 function CfullT(){
  var v = Cfull  ,
      v1= Math.floor( v / 60) ,
       v2 =    v % 60 , 
       v3 = Math.floor(v % 60)
       v4 = v3 - v2 ;
   var v5 = v4.toString().slice(3,5),
       v6 = v1 +":"+ v3 +":"+ v5 ; 
       document.write( "باقي لنهاية الكورس  : "+ v6 );
       alert("باقي لنهاية الكورس  : "+ v6 ); }
       
 CfullT();

