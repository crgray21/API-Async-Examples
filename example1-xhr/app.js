document.getElementById('customer-button').addEventListener('click', loadCustomer);
document.getElementById('customers-button').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    //Create XHR Object --> XMLHttp
    const xhr = new XMLHttpRequest();

    //OPEN property --> (type of request, file name, asyc? true | false)
    xhr.open('GET', 'customer.json', true);

    // Optional --> Usually used for spinners/loaders
    // xhr.onprogress = function() {
    //     console.log('READYSTATE', this.readyState);
    // }


    //handle that data
    xhr.onload = function() {
        //check for 200 response
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `<ul>
                                <li>${customer.id}</li>
                                <li>${customer.name}</li>
                                <li>${customer.company}</li>
                                <li>${customer.phone}</li>
                            </ul>`
            document.getElementById('customer').innerHTML = output
        }
    }

    // xhr.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText)
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request error...')
    }

    xhr.send();


    //readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = ''
            //append customers to list
            customers.forEach(function(customer) {
                output += `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
                `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send()
}