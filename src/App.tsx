import React from 'react';
import Sidebar from './components/Sidebar';
import Column from './components/Column';
import Tweet from './components/Tweet';
import { tweets } from './data/tweets';

const notifications = [
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    name: "John Doe",
    handle: "johndoe",
    content: "liked your tweet about React hooks",
    time: "1h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Jane Smith",
    handle: "janesmith",
    content: "retweeted your post about TypeScript",
    time: "3h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    name: "Nina Rodriguez",
    handle: "ninacodes",
    content: "mentioned you in a tweet about CSS Grid",
    time: "4h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Tech Weekly",
    handle: "techweekly",
    content: "and 5 others liked your tweet about cloud computing",
    time: "5h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Sophie Taylor",
    handle: "sophiedev",
    content: "started following you",
    time: "6h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop",
    name: "Ryan Park",
    handle: "ryanpark",
    content: "added you to their list 'Top Developers'",
    time: "7h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop",
    name: "AI Daily",
    handle: "aidaily",
    content: "quoted your tweet about machine learning",
    time: "8h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Maria Garcia",
    handle: "mariagarcia",
    content: "liked and retweeted your post about accessibility",
    time: "9h",
    replies: 0,
    retweets: 0,
    likes: 0
  }
];

const messages = [
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    name: "John Doe",
    handle: "johndoe",
    content: "Hey, wanted to discuss the new project. Are you available for a quick call?",
    time: "30m",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Jane Smith",
    handle: "janesmith",
    content: "Thanks for the code review! I've addressed all the comments.",
    time: "1h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    name: "Nina Rodriguez",
    handle: "ninacodes",
    content: "Would you be interested in collaborating on a CSS Grid course? Your recent tweets about layout systems were inspiring!",
    time: "2h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Tech Weekly",
    handle: "techweekly",
    content: "We'd love to feature your recent work in our next newsletter. Could you share some details about your latest project?",
    time: "3h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Sophie Taylor",
    handle: "sophiedev",
    content: "Just saw your talk at ReactConf - brilliant insights on component architecture! Would love to exchange ideas sometime.",
    time: "4h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop",
    name: "Ryan Park",
    handle: "ryanpark",
    content: "That memory leak solution you shared saved our sprint! Quick question: how do you handle cleanup in custom hooks?",
    time: "5h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop",
    name: "AI Daily",
    handle: "aidaily",
    content: "We're putting together a panel on AI in web development. Would you be interested in participating? DM if you'd like more details!",
    time: "6h",
    replies: 0,
    retweets: 0,
    likes: 0
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Maria Garcia",
    handle: "mariagarcia",
    content: "Your accessibility tips have been super helpful! Quick question about ARIA labels in dynamic content...",
    time: "7h",
    replies: 0,
    retweets: 0,
    likes: 0
  }
];

function App() {
  return (
    <div className="flex min-h-screen bg-pink-50">
      <Sidebar />
      <div className="flex flex-1 overflow-x-auto">
        <Column title="Home">
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </Column>
        <Column title="Notifications">
          {notifications.map((notification, index) => (
            <Tweet key={index} {...notification} />
          ))}
        </Column>
        <Column title="Messages">
          {messages.map((message, index) => (
            <Tweet key={index} {...message} />
          ))}
        </Column>
      </div>
    </div>
  );
}

export default App;