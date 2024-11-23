import { Tweet } from '../types';

export const tweets: Tweet[] = [
  // Existing tweets...
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    name: "John Doe",
    handle: "johndoe",
    content: "Just shipped a new feature! 🚀 Really excited about this one. Let me know what you think!",
    time: "2h",
    replies: 12,
    retweets: 34,
    likes: 189
  },
  {
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
    name: "Tech Weekly",
    handle: "techweekly",
    content: "🔥 Breaking: OpenAI announces GPT-5 with unprecedented capabilities in code generation and natural language understanding. This could revolutionize how we build software! #AI #Tech",
    time: "1h",
    replies: 342,
    retweets: 1205,
    likes: 4389
  },
  // ... rest of existing tweets ...
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Tech Insider",
    handle: "techinsider",
    content: "💻 Poll: What's your preferred code editor?\n\n• VS Code\n• WebStorm\n• Vim\n• Other\n\nQuote tweet with your favorite extensions! #DevTools",
    time: "4h",
    replies: 789,
    retweets: 1234,
    likes: 3456
  },
  // New tweets
  {
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    name: "Nina Rodriguez",
    handle: "ninacodes",
    content: "🎨 Just published my CSS Grid mastery course! Learn how to create complex layouts with ease. Early bird pricing ends tomorrow! #WebDev #CSS",
    time: "1h",
    replies: 45,
    retweets: 167,
    likes: 589
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Cloud Native News",
    handle: "cloudnativenews",
    content: "📊 Survey results are in!\n\nMost popular cloud providers 2024:\n1. AWS (34%)\n2. Azure (28%)\n3. GCP (22%)\n4. Others (16%)\n\nWhat's your preferred platform? #Cloud #DevOps",
    time: "2h",
    replies: 234,
    retweets: 567,
    likes: 1023
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Sophie Taylor",
    handle: "sophiedev",
    content: "💡 Quick Tip: Use CSS :has() selector to create powerful parent-child relationships in your styles. Game changer for responsive designs! Example in thread 👇",
    time: "3h",
    replies: 56,
    retweets: 189,
    likes: 678
  },
  {
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop",
    name: "Ryan Park",
    handle: "ryanpark",
    content: "Finally solved that nasty memory leak in our Node.js app! The culprit? Forgotten event listeners 😅 Always remember to clean up your listeners, folks! #NodeJS #JavaScript",
    time: "4h",
    replies: 34,
    retweets: 123,
    likes: 456
  },
  {
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop",
    name: "AI Daily",
    handle: "aidaily",
    content: "🤖 New research shows AI models can now detect code vulnerabilities with 94% accuracy. The future of security scanning is here! Read more: https://example.com/ai-security",
    time: "5h",
    replies: 167,
    retweets: 589,
    likes: 1234
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Maria Garcia",
    handle: "mariagarcia",
    content: "Just gave my first tech talk at @ReactConf! 🎤 Topic: 'Building Accessible React Components'. Slides and demo code will be up soon! #ReactJS #a11y",
    time: "6h",
    replies: 78,
    retweets: 234,
    likes: 890
  },
  {
    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop",
    name: "DevOps Weekly",
    handle: "devopsweekly",
    content: "🔧 New GitHub Actions feature alert!\n\nNow you can reuse workflow runs across repositories. Perfect for microservices architecture! #DevOps #CI/CD",
    time: "7h",
    replies: 45,
    retweets: 178,
    likes: 567
  },
  {
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop",
    name: "Chris Bennett",
    handle: "chriscodes",
    content: "🎉 My open-source project hit 10k stars on GitHub! Thanks to all contributors and users. Here's to the next milestone! ⭐️ #OpenSource",
    time: "8h",
    replies: 123,
    retweets: 456,
    likes: 789
  },
  {
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "WebAssembly Today",
    handle: "wasmtoday",
    content: "🚀 WebAssembly System Interface (WASI) preview 2 is here!\n\nBringing native-like performance to the web. Who's excited? #WebAssembly #WASI",
    time: "9h",
    replies: 89,
    retweets: 234,
    likes: 678
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Database Weekly",
    handle: "dbweekly",
    content: "📊 PostgreSQL 16 features you need to know:\n\n• Improved query parallelism\n• Better JSON performance\n• Enhanced partitioning\n• Logical replication upgrades\n\nWhich one excites you most? #PostgreSQL",
    time: "10h",
    replies: 67,
    retweets: 189,
    likes: 456
  },
  {
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=100&h=100&fit=crop",
    name: "Security Alert",
    handle: "secalert",
    content: "🚨 Critical vulnerability found in popular npm package. Update your dependencies ASAP!\n\nAffected versions: 2.1.0 - 2.1.4\nFix version: 2.1.5\n\n#Security #JavaScript",
    time: "11h",
    replies: 234,
    retweets: 789,
    likes: 1023
  },
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Frontend Focus",
    handle: "frontendfocus",
    content: "🎨 CSS Container Queries are now supported in all major browsers!\n\nTime to rethink component-based responsive design. Tutorial coming soon! #CSS #WebDev",
    time: "12h",
    replies: 56,
    retweets: 178,
    likes: 567
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Mobile Dev Tips",
    handle: "mobiledevtips",
    content: "📱 iOS 18 beta reveals new SwiftUI features:\n\n• Better list performance\n• New animation APIs\n• Improved state management\n• Native split views\n\n#iOS #SwiftUI",
    time: "13h",
    replies: 89,
    retweets: 234,
    likes: 678
  },
  {
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    name: "Performance Tips",
    handle: "perfmatters",
    content: "⚡️ Reduced our Next.js app bundle size by 45%!\n\nKey optimizations:\n• Route groups\n• Dynamic imports\n• Image optimization\n• Tree shaking\n\nFull guide coming soon! #WebPerf",
    time: "14h",
    replies: 123,
    retweets: 456,
    likes: 890
  },
  {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    name: "Test Automation",
    handle: "testauto",
    content: "🧪 Cypress vs Playwright in 2024:\n\nCypress:\n+ Better DX\n+ Easier setup\n- Limited cross-browser\n\nPlaywright:\n+ Full cross-browser\n+ Better parallel running\n- Steeper learning curve\n\nYour preference? #Testing",
    time: "15h",
    replies: 178,
    retweets: 567,
    likes: 923
  },
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Rust Daily",
    handle: "rustdaily",
    content: "🦀 Rust 1.75 highlights:\n\n• Faster compile times\n• Better error messages\n• New standard library features\n• Improved async support\n\nTime to upgrade! #RustLang",
    time: "16h",
    replies: 89,
    retweets: 345,
    likes: 678
  },
  {
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop",
    name: "System Design",
    handle: "systemdesign",
    content: "📚 Free System Design resources:\n\n1. @alexeyguzey's blog\n2. System Design Primer\n3. ByteByteGo newsletter\n4. High Scalability blog\n5. Martin Fowler's articles\n\nBookmark these! #SystemDesign",
    time: "17h",
    replies: 234,
    retweets: 789,
    likes: 1567
  },
  {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "Docker Tips",
    handle: "dockertips",
    content: "🐳 Pro tip: Use multi-stage builds to reduce your Docker image size. Our production image went from 1.2GB to 86MB!\n\nExample Dockerfile in thread 👇 #Docker #DevOps",
    time: "18h",
    replies: 67,
    retweets: 234,
    likes: 567
  },
  {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    name: "GraphQL Today",
    handle: "graphqltoday",
    content: "🎉 GraphQL Yoga 5.0 is out!\n\nNew features:\n• Better error handling\n• Improved subscriptions\n• Enhanced security\n• Better TypeScript support\n\nUpgrade guide: https://example.com/yoga-5 #GraphQL",
    time: "19h",
    replies: 89,
    retweets: 234,
    likes: 678
  },
];