 function calculateArea() {
            // Get the radius from the user using the prompt() function
			let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           let area = Math.PI * radius * radius;

// Round off the result to two decimal places
area = area.toFixed(2);

// Display the result
	 alert(`The area of the circle with radius ${radius} is ${area}`)
console.log("The area of the circle with radius " + radius + " is " + area);
}
calculateArea();