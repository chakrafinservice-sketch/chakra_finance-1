"use client";

import { Mail, MailCheck, MailIcon, X } from "lucide-react";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaMailBulk,
  FaMailchimp,
  FaWhatsapp,
} from "react-icons/fa";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const text = `Check out this article: ${shareUrl}`;

  const handleShare = (platform) => {
    let url = "";

    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        break;

      case "email":
        url = `mailto:?subject=${encodeURIComponent(
          title,
        )}&body=${encodeURIComponent(text)}`;
        break;

      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        break;

      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl,
        )}`;
        break;

      default:
        return;
    }

    window.open(url, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Check this article",
          url: shareUrl,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Sharing not supported");
    }
  };

  return (
    <div className="flex gap-3 flex-wrap text-sm">
      <button className="cursor-pointer" onClick={nativeShare}>Share link</button>
    </div>
  );
}
