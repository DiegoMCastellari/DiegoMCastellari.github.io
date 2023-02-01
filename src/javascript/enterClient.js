var jobContent = document.querySelectorAll(".jobContent")[0]
var cliente = document.querySelector("#client")
jobContent.style.display = 'none';

/* function printvalue(){
    let jobName = 'notfound';
    for ( let j=0; j<jobsCode.length; j++ ){
        if( cliente.value == jobsCode[j].view ){
            jobName = jobsCode[j].view; 
        }
    }
    if( jobName != 'notfound' ){
        window.open("./views/clients/"+jobName+".html", "_self");
    } else {
        document.querySelector("#errorClient").innerHTML = 'Cliente no encontrado'
    }
} */

function openFile(docfile){
    let url = "../src/data/files/"+ docfile
    window.open(url, "_blank");
}


var jobTitle = document.querySelectorAll(".title")[0];
var jobParcela = document.querySelectorAll(".partcela")[0];
var jobCliente = document.querySelectorAll(".cliente")[0];
/* var jobResume = document.querySelectorAll(".jobResume")[0]; */
var jobAdvance = document.querySelectorAll(".jobAdvance")[0];
var jobBudget = document.querySelectorAll(".jobBudget")[0];
var proyFiles = document.querySelectorAll(".proyFiles")[0];


function updateValues(value){

    let jobName = value;

    let jobAdvanceHTML = "";
    let jobBudgetHTML = "";
    let proyFilesHTML = "";

    jobTitle.innerHTML = jobName.trabajo.clase
    jobParcela.innerHTML = '<div class="partcela"> <div class="jobPda">'+ jobName.trabajo.parcela +'</div> <div class="jobPda">'+ jobName.trabajo.nomenclatura +'</div><div class="jobPda">'+ jobName.trabajo.dominio +'</div> <div class="jobPda">'+ jobName.trabajo.direccion +'</div></div>'
    jobCliente.innerHTML = '<div class="partcela"> <div class="jobPda">'+ jobName.cliente.nombre +'</div> <div class="jobPda">'+ jobName.cliente.cuit +'</div><div class="jobPda">'+ jobName.cliente.direccion +'</div> <div class="jobPda">'+ jobName.cliente.tel +'</div></div>'

    let stepsHTML = "";
    let varpresc = "No";
    for ( let x=0; x<jobName.avances.length; x++){

        if(jobName.avances[x].estado == "-"){

            if(varpresc == "limite"){
                stepsHTML = stepsHTML + '<div class="advStep presc"> <div class="advName">'+ jobName.avances[x].avence +'</div></div>'
            } else {
                stepsHTML = stepsHTML + '<div class="advStep"> <div class="advName">'+ jobName.avances[x].avence +'</div></div>'
            }
            
        } else if (jobName.avances[x].estado == "EN PROCESO"){
            stepsHTML = stepsHTML + '<div class="advStep proceso"> <div class="advName ">'+ jobName.avances[x].avence +'</div> <div class="advState">'+ jobName.avances[x].estado + '</div> </div>'
        } else {
            stepsHTML = stepsHTML + '<div class="advStep finalizado"> <div class="advName">'+ jobName.avances[x].avence +'</div> <div class="advState">'+ jobName.avances[x].estado + '</div> <div class="advDate">'+ jobName.avances[x].fecha + '</div> </div>'
        }  

        if(jobName.avances[x].avence == "Plano Definitivo" & jobName.trabajo.clase == "Plano de Prescripción"){
            varpresc = "limite";
        }
    }
    jobAdvanceHTML = jobAdvanceHTML + stepsHTML;
    jobAdvance.innerHTML = jobAdvanceHTML;

    

    let devPerc = 0;
    let totalPayments = 0;
    let paymentsHTML = ""
    for ( let x=0; x<jobName.pagos.length; x++){
        totalPayments = totalPayments + jobName.pagos[x].monto
        devPerc = devPerc + jobName.pagos[x].porc;
        paymentsHTML = paymentsHTML + '<div class="budgetPay"> <div class="payAmout"> $'+ jobName.pagos[x].monto +'</div><div class="payDate">'+ jobName.pagos[x].fecha +'</div> <div class="payPorc">'+ jobName.pagos[x].porc +'%</div> </div>'
    } 

    let totalExpenses = 0;
    let expensesHTML = ""
    for ( let x=0; x<jobName.gastos.length; x++){
        totalExpenses = totalExpenses + jobName.gastos[x].monto
        expensesHTML = expensesHTML + '<div class="expensesPay"> <div class="payAmout">'+ jobName.gastos[x].form +'</div><div class="payDate">$'+ jobName.gastos[x].monto +'</div><div class="payDate">'+ jobName.gastos[x].fecha +'</div> </div>'
    } 
    
    jobBudgetHTML = '<div class="budgetTotal"><div class="totalBudget">$'+ jobName.presupuestos.monto +' - '+ devPerc +'%</div><div class="totalDate">Fecha: '+ jobName.presupuestos.fecha + '</div> </div>'

    let devAmount = jobName.presupuestos.monto - jobName.presupuestos.monto * devPerc / 100
    jobBudgetHTML = jobBudgetHTML + '<div class="detailBudget"> <div> <div class="budgetResume"> <div class="totalBudget">$'+devAmount+'</div> <div class="totalPorc">$'+ totalPayments + '</div></div>' + paymentsHTML + '</div>'+ '<div> <div class="expensesResume"> <div class="totalExpenses">$'+totalExpenses+'</div> </div>' + expensesHTML + '</div>'+'</div>'

    jobBudget.innerHTML = jobBudgetHTML

    
    
    for ( let x=0; x<jobName.documentos.length; x++){
        let fielURL = jobName.view +"/"+ jobName.documentos[x].doc
        proyFilesHTML = proyFilesHTML + '<div class="file '+ jobName.documentos[x].extension +'" onclick="openFile(\''+ fielURL +'\')"> '+ jobName.documentos[x].nombre +' </div>'
    }
    proyFiles.innerHTML = proyFilesHTML

}



function mostrarKey(){
    if(cliente.value =="euge"){
        document.querySelectorAll(".dropdown")[0].style.display = 'block';
    } else {
        let jobName = 'notfound';
        for ( let j=0; j<jobsCode.length; j++ ){
            if( cliente.value == jobsCode[j].view ){
                jobName = jobsCode[j]; 
            }
        }

        if( jobName == 'notfound' ){
            document.querySelector("#errorClient").innerHTML = 'Cliente no encontrado'
        } else {
            jobContent.style.display = 'flex';
            updateValues(jobName)
        }
    }
}

function dropdownUpdate(){
    let DropDown = document.getElementById("dropdownList");
    let jobName;
    let valor_selected = DropDown.options[DropDown.selectedIndex].value;
    for ( let j=0; j<jobsCode.length; j++ ){
        if( valor_selected == jobsCode[j].view ){
            jobName = jobsCode[j]; 
        }
    }
    jobContent.style.display = 'flex';
    updateValues(jobName)
}   

/* 
function LayerUpdate(){
     */