import technology from '../img/technology.jpg'
import design from '../img/design.jpg'
import coding1 from '../img/coding1.jpg'
import coding2 from '../img/coding2.jpg'
import photo1 from '../img/classes/photo1.png'
import photo2 from '../img/classes/photo2.png'
import photo3 from '../img/classes/photo3.png'
import photo4 from '../img/classes/photo4.png'

const Classes = () => {
  const classesItems = [
    {
      image: technology,
      videos: '12 Videos',
      category: 'Technology',
      subject: 'Digital Marketing Strategy',
      text: 'This course aims to give you deeper understanding of core processes ...',
      photo: photo1,
      name: 'Joey Piere',
      job: 'Mentor',
    },
    {
      image: design,
      videos: '7 Videos',
      category: 'Design',
      subject: 'Figma Fundamental',
      text: 'These lessons and exercises will help you start designing with Figma ...',
      photo: photo2,
      name: 'Araya Sheila',
      job: 'Mentor',
    },
    {
      image: coding1,
      videos: '10 Videos',
      category: 'Coding',
      subject: 'HTML Fundamental',
      text: 'Well organized and easy to make you understand tutorials with lots of ...',
      photo: photo3,
      name: 'Ellisa Ruth',
      job: 'Mentor',
    },
    {
      image: coding2,
      videos: '16 Videos',
      category: 'Coding',
      subject: 'Android App Development',
      text: 'Take your Android coding skills to the next level, advanced Android app ...',
      photo: photo4,
      name: 'Wendy Troye',
      job: 'Mentor',
    },
  ]

  return (
    <div className='container mx-auto px-10 py-[65px] lg:px-[88px]  text-primary'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold opacity-80'>
          What Do You Want to Learn?
        </h2>
        <p className='mt-5 text-lg opacity-40'>
          Choose the right class as you need. Then enjoy studying.
        </p>
      </div>
      <div className='flex flex-wrap xl:flex-nowrap mt-[84px]'>
        {classesItems.map((item, idx) => (
          <div
            className='group mx-auto mt-8 w-[350px]  lg:w-[400px] xl:w-[1/4] px-3'
            key={'classes ' + idx}
          >
            <div className='bg-bgClasses border-[3px] border-borderClasses rounded-[20px] px-3 pt-3 '>
              <div className='relative'>
                <img
                  className='mx-auto rounded-[20px] opacity-60'
                  src={item.image}
                  alt='Photo'
                />
                <div className='absolute bottom-3  py-1.5 px-4 bg-bgClasses2 rounded-lg text-primary md: left-7 lg:left-14 xl:left-4'>
                  {item.videos}
                </div>
              </div>
              <div>
                <h4 className='text-green mt-6 text-xs font-medium'>
                  {item.category}
                </h4>
                <h3 className='mt-8 text-lg font-semibold opacity-80'>
                  {item.subject}
                </h3>
                <p className='mt-3 text-sm opacity-40'>{item.text}</p>
                <div className='mt-5 w-full h-[1px] bg-[#292B56]'></div>
              </div>
              <div className='mt-5 flex'>
                <img className='w-10 h-10' src={item.photo} alt='' />
                <div className='ml-[15px] pb-6'>
                  <div className='opacity-80'>{item.name}</div>
                  <div className='opacity-40'>{item.job}</div>
                </div>
              </div>
              <div className='hidden text-center group-hover:block pb-6'>
                <button className='text-sm font-semibold py-3 px-8 border-[1px] border-orange bg-orange rounded-md  text-primary'>
                  Access Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='flex text-base font-bold py-4 px-8 mt-12 border-[1px] border-orange rounded-md mx-auto text-orange'>
        Show All Classes
      </button>
    </div>
  )
}

export default Classes
