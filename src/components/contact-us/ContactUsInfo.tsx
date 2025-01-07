import ballImage from "../../assets/CODAXLABLOGO.png";

function ContactUsInfo() {
  const team: {
    name: string;
    role: string;
    image: string;
  }[] = [
    { name: "Sarah Wilson", role: "Product Manager", image: ballImage },
    { name: "Alex Chen", role: "Lead Developer", image: ballImage },
    { name: "Maria Garcia", role: "Designer", image: ballImage },
    { name: "James Lee", role: "Support Lead", image: ballImage },
  ];

  return (
    <div className="space-y-8 bg-white rounded-xl shadow-lg py-4 px-5">
      <div className="bg-[393A3C]">
        <div>
          <h1 className="text-center text-black mb-4 text-4xl font-semibold">
            Contact Information
          </h1>
          <p className="text-center mb-4 mx-12 text-black">
            Have questions or feedback? Fill out the form below, and we’ll get
            back to you shortly!
          </p>
        </div>
        <div>
          <div className="space-y-4">
            {team.map((member, index) => (
              <div key={index} className="flex items-center gap-4">
                <div>
                  <img
                    className="w-[6rem] h-[6rem] rounded-full"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <p className="text-black text-md">{member.name}</p>
                  <div className="text-md text-gray-400">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsInfo;
