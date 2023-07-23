import {json, redirect} from 'react-router-dom';
import EventForm from '../components/EventForm';
import Card from '../components/Card';
const NewEvent = () => {
  return (
    <>
      <Card>
        <EventForm />
      </Card>
    </>
  );
};
export default NewEvent;

export const action  = async ({request, params}) =>{

  const data = await request.formData();

  const eventData ={
    title: data.get('title'),
    place: data.get('place'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };
  console.log(eventData);

  const res = await fetch('https://eventos-c324e-default-rtdb.firebaseio.com/events.json', {
    method:'POST',  
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(eventData)
  });

  if (!res.ok){
    throw json({message:'Los datos no se han podido guardar'},{status: 500});
  }else{
    return redirect('/events');
  }


};

