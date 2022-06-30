import getapps from '../img/getItOnApps/geton.jpg'
import google from '../img/getItOnApps/google.jpg'
import apple from '../img/getItOnApps/apple.jpg'
import circle from '../img/getItOnApps/circle.svg'
import laptop from '../img/getItOnApps/laptop.svg'
import avatar from '../img/getItOnApps/avatar.svg'
import photo1 from '../img/getItOnApps/photo1.svg'
import photo2 from '../img/getItOnApps/photo2.svg'
import photo3 from '../img/getItOnApps/photo3.svg'
import lamp from '../img/getItOnApps/lamp.svg'
import crown2 from '../img/getItOnApps/crown2.svg'
import chevron from '../img/getItOnApps/chevron-right.svg'

const GetApps = () => {
  return (
    <div className='container mx-auto px-10 pt-[60px] pb-[100px] lg:px-[120px] text-primary'>
      <div className='flex justify-between flex-wrap lg:flex-nowrap bg-[#23265C] rounded-[40px] relative'>
        <div className='mt-[85px] lg:ml-[50px] xl:ml-[100px] mx-auto'>
          <div className='text-center md:text-left max-w-[460px] lg:w-[300px] xl:w-[460px]'>
            <h3 className='text-2xl md:text-5xl lg:text-3xl xl:text-5xl font-semibold opacity-70'>
              Get Our Apps, Now!
            </h3>
            <p className='text-lg opacity-70 mt-3'>
              Reach out our apps everywhere and everytime with Sinauw Mobile
              Application.
            </p>
          </div>
          <div className='mt-11 flex space-x-2 px-2 md:px-0 sm:space-x-2 md:space-x-6 justify-center lg:justify-start'>
            <button>
              <img
                className=' block rounded-lg lg:h-[40px] xl:h-full'
                src={google}
                alt='google-icon'
              />
            </button>
            <button>
              <img
                className='block rounded-lg  lg:h-[40px] xl:h-full'
                src={apple}
                alt='apple-icon'
              />
            </button>
          </div>
        </div>
        <div className='mt-[40px] lg:mr-[50px] xl:mr-[100px] px-2 md:px-5 pt-5 bg-bgClasses2 rounded-[20px] md:rounded-t-[20px] mx-auto'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='w-[38px] h-[38px] border-avatarBorder border-[3px] bg-avatarBg rounded-xl opacity-20 flex items-center justify-center'>
                <img className='' src={avatar} alt='avatar' />
              </div>
              <div className='ml-[11px]'>
                <p className='text-xs font-semibold opacity-80'>
                  Hello, Alexander
                </p>
                <p className='text-[10px] font-medium pt-[4px] opacity-80'>
                  Premium Member
                </p>
              </div>
            </div>
            <img src={crown2} alt='crown' />
          </div>
          <div className='flex items-center justify-between px-5 py-4 mt-10 bg-bgGetApp rounded-2xl'>
            <img src={lamp} alt='lamp' />
            <div className='w-[105px]'>
              <p className='text-xs font-bold opacity-80'>
                Grow Your Skill, Join Now!
              </p>
              <p className='mt-1.5 text-[8px] opacity-60'>
                We have something big for you who want to level up!
              </p>
            </div>
          </div>
          <div className='flex mt-[60px] pb-[26px]'>
            <div className='md:hidden bg-bgClasses2 border-avatarBg border-[3px] rounded-2xl px-2.5 '>
              <img
                className='max-h-[40px] lg:max-h-[80px] xl:max-h-[98px]'
                src={circle}
                alt='laptop'
              />
              <div className='flex items-center'>
                <p className='text-[8px] md:text-xs opacity-70'>
                  Class Collections
                </p>
                <button className='md:ml-4'>
                  <img src={chevron} alt='chevron' />
                </button>
              </div>
            </div>
            <div className='bg-bgClasses2 border-avatarBg border-[3px] rounded-2xl px-2.5 ml-2 md:ml-[106px] lg:ml-[80px] xl:ml-[106px]'>
              <img
                className='max-h-[60px] lg:max-h-[80px] xl:max-h-[98px]'
                src={laptop}
                alt='laptop'
              />
              <div className='flex items-center'>
                <p className='text-[8px] md:text-xs opacity-70'>
                  Class Collections
                </p>
                <button className='md:ml-4'>
                  <img src={chevron} alt='chevron' />
                </button>
              </div>
            </div>
          </div>

          <div className='hidden md:block absolute right-[220px] md:right-[430px] lg:right-[270px] xl:right-[350px] bottom-[25px] bg-bgClasses2 border-avatarBg border-[3px] rounded-2xl px-2.5'>
            <img
              className='max-h-[60px] lg:max-h-[80px] xl:max-h-[98px]'
              src={circle}
              alt='circle'
            />
            <div className='flex  items-center'>
              <p className='text-[8px] md:text-xs opacity-70'>
                Courses Progress
              </p>
              <button className='md:ml-4'>
                <img src={chevron} alt='chevron' />
              </button>
            </div>
          </div>
          <img
            className='hidden md:block absolute top-[400px] right-[286px] md:right-[530px] lg:top-[100px] lg:right-[360px] xl:right-[450px] border-8 border-avatarBg rounded-full'
            src={photo1}
            alt='student'
          />
          <img
            className='hidden md:block absolute md:bottom-[110px] md:right-[175px] lg:bottom-[140px] lg:right-[15px] xl:bottom-[160px] xl:right-[65px]  border-8 border-avatarBg rounded-full'
            src={photo2}
            alt='student'
          />
          <img
            className='hidden md:block absolute right-[286px] top-[500px] md:right-[520px] lg:top-[200px] lg:right-[350px] xl:right-[440px] border-8 border-avatarBg rounded-full '
            src={photo3}
            alt='student'
          />
        </div>
      </div>
    </div>
  )
}

export default GetApps
