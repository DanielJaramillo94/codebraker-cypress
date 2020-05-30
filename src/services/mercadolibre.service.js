import axios from 'axios'

let apiRoutes = {
    searchRoute: 'http://localhost:3000/codeBreaker',
}

let api = {
async getResult(input) {
    let data = await axios.get(apiRoutes.searchRoute, {
        params: {
        value: input,
        // offset: offset,
        // limit: limit
        }
    })
    // console.log(data);
    
    return data
},
// async getSeller(id) {
//     let data = await axios.get(apiRoutes.searchRoute, {
//         params: {
//         seller_id: id
//         }
//     })
//     return data
// }
}

export default api;