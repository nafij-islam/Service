'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoTimeOutline, IoChatbubbleOutline, IoShareSocialOutline } from 'react-icons/io5';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface BlogProps {
  onNotify?: (msg: string) => void;
}

const initialBlogData = [
  {
    id: 1,
    title: 'Vestibulum massa arcu, consectetu pellentesque scelerisque.',
    text: 'Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.',
    image: '/images/blog-1.jpg',
    date: '7 March, 2022',
    dateTime: '2022-03-07',
    comments: 15,
  },
  {
    id: 2,
    title: 'Quisque egestas iaculis felis eget placerat ut pulvinar mi.',
    text: 'Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.',
    image: '/images/blog-2.jpg',
    date: '7 March, 2022',
    dateTime: '2022-03-07',
    comments: 24,
  },
  {
    id: 3,
    title: 'Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere.',
    text: 'Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.',
    image: '/images/blog-3.jpg',
    date: '7 March, 2022',
    dateTime: '2022-03-07',
    comments: 18,
  },
  {
    id: 4,
    title: 'Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis.',
    text: 'Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.',
    image: '/images/blog-4.jpg',
    date: '7 March, 2022',
    dateTime: '2022-03-07',
    comments: 32,
  },
];

export default function Blog({ onNotify }: BlogProps) {
  const [blogs, setBlogs] = useState(initialBlogData);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section title fade-in
      gsap.fromTo(
        '.blog .section-title',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Staggered blog cards cascade
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleComment = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    // Micro bounce animation on clicked button
    gsap.fromTo(
      e.currentTarget,
      { scale: 1.35 },
      { scale: 1, duration: 0.4, ease: 'back.out(2)' }
    );

    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, comments: b.comments + 1 } : b))
    );
    if (onNotify) {
      onNotify('Thank you for interacting with this article!');
    }
  };

  const handleShare = async (title: string, e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.fromTo(
      e.currentTarget,
      { rotate: 45, scale: 1.25 },
      { rotate: 0, scale: 1, duration: 0.4, ease: 'back.out(2)' }
    );

    if (typeof window !== 'undefined') {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          if (onNotify) {
            onNotify(`Link for "${title.slice(0, 30)}..." copied!`);
          }
        } else if (onNotify) {
          onNotify(`Sharing "${title.slice(0, 30)}..."`);
        }
      } catch {
        if (onNotify) {
          onNotify(`Sharing "${title.slice(0, 30)}..."`);
        }
      }
    }
  };

  return (
    <section className="section blog" id="blog" ref={sectionRef}>
      <div className="container">
        <h2 className="h2 section-title underline">Our Blog & News</h2>

        <ul className="blog-list" ref={listRef}>
          {blogs.map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <figure className="banner">
                  <Link href="#blog">
                    <Image
                      src={post.image}
                      width={750}
                      height={350}
                      loading="lazy"
                      alt={post.title}
                      className="img-cover"
                    />
                  </Link>
                </figure>

                <div className="content">
                  <h3 className="h3 title">
                    <Link href="#blog">{post.title}</Link>
                  </h3>

                  <p className="text">{post.text}</p>

                  <div className="meta">
                    <div className="publish-date">
                      <IoTimeOutline aria-hidden="true" />
                      <time dateTime={post.dateTime}>{post.date}</time>
                    </div>

                    <button
                      type="button"
                      className="comment"
                      aria-label="Add comment"
                      onClick={(e) => handleComment(post.id, e)}
                    >
                      <IoChatbubbleOutline aria-hidden="true" />
                      <data value={post.comments}>{post.comments}</data>
                    </button>

                    <button
                      type="button"
                      className="share"
                      aria-label="Share article"
                      onClick={(e) => handleShare(post.title, e)}
                    >
                      <IoShareSocialOutline aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
