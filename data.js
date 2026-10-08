const destinations = [
  {
    id: 1,
    name: "Cox's Bazar Sea Beach",
    bn: "কক্সবাজার সমুদ্র সৈকত",
    upazila: "কক্সবাজার সদর",
    category: "Beach",
    type: "popular",
    description: "বিশ্বের দীর্ঘতম প্রাকৃতিক বালুকাময় সমুদ্র সৈকতগুলোর একটি এবং কক্সবাজারের প্রধান পর্যটন আকর্ষণ।",
    location: "কক্সবাজার সদর",
    lat: 21.4272,
    lng: 91.9770,
    best: "বিকেল ও সূর্যাস্ত",
    safety: "জোয়ার-ভাটা ও সমুদ্রের সতর্কতা মেনে চলুন।"
  },

  {
    id: 2,
    name: "Laboni Beach",
    bn: "লাবণী সমুদ্র সৈকত",
    upazila: "কক্সবাজার সদর",
    category: "Beach",
    type: "popular",
    description: "কক্সবাজার শহরের কাছাকাছি সবচেয়ে পরিচিত সৈকত এলাকার একটি।",
    location: "কক্সবাজার সদর",
    lat: 21.4206,
    lng: 91.9764,
    best: "বিকেল",
    safety: "নির্ধারিত নিরাপদ এলাকায় সাঁতার কাটুন।"
  },

  {
    id: 3,
    name: "Himchari National Park",
    bn: "হিমছড়ি জাতীয় উদ্যান",
    upazila: "কক্সবাজার সদর",
    category: "Nature",
    type: "popular",
    description: "পাহাড়, বন, সমুদ্র ও ঝরনার সমন্বয়ে গঠিত অন্যতম জনপ্রিয় পর্যটন এলাকা।",
    location: "কক্সবাজার–টেকনাফ মেরিন ড্রাইভ",
    lat: 21.3500,
    lng: 92.0410,
    best: "সকাল বা বিকেল",
    safety: "পাহাড়ি পথে সতর্ক থাকুন।"
  },

  {
    id: 4,
    name: "Inani Beach",
    bn: "ইনানী সমুদ্র সৈকত",
    upazila: "উখিয়া",
    category: "Beach",
    type: "popular",
    description: "পাথুরে সৈকত, স্বচ্ছ পানি ও মেরিন ড্রাইভের জন্য বিখ্যাত।",
    location: "উখিয়া",
    lat: 21.2017,
    lng: 92.0540,
    best: "ভোর ও বিকেল",
    safety: "পাথরের ওপর হাঁটার সময় সতর্ক থাকুন।"
  },

  {
    id: 5,
    name: "Marine Drive",
    bn: "কক্সবাজার–টেকনাফ মেরিন ড্রাইভ",
    upazila: "উখিয়া",
    category: "Road & View",
    type: "popular",
    description: "সমুদ্র ও পাহাড়ের মাঝ দিয়ে যাওয়া বাংলাদেশের অন্যতম সুন্দর উপকূলীয় সড়ক।",
    location: "কক্সবাজার–টেকনাফ",
    lat: 21.2350,
    lng: 92.0500,
    best: "সকাল ও বিকেল",
    safety: "গাড়ি চালানোর সময় গতি ও সড়ক নিরাপত্তা মেনে চলুন।"
  },

  {
    id: 6,
    name: "Radiant Fish World",
    bn: "রেডিয়েন্ট ফিশ ওয়ার্ল্ড",
    upazila: "কক্সবাজার সদর",
    category: "Family",
    type: "popular",
    description: "পরিবার ও শিশুদের জন্য মাছ ও সামুদ্রিক জীববৈচিত্র্য দেখার বিনোদনকেন্দ্র।",
    location: "কক্সবাজার সদর",
    lat: 21.4440,
    lng: 91.9820,
    best: "দিনের সময়",
    safety: "প্রবেশের আগে বর্তমান টিকিট ও সময়সূচি যাচাই করুন।"
  },

  {
    id: 7,
    name: "Ramu Buddhist Heritage",
    bn: "রামুর বৌদ্ধ ঐতিহ্য",
    upazila: "রামু",
    category: "Heritage",
    type: "popular",
    description: "রামুর বৌদ্ধ মন্দির, মূর্তি ও ঐতিহ্যবাহী স্থাপনাগুলো কক্সবাজারের গুরুত্বপূর্ণ সাংস্কৃতিক সম্পদ।",
    location: "রামু",
    lat: 21.4510,
    lng: 92.1030,
    best: "সকাল",
    safety: "ধর্মীয় স্থানে স্থানীয় নিয়ম ও শালীনতা মেনে চলুন।"
  },

  {
    id: 8,
    name: "Ramu Rubber Garden",
    bn: "রামু রাবার বাগান",
    upazila: "রামু",
    category: "Nature",
    type: "popular",
    description: "সবুজ রাবার বাগান ও গ্রামীণ পরিবেশ উপভোগের জন্য আকর্ষণীয় এলাকা।",
    location: "রামু",
    lat: 21.4300,
    lng: 92.1200,
    best: "সকাল",
    safety: "ব্যক্তিগত বা বাণিজ্যিক বাগানে প্রবেশের আগে অনুমতি নিন।"
  },

  {
    id: 9,
    name: "Maheshkhali Adinath Temple",
    bn: "মহেশখালী আদিনাথ মন্দির",
    upazila: "মহেশখালী",
    category: "Heritage",
    type: "popular",
    description: "মৈনাক পাহাড়ে অবস্থিত ঐতিহাসিক ধর্মীয় স্থাপনা ও গুরুত্বপূর্ণ তীর্থস্থান।",
    location: "মহেশখালী",
    lat: 21.5000,
    lng: 91.9500,
    best: "সকাল",
    safety: "পাহাড়ে ওঠার সময় সতর্ক থাকুন।"
  },

  {
    id: 10,
    name: "Maheshkhali Island",
    bn: "মহেশখালী দ্বীপ",
    upazila: "মহেশখালী",
    category: "Island",
    type: "popular",
    description: "বাংলাদেশের একমাত্র পাহাড়ি দ্বীপ হিসেবে পরিচিত মহেশখালী প্রাকৃতিক ও সাংস্কৃতিক বৈচিত্র্যে সমৃদ্ধ।",
    location: "মহেশখালী",
    lat: 21.4900,
    lng: 91.9600,
    best: "সকাল থেকে বিকেল",
    safety: "নৌযাত্রার সময় লাইফ জ্যাকেট ব্যবহার করুন।"
  },

  {
    id: 11,
    name: "Sonadia Island",
    bn: "সোনাদিয়া দ্বীপ",
    upazila: "মহেশখালী",
    category: "Island",
    type: "hidden",
    description: "ম্যানগ্রোভ, সৈকত ও পরিযায়ী পাখির আবাসস্থল হিসেবে পরিচিত গুরুত্বপূর্ণ উপকূলীয় দ্বীপ।",
    location: "মহেশখালী",
    lat: 21.4900,
    lng: 91.8900,
    best: "শীতকাল",
    safety: "নৌযাত্রা ও জোয়ার-ভাটা সম্পর্কে স্থানীয়দের পরামর্শ নিন।"
  },

  {
    id: 12,
    name: "Kutubdia Island",
    bn: "কুতুবদিয়া দ্বীপ",
    upazila: "কুতুবদিয়া",
    category: "Island",
    type: "popular",
    description: "উপকূলীয় প্রকৃতি, বাতিঘর ও ঐতিহ্যবাহী লবণ উৎপাদনের জন্য পরিচিত দ্বীপ।",
    location: "কুতুবদিয়া",
    lat: 21.8160,
    lng: 91.8600,
    best: "শীতকাল",
    safety: "সমুদ্র ও নৌপথের বর্তমান পরিস্থিতি যাচাই করুন।"
  },

  {
    id: 13,
    name: "Kutubdia Lighthouse Area",
    bn: "কুতুবদিয়া বাতিঘর এলাকা",
    upazila: "কুতুবদিয়া",
    category: "Heritage",
    type: "candidate",
    description: "কুতুবদিয়ার ঐতিহাসিক বাতিঘর এলাকার আশপাশ উপকূলীয় ইতিহাস ও দৃশ্যের জন্য আগ্রহের জায়গা।",
    location: "কুতুবদিয়া",
    lat: 21.8200,
    lng: 91.8500,
    best: "দিনের সময়",
    safety: "বর্তমান প্রবেশাধিকার স্থানীয়ভাবে যাচাই করুন।"
  },

  {
    id: 14,
    name: "Teknaf Beach",
    bn: "টেকনাফ সমুদ্র সৈকত",
    upazila: "টেকনাফ",
    category: "Beach",
    type: "popular",
    description: "টেকনাফ উপদ্বীপের উপকূলীয় সৈকত ও প্রকৃতি উপভোগের জায়গা।",
    location: "টেকনাফ",
    lat: 20.8660,
    lng: 92.3000,
    best: "সকাল ও বিকেল",
    safety: "সীমান্ত ও স্থানীয় প্রশাসনের নির্দেশনা মেনে চলুন।"
  },

  {
    id: 15,
    name: "Naf River",
    bn: "নাফ নদী",
    upazila: "টেকনাফ",
    category: "Nature",
    type: "popular",
    description: "বাংলাদেশ ও মিয়ানমারের সীমান্তবর্তী গুরুত্বপূর্ণ নদী।",
    location: "টেকনাফ",
    lat: 20.8600,
    lng: 92.3000,
    best: "বিকেল",
    safety: "সীমান্তবর্তী এলাকায় প্রশাসনের নির্দেশনা অনুসরণ করুন।"
  },

  {
    id: 16,
    name: "Saint Martin's Island",
    bn: "সেন্ট মার্টিন দ্বীপ",
    upazila: "টেকনাফ",
    category: "Island",
    type: "popular",
    description: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ, নীল পানি ও সামুদ্রিক জীববৈচিত্র্যের জন্য বিখ্যাত।",
    location: "টেকনাফ",
    lat: 20.6270,
    lng: 92.3220,
    best: "ভ্রমণ মৌসুম",
    safety: "বর্তমান সরকারি ভ্রমণ বিধিনিষেধ ও জাহাজ চলাচল আগে যাচাই করুন।"
  },

  {
    id: 17,
    name: "Nafakhum View Candidate",
    bn: "নাফাখুম-সংলগ্ন অঞ্চল",
    upazila: "টেকনাফ",
    category: "Nature",
    type: "candidate",
    description: "এই entry-টি সরাসরি Cox's Bazar tourist destination হিসেবে নয়; আশপাশের দুর্গম পাহাড়ি প্রকৃতি সম্পর্কে ভবিষ্যৎ যাচাইয়ের জন্য রাখা হয়েছে।",
    location: "দক্ষিণ-পূর্ব পার্বত্য অঞ্চল",
    lat: 21.8000,
    lng: 92.5000,
    best: "শুকনো মৌসুম",
    safety: "স্থানটি কক্সবাজার জেলার নির্দিষ্ট পর্যটন স্পট হিসেবে প্রকাশের আগে অবশ্যই প্রশাসনিক সীমা যাচাই করুন।"
  },

  {
    id: 18,
    name: "Chakaria Coastal Area",
    bn: "চকরিয়ার উপকূলীয় অঞ্চল",
    upazila: "চকরিয়া",
    category: "Nature",
    type: "candidate",
    description: "চকরিয়ার উপকূলীয় প্রকৃতি, নদী ও স্থানীয় জীবনযাত্রা নিয়ে ভবিষ্যৎ পর্যটন তথ্য সংগ্রহের জন্য রাখা হয়েছে।",
    location: "চকরিয়া",
    lat: 21.7400,
    lng: 92.0000,
    best: "শীতকাল",
    safety: "নির্দিষ্ট দর্শনীয় স্থান ও প্রবেশাধিকার স্থানীয়ভাবে যাচাই করুন।"
  },

  {
    id: 19,
    name: "Pekua Coastal Area",
    bn: "পেকুয়ার উপকূলীয় এলাকা",
    upazila: "পেকুয়া",
    category: "Nature",
    type: "candidate",
    description: "পেকুয়ার উপকূলীয় ও গ্রামীণ প্রকৃতি পর্যটন সম্ভাবনার অংশ হিসেবে তালিকাভুক্ত।",
    location: "পেকুয়া",
    lat: 21.8100,
    lng: 91.8500,
    best: "শীতকাল",
    safety: "নির্দিষ্ট জায়গা প্রকাশের আগে স্থানীয়ভাবে যাচাই করুন।"
  },

  {
    id: 20,
    name: "Eidgaon Countryside",
    bn: "ঈদগাঁওয়ের গ্রামীণ প্রকৃতি",
    upazila: "ঈদগাঁও",
    category: "Nature",
    type: "candidate",
    description: "ঈদগাঁওয়ের গ্রামীণ পরিবেশ, স্থানীয় জীবন ও প্রকৃতি নিয়ে ভবিষ্যৎ পর্যটন কনটেন্ট তৈরির জন্য তালিকাভুক্ত।",
    location: "ঈদগাঁও",
    lat: 21.5200,
    lng: 92.0500,
    best: "সকাল",
    safety: "নির্দিষ্ট দর্শনীয় স্থান স্থানীয়ভাবে যাচাই করুন।"
  },

  {
    id: 21,
    name: "Patuartek Beach",
    bn: "পাটুয়ারটেক সমুদ্র সৈকত",
    upazila: "উখিয়া",
    category: "Beach",
    type: "hidden",
    description: "ইনানী এলাকার দক্ষিণে অপেক্ষাকৃত কম পরিচিত উপকূলীয় সৈকত এলাকা।",
    location: "উখিয়া",
    lat: 21.1300,
    lng: 92.1000,
    best: "বিকেল",
    safety: "স্থানীয় পথ ও নিরাপত্তা পরিস্থিতি যাচাই করুন।"
  },

  {
    id: 22,
    name: "Daria Nagar",
    bn: "দরিয়ানগর",
    upazila: "কক্সবাজার সদর",
    category: "Nature",
    type: "popular",
    description: "পাহাড়, সমুদ্র ও উপকূলীয় প্র
