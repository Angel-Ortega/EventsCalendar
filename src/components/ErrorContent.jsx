import Card from './Card';
const ErrorContent = ({ title, children }) => {
  return (
    <Card>
      <div className='flex flex-col gap-3 text-center py-20 w-full h-full'>
        <h2 className=" font-bold text-2xl">{title}</h2>
        {children}
      </div>
    </Card>
  );
};
export default ErrorContent;
