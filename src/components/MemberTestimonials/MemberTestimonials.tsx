'use client';
import Image from 'next/image';
import CardTitleDescription from '../TitleDescrtption/CardTitleDescription';
import SlickWrapper from './SlickWrapper';

const testimonials = [
  {
    name: 'Wilbur N. Shore',
    position: 'Accounting',
    text: 'The moving team was incredibly professional and handled my belongings with care. They made the entire process stress-free and efficient!',
    image: '/assets/person1.jpg',
  },
  {
    name: 'Robert J. Adams',
    position: 'CEO of Dragonfly',
    text: 'I couldn’t be happier with the service I received. They were prompt, organized, and went above and beyond to ensure a smooth move for my office.',
    image: '/assets/person2.jpg',
  },
  {
    name: 'Anita D. Costin',
    position: 'Manager',
    text: 'This company exceeded my expectations! Their attention to detail and customer service made my apartment move a breeze.',
    image: '/assets/person3.jpg',
  },
  {
    name: 'Wilbur N. Shore',
    position: 'Accounting',
    text: 'I was impressed with how quickly and efficiently the team worked. They took great care of my items, and I felt valued as a customer.',
    image: '/assets/person1.jpg',
  },
  {
    name: 'Robert J. Adams',
    position: 'CEO of Dragonfly',
    text: 'From start to finish, the experience was top-notch. The staff was friendly and helpful, making my corporate relocation seamless.',
    image: '/assets/person1.jpg',
  },
  {
    name: 'Anita D. Costin',
    position: 'Manager',
    text: 'The team was fantastic! They arrived on time, worked diligently, and everything was delivered without a scratch. Highly recommend!',
    image: '/assets/person2.jpg',
  },
  {
    name: 'Wilbur N. Shore',
    position: 'Accounting',
    text: 'I had a wonderful experience with this moving company. They were efficient and very careful with all my items. Would definitely use them again!',
    image: '/assets/person3.jpg',
  },
  {
    name: 'Robert J. Adams',
    position: 'CEO of Dragonfly',
    text: 'Their expertise in office relocations made my move so much easier. I appreciated their flexibility and attention to detail.',
    image: '/assets/person2.jpg',
  },
  {
    name: 'Anita D. Costin',
    position: 'Manager',
    text: 'Fantastic service! The movers were friendly and professional. They made my transition to the new place incredibly easy.',
    image: '/assets/person3.jpg',
  },
];

const MemberTestimonials = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    outerHeight: '100%',
    innerHeight: '100%',

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-softGray">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <CardTitleDescription
          subheading="TESTIMONIALS"
          title="What Our Customers are Saying"
          description="Per aenean auctor pellentesque a quam quis habitant mus semper nostra ultrices. Per odio finibus rhoncus sit cubilia duis leo maximus ad."
        />

        <SlickWrapper settings={settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col pb-16">
              <div className="relative mt-10 bg-white shadow-lg flex flex-col justify-between gap-4 rounded-md px-10 py-20 h-full">
                <p className="text-gray tracking-normal font-helvetica flex-grow">
                  {testimonial.text}
                </p>
                <h4 className="font-bold text-gray-900 font-helvetica">
                  {testimonial.name}
                </h4>
                <p className="text-base text-gray font-helvetica">
                  {testimonial.position}
                </p>
                <div className="absolute z-20 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full z-40 bg-slate-500 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </SlickWrapper>
      </div>
    </section>
  );
};

export default MemberTestimonials;
