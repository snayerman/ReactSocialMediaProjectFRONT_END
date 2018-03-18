const baseURL = "http://localhost:3001/";
const headers = new Headers();
var cookie;

headers.set('Content-Type', 'application/json');

const reqConf = {
    headers: headers,
    credentials: 'include',
};


export function post(endpoint, body) {
    return fetch(baseURL + endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        ...reqConf
    });
}

export function put(endpoint, body) {
    return fetch(baseURL + endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
        ...reqConf
    })
}

export function get(endpoint) {
    return fetch(baseURL + endpoint, {
        method: 'GET',
        ...reqConf
    })
}

export function del(endpoint) {
    return fetch(baseURL + endpoint, {
        method: 'DELETE',
        ...reqConf
    })
}

export function registerUser(data) {
    return post("signup", data)
    .then(res => {
      console.log(res);
       return res.ok ? null : createErrorPromise(res);
   })
}
