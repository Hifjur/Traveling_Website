import { useEffect, useState } from 'react';

const useResorts = () => {
    const [resorts, setResorts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    return [resorts, setResorts];
};

export default useResorts;