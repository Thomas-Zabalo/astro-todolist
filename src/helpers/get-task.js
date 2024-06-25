consfunction getTask(){
	const url = "http://localhost:3000/Tache/content/1";

        const fetchOptions = { method: "GET" };

        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((dataJSON) => {
							console.log(dataJSON)
            })
            .catch((error) => {
                console.error(error);
            });
}
