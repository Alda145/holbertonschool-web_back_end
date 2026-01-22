export default function handleResponseFromAPI(promise) {
    return promimse
        .then(() => {
            return { status: 200, body: "success" };

        })

        .catch((err) => {
            return new Error();

        })

        .finally(() => {
            console.log("Got a response from the API");
        });
}