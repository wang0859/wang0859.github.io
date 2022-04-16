window.onload = printTable;
// create the json object
var tableData = [
{
	"Time" : "09:00 - 11:00",
	"Monday" : "Communications I",
	"Tuesday" : "Client Services",
	"Wednesday" : "Special Collections",
	"Thursday" : "Directed Research Seminar",
	"Friday" : "Client Services"
},
{
	"Time" : "11:00 - 12:30",
	"Monday" : "Reference",
	"Tuesday" : "Internet App",
	"Wednesday" : "Library Software",
	"Thursday" : "French",
	"Friday" : "Reference"
},
{
	"Time" : "14:00 - 15:00",
	"Monday" : "Acquisitions",
	"Tuesday" : "General Elective",
	"Wednesday" : "Marketing",
	"Thursday" : "Emerging Library Tech",
	"Friday" : "Library Software"
},
{
	"Time" : "15:30 - 17:30",
	"Monday" : "French",
	"Tuesday" : "French",
	"Wednesday" : "Acquisitions",
	"Thursday" : "Subject Analysis",
	"Friday" : "Internet App"
}
];

// console.log(tableData);
function printTable(){

	let headers = [];
	
	// find the table headers from first object
	let firstObj = tableData[0];
	for (key in firstObj){
		headers.push(key);
	}

	let tableStr = '<thead id="table-head" class="thead"><tr id="table-header">';

	// create headers
	for (let i = 0 ; i < headers.length; i++){
		tableStr += '<th id="th' + i + '" class="table-header">' + headers[i] + '</th>'
	}

	tableStr += '</tr></thead><tbody id="table-body" class="tbody">';
	
	// print content
	for (let i = 0; i < tableData.length; i++){
		let currentRow = tableData[i];
		tableStr += '<tr id="table-row-'+ i +'" class="table-row">';
		for (let i = 0 ; i < headers.length; i++){
			tableStr += '<td class="tdclass">'+ currentRow[headers[i]] +'</td>'
		}
		tableStr += '</tr>'
	}

	tableStr += '</tbody></table>'
	

	let target = document.getElementById("table-id");
	console.log(target)
	target.innerHTML = tableStr;

}

function updateProfile(){
	let name = document.getElementById("Name").value;
	let email = document.getElementById("email").value;
	let address = document.getElementById("Address").value;
	let city = document.getElementById("City").value;
	let province = document.getElementById("Province").value;
	let postalCode = document.getElementById("Postalcode").value;

	console.log(name + email+ address + city + province + postalCode)



	let namefield = document.getElementById("name-field");
	let emailfield = document.getElementById("email-field");
	let addressfield = document.getElementById("address-field");
	if (name && email && address && city && province !== "SP" && postalCode){
		namefield.innerHTML = name;
		emailfield.innerHTML = email;

	// build address
	let resultStr = address + ', ' + city + ', ' + province + ', ' + postalCode;
	addressfield.innerHTML = resultStr;
	}
	else
	{
		alert('There is an empty field exists')
	}


}

