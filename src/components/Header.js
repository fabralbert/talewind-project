import iconLanguage from '../img/header/icon-globe.svg'

const Header = () => {
  const menu = [
    {
      name: 'Home',
    },
    {
      name: 'Courses',
    },
    {
      name: 'Webinar',
    },
    {
      name: 'Pricing',
    },
  ]

  return (
    <header className='pt-5 text-primary'>
      <div className='container flex justify-between mx-auto text-xs items-center px-10 lg:px-28 lg:text-lg '>
        <div className='flex items-center'>
          <div className=''>It owl</div>
          <nav className='md:ml-20 lg:ml-36'>
            <ul className='hidden md:flex space-x-11 text-sm font-medium'>
              {menu.map((item, idx) => (
                <li
                  key={'menu ' + idx}
                  className='opacity-60 hover:opacity-100'
                >
                  <a href='#'>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='text-gray flex items-center'>
          <div className='text-xs font-medium '>Eng</div>
          <button className='ml-1 '>
            <img src={iconLanguage} alt='language' />
          </button>
          <button className='py-1 px-4 ml-2  bg-orange rounded-md text-sm font-bold text-primary md:ml-5 md:py-2 md:px-5 lg:py-3 lg:px-8 lg:ml-8'>
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
