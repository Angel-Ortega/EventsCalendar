
const EventItem = ({event}) => {
  return (
    <>
      <div>
        <ul>
            <li key={event.id}>
              <h2 className=" font-bold text-2xl text-left text-gray-900 py-5">
                {event.title}
              </h2>
              <div className="flex flex-col place-content-center items-center">
                <img
                  src={event.image}
                  alt={`Imagen del evento ${event.title}`}
                  className="w-[25rem] rounded"
                />
              </div>
              <div className=" bg-gray-200 flex flex-col gap-2 mt-5 rounded p-2 w-[30rem]">
                <h2 className=" font-bold text-sm text-blue-900">Detalles</h2>
                <date>{event.date}</date>
                <p>{event.description}</p>
                <h2 className=" font-bold text-sm text-blue-900">Lugar</h2>
                <h3>{event.place}</h3>
              </div>
            </li>
        </ul>
      </div>
    </>
  );
};
export default EventItem;
