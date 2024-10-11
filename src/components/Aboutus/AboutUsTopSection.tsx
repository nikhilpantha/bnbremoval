import MenuItems from '../Homepage/MenuItems';

const AboutUsTopSection = () => {
  return (
    <div>
      <MenuItems
        title="About Us"
        description="When you call us, you can rest assured that we’ll take care of every detail of your move"
        imageSrc="/assets/worker3.jpg"
        showButton={false}
        label=""
        height={50}
      >
        <div className="grid items-center lg:grid-cols-3 gap-10 md:py-20 w-full px-6">
          <div className="md:col-span-2 py-40 md:py-0 px-4 space-y-4 animate__animated animate__fadeInLeft">
            <h1 className="text-6xl font-bold text-white text-center lg:text-left">
              About Us
            </h1>
            <p className="text-white text-xl text-center lg:text-left">
              You can know about us in here.
            </p>
          </div>
        </div>
      </MenuItems>
    </div>
  );
};

export default AboutUsTopSection;
