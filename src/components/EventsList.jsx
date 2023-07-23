import { Link, useSubmit, json, redirect } from 'react-router-dom';

const EventsList = ({ events }) => {
  // const submit = useSubmit();


  const deleteEventHandler =  () => {
    // const alert = window.confirm('Está seguro que desea eliminar este evento');

    // if (alert) {
    //   submit(null, { method: 'DELETE', action:'deleteAction'});
    //     const response = await fetch(
    //       `https://eventos-c324e-default-rtdb.firebaseio.com/events/${events.id}.json`,
    //       {
    //         method: 'DELETE',
    //       }
    //     );
    //     const data = response.json();
  
    //     const transformedEvents = [];
  
    //     for (const key in data) {
    //       const events = {
    //         id: key,
    //         ...data[key],
    //       };
  
    //       transformedEvents.remove(events);
    //     }
     
      // if(!response.ok){
      //   throw json({message:'No se puede eliminar el evento'}, {status: 500});
      // }else{
      //   return redirect('/events');
      // }
    // }
  };
  return (
    <>
      <div>
        {/* <h2 className=" text-xl font-bold text-blue-900 text-center">
          Eventos
        </h2> */}
        <ul>
          {events.map((evet) => (
            <li key={evet.id}>
              <div className="flex gap-x-1">
                <Link to={evet.id}>
                  <div className=" bg-gray-200 w-[35rem] flex flex-row gap-3 flex-wrap justify-between my-3 m-auto rounded-lg p-2">
                    <time className=" w-[5rem]">{evet.date}</time>
                    <div className="w-[15rem]">
                      <h2 className=" text-left text-lg text-gray-600 font-bold">
                        {evet.title}
                      </h2>
                      <p className=" text-xs">{evet.place}</p>
                    </div>
                    <img
                      src={evet.image}
                      alt={`Imagen del evento ${evet.title}`}
                      className="w-[8rem]"
                    />
                  </div>
                </Link>
                <div className=" bg-gray-200 flex flex-col p-2 justify-between flex-wrap rounded-lg my-3">
                  <Link to={`${evet.id}/edit`}>
                    <button className=" bg-blue-500 p-1 rounded mr-1 ">
                      <span>
                        <svg
                          fill="#fff"
                          width="1.5rem"
                          height="1.7rem"
                          viewBox="-4 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_tracerCarrier"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M17.438 22.469v-4.031l2.5-2.5v7.344c0 1.469-1.219 2.688-2.656 2.688h-14.625c-1.469 0-2.656-1.219-2.656-2.688v-14.594c0-1.469 1.188-2.688 2.656-2.688h14.844v0.031l-2.5 2.469h-11.5c-0.531 0-1 0.469-1 1.031v12.938c0 0.563 0.469 1 1 1h12.938c0.531 0 1-0.438 1-1zM19.813 7.219l2.656 2.656 1.219-1.219-2.656-2.656zM10.469 16.594l2.625 2.656 8.469-8.469-2.625-2.656zM8.594 21.094l3.625-0.969-2.656-2.656z"></path>{' '}
                          </g>
                        </svg>
                      </span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={deleteEventHandler}
                    className=" bg-red-700 p-1 rounded mr-1 "
                  >
                    <span>
                      <svg
                        fill="#fff"
                        width="1.5rem"
                        height="1.7rem"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default EventsList;
