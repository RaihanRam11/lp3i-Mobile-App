import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-rtwgdkb/endpoint/data/v1',
    headers: {
        'api-key': 'Bod3ibYJ7A4N8G0Eqes0wlEAyLBT5no6qp7n8NAtsahNC6PsYkFHdFfjgzqasVIN'
    },
})

export default ApiLib;