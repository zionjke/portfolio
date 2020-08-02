import * as axios from "axios";

export const sendForm = (name, email, message) => {
    axios.post('https://smtp-nodeja-server.herokuapp.com/send', {name, email, message})
        .then(res => {
            console.log(res)

        })
        .catch(e => {
            console.log(e)
        })
}