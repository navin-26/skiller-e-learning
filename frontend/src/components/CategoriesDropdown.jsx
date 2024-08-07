import React, { useState } from 'react';

const categories = [
  { 
    name: "Development", 
    subcategories: [
      { 
        name: "Web Development", 
        topics: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"]
      },
      { 
        name: "Programming Languages", 
        topics: ["JavaScript", "Java", "Python", "C#", "C++", "Go"]
      },
      { 
        name: "Game Development", 
        topics: ["Unity", "Unreal Engine", "Godot", "GameMaker", "CryEngine"]
      },
      { 
        name: "Database", 
        topics: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle"]
      },
      { 
        name: "Mobile Development", 
        topics: ["Android Development", "iOS Development", "Flutter", "React Native"]
      }
    ]
  },
  { 
    name: "Business", 
    subcategories: [
      { 
        name: "Entrepreneurship", 
        topics: ["Startup", "Business Strategy", "Business Plan", "Funding"]
      },
      { 
        name: "Communications", 
        topics: ["Public Speaking", "Presentation Skills", "Writing", "Business Communication"]
      },
      { 
        name: "Management", 
        topics: ["Project Management", "Leadership", "Time Management", "Agile"]
      }
    ]
  },
  { 
    name: "IT and Software", 
    subcategories: [
      { 
        name: "IT Certification", 
        topics: ["AWS Certification", "Cisco Certification", "CompTIA", "Microsoft Certification"]
      },
      { 
        name: "Network & Security", 
        topics: ["Cyber Security", "Network Security", "Ethical Hacking", "CCNA"]
      }
    ]
  },
  // Add other main categories and their subcategories
  {
    name: "Finance and Accounting",
    subcategories: [
      {
        name: "Finance",
        topics: ["Investment", "Trading", "Financial Analysis", "Personal Finance"]
      },
      {
        name: "Accounting",
        topics: ["Bookkeeping", "Financial Accounting", "QuickBooks", "Tax Preparation"]
      }
    ]
  },
  {
    name: "Productivity",
    subcategories: [
      {
        name: "Personal Productivity",
        topics: ["Time Management", "Task Management", "Efficiency", "Goal Setting"]
      },
      {
        name: "Office Productivity",
        topics: ["Microsoft Office", "Google Workspace", "Automation", "Email Management"]
      }
    ]
  },
  {
    name: "Personal Development",
    subcategories: [
      {
        name: "Self Improvement",
        topics: ["Motivation", "Mindfulness", "Happiness", "Confidence"]
      },
      {
        name: "Career Development",
        topics: ["Resume Writing", "Interviewing Skills", "Job Search", "Networking"]
      }
    ]
  },
  {
    name: "Design",
    subcategories: [
      {
        name: "Graphic Design",
        topics: ["Photoshop", "Illustrator", "InDesign", "Canva"]
      },
      {
        name: "UI/UX Design",
        topics: ["User Experience", "User Interface", "Prototyping", "Design Thinking"]
      }
    ]
  },
  {
    name: "Marketing",
    subcategories: [
      {
        name: "Digital Marketing",
        topics: ["SEO", "Social Media Marketing", "Email Marketing", "Content Marketing"]
      },
      {
        name: "Marketing Strategy",
        topics: ["Branding", "Market Research", "Campaign Management", "Customer Acquisition"]
      }
    ]
  },
  {
    name: "Lifestyle",
    subcategories: [
      {
        name: "Health & Wellness",
        topics: ["Fitness", "Nutrition", "Mental Health", "Yoga"]
      },
      {
        name: "Hobbies",
        topics: ["Photography", "Travel", "Gardening", "DIY Crafts"]
      }
    ]
  },
  {
    name: "Photography and Video",
    subcategories: [
      {
        name: "Photography",
        topics: ["Digital Photography", "Portrait Photography", "Photography Fundamentals", "Adobe Lightroom"]
      },
      {
        name: "Video",
        topics: ["Video Production", "Video Editing", "Filmmaking", "Adobe Premiere"]
      }
    ]
  },
  {
    name: "Health and Fitness",
    subcategories: [
      {
        name: "Fitness",
        topics: ["Workout", "Personal Training", "Strength Training", "Pilates"]
      },
      {
        name: "Nutrition",
        topics: ["Diet", "Healthy Eating", "Meal Planning", "Weight Loss"]
      }
    ]
  },
  {
    name: "Music",
    subcategories: [
      {
        name: "Instruments",
        topics: ["Guitar", "Piano", "Violin", "Drums"]
      },
      {
        name: "Music Production",
        topics: ["Mixing", "Audio Engineering", "Music Theory", "Ableton Live"]
      }
    ]
  },
  {
    name: "Teaching and Academics",
    subcategories: [
      {
        name: "Teaching",
        topics: ["Classroom Management", "Curriculum Development", "Special Education", "Educational Technology"]
      },
      {
        name: "Academics",
        topics: ["Mathematics", "Science", "History", "Language Learning"]
      }
    ]
  }
];
const CategoriesDropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [subcategoriesVisible, setSubcategoriesVisible] = useState(null);
    const [topicsVisible, setTopicsVisible] = useState(null);
  
    return (
      <div 
        className="relative"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => {
          setDropdownVisible(false);
          setSubcategoriesVisible(null);
          setTopicsVisible(null);
        }}
      >
        <button className="p-2 text-black hover:text-teal-600">Categories</button>
        {dropdownVisible && (
          <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-0 z-20 w-64 border border-teal-600 h-auto">
            {categories.map((category, index) => (
              <div 
                key={index}
                onMouseEnter={() => setSubcategoriesVisible(index)}
                onMouseLeave={() => setSubcategoriesVisible(null)}
                className="relative flex items-center" // Add flex to align items
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <p className="hover:text-teal-600 cursor-pointer">{category.name}</p>
                    <span className="ml-2 text-gray-500">&gt;</span>
                  </div>
                </div>
                {subcategoriesVisible === index && (
                  <div className="absolute left-[210px] -top-4 bg-white shadow-lg rounded-lg p-4 z-30 w-64 border border-teal-600 h-auto">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div
                        key={subIndex}
                        onMouseEnter={() => setTopicsVisible(subIndex)}
                        onMouseLeave={() => setTopicsVisible(null)}
                        className="relative"
                      >
                        <div className="flex justify-between items-center">
                          <p className="hover:text-teal-600 cursor-pointer">{subcategory.name}</p>
                          <span className="ml-2 text-gray-500">&gt;</span>
                        </div>
                        {topicsVisible === subIndex && (
                          <div className="absolute left-[210px] -top-4 bg-white shadow-lg rounded-lg p-4 z-40 w-64 border border-teal-600 h-auto">
                            {subcategory.topics.map((topic, topicIndex) => (
                              <p key={topicIndex} className="hover:text-teal-600 cursor-pointer mb-2">{topic}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default CategoriesDropdown;
