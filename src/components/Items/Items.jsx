import ItemsCard from "./ItemsCard";


const Items = ({items}) => {
    return (
        <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-5 md:ml-0 px-0 md:px-5'>
            {
                items?.map(item=> <ItemsCard key={item.id} item={item} ></ItemsCard>)
            }
        </div>
    ); 

};

export default Items;