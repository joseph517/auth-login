
const request = async (path: string, method: string, body?: object) => {
    const url = "https://jsonplaceholder.typicode.com";

    const response = await fetch(`${url}${path}`, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};
export default request;