const Pricing = () => {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Choose the Perfect Plan for Your Needs
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
            Whether you're just starting out or scaling up, we have a plan that fits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free Plan</h2>
                <p className="text-lg text-gray-600 mb-6">Perfect for individuals and small projects.</p>
                <ul className="mb-6">
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        Basic features
                    </li>
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        Limited support
                    </li>
                </ul>
                <p className="text-xl font-bold text-gray-900 mb-6">Free</p>
                <a href="#" className="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300">
                    Start for Free
                </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Standard Plan</h2>
                <p className="text-lg text-gray-600 mb-6">Ideal for growing teams and businesses.</p>
                <ul className="mb-6">
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        Advanced features
                    </li>
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        Priority support
                    </li>
                </ul>
                <p className="text-xl font-bold text-gray-900 mb-6">$29/month</p>
                <a href="#" className="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300">
                    Get Started
                </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Plan</h2>
                <p className="text-lg text-gray-600 mb-6">For enterprises and high-demand users.</p>
                <ul className="mb-6">
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        All features included
                    </li>
                    <li className="mb-2 flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.293l4.293-4.293 1.414 1.414L12 18.121l-5.707-5.707 1.414-1.414L12 15.293z"/></svg>
                        24/7 support
                    </li>
                </ul>
                <p className="text-xl font-bold text-gray-900 mb-6">$99/month</p>
                <a href="#" className="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300">
                    Contact Sales
                </a>
            </div>
        </div>
    </div>
</section>

  )
}
export default Pricing