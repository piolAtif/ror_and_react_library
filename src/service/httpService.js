const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
class httpService{
    constructor(url){
        this.url = url;
    }

    getBooks(callback){
        let url = PROXY_URL+this.url;
        fetch(`${url}`)
            .then(response=>{
                return response.json()
            }).then((data) => {
            callback(data.data);
        });
    }
}

export default httpService;