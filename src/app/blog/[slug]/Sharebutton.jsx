"use client";

export default function ShareButton() {
  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: document.title,
        text: "Check out this article!",
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <button className="cta-button" onClick={handleShare}>
      Share Article
    </button>
  );
}
