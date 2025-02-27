
const userInput = prompt("Enter a list of froyo flavors (comma-separated):");


if (userInput) {

    const flavorsArray = userInput.split(',').map(flavor => flavor.trim().toLowerCase());


    function countFlavors(flavors) {
        const flavorCount = {};
        for (let flavor of flavors) {
            flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
        }
        return flavorCount;
    }


    const orderSummary = countFlavors(flavorsArray);


    console.table(orderSummary);
} else {
    console.log("No input received. Please refresh and enter flavors.");
}
