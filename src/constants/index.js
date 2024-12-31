import {
  comunity,
  success,
  insurance,
  networking
} from "../assets";

const services = [ 
  {
    title: "Community Building.",
    icon: comunity,
  },
  {
    title: "Learning and Growth.",
    icon: success,
  },
  {
    title: "Hands-on Experience.",
    icon: insurance,
  },
  {
    title: "Networking with Industry Professionals.",
    icon: networking,
  },
];

const Highlights = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/v2/D5622AQHj5gbPCXJJJQ/feedshare-shrink_800/feedshare-shrink_800/0/1730351725148?e=1738195200&v=beta&t=xJkIV6hBQXwGTKhR2r09MHfh9dMWBtGUGQgZ9undcfA", 
    title: "Build with AI Workshop! 🚀",
    description: "Explored AI concepts and built models together. Stay tuned for more learning events! 🌟📈✨",
  },
  {
    id: 2,
    image: "https://media.licdn.com/dms/image/v2/D5622AQEMwex3XcHPzg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729142758040?e=1738195200&v=beta&t=kFeWYiVCujQ2tLlg0-_a1GnL4vVVamkz_tkUCr3l2ZE",
    title: "GenAI Workshop & Doubt Clearing 🎉",
    description: ": Explored Generative AI with amazing energy. Stay tuned for more opportunities to innovate! 🔥",
  },
  {
    id: 3,
    image: "https://media.licdn.com/dms/image/v2/D5622AQGSsT9HQTu9cA/feedshare-shrink_1280/feedshare-shrink_1280/0/1727781725508?e=1738195200&v=beta&t=txWGi6uJQYzR1jvr1Q9xfEs1I7q0yczx3KAUYBfDBVA", 
    title: "New Beginnings, Endless Possibilities ✨",
    description: "Kicked off an exciting journey with GDG on Campus, where innovation meets collaboration! 🌱",
  },
  {
    id: 4,
    image: "https://media.licdn.com/dms/image/v2/D5622AQF4nad1fgO0NA/feedshare-shrink_800/feedshare-shrink_800/0/1727789555153?e=1738195200&v=beta&t=yYnrQ8ZGmfNmv2Tl0-nhH1_XzqUpYxo7aPJH3a_0o8M", // Replace with actual event image URLs
    title: "Meet the Dream Team!  🎉",
    description: "Grateful to be part of an inspiring, innovative family ready to make a lasting impact! 💡⚙️🚀",
  },
];

const Events = [
  {
    date: "Dec 31, 2024",
    eventType: "Codethon",
    title: "LeetCode Codethon 2024 - Solve, Code, Win!",
    details: "Join the LeetCode Codethon 2024 and showcase your algorithmic and problem-solving skills! Compete with coders worldwide in this exciting event featuring a series of timed coding challenges. Solve problems across various topics such as dynamic programming, data structures, and algorithms to win exciting prizes and recognition.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-annasaheb-dange-college-of-engineering-and-technology-ashta-india-presents-solution-challenge-2025-info-session/",
    location: "Online",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/banner_FEU9cWN.png",
    isUpcoming: true,
  },
  {
    date: "Dec 28, 2024",
    eventType: "Hackathon",
    title: "Tech Winter Break - GDG On Campus PESCE : GDG Impact Challenge 2024",
    details: "Design and develop a fully functional website for GDG on Campus PESCE as part of the GDG Impact Challenge 2024. Showcase creativity and technical expertise by incorporating 3D effects, user-friendly navigation, and essential pages such as Home, Community, Team, About Us, and Contact Us.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-tech-winter-break-gdg-on-campus-pesce-gdg-impact-challenge-2024/", 
    location: "Online",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/thumbnail_4sEyqwl.jpg",
    isUpcoming: true,
  },
  {
    date: "Dec 10, 2024",
    eventType: "Workshop / Study Group",
    title: "Expert Live Session: Flutter Development Pathway & Insights",
    details: "Join the live session to explore the Flutter development pathway, offering insights into mobile app development with Flutter.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-expert-live-session-flutter-development-pathway-amp-insights/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/build%20with%20ai_yK9t846.png",
    isUpcoming: false,
  },
  {
    date: "Dec 6, 2024",
    eventType: "Workshop / Study Group",
    title: "Tech Winter Break - Web Development",
    details: "A deep dive into modern web development practices, frameworks, and tools for aspiring web developers.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-tech-winter-break-web-development-gdg-on-campus-pes-college-of-engineering-mandya/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WEB_6odMVNf.png",
    isUpcoming: false,
  },
  {
    date: "Oct 30, 2024",
    eventType: "Workshop / Study Group",
    title: "Build with AI",
    details: "Hands-on workshop exploring the integration of AI in modern web and mobile applications.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-build-with-ai/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202024-10-28%20at%208.51.56%20PM_VXkgyh6.jpeg", // Replace with actual image URL
    isUpcoming: false,
  },
  {
    date: "Oct 16, 2024",
    eventType: "Workshop / Study Group",
    title: "Mastering GenAI: Hands-on Workshop and Q&A Session",
    details: "A comprehensive session on generative AI, its uses, and the latest trends in AI-powered solutions.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-mastering-genai-hands-on-workshop-and-qampa-session/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202024-10-15%20at%2010.08.23%20PM_3fHNvkq.jpeg", // Replace with actual image URL
    isUpcoming: false,
  },
  {
    date: "Oct 4, 2024",
    eventType: "Workshop / Study Group",
    title: "Unlocking the Future: A Workshop on Generative AI",
    details: "Learn about generative AI and how it's transforming industries. The workshop includes practical use cases and a Q&A session.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-unlocking-the-future-a-workshop-on-generative-ai/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png", 
    isUpcoming: false,
  },
  {
    date: "Sep 24, 2024",
    eventType: "Info Session",
    title: "Ignite Your Journey with GDG",
    details: "An informational session to ignite your journey in tech and explore the opportunities with GDG.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-pes-college-of-engineering-mandya-india-presents-ignite-your-journey-with-gdg/",
    location: "GDG on Campus, PES College of Engineering - Mandya, India",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20Copy%20of%20GDSC23%20Social%20Template%201x1%20Blue%20%281%29_kaydDD8.jpg",
    isUpcoming: false,
  }]

  const teamMembers = [
    {
      name: 'Kushala M Gowda',
      role: 'Organizer',
      college: 'P.E.S College of Engineering',
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/kushala_m_gowda_EhCQ8OU.jpg",
      profileLink: 'https://gdg.community.dev/u/kushala_m/',
    },
    {
      name: 'Gowtham C K',
      role: 'Co-Organizer',
      college: 'P.E.S College of Engineering',
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/gowtham_c_k_D2PrTbk.png",
      profileLink: 'https://gdg.community.dev/u/mnyceg/',
    },
    {
      name: 'D Hariharan',
      role: 'Community Lead',
      college: 'P.E.S College of Engineering',
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/d_hariharan.png",
      profileLink: 'https://gdg.community.dev/u/mp4xam/',
    },
    {
      name: 'Deekshith H R',
      role: 'Android Lead',
      image: "https://media.licdn.com/dms/image/v2/D5635AQHV7pY5CXQFRA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1698385991155?e=1736197200&v=beta&t=5kbyRx-Pk1BbZtpHODw6YPrY7Tx8DbDj8mNExM6jNfM",
      profileLink: 'https://gdg.community.dev/u/mjgapr/',
    },
    {
      name: 'J P Prajwal',
      role: 'AI-ML Lead',
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG-Bevy-DefaultProfile_xY7OLAZ.png",
      profileLink: 'https://gdg.community.dev/u/mbz6j5/',
    },
    {
      name: 'Pavan Gowda T S T S',
      role: 'Flutter Lead',
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pavan_gowda_t_s_t_s.jpg",
      profileLink: 'https://gdg.community.dev/u/m8ps5w/',
    },
  ];

export {
  services,
  Events,
  Highlights,
  teamMembers
};
