
class tokenHelper {
    constructor(){
        this.key = "token";
    }

    get(key){
        if (typeof window == "undefined") {
            // Check if it's in the browser
            console.log("in th backend")
            
            return "in the backend";
          }
        console.log(this.key);
        console.log(window.localStorage.getItem(key || this.key))
     return window.localStorage.getItem(key || this.key);
    }
    create(key,value){
        return window.localStorage.setItem(key,value);
    }
    delete(key){
        return window.localStorage.removeItem(key);
    }
    deleteAll(){
        return window.localStorage.clear();
    }

}

export default  new tokenHelper();

