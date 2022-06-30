import student from '../img/hero/student.png'
import searchIcon from '../img/hero/icon-search.svg'
import Photo1 from '../img/hero/Photo1.png'
import Photo2 from '../img/hero/Photo2.png'
import Photo3 from '../img/hero/Photo3.png'
import Photo4 from '../img/hero/Photo4.png'
import Photo5 from '../img/hero/Photo5.png'

const Hero = () => {
  const buttons = [
    {
      name: 'UI UX Design',
    },
    {
      name: 'CSS Fundamental',
    },
    {
      name: '3D Design Illustration',
    },
    {
      name: 'Website Development',
    },
    {
      name: 'Logo Design',
    },
    {
      name: 'Icon Design',
    },
  ]

  const studentsImages = [
    {
      src: Photo1,
      studentClass:
        'relative left-16 w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-12 xl:w-14 xl:h-14 ',
    },
    {
      src: Photo2,
      studentClass:
        'relative left-12 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14',
    },
    {
      src: Photo3,
      studentClass:
        'relative left-8 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14',
    },
    {
      src: Photo4,
      studentClass:
        'relative left-4 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14',
    },
    {
      src: Photo5,
      studentClass:
        'relative lg:w-12 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14',
    },
  ]

  return (
    <div className='container mx-auto pt-9 px-10 pb-[103px] flex flex-wrap lg:flex-nowrap lg:px-[120px] '>
      <div className='relative'>
        <img
          className='mx-auto md:w-[70%] lg:w-[100%] xl:max-w-none'
          src={student}
          alt=''
        />
        <div className='mx-auto h-[75px]  py-5 px-5 border-[3px] border-borderStudent bg-bgStudents  rounded-[20px] flex items-center absolute w-5/6 bottom-2 right-0 left-0 md:h-24 md:w-3/6 md:left-6 md:bottom-10  lg:w-11/12 xl:w-5/6 lg:top-72 lg:right-4 xl:w-6/6 xl:top-96  xl:right-10 '>
          <div className='flex justify-center'>
            {studentsImages.map((item, idx) => (
              <img
                key={'students ' + idx}
                className={item.studentClass}
                src={item.src}
                alt={'students ' + idx}
              />
            ))}
          </div>
          <div className='pl-16 text-center text-[10px] sm:text-xs text-sixth lg:text-[14px]'>
            More than 80k+ Students <span className='text-orange'>joined!</span>
          </div>
        </div>
      </div>
      <div className='mt-[80px] text-primary lg:ml-[11px] lg:mt-[40px] xl:mt-[96px]'>
        <h1 className='mx-auto opacity-80 max-w-lg font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:mx-0'>
          Grow Your Skills To Advance Your Career Path.
        </h1>
        <div className='text-center mt-6 opacity-40 text-lg lg:text-left'>
          We have something big for you who want to level up!
        </div>
        <form className='mx-auto w-9/12 relative mt-12 md:mt-8 lg:mt-14 lg:mx-0'>
          <input
            className='text-[11px] md:text-base opacity-40 w-full bg-fourth py-6 pl-8 rounded-xl'
            type='text'
            placeholder='What do you want to learn...'
          />
          <button className='absolute p-3 right-3 top-3 bg-fifth rounded-md'>
            <img src={searchIcon} alt='search' />
          </button>
        </form>
        <div className=' opacity-40 mt-12 text-lg mx-auto text-center lg:text-left'>
          Suggestions
        </div>
        <div className='mt-9 flex flex-wrap items-center justify-center lg:justify-start'>
          {buttons.map((item, idx) => (
            <div key={'buttons' + idx} className='pr-4 pb-8 '>
              <button
                className='p-8 py-2 text-third opacity-60 text-sm border-2 border-third rounded-lg'
                key={'buttons ' + idx}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
