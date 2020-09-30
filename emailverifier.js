
 
 function f1(){
    var coo =document.getElementById("dd").value;
var url = 'https://api.emailverifyapi.com/v3/lookups/json?key=FEFBE137514F4C56&email=' + coo;
     
        fetch(url).then(
            res=>{
                res.json().then(
                    data=>{
                        
                     console.log(data);
                     
                         var temp="";

                        
                        
                             temp+="<tr class='table-success'>";
                             temp+="<td>"+coo+"</td>";

                             temp+="<td>"+data.deliverable+"</td>";
                           
                             
                           temp+="</tr>"
                             

                        

                        
                         document.getElementById("data").innerHTML += temp;
                     
                    
                    }
                )
            }
        ) }
