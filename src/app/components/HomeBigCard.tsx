type HomeBigCardProps = {
    bgColor: string;
    heading: string;
    text: string;
  };
  
  export default function HomeBigCard({ bgColor, heading, text }: HomeBigCardProps) {
    return (
      <div
        className={`w-full h-full rounded-xl shadow-lg p-6 text-white transition duration-500 ${bgColor}`}
      >
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-lg">{text}</p>
      </div>
    );
  }
  