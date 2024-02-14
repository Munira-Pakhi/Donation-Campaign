import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const Card = () => {
    const [item, setItem] = useState([])

    const {id} = useParams()

    const items = useLoaderData()

    useEffect(()=>{
        const findItem = items?.find(item=>item.id == id)
        setItem(findItem);
    },[id,items])

    return (
        <div >
            <CardDetails item={item}></CardDetails>
        </div>
    );
};

export default Card;