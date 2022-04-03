import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

    <img src="https://images.wallpaperscraft.com/image/single/samoyed_dog_dog_cute_181376_800x600.jpg" className="rounded-full rounded-b-none shadow-2xl lg:hidden w-72" />
    
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

        <div className="p-4 md:p-12 text-center lg:text-left">
          
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Some Name</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-b-rose-300 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Lorem ipsum</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Your Location, World</p>
          <p className="pt-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut.</p>

          <div className="pt-12 pb-8">
            <button className="bg-rose-500 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded-full">
              Call to Action
            </button> 
          </div>

        </div>

      </div>
	
	<div className="w-2/5">
		<img src="https://mfiles.alphacoders.com/820/820288.jpg" className="rounded-none hidden lg:rounded-lg shadow-2xl lg:block" />
		
	</div>

</div>
  )
}

export default Home
