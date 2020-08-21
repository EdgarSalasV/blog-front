function setupAxios(axios, token) {
    
    if (token) {

        console.log('veces del token: ', token)

        axios.interceptors.request.use(
            config => {
                console.log('DENTRO DEL INTERCEPTOR ', token)
                    config.headers.Authorization = `Bearer ${token}`;

                return config;
            },
            err => Promise.reject(err)
        );
    }
}
export default setupAxios