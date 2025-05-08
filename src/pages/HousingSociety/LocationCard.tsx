import  { useState } from 'react';

const data = {
    locations: [
        { id: 1, title: 'Mumbai', subtitle: '100+', projects: 'Projects', imgSrc: 'https://storage.googleapis.com/a1aa/image/df327753-7f63-4cc7-25a8-a82f927a0540.jpg', imgAlt: 'Mumbai Aerial View', isLarge: true },
        { id: 2, title: 'Pune', subtitle: '100+', projects: 'Projects', imgSrc: 'https://storage.googleapis.com/a1aa/image/78a0dbd6-9418-408c-3678-3acc70a1e9eb.jpg', imgAlt: 'Pune Aerial View', isLarge: false },
        { id: 3, title: 'Bengaluru', subtitle: null, projects: '75+ Projects', imgSrc: 'https://storage.googleapis.com/a1aa/image/4c1461ee-74b9-4ec4-e234-c54bfeed2541.jpg', imgAlt: 'Bengaluru Aerial View', isLarge: false }
    ],
    projects: [
        { name: 'Raheja Vistas CHS', capacity: '750kW' },
        { name: 'Seawoods', capacity: '350kW' },
        { name: 'Eaton Square CHS', capacity: '280kW' }
    ]
};

function LocationCards({ title, subtitle, projects, imgSrc, imgAlt, isLarge, onClick }: { title: string, subtitle: string, projects: string, imgSrc: string, imgAlt: string, isLarge: boolean, onClick: any }) {
    return (
        <div onClick={onClick} className={`cursor-pointer relative rounded-xl overflow-hidden flex flex-col justify-center items-center text-white text-center font-semibold shadow-lg ${isLarge ? 'w-36 h-36 border-4 border-blue-600 font-bold leading-tight' : 'w-24 h-24 rounded-lg text-sm leading-tight'}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <img src={imgSrc} alt={imgAlt} className='absolute inset-0 w-full h-full object-cover opacity-80' />
            <div className='relative z-10'>
                <div className={isLarge ? 'text-lg' : 'font-semibold text-xs'}>{title}</div>
                {subtitle && <div className={isLarge ? 'text-base' : 'text-xs'}>{subtitle}</div>}
                <div className={isLarge ? 'text-base' : 'text-xs'}>{projects}</div>
            </div>
        </div>
    );
}

function LocationCard() {
    const [selectedLocation, setSelectedLocation] = useState<any>(null);

    return (
        <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col space-y-6'>
            <div className='flex flex-wrap gap-4'>
                {data.locations.map((loc: any) => (
                    <LocationCards key={loc.id} {...loc} onClick={() => setSelectedLocation(loc)} />
                ))}
            </div>
            {selectedLocation && (
                <div className='mt-4 p-4 rounded-lg shadow-md bg-gray-100 flex flex-col items-center'>
                    {/* <h3 className='text-lg font-semibold'>Selected Location: {selectedLocation.title}</h3> */}
                    <img src={selectedLocation.imgSrc} alt={selectedLocation.imgAlt} className='mt-2 w-48 h-48 object-cover rounded-lg shadow-md' />
                    <p className='mt-2'>Projects: {selectedLocation.projects}</p>
                </div>
            )}
            <div>
                <h3 className='font-bold text-sm text-gray-900 mb-4'>Our Highest Capacity Projects</h3>
                <ul className='space-y-2'>
                    {data.projects.map((project, index) => (
                        <li key={index} className='flex justify-between items-center text-gray-700'>
                            <span>{project.name}</span>
                            <span className='font-bold text-gray-900'>{project.capacity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LocationCard;
