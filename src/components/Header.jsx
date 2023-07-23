import logo from '../assets/logo.svg';
const Header = () => {
  return (
    <div className=' my-3 ml-0 flex content-center place-content-start '>
      <h2 className=' text-xl pt-4 font-bold'> <span className=' text-teal-400'>PRO</span>JECTS</h2>
      <img src={logo} alt='Logo svg ' className='pt-2'/>
    </div>
  );
};
export default Header;
