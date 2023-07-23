import Card from '../components/Card';
const Home = () => {
  return (
    // <Card>
      <section className=' flex items-center text-center place-content-center content-center h-full w-full'>
        <div className='relative z-40 text-center py-48'>
          <h1 className=' text-xl font-bold'>E V E N T O S</h1>
          <p className=' text-sm p-4'>Agende sus eventos y no se pierda ninguno </p>
        </div>
        <div className=" absolute z-1 top-0 bottom-0">
          <img
            src="https://img.freepik.com/vector-premium/fondo-abstracto-azul-blanco-onda_41814-377.jpg"
            alt="Imagen principal de eventos"
            className=" object-cover h-full w-full"
          />
        </div>
      </section>
    // </Card>
  );
};
export default Home;
