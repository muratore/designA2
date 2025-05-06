import bus from "../utils/bus";

// bus é a instancia da classe EventEmitir importada e instancia na pasta utils. bus.js

export default function useFlashMessage(){
    function setFlashMessage(msg, type){
        bus.emit("flash", {
            message: msg,
            type: type
        })
    }

    return {setFlashMessage}
}