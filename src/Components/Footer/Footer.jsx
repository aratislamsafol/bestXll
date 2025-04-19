import Img from '../Utils/Img';
import logoImg from '../../assets/images/logo-footer.png';
import FooterContent from './FooterContent';
import Newslater from '../Newslater/Newslater';
import Copywrite from './Copywrite';
export default function Footer() {
  return (
    <div className="bg-black w-full pt-60 sm:pt-50 md:pt-60 lg:pt-65 xl:pt-70  relative">
        <div className='max-w-[1320px] mx-auto px-2 sm:px-3 md:px-5 lg:px-6 pb-10 md:pb-14 lg:pb-18 '>
             {/* image logo section */} 
            <div className='flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16'>
                <Img getImg={logoImg} classd="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[142px] lg:h-[140px]"></Img>
            </div>
            {/* Footer Content */}
            <FooterContent></FooterContent>
        </div>
        <Copywrite />
        <div className='absolute bottom-145 md:bottom-98 lg:bottom-116 w-full'>
            <Newslater/>
        </div>
    </div>
  )
}
