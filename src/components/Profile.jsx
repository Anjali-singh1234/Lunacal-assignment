// src/components/Profile.js

import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const tabs = ['About Me', 'Experiences', 'Recommended'];
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=500&h=500&q=80', // Building 1
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=500&h=500&q=80', // Building 2
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=500&h=500&q=80', 
  ]); // Add real image URLs

  return (
    <div className="flex justify-between min-h-screen bg-gray-900 text-gray-100">
      {/* Left side is kept empty */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Right side with the widgets */}
      <div className="w-full lg:w-1/2 p-8">
        {/* Tabs Section */}
        <div className="w-full max-w-md mx-auto mb-10">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-800 p-1">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-400',
                      selected
                        ? 'bg-gray-700 text-white shadow'
                        : 'text-gray-400 hover:bg-gray-700/[0.6] hover:text-white'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  'rounded-xl bg-gray-800 p-4 text-left shadow-lg ring-1 ring-gray-700',
                  'focus:outline-none focus:ring-2'
                )}
              >
                <p className="text-gray-300">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                  working at this awesome company for 3 years now.
                </p>
                <p className="mt-4 text-gray-300">
                  I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years.
                  My wife Tiffany and my 4-year-old twin daughters, Emma and Ella, are a big part of my life.
                  Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.
                </p>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  'rounded-xl bg-gray-800 p-4 text-left shadow-lg ring-1 ring-gray-700',
                  'focus:outline-none focus:ring-2'
                )}
              >
                <p className="text-gray-300">Experiences content goes here.</p>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  'rounded-xl bg-gray-800 p-4 text-left shadow-lg ring-1 ring-gray-700',
                  'focus:outline-none focus:ring-2'
                )}
              >
                <p className="text-gray-300">Recommended content goes here.</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Gallery Section */}
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-white">Gallery</h2>
            <button
              onClick={() => setImages([...images, 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=500&h=500&q=80'])}
              className="flex items-center px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Image
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative bg-gray-700 rounded-lg h-28 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
