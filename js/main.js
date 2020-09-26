//set variables
//Austria: insurance = horsePower x 100 /age + 50
//Hungary: insurance = horsePower x 120 /age + 100
//Austria: insurance = horsePower x 150 /(age+3) + 50



function calculateInsurance() {

    var select = document.getElementById("select").value;
    var power = document.getElementById("horse").value;
    var age = document.getElementById("age").value;
    var customer = document.getElementById("name").value;
    // document.getElementById("result").innerHTML = horsePower * 100 / age + 50 ;

    if ( select == 'Austria') {
        document.getElementById('print').innerHTML = '<br>' + customer + ' your car insurance for Austria is = ' +  Math.floor(power * 100 / age + 50 ) + " €" ;
    }else if(select == "Hungary") {
        document.getElementById("print").innerHTML = '<br>' + customer  + " your car insurance for Hungary is = " + Math.floor(power * 120 / age + 100)+ " €";
    }else if (select == "Greece") {
        document.getElementById("print").innerHTML = '<br>' + customer + " your car insurance for Greece is = " + Math.floor(power * 150 / (age * 3) + 100)+ " €";
    } else {
        document.getElementById("print").innerHTML = "currently working to add more countries";
    }
}

document.getElementById("above").addEventListener("click", calculateInsurance, false);





