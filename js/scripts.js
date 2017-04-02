var triangle1Area = getTriangleArea(-1,6);
	triangle2Area = getTriangleArea(50,12);
	triangle3Area = getTriangleArea(-16,9);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.warn('Nieprawidłowe dane');
	}else if (a && h > 0) {
		return(a*h/2);
	}
			
}

console.log( getTriangleArea(10,6));

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);