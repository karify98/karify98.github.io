import Container from "@/app/_components/container";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Experience
            </h1>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-4 sm:translate-x-16"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Current Role */}
                <div className="relative pl-8 sm:pl-32 py-6">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3 sm:mb-0 sm:mr-4">Present</time>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">Senior Backend Engineer II & Team Manager</div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 font-medium">Monstarlab Vietnam (Danang)</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Leading performance improvements that significantly reduced latency and increased production stability</li>
                        <li>Mentoring junior engineers, helping them grow technically and professionally</li>
                        <li>Designing scalable system architectures, especially moving towards serverless, DevOps practices, and CI/CD pipelines</li>
                        <li>Applying AI and automation to internal workflows to save time and reduce manual effort</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Previous Role */}
                <div className="relative pl-8 sm:pl-32 py-6">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3 sm:mb-0 sm:mr-4">2018-2022</time>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">Backend Engineer</div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 font-medium">Monstarlab Vietnam (Danang)</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Developed and maintained backend services for various client projects</li>
                        <li>Implemented RESTful APIs and WebSocket services for real-time data processing</li>
                        <li>Optimized database queries and system performance</li>
                        <li>Collaborated with cross-functional teams to deliver features on schedule</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Internship */}
                <div className="relative pl-8 sm:pl-32 py-6">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3 sm:mb-0 sm:mr-4">2017</time>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">Intern </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 font-medium">Monstarlab Vietnam (Danang)</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Gained hands-on experience with real-world projects and production-level coding</li>
                        <li>Developed mobile applications using industry-standard practices</li>
                        <li>Collaborated with team members in an agile environment</li>
                        <li>This internship opened the door to my transition into backend development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Education
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science in Computer Science (Not Graduated 🥶)</h3>
                      <p className="text-gray-600 dark:text-gray-300">Danang University of Science and Technology (DUT)</p>
                    </div>
                    <div className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mt-2 md:mt-0">2013 - 2017</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built a solid foundation in software development and algorithms. During university years, I joined Monstarlab Vietnam as a mobile development intern in 2017, which opened the door for me to explore real-world projects, teamwork, and production-level coding. From there, I quickly transitioned into backend development — the field that truly captured my passion for building systems, optimizing performance, and automating workflows.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professional Approach</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm passionate about solving problems with clean architecture, writing maintainable code, and helping teams move faster with confidence.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    These are some of the recognitions I received during my time at Monstarlab Vietnam:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      🏆 Best Employee
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      🏆 Best Technical Lead
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      🏆 Best Associate Team Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
} 