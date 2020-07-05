import Axios from "axios";

const axios = Axios.create({})

function Person(_name, _age, _title, _number) {
    return {
        name: _name,
        age: _age,
        title: _title,
        number: _number,
    }
}

const Message = function (_mgs) {
    let mgs = _mgs;
    let length = _mgs.length;
}

const api = () => {
    const api_key = '$2b$10$6FAKdwj8R5u8agHOb9KeuO'
    return `https://api.talkgh.com/api/${api_key}/`;
}

// axios.get('https://api.talkgh.com/api/{API-KEY}/?des='+  number +'&sender=' +  sender +  '&mess=' +
//     message).then(r => {
//     console.log(r);
// }).catch(err => {
//     console.log(err);
// });
const sendSMS = (arr) => {
    // for (let n of arr) {
    //     axios.get(`${api()}?des=${n.number}&sender=Lesson&mess=this is a test message`)
    //         .then(res =>{
    //             console.log(res);
    //         })
    //         .catch(err =>{
    //             console.log(err);
    //         })
    // }
    arr.forEach(item => {
        axios.get(`${api()}?des=${item.number}&sender=Lesson&mess=this is a test message`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    })
}

const worker = () => {
    let arr = [ Person("kwaku", 20, 'DR', '+233506592851'),
         Person('Emmanuel', 30, 'student', '+233574644251')];
    sendSMS(arr);
}

worker();