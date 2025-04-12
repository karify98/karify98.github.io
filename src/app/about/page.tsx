import Container from "@/app/_components/container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg transform rotate-3"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden border-4 border-yellow-500/20">
                  <Image
                    src="/images/profile.jpg"
                    alt="Karify98"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Backend Engineer & Technical Content Creator
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Hi, I'm Nam Nguyen (aka Karify98), a passionate backend engineer with a focus on building scalable and efficient systems. 
                  I specialize in backend development, AI automation, and DevOps practices.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  With a background in software engineering, I've worked on various projects ranging from 
                  microservices architectures to AI-powered applications. I'm constantly learning and exploring 
                  new technologies to stay at the forefront of the industry.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, I enjoy writing technical content to share my knowledge and experiences 
                  with the developer community. I believe in the power of open-source and collaborative learning.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Tools
              </h2>
              
              <div className="space-y-8">
                {/* Languages & Frameworks */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Languages & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js (preferred)", "Golang", "Python", "SQL (PostgreSQL)", "Bash/Shell"].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Backend & Architecture */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Backend & Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["REST API", "WebSocket API", "Serverless Architecture", "Clean Code", "Scalable System Design"].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Cloud & DevOps */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Cloud & DevOps
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS",
                      "GCP",
                      "Serverless (Lambda, API Gateway, Cognito, RDS, S3, CloudWatch)", 
                      "CI/CD (GitHub Actions)", 
                      "Docker",
                      "Kubernetes",
                    ].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* AI & Automation */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    AI & Automation
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI Agents for content generation", 
                      "Python automation workflows", 
                      "Prompt engineering for GPT/image tools", 
                      "Exploring AI for monetization"
                    ].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools & Platforms */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["VSCode", "Git", "Slack", "Workast", "Cloudflare", "JMeter", "Open-source first"].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Productivity & Teamwork */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Productivity & Teamwork
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Monitoring & Maintaining",
                      "Performance Optimization",
                      "Team management", 
                      "Workflow Optimization", 
                      "Agile mindset"
                    ].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Problem Solving
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I approach every challenge with a systematic mindset, breaking down complex problems into manageable components.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Clean Code
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I believe in writing clean, maintainable code that's easy to understand and extend.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
} 