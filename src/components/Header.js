import blog from '../Assets/Blogger.png'


const Header = () => {
    return (
      <div>
          
          <div className='w-full h-2/4  flex justify-center'>
        
          <img
                className=" object-cover "
                alt="blog pic"
                src={blog}
            ></img>
          </div>
      </div>
    );  
  };
  
  export default Header;