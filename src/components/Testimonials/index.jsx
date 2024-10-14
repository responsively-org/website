import { useState, useEffect } from 'react';
import { Tweet } from 'react-tweet';
import { Container } from '@/components/Container';
import { Button } from '../Button';

const tweets = [
  '1278606838070534149',
  '1264805970649194502',
  '1264935778557341696',
  '1301541350601633796',
  '1299048282069467136',
  '1298704840718196738',
  '1351174243086708746',
  '1618231342411698177',
  '1263688081900625928',
  '1288448878291935232',
  '1316766116841103364',
  '1265940953338130432',
  '1273854712677314561',
  '1681099100366708736',
  '1299887174838517763',
  '1361705139283898374',
  '1306880524766638083',
  '1264291435173629958',
  '1394871939605348352',
  '1588130688452157440',
  '1660872526434652162',
  '1645844479390384132',
  '1400212191857442817',
  '1696537206347952248',
];

export function Testimonials() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const wasMobile = isMobile;
      const isCurrentlyMobile = window.innerWidth < 768;

      // Update the mobile state if it has changed
      setIsMobile(isCurrentlyMobile);

      // Only reset showAll if transitioning between mobile and desktop
      if (wasMobile !== isCurrentlyMobile) {
        setShowAll(false);
      }
    };

    // Initial call to set the state based on current window size
    handleResize();

    window.addEventListener('resize', handleResize);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const visibleTweetsCount = isMobile ? (showAll ? tweets.length : 8) : tweets.length;

  const toggleTweets = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by developers worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Here’s what some of our users have to say about Responsively.
          </p>
        </div>
      </Container>
      <div className="mx-auto mt-16 max-w-2xl px-8 sm:px-8 lg:mt-20 lg:max-w-none">
        <div className="masonry sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6">
          {tweets.slice(0, visibleTweetsCount).map((tweetId) => (
            <Tweet key={tweetId} id={tweetId} />
          ))}
        </div>

        {isMobile && (
          <div className="mt-8 text-center">
            <Button 
              variant="solid" 
              color="green" 
              onClick={toggleTweets}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
