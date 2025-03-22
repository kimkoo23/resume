import React from 'react';
import { Github, Mail, LinkedinIcon, BookOpen, Code2, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <img
              src="/src/profile.png"
              alt="프로필 사진"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">송세용</h1>
              <p className="text-lg text-gray-600 mt-1">백엔드 개발자</p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/kimkoo23" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/kimkoo23" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Me Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">자기소개</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">기술 스택</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2"></h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-24">Java</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-24">Spring Framework</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-24">Next.js</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[80%]"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2"></h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-24">Git</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[88%]"></div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-24">AWS</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[75%]"></div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-24">Docker</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[70%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">경력사항</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800"></h3>
              <p className="text-gray-600"></p>
              <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800"></h3>
              <p className="text-gray-600"></p>
              <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">학력</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">연성대학교</h3>
            <p className="text-gray-600">세무회계과 | 2017 - 2020</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;