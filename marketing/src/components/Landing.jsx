import { Link } from "react-router-dom"
const Landing = () => {
  return (
<section class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock the Full Potential of Your Business
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-6">
            Experience cutting-edge solutions with our SAS pricing plans designed to fit any business size and need.
        </p>
        <div class="flex justify-center mb-8">
            <Link to='/pricing'>
                <button class="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    View Pricing
                </button>
            </Link>
        </div>
        <p class="text-sm text-gray-600">
            Not sure what plan suits you? <Link to='/contact' class="text-blue-500 hover:underline">Contact us</Link> for personalized advice.
        </p>
    </div>
</section>


  )
}
export default Landing