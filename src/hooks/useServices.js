import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghastly-grave-69025.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
};

export default useServices;