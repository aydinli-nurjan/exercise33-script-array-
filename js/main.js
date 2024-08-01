
let country = ['Azerbaycan', 'Turkey', 'Russia']

let city = [
    ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar', 'Qusar'],
    ['Istanbul', "Ankara", "Trabzon"],
    ['Moskva', 'Saint Petersburq', 'Kolininqrad']
]

let street = [
    'Nizami', 'Cavadxan', 'Tebriz', 'Uzeyir Hacibeyov', 'Ataturk', 'Karam', 'Kuyu yolu', 'Arbat', 'Nikolskaya', 'Tverskaya', 'Strominka'

]

function demo() {

    let input = document.getElementById('input')
    country.push(input.value)
    input.value = ""

    for (let u = 0; u < country.length; u++) {
        let result = document.getElementsByClassName('result')
        console.log(result[u])
        result[0].innerHTML = country[u]
    }
    console.log(country)


    let inpt = document.getElementById('inpt')
    city.push(inpt.value)
    inpt.value = ""

    for (let a = 0; a < city.length; a++) {
        let reslt = document.getElementsByClassName('reslt')
        console.log(reslt[a])
        reslt[0].innerHTML = city[a]
    }
    console.log(city)


    let inp = document.getElementById('inp')
    street.push(inp.value)
    inp.value = ""

    for (let c = 0; c < street.length; c++) {
        let res = document.getElementsByClassName('res')
        console.log(res[c])
        res[0].innerHTML = street[c]
    }
    console.log(street)

}

for (var i = 0; i < country.length; i++) {
    document.write(country[i] + "<br>")

    document.write("<ul>")
    for (var j = 0; j < city[i].length; j++) {
        document.write("<li>" + city[i][j] + "</li>")




        document.write("<ul>")
        for (var s = 0; s < 1; s++) {
            document.write("<li>" + street[j]+ "</li>")
        }
        document.write("</ul>")
    }

    document.write("</ul>")
}
