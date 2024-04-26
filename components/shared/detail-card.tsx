import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Card } from '../ui/card'
import Rating from './rating'
import { DUMMY_DATA } from '@/lib/constants'


type CardHeaderTypes = {
    heading: string;
    rating: { ratings: number, customers: number };
    imageUrl: string;
}

const DetailCard = () => {

    const CardHeader = ({ heading, rating, imageUrl }: CardHeaderTypes) => {
        return (
            <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0 bg-[#f8f8f8] p-3 shadow-sm border-b-2 border-gray-200'>
                <Image className='w-[338px] h-[50px] border border-gray-300' width={500} height={500} src={imageUrl} alt='company logo' />
                <div>
                    <h1 className='text-2xl font-bold'>{heading}</h1>
                    <Rating rating={rating.ratings} customers={rating.customers} />
                </div>
            </div>
        )
    }

    const DisplayCountry = ({ countries }: { countries: { name: string, countryLogo: StaticImageData }[] }) => {
        if (!countries.length) return null;
        return (
            <div className='flex justify-start items-center gap-2'>
                {countries.map((country: { name: string, countryLogo: StaticImageData }) => (
                    <div key={country.name} className='flex justify-start items-center gap-1'>
                        <Image className='w-6 h-4' width={500} height={500} src={country.countryLogo} alt='company logo' />
                        <h1 className='text-sm'>{country.name}</h1>
                    </div>
                ))}
            </div>
        )
    }

    const CardBody = ({ data }: any) => {
        return (
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-start w-full lg:h-[180px]'>
                <div className='flex flex-col justify-between gap-3 lg:gap-0 items-start w-3/5 h-full'>
                    <div>
                        <h1 className='font-semibold'>Operates in</h1>
                        <DisplayCountry countries={data.countries} />
                    </div>
                    <div>
                        <h1 className='font-semibold'>Vessels Number: <span className='font-normal'>{data.vessels_number}</span></h1>
                        <h1 className='font-semibold'>Ferry types: <span className='font-normal'>{data.ferry_types}</span></h1>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Popular vessels:</h1>
                        <div className='flex justify-start items-center gap-2'>
                            {
                                data.popular_vessels.map((vassel: { name: string, link: string }) => (
                                    <Link
                                        key={vassel.name}
                                        href={vassel.link}
                                        className='text-[#00afd4] text-nowrap'
                                    >
                                        {vassel.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full' dangerouslySetInnerHTML={{ __html: data.desciption.replace('\n', '<br/>') }}></div>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center gap-6'>
            {DUMMY_DATA.map((data: any) => (
                <Card key={data.id} className='w-full rounded-[10px] border border-gray-200 lg:h-[316px]'>
                    <CardHeader
                        heading={data.heading}
                        imageUrl={data.imageUrl}
                        rating={data.rating}
                    />
                    <div className='p-4'>
                        <CardBody data={data} />
                    </div>

                </Card>
            ))}
        </div>

    )
}

export { DetailCard }
