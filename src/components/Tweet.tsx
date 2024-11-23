import React from 'react';
import { MessageCircle, Repeat2, Heart, Bookmark, Share } from 'lucide-react';

interface TweetProps {
  avatar: string;
  name: string;
  handle: string;
  content: string;
  time: string;
  replies: number;
  retweets: number;
  likes: number;
}

export default function Tweet({ 
  avatar, 
  name, 
  handle, 
  content, 
  time,
  replies,
  retweets,
  likes 
}: TweetProps) {
  return (
    <div className="p-4 border-b border-pink-100 hover:bg-pink-50/50 transition-all duration-200">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-gray-900 hover:underline cursor-pointer">{name}</span>
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline cursor-pointer">{time}</span>
          </div>
          <p className="mt-1 text-[15px] leading-normal text-gray-900 whitespace-pre-wrap">{content}</p>
          <div className="flex justify-between mt-3 max-w-md">
            <button className="tweet-action-button">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{replies}</span>
            </button>
            <button className="tweet-action-button retweet">
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm">{retweets}</span>
            </button>
            <button className="tweet-action-button like">
              <Heart className="w-5 h-5" />
              <span className="text-sm">{likes}</span>
            </button>
            <button className="tweet-action-button">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="tweet-action-button">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}