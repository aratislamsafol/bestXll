import Menu from "../Menu/Menu";
import Newslater from "../Newslater/Newslater";
import Button from '../Utils/Button';
export default function FooterContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0">
        <div className="col-span-4 md:col-span-1">
            <h3 className="font-semibold text-lg text-white">About Us</h3>
            <p className="text-gray-600 mt-2">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div className="col-span-4 md:col-span-1 md:justify-self-center">
            <h3 className="font-semibold text-lg text-white mb-2">Quick Links</h3>
           <Menu className="flex flex-col gap-1 md:gap-2"></Menu>
        </div>
        <div className="col-span-2 md:justify-self-end">
            <h3 className="font-semibold text-lg text-white">Subscribe</h3>
            <p className="text-gray-600 mt-1 md:mt-2 md:max-w-[291px]">Subscribe to our newsletter for the latest updates.</p>
           <div className="flex gap-1 mt-3">
           <input type="text" className="bg-white rounded-lg px-4" placeholder="Enter your email"/>
           <Button btnDesign={{color:'black', backgroundColor: 'white'}}>Subscribe</Button>
           </div>
        </div>
    </div>
  )
}
