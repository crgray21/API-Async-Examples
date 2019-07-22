/**
 * EasyHTTP Library 
 * For making HTTP Requests
 * 
 *  @version 2.0.0
 *  @author Cory Gray
 *  @license MIT
 * 
 * 
 **/

 class EasyHTTP {
     async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
     }

     async post(url, data) {
        const payload = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } 
        const response = await fetch(url, payload)
        const resData = await response.json();
        return resData;
    }

    async put(url, data) {
        const payload = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } 
        const response = await fetch(url, payload)
        const resData = await response.json();
        return resData;
    }
     
    async delete(url) {
        const response = await fetch(url)
        const resData = await 'Resource Deleted';
        return resData;
    }

 }
