import React, { useEffect, useState } from 'react';
import Tabledatarow from './Tabledatarow';
import axiosInstance from '../../../Axiosconfig';

const Tabledata = ({ toggleView, toggleEdit }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/api/users', { withCredentials: true });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data.map((item, index) => (
                <Tabledatarow 
                    key={index} 
                    account={item}
                    toggleView={toggleView}
                    toggleEdit={toggleEdit}
                />
            ))}
        </>
    );
};

export default Tabledata;
