import { json, redirect, useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import EventForm from '../components/EventForm';
const EditEvent = () => {
  const data = useLoaderData();
  const event = data;
  return (
    <Card>
      <EventForm event={event} />
    </Card>
  );
};
export default EditEvent;

export const loader = async ({ request, params }) => {
  const id = params.idEvents;

  const response = await fetch(
    `https://eventos-c324e-default-rtdb.firebaseio.com/events/${id}.json`
  );

  if (!response.ok) {
    throw json({ message: 'Error al editar los datos' }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({request, params}) =>{

  const formData = await request.formData();
  const id= params.idEvents;

  const eventData = {
    title: formData.get('title'),
    place: formData.get('place'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  }

  const response = await fetch(`https://eventos-c324e-default-rtdb.firebaseio.com/events/${id}.json`, {
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(eventData)
  });

  if(!response.ok){
    throw json({message:'Los datos del evento no se han modificado'},{status: 500});
  }else{
    return redirect('/events');
  }
};
