import star from '../img/pricing/star.svg'
import key from '../img/pricing/key.svg'
import crown from '../img/pricing/crown.svg'

const Pricing = () => {
  const pricingItems = [
    {
      image: star,
      name: 'Free',
      price: '0',
      solution1: 'Free e-book for every class',
      solution2: 'Materials update every day',
      solution3: 'Free download material videos',
      solution4: 'Unlock 5 material videos',
    },
    {
      image: key,
      name: 'Express',
      price: '75',
      solution1: 'Free e-book for every class',
      solution2: 'Materials update every day',
      solution3: 'Free download material videos',
      solution4: 'Meeting 2 times a week',
      solution5: 'Unlock 5 material videos',
    },
    {
      image: crown,
      name: 'Premium',
      price: '115',
      solution1: 'Free e-book for every class',
      solution2: 'Materials update every day',
      solution3: 'Free download material videos',
      solution4: 'Private chat with mentor',
      solution5: 'Meeting 3 times a week',
      solution6: 'Unlock up to 30 material videos',
      solution7: 'Unlimited saved class',
    },
  ]

  return (
    <div className='container mx-auto px-10 pt-[85px] pb-[115px] lg:px-[120px] text-primary'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold opacity-80'>Course Pricing</h2>
        <p className='mt-5 text-lg opacity-40'>
          Choose pricing that suits to your need.
        </p>
      </div>
      <div className='lg:flex lg:flex-wrap mt-[84px] space-y-8 lg:space-y-0'>
        <div className='mx-auto relative bg-bgClasses border-borderClasses border-[3px] rounded-[20px] pt-10 px-9 md:w-[335px] lg:w-[270px] xl:w-[350px]'>
          <div className='flex'>
            <img src={star} alt='key' />
            <div className='ml-[30px]'>
              <h4 className='font-semibold text-lg opacity-80'>Free</h4>
              <div className='flex'>
                <span className='fond-bold text-sm'>$</span>
                <p className='ml-[2px] fond-bold text-[28px] text-orange'>
                  0
                  <span className='font-medium text-[11px] text-primary opacity-80'>
                    / mounth
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='my-[29px] w-full h-[1px] bg-[#292B56]'></div>
          <ul className='opacity-80 lg:text-xs xl:text-sm'>
            <div className='flex items-center text-center '>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE] ]'></div>
              <li className='py-2 pl-3'>Free e-book for every class</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Unlock 5 material videos</li>
            </div>
          </ul>
          <button className='block mx-auto my-[30px] relative opacity-50 py-4 w-full border-[1px] rounded-[6px] border-orange text-orange lg:top-[97px]'>
            Your Current Package
          </button>
        </div>
        <div className='mx-auto relative bg-bgClasses border-borderClasses border-[3px] rounded-[20px] pt-10 px-9 md:w-[300px] lg:w-[270px] xl:w-[350px]'>
          <div className='flex'>
            <img src={key} alt='key' />
            <div className='ml-[30px]'>
              <h4 className='font-semibold text-lg opacity-80'>Free</h4>
              <div className='flex'>
                <span className='fond-bold text-sm'>$</span>
                <p className='ml-[2px] fond-bold text-[28px] text-orange'>
                  75
                  <span className='font-medium text-[11px] text-primary opacity-80'>
                    / mounth
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='my-[29px] w-full h-[1px] bg-[#292B56]'></div>
          <ul className='opacity-80 lg:text-xs xl:text-sm'>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Free e-book for every class</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Unlock 5 material videos</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Meeting 2 times a week</li>
            </div>
          </ul>
          <button className='block mx-auto my-[30px] relative py-4 w-full border-[1px] rounded-[6px] border-orange text-orange lg:top-[65px] hover:bg-orange hover:text-primary'>
            Buy Express
          </button>
        </div>

        <div className='mx-auto relative bg-bgClasses border-borderClasses border-[3px] rounded-[20px] pt-10 px-9 md:w-[300px] lg:w-[270px] xl:w-[350px]'>
          <div className='flex'>
            <img src={crown} alt='key' />
            <div className='ml-[30px]'>
              <h4 className='font-semibold text-lg opacity-80'>Free</h4>
              <div className='flex'>
                <span className='fond-bold text-sm'>$</span>
                <p className='ml-[2px] fond-bold text-[28px] text-orange'>
                  115
                  <span className='font-medium text-[11px] text-primary opacity-80'>
                    / mounth
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='my-[29px] w-full h-[1px] bg-[#292B56]'></div>
          <ul className='opacity-80 lg:text-xs xl:text-sm'>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Free e-book for every class</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Materials update every day</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Unlock 5 material videos</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Unlock 5 material videos</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Meeting 3 times a week</li>
            </div>
            <div className='flex items-center text-center'>
              <div className='w-2.5 h-2.5 bg-primary rounded-full text-[#9799CE]'></div>
              <li className='py-2 pl-3'>Private chat with mentor</li>
            </div>
          </ul>
          <button className='block mx-auto my-[30px] relative py-4 w-full border-[1px] rounded-[6px] border-orange text-orange hover:bg-orange hover:text-primary'>
            Unlimited saved class
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
