import { useEffect, useMemo, useState } from "react";
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import certificates from "../data/certificates";

function getDriveFileId(url) {
  if (!url) return "";

  const patterns = [
    /\/file\/d\/([^/]+)/,
    /[?&]id=([^&]+)/,
    /\/open\?id=([^&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return "";
}

function getThumbnailUrl(url) {
  const driveFileId = getDriveFileId(url);

  if (!driveFileId) {
    return url;
  }

  return `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w1600`;
}

function getPreviewUrl(url) {
  const driveFileId = getDriveFileId(url);

  if (!driveFileId) {
    return url;
  }

  return `https://drive.google.com/file/d/${driveFileId}/preview`;
}

export default function Certificates() {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const activeUrl = certificates[activeIndex];
  const thumbnailUrl = useMemo(() => getThumbnailUrl(activeUrl), [activeUrl]);
  const previewUrl = useMemo(() => getPreviewUrl(activeUrl), [activeUrl]);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setImageFailed(false);
    setIsLoading(true);
    setLoadProgress(0);
  }, [activeUrl]);

  useEffect(() => {
    if (!isLoading) {
      setLoadProgress(100);
      return undefined;
    }

    const progressTimer = window.setInterval(() => {
      setLoadProgress((current) => {
        if (current >= 92) return current;
        return current + Math.max(2, Math.round((92 - current) / 8));
      });
    }, 180);

    return () => window.clearInterval(progressTimer);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading || imageFailed) return undefined;

    const fallbackTimer = window.setTimeout(() => {
      setImageFailed(true);
    }, 3000);

    return () => window.clearTimeout(fallbackTimer);
  }, [activeUrl, imageFailed, isLoading]);

  useEffect(() => {
    if (!isLoading) return undefined;

    const stopLoadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => window.clearTimeout(stopLoadingTimer);
  }, [activeUrl, imageFailed, isLoading]);

  if (!activeUrl) {
    return null;
  }

  return (
    <section
      id="Certificates"
      className={`min-h-screen px-4 pb-8 pt-24 transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-4">
        <button
          type="button"
          onClick={goToPrevious}
          className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-200 sm:inline-flex ${
            isDark
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "bg-white text-slate-900 shadow hover:bg-slate-50"
          }`}
          aria-label="Previous certificate"
        >
          <BsArrowLeft className="h-5 w-5" />
        </button>

        <div className="relative flex min-h-[72vh] flex-1 items-center justify-center overflow-hidden">
          {isLoading && (
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center px-6 ${
                isDark ? "bg-slate-950" : "bg-slate-50"
              }`}
            >
              <div className="relative h-16 w-16" aria-label="Loading certificate">
                <div
                  className={`absolute inset-0 animate-ping rounded-full ${
                    isDark ? "bg-cyan-300/10" : "bg-slate-900/10"
                  }`}
                />
                <div
                  className={`absolute inset-0 rounded-full border ${
                    isDark ? "border-cyan-300/20" : "border-slate-300"
                  }`}
                />
                <div
                  className={`absolute inset-1.5 animate-spin rounded-full border-[3px] border-transparent border-t-current border-r-current ${
                    isDark ? "text-cyan-300" : "text-slate-900"
                  }`}
                />
                <div
                  className={`absolute inset-5 animate-pulse rounded-full ${
                    isDark ? "bg-cyan-300/15" : "bg-slate-900/10"
                  }`}
                />
                <div className="absolute inset-0 animate-spin [animation-duration:1.4s]">
                  <div
                    className={`absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full ${
                      isDark ? "bg-cyan-300" : "bg-slate-900"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 animate-spin [animation-direction:reverse] [animation-duration:2.2s]">
                  <div
                    className={`absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${
                      isDark ? "bg-fuchsia-300" : "bg-cyan-600"
                    }`}
                  />
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div
              className={`absolute bottom-2 left-1/2 z-20 h-0.5 w-[min(34rem,82vw)] -translate-x-1/2 overflow-hidden rounded-full ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <div
                className={`h-full transition-all duration-200 ${
                  isDark ? "bg-cyan-300" : "bg-slate-900"
                }`}
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          )}

          <a
            href={activeUrl}
            target="_blank"
            rel="noreferrer"
            className={`absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ${
              isDark
                ? "bg-slate-900/90 text-white hover:bg-slate-800"
                : "bg-white/90 text-slate-900 shadow hover:bg-slate-50"
            }`}
            aria-label="Open certificate in new tab"
          >
            <BsBoxArrowUpRight className="h-5 w-5" />
          </a>

          {imageFailed ? (
            <iframe
              key={activeUrl}
              title="Certificate preview"
              src={previewUrl}
              className={`h-[76vh] min-h-[520px] w-full max-w-5xl rounded-xl ${
                isDark ? "bg-slate-900" : "bg-white"
              }`}
              loading="lazy"
              onLoad={() => {
                setLoadProgress(100);
                setIsLoading(false);
              }}
            />
          ) : (
            <img
              key={activeUrl}
              src={thumbnailUrl}
              alt=""
              className={`max-h-[calc(100vh-8rem)] min-h-0 max-w-full object-contain shadow-2xl ${
                isDark ? "shadow-black/50" : "shadow-slate-300/70"
              }`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onLoad={() => {
                setLoadProgress(100);
                setIsLoading(false);
              }}
              onError={() => {
                setImageFailed(true);
                setIsLoading(true);
              }}
            />
          )}

          <div
            className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-3 sm:hidden ${
              isLoading ? "bottom-10" : "bottom-4"
            }`}
          >
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur"
              aria-label="Previous certificate"
            >
              <BsArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur"
              aria-label="Next certificate"
            >
              <BsArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={goToNext}
          className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-200 sm:inline-flex ${
            isDark
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "bg-white text-slate-900 shadow hover:bg-slate-50"
          }`}
          aria-label="Next certificate"
        >
          <BsArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
