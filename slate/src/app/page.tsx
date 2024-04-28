import { useState } from 'react'
import React from 'react'

const navigation = [
  { name: 'Product', href: '/dashboard' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <><head>
    </head><section>

        <div className="bg-white">
        <div className="">
          <div className="flex items-center justify-center">
    <div className="top-3 w-[1318px] h-[870px] bg-zinc-100 top-20 rounded-3xl">
          <div className="top-5relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-10 -z-10  overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div className="mx-auto max-w-2xl py-1 sm:py-1 lg:py-1">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {"A hackdavis '24 "}
                  <a href="#" className="font-semibold text-[#007585]">
                    <span className="absolute inset-0" aria-hidden="true" />
                    original<span aria-hidden="true"></span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-regular tracking-tight text-gray-900 sm:text-6xl">
                Revolutionize Note taking
                                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Allowing you to tailor your professional story for every opportunity while staying focused on what truly matters—navigating your path to success.
                </p>
                <div className="mt-5 flex items-center justify-center gap-x-6">
                  <a
                    href="/profile"
                    className="rounded-md bg-[#007585] px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </a>
                  <a href="/application" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <br></br>
              <div className="w-[1241.19px] h-[626.82px] right-[340px] relative">
                <img className="w-[1000px] h-[420px] left-[170px]  top-[110px] absolute " src="/1.svg" />
                <img className="w-[360.59px] h-[206.54px] left-[990.60px] top-[250.29px] absolute" src="/Card (1).svg" />
                <img className="w-[505.67px] h-[206.01px] right-[760.60px] top-[380px] absolute" src="/Card.svg" />
                </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true">
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white">
                <h3 className="font-semibold text-sm text-gray-600 text-center">
                    TRUSTED BY TEAMS FROM AROUND THE WORLD
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <img src="/logos.svg"></img>

                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">

</div>


<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-900">
          We know the importance of every role
          </h2>
          <p className="text-gray-500">
          You can easily create and manage distinct role type versions that highlight the specific skills and experiences relevant to each unique opportunity, ensuring that you present yourself in the best possible light.
          </p>
        </div>
      </div>
    </div>
    <div>
      <img className="rounded-xl" src="/Group1000004737.png" />
    </div>
  </div>
</div>




<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      <img className="rounded-xl" src="/Group1000004738.png" />
    </div>

    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-900">
           Make any changes anytime & anywhere.
          </h2>
          <p className="text-gray-500">
          With an array of functions at your fingertips, you can effortlessly fine-tune even the minutest details across any resume version. 
          </p>
        </div>

        <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            <span className="text-sm sm:text-base text-gray-900">
              <span className="font-bold text-gray-900">Push & Pull</span> from any resume
            </span>
          </li>

          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>

            <span className="text-sm sm:text-base text-gray-900">
            Create <span className="font-bold text-gray-900">New Branches</span>
            </span>
          </li>

          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            <span className="text-sm sm:text-base text-gray-900">
            Auto Update from Main
            </span>
          </li>
          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            <span className="text-sm sm:text-base text-gray-900">
            View Version History
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>




<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-900">
          Organize it your own way for every role
          </h2>
          <p className="text-gray-500">
          Experience the convenience of personalized directories and folders within our platform, designed to help you effortlessly organize your resumes based on specific occasions or opportunities.
          </p>
        </div>
      </div>
    </div>
    <div>
      <img className="rounded-xl" src="/Group1000004739.svg" />
    </div>
  </div>
</div>



        <section>
</section>*/
      </section></>
  )
}
