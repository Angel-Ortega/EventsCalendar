import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import Card from '../components/Card';

const EventDetail = () => {
  const data = useLoaderData();
  const event = data;

  return (
    <Card>
      <EventItem event={event} />
    </Card>
  );
};
export default EventDetail;

export const loader = async ({ request, params }) => {
  const id = params.idEvents;
  const response = await fetch(
    `https://eventos-c324e-default-rtdb.firebaseio.com/events/${id}.json`
  );

  if (!response.ok) {
    throw json(
      { message: 'No se han podido cargar los detalles del evento' },
      { status: 500 }
    );
  } else {
    return response;
  }
};

// export const action = async ({request, params}) =>{
//   const eventId = await params.idEvents;
//   console.log(eventId);
//   const response = await fetch(`https://eventos-c324e-default-rtdb.firebaseio.com/events/${eventId}.json`, {
//     method: request.method,
//   });

//   if(!response.ok){
//     throw json({message:'No se puede eliminar el evento'}, {status: 500});
//   }else{
//     return redirect('/events');
//   }
// };