import { json, redirect, useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import EventsList from '../components/EventsList';

const Events = () => {
  const data = useLoaderData();
  // const events = data.events;

  const transformedEvents=[];

  for (const key in data){
    const events ={
      id: key,
      ...data[key]
    }

    transformedEvents.push(events)
  }

  return (
    <Card>
      <EventsList  events={transformedEvents}/>
    </Card>
  );
};
export default Events;

export const loader = async (request, params) =>{

  const response = await fetch('https://eventos-c324e-default-rtdb.firebaseio.com/events.json');

  if(!response.ok){
    throw json({message:'No se han podido listar los eventos'},{status:500});
  }else{
    return response;
  }
};


