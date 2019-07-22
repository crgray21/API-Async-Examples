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
     get(url) {
         return new Promise((resolve, reject) => {
             fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
         })
     }

     post(url, data) {
        const payload = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } 
        return new Promise((resolve, reject) => {
            fetch(url, payload)
               .then(res => res.json())
               .then(data => resolve(data))
               .catch(err => reject(err));
        })
    }

    put(url, data) {
        const payload = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } 
        return new Promise((resolve, reject) => {
            fetch(url, payload)
               .then(res => res.json())
               .then(data => resolve(data))
               .catch(err => reject(err));
        })
    }
     
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
               .then(res => res.json())
               .then(() => resolve('Resource deleted'))
               .catch(err => reject(err));
        })
    }


 }
