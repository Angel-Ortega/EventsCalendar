import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events, { loader as eventsLoader} from './pages/Events';
import EventDetail, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEvent, { action as newEventAction } from './pages/NewEvent';
import EditEvent, {loader as editEventLoader, action as editEventAction} from './pages/EditEvent';
import RootLayout from './pages/RootLayout';
import Errors from './pages/Errors';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errors />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <Events />, loader: eventsLoader },
      {
        path: 'events/:idEvents',
        element: <EventDetail />,
        loader: eventDetailLoader,
        // action: deleteEventAction
      },
      { path: 'events/:idEvents/edit', element: <EditEvent />, loader: editEventLoader, action: editEventAction },
      { path: 'events/new', element: <NewEvent />, action: newEventAction },
    ],
  },
]);

function App() {
  return (
    <>
      <div className=" container m-auto flex ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
