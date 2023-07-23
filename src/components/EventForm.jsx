import { Form, useNavigate } from 'react-router-dom';
const EventForm = ({ event }) => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('..');
  };
  return (
    <div className="flex items-center place-content-center flex-wrap">
      <Form
        method={"POST" || 'PATCH'}
        className=" bg-gray-200 w-[28rem] p-[1rem] rounded-lg"
      >
        <div className="w-[100%] flex flex-col [&>p]:flex [&>p]:flex-col [&>p]:m-2 [&>p]:text-sm [&>p]:text-gray-700 ">
          <div className=" text-center font-bold text-lg pb-2">
            <h3>REGISTRO DE EVENTO</h3>
          </div>
          <p>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              name="title"
              className="block rounded-md border-0 py-1 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              required
              defaultValue={event ? event.title : ''}
            />
          </p>
          <p>
            <label htmlFor="place">Lugar</label>
            <input
              id="place"
              type="text"
              name="place"
              className="block rounded-md border-0 py-1 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              required
              defaultValue={event ? event.place : ''}
            />
          </p>
          <p>
            <label htmlFor="image">Imagen</label>
            <input
              id="image"
              type="url"
              name="image"
              className="block rounded-md border-0 py-1 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              defaultValue={event ? event.image : ''}
            />
          </p>
          <p>
            <label htmlFor="date">Fecha</label>
            <input
              id="date"
              type="date"
              name="date"
              className="block rounded-md border-0 py-1 pl-5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              defaultValue={event ? event.date : ''}
            />
          </p>
          <p>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="block rounded-md border-0 py-1 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
              required
              defaultValue={event ? event.description : ''}
            />
          </p>
          <div className="flex place-content-end gap-5 mx-5">
            <button
              type="button"
              onClick={cancelHandler}
              className=" bg-red-500 rounded-md cursor-pointer p-[.5rem] border-spacing-8 "
            >
              Cancelar
            </button>
            <button className=" font-sans bg-blue-500 rounded-md cursor-pointer p-[.5rem] border-spacing-8 ">
              Guardar
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default EventForm;
