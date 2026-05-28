import { Component } from 'react';

// react-tweet's enrichTweet throws during render when a tweet's entity data is
// malformed (e.g. a live tweet whose entities arrays are missing). This boundary
// isolates each tweet so one bad tweet can't crash the page, and logs which id
// failed so it can be tracked down and removed from the list.
export class TweetBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(`[Testimonials] Tweet ${this.props.tweetId} failed to render:`, error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
