let szamlazas = []

function rogzit () {
    
    let tmpIdopont = document.getElementById("idopont").value

    let tmpUzenet = document.getElementById("uzenet").value

    let tmpBeszelgetes = document.getElementById("beszelgetes").value  

    let tmpComObj = {
        Idopont: Number (tmpIdopont),
        SMS: Number (tmpUzenet),
        Hivas: Number (tmpBeszelgetes)
    }

    szamlazas.push(tmpComObj)

    console.log('Bevitt adatok', tmpIdopont, tmpUzenet, tmpBeszelgetes)

    console.log('Osszes SMS:',szamlazas)

    document.getElementById("forgalom_lista").innerHTML += `<li> ${tmpIdopont} Napon ${tmpUzenet} db SMS és ${tmpBeszelgetes} perc hívás volt</li>`


}
function osszes () 
{
    let sumSMS=0

    for (const element of szamlazas) {
        sumSMS = sumSMS + element.SMS 
        
    }

    let sumHivas=0
    for (const element of szamlazas) {
        sumHivas = sumHivas + element.Hivas
    }

    document.getElementById("forgalom_lista").innerHTML = `<li> ${sumSMS} db SMS és ${sumHivas} perc hívás volt</li>`


}
function szorzas ()
{
    let sumSMS=0

for (const element of szamlazas) {
    sumSMS = sumSMS + element.SMS
}

let sumHivas=0
for (const element of szamlazas) {
    sumHivas = sumHivas + element.Hivas

}


    document.getElementById("ossz_fizetes").innerHTML = `<li> ${sumSMS*20} Ft SMS és ${sumHivas*39} Ft hívás volt</li>`
    
}