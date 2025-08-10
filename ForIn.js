let person = {
	firstName: "feyi",
	lastName: "Onoja",
	age: 92,
	Nationality: "Togolese"
}
for (const detail in person) {
	if (detail == "age"){
		console.log(`${detail}: ${person[detail]}`);
	}

}