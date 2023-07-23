import { useRouteError } from 'react-router-dom';
import ErrorContent from '../components/ErrorContent';
import MainNavegation from '../components/MainNavegation';

const Errors = () => {
  const error = useRouteError();

  let title = 'Ha ocurrido un error!';
  let message = 'La página solicitada no se puede cargar';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = 'Page error 404';
  }
  return (
    <>
      <MainNavegation />
      <ErrorContent title={title}>
        <p className=' font-serif'>{message}</p>
      </ErrorContent>
    </>
  );
};
export default Errors;
