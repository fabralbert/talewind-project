import slider from '../img/webinar/slider.jpg'
import arrow from '../img/webinar/arrow-right.svg'

const Webinar = () => {
  return (
    <div className='container mx-auto px-10 pt-[109px] pb-[84px] lg:px-[120px] text-primary'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold opacity-80'>
          Live Online Webinar
        </h2>
        <p className='mt-5 text-lg opacity-40'>
          You can stream Webinar live on our apps. Stay update on our Webinar,
          it’s Free!
        </p>
      </div>
      <img
        className='block mt-[105px] mb-[56px] opacity-70'
        src={slider}
        alt=''
      />
      <div className='flex items-center justify-end'>
        <p className='text-sm font-medium'>See more webinar videos</p>
        <button className='ml-3'>
          <img className='' src={arrow} alt='language' />
        </button>
      </div>
    </div>
  )
}

export default Webinar
