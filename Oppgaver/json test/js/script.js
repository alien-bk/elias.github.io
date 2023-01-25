let jsonExample = {
    "fNavn": "Elias",
    "eNavn": "Godager"
};

console.log(jsonExample);
console.log(jsonExample.fNavn);

let jsonEmployees = {
    "employees":
    [
        { "firstName":"John", "lastName":"Doe" },
        { "firstName":"Anna", "lastName":"Smith" },
        { "firstName":"Peter", "lastName":"Jones" }
  ]
};

console.log(jsonEmployees.employees[2].lastName);


// Json er et forenklet språk som vi bruker for å enklere lese for både mennesker og pcer


let jsonEksempel = {
    "laerere":
    [
        {"fag":"Naturfag", "navn":"Pratima Mundhe"},
        {"fag":"MedieProduksjon", "navn":"Marthe Ødegaard"},
        {"fag":"Informasjonsteknologi", "navn":"Joakim Husefest"},
        {"fag":"Helse og matfag","navn":"Ida Wolden"},
        {"fag":"Engelsk","navn":"Walter Johnsen"}
    ]
};

// et eksempel på json er at det kan store'e data til en person som navn og fag for eksemp her under. Enn å måtte lage variabler på den måten.

let obj = JSON.parse('{\
    "laerere":\
    [\
        {"fag":"Naturfag", "navn":"Pratima Mundhe"},\
        {"fag":"MedieProduksjon", "navn":"Marthe Ødegaard"},\
        {"fag":"Informasjonsteknologi", "navn":"Joakim Husefest"},\
        {"fag":"Helse og matfag","navn":"Ida Wolden"},\
        {"fag":"Engelsk","navn":"Walter Johnsen"}\
    ]\
}');

console.log(jsonEksempel)
console.log(obj)

// forskjellen mellom jsonEksempel og obj er at obj er gjort om til js variabler

// oppg E
console.log(obj.laerere[3].navn)


let objt = JSON.stringify(jsonEksempel)
objt = JSON.parse(objt)
console.log(objt)