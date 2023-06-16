const getViews = (video) => {
  const viewCount = video.statistics.viewCount;

  if (viewCount >= 1_000_000) {
    if (viewCount >= 2_000_000) {
      return `${Math.floor(viewCount / 1_000_000)}M `;
    } else {
      return `${(viewCount / 1_000_000).toFixed(1)}M `;
    }
  } else if (viewCount >= 1_000) {
    if (viewCount >= 2_000) {
      return `${Math.floor(viewCount / 1_000)}K `;
    } else {
      return `${(viewCount / 1_000).toFixed(1)}K `;
    }
  } else {
    return viewCount.toString();
  }
};
const getLikes = (video) => {
  const likeCount = video.statistics.likeCount;

  if (likeCount >= 1_000_000) {
    if (likeCount >= 2_000_000) {
      return `${Math.floor(likeCount / 1_000_000)}M `;
    } else {
      return `${(likeCount / 1_000_000).toFixed(1)}M `;
    }
  } else if (likeCount >= 1_000) {
    if (likeCount >= 2_000) {
      return `${Math.floor(likeCount / 1_000)}K `;
    } else {
      return `${(likeCount / 1_000).toFixed(1)}K `;
    }
  } else {
    return likeCount.toString();
  }
};
const getSubscribersCount = (video) => {
  const subscriberCount = video.statistics.subscriberCount;

  if (subscriberCount >= 1_000_000) {
    if (subscriberCount >= 2_000_000) {
      return `${Math.floor(subscriberCount / 1_000_000)}M `;
    } else {
      return `${(subscriberCount / 1_000_000).toFixed(1)}M `;
    }
  } else if (subscriberCount >= 1_000) {
    if (subscriberCount >= 2_000) {
      return `${Math.floor(subscriberCount / 1_000)}K `;
    } else {
      return `${(subscriberCount / 1_000).toFixed(1)}K `;
    }
  } else {
    return subscriberCount.toString();
  }
};
const getTimeDifference = (givenDate) => {
  const now = new Date();
  const targetDate = new Date(givenDate);

  const timeDiff = targetDate.getTime() - now.getTime();

  const diffInMilliseconds = Math.abs(timeDiff);

  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  if (years === 1) {
    return years + ' year ago';
  } else if (years > 1) {
    return years + ' years ago';
  } else if (months === 1) {
    return months + ' month ago';
  } else if (months > 1) {
    return months + ' months ago';
  } else if (days === 7) {
    return (days / 7).toFixed(0) + ' week ago';
  } else if (days > 14) {
    return (days / 7).toFixed(0) + ' weeks ago';
  } else if (days === 1) {
    return days + ' day ago';
  } else if (days > 1) {
    return days + ' days ago';
  } else if (hours === 1) {
    return hours + ' hour ago';
  } else if (hours > 1) {
    return hours + ' hours ago';
  } else {
    return minutes + ' minutes ago';
  }
};
const getDate = (givenDate) => {
  const date = new Date(`${givenDate}`);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};
export { getViews, getTimeDifference, getLikes, getDate, getSubscribersCount };
