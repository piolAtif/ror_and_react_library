class httpService{
    constructor(url){
        this.url = url;
    }

    getBooks(callback){
        let url = this.url;
        fetch(`${url}`)
            .then(response=>{
                return response.json()
            }).then((data) => {
            callback(data.data);
        });
    }
}

export default httpService;