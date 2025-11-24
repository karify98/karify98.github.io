import { CMS_NAME } from "@/lib/constants";
import type { Locale } from "@/lib/locales";

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    navigation: {
      home: string;
      about: string;
      experience: string;
      blog: string;
      contact: string;
    };
    language: {
      label: string;
      en: string;
      vi: string;
    };
  };
  intro: {
    greeting: string;
    highlight: string;
    tagline: string;
    description: string;
    ctas: {
      blog: string;
      work: string;
    };
  };
  home: {
    recentPosts: string;
  };
  blogs: {
    title: string;
    description: string;
    searchPlaceholder: string;
    searchLabel: string;
    filterLabel: string;
    clearFilter: string;
    noResults: string;
  };
  footer: {
    thankYou: string;
    copyright: string;
    crafted: string;
  };
  about: {
    title: string;
    roleHeading: string;
    paragraphs: string[];
    skillsTitle: string;
    skillGroups: Array<{ title: string; items: string[] }>;
    approachTitle: string;
    approachCards: Array<{ title: string; description: string }>;
  };
  experience: {
    title: string;
    timeline: Array<{
      period: string;
      role: string;
      company: string;
      highlights: string[];
    }>;
    educationTitle: string;
    education: {
      degreeTitle: string;
      institution: string;
      timeframe: string;
      description: string;
    };
    approachTitle: string;
    approachIntro: string;
    recognitionIntro: string;
    recognitions: string[];
  };
  posts: {
    metadataSuffix: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    metadata: {
      title: "Karify98 - Backend Engineer & Technical Content Creator",
      description:
        "Personal portfolio of Karify98, a backend engineer and technical content creator specializing in scalable systems, AI automation, and DevOps.",
    },
    header: {
      brand: "Karify98",
      navigation: {
        home: "Home",
        about: "About",
        experience: "Experience",
        blog: "Blog",
        contact: "Contact",
      },
      language: {
        label: "Change language",
        en: "EN",
        vi: "VI",
      },
    },
    intro: {
      greeting: "Hi, I'm Nam Nguyen (aka Karify98)",
      highlight: "Nam Nguyen (aka Karify98)",
      tagline: "The guy who loves clean code, smart systems, caffeine ☕️, and the occasional beer 🍺",
      description:
        "I build reliable backend systems, automate workflows with AI, and keep everything running smooth with a touch of DevOps magic. Let's make tech simpler (and a lot more fun) 🚀",
      ctas: {
        blog: "Read My Blog",
        work: "View My Work",
      },
    },
    home: {
      recentPosts: "Recent Posts",
    },
    blogs: {
      title: "Blog Posts",
      description:
        "Thoughts, experiences, and technical insights from my journey in software development.",
      searchPlaceholder: "Search by hashtag (e.g. #ai)",
      searchLabel: "Search hashtags",
      filterLabel: "Popular hashtags",
      clearFilter: "Clear filter",
      noResults: "No posts found for this hashtag.",
    },
    footer: {
      thankYou: "Thanks for visiting my digital space ✨",
      copyright: "© 2025 Karify98. Built with Next.js and Tailwind CSS.",
      crafted: "Crafted by Karify98",
    },
    about: {
      title: "About Me",
      roleHeading: "Backend Engineer & Technical Content Creator",
      paragraphs: [
        "Hi, I'm Nam Nguyen (aka Karify98), a passionate backend engineer with a focus on building scalable and efficient systems. I specialize in backend development, AI automation, and DevOps practices.",
        "With a background in software engineering, I've worked on various projects ranging from microservices architectures to AI-powered applications. I'm constantly learning and exploring new technologies to stay at the forefront of the industry.",
        "When I'm not coding, I enjoy writing technical content to share my knowledge and experiences with the developer community. I believe in the power of open-source and collaborative learning.",
      ],
      skillsTitle: "Skills & Tools",
      skillGroups: [
        {
          title: "Languages & Frameworks",
          items: ["Node.js (preferred)", "Golang", "Python", "SQL (PostgreSQL)", "Bash/Shell"],
        },
        {
          title: "Backend & Architecture",
          items: ["REST API", "WebSocket API", "Serverless Architecture", "Clean Code", "Scalable System Design"],
        },
        {
          title: "Cloud & DevOps",
          items: [
            "AWS",
            "GCP",
            "Serverless (Lambda, API Gateway, Cognito, RDS, S3, CloudWatch)",
            "CI/CD (GitHub Actions)",
            "Docker",
            "Kubernetes",
          ],
        },
        {
          title: "AI & Automation",
          items: [
            "AI Agents for content generation",
            "Python automation workflows",
            "Prompt engineering for GPT/image tools",
            "Exploring AI for monetization",
          ],
        },
        {
          title: "Tools & Platforms",
          items: ["VSCode", "Git", "Slack", "Workast", "Cloudflare", "JMeter", "Open-source first"],
        },
        {
          title: "Productivity & Teamwork",
          items: [
            "Monitoring & Maintaining",
            "Performance Optimization",
            "Team management",
            "Workflow Optimization",
            "Agile mindset",
          ],
        },
      ],
      approachTitle: "My Approach",
      approachCards: [
        {
          title: "Problem Solving",
          description:
            "I approach every challenge with a systematic mindset, breaking down complex problems into manageable components.",
        },
        {
          title: "Clean Code",
          description: "I believe in writing clean, maintainable code that's easy to understand and extend.",
        },
        {
          title: "Continuous Learning",
          description:
            "I'm always learning—whether it's new frameworks, design patterns, or productivity workflows.",
        },
      ],
    },
    experience: {
      title: "Experience",
      timeline: [
        {
          period: "Present",
          role: "Senior Backend Engineer II & Team Manager",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Leading performance improvements that significantly reduced latency and increased production stability",
            "Mentoring junior engineers, helping them grow technically and professionally",
            "Designing scalable system architectures with serverless, DevOps practices, and CI/CD pipelines",
            "Applying AI and automation to internal workflows to save time and reduce manual effort",
          ],
        },
        {
          period: "2018-2022",
          role: "Backend Engineer",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Developed and maintained backend services for various client projects",
            "Implemented RESTful APIs and WebSocket services for real-time data processing",
            "Optimized database queries and system performance",
            "Collaborated with cross-functional teams to deliver features on schedule",
          ],
        },
        {
          period: "2017",
          role: "Intern",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Gained hands-on experience with real-world projects and production-level coding",
            "Developed mobile applications using industry-standard practices",
            "Collaborated with team members in an agile environment",
            "This internship opened the door to my transition into backend development",
          ],
        },
      ],
      educationTitle: "Education",
      education: {
        degreeTitle: "Bachelor of Science in Computer Science (Not Graduated 🥶)",
        institution: "Danang University of Science and Technology (DUT)",
        timeframe: "2013 - 2017",
        description:
          "Built a solid foundation in software development and algorithms. During university years, I joined Monstarlab Vietnam as a mobile development intern in 2017, which opened the door for me to explore real-world projects, teamwork, and production-level coding. From there, I quickly transitioned into backend development — the field that truly captured my passion for building systems, optimizing performance, and automating workflows.",
      },
      approachTitle: "Professional Approach",
      approachIntro:
        "I'm passionate about solving problems with clean architecture, writing maintainable code, and helping teams move faster with confidence.",
      recognitionIntro: "These are some of the recognitions I received during my time at Monstarlab Vietnam:",
      recognitions: [
        "🏆 Best Employee",
        "🏆 Best Technical Lead",
        "🏆 Best Associate Team Manager",
      ],
    },
    posts: {
      metadataSuffix: `Next.js Blog Example with ${CMS_NAME}`,
    },
  },
  vi: {
    metadata: {
      title: "Karify98 - Kỹ sư Backend & Người sáng tạo nội dung kỹ thuật",
      description:
        "Portfolio cá nhân của Karify98, kỹ sư backend yêu thích hệ thống mở rộng, tự động hóa bằng AI và quy trình DevOps.",
    },
    header: {
      brand: "Karify98",
      navigation: {
        home: "Trang chủ",
        about: "Giới thiệu",
        experience: "Kinh nghiệm",
        blog: "Blog",
        contact: "Liên hệ",
      },
      language: {
        label: "Đổi ngôn ngữ",
        en: "EN",
        vi: "VI",
      },
    },
    intro: {
      greeting: "Xin chào, mình là Nam Nguyen (Karify98)",
      highlight: "Nam Nguyen (Karify98)",
      tagline: "Chàng trai mê clean code, hệ thống thông minh, cà phê ☕️ và đôi khi là một cốc bia 🍺",
      description:
        "Mình xây dựng các hệ thống backend ổn định, tự động hóa quy trình bằng AI và giữ mọi thứ vận hành trơn tru với một chút phép màu DevOps. Cùng nhau biến công nghệ trở nên đơn giản và thú vị hơn nhé 🚀",
      ctas: {
        blog: "Đọc blog",
        work: "Xem dự án",
      },
    },
    home: {
      recentPosts: "Bài viết mới nhất",
    },
    blogs: {
      title: "Bài viết trên blog",
      description:
        "Những suy nghĩ, trải nghiệm và góc nhìn kỹ thuật trong hành trình làm phần mềm của mình.",
      searchPlaceholder: "Tìm bài viết bằng hashtag (ví dụ: #ai)",
      searchLabel: "Tìm hashtag",
      filterLabel: "Hashtag phổ biến",
      clearFilter: "Xóa bộ lọc",
      noResults: "Không có bài viết nào cho hashtag này.",
    },
    footer: {
      thankYou: "Cảm ơn bạn đã ghé thăm góc nhỏ của mình ✨",
      copyright: "© 2025 Karify98. Xây dựng bằng Next.js và Tailwind CSS.",
      crafted: "Thực hiện bởi Karify98",
    },
    about: {
      title: "Về mình",
      roleHeading: "Kỹ sư Backend & Người sáng tạo nội dung kỹ thuật",
      paragraphs: [
        "Mình là Nam Nguyen (Karify98), một kỹ sư backend đam mê xây dựng các hệ thống mở rộng và hiệu quả. Mình tập trung vào phát triển backend, tự động hóa bằng AI và thực hành DevOps.",
        "Với nền tảng kỹ sư phần mềm, mình đã tham gia nhiều dự án từ kiến trúc microservices đến ứng dụng dùng AI. Mình luôn học hỏi và khám phá công nghệ mới để bắt kịp nhịp phát triển của ngành.",
        "Ngoài việc viết code, mình thích chia sẻ kiến thức qua các bài viết kỹ thuật. Mình tin vào sức mạnh của cộng đồng mã nguồn mở và tinh thần học hỏi cùng nhau.",
      ],
      skillsTitle: "Kỹ năng & Công cụ",
      skillGroups: [
        {
          title: "Ngôn ngữ & Framework",
          items: ["Node.js (ưa thích)", "Golang", "Python", "SQL (PostgreSQL)", "Bash/Shell"],
        },
        {
          title: "Backend & Kiến trúc",
          items: ["REST API", "WebSocket API", "Kiến trúc Serverless", "Clean Code", "Thiết kế hệ thống mở rộng"],
        },
        {
          title: "Cloud & DevOps",
          items: [
            "AWS",
            "GCP",
            "Serverless (Lambda, API Gateway, Cognito, RDS, S3, CloudWatch)",
            "CI/CD (GitHub Actions)",
            "Docker",
            "Kubernetes",
          ],
        },
        {
          title: "AI & Tự động hóa",
          items: [
            "AI Agents cho sáng tạo nội dung",
            "Quy trình tự động bằng Python",
            "Tối ưu prompt cho GPT/công cụ tạo ảnh",
            "Khám phá các ý tưởng kiếm tiền với AI",
          ],
        },
        {
          title: "Công cụ & Nền tảng",
          items: ["VSCode", "Git", "Slack", "Workast", "Cloudflare", "JMeter", "Ưu tiên mã nguồn mở"],
        },
        {
          title: "Hiệu suất & Làm việc nhóm",
          items: [
            "Giám sát & Vận hành",
            "Tối ưu hiệu năng",
            "Quản lý đội ngũ",
            "Tối ưu quy trình làm việc",
            "Tư duy Agile",
          ],
        },
      ],
      approachTitle: "Phong cách làm việc",
      approachCards: [
        {
          title: "Giải quyết vấn đề",
          description:
            "Mình luôn chia nhỏ vấn đề phức tạp thành các phần dễ quản lý để tìm ra hướng giải quyết rõ ràng.",
        },
        {
          title: "Clean Code",
          description: "Ưu tiên viết code rõ ràng, dễ bảo trì và dễ mở rộng.",
        },
        {
          title: "Học hỏi liên tục",
          description: "Luôn cập nhật kiến thức — từ framework mới, pattern thiết kế đến cách làm việc hiệu quả hơn.",
        },
      ],
    },
    experience: {
      title: "Kinh nghiệm",
      timeline: [
        {
          period: "Hiện tại",
          role: "Senior Backend Engineer II & Team Manager",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Dẫn dắt tối ưu hiệu năng, giảm độ trễ và tăng độ ổn định cho hệ thống production",
            "Mentor cho các bạn kỹ sư trẻ về kỹ thuật và định hướng nghề nghiệp",
            "Thiết kế kiến trúc hệ thống mở rộng theo hướng serverless, DevOps và CI/CD",
            "Ứng dụng AI và tự động hóa giúp tiết kiệm thời gian, giảm thao tác thủ công",
          ],
        },
        {
          period: "2018-2022",
          role: "Backend Engineer",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Phát triển và vận hành backend cho nhiều dự án khách hàng",
            "Xây dựng REST API và dịch vụ WebSocket cho bài toán realtime",
            "Tối ưu truy vấn cơ sở dữ liệu và hiệu năng hệ thống",
            "Phối hợp cùng các team để bàn giao tính năng đúng tiến độ",
          ],
        },
        {
          period: "2017",
          role: "Thực tập sinh",
          company: "Monstarlab Vietnam (Danang)",
          highlights: [
            "Tiếp cận dự án thực tế và quy trình code sản phẩm",
            "Phát triển ứng dụng di động với quy chuẩn của công ty",
            "Làm việc nhóm trong môi trường agile",
            "Cột mốc đưa mình đến với con đường backend",
          ],
        },
      ],
      educationTitle: "Học vấn",
      education: {
        degreeTitle: "Cử nhân Khoa học Máy tính (chưa tốt nghiệp 🥶)",
        institution: "Đại học Bách khoa Đà Nẵng (DUT)",
        timeframe: "2013 - 2017",
        description:
          "Xây dựng nền tảng vững chắc về phát triển phần mềm và thuật toán. Trong thời gian học đại học, mình thực tập Mobile tại Monstarlab Vietnam năm 2017, mở ra cơ hội trải nghiệm dự án thực tế, làm việc nhóm và quy trình sản phẩm. Từ đó mình chuyển hướng nhanh sang backend — lĩnh vực khiến mình đam mê việc xây dựng hệ thống, tối ưu hiệu năng và tự động hóa.",
      },
      approachTitle: "Định hướng nghề nghiệp",
      approachIntro:
        "Mình yêu thích việc giải quyết vấn đề bằng kiến trúc sạch, code dễ bảo trì và giúp đội ngũ vận hành nhanh chóng, tự tin.",
      recognitionIntro: "Một vài ghi nhận mình từng nhận được tại Monstarlab Vietnam:",
      recognitions: [
        "🏆 Nhân viên xuất sắc",
        "🏆 Technical Lead tiêu biểu",
        "🏆 Associate Team Manager xuất sắc",
      ],
    },
    posts: {
      metadataSuffix: `Ví dụ blog Next.js với ${CMS_NAME}`,
    },
  },
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.en;
}
