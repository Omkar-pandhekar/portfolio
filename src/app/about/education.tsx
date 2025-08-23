import SectionContainer from "@/components/layouts/SectionContainer";
import ShinyText from "@/components/textanimations/ShinyText";
import { Calendar, GraduationCap, MapPin, Sparkle } from "lucide-react";
import React from "react";

interface EducationEntry {
  school: string;
  degree: string;
  field?: string;
  period: string;
  location: string;
  grade?: string;
  highlights?: string[];
}

const EDUCATION: EducationEntry[] = [
  {
    school: "Deogiri Institute of Engineering and Management Studies",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "2022 – 2026",
    location: "Chh. Sambhajinagar, Maharashtra, India",
    grade: "CGPA: 7.6/10",
    highlights: [
      "Coursework: DSA, Operating Systems, DBMS, Computer Networks, Web Development",
      "Hackathon finalist; contributed to 3 open-source projects",
    ],
  },
  {
    school: "Shivchhatrapati Junior College",
    degree: "Higher Secondary Education (HSC)",
    period: "2020 – 2022",
    location: "Chh. Sambhajinagar, Maharashtra, India",
    grade: "Percentage: 74%",
    highlights: ["Science (PCM) with Computer Science"],
  },
  {
    school: "Sushiladevi Deshmukh Pri. School",
    degree: "Secondary and Higher Education (SSC)",
    period: "2017 – 2019",
    location: "Chh. Sambhajinagar, Maharashtra, India",
    grade: "Percentage: 93%",
    highlights: ["Science (PCM) with Computer Science"],
  },
];

const Education = () => {
  return (
    <SectionContainer>
      <div className="relative w-full pt-20">
        <div className="flex items-center gap-2 ml-4 sm:ml-8">
          <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
          <ShinyText
            text="Education"
            disabled={false}
            speed={1.5}
            className="text-lg sm:text-xl text-green-500 dark:text-lime-500"
          />
        </div>

        <div className="mt-8 ml-4 sm:ml-8">
          <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-4 sm:pl-2">
            {EDUCATION.map((item, idx) => (
              <div key={idx} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1px] top-1 h-3 w-3 rounded-full bg-green-500 dark:bg-lime-400 ring-4 ring-green-500/20" />

                <div className="rounded-lg border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm p-3 sm:p-5 max-w-sm sm:max-w-none">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-green-500 dark:text-lime-400" />
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.school}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className="font-medium">
                      {item.degree}
                      {item.field ? ` · ${item.field}` : ""}
                    </span>
                    {item.grade ? (
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {item.grade}
                      </span>
                    ) : null}
                    <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                      <MapPin className="h-4 w-4" /> {item.location}
                    </span>
                  </div>

                  {item.highlights && item.highlights.length > 0 ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;
