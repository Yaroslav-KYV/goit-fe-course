export default function fetchCountries(inputText) {
return fetch(`https://restcountries.eu/rest/v2/name/${inputText}`)
.then(res => res.json())
}
