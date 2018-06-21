function RetornarDespesas(){
    var lista= document.getElementById('listaResultados');  
    
    var conteudo = `<tbody>`;
    
    var list  = db.database()
        .ref('minhasdespesas').on('value',function(res){
            var i=0;
            res.forEach(function(item){
                
                console.log(item.val());
                conteudo += `<tr>
                <td>`+item.key+`</td>
                <td>`+item.val().description+`</td>
                <td>`+item.val().amount+`</td>
                <td>`+item.val().dateAdd+`</td>
                </tr>`;
            })
            conteudo +=`</tbody>`;
            console.log(conteudo);
            $("#tbResultado").append(conteudo);
           
        });
}