const Footer = () => {
  return (
    <div className='container mx-auto px-10 pt-[48px] pb-[30px] lg:px-[120px] text-primary'>
      <div className='hidden md:flex justify-between space-x-5'>
        <div className='w-[234px]'>
          <div className=' text-lg font-bold'>It owl</div>
          <p className='text-base opacity-80 mt-2'>
            Any feedback or questions? Contact us on our social media
          </p>
        </div>
        <div className='flex md:space-x-8 lg:space-x-12 xl:space-x-[81px] md:text-base lg:text-lg xl:text-xl'>
          <div>
            <p className='font-bold opacity-80'>Menu</p>
            <ul className='mt-6 opacity-60 space-y-5'>
              <li className=''>
                <a href='#'>Home</a>
              </li>
              <li className=''>
                <a href='#'>Courses</a>
              </li>
              <li className=''>
                <a href='#'>Webinar</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-bold opacity-80'>Services</p>
            <ul className='mt-6 opacity-60 space-y-5'>
              <li className=''>
                <a href='#'>Materials Update</a>
              </li>
              <li className=''>
                <a href='#'>Trusted Mentor</a>
              </li>
              <li className=''>
                <a href='#'>Free E-book</a>
              </li>
              <li className=''>
                <a href='#'>Meeting</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-bold opacity-80'>Further Information</p>
            <ul className='mt-6 opacity-60 space-y-5'>
              <li className=''>
                <a href='#'>Terms & Conditions</a>
              </li>
              <li className=''>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-bold opacity-80'>Apps Download</p>
            <ul className='mt-6 opacity-60 space-y-5'>
              <li className=''>
                <a href='#'>Google Play Store</a>
              </li>
              <li className=''>
                <a href='#'>App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-blue mt-[86px] text-center'>
        Copyright © 2021 Sinauw. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
