function clearScreen(){
    document.getElementById("result").value = ""
}

function display(value){
    document.getElementById('result').value += value;
}

function calculate(){
    var product =document.getElementById('result').value;
    var displayValue = eval(product);
    document.getElementById('result').value = displayValue
}
