import React from "react";
import { FaFacebookF, FaWhatsapp, FaGlobe } from "react-icons/fa";

const posts = [
  {
    text: `This Mother’s Day let’s celebrate the one person we turn to for everything. Just like Exide Home she keeps us going, she is the force who keeps our Zindagi Nonstop. Happy Mother’s Day #Exide`,
    hashtags: ["#IndiaMovesOnExide", "#MothersDay", "#MothersDay2025", "#Exide"],
    date: "10 May 2025 8:00 PM",
  },
  {
    text: `No more worrying about the load of uninterrupted living. Introducing Exide Home range of Pro Load Expert Inverters and Inverter Batteries.`,
    hashtags: ["#ExideHome", "#ZindagiNonStop", "#IndiaMovesOnExide", "#Exide"],
    date: "21 Mar 2025 2:57 PM",
  },
  {
    text: `THIS HOLI LET’S COME TOGETHER FOR NON-STOP CELEBRATIONS. WISHING YOU A VERY HAPPY AND SAFE HOLI!!`,
    hashtags: ["#holi", "#holiday", "#IndiaMovesOnExide", "#Exide", "#festival", "#together", "#fun", "#colours", "#holi2025"],
    date: "14 Mar 2025 8:09 AM",
  },
  {
    text: `A victory to cherish. A journey to remember. Now that we are world champions, let’s pause to savour and celebrate this epic moment.`,
    hashtags: ["#Exide", "#IndiamovesonExide", "#icc", "#cricket", "#viratkohli", "#rohitsharma", "#indiancricketteam", "#cricketlovers", "#teamindia", "#cricketfans", "#matchhighlights"],
    date: "09 Mar 2025 9:52 PM",
  },
  {
    text: `Let’s stop fussing about time because Exide keeps moving India, day in and day out, all the way, all the time.`,
    hashtags: ["#halftime", "#anytime", "#allthetime", "#IndiaMovesOnExide"],
    date: "05 Mar 2025 4:28 PM",
  },
  {
    text: `Celebrating the spirit of progress, unity, and the unwavering strength that defines our great nation. Exide wishes you a Happy Republic Day!`,
    hashtags: ["#Exide", "#Indiamovesonexide", "#republicday", "#RepublicdayIndia"],
    date: "26 Jan 2025 8:30 AM",
  },
];

const SocialTimeline = () => {
  return (
    <div id="line" className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        SOCIAL <span className="text-red-600">TIMELINE</span>
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm mb-4 text-gray-700">{post.text}</p>
              <div className="space-y-1 mb-4">
                {post.hashtags.map((tag, i) => (
                  <p key={i} className="text-blue-500 text-sm">{tag}</p>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-2">Posted On: {post.date}</p>
            </div>
            <div className="border-t pt-3 mt-3 flex space-x-4 text-gray-700 text-lg">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaGlobe className="hover:text-green-500 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTimeline;
