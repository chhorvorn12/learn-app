import axios from "axios";

const ResAxios= axios.create({
    baseURL:"https://restcountries.com/v3.1",
    // timeout: 1000,
    // headers: {'Authorization': 'Bearer 14|Fw1taT758lzmaJEzDaj1RT5RG6cKmwIxk84Pyqo0'}
})

export default ResAxios;