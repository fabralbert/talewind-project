import friends from '../img/featured/friends.svg'
import expert from '../img/featured/expert.svg'
import flexible from '../img/featured/flexible.svg'

const Featured = () => {
  const featuresImg = [
    {
      image: friends,
      title: 'Get New Friends',
      text: 'You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!',
    },
    {
      image: expert,
      title: 'Expert and Fun Mentor',
      text: 'Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.',
    },
    {
      image: flexible,
      title: 'Flexible Access',
      text: 'You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!',
    },
  ]

  return (
    <div className='container mx-auto px-10 flex flex-wrap space-y-3.5 md:space-y-0 lg:flex-nowrap lg:px-[120px] pb-[100px] lg:py-[100px] text-primary lg:space-x-3.5'>
      {featuresImg.map((item, idx) => (
        <div
          key={'features ' + idx}
          className='w-[394px] mx-auto h-full flex items-start '
        >
          <img src={item.image} alt='' />
          <div className='flex-grow items-center pl-[18px] '>
            <h3 className='py-[20px] flex items-center lg:text-lg xl:text-xl opacity-70'>
              {item.title}
            </h3>
            <p className='text-sm lg:text-base xl:leading-6 opacity-60'>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
