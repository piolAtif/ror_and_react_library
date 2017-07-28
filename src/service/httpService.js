const LOCALAPI = 'http://localhost:8080';
const ACTUALAPI = 'http://10.0.1.29:3000/books';

class httpService{
    constructor(){
        let _books = [];
    }

    getBooks(callback){
        fetch(`${ACTUALAPI}`)
            .then(response=>{
                return response.json()
            }).then((data) => {
            callback(data);
        });
    }
}

export default httpService;