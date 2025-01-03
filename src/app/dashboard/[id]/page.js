"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, Play, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const parentRef = useRef(null);

  const colorSchemes = [
    { lighter: "#F3C5C5", darker: "#EF98A1" },
    { lighter: "#FAE0C1", darker: "#F8B577" },
    { lighter: "#D5D2FE", darker: "#A5A1F3" },
    { lighter: "#BFF0DB", darker: "#7FDBB6" },
  ];

  const course = {
    id: id,
    title: "Flutter Masterclass (Dart, APIs, Firebase & More)",
    category: "IT & Software",
    lessons: [
      {
        title: "Introduction to Flutter",
        duration: "10:30",
        videoId: "pTJJsmejUOQ",
        color: colorSchemes[0].lighter,
      },
      {
        title: "Dart Fundamentals",
        duration: "15:45",
        videoId: "Ej_Pcr4uC2Q",
        color: colorSchemes[1].lighter,
      },
      {
        title: "Building Your First Flutter App",
        duration: "20:15",
        videoId: "1ukSR1GRtMU",
        color: colorSchemes[2].lighter,
      },
      {
        title: "Working with APIs",
        duration: "18:20",
        videoId: "VPvVD8t02U8",
        color: colorSchemes[3].lighter,
      },
      {
        title: "Firebase Integration",
        duration: "25:00",
        videoId: "sfA3NWDBPZ4",
        color: colorSchemes[0].lighter,
      },
      {
        title: "State Management in Flutter",
        duration: "22:10",
        videoId: "3tm-R7ymwhc",
        color: colorSchemes[1].lighter,
      },
      {
        title: "Creating Custom Widgets",
        duration: "18:55",
        videoId: "J4BVaXkwmM8",
        color: colorSchemes[2].lighter,
      },
      {
        title: "Animations in Flutter",
        duration: "20:30",
        videoId: "GXIJJkq_H8g",
        color: colorSchemes[3].lighter,
      },
    ],
  };

  useEffect(() => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson]);
    }
  }, [activeLesson]);

  const allLessonsCompleted = completedLessons.length === course.lessons.length;

  return (
    <div
      ref={parentRef}
      className="max-w-full mx-auto mt-20 px-8 pb-20 relative"
    >
      <Link href="/courses" className="flex items-center text-gray-600 mb-12">
        <ChevronLeft size={20} />
        <span className="ml-2 text-sm">Back to Courses</span>
      </Link>

      <h1 className="text-[3rem] font-light leading-tight tracking-wide mb-8">
        {course.title}
      </h1>

      <div className="grid gap-8">
        <div className="col-span-3">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-3xl mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${course.lessons[activeLesson].videoId}`}
              title={course.lessons[activeLesson].title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p className="text-2xl font-semibold">Lessons for course</p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {course.lessons.map((lesson, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 cursor-pointer ${
              activeLesson === index ? "border-2 border-black" : ""
            } ${completedLessons.includes(index) ? "opacity-70" : ""}`}
            style={{ backgroundColor: lesson.color }}
            onClick={() => setActiveLesson(index)}
          >
            <div className="relative bg-gray-200 rounded-xl h-32 mb-4 overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${lesson.videoId}/0.jpg`}
                alt={lesson.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Play size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-sm font-medium mb-1 truncate">
              {lesson.title}
            </h3>
            <p className="text-xs text-gray-600">{lesson.duration}</p>
          </div>
        ))}
      </div>

      {allLessonsCompleted && (
        <div className="sticky bottom-0 left-0 right-0 mt-8">
          <div className="border  border-black/20 bg-white/60 backdrop-blur-xl text-black py-4 px-8 flex justify-between items-center rounded-t-lg">
            <p className="text-lg font-semibold">
              🎉 Congratulations! You've completed all lessons.
            </p>
            <Link
              href={`/certificate/generate/${id}`}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium"
            >
              Generate Certificate
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
