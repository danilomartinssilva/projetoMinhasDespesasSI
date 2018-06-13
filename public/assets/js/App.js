function CadastrarDespesa(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var dateAdd = document.getElementById("dateAdd").value;

    var obj = {description:description,amount:amount,dateAdd:dateAdd};
    /* var database = firebase.database(); */

    db.database().ref('teste').push(obj);
    

    

}
